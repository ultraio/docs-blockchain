---
title: 'Launching an Instance'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -98
---

# Launching an Instance

Before the nodeos launcher script is executed, it is important to create a wallet using _cleos_. The wallet will import and maintain all the keys that shall be required by the Block Producer. It is important that all the private keys generated in the [Account Administration](./account-administration.md) section are imported to this wallet. The commands for creating a wallet and importing the keys are given below.

```typescript
cleos wallet create --name YOUR_WALLET_NAME --file WALLET_PASSWD_FILE
cleos wallet import --name YOUR_WALLET_NAME --private-key YOUR_PRIVATE_KEY
```

**Please note** that it is not a requirement to run _cleos_ and have a wallet on all of the node instances, however, this is a _requirement_ for [Synchronizing with Genesis Node](../launch-procedures/synchronizing-with-genesis-node.md) .

It is important to save the password for your wallet in a file and keep it secure. Once the unlocked wallet has not been used for more than 15 minutes (the default timeout duration) _cleos_ is locks your wallet as a safety measure.

If you attempt to run a command using the wallet, it will be required to unlock it first by providing the password. 

In addition to the aforementioned, you are also required to create a genesis.json file for being able to launch your block producer in the genesis mode.

Finally, it is time to run your node. To run nodeos, all you will need to do is to run the start script provided by Ultra. Nodeos will replay the blockchain and after some time will start the block production process.

Once that process is running, you will be able to interact with the blockchain.