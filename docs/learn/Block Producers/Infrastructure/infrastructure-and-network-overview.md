---
title: 'Infrastructure and Network'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -94
---

# Infrastructure and Network Overview

## Network Schema

The diagrams below show how a network should be set up based on the architectural guidelines.

### Connection Types Legend

These are the connection types used in the following diagrams.

![](/images/network-infrastructure.png)

### Overall Network Topology

The following overall network topology hides some details to give a focus on the big picture.

![](/images/nodeos-infrastructure.png)

### A single cluster of producing infrastructure from a block producer

Here is a more detailed view of a single cluster, which has its API machines connected to a load balancer via an HTTP connection and its producing machines connected via a Wireguard/VPN connection.

![](/images/vpn-network.png)

### A link to the miro board with more details

[https://miro.com/app/board/o9J\_koVWOmk=/](https://miro.com/app/board/o9J_koVWOmk=/)

## Summary

A cluster in the diagram above corresponds to the infrastructure that each partner Block Producer is expected to set up on their side. This document aims to walk you through the steps required to achieve this. A Block Producer can use the [Minimum recommended infrastructure](./minimum-recommended-infrastructure.md) as a guide for what kind of hardware Ultra currently requires. As the Mainnet grows and scales, this configuration is likely to change over time and require an infrastructure upgrade.

### Connection type

Some connections are **block-only** to prevent unnecessary transaction propagation and reduce the chance of send duplicate transactions. e.g. connections between the API nodeos.

### API nodeos configuration

API nodeos doesn't accept p2p transactions, that is **p2p-accept-transactions = false**, to prevent a transaction is sent from a producing nodeos to its own API nodeos.

## Guide for adding more BPs into the schema

### Peer numbers

The maximum peer limits for any producing nodeos is 10 for performance reasons. Normally, it connects to 5 other nodeos in the following priority.

1.  Previous and next producer nodeos in the production schedule
    
2.  Connect to other 3 producer nodeos from the rest producers, based on lower latency first rule.
    
### Hop numbers

Basically, one hop means from one nodeos to another nodeos. The network schema should minimize the hops between the producing nodeos. Ideally, all producing nodeos should connect to each other directly, so a block can be sent to other Block Producers with the smallest delay. However, since there's the recommended maximum 10 peers limit, it’s impossible to do that. Instead, the network schema should try to limit the hops between the producing nodeos to the smallest number of hops possible. With 5 Block Producers, we can connect each producing nodeos directly, i.e one hop. With 8 Block Producers, we can limit it to 2 hops between the producing nodeos.

## Adding more API nodeos

Conditions on adding more API nodeos

*   There is a high number of HTTP requests that transactions can’t get a response in time, e.g. 2 seconds
    
*   There is a high number of public peers that would break the maximum peer limit.  
    
## Load Balancer

It’s recommended to use HAProxy for both HTTP and TPC load balancer.