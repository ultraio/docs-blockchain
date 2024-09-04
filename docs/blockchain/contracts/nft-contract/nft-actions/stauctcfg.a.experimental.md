---
title: 'stauctcfg.a'
order: 43

---

# stauctcfg.a

Set global Uniq auction configuration

## Behavior

Set global configurations for all Uniq auctions.

## Technical Behavior

Only `ultra.nft.ft` account can set Uniq auction configurations.

The action stores the configurations to `auctioncfg.a` singleton table with the specified arguments.

All fields are optional, the action will only update the specified arguments and leave the rest the same as existing entry or as the default value if there’s no existing entry.

The action even accepts the same values as the ones currently stored in `auctioncfg.a`.

`eosio.nft.ft` pays RAM usage.

`min_starting_price` must be positive, and only supports UOS.

Both `min_duration` and `max_duration` must be positive, with `max_duration` must be greater than `min_duration`.

`min_bid_increment_basis_point` must not exceed 10000 (100%).

`min_bid_increment_uos` must be specified in UOS and have a positive amount.

`auction_extension_step` must be greater or equal to `auction_extension_threshold`. In case one of them is set to 0, the other one must be equal to 0 as well.

## Action Parameters

Action accepts a single argument `config` of type `set_auction_config_wrap_v0`. The properties of this type are provided below:

| Property Name                 | C++ Type            | JavaScript Type | Description                                                                                                                                              |
| ----------------------------- | ------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| min_starting_price            | optional\<uint32_t> | Number/Null     | Minimum auction starting price in UOS                                                                                                                    |
| min_duration                  | optional\<uint32_t> | Number/Null     | Minimum auction duration                                                                                                                                 |
| max_duration                  | optional\<uint32_t> | Number/Null     | Maximum auction duration                                                                                                                                 |
| min_bid_increment_basis_point | optional\<uint32_t> | Number/Null     | Minimum increment between the bids in basis points (0.01%)                                                                                               |
| min_bid_increment_uos         | optional\<asset>    | String/Null     | Minimum increment between the bids in UOS                                                                                                                |
| auction_extension_threshold   | optional\<uint32_t> | Number/Null     | If a bid happens within `auction_extension_threshold` before the end of an auction, then the auction duration will be extended by `auction_extension_step` from the time the bid occurs |
| auction_extension_step        | optional\<number>   | Number/Null     | See `auction_extension_threshold` |

## CLI - cleos

```bash
cleos push action eosio.nft.ft stauctcfg.a '[{"min_starting_price": "1.00000000 UOS", "min_duration": 3600, "max_duration": 2592000, "min_bid_increment_basis_point": 500, "min_bid_increment_uos": "1.00000000 UOS", "auction_extension_threshold": 600, "auction_extension_step": 600}]' -p ultra.nft.ft@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'stauctcfg.a',
            authorization: [{ actor: 'ultra.nft.ft', permission: 'active' }],
            data: {
                config: {
                    min_starting_price: "1.00000000 UOS",
                    min_duration: 3600,
                    max_duration: 2592000,
                    min_bid_increment_basis_point: 500,
                    min_bid_increment_uos: "1.00000000 UOS",
                    auction_extension_threshold: 600,
                    auction_extension_step: 600
                }
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
