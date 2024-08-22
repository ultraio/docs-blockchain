---
title: 'cancelauct.a'
order: 47

---

# cancelauct.a

Cancel an an Uniq auction without any bids

## Technical Behavior

The action checks that the auction exists in `auction.a` table with the specified Uniq with ID `token_id`.

If the auction has reached its expiration date, the `canceler` can be any account including the auction creator. Otherwise, only the auction creator can cancel an auction.

If the auction contains a bidder the action will fail.

If all checks pass successfully, the auction will be erased from `auction.a` table.

## Action Parameters

| Property Name | C++ Type | JavaScript Type | Description                                        |
| ------------- | -------- | --------------- | -------------------------------------------------- |
| token_id      | uint64_t | Number          | Uniq ID for which the auction needs to be canceled |
| canceler      | name     | String          | Account that authorizes the transaction            |
| memo          | string   | String          | Memo                                               |

## CLI - cleos

```bash
cleos push action eosio.nft.ft cancelauct.a '[1, "alice", "cancel the auction"]' -p alice@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'cancelauct.a',
            authorization: [{ actor: 'alice', permission: 'active' }],
            data: {
                token_id: 1,
                canceler: "alice",
                memo: "cancel the auction",
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```