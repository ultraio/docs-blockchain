---
title: 'purchase'
order: 31
deploy: ['experimental']
---

# Purchase

This action is used to purchase uniqs directly from a token factory.

## Technical Behavior

TBA

## Action Parameters

**Action Interface**

| Property Name       | C++ Type                       | JavaScript Type       |
| ------------------- | ------------------------------ | --------------------- |
| token_factory_id    | uint64_t                       | number                |
| index               | uint64_t                       | number                |
| max_price           | asset                          | string                |
| buyer               | optional name                  | string / null         |
| receiver            | optional asset                 | string / null         |
| promoter_id         | optional name                  | string / null         |
| user_uniqs          | optional provided_user_uniqs   | Array / null          |
| memo                | string                         | string                |

**provided_user_uniqs Interface**

| Property Name    | C++ Type | JavaScript Type |
| ---------------- | -------- | --------------- |
| token_id         | uint64_t | number          |
| strategy         | uint8_t  | number          |


## CLI - cleos

```bash
cleos push action eosio.nft.ft purchase.a '[
  {
    "token_factory_id": 100,
    "index": 1,
    "max_price": "100 UOS",
    "buyer": "alice",
    "receiver": "token_receiver_account",
    "promoter_id": "",
    "user_uniqs": {
      "tokens": [{
        "token_id": 77,
        "strategy": 2
      }]
    },
    "memo": ""
  }
]' -p alice
```

## JavaScript - eosjs

```js
await api.transact({
    actions: [{
      account: 'eosio.nft.ft',
      name: 'purchase.a',
      authorization: [{ actor: 'alice', permission: 'active' }],
      data: {
        purchase: {
          token_factory_id: 100,
          index: 1,
          max_price: "100 UOS",
          buyer: "alice",
          receiver: "token_receiver_account",
          promoter_id: "",
          user_uniqs: {
            tokens: [{
              token_id: 77,
              strategy: 2
            }]
          },
          memo: ""
        }
      },
    }],
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  }
);
```
