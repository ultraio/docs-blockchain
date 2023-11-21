---
title: 'Upgrade Procedures'

outline: [0,4]
order: -95
---

# Upgrade Procedures

This chapter explains how to upgrade the infrastructure, nodeos software, and the consensus protocol (hard fork).

## Infrastructure upgrade

As the UOS Mainnet grows and scales, the minimum infrastructure configuration is likely to change over time and require upgrades.

If your BP is running the [Minimum Infrastructure](../infrastructure/minimum-recommended-infrastructure.md) specified by Ultra, the first thing that a Block Producer should do is to split their nodes into separate instances. There will then be dedicated instances for each kind of node. Ex.: Create a new instance for seed node, and 2 other instances for the API nodes.

Creating a powerful instance and keeping the same architecture, running all nodes in the same instance, is also a possibility. IO operations and not processor speed is the most critical component in maintaining a healthy cluster of API nodes as well as producer node. Moving to a bare-metal infrastructure or a hybrid infrastructure model across bare-metal and cloud services should be a good option to improve a Block Producer’s performance.

Regardless of specific infrastructure strategies, the upgrade process is the same. Here are the steps:

1.  Create a new instance based on the Block Producer needs. Eg: with more RAM, more CPU, or more storage.
    
2.  Set up the instance for the kind of node that is supposed to run (API, Seed, or Producer).
    
3.  Sync it to the network
    
4.  Perform connectivity and performance tests (please refer to the [Finishing up](../launch-procedures/finishing-up.md) section)
    
5.  Switch to the new instance
    
6.  Turn off the old instance
    

## Nodeos upgrade

Nodeos software is in constant development, so upgrading it is a regular activity that Block Producers will have to do. It's very important to stay updated and running the latest nodeos software version to provide the best services for Ultra users.

If it is a major update that requires a hard fork, please refer to the **Consensus protocol upgrade** section below. The steps for moving to a new version of nodeos software released are: 

1.  It is indicated to first build, install, and run it in a local machine to check if everything is working properly. 
    
2.  Build it in the node's instance or transfer the binaries built on step 1.
    
3.  Create a new folder for the binaries. It's very important to keep the running version of nodeos, to play it back in case of errors switching to the new one.
    
4.  The process of upgrading nodeos is quite simple, just edit the start.sh script and point the nodeos path to the new folder.
    

A good practice is to first upgrade the seed node because it's easier and faster to restore in case of any problems and you don't compromise the producer and your API service. After, you should upgrade the APIs, each at once, and finally, the producer. If the Block Producer has a producer node as a backup, switch to the backup producer, do the upgrade and switch back to the upgraded node. If not, producer nodes can do upgrade during a time window after they finished the last block and wait for the next turn. Block Producers make several blocks at a time, so they mostly wait until all other Block Producers complete their work. It should be enough time to stop and switch to the new version.

## Consensus protocol upgrade

If a release has major enhancements and a new consensus protocol feature has been introduced which requires changes to the protocol rules and alignment by block producing nodes for the upgrade to be successfully deployed, Ultra will provide detailed instructions on how to proceed to all Block Producers for each case. 

It's important to remember that before deploying these upgrades to the official network, each protocol upgrade feature should be deployed and verified on the Testnet. This test upgrade process can give Block Producers the practice by carrying out the steps necessary to successfully coordinate the activation of each feature.

For more information about it, click [here](https://developers.eos.io/eosio-nodeos/docs/consensus-protocol-upgrade-process).