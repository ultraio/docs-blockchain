---
title: 'Launch Procedure Concepts'

outline: [0,4]
order: -99
---

# Launch Procedure Concepts

## What is a genesis node?

The genesis node, on an Antelope network, is the first node that sets up the network and produces the first blocks. It is responsible for setting up the system contracts, registering the first batch of Block Producers on the network, and passing the block production on to them.

In short, the genesis node starts the network and then passes off responsibility to the Block Producers. The genesis will eventually shut itself down after the responsibility is passed off to the Block Producers to keep the network running.

## How will Ultra set up their genesis node?

Ultra will be responsible for setting up their genesis node with a handful of contracts. Ultra will also be responsible for ensuring the genesis node is synchronized to our block producers through their wire-guard configurations. We will also be provided a modified version of the `genesis.json` file for our block producers to utilize when they are booting up their individual nodes.  
  
Here’s a list of smart contracts that will be deployed by Ultra’s genesis node and what their general functionality will provide. Additional contracts that Ultra will utilize will be launched by Ultra at future dates once the chain’s responsibility has been passed on.

#### eosio.system

This contract will provide the creation of user-owned accounts, distribution of chain resources such as RAM, CPU, and NET, and maintain the block producer schedule. Which you can find more about below.

#### eosio.token

This contract will provide the ability for users and ultra alike to create fungible tokens such as **UOS** which will be the chain’s main currency. Unlike other chains, Ultra makes it much easier to deploy a currency without having to redeploy the entire `eosio.token` contract.

#### eosio.msig

This contract provides a way for multiple users to sign single or multiple transactions that need approval from multiple users. This multi-signature contract is great for handling permissions between a single account that needs approval from multiple accounts before an action may be executed.

## The Block Producer Schedule

### How many Block Producers will there be on the Ultra Blockchain?

There will initially be five Block Producers on the Ultra Blockchain.

### Who defines the Block Producer schedule?

During the initial Testnets and Mainnet, it will be Ultra who is defining the Block Producer schedule. There is not an ordered, elected ranking like on other Antelope chains. There is no voting for Block Producers.

### What will be the procedure for changes to the block producer schedule?

Changes to the block producer schedule will be announced on-chain and Block Producers will need to approve the change. This will happen when a Block Producer leaves the chain, or a new one is added.