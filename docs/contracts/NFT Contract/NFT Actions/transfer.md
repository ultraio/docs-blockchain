---
title: 'transfer'
order: 29
deploy: ['staging', 'mainnet']
---

# transfer

Hand tokens over to another user.

## Behavior

Used to transfer a non-fungible token from one user to another. This requires the **token_id** of a minted token in order to successfully transfer a token from one user to another.

## Technical Behavior

Upon the usage of the **transfer action** the action will verify that the parameters supplied in the action have values. This includes **from, to, token_ids.** The memo specifically has a 256 byte limitation. The required authorization is the **from** user and will also check if the **to** account is an account that exists on the chain. The **token_ids** vector is verified to not be empty and each **token_id** is sent through a process where it retrieves the NFT contract version and routes the transfer depending on what version the NFT token is.

Once a version is determined and the **token id** has determined its route for transfer it will retrieve the **token** from the token table. The **token** from the token table will include a **token factory id** and this will be used to fetch the **token factory** data. The data retrieved from the **token factory** that is used to verify a handful of criteria which is dependent on the token creator’s specifications.

-   The token will not be able to be transferred if the **from** user does not own this token.

-   The token will not be able to be transferred if it is not available for trading.

-   The token will not be able to be transferred if there is a lockup period for the token and you’re within it.

-   The token will not be able to be transferred if the trading window has not begun, or has ended.

-   The token will not be able to be transferred while it is put up for resale.

After this data is verified the token is erased from the **from** user and is given to the **to** user.

This process is **repeated for each token**.

**Notifications**

`require_recipient` is done for `from` account, `to` account and for asset managers of corresponding token factories

## Action Parameters

Try to think of the action parameters as a **JSON Object** when reading this table. There will be a **JavaScript** example of the action below this table.

| Fields    | Type                    | Description                             |
| --------- | ----------------------- | --------------------------------------- |
| from      | eosio::name             | The sending Account.                    |
| to        | eosio::name             | The receiving Account.                  |
| token_ids | std::vector`<uint64_t>` | The array of NFT IDs to be transferred. |
| memo      | std::string             | A short operation description.          |

## CLI - cleos

```bash
cleos push action eosio.nft.ft transfer '[{ "from": "from.user.acc", "to": "to.user.acc", "token_ids": [1,2,3,4,5], "memo": "have some tokens!" }]' -p from.user.acc@active
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'transfer',
                authorization: [{ actor: 'from.user.acc', permission: 'active' }],
                data: {
                    transfer: {
                        from: 'from.user.acc',
                        to: 'to.user.acc',
                        token_ids: [1, 2, 3, 4, 5],
                        memo: 'have some tokens!',
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
