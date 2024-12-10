---
title: 'bidauction.a'
order: 45

---

# bidauction.a

Bid on an Uniq auction

## Technical Behavior

The action checks that the auction exists in the `auction.a` table with the specified Uniq and verifies that the bid is placed between `start_date` and `expiry_date`.

`bidder` is not allowed to bid on the auctions where he is the `owner`.

`bid` must be at least `min_bid_increment_uos` UOS or `min_bid_increment_basis_point` basis points (units of 0.01%) higher than the previous bid. The values are defined in [`auctioncfg.a` table](../nft-tables.md#auctioncfg-a). This does not apply if the auction does not have any `bidder` which is true for a new auction without any bids.

`bidder` can bid on the auction where he is already the highest bidder.

UOS for the bid is transferred from the `bidder` account to the `eosio.nftauc` account and is released back to the original bidder if the new bid arrives.

`eosio.nftram` pays RAM usage.

A successful bid stores information about the `bidder`, `bid`, `receiver` and `promoter_id` and may increase the `expiry_date` of the auction by `auction_extension_step` if it happens within `auction_extension_threshold`. The values are defined in the `auctioncfg.a` table.

## Action Parameters

Action accepts a single argument `bid` of type `bid_auction_wrap_v0`. The properties of this type are provided below:

| Property Name | C++ Type             | JavaScript Type | Description                                                                                                                               |
| ------------- | -------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| token_id      | uint64_t             | Number          | ID of the Uniq for which there is an auction to bid on                                                                                    |
| bidder        | name                 | String          | Bidder account that authorizes the transaction and will pay the UOS bid                                                                   |
| receiver      | std::optional\<name> | String / Null   | Optional receiver account of the Uniq in case this bid wins the auction. If no account is provided, the bidder will be used as a receiver |
| bid           | asset                | String          | Proposed bid for the auction. It must respect the minimum increment specified in `auctioncfg.a` table                                     |
| promoter_id   | std::optional\<name> | Sting / Null    | Optional promoter account                                                                                                                 |
| memo          | string               | String          | Memo                                                                                                                                      |

## CLI - cleos

```bash
cleos push action eosio.nft.ft bidauction.a '[{"token_id": 1, "bidder": "bob", "receiver": null, "bid": "10.00000000 UOS", "promoter_id": null, "memo": "my bid"}]' -p bob@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'bidauction.a',
            authorization: [{ actor: 'bob', permission: 'active' }],
            data: {
                bid: {
                    token_id: 1,
                    bidder: "bob",
                    receiver: null,
                    bid: "10.00000000 UOS",
                    promoter_id: null,
                    memo: "my bid"
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