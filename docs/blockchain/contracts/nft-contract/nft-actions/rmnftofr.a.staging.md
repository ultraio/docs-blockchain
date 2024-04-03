---
title: 'rmnftofr.a'
order: 39

---

# rmnftofr.a

Cancel the offer made on the Uniq

## Technical Behavior

Note that `rmnftofr.a` is used to cancel the offer made by `mknftofr.a` only.

A buyer can cancel any of his offers at any time

Once offer is expired, anyone can cancel the offer.

When an offer is canceled, the offered price will be transferred from `eosio.nftofr` account back to buyer.

## Action Parameters

| Property Name | C++ Type | JavaScript Type | Description                  |
| ------------- | -------- | --------------- | ---------------------------- |
| canceler      | name     | String          | Account who cancels an offer |
| nft_id        | uint64_t | Number          | ID of Uniq                   |
| offer_id      | uint64_t | Number          | ID of the offer made on Uniq |
| memo          | string   | String          | Memo                         |

## CLI - cleos

```bash
cleos push action eosio.nft.ft rmnftofr.a '{"canceler": "alice", "nft_id": 1, "offer_id": 2, "memo": "cancel the offer"}' -p alice@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'rmnftofr.a',
            authorization: [{ actor: 'alice', permission: 'active' }],
            data: {
                canceler: "alice",
                nft_id: 1,
                offer_id: 2,
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
