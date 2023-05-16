---
title: 'Block Production'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -99
---

# Block Production

Block production is the base function for the network. 

Each Block Producer is either producing or is on standby, waiting in the wings in case a producing team needs to be swapped out.

The production schedule decides in which order that the network sends transactions to a BP’s node. In a traditional EOSIO network, this order is decided by the token holders voting the Block Producers up and down the ranks. In Ultra’s network, we tightly control the production schedule and optimize it to increase the network’s throughput.

Typically, EOSIO-based networks have 21 producing BPs and many more in standby. Ultra currently has 7 producing BPs, and none in standby. 

The default block time is 500ms, meaning that a new block is produced by the network twice a second.

**Ultra Block Production Strategy**

![](/images/ultra-bp-production.jpg)