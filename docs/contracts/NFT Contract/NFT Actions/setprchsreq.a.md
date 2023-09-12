---
title: 'setprchsreq.a'
order: 32
deploy: ['experimental']
---

# setprchsreq.a

This action is used to set purchase requirements for a token factory.

Tokens purchased will be issued to the receiver account using [issue.b](./issue.b.md) action. Factory manager pays for minting the token

::: warning
Be mindful of the price you set for purchasing uniqs. If the price is too low and there are no restrictions for users to purchase uniqs using this purchase option then it may be abused to purchase many uniqs very cheap and then burn them. Associated cost to mint a token is on token factory manager
:::

## Technical Behavior

The factory manager can specify purchase options for users. Note that currently they have to use the same action for both creation and modification of purchase requirements.

-   If **asset_manager** is an account other than `ultra.nft.ft`, the cost of a factory creation is paid to `eosio.nftram` and it will be locked up in the purchase option.

    -   First, the cost in USD is (factory RAM payment size) \* (RAM price), where

        -   NFT RAM payment size: **1656 bytes**

            - estimated for a token with `purchase_option_with_uniqs` of 64

        -   RAM price: **0.15 USD/KB**

    -   The cost is paid in UOS. The action gets `1 MINUTE` conversion rate in USD/UOS from `eosio.oracle` contract. and calculates the cost by
        (1661B/1024B \* 0.15USD/KB) / (conversion rate) = `0.24331055` **USD**/(conversion rate)

`token_factory_id` - token factory managed by a factory manager.

`index` - purchase requirements index. starts with 0.

`price` - price per uniq. Should be specified in either `UOS` or `USD`. Together with `purchase_option_with_uniqs` this is what a user provides to mint a uniq. If `price` is set to 0 then either `purchase_limit` should be set or `purchase_option_with_uniqs` should require some token to be burnt or transferred.

`purchase_limit` - how much users can buy via purchase action. It has to be less than factory limit setting and greater or equal to what was already minted via the action. If value provided is below the number of tokens already purchased from this option the `purchase_limit` will be set to be equal to the number of purchased tokens from this option

`promoter_basis_point` is used to specify how much % of a sale a promoter will get.

`purchase_option_with_uniqs` - optional field used to set purchase options via uniqs. user has to have `count` tokens from listed token factories. They will be burned, transferred or checked as per `strategy` setting.

`sale_shares` is used to set royalties.

If RAM price is greater than `maximum_uos_payment` transaction reverts.

If token factory is inactive transaction reverts as well.

`memo` - a string of no more than 256 characters. useful for parsing on a backend.

## Action Parameters

**Action Interface**

| Property Name              | C++ Type                            | JavaScript Type | Description                                                                                                                                                                                                                                          |
| -------------------------- | ----------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| token_factory_id           | uint64_t                            | number          | ID of the factory to add (or update) purchase option to                                                                                                                                                                                              |
| index                      | uint64_t                            | number          | Index of the purchase option. Multiple purchase options can be added to a single factory                                                                                                                                                             |
| price                      | eosio::asset                        | string          | Price of the Uniqs from this purchase option either in UOS or USD. Can also set 0 price                                                                                                                                                              |
| purchase_limit             | optional\<uint32_t>                 | number / null   | Maximum number of Uniqs that can be purchased from this purchase option. Must not exceed factory minting limit                                                                                                                                       |
| promoter_basis_point       | uint16_t                            | number          | UOS share received by the promoter with each purchase done for this option. Specified in basis points                                                                                                                                                |
| purchase_option_with_uniqs | std::optional\<provided_user_uniqs> | Object / null   | Optional feature that allows the purchase option to require user to own uniqs from specific factories or to pay with uniqs from specific factories. Refer to a link below for more details                                                           |
| sale_shares                | std::vector\<sale_share>            | Array           | A vector of [account, share] pairs setting the share each account receives during the purchase                                                                                                                                                       |
| maximum_uos_payment        | optional\<eosio::asset>             | asset / null    | Maximum amount of UOS manager allows to be take for the creation of the purchase option. Since the price is fixed in USD the equivalent UOS payment may fluctuate. Using this option will prevent the manager from paying more then he is willing to |
| memo                       | std::string                         | string          | A short operation description                                                                                                                                                                                                                        |

**purchase_requirement_with_uniqs option breakdown**

Refer to [fctrprchs.a](../nft-tables.md#fctrprchs-a)

**uniqs_count type breakdown**

Refer to [fctrprchs.a](../nft-tables.md#fctrprchs-a)

## CLI - cleos

```bash
cleos push action eosio.nft.ft setprchsreq.a '[
  {
    "token_factory_id": 100,
    "index": 1,
    "price": "50 UOS",
    "purchase_limit": 1,
    "promoter_basis_point": 100,
    "purchase_option_with_uniqs": {
      "transfer_tokens_receiver_account": "",
      "factories": [{
        "token_factory_id": 42,
        "count": 3,
        "strategy": 0
      }]
    },
    "sale_shares": [],
    "maximum_uos_payment": "2 UOS",
    "memo": ""
  }
]' -p factory.manager
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'setprchsreq.a',
                authorization: [{ actor: 'factory.manager', permission: 'active' }],
                data: {
                    purchase_option: {
                        token_factory_id: 100,
                        index: 1,
                        price: '50 UOS',
                        purchase_limit: 1,
                        promoter_basis_point: 100,
                        purchase_option_with_uniqs: {
                            transfer_tokens_receiver_account: '',
                            factories: [
                                {
                                    token_factory_id: 42,
                                    count: 3,
                                    strategy: 0,
                                },
                            ],
                        },
                        sale_shares: [],
                        maximum_uos_payment: '2 UOS',
                        memo: '',
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
