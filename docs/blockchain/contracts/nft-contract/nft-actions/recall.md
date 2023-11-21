---
title: 'recall'
order: 19

---

# recall

The token factory manager can use it to recall a token.

::: warning
This action is deprecated.
:::

## Technical Behavior

Upon the usage of the **recall action** the action will verify that the parameters supplied in the action have values. This includes **owner, token_ids.** The memo specifically has a 256 byte limitation. The required authorization is the **token factory manager** of the **token_ids** specified. This can be done entirely without the token owner’s permission.

After doing the initial value checks the NFT contract version is determined and routes the recall function depending on what version the NFT token is.

Each token that is specified inside of **token_ids** will verify the following:

-   The **owner** actually owns the **token_id**.
-   The **token_id** has an entry in the table and a corresponding **token_factory.**
-   The authorization of the **token_factory manager** was given.
-   It will check if a recall window is specified.

    -   It will fail the transaction if no recall window exists for the token.
    -   At least a start or end time for recall windows must be specified for this action to work.

-   It will check if the **token** is past the recall window.

    -   Adds recall window time to the mint time of the token.
    -   Adds recall window end time to the mint time of the token.
    -   If the first bullet exceeds the end time then it cannot be recalled and the transaction will fail.

After checking the above, it will remove any entries in the resale table if available. Then the manager will have the **token** assigned to them.

The **owner** will have the token removed from their table.

_\*This business decision was decided upon to prevent credit card fraud and revoke tokens during a grace period for token sales. After the grace period is exceeded the token cannot be recalled._

## On-the-fly migration

After v1 is activated by activers action, if token exists in v0 token table, token.a, it is moved to v1 token table, token.b. Also, if the token factory from which the token was minted exists in v0 factory table, factory.a, it is moved to factory.b.

When done, v0 entry will be deleted so next time when interact with these data, no migration is needed.

## Action Parameters

Try to think of the action parameters as a **JSON Object** when reading this table. There will be a **JavaScript** example of the action below this table.

| Fields    | Type                    | Description                    |
| --------- | ----------------------- | ------------------------------ |
| owner     | eosio::name             | The NFT Owner account          |
| token_ids | std::vector`<uint64_t>` | The NFTs to recall.            |
| memo      | std::string             | A short operation description. |

## CLI - cleos

```bash
cleos push action eosio.nft.ft recall '[{ "owner": "owner.user.acc", "token_ids": [1], "memo": "credit card fraud"}]' -p manager.acc@active
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'recall',
                authorization: [{ actor: 'manager.acc', permission: 'active' }],
                data: {
                    recall: {
                        owner: 'owner.user.acc',
                        token_ids: [1],
                        memo: 'credit card fraud',
                    },
                },
            },
        ],
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
