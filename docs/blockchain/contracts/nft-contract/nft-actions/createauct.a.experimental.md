---
title: 'createauct.a'
order: 44

---

# createauct.a

Create an Uniq auction

## Technical Behavior

The action stores the auction to `auction.a` table with the specified arguments. The new auction ID is read from `next.nftauc` table whose `value` field is then incremented.

`eosio.nftram` pays RAM usage.

Only one auction may exist per Uniq. The Uniq which is placed on an auction must not be on resell.

`starting_price` should be no less than `min_starting_price` of `auctioncfg.a` and also should be no less than `minimum_resell_price` of the factory.

`promoter_basis_point` should be in the range between `min_promoter_share_bp` and `max_promoter_share_bp` of `saleshrlmcfg` table configurations for resale (scope `1`). The default range is between 200 (2.0 %) and 1000 (10 %).

Time between `start_date` (or the time when the transaction is executed) and `expiry_date` must be within `trading_window_start` and `trading_window_end` of the factory. It must also be at least equal to `min_duration` and must not exceed `max_duration` stored in `auctioncfg.a`.

`duration` should be in the range between `min_duration` and `max_duration` of `offercfg.a`. If duration is longer than the trading window of the factory, it will be capped by `trading_window_end`.

## Action Parameters

Action accepts a single argument `create` of type `create_auction_wrap_v0`. The properties of this type are provided below:

| Property Name        | C++ Type                       | JavaScript Type | Description                                             |
| -------------------- | ------------------------------ | --------------- | ------------------------------------------------------- |
| token_id             | uint64_t                       | Number          | ID of Uniq which the owner wants to place on an auction |
| owner                | name                           | String          | Current owner of the Uniq                               |
| starting_price       | asset                          | String          | Starting auction price in UOS                           |
| promoter_basis_point | uint16_t                       | Number          | Promoter share in units of 0.01 %                       |
| start_date           | std::optional\<time_point_sec> | String          | Optional start date of the auction                      |
| expiry_date          | time_point_sec                 | String          | Initial expected date for the auction to end            |
| memo                 | string                         | String          | Memo                                                    |

## CLI - cleos

```bash
cleos push action eosio.nft.ft createauct.a '[{"token_id": 1, "owner": "alice", "starting_price": "2.00000000 UOS", "promoter_basis_point": 250, "start_date": null, "expiry_date": "2024-09-31T00:00:00", "memo": "new auction"}]' -p alice@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'createauct.a',
            authorization: [{ actor: 'alice', permission: 'active' }],
            data: {
                create: {
                    token_id: 1
                    owner: "alice",
                    starting_price: "2.00000000 UOS",
                    promoter_basis_point: 250,
                    start_date: null,
                    expiry_date: "2024-09-31T00:00:00",
                    memo: "new auction"
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