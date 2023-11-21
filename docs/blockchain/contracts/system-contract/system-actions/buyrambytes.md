---
title: 'buyrambytes'

---

# buyrambytes - buy an exact amount RAM

Increases receiver's RAM in quantity of bytes provided. An inline transfer from receiver to system contract of tokens will be executed.

| Field    | Type        | Description                                      |
| -------- | ----------- | ------------------------------------------------ |
| payer    | eosio::name | The source account name. Authentication required |
| receiver | eosio::name | The destination account name                     |
| bytes    | uint32_t    | The amount of CPU to buy                         |

## CLI - cleos

```sh
cleos push action eosio buyram '["joe", "joji", 5000]' -p joe
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
        bytes: 5000
      },
    },
  ],
});
```
