---
title: 'clrmintst'
order: 8

---

# clrmintst

Clears (i.e., deletes the rows of) minting status table of a token factory.

## Behavior

Allow an asset owner to clear the minting status table.

## Technical Behavior

**Parameter validation**

token_factory_id is the token factory ID that should exist. memo string to accompany the transaction should be no more than 256 bytes. The required authorization is the token_factory::asset_manager.

**On-the-fly migration**

After v1 is activated by activers action, token factory exists either in v0 factory table, factory.a, or v1 factory table, factory.b.
If the token factory exists in factory.a, then the token factory is moved to factory.b.
In the following descriptions, token factory is either v0 or v1 data structures.

**Main operations**

The action deletes the specified no_of_entries from the token_factory’s mintstat (mintstat.a) table. If all rows are deleted, the table itself is deleted as well. If no_of_entries is not specified (i.e., null), all entries are deleted.

## Action Parameters

Try to think of the action parameters as a **JSON Object** when reading this table. There will be a **JavaScript** example of the action below this table.

### V0

| Fields           | Type               | Description                    |
| ---------------- | ------------------ | ------------------------------ |
| token_factory_id | uint64_t           | The token factory identifier   |
| no_of_entries    | optional<uint64_t> | A short operation description. |
| memo             | string             | Whatever you want              |

### V1

No Changes

## CLI - cleos

```bash
cleos push action eosio.nft.ft clrmintst '{"token_factory_id": 5, "no_of_entries": 100, "memo": "clrmintst time"}' -p factory.manager@active
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'clrmintst',
                authorization: [{ actor: 'factory.manager', permission: 'active' }],
                data: {
                    token_factory_id: 5,
                    no_of_entries: 100,
                    memo: 'clrmintst time',
                },
            },
        ],
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
