---
title: 'mgrfactories'
order: 17

---

# mgrfactories

This action can be used to migrate uniq factories from v0 to v1 as continuous migration.

## Parameter validation

The number of factories to migrate is specified as total_no, which should not be zero.

## Main operations

Each v0 factory record in factory.a table is converted to v1 factory record and moved to factory.b table. This process continues for total_no times or until factory.a table becomes empty, in which case factory_a_migration_done flag (1) is set in migration table.

## Action Parameters

| Property Name | C++ Type | JavaScript Type |
| ------------- | -------- | --------------- |
| total_no      | uint64_t | number          |

## CLI - cleos

```bash
cleos push action eosio.nft.ft mgrfactories '{"total_no": 10}' -p ultra.nft.ft@active
```

## JavaScript - eosjs

```javascript
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'mgrfactories',
                authorization: [{ actor: 'ultra.nft.ft', permission: 'active' }],
                data: {
                    total_no: 10,
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
