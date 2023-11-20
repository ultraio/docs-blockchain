---
title: 'Overview'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -99
---

# Infrastructure Overview

## Introduction

This section will guide you through the setup of the infrastructure of your Block Producer. Here you should find the most relevant information on how to set up, configure, and run your Block Producer nodes. Pay close attention to the security tips below and make sure to always exchange information with other Block Producers using the private Slack channel that Ultra provides.

**The infrastructure proposal that we expect Block Producers to follow**

![](/images/secure-infrastructure.png)

## Layer 1: Producing Nodes

These nodes communicate using Wireguard. These nodes should be protected from other Block Producers using API nodes. The Producer Control Switch is a device (normally a PC) that has exclusive access to the Producers. It's function is to access the Producer's plugins like net\_api\_plugin, in order to do operations like stop or pause a producer, switch to the fail-over producer, check the producer status, check the peers status, and other very important actions related to the producer management.

## Layer 2: Relay Nodes

Full nodes to relay blocks, connected to the producing nodes and to other Block Producers via Wireguard. They should also be protected by API nodes.

## Layer 3: API Layer

API layer where Proxy Servers (web firewalls) filter requests using [Patroneos](https://github.com/EOSIO/patroneos). These add an extra layer of protection against malicious or malformed data, as well as against volumetric attacks.

## Layer 4: Load Balancer

Through the Load Balancer incoming API calls are routed to Layer 3 web firewalls.

It is important to note that Antelope software is not good at handling multiple connections. That is why it's important to use API nodes on layers 1 and 2 to communicate with other Block Producers. You should also consider using a load balancer like a [HaProxy](http://www.haproxy.org/) to better handle the connection between your API nodes and other Block Producers.