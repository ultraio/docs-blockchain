---
title: 'refundram'
order: 4

---

# refundram - return RAM for a refund

Refund bytes of unused RAM from the Account at the price which is averaged based on total UOS spent for RAM purchase and actual RAM that was purchased.

| Field   | Type        | Description                                      |
| ------- | ----------- | ------------------------------------------------ |
| account | eosio::name | The source account name. Authentication required |
| bytes   | uint64_t    | The amount of CPU to return                      |

## CLI - cleos

```sh
cleos push action eosio refundram '["joe", 5000]' -p joe
```

## JavaScript - eosjs

```java
await api.transact({
  actions: [
    {
      account: "eosio",
      name: "refundram",
      authorization: [{ actor: "joe", permission: "active" }],
      data: {
        account: "joe",
        bytes: 5000
      },
    },
  ],
});
```
