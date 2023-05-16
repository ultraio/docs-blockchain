---
title: 'Environments'
deploy: ['staging', 'mainnet']
order: -9992
outline: [0,4]
---

# Environments

Environments are specific locations where you can perform tests against your smart contracts, and applications.

There are three environments; local, testnet, and mainnet.

[See this API section](../../api/index.md) for information on block producer endpoints that are publicly available.

## Local

The local environment is where you are browsing this documentation from.

You would be running code against your local machine on a blockchain that is also running on your local machine.

In the case of `cleos` you would not provide any `-u` parameters to target your own local blockchain inside of a docker image.

### Why use local?

* Just beginning smart contract development.
* Need to test and write tests before full deployment.
* Easy way to start and stop a blockchain and restart from zero each time.

## Test Network

The test network environment is where you want to deploy your smart contract after going through general testing.

This should be the first place you will want to deploy your smart contract for other users to interact with.

## Why use Testnet?

* Ready to deploy smart contracts to other users.
* Begin getting feedback in a public manner.
* Begin writing frontend for your decentralized application.
* Need a way for others to easily interact and test your smart contract.

Go to the [faucet documentation page](../Ultra%20Specific/faucet.md) to start working with testnet.

## Main Network

The main network environment is when you want to partner with ultra to get your smart contract deployed to the world.

This is the stage where you have a smart contract, you have had that contract audited, you have an application, and you want to get it into ultra ecosystem for everyone to interact with.

## Why use Mainnet?

* Ready to go live with your smart contract.
* Smart contract has already been audited.
* Optional frontend application is ready to be used.
