---
title: 'cancelresell'
order: 7
deploy: ['staging', 'mainnet']
---

# cancelresell

This action can be used to cancel the resell of a token.

## Technical Behavior

After using **cancel resell action** the action will verify that the parameters supplied in the action have values. This includes **token_id and memo.**

The memo specifically has a 256 byte limitation. The required authorization is the **seller** as the seller is the one who is meant to own the token that is being sold. The token has its version looked up and then proceeds with the following resale behavior.

Once a version is determined and the **token** has determined its route for resale it will retrieve the **token** from the token table. It will validate that the **resale** entry existing meaning that the token is currently set up for sale.

Once the **resale** entry is found and authorization of the token owner is verified then this **resale** entry is erased and it is no longer possible to buy this token.

## Action Parameters

Try to think of the action parameters as a **JSON Object** when reading this table. There will be a **JavaScript** example of the action below this table.

### V0

| Fields   | Type     | Description                    |
| -------- | -------- | ------------------------------ |
| token_id | uint64_t | The NFT ID                     |
| memo     | string   | A short operation description. |

### V1

No Changes

## CLI - cleos

```bash
cleos push action eosio.nft.ft cancelresell '[{ "token_id": 25, "memo": "Sale is closed!" }]' -p seller.acc@active
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'cancelresell',
                authorization: [{ actor: 'seller.acc', permission: 'active' }],
                data: {
                    cancelresell: {
                        token_id: 25,
                        memo: 'Sale is closed!',
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
