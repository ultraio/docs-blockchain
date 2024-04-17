---
title: 'mknftofr.a'
order: 37

---

# mknftofr.a

Make an offer on a Uniq.

## Technical Behavior

The offer should be done at the time which is in the range of trading window of the Uniq factory from which the Uniq was issued.

The action stores the offer to `nftoffer.a` table with the specified arguments. The new offer ID is read from `next.nftofr` table whose `value` field is then incremented.

`eosio.nftram` pays RAM usage.

The offered price will be transferred to `eosio.nftofr` account and will be kept until the offer is either accepted or cancelled.

An account will not be able to make offers on the same Uniq that they already made.

An account will not be able to make offers if their total offers (including Uniq and Uniq factory) is more than `max_active_offer_per_user` of `offercfg.a`, which records the global configurations.

`owner` should be neither buyer nor receiver.

`price` should be no less than `min_price` of `offercfg.a` and also should be no less than `minimum_resell_price` of the factory.

`promoter_basis_point` should be in the range between `min_promoter_share_bp` and `max_promoter_share_bp` of `saleshrlmcfg` table configurations for resale. If `saleshrlmcfg` table doesn’t exist, the default range is between 250 (2.5 %) and 1000 (10 %).

`duration` should be in the range between `min_duration` and `max_duration` of `offercfg.a`. If duration is longer than the trading window of the factory, it will be capped by `trading_window_end`.

## Action Parameters

| Property Name        | C++ Type        | JavaScript Type | Description                                                                      |
| -------------------- | --------------- | --------------- | -------------------------------------------------------------------------------- |
| buyer                | name            | String          | Account who makes an offer                                                       |
| receiver             | optional\<name> | String/Null     | Account who will receive the Uniq, if not specified, buyer will receive the Uniq |
| price                | asset           | String          | Offered price in UOS                                                             |
| promoter_basis_point | uint16_t        | Number          | Promoter share in units of 0.01 %                                                |
| owner                | name            | String          | Account who owns the Uniq                                                         |
| nft_id               | uint64_t        | Number          | ID of Uniq which buyer wants to make offer to                                     |
| duration             | uint32_t        | Number          | Offer duration in seconds                                                        |
| memo                 | string          | String          | Memo                                                                             |

## CLI - cleos

```bash
cleos push action eosio.nft.ft mknftofr.a '{"buyer": "alice", "receiver": null, "price": "2.00000000 UOS", "promoter_basis_point": 250, "owner": "bob", "nft_id": 1, "duration": 86400, "memo": "new offer"}' -p alice@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'mknftofr.a',
            authorization: [{ actor: 'alice', permission: 'active' }],
            data: {
                buyer: "alice",
                receiver: null,
                price: "2.00000000 UOS",
                promoter_basis_point: 250,
                owner: "bob",
                nft_id: 1,
                duration: 86400,
                memo: "new offer"
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```