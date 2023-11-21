---
title: 'undelegatebw'
order: 8

---

# undelegatebw - unstake tokens for POWER

Unstake delegated bandwidth that a user staked for another user or self. If the user delegated bandwidth to the receiver without UOS transfer, they may re-obtain the bandwidth at any time.

| Field              | Type         | Description                                           |
| ------------------ | ------------ | ----------------------------------------------------- |
| from               | eosio::name  | The source account name. Authentication required      |
| receiver           | eosio::name  | The destination account name                          |
| stake_net_quantity | eosio::asset | The amount of POWER to unstake                        |
| transfer           | bool         | If true transfers UOS tokens but not the POWER itself |

## CLI - cleos

```sh
cleos push action eosio undelegatebw '["from","receiver","5.0000 UOS",true]' -p from
```

## JavaScript - eosjs

```java
await api.transact({
  actions: [
    {
      account: "eosio",
      name: "undelegatebw",
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
