---
title: 'settleauct.a'
order: 46

---

# settleauct.a

Settle an expired Uniq auction

## Technical Behavior

The action checks that the auction exists in `auction.a` table with the specified Uniq with ID `token_id` and verifies that the expiration date was reached.

`executer` can be any account including the auction creator and the bidder. No additional payment is taken from the `exectuer` account.

If the auction does not contain any bidder the action will fail. To remove an expired auction without any bids the `cancelauct.a` action should be used instead.

If `promoter_id` was set by the highest bidder, the account will be added to resale shares list and will have the payment distributed accordingly. If not promoter is specified then default promoter will be used specified by Ultra in `saleshrlmcfg` table under a scope of `1` in `default_promoter`.

Resale shares in the global resale table will be initialized if un-available.

Shares will be calculated and distributed based on the [2nd Hand Sale Policy](../../../general/antelope-ultra/2nd-hand-sale.md).

After the shares are distributed and no additional transfers need to occur the token will be emplaced into the receiver’s account configured during the bid and the original token owner will have the token erased from their account.

The `auction.a` table will have the auction entry erased as well.

## Action Parameters

| Property Name | C++ Type | JavaScript Type | Description                                            |
| ------------- | -------- | --------------- | ------------------------------------------------------ |
| token_id      | uint64_t | Number          | ID of the Uniq for which there is an auction to settle |
| executer      | name     | String          | Account that authorizes the transaction                |
| memo          | string   | String          | Memo                                                   |

## CLI - cleos

```bash
cleos push action eosio.nft.ft settleauct.a '[1, "alice", "settle the auction"]' -p alice@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'settleauct.a',
            authorization: [{ actor: 'alice', permission: 'active' }],
            data: {
                token_id: 1,
                executer: "alice",
                memo: "settle the auction",
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```