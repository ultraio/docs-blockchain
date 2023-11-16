---
title: 'newebact'
deploy: ['staging', 'mainnet']
---

# newebact - create an EBA account

| Field       | Type             | Description                                         |
| ----------- | ---------------- | --------------------------------------------------- |
| creator     | eosio::name      | The account that pays for the new account           |
| owner       | eosio::authority | The owner authority of new account                  |
| active      | eosio::authority | The active authority of new account                 |
| max_payment | eosio::asset     | The max payment for the new account creation in UOS |

## CLI - cleos

```sh
cleos push action eosio delegatebw '["from","receiver","5.0000 UOS",true]' -p from
```

## JavaScript - eosjs

```java
await api.transact({
  actions: [
    {
      account: "eosio",
      name: "delegatebw",
      authorization: [{ actor: "from", permission: "active" }],
      data: {
        from: "from",
        receiver: "receiver",
        stake_net_quantity: "5.00000000 UOS",
        transfer: "true"
      },
    },
  ],
});
```
