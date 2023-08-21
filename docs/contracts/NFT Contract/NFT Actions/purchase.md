---
title: 'purchase'
order: 31
deploy: ['experimental']
---

# Purchase

This action is used to purchase uniqs directly from a token factory.

## Technical Behavior

### Supplying Uniqs for Purchases

In some cases a token factory may require certain uniqs to exist in the user inventory table to enable the user to purchase a uniq.

Think of it like a pre-requisite or an entry ticket to purchasing other uniqs.

When a uniq is being purchased it goes through our `verify_user_uniqs` function that looks into the buyer's inventory and verifies that the token factories required uniqs matches the user supplied uniqs. The function checks that the `user supplied uniqs` from the user matches the `factory required uniqs`. The function checks that the user is passing uniqs that have the correct token factory id, and checks that the user **is not** passing irrelavant uniqs.

It also ensures that the strategy that is being passed for each uniq matches the strategy used by the factory for the specific token factory id.

Strategy meaning.... `0` just check, `1` burn the uniq and `2` transferring the uniq out of the user inventory.

All of these strategies, and individual uniqs can be chosen by the user to ensure they are removing the uniq they want to remove, rather than risking a more 'rare' uniq that they want to keep.


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
