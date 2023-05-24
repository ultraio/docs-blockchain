---
title: 'buyram - buy RAM with UOS'
order: 2
deploy: ['staging', 'mainnet']
---

# buyram - buy RAM with UOS

Increases the receiver's ram quota based upon current price and quantity of tokens provided. An inline transfer from receiver to system contract of tokens will be executed.

| Field    | Type         | Description                                      |
| -------- | ------------ | ------------------------------------------------ |
| payer    | eosio::name  | The source account name. Authentication required |
| receiver | eosio::name  | The destination account name                     |
| quant    | eosio::asset | The amount of UOS to spend                       |

## CLI - cleos

```sh
cleos push action eosio buyram '["joe", "joji", "5.000 UOS"]' -p joe
```

## JavaScript - eosjs

```java
await api.transact({
  actions: [
    {
      account: "eosio",
      name: "buyram",
      authorization: [{ actor: "joe", permission: "active" }],
      data: {
        payer: "joe",
        receiver: "joji",
        quant: "5.00000000 UOS"
      },
    },
  ],
});
```
