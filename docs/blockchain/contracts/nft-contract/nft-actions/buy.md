---
title: 'buy'
order: 6
deploy: ['staging', 'mainnet']
---

# buy

Purchase a token from the resale marketplace.

This will allow the user to purchase a token from the resale marketplace where non-fungible tokens are sold. This requires the buyer’s permission and has an optional parameter that will allow the buyer to gift the token to another user. In the case the token isn't gifted, they should specify themselves as the receiver of the token. There is the optional parameter for a promoter to be tacked on to the sale of a token.

## Technical Behavior

**Parameter validation**

Upon the usage of the buy action, the action will verify that the parameters supplied in the action have values, such as buyer, receiver, token_id, max_price, promoter_id. The memo specifically has a 256-byte limitation. The required authorization is the buyer. The buyer will always need to specify who the receiver of a token is.

Currently max_price is not being used with v0.

**On-the-fly migration**

After v1 is activated by activers action, token exists either in v0 token table, token.a, or v1 token table, token.b.
If the token exists in token.a, then the token factory from which the token was minted exists in v0 factory table, factory.a, which, in this case, is moved to factory.b.
In the following descriptions, token factory and token should be read as v1 data structures.

**Main operations**

The function will look into the resale table and attempt to find a token that matches the token_id specified by the user during their buy action. The transaction will fail if the token is not found or the token is not for sale. This also prevents the buyer from buying their own resale tokens.

Once the token is found it will retrieve the token factory from the token factory table. This value can then be used to ensure that the trading window is valid for the token that is being bought.

If min_resell_price for a token factory is in USD the final price is calculated as max of resell_price and
min_resell_price converted to UOS using 1 min moving average. If max_price is less than final price
transaction is reverted.

If promoter_id is set, the account will be added to resale shares list and will have the payment distributed accordingly. If not promoter is specified then default promoter will be used specified by Ultra in `saleshrlmcfg` table under a scope of `1` in `default_promoter`.

Resale shares in the global resale table will be initialized if un-available.

Shares will be calculated and distributed based on the [2nd Hand Sale Policy](../../../general/antelope-ultra/2nd-hand-sale.md).

After the shares are distributed and no additional transfers need to occur the token will be emplaced into the receiver’s account and the original token owner will have the token erased from their account.

The resale table will have the token erased as well.

**Notifications**

`require_recipient` is done for `buyer`, `receiver`, `owner` of a token under resell and for asset manager of the token factory.

## Action Parameters

Try to think of the action parameters as a **JSON Object** when reading this table. There will be a **JavaScript** example of the action below this table.

### V0

| Fields      | Type         | Description                                  |
| ----------- | ------------ | -------------------------------------------- |
| buyer       | eosio::name  | The account that pays for the NFT            |
| receiver    | eosio::name  | The account that receives the NFT            |
| memo        | std::string  | Memo                                         |
| token_id    | uint64_t     | The NFT ID                                   |
| max_price   | eosio::asset | The maximal NFT price                        |
| promoter_id | eosio::name  | The promoter account that receives comission |

### V1

No Changes

## CLI - cleos

```bash
cleos push action eosio.nft.ft buy '[{ "buyer": "buyer.user.acc", "receiver": "buyer.user.acc", "token_id": 1, "memo": "buying", "max_price": "4.00000000 UOS", "promoter_id": "shroud" }]' -p buyer.user.acc@active
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'buy',
                authorization: [{ actor: 'buyer.user.acc', permission: 'active' }],
                data: {
                    buy: {
                        buyer: 'buyer.user.acc',
                        receiver: 'buyer.user.acc',
                        token_id: 1,
                        memo: 'buying',
                        max_price: '4.00000000 UOS',
                        promoter_id: 'shroud',
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
