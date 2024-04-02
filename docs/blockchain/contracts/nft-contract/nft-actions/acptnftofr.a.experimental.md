---
title: 'acptnftofr.a'
order: 38

---

# acptnftofr.a

Accept the offer made on Uniq.

## Technical Behavior

Note that `acptnftofr.a` is used to accept the offer made by `mknftofr.a` only.

When the action is executed, the offer should not be expired and the Uniq should be valid (i.e., should have not been burned).

The offered price will be checked again to confirm that it should be no less than `minimum_resell_price` of the factory.

The Uniq will be transferred to the buyer, or the receiver if specified when the offer was made.

The amount of offered price will be split in the same manner as 2nd hand resale, and part of it will be transferred to the owner.

The promoter share, which was specified when `mknftofr.a` action was called, was transferred to the promoter specified as `promoter_id` argument, or to the default promoter if it is set in `saleshrlmcfg` table.

Shares will be calculated and distributed based on the [2nd Hand Sale Policy](../../../general/antelope-ultra/2nd-hand-sale.md).

The offer will be removed from `nftoffer.a` table.

The Uniq ID will be removed from `buyoffer.a` table and if both `nft_ids` and `factory_ids` fields becomes empty, the buyer's record itself will be removed. 

## Action Parameters

| Property Name | C++ Type        | JavaScript Type | Definition                   |
| ------------- | --------------- | --------------- | ---------------------------- |
| owner         | name            | String          | Account who owns the Uniq    |
| nft_id        | uint64_t        | Number          | ID of Uniq will be accepted  |
| offer_id      | uint64_t        | Number          | ID of the offer made on Uniq |
| promoter_id   | optional\<name> | String/Null     | Promoter account             |
| memo          | string          | String          | Memo                         |

## CLI - cleos

```bash
cleos push action eosio.nft.ft acptnftofr.a '{"owner": "alice", "nft_id": 1, "offer_id": 2, "memo": "accept the offer"}' -p alice@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'acptnftofr.a',
            authorization: [{ actor: 'alice', permission: 'active' }],
            data: {
                owner: "alice",
                nft_id: 1,
                offer_id: 2,
                memo: "accept the offer"
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
