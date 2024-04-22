---
title: 'Cleos Usage'

order: 0
outline: [0,4]
---

# Cleos Usage

Cleos is a command line tool that will allow you to interface with various HTTP APIs provided from nodeos instances. Cleos can be used to lookup accounts, deploy contracts, interface with contracts, and much more.

## Who is it for?

* Developers
* Advanced Users

## Obtaining Cleos

We have created a Docker image that has pre-created scripts, tools, and pre-packaged binaries. Cleos is already included inside of the Docker image.

Individual binaries are not currently available for download.

[Docker Image Usage](../../../tutorials/docker/docker-image-usage.md)

## Usage

Inside the Docker Container the following can be executed for general usage.

```sh
cleos --help
```

Additional help is supported for all individual options inside of cleos.

```sh
cleos wallet --help
cleos wallet create --help
cleos get --help
cleos get table --help
```

### External APIs

If you are using cleos you may find yourself needing to interface with an external API. This can be done with the `-u` option.

[See this API section](../../../products/chain-api/index.md) for information on block producer endpoints that are publicly available.

**Example**

```sh
cleos -u https://someurl.com/xyz/ get table eosio eosio global
```

## Wallets

A wallet can be defined as a secure place where private keys can be stored. 

Cleos has its own wallet software called `keosd` that will assist you with securely storing your private key. This additional piece of software that is packaged with `cleos` can be used through `cleos` itself.

* Developers are responsible for backing up their own private keys
* Remember to store your wallet password
* Do not share private keys in public spaces / channels

_A wallet may not be stored between sessions while using a Docker Image, ensure you backup any private keys you create if they need to be used again._

### Basic Usage

```sh
cleos wallet --help
```

### Wallet Rules

* Multiple wallets can exist
* Multiple wallets can be unlocked at the same time
* Any transaction will automatically scan unlocked wallets for a key with permission to the account
* Accessing a specific wallet requires --name
  * This only applies to wallet based commands with cleos

### Create a Wallet

Below is the command used to create a wallet and print out a `password` which you should store somewhere to eventually unlock a wallet. By default a wallet will eventually lock itself over time.

```sh
cleos wallet create --to-console
```

A successful creation of the wallet will respond with:

```sh
Creating wallet: default
Save password to use in the future to unlock this wallet.
Without password imported keys will not be retrievable.
"SomeReallyLongPassword"
```

### Creating a Named Wallet

There are times a developer may need a specifically named wallet to interface with. You can easily name a wallet with the following command.

```sh
cleos wallet create --name=CustomName --to-console
```

The name chosen will be used for the file name, and the wallet itself. 

### Unlocking a Wallet

When a wallet is locked it will not allow any cleos based commands that require transacting, setting contracts, etc. to be called. Below is a command that can be used to unlock the wallet.

```sh
cleos wallet unlock
```

After running the command it will prompt you for a password. It may appear like nothing is being written when you type or paste your password (right-click) but actually something is being written.

A successful unlock will respond with:

```sh
Unlocked: default
```

### Importing a Private Key

There are two ways to import a private key to your wallet.

This first version will prompt for a private key to import

```sh
cleos wallet import
```

This second version will not prompt the user and will retain the private key in the `history` command. 

It is **not recommended** to use it, but it could be used for development purposes.

```sh
cleos wallet import --private-key SomePrivateKey
```

### List Keys

No, this does not reveal private keys. Instead, it lists all of your public keys.

```sh
cleos wallet keys
```

If you do want to list private keys from unlocked wallets the following command can be used.

```sh
cleos wallet private_keys
```

### Create a Key Pair

The following command will print a private and public key to console without importing it into the wallet.

```sh
cleos create key --to-console
```

To import a key on creation, then the following command will suffice.

```sh
cleos wallet create_key
```

### Wallet Infinite Unlock

If you find a need for a wallet that almost never locks itself then seek the following page:

[keosd - Infinite Unlock](./keosd.md#wallet-infinite-unlock)

## Accounts

Accounts can be created in a variety of ways but it is important to understand that on the Ultra Blockchain a non-eba account is necessary to deploy smart contracts. 

Meaning, developers who wish **to deploy a smart contract** on the production network must contact Ultra and **obtain a non-eba account.**

### Account Rules

Account names are automatically generated sequentially based on the previous name. Developers are not required to provide a name for an account, developers are given one.

_Requires system contracts to be deployed, and applied on Testnet and production networks._

### Name Type Rules

There are rules with using the `eosio::name` type and account names.

* Can be up to 12 character(s)
* Must only contain digits 1-5
* Must only contain letters a-z
* Must be lowercase only

_Developers are unable to choose their names on Testnet and production networks._

### Resource Information

You do not need to have UOS in the account to deploy smart contracts or do general transactions. This is all shared through Ultra's POWER system which splits resources amongst multiple accounts as they are created.

This being said, you will need RAM in order to deploy a smart contract. You may acquire RAM during the account creation process, from the RAM market, or by creating an unlimited account which has no RAM limitations.

### Accounts for Testnet Network & Production Network

However, **a non-eba account is necessary for deploying smart contracts.** This can only be obtained by going through Ultra. 

In a local network, a developer has full control over how accounts are created, and when they can be created. Refer to the instructions below to use `cleos` to create accounts.

### Creating an Account

This applies when you have a system contract deployed to the chain, and need to create an account.

```sh
cleos system newaccount ultra.eosio accountname SomePublicKey --transfer --gift-ram-kbytes 1024000 -p ultra.eosio
```

This permission is inaccessible on Testnet and Mainnet.

_Note: Using the `ultra.eosio` permission should be possible when launching the chain with the javascript framework included in the image._

### Creating a Non-EBA Account

Allow user to create new non-EBA account when the system contract is deployed, with expected cost should not be larger than max payment. Cost calculation will base on config from newactconfig. All names will be auto-generated on chain with format of `1aa2aa3aa4aa` with `a` as an alphabet character.

```sh
cleos push action eosio newnonebact '{"creator":"alice", "owner":{"threshold":1,"keys":[{"key":"EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9","weight":1}],"accounts":[],"waits":[]}, "active":{"threshold":1,"keys":[{"key":"EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9","weight":1}],"accounts":[],"waits":[]}, "max_payment":"1.00000000 UOS"}' -p alice
```

### Accessing Account Info

Once an account is created you can check if it exists on chain by performing a `get` against the account.

```
cleos get account accountname
```

### Updating Account Permissions

Account permissions can be incredibly complex at times depending on the needs of the permission structure.

Please keep in mind that the `eosio` account must have the `eosio.system` contract deployed to to the account in order to use this functionality.

**Basic Permission Hierarchy**

Almost all accounts that are created always have the same permission structure by default.

* owner
  * The highest permission
* active
  * The lowest permission

_To change active permission we need permission of the owner permission_

**Permission Structure**

```json
{
  "threshold": 1,
  "accounts": [
    {
      "permission": {
        "actor": "anotheracc1",
        "permission": "active"
      },
      "weight": 1
    }
  ],
  "keys": [
    {
      "key": "SomePublicKey",
      "weight": 1
    }
  ],
  "waits": []
}
```

**Explanation of Permission Structure**

The above structure may look quite complex, but this can be broken down.

* threshold
  * Threshold determines how many signatures are needed from both the keys, and accounts section to fulfill this permission we are creating.
  * If we set threshold to 2 and we have 2 keys listed, then we need to use the multi-signature protocol to fulfill any actions using this permission.
* accounts
  * This is a list of accounts that can be used to fulfill the permission we are creating.
  * This means that multiple accounts can be chained together.
  * There is no limit to the amount of accounts we can add to this array.
  * weight
    * This determines how much is given to the threshold when this specific account signs a transaction. If we set the weight to 2 and we need a threshold of 2, this one account can completely fulfill the threshold necessary to sign a transaction.
* keys
  * This is a list of keys that can be used to fulfill the permission we are creating.
  * This means that maybe you and a friend, or a bunch of other people can all put their keys under this one specific permission. You can then have any of the keys sign on behalf of this permission to meet the threshold.
  * There is no limit to the amount of keys we add to this array.
  * weight
    * Same as the 'weight' written above in the accounts section.

When all adjustments are made to the above structure we can `stringify` the json structure to pass it through cleos.

**Pushing the Update Auth**

Keep in mind that updating authorization will require the permission above the permission we are modifying. Example being if we are modifying the `active` permission we need the `owner` permission to do so.

```sh
cleos set account permission account1 active '{"threshold":1,"accounts":[{"permission":{"actor":"anotheracc1","permission":"active"},"weight":1}],"keys":[{"key":"SomePublicKey","weight":1}],"waits":[]}' -p account1@owner
```

### Updating Account Link Authorization

Preface, `linkauth` allows a specific `account permission` to be linked to a specific smart contract's `action`. This will allow only that specific permission under the account to interface with a smart contract `action`.

In short, if a permission is created for an account that has a public key that is used inside of an application it is better to only have that permission interface with very specific actions. This prevents potential vulnerabilities when creating applications that interface with the blockchain.

```sh
cleos push action eosio linkauth '["someaccount","eosio.token","transfer", "somepermission"]' -p someaccount
```

### Code Based Permissions

The `eosio.code` permission will allow a smart contract to call other smart contracts to invoke other actions. 

The best example of this is creating a smart contract that requires funds to be transfered from the contract account to the user account without the contract account's direct permission.

```sh
cleos set account permission contractaccount active --add-code
```

## Contract Deployment

Smart contracts allow accounts to interact with an `action` inside of a compiled smart contract that runs specific code to create a result.

Deploying a compiled smart contract is how developers, and users alike will interface with the blockchain. 

An example of a smart contract would be the `eosio.token` contract that also has the `transfer` action. This allows users to transfer the native token between accounts.

### Restrictions

**This does not apply to local networks, you can bypass this through other scripts**.

By default `ultra` requires KYB (Know Your Business) before any business or individual user can deploy smart contracts to their test network or the main network. 

This is a manual process and the following must be done:

1. Generate two key pairs, one each for your OWNER and ACTIVE permissions.

2. These key pairs must be securely saved locally.

3. Send the public keys to Ultra

4. Ultra will generate a non-EBA account and revert to the account name

Contact an Ultra representative through Telegram for more information.

### Deploying a Smart Contract

At this stage it is assumed that a `wasm` and `abi` file have been created to deploy the smart contract.

Assume the following file structure:

```
contractA\
  |- contractA.wasm
  |- contractA.abi
```

_Note: The folder, and files must have the same name._

```sh
cleos set contract someaccount ./contractA -p someaccount@active
```

The chain should reply that you have deployed your contract successfully.

## Transactions

A transaction can be defined as a way to call a specific function in a smart contract that will run some code on-chain and create a result on-chain.

### Pushing a Transaction

If all permissions are correct, and you are interacting with a smart contract the following example should be sufficient for interacting with most smart contracts.

Assume the following action in `C++`.

```cpp
// Notice how usera is parameter 1, and userb is parameter 2 in the array in the example below. This is how all actions are interfaced with.
[[eosio::action]] void test( eosio::name usera, eosio::name userb ) {
  print( "Hello to, ", usera);
  print( "Hello to, ", userb);
}
```

We have to pass two parameters to our action: `usera`, and `userb`. Both of which are account names.

Assume the account the contract is deployed under is `hello`.

```sh
cleos push action hello test '["acc1", "acc2"]' -p someaccount
```

This will push the action, and we should receive some output back from the action.

Here is another example with the `eosio.token` account and `transfer` action.

```sh
cleos push action eosio.token transfer '["acc1", "someaccount", "4.00000000 UOS", "some transfer"]' -p someaccount
```

Upon successful transaction, it will return a unique identifier which can be used to fetch that transaction with `cleos get transaction`.

## Get Data

Cleos allows for a lot of utility as far as getting data from the chain. Anything from token balances, tables, and even account information is fair game with this tool.

### Usage

See the full capabilities of `get` with the command below.

```sh
cleos get --help
```

### Accounts

Get all account information, and permissions.

```sh
cleos get account someaccount
```

### Tables

Tables are defined inside of smart contracts. This section will cover how to fetch data from a table, and not how to write to a table. Smart contract actions often write to tables automatically, and the scope of writing to a table will not be covered in this section.

Tables are based on a specific format which revolves around `contract`, `scope (account_name)` and `table_name`. 

Example of retrieving data from the global eosio table.

```sh
cleos get table eosio eosio global
```

### Understanding Scope

A scope for a table serves as an indexing key. It may be a variation of types ranging from `uint8` to `checksum256` (sha256 hash). It is most commonly a `name` type, as 
quite often tables are scoped to an account name. 

A good example of how scope may be used for easy retrieval of stored information would be for a chess contract.

```
cleos get table chess <GAME_ID> turns
```

Or even a way to get the games a user is participating in

```
cleos get table chess <USER_ID> games
```

The definition of how a scope is used is decided at the smart contract level but it is important to understand that this is an option for tables when fetching their individual data.

### Transaction

Transactions can be fetched through their unique identifier.

```sh
cleos get transaction someuid
```

### Block

Blocks can be fetched through their individual block number.

```sh
cleos get block 25
```

## Closing Remarks

Cleos is a powerful command line tool that has near infinite use cases for developers and advanced users alike. It is worth exploring every option through `--help` and above we have covered some of the most used command line options that the blockchain team at Ultra uses on a near daily basis.
