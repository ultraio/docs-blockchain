---
title: 'activers'
order: 1
deploy: ['staging', 'mainnet']
---

# activers

When the current active version is N, and the next major version to work on is N+1, this action can be used to activate version N+1.

## Technical Behavior

It works with the migration singleton table and stores the current active version, and migration status to this version. Only ultra.nft.ft account can call this action.

## Action Parameters

There is no action parameter for this action.

## CLI - cleos

```bash
cleos push action eosio.nft.ft activers '{}' -p ultra.nft.ft@active

# to view the migration status:
cleos get table eosio.nft.ft eosio.nft.ft migration

# example output right after v1 is activated
{
      "active_nft_version": 1,
      "table_migration_stats": 0
}
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'activers',
            authorization: [{ actor: 'ultra.nft.ft', permission: 'active' }],
            data: {},
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
