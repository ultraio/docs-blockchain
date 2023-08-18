---
title: 'Development Environment'
deploy: ['staging', 'mainnet']
order: 2
outline: [0, 4]
---

# Development Environment

Ultra provides a development enviroment that runs inside of a docker image.

This means that you do not have to compile any software to get your system into a state which you can run the required commands to achieve your goal. Instead, you'll be using our image to run the special software that Ultra uses to process transactions on our networks.

## 1. Docker

You'll be using docker to run the necessary commands. We already have a great guide for how to set this up [that you can refer to](../Docker/getting-started.md).

Once you have Docker installed, the Ultra image downloaded, and you've run the script to enter it, you can continue.

## 2. Setting up your Wallet

Next you will need to set up your local wallet, which will house your private key and allow you to sign transactions on any network. You will have to generate keys locally. These will be used in the next step where you associate those keys with the Testnet account that you will be creating. [A quick guide on how to do this is located here](../Basics/creating-a-wallet.md).

## 3. Testnet Account

Lastly, you will need a [Testnet account](https://faucet.testnet.app.ultra.io/) which will be the authorizing account that creates the Token Factory and mints the transactions. While you are creating your account, make sure to get tokens for use on Testnet. You'll need these to create Token Factories and Mint tokens.

To set up your account, you can follow [this easy to understand guide](../Basics/create-a-testnet-account.md). You will need docker set up to create your keys, so make sure that you've completed the previous step.
