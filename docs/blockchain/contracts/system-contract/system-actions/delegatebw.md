---
title: 'delegatebw'

---

# delegatebw - stake tokens for POWER

Delegates bandwidth from one user to another or self through a UOS token transfer or through transferring the bandwidth.

| Field              | Type         | Description                                           |
| ------------------ | ------------ | ----------------------------------------------------- |
| from               | eosio::name  | The source account name. Authentication required      |
| receiver           | eosio::name  | The destination account name                          |
| stake_net_quantity | eosio::asset | The amount of POWER to transfer                       |
| transfer           | bool         | If true transfers UOS tokens but not the POWER itself |

## CLI - cleos

```sh
cleos push action eosio delegatebw '["from","receiver","5.00000000 UOS",true]' -p from
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
