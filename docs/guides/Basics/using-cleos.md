---
title: 'Using cleos'
deploy: ['staging', 'mainnet']
order: -99997
oultine: [0, 4]
---

# Using cleos

With `cleos`, developers and users can interact with Ultra's blockchain network by executing various commands. Some of the common operations that can be performed using cleos include:

-   Account management: Creating, modifying, and managing user accounts on the EOSIO blockchain.
-   Contract deployment: Compiling and deploying smart contracts onto the blockchain network.
-   Interacting with smart contracts: Sending actions to smart contracts and querying their state.
-   Transaction management: Creating, signing, and broadcasting transactions to the blockchain.
-   Blockchain data queries: Retrieving information about blocks, transactions, accounts, and other data on the blockchain.

By utilizing the `cleos` command-line tool, developers can automate interactions with Ultra's blockchain network, build DApps, and integrate web3 functionality into their applications.

These sections are written with the assumption that you have started a local chain with `ultratest`. See [Start Local Chain](./start-local-chain.md) for further information if you have not.

## Key Generation and Wallets

Ultratest comes with a `default` wallet which you can display with the command

```sh
more ~/ultratest/wallet.txt
```

To learn more about wallets and how to use them from the command line, we recommend that you [read through our section on Wallets](../../learn/Blockchains/wallets.md).

The basic process is simply:

1. Generate keys
2. Create a wallet
3. Open the wallet
4. Unlock the wallet

Then you'll be able to use it to do things like creating accounts or signing transactions.

## Account Creation

Ultra has a [few different types of accounts](../../learn/Blockchains/accounts-and-permissions.md) that are available for creation. In short, there are:

-   EBA accounts - These are created by the Ultra client on Mainnet and Testnet. They are non-custodial, recoverable accounts.
-   Non-EBA accounts - These are created by users and developers who wish to self-manage their keys.
-   Premium accounts - These are custom names reserved for Ultra and their partners.

For your local chain, you'll be creating a **non-EBA account**. You can do so with the cleos command:

```sh
cleos push action eosio newnonebact '{"creator":"default", "owner":{"threshold":1,"keys":[{"key":"YOURPRIVATEKEY","weight":1}],"accounts":[],"waits":[]}, "active":{"threshold":1,"keys":[{"key":"PUBLICKEY","weight":1}],"accounts":[],"waits":[]}, "max_payment":"1.00000000 UOS"}' -p default
```

To perform the account creation transaction, you'll need to have enough UOS to cover the RAM cost associated with account creation.

## Transferring Tokens

Open and unlock your wallet.

To transfer tokens you run the command:

```sh
cleos push action eosio.token transfer '["myaccount", "recipientacc", "10.00000000 UOS", "Memo message"]' -p myaccount@active
```

## Publishing a Contract

Open and unlock your wallet.

To publish a contract you run the command:

```sh
cleos set code <account_name> <contract_wasm_file> -p <account_name>@active
```

## Tables

On Ultra, tables are a fundamental concept used for storing and organizing data within smart contracts. Tables act as a persistent data storage mechanism, allowing contracts to store, retrieve, and modify structured data on the blockchain.

Tables consist of rows and columns. Each row represents a record or an entry, and each column represents a field or a piece of data associated with that record.

They are commonly used to store various types of information, such as user accounts, token balances, transaction histories, game data, or any other structured data relevant to the contract's functionality. Contracts define their own custom tables, specifying the fields and their types. A table also includes an index, which allows for efficient querying and retrieval of data.

The data stored in tables is persistent on the blockchain. It remains available even after the execution of a contract's actions or transactions.

Smart contracts can read, modify, and delete data in tables. This allows for the creation of decentralized applications with complex business logic that can interact with and update the stored data.

Tables have a scope, which defines the context in which the data is stored. Each row in a table has a primary key, which is a unique identifier for that specific row. The combination of scope and primary key allows contracts to organize and retrieve data efficiently.

Tables can have one or more indexes defined on specific fields. Indexes enhance the performance of data retrieval by enabling faster search and filtering capabilities.

Storing data in tables consumes RAM resources on the EOSIO network. Contracts typically need to manage their RAM usage efficiently to avoid running out of resources.

### Reading Table Data with Cleos

To read table row data in EOSIO, you can use the EOSIO database API functions available within your smart contract.

#### Read the table row data

To read table row data using `cleos` on Ultra, you can use the get table command.

Here's how you can do it:

```sh
cleos get table <contract_account> <scope> <table_name>
```

-   `<contract_account>`: The EOSIO account associated with the smart contract containing the table.
-   `<scope>`: The scope or context in which the table data is stored. It determines the subset of data you want to retrieve.
-   `<table_name>`: The name of the table you want to read.

Replace `<contract_account>`, `<scope>`, and `<table_name>` with the actual values specific to your contract and table.

For example, if you want to read the accounts table of the eosio.token contract on the EOS mainnet, you can use the following command:

```sh
cleos get table eosio.token myaccount accounts
```

This command retrieves the table data for the `accounts` table in the `eosio.token` contract, scoped to the account `myaccount`.

The output will display the table row data in JSON format, including all the rows and their associated fields.

Note: The `get table` command retrieves the entire table, so it may take some time to display the output if the table has a large number of rows. If you only need specific rows or want to filter the results, you can use additional options like `--lower`, `--upper`, or `--index` with the `get table` command. Check the cleos documentation for more details on these options.

Using the `get table` command in cleos, you can conveniently retrieve and view table row data on the EOSIO blockchain without the need for direct smart contract interaction.

### Using Scope

When using `cleos` to interact with Ultra table data, you can specify the scope parameter to retrieve table data associated with a specific scope. Here's how you can use scope with `cleos` to query table data:

```sh
cleos get table <contract_account> <scope> <table_name>
```

-   `<contract_account>`: The EOSIO account associated with the smart contract containing the table.
-   `<scope>`: The scope or context in which the table data is stored. It determines the subset of data you want to retrieve.
-   `<table_name>`: The name of the table you want to query.

Replace `<contract_account>`, `<scope>`, and `<table_name>` with the actual values specific to your contract and table.

For example, if you want to retrieve the table data with a scope of "myaccount" from the `accounts` table of the `eosio.token` contract on the EOS mainnet, you can use the following command:

```sh
cleos get table eosio.token myaccount accounts
```

This command retrieves the table data for the `accounts` table in the `eosio.token` contract, specifically scoped to the account name "myaccount".

The output will display the table row data in JSON format, including all the rows and their associated fields that match the specified scope.

By providing the desired scope parameter in the `get table` command, you can retrieve table data associated with a specific scope using `cleos`. This allows you to access and view subsets of data within the table based on your defined scopes.
