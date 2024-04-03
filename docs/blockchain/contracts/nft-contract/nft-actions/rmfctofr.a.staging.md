---
title: 'rmfctofr.a'
order: 42

---

# rmfctofr.a

Cancel the offer made on the Uniq factory.

## Technical Behavior

Note that `rmfctofr.a` is used to cancel the offer made by `mkfctofr.a` only.

A buyer can cancel any of their offers at any time.

Once the offer is expired, anyone can cancel the offer.

When the offer is canceled, the offered price will be transferred from `eosio.nftofr` account back to buyer.

## Action Parameters

| Property Name | C++ Type | JavaScript Type | Description                  |
| ------------- | -------- | --------------- | ---------------------------- |
| canceler      | name     | String          | Account who cancels an offer |
| factory_id    | uint64_t | Number          | ID of Uniq factory           |
| offer_id      | uint64_t | Number          | ID of the offer made on Uniq |
| memo          | string   | String          | Memo                         |

## CLI - cleos

```bash
cleos push action eosio.nft.ft rmfctofr.a '{"canceler": "alice", "factory_id": 1, "offer_id": 2, "memo": "cancel the offer"}' -p alice@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'rmfctofr.a',
            authorization: [{ actor: 'alice', permission: 'active' }],
            data: {
                canceler: "alice",
                factory_id: 1,
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
