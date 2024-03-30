---
title: 'stofrcfg.a'
order: 36

---

# stofrcfg.a

Set global uniq offer configuration

## Behavior

Set global configuration for all uniq offer include both token and token factory.

## Technical Behavior

Only `ultra.nft.ft` account can set buy offer config

The action stores the config in to `offercfg.a` singleton with the specified arguments.

All fields are optional, it will only set the specified arguments and leave the rest the same as existing entry or as the default value if there’s no existing entry.

This action allows one to set the same config and won’t assert.

`eosio.nft.ft` pays RAM usage.

`min_price` must be positive, and only support UOS and USD.

`min_duration` and max_duration must also be positive, with max_duration > min_duration.

`max_active_offer_per_user` must also be positive.

## Action Parameters

| Property Name             | C++ Type            | JavaScript Type    | Definition                                                              |
| ------------------------- | ------------------- | ------------------ | ----------------------------------------------------------------------- |
| min_price                 | optional\<asset>    | String/Null        | Minimum allowed offer price                                             |
| min_duration              | optional\<uint32_t> | Number/String/Null | Minimum allowed offer duration                                          |
| max_duration              | optional\<uint32_t> | Number/String/Null | Maximum allowed offer duration                                          |
| max_active_offer_per_user | optional\<uint32_t> | Number/String/Null | Maximum allowed offer number, in includes both token and factory offers |

## CLI - cleos

```bash
cleos push action eosio.nft.ft stofrcfg.a '{"min_price": "1.00000000 UOS", "min_duration": 86400, "max_duration": 15552000, "max_active_offer_per_user": 20}' -p ultra.nft.ft@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'stofrcfg.a',
            authorization: [{ actor: 'ultra.nft.ft', permission: 'active' }],
            data: {
                min_price: "1.00000000 UOS",
                min_duration: 86400,
                max_duration: 15552000,
                max_active_offer_per_user: 20
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
