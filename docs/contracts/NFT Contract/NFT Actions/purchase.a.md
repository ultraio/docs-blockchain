---
title: 'purchase.a'
order: 31
deploy: ['experimental']
---

# purchase.a

This action is used to purchase uniqs directly from a token factory.

## Technical Behavior

1. User provides information about the Uniq they wish to purchase

2. Verify that the Uniq has a purchase requirement

3. Obtain the price of the Uniq and convert to UOS

4. Verify that if the purchase requirement requires additional uniqs that the uniqs passed are relevant to the purchase requirement

5. Additional transfer, and burning actions may be used on individual uniqs during the verification process. They are kept if the transaction fails

6. Distribute shares based on purchase requirements, done through inline calls

7. Send protocol fee. Amount and account are configured under `global.share` table scope `0`, done through inline calls

8. Send remainder of shares to the factory manager, done through inline calls

9. Issue the token to the user. **Note**: minting a Uniq requires additional UOS paid by the factory manager. Refer for details to [issue.b - issue tokens with token factory](./issue.b.md)

10. Increment the number of tokens purchased for the given user

11. If a purchase option has been configured with `group_restriction` via the `setprchsreq.a` action, the `purchase.a` action will take these restrictions into account before allowing the purchase to proceed.

> **Note**: For details on how to configure `group_restriction` through `setprchsreq.a`, please refer to [setprchsreq.a Documentation](./setprchsreq.a.md).


If promoter_id is set, the account will be added to resale shares list and will have the payment distributed accordingly. If no promoter is specified then default promoter will be used and is specified by Ultra in `saleshrlmcfg` table under a scope of `0` in `default_promoter`.

### Supplying Uniqs for Purchases

In some cases a token factory may require certain uniqs to exist in the user inventory table to enable the user to purchase a uniq.

Think of it like a pre-requisite or an entry ticket to purchasing other uniqs.

When a uniq is being purchased it goes through our `verify_user_uniqs` function that looks into the buyer's inventory and verifies that the token factories required uniqs matches the user supplied uniqs. The function checks that the `user supplied uniqs` from the user matches the `factory required uniqs`. The function checks that the user is passing uniqs that have the correct token factory id, and checks that the user **is not** passing irrelavant uniqs.

It also ensures that the strategy that is being passed for each uniq matches the strategy used by the factory for the specific token factory id.

Strategy meaning: `0` just check ownership of the provided nft, `1` burn the uniq and `2` transferring the uniq out of the user inventory.

All of these strategies, and individual uniqs can be chosen by the user to ensure they are removing the uniq they want to remove, rather than risking a more 'rare' uniq that they want to keep.

### Burning Uniqs on Purchase

During the purchase if a uniq has a strategy of `1` it will automatically perform an inline call to the `burn` action and pass over any tokens that need to be burned.

Internally we are constructing a vector of which `token_ids` to be burned.

### Transferring Uniqs on Purchase

During the purchase if a uniq has a strategy of `2` it will automatically perform an inline call to the `transfer` action and pass over any tokens that need to be transferred.

The transferred uniqs will automatically be moved to the `transfer_tokens_receiver_account` that was setup during the purchase requirements setup.

Internally we are constructing a vector of which `token_ids` to be transferred.


## Action Parameters

**Action Interface**

| Property Name    | C++ Type                            | JavaScript Type | Description                                                                                                                                                                         |
| ---------------- | ----------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| token_factory_id | uint64_t                            | number          | ID of a token factory to purchase from                                                                                                                                              |
| index            | uint64_t                            | number          | Index of purchase option to use                                                                                                                                                     |
| max_price        | asset                               | string          | Maximum amount of UOS you allow to be withdrawn from your account. If price is set in USD this will prevent transaction from overcharging you in case USD price goes down           |
| buyer            | eosio::name                         | string          | Account that will pay UOS and/or Uniqs for this purchase                                                                                                                            |
| receiver         | eosio::asset                        | string          | Account that will receive the Uniq from this purchase                                                                                                                               |
| promoter_id      | std::optional\<eosio::name>         | string / null   | Optional promoter of the purchase transaction. If no promoter is provided then the default promoter specified in `saleshrlmcfg` (scope `0`) will be used if present                 |
| user_uniqs       | std::optional\<provided_user_uniqs> | Array / null    | List of uniqs the buyer is willing to provide for this purchase option to either be taken from him or to just verify their presence. Refer to `provided_user_uniqs` breakdown below |
| memo             | std::string                         | string          | A short operation description                                                                                                                                                       |

`user_uniqs` is a vector of `provided_user_uniqs`, which has the following structure

| Property Name | C++ Type | JavaScript Type | Description                                                                                                                     |
| ------------- | -------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| token_id      | uint64_t | number          | ID of the Uniq owned by the buyer                                                                                               |
| strategy      | uint8_t  | number          | What the buyer allows to happen to this token. Refer to [fctrprchs.a](../nft-tables.md#fctrprchs-a) for allowed values and usage |


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
