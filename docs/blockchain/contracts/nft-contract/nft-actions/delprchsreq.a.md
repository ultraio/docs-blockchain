---
title: 'delprchsreq.a'
order: 33
deploy: ['experimental']
---

# delprchsreq.a

This action is used to delete purchase requirements for a token factory.

## Technical Behavior

Deletes an existing purchase option of the factory with specified `token_factory_id` and purchase option with specified `index`. Transaction should be signed by factories asset manager otherwise it will fail.

If the asset manager of the factory is an account other than `ultra.nft.ft`, 85% of the locked-up UOS payment (`uos_payment`) is refunded to the factory's asset manager. Ultra always takes a 15% non-refundable commission and it goes to the `eosio.pool` system account. This is done to prevent network abuse associated with constant RAM pricing model of NFT contract.

## Action Parameters

**Action Interface**

| Property Name    | C++ Type    | JavaScript Type | Description                                                  |
| ---------------- | ----------- | --------------- | ------------------------------------------------------------ |
| token_factory_id | uint64_t    | number          | ID of the token factory to delete purchase requirement from  |
| index            | uint64_t    | number          | Valid index of existing purchase option for provided factory |
| memo             | std::string | string          | A short operation description                                |

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
