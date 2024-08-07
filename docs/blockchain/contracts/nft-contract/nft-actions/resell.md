---
title: 'resell'
order: 20

---

# resell

Place tokens for sale on the resell marketplace.

## Behavior

Allows a user to set their token for resale and to specify the expected price. Think of it like marking a token for sale in a marketplace.

## Technical Behavior

Upon the usage of the **resell action** the action will verify that the parameters supplied in the action have values. This includes **seller, token_id, price, promoter_basis_point, and memo.**

The memo specifically has a 256 byte limitation. The required authorization is the **seller** as the seller is the one who is meant to own the token that is being sold. During this process there must be a price, and the **promoter_basis_point** has a minimum value specified by Ultra in `saleshrlmcfg` table under a scope of `1` in `min_promoter_share_bp` (default is **200** meaning **2%**) which serves as a share of the potential promoter of the future purchase of the token being sold. Otherwise it cannot exceed the maximum resale_share_limit value for the promoter. The maximum value is specified by Ultra in `saleshrlmcfg` table under a scope of `1` in `max_promoter_share_bp` (default is **1000 (10%)**). This means that that **promoter_basis_point** should by default be between **250 - 1000.** The token has its version looked up and then proceeds with the following resale behavior.

Once a version is determined and the **token** has determined its route for resale it will retrieve the **token** from the token table. It will validate that the **token_factory** exists by using the **token_factory_id** specified inside of the token. It will fail if it cannot determine these values.

During the resale verification it will determine if the price specified by the user is greater than the minimum specified by the **token_factory**. It will also check to ensure that the token can be traded and is valid for the trading window.

It will also ensure that the token has exceeded the lockup time specified by the **token_factory**. Meaning that at this stage it is fully available for being resold or traded.

Once this has been completed it will ensure that the **sale_shares** does not exceed the maximum **sales_share** percentage which is 10000 basis points (100%) and normally this should always be the case.

The resale and auction tables will try to find the token and ensure it doesn’t already exist in the token resale or auction tables.

If it doesn’t exist it gets placed on resell and the transaction is completed.

**Notifications**

`require_recipient` is done for `seller` and asset manager of the token factory

## Action Parameters

Try to think of the action parameters as a **JSON Object** when reading this table. There will be a **JavaScript** example of the action below this table.

| Fields               | Type         | Description                    |
| -------------------- | ------------ | ------------------------------ |
| seller               | eosio::name  | The current Owner account      |
| token_id             | uint64_t     | The NFT ID                     |
| price                | eosio::asset | The resale price               |
| promoter_basis_point | uint16_t     | The resale promoter comission. |
| memo                 | std::string  | A short operation description  |

## CLI - cleos

```bash
cleos push action eosio.nft.ft resell '[{ "seller": "seller.acc", "token_id": 25, "price": "4.00000000 UOS", "promoter_basis_point": 250, "memo": "Up for Sale!" }]' -p seller.acc@active
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'resell',
                authorization: [{ actor: 'seller.acc', permission: 'active' }],
                data: {
                    resell: {
                        seller: 'seller.acc',
                        token_id: 25,
                        price: '4.00000000 UOS',
                        promoter_basis_point: 250,
                        memo: 'Up for Sale!',
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
