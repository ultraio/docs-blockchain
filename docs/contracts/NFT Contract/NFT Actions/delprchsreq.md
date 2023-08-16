---
title: 'delprchsreq'
order: 33
deploy: ['experimental']
---

# Purchase

This action is used to delete purchase requirements for a token factory.

## Technical Behavior

`token_factory_id` and `index` of the purchase requirement to remove. Transaction should be signed by factories asset manager otherwise it reverts.

If the asset manager of the factory is an account other than `ultra.nft.ft`, 85% of the locked-up UOS payment (`uos_payment`) is refunded to the factory's asset manager, and the remaining 15% goes to the `eosio.pool` account.

## Action Parameters

**Action Interface**

| Property Name    | C++ Type | JavaScript Type |
| ---------------- | -------- | --------------- |
| token_factory_id | uint64_t | number          |
| index            | uint64_t | number          |
| memo             | string   | string          |

## CLI - cleos

```bash
cleos push action eosio.nft.ft delprchsreq.a '[100, 0, "delete purchase req"]' -p factory.manager
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'delprchsreq.a',
                authorization: [{ actor: 'factory.manager', permission: 'active' }],
                data: {
                    token_factory_id: 100,
                    index: 0,
                    memo: '',
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
