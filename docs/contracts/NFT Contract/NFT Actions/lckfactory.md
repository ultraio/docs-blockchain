---
title: 'lckfactory'
order: 16
deploy: ['staging', 'mainnet']
---

# lckfactory

Allows a token manager to lock hashes for the factory, default token and all minted tokens as well as any token minted afterwards.

## Technical Behavior

The required authorization is the token_factory_manager as the manager is responsible for updating the data.

**token_factory_id** is required and must exist.

## RAM usage

-   Adding uri and hash will consume certain bytes depend on how many data are added.

    -   RAM usage is covered by eosio.nftram. But this action will fail if the unused RAM of eosio.nftram is less than or equal to 200MB.

    -   If the RAM usage is exceed token maximum pack size of 384 bytes, action will fail.

-   Updating or remove meta data which result in no bytes is added, there will be no restriction.

## Action Parameters

| Property Name    | C++ Type | Javascript Type | Example |
| ---------------- | -------- | --------------- | ------- |
| token_factory_id | uint64_t | number          | 1       |

## CLI - cleos

cleos push action eosio.nft.ft lckfactory '[1]' -p manager.acc@active

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'lckfactory',
                authorization: [{ actor: 'manager.acc', permission: 'active' }],
                data: {
                    token_factory_id: 1,
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
