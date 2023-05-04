---
title: 'Nodeos Usage'
deploy: ['staging', 'mainnet']
order: -9996
outline: [0,4]
---

# Nodeos Usage

Nodeos is the core blockchain component used to sync blocks and provide consensus and state management. It's a tool that allows you to develop smart contracts on the ultra blockchain network.

## Who is it for?

* Smart contract developers
* Producing blocks, and being a Block Producer
* Replicating Staging and Production networks locally

## Obtaining Nodeos

We have created a Docker image that has pre-created scripts, tools, and pre-packaged binaries. Nodeos is already included inside of the Docker image.

Individual binaries are not currently available for download.

[Docker Image Usage](./docker-image-usage.md)

## Usage

Inside the Docker Container the following can be executed for general usage.

```sh
nodeos --help
```

![](/images/nodeos-help-output.png)

### Starting a Chain

Starting a chain straight from the binaries can be a daunting task; but just getting the basic startup without any additional `smart contract` deployment.

Assume the following file structure:

```sh
| eosio/
|    ├── config/
|    │   ├── config.ini
|    │   └── genesis.json
|    └── data/
|        └── blocks/
```

A fresh chain can be started by running the following command.

```sh
nodeos --genesis-json eosio/config/genesis.json \
    --config-dir eosio/config \
    --data-dir eosio/data \
    --blocks-dir eosio/data/blocks \
    --producer-name eosio
```

Once the above command is ran, it will use the directories `config`, `blocks`, and `data` to store the various chain data and you should see `eosio` as the producer who is producing blocks.

### Restarting the Chain

If the chain has already started you can simply use the **above command** once again to completely restart the chain. Restarting with the same command will use the same blocks from the previous session.

### Wiping the Chain

When stopping the chain, you may wish to restart the chain again with new blocks. Simply run the command below to the wipe the chain. Adjust the command as needed for your folder structure.

**Terminal Commands in Docker Container**

```sh
rm -rf /opt/eosio/data/blocks && \
  rm -rf /opt/eosio/data/snapshots && \
  rm -rf /opt/eosio/data/state && \
  rm -rf /opt/eosio/data/config/protocol_features && \
  rm -rf /opt/eosio/data/eosio
```

_After next startup your blocks should start at #1_

### Before Synchronizing Nodeos

There are a few standard rules you should be aware of...

* You should all be using the same `genesis.json`
* Synchronizing Nodes CAN take a long time...
  * You should probably get a snapshot, and load from snapshot
  * You should probably get a blocks.log, and load from blocks.log
  * Both of these will speed up synchronization time but are not required
* APIs can connect to block producers and other APIs
* Block producers should only connect to other block producers but allow only their own APIs in to expose them to the outside world.

_This is a format that almost all block producers today currently use._


## Configuration Files

**genesis.json**

This file is necessary to set the intitial chain parameters that can be found inside of the `eosio` `global` table for a fully launched chain. Its entire purpose is to tell the protocol how it should be producing blocks, and the restrictions for producers.

```json
{
  "initial_timestamp": "2018-09-01T12:00:00.000",
  "initial_key": "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
  "initial_configuration": {
    "max_block_net_usage": 1048576,
    "target_block_net_usage_pct": 1000,
    "max_transaction_net_usage": 524288,
    "base_per_transaction_net_usage": 12,
    "net_usage_leeway": 500,
    "context_free_discount_net_usage_num": 20,
    "context_free_discount_net_usage_den": 100,
    "max_block_cpu_usage": 20000000,
    "target_block_cpu_usage_pct": 1000,
    "max_transaction_cpu_usage": 15000000,
    "min_transaction_cpu_usage": 100,
    "free_cpu_basis_point": 6000,
    "free_net_basis_point": 6000,
    "ultra_veto_enabled": 1,
    "max_transaction_lifetime": 3600,
    "deferred_trx_expiration_window": 600,
    "max_transaction_delay": 3888000,
    "max_inline_action_size": 524287,
    "max_inline_action_depth": 10,
    "max_authority_depth": 10
  }
}
```

The `EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV` public key is a **PUBLICLY KNOWN KEY. THIS SHOULD NOT BE USED IN PRODUCTION.**

Private Key: `5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3`

**config.ini**

Defines various configurations required by `nodeos`.

The standard configuration that Ultra uses in its test environments is the following:

```ini
# Required Configurations for Ultra
agent-name = "Producer"
enable-stale-production = true
pause-on-startup = false
http-max-response-time-ms = 30000
max-transaction-time = 300000
http-validate-host = false
chain-state-db-size-mb = 4096
chain-state-db-guard-size-mb = 256
max-clients = 50

# Print contract debugging to console
contracts-console = true

# What other peers should use to connect to you
# Ideally leave these addresses as 0.0.0.0, and only change ports.
http-server-address = 0.0.0.0:8888
p2p-listen-endpoint = 0.0.0.0:9876

# What other peers you want to connect to
# This is only required if you have another peer to connect to
#p2p-peer-address = 0.0.0.0:9877

# Allow access from browser
access-control-allow-origin=*

# Plugins that nodeos should be using
plugin = eosio::net_api_plugin
plugin = eosio::http_plugin
plugin = eosio::producer_plugin
plugin = eosio::producer_api_plugin
plugin = eosio::chain_api_plugin
```

### Synchronizing Nodeos as an API

Connecting to an existing API can be done with the following configurations.

**Custom Configuration**

The configuration to use for the API is a bit different than a `producer` configuration. Here's an example API configuration.

Save this under a folder called `config/api/config.ini`

```ini
chain-state-db-size-mb = 4096
chain-state-db-guard-size-mb = 256

agent-name = "API"

max-clients = 50
p2p-max-nodes-per-host = 10

# Your HTTP Endpoint for the API
http-server-address = 0.0.0.0:8888

# Your p2p Endpoint for Others to Connect To
p2p-listen-endpoint = 0.0.0.0:9876

# Nodes to Connect To - Adjust This
p2p-peer-address = 1.2.3.4:9876
p2p-peer-address = 5.6.7.8:9876

# All the Plugins Needed for an API
plugin = eosio::history_api_plugin
plugin = eosio::chain_api_plugin

http-validate-host = false

access-control-allow-origin = *
access-control-allow-headers = *
access-control-allow-credentials = true
```

**Starting the API Node**

Depending on the directories, and folders you will want to adjust the following command accordingly.

```sh
nodeos --disable-replay-opts && \
  --data-dir /opt/eosio/data && \
  --config-dir /opt/eosio/data/config/api && \
  -c /opt/eosio/data/config/api/config.ini
```

### Synchronizing Nodeos as a Producer

The above `genesis` node or `existing nodes` need to have ports exposed to the outside world. We assume that a producing node has already exposed their ports.

**Custom Configuration**

The configuration you will want to use for the API is a bit different than a `genesis` configuration. Here's an example API configuration.

Save this under a folder called `config/producer/config.ini`

```ini
agent-name = "Producer"
max-clients = 50
p2p-max-nodes-per-host = 10
chain-state-db-size-mb = 4096
chain-state-db-guard-size-mb = 256

# What ports you are exposing to the outside world...
http-server-address = 0.0.0.0:8888
p2p-listen-endpoint = 0.0.0.0:9876

# Who you are peering with
p2p-peer-address = 10.20.1.1:9876
p2p-peer-address = 10.20.2.1:9876

enable-stale-production  = true
pause-on-startup = false

max-transaction-time = 5000
http-max-response-time-ms = 30000

# This is your producer name, you should change this and register it if you are not a genesis node.
producer-name = someproducer1

# Ensure you replace SOME_PUBLIC_KEY_HERE & SOME_PRIVATE_KEY_HERE
signature-provider=SOME_PUBLIC_KEY_HERE=KEY:SOME_PRIVATE_KEY_HERE

# All the Plugins Needed for a Producer
plugin = eosio::chain_api_plugin
plugin = eosio::net_api_plugin
plugin = eosio::producer_api_plugin
plugin = eosio::chain_plugin
plugin = eosio::producer_plugin
```

**Starting the Producing Node**

Depending on the directories, and folders you will want to adjust the following command accordingly.

```sh
nodeos --disable-replay-opts && \
  --data-dir /opt/eosio/data && \
  --config-dir /opt/eosio/data/config/producer && \
  -c /opt/eosio/data/config/producer/config.ini
```

## Closing Remarks

It's good to get familiar with working with nodeos and for most development purposes you will only need to start / stop the `nodeos` process to set / clear contracts. Otherwise, nodeos is a powerful tool used for synchronizing block producers and quickly setting up your very own test network.
