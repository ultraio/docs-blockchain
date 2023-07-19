---
title: 'setprchsreq'
order: 32
deploy: ['experimental']
---

# Purchase

This action is used to set purchase requirements for a token factory.

## Technical Behavior

TBA

## Action Parameters

**Action Interface**

| Property Name              | C++ Type                       | JavaScript Type       |
| ---------------------------| ------------------------------ | --------------------- |
| token_factory_id           | uint64_t                       | number                |
| index                      | uint64_t                       | number                |
| price                      | asset                          | string                |
| purchase_limit             | optional uint32_t              | number / null         |
| promoter_basis_point       | optional asset                 | string / null         |
| purchase_option_with_uniqs | optional                       | Object / null         |
| sale_shares                | provided_user_uniqs            | Array                 |
| maximum_uos_payment        | optional asset                 | asset / null          |
| memo                       | string                         | string                |

**purchase_requirement_with_uniqs option breakdown**

| Property Name                            | C++ Type | JavaScript Type |
| ---------------------------------------- | ---------| --------------- |
| transfer_tokens_receiver_account         | uint64_t | number          |
| factories                                | vector   | Array           |

**factories option breakdown**

| Property Name            | C++ Type | JavaScript Type |
| ------------------------ | ---------| --------------- |
| token_factory_id         | uint64_t | number          |
| count                    | vector   | Array           |
| strategy                 | uint8_t  | number          |



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
await api.transact({
  actions: [{
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
            factories: [{
              token_factory_id: 42,
              count: 3,
              strategy: 0
            }]
          },
          sale_shares: [],
          maximum_uos_payment: '2 UOS',
          memo: ''
        }
      },
    }],
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  }
);
```
