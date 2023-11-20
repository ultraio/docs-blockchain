---
title: 'Factory Purchase Options Examples'
deploy: ['staging', 'mainnet']
order: 2
---


# Factory Purchase Options Examples

Here, we provide some example `cleos` commands to set purchase options and to purchase using created options. JSON data from provided `cleos` commands can be copied and utilized as a payload for the transaction for your API library of choice.

-   [setprchsreq.a - set purchase requirement](../../contracts/nft-contract/nft-actions/setprchsreq.a.md)
-   [purchase.a - purchase a token](../../contracts/nft-contract/nft-actions/purchase.a.md)

::: info
Please keep in mind that the factory IDs, token IDs, user group IDs, and account names used throughout this page are not real and must be replaced with the actual data you are interested in.
:::

## Simple UOS/USD pricing

This example utilizes the `price` field to set the price to 50 UOS

::: details setprchsreq.a
```sh
cleos push action eosio.nft.ft setprchsreq.a '[
  {
    "token_factory_id": 100,
    "index": 0,
    "price": "50.00000000 UOS",
    "purchase_limit": null,
    "promoter_basis_point": 100,
    "purchase_option_with_uniqs": null,
    "sale_shares": [],
    "maximum_uos_payment": null,
    "group_restriction": null,
    "purchase_window_start": null,
    "purchase_window_end": null,
    "memo": ""
  }
]' -p factory.manager
```
:::

To be able to purchase from such factory you utilize `purchase.a` action

::: details purchase.a
```sh
cleos push action eosio.nft.ft purchase.a '[
  {
    "token_factory_id": 100,
    "index": 0,
    "max_price": "100.00000000 UOS",
    "buyer": "alice",
    "receiver": "alice",
    "promoter_id": null,
    "user_uniqs": null,
    "memo": ""
  }
]' -p alice
```
:::

This example utilizes the `price` field to set the price to 5 USD

::: details setprchsreq.a
```sh
cleos push action eosio.nft.ft setprchsreq.a '[
  {
    "token_factory_id": 100,
    "index": 1,
    "price": "5.00000000 USD",
    "purchase_limit": null,
    "promoter_basis_point": 100,
    "purchase_option_with_uniqs": null,
    "sale_shares": [],
    "maximum_uos_payment": null,
    "group_restriction": null,
    "purchase_window_start": null,
    "purchase_window_end": null,
    "memo": ""
  }
]' -p factory.manager
```
:::

When purchasing using the option that has USD pricing you still provide `max_price` in UOS. The conversion from the USD price into appropriate UOS price will be done automatically.

::: details purchase.a
```sh
cleos push action eosio.nft.ft purchase.a '[
  {
    "token_factory_id": 100,
    "index": 1,
    "max_price": "100.00000000 UOS",
    "buyer": "alice",
    "receiver": "alice",
    "promoter_id": null,
    "user_uniqs": null,
    "memo": ""
  }
]' -p alice
```
:::

## Limited purchase quantity

Setting `purchase_limit` is optional, and it allows to restrict the total number of tokens that can be purchased using this option. The limit applies to the single option itself and not the accounts that purchase from your factory. So if you set the `purchase_limit` to 10 it means that one account can purchase 10 tokens or five accounts can purchase 2 tokens or ten accounts can purchase 1 token and anything in between.

After exceeding the `purchase_limit`, no one will be able to use this specific purchase option and you either need to create a new purchase option or update an existing one to increase the `purchase_limit` (history for the number of Uniqs purchased is preserved).

::: details setprchsreq.a
```sh
cleos push action eosio.nft.ft setprchsreq.a '[
  {
    "token_factory_id": 100,
    "index": 0,
    "price": "50.00000000 UOS",
    "purchase_limit": 10,
    "promoter_basis_point": 100,
    "purchase_option_with_uniqs": null,
    "sale_shares": [],
    "maximum_uos_payment": null,
    "group_restriction": null,
    "purchase_window_start": null,
    "purchase_window_end": null,
    "memo": ""
  }
]' -p factory.manager
```
:::

## Exclusive access to purchase option via Uniq ownership

`purchase_option_with_uniqs` is a more advanced use case where you are able to link the purchase option to other factories. The example below requires the user to own 1 Uniq from factory with ID 42. If the user owns it then he will be able to use this purchase option, the token from factory 42 will be left untouched. Note how `strategy` is set to 0 ([0 means "check"](../../contracts/nft-contract/nft-actions/purchase.a.md#supplying-uniqs-for-purchases)).

::: details setprchsreq.a
```sh
cleos push action eosio.nft.ft setprchsreq.a '[
  {
    "token_factory_id": 100,
    "index": 0,
    "price": "50.00000000 UOS",
    "purchase_limit": null,
    "promoter_basis_point": 100,
    "purchase_option_with_uniqs": {
        "transfer_tokens_receiver_account": null,
        "factories": [{
            "token_factory_id": 42,
            "count": 1,
            "strategy": 0
        }]
    },
    "sale_shares": [],
    "maximum_uos_payment": null,
    "group_restriction": null,
    "purchase_window_start": null,
    "purchase_window_end": null,
    "memo": ""
  }
]' -p factory.manager
```
:::

When purchasing, the transaction needs to specify which token exactly the user shows as a proof of satisfying condition of ownership for the token from factory 42. In this case, assume token 77 was minted from factory 42.

::: details purchase.a
```sh
cleos push action eosio.nft.ft purchase.a '[
  {
    "token_factory_id": 100,
    "index": 0,
    "max_price": "100.00000000 UOS",
    "buyer": "alice",
    "receiver": "alice",
    "promoter_id": null,
    "user_uniqs": {
      "tokens": [{
        "token_id": 77,
        "strategy": 0
      }]
    },
    "memo": ""
  }
]' -p alice
```
:::

## Exclusive access to purchase option via user groups

Alternative condition for allowing direct purchases from the factory can be the usage of user groups ([covered here](../../contracts/User%20Group%20Contract/overview.md)). In this case user must belong to certain group(s) or not be a part of a specific group(s).

Example below covers the simplest case where a user must belong to the user groups with IDs 11 and 12 at the same time. For more advanced usage, reference the action documentation: [setprchsreq.a user groups support](../../contracts/nft-contract/nft-actions/setprchsreq.a.md#example-usage-of-the-parameter-group-restriction)

::: details setprchsreq.a
```sh
cleos push action eosio.nft.ft setprchsreq.a '[
  {
    "token_factory_id": 100,
    "index": 0,
    "price": "50.00000000 UOS",
    "purchase_limit": null,
    "promoter_basis_point": 100,
    "purchase_option_with_uniqs": null,
    "sale_shares": [],
    "maximum_uos_payment": null,
    "group_restriction": [11, 12],
    "purchase_window_start": null,
    "purchase_window_end": null,
    "memo": ""
  }
]' -p factory.manager
```
:::

When purchasing no extra input is required from the user, the verification of group's membership will be verified by the smart contract automatically

::: details purchase.a
```sh
cleos push action eosio.nft.ft purchase.a '[
  {
    "token_factory_id": 100,
    "index": 0,
    "max_price": "100.00000000 UOS",
    "buyer": "alice",
    "receiver": "alice",
    "promoter_id": null,
    "user_uniqs": null,
    "memo": ""
  }
]' -p alice
```
:::

## Using purchase option for swapping

"Swapping" in this case implies the process where the user loses ownership of his Uniq, the Uniq gets destroyed in the process and the user gets a new Uniq from the factory instead. The example below requires the user to give up two Uniqs: one from factory 43 and one from factory 44, no additional UOS payment needed. Note how `strategy` is set to 1 ([1 means "burn"](../../contracts/nft-contract/nft-actions/purchase.a.md#supplying-uniqs-for-purchases)).

::: details setprchsreq.a
```sh
cleos push action eosio.nft.ft setprchsreq.a '[
  {
    "token_factory_id": 100,
    "index": 0,
    "price": "0.00000000 UOS",
    "purchase_limit": null,
    "promoter_basis_point": 100,
    "purchase_option_with_uniqs": {
        "transfer_tokens_receiver_account": null,
        "factories": [{
            "token_factory_id": 43,
            "count": 1,
            "strategy": 1
        },{
            "token_factory_id": 44,
            "count": 1,
            "strategy": 1
        }]
    },
    "sale_shares": [],
    "maximum_uos_payment": null,
    "group_restriction": null,
    "purchase_window_start": null,
    "purchase_window_end": null,
    "memo": ""
  }
]' -p factory.manager
```
:::

Purchasing from such a purchase option requires the user to specify which Uniqs the user is willing to be given up. Here, assumes token 123 is from factory 43 and token 124 is from factory 44. Note how the `strategy` matches the value of the purchase option.

::: details purchase.a
```sh
cleos push action eosio.nft.ft purchase.a '[
  {
    "token_factory_id": 100,
    "index": 0,
    "max_price": "0.00000000 UOS",
    "buyer": "alice",
    "receiver": "alice",
    "promoter_id": null,
    "user_uniqs": {
      "tokens": [{
        "token_id": 123,
        "strategy": 1
      },{
        "token_id": 124,
        "strategy": 1
      }]
    },
    "memo": ""
  }
]' -p alice
```
:::

## Using purchase option for exchange

Exchanging a Uniq is similar to swapping it but this time instead of a user losing access to his Uniq and burning a Uniq it will simply be transferred to a dedicated account. This may be useful in case Uniqs have valuable metadata attached to them, and you will later utilize those Uniqs in some other scenario. The example below configures the receiver of transferred Uniqs as `1aa2aa3aa4aa` account, and it also must be a Uniq from factory 45 to be able to use this purchase option. Specifying `transfer_tokens_receiver_account` is mandatory in such scenario. Note how `strategy` is set to 2 ([2 means "transfer"](../../contracts/nft-contract/nft-actions/purchase.a.md#supplying-uniqs-for-purchases)).

::: details setprchsreq.a
```sh
cleos push action eosio.nft.ft setprchsreq.a '[
  {
    "token_factory_id": 100,
    "index": 0,
    "price": "0.00000000 UOS",
    "purchase_limit": null,
    "promoter_basis_point": 100,
    "purchase_option_with_uniqs": {
        "transfer_tokens_receiver_account": "1aa2aa3aa4aa",
        "factories": [{
            "token_factory_id": 45,
            "count": 1,
            "strategy": 2
        }]
    },
    "sale_shares": [],
    "maximum_uos_payment": null,
    "group_restriction": null,
    "purchase_window_start": null,
    "purchase_window_end": null,
    "memo": ""
  }
]' -p factory.manager
```
:::

Purchasing using the above option is similar to previous examples. User needs to specify which Uniq will be used during the purchase and this Uniq will be transferred to `1aa2aa3aa4aa` at the end. The `strategy`, again, should match the `strategy` specified in the purchase option itself.

::: details purchase.a
```sh
cleos push action eosio.nft.ft purchase.a '[
  {
    "token_factory_id": 100,
    "index": 0,
    "max_price": "0.00000000 UOS",
    "buyer": "alice",
    "receiver": "alice",
    "promoter_id": null,
    "user_uniqs": {
      "tokens": [{
        "token_id": 125,
        "strategy": 2
      }]
    },
    "memo": ""
  }
]' -p alice
```
:::