---
title: 'Introduction'

order: 0
outline: [0,4]
---

# Ultratest Usage

This document pertains to developers who want to write smart contracts.

## Obtaining ultratest

We have created a Docker image that has pre-created scripts, tools, and pre-packaged binaries. `ultratest` is already included inside of the Docker image.

Individual binaries are not currently available for download.

[Docker Image Usage](../../tutorials/general/docker/docker-image-usage.md)

## Usage

Inside the Docker Container the following can be executed for general usage.

```sh
ultratest --help
```

## Nodeos instances

Nodeos instances are automatically created in the background with a preset chain configuration.

The first instance will have the following deployed:

-   bios contract
-   protocol configurations
-   system contract
-   token contract
-   msig contract
-   various initialization actions for ram market, system currency, etc.

After the first instance has this data deployed it will take a snapshot.

This snapshot will be used to quickly reboot the chain and run each test file as necessary.

_Additional instances will be launched if additional producers are needed in a test file._

## Keosd Instances

Keosd is launched and a single wallet is created which will contain all keys that were used during the boot process for the framework.

All keys can be seen by running either of these two commands inside of the docker image.

```
cleos wallet keys
```

```
cleos wallet private_keys
```

The wallet password can be found at `~/ultratest/wallet.txt`.

## Data Persistence

During each test a system snapshot is used between each test file.

All data is wiped if a new instance of `ultratest` is ran.

However, a configuration inside of test files exists to prevent any additional rollbacks during chained tests. See [Understanding the Test Class](#understanding-the-test-class)

## Warning on Naming Files

The way that `ultratest` kills `nodeos` processes is very indiscriminate.

It matches `nodeos` and `keosd` in pkill as a search string, meaning if you are running other processes with `nodeos` or `keosd`, it will kill them as well.

This affects tests when running singular tests, for instance `ultratest -t tests/nodeos_test.ultra_test.js` will kill the test suite execution because the process has `nodeos` within the cmd.

## Starting a System Node

Options exist to start a node with system contracts deployed and will function as a normal node until you kill the nodeos instance.

```
ultratest -D -n --system
```

## Writing Tests

Test files must have a suffix of `ultra_test.js` in order to be recognized by the `ultratest` framework.

**Incorrect ->** `hello-world-test.js`

**Correct ->** `hello-world.ultra_test.js`

### Basic Format

Our test format is very specific but also has plenty of options to get most smart contract developers off the ground.

```js
module.exports = class test {
    constructor() {}

    // Deploys ultra system contracts to the nodeos instance
    requiresSystemContracts() {
        return true;
    }

    // What account to create, and what contract to deploy on it
    importContracts() {
        return [{ account: 'smrtcntract1', path: '../contracts', contract: 'hello' }];
    }

    // Created after importing contracts
    requiredAccounts() {
        return ['account1', 'account2', 'account3', 'account4'];
    }

    tests({ assert, endpoint, cleos, rpc, api, ecc, keychain }) {
        assert(true, "This will never trigger because it is true.");
        return {
            'should execute transaction': async () => {
                // Something should happen in this test.
            };
    }
};
```

### Understanding the Test Class

The various class functions inside of the file above all have their own use cases.

-   requiresSystemContracts()
    -   Deploys system contracts to the nodeos instance for this test.
    -   Must return a `boolean`.
        <br />
        <br />
-   importContracts()
    -   Imports smart contracts based on account, path of the contract, and the contract name.
    -   Must return an Array of Objects: \* `[{ account: string, path: string, contract: string }]`
        <br />
        <br />
-   requiredAccounts()
    -   A string list of accounts to create before running the tests.
    -   Must return an Array of Strings
        <br />
        <br />
-   requiredUnlimitedAccounts()
    -   A string list of unlimited accounts to create before running tests.
    -   These accounts have zero restrictions on resources.
    -   Must return an Array of Strings
        <br />
        <br />
-   nodeosConfigs()
    -   A way to change `genesis.json` and `config.ini` options for nodeos instance.
    -   Must return an Object of Objects. \* { genesis: {}, config: {} }
        <br />
        <br />
-   requiredProducers()
    -   Creates multiple producers for the chain that produce blocks.
    -   Must return an Array of Objects:
        -   `[{ name:'', config:{}, node:0'}]`
    -   name is the producer name
    -   node is the nodeos instance
    -   Optional - config is a custom `config.ini` for this producer
        <br />
        <br />
-   requiredUnlimitedSupply()
    -   Specifies whether system will use max supply when creating the system token.
    -   Must return boolean
        <br />
        <br />
-   preventRollback()
    -   Specifies whether the chain should rollback before this test is started.
    -   Must return boolean

### tests() class function

Tests usually passes a handful of useful objects from commonly used libraries like eosjs, eos-ecc, etc.

```js
tests({ assert, endpoint, cleos, rpc, api, ecc, keychain }) {
        assert(true, "This will never trigger because it is true.");
        return {
            'should execute transaction': async () => {
                // Something should happen in this test.
    };
}
```

-   `assert(condition, error_message)`
    -   Standard issue testing suite asserter.
        <br />
        <br />
-   `endpoint`
    -   The URL for the running nodeos (port might not always be 8888)
        <br />
        <br />
-   `cleos(command, options)`
    -   A helper method that will execute all [cleos commands](https://developers.eos.io/manuals/eos/v2.2/cleos/index) fed to it.
    -   options is an object that takes the following properties:
        ```
        {
          swallow:boolean, // whether to swallow errors from this cleos command
          fetch:boolean // if true cleos will return the results, if false cleos will return a boolean based on success.
        }
        ```
-   `rpc` a standard `eosjs` rpc object ([Getting table information using eosjs](https://developers.eos.io/manuals/eosjs/v22.0/how-to-guides/how-to-get-table-information/?query=get_table_rows&page=1#get-table-rows))
    <br />
    <br />
-   `api` a standard `eosjs` api object ([Sending a transaction using eosjs](https://github.com/EOSIO/eosjs/#sending-a-transaction))
    <br />
    <br />
-   `ecc` a standard `eosjs-ecc` object ([Full documentation here](https://github.com/EOSIO/eosjs-ecc))
    <br />
    <br />
-   `common` a group of functions that are most commonly used for fetching `eosio` chain data, creating accounts, sending tokens, etc.
    -   See below.
-   `keychain`
    -   See below.

### keychain object

Ultratest follows a deterministic keys schema, where the keys for each account/permission will be exactly
the same each run. For example the key for `foo` will always be the same, but `bar` will be different from `foo`.

-   `generateAndReturnPublicKey(account:string): Promise<string>` \* This will return a public key which is created for this account, it will also inject that key into both eosjs and keosd for signing. You can specify `account@permission` in the `account` parameter.
    <br />
    <br />
-   `getAccountKeys(account:string): Array<string>|null`
    -   will return all available keys or null.
        <br />
        <br />
-   `setAccountKeys(account:string, key_object:EosjsKey): Promise<void>`
    -   will allow setting a private key for an account, and will also import it into eosjs and keosd. **Will not override!**. Must be a key object (eosjs).
        <br />
        <br />
-   `getAllPublicKeys(): Array<string>`
    -   Will get all available public keys.
        <br />
        <br />
-   `getPrivateKey(public_key:string): string|null`
    -   Will return any private key found matching this public key.
        <br />
        <br />
-   `getPublicKeyFromAccount(account:string): string|null`
    -   Will return a public key associated with an account.
        <br />
        <br />
-   `getPrivateKeyFromAccount(account:string): string|null`
    -   Will return a public key associated with an account.
        <br />
        <br />
-   `sign(signargs:object): Promise<{ signatures, serializedTransaction }>`
    -   Will sign a transaction following the `eosjs` signature provider format. Keys will be inferred from the authorizations & required keys.

## Writing a Simple Test

Below is an example of writing a simple test that checks the value of a global `eosio` table to ensure that it is a specific value. It also checks if the `eosio` account has been created.

```ts
module.exports = class test {
    constructor() {}

    requiredAccounts() {
        return ['annie'];
    }

    requiresSystemContracts() {
        return true;
    }

    tests({ assert, endpoint, cleos, rpc, api, ecc, keychain, common }) {
        return {
            'should perform an account lookup against eosio': async () => {
                const account = await common.getAccount('eosio');
                assert(account, "Account 'eosio' does not exist.");
            },
            'should perform an account lookup against annie': async () => {
                const account = await common.getAccount('eosio');
                assert(account, "Account 'eosio' does not exist.");
            },
            'should lookup eosio global table': async () => {
                const results = await common.getTable('eosio', 'eosio', 'global');
                assert(results[0] && result[0].ultra_veto_enabled, 'Table was found, and vote is enabled.');
            },
        };
    }
};
```

`assert` can be used in a handful of ways, but the most common way to write an `assert` is to check if a value is true or false.

## Common API

The `common` object inside of `tests` has a handful of useful functions that will speed up your test deployment time.

### getSingleton

Returns a single table object with what is presumed to be the table data inside of it.

**Usage**

```typescript
getSingleton(account: string, scope: string, table: string);
```

**Example**

```typescript
const result = common.getSingleton('eosio', 'eosio', 'global');

if (!result) {
    // No table exists or the function already errored out.
    return;
}

assert(result.ultra_veto_enabled === 1, 'veto was not enabled');
```

### getTable

Returns entries from the table.

**Usage**

```typescript
getTable(account: string, scope: string, table: string, limit = 100, showMore = true);
```

_limit_ - The number of entries to show.

_showMore_ - This will return the entire table object with a `showMore` boolean that will be toggled to true if there are more entries.

**Example**

```typescript
const results = await common.getTable('eosio', 'eosio', 'producers');
assert(Array.isArray(results.rows), 'More than two rows are present');
```

**Example Data Output**

```typescript
{
    "rows": [
        {
            "code": 'eosio',
            "scope": 'eosio',
            "table": 'producers',
            "payer": 'eosio',
            "count": 1
        },
    ],
    "more": ''
}
```

### getScopes

Returns an array of available tables, and scopes for a given contract.

**Usage**

```typescript
getTable(account: string);
```

**Example**

```typescript
const scopes = await common.getScopes('eosio.token');
assert(scopes.rows.length >= 1, 'Did not retrieve any scopes from eosio.token');
```

**Example Data Output**

```typescript
{
    "rows": [
        {
            "code": 'eosio.token',
            "scope": '........ehbp5',
            "table": 'stat',
            "payer": 'eosio.token',
            "count": 1
        },
    ],
    "more": ''
}
```

### getAccount

Returns the account information if the account is available. Otherwise returns null.

**Usage**

```typescript
getAccount(account: string);
```

**Example**

```typescript
const account = await common.getAccount('bobbyjoe');
assert(account, 'Did not find account bobbyjoe');
```

**Example Data Output**

```typescript
{
    account_name: 'bobbyjoe',
    head_block_num: 47,
    head_block_time: '2022-05-02T17:59:26.500',
    privileged: false,
    last_code_update: '1970-01-01T00:00:00.000',
    created: '2022-05-02T17:59:26.000',
    core_liquid_balance: '100.00000000 UOS',
    ram_quota: 256000,
    net_weight: 0,
    cpu_weight: 0,
    net_limit: { used: -1, available: -1, max: -1 },
    cpu_limit: { used: -1, available: -1, max: -1 },
    ram_usage: 380,
    permissions: [
      { perm_name: 'active', parent: 'owner', required_auth: [Object] },
      { perm_name: 'owner', parent: '', required_auth: [Object] }
    ],
    total_resources: {
      owner: 'bobbyjoe',
      power_weight: '0.00000000 UOS',
      ram_bytes: 256000,
      flags: 0
    },
    self_delegated_bandwidth: null,
    refund_request: null
}
```

### createAccount

Creates an account and returns `true` if account creation was successful.

**Usage**

```typescript
createAccount(account: string, ram = 250, tokens = 100);
```

**Example**

```typescript
const result = await common.createAccount('bobbyjoe');
assert(result, 'account bobbyjoe was not created');
```

### addUOS

Adds tokens to a specific account.

Returns the transaction result if successful.

**Usage**

```typescript
addUOS(name: string, amount: string | number);
```

_amount_ - must be a whole number

**Example**

```typescript
const result = await common.addUOS('bobbyjoe', 100);
```

### transfer

Transfers tokens from an account to another account.

Returns the transaction result if successful.

**Usage**

```typescript
transfer(from: string, to: string, fixedAmount: number, memo = '');
```

**Example**

```typescript
const result = await common.transfer('bobbyjoe', 'alice', 5.00004321, 'moneys!');
```

### transactAssert

Used to verify that a certain smart contract will assert a certain message when it fails. Otherwise returns `false`.

If successful it will return true if transaction succeeds.

**Usage**

```typescript
transactAssert(
    actions: Array<{ account: string, name: string, authorization: Array<{ actor: string, permissions: string}>, data: Object}>, 
    assertionMessage: string
);
```

**Example**

```typescript
const memo = [...Array(257).keys()].map(x => 'a').join('');

const res = await common.transactAssert(
    [
        {
            account: 'eosio.nft.ft',
            name: 'limitmint',
            authorization: [{ actor: 'somemanager', permission: 'active' }],
            data: { token_factory_id: 1, account_minting_limit: 10, memo },
        },
    ],
    'memo has more than 256 bytes',
);
```

### pushAction

Pushes a normal `cleos` based transaction.

Returns transaction if successful.

**Usage**

```typescript
pushAction(code: string, action: string: authority: string, args: Array<any>)
```

**Example**

```typescript
 const result = await common.pushAction(
    "eosio.token",
    "transfer",
    "ultra.eosio@active",
    ["ultra.eosio", "alice", "4.00000000 UOS", ""]
);

assert(result, "Did not push transaction with 'pushAction' common api");
```

### getBalance

Returns the current `numerical` representation of the user's system balance.

**Usage**

```typescript
getBalance(account: string)
```

**Example**

```typescript
const currentBalance = await common.getBalance('alice');
assert(currentBalance >= 1, "Did not have any tokens");
```

### addCodePermission

Adds a code permission to a smart contract account permission.

Returns successful transaction or throws error.

**Usage**

```typescript
addCodePermission(account: string, permission = 'active');
```

**Example**

```typescript
const result = await common.addCodePermission("alice", "active");
```

### sleep

Milliseconds to wait before moving to next part of a function.

**Usage**

```typescript
sleep(milliseconds: number);
```

**Example**

```typescript
await common.sleep(500);
```

### post

Performs a simple post request against any available test API.

Returns the fetched data in object format.

**Usage**

```typescript
post(endpoint: string, body: Object);
```

**Example**

```typescript
const result = await common.post("chain/get_account", {
    account_name: "alice",
    expected_core_symbol: "8,UOS",
});

assert(result, "Could not perform a POST request");
```

### get

Performs a simple get request against any available test API.

Returns the fetched data in object format.

**Usage**

```typescript
get(endpoint: string);
```

**Example**

```typescript
const result = await common.post("chain/get_info");
console.log(result);
```

### updateAuth

Updates the permissions for an account.

**Usage**

```typescript
updateAuth(account: string, parent: string, permission: string, weight: number, keys: Array<Object>, accounts: Array<Object>);
```

**Example**

```typescript
const result = await common.updateAuth(
    "alice",
    "active",
    "newperm",
    1,
    [],
    [
        {
            weight: 1,
            permission: {
                actor: "bobbyjoe",
                permission: "active",
            },
        },
    ]
);
```
