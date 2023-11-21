---
title: 'setnftmgrflg'
order: 25

---

# setnftmgrflg

This action can be used to set token migration done flag.

## Technical Behavior

The action sets token_a_migration_done flag (2) in migration table.

Since there is no way to determine that token migration is finished, the flag has to be manually set. No one should be able to set the flag except ultra.

## Action Parameters

There is no action parameter for this action.

## CLI - cleos

```
cleos push action eosio.nft.ft setnftmgrflg '{}' -p ultra.nft.ft@active
```

## JavaScript - eosjs

```javascript
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'setnftmgrflg',
                authorization: [{ actor: 'ultra.nft.ft', permission: 'active' }],
                data: {},
            },
        ],
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
