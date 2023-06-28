---
title: 'setstatus'
order: 28
deploy: ['staging', 'mainnet']
---

# setstatus

Set token factory state.

## Behavior

Allows a token manager to change state for an existing token factory.

## Technical Behavior

The required authorization is the **token_factory_manager** as the manager is responsible for updating the data.

**token_factory_id** is required and must be exist.

**memo** value has a 256 byte limitation

## Action Parameters

| Fields           | Type        | Description                            |
| ---------------- | ----------- | -------------------------------------- |
| token_factory_id | uint64_t    | The token factory ID.                  |
| memo             | std::string | A short operation description.         |
| stat             | uint8_t     | 0 = Active, 1 = Inactive, 2 = Shutdown |

## CLI - cleos

```bash
cleos push action eosio.nft.ft setstatus '[1, "updating", 2]' -p manager.acc@active
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'setstatus',
                authorization: [{ actor: 'manager.acc', permission: 'active' }],
                data: {
                    token_factory_id: 1,
                    memo: 'set stat',
                    status: 2,
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
