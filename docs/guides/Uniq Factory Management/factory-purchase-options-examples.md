---
title: 'Factory Purchase Options Examples'
deploy: ['staging', 'mainnet']
---


# Factory Purchase Options Examples

## Simple UOS/USD pricing

```sh
cleos push action eosio.nft.ft setprchsreq.a '[
  {
    "token_factory_id": 100,
    "index": 0,
    "price": "50.00000000 UOS",
    "purchase_limit": 1,
    "promoter_basis_point": 100,
    "purchase_option_with_uniqs": null,
    "sale_shares": [],
    "maximum_uos_payment": "2.00000000 UOS",
    "group_restriction": null,
    "purchase_window_start": null,
    "purchase_window_end": null,
    "memo": ""
  }
]' -p factory.manager
```

```sh
cleos push action eosio.nft.ft setprchsreq.a '[
  {
    "token_factory_id": 100,
    "index": 1,
    "price": "5.00000000 USD",
    "purchase_limit": 1,
    "promoter_basis_point": 100,
    "purchase_option_with_uniqs": null,
    "sale_shares": [],
    "maximum_uos_payment": "2.00000000 UOS",
    "group_restriction": null,
    "purchase_window_start": null,
    "purchase_window_end": null,
    "memo": ""
  }
]' -p factory.manager
```

## Limited purchase quantity



## Exclusive access to purchase option via Uniq ownership



## Exclusive access to purchase option via user groups



## Using purchase option for swapping



## Using purchase option for exchange

