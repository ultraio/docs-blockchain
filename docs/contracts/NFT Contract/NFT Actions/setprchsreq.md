---
title: 'setprchsreq'
order: 32
deploy: ['experimental']
---

# setprchsreq

This action is used to set purchase requirements for a token factory.

## Technical Behavior

Factory manager can specify purchase options for users. Note they currently have to use the same action for both creation and modification of purchase requirements.

`token_factory_id` - token factory managed by a factory manager.

`index` - purchase requirements index. starts with 0.

`price` - price per uniq. Together with `purchase_option_with_uniqs` this is what a user provides to mint a uniq.

`purchase_limit` - how much users can buy via purchase action. it has to be less than factory limit setting and greater or equal to what was already minted via the action.

`promoter_basis_point` is used to specify how much % of a sale a promoter will get.

`purchase_option_with_uniqs` - optional field used to set purchase options via uniqs. user has to have `count` tokens from listed token factories. They will be burned, transferred or checked as per `strategy` setting.

`sale_shares` is used to set royalties.

If RAM price is greater than `maximum_uos_payment` transaction reverts.

`memo` - a string of no more than 256 characters. useful for parsing on a backend.

## Action Parameters

**Action Interface**

| Property Name              | C++ Type                       | JavaScript Type       |
| ---------------------------| ------------------------------ | --------------------- |
| token_factory_id           | uint64_t                       | number                |
| index                      | uint64_t                       | number                |
| price                      | asset                          | string                |
| purchase_limit             | optional\<uint32_t\>           | number / null         |
| promoter_basis_point       | uint16_t                       | number                |
| purchase_option_with_uniqs | optional provided_user_uniqs   | Object / null         |
| sale_shares                | vector                         | Array                 |
| maximum_uos_payment        | optional\<asset\>              | asset / null          |
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
