---
title: 'setconrecv'
order: 21

---

# setconrecv

Set conditionless receivers

## Behavior

Allows a token manager to set conditionless receivers for an existing token factory.

## Technical Behavior

The required authorization is the **token_factory_manager** as the manager is responsible for updating the data.

**token_factory_id** is required and must be exist.

**memo** value has a 256 byte limitation

**conditionless_receivers** should be non-empty and each account should be valid

## Action Parameters

| Fields                  | Type                      | Description                                     |
| ----------------------- | ------------------------- | ----------------------------------------------- |
| token_factory_id        | uint64_t                  | The token factory ID.                           |
| memo                    | std::string               | A short operation description.                  |
| conditionless_receivers | std::vector\<eosio::name> | The array of conditionless receivers being set. |

## CLI - cleos

```bash
cleos push action eosio.nft.ft setconrecv '[1, "updating", ["joe"]]' -p manager.acc@active
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'setconrecv',
                authorization: [{ actor: 'manager.acc', permission: 'active' }],
                data: {
                    token_factory_id: 1,
                    memo: 'set conditional receivers',
                    conditionless_receivers: ['joe'],
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
