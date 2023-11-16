---
title: 'Backup and Recovery'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -97
---

# Backup and Recovery

Nodeos provides various options for replaying blockchain blocks. This can be very useful to recover a node instance from some failure as it can quickly catch up with the network instead of having to synchronize from the p2p network.

Replaying data can be done in two ways:

*   **From a blocks.log file**  
    The blocks log file contains all irreversible transactions on the blockchain. All instances of nodeos write irreversible blocks to the blocks.log file, which is located data/blocks directory relative to the nodeos data directory. Using a blocks.log file to replay will allow you to start a nodeos instance which recreates the entire history of the blockchain locally, without adding unnecessary load to the network.
    
*   **From a snapshot file**  
    Snapshot files can be created from a running nodeos instance. The snapshot contains the chain state for the current head block. Snapshot files should only be used if the head block they represent is irreversible. Using a snapshot file to replay allows you to quickly start a nodeos instance which has a full and correct chain state at a specified block number, but not a full history of transactions up to that block number. From that point on the nodeos instance will operate in the configured manner.
    

**Ultra provides two scripts:** 

*   **Nodeos-launcher script:** start your node and do automatically recovering from failures. 
    
*   **Snapshot-creator script:** responsible for making regular snapshots. 
    

It is important for you to understand how the process works so we will go over these two ways in detail.

## Getting a blocks.log file

The blocks.log file is used by nodeos to persist irreversible blocks. The default location for this file is in the data/blocks directory. However, the data directory can be specified using the -d \[ --data-dir \] option on the nodeos command line

You can also download a block.log file from other Block Producers over the network.

## Replay from blocks log

Once you have a copy of the blocks.log file which you wish to replay the blockchain from, copy it to your data/blocks directory. You should back up any existing contents of this directory if you wish to keep them. After that, start nodeos with one of the following replay-blockchain options:

```typescript
--replay-blockchain
```

This option tells nodeos to replay from the blocks.log file located in the data/blocks directory. Nodeos will clear the chain state and replay all blocks.

```typescript
--hard-replay-blockchain
```

This option tells nodeos to replay from the blocks.log file located in the data/blocks directory. Nodeos makes a backup of the existing blocks.log file and will then clear the chain state and replay all blocks. This option assumes that the backup blocks.log file may contain corrupted blocks, so nodeos replays as many blocks as possible from the backup block log. Nodeos will then synchronize the rest of the blockchain from the p2p network.

| location               | name               | action                                                   |
| ---------------------- | ------------------ | -------------------------------------------------------- |
| data/blocks            | blocks.index       | remove                                                   |
| data/blocks            | blocks.log         | replace this file with the blocks.log you want to replay |
| data/blocks/reversible | forkdb.dat         | remove                                                   |
| data/blocks/reversible | shared_memory.bin  | remove                                                   |
| data/blocks/reversible | shared_memory.meta | remove                                                   |


You can use blocks-dir = "blocks" in the configuration file or using the

```typescript
--blocks-dir
```

command-line option, to specify where to find the blocks.log to replay.

## Triggering the creation of a snapshot

Snapshots can be created at runtime using the RPC available through the Producer API plugin. For example:

```typescript
http://you_server:your_http_port/v1/producer/create_snapshot
```

Will create a snapshot of the data/snapshots directory.

Replay from snapshot

Once you have a copy of a valid snapshot file from which you wish to create a valid chain state, copy it to your data/snapshots directory, backing up (if you wish to keep them), and removing any existing contents of the data directory. After that, start nodeos with the

```typescript
-snapshot
```

option to specify the name of the snapshot to replay.

When replaying from a snapshot file it is recommended that all existing data is removed, however, if a blocks.log is provided it must at least contain blocks up to the snapshotted block and may contain additional blocks that will be applied as part of the startup. If a blocks.log file exists, but does not contain blocks up to and/or after the snapshotted block then replaying from a snapshot will create an exception. Any available reversible blocks will also be applied.

| blocks.log               | snapshot                    | action                                                 |
| ------------------------ | --------------------------- | ------------------------------------------------------ |
| no blocks.log            | for irreversible block 2000 | ok                                                     |
| contains blocks 1 - 1999 | for irreversible block 2000 | exception                                              |
| contains blocks 1 - 2001 | for irreversible block 2000 | ok - will recreate from snapshot and 'play' block 2001 |

When instantiating a node from a snapshot, it is illegal to pass in any _genesis_ arguments as that information is loaded from a snapshot. If a blocks.log exists, the genesis information it contains will be validated against the genesis data in the snapshot will throw an error if they are not consistent.

**Note**  
Instantiating a node from a snapshot without a blocks.log file is valid but it will create a partial blocks.log which will affect the ability to service any requests for block data as it will not be available.

## Calculating an integrity hash

Integrity hashes are a way of comparing the contents of the blockchain state database. They consist of a sha256 hash of a deterministic binary representation of all consensus affecting state and can be retrieved at runtime using the RPC available through the Producer API plugin. For example:

```typescript
http://you_server:your_http_port/v1/producer/get_integrity_hash
```