---
title: '4. Deploy Smart Contract'

outline: [0,5]
order: -96
---

# Deploy Smart Contract

Once you have an `abi` and `wasm` file for a contract you are ready for deployment.

## Create a Wallet

You can create a wallet through [Ultra.io Smart Contract Toolkit](https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp).

Using the Command Palette (F1), type `Ultra: Create Wallet`.

You can also use `Ultra: Create Wallet - Create Key` to generate a private key in console

Take note of both your `private key` and `public key`.

**You will need your public key after importing**.

- Fill out the password fields
  - This will be used to unlock your wallet
- Fill out the private key field

Wallet will tell you the account creation was successful in the bottom-right upon completion.


## Creating a Test Network Account

You will need a test network account on a supported blockchain to deploy a contract and test it.

::: details Local Environment

1. Generate new key using Smart Contract Toolkit or [cleos](../../blockchain/general/tools/cleos.md)
2. Start ultratest in detached mode using [docker image usage](../../tutorials/docker/docker-image-usage.md)

```
ultratest -Dsn
```

3. Create new account
```
cleos system newaccount ultra.eosio test YOUR_PUBLIC_KEY --transfer --gift-ram-kbytes 1024000 -p ultra.eosio
```

4. Deploy your contract using instructions below

:::

::: details Ultra Testnet
1. Use ultra <a href="https://faucet.testnet.app.ultra.io/">faucet</a> to create an Ultra Pro Wallet and receive tokens. Use the key from the step of creating a wallet
2. Open VSCode and Command Palette (F1) and type `Ultra: Create Transaction`
3. Select Ultra Testnet
4. Enter Wallet Password
5. Lookup eosio and select action `buyrambytes`
6. Look at your .wasm file properties to determine the RAM you need. Buy extra for storing table data. You will want to lookup the total amount of bytes your .wasm file has. For small contracts 65356 bytes should be sufficient
7. Fill out the form, and buy some RAM. payer and receiver should be the same.
8. Ensure that the transaction is successful
:::

::: details Ultra Mainnet
TODO: use wallet extension
1. Download <a href="https://chrome.google.com/webstore/detail/ultra-wallet/kjjebdkfeagdoogagbhepmbimaphnfln">Ultra Wallet extension</a>
2. Create an Ultra Pro Wallet using the Ultra Wallet extension <a href="../fundamentals/how-to-create-ultra-pro-wallet.md">tutorial</a>
3. Use ultra <a href="https://toolkit.ultra.io/contract?actions=newnonebact,buyrambytes">toolkit</a> to to buy RAM. Log in with your Ultra Pro Wallet. Transfer UOS to this account if needed
:::

## Deploy Contract

Using the Command Palette (F1), type `Ultra: Deploy Contract`.

Select the contract you want to deploy.

![](./images/select-contract-to-deploy.png)

Select the endpoint you want to deploy to.

![](./images/select-network.png)

Enter your wallet password.

Type in the `account` you have access to on the network you have picked.

If successful you will see the smart contract has been deployed in the output window.

## Redeploy Smart Contract

After you've done some changes to your contract you will need to build it again and redeploy

Redeploying the contract is identical to the first time you've deployed the contract. Just follow the above instructions and use the same account to deploy to

VSCode extension will deploy both ABI and WASM files so there is no manual action needed to redeploy both

# Environments

Environments are specific locations where you can perform tests against your smart contracts, and applications.

There are three environments; local, testnet, and mainnet.

[See this API section](../../products/chain-api/index.md) for information on block producer endpoints that are publicly available.

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

### Why use Testnet?

* Ready to deploy smart contracts to other users.
* Begin getting feedback in a public manner.
* Begin writing frontend for your decentralized application.
* Need a way for others to easily interact and test your smart contract.

Go to the [faucet documentation page]() to start working with testnet.

## Main Network

The main network environment is when you want to partner with ultra to get your smart contract deployed to the world.

This is the stage where you have a smart contract, you have had that contract audited, you have an application, and you want to get it into ultra ecosystem for everyone to interact with.

### Why use Mainnet?

* Ready to go live with your smart contract.
* Smart contract has already been audited.
* Optional frontend application is ready to be used.
