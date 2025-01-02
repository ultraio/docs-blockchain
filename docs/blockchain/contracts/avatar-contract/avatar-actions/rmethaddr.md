---
title: 'rmethaddr'

outline: [0, 4]
order: 5
---

# rmethaddr

## Summary

This action is used to unlink user ETH address.

## Technical Behavior

The action requires that there is an authorization of the user and valid ETH address.

## Action Parameters

| Property Name   | C++ Type              | JavaScript Type | Description               |
| --------------- | --------------------- | --------------- | ------------------------- |
| `account`       | eosio::name           | String          | The account of user       |
| `eth_address`   | std::vector\<uint8_t> | String          | The ETH address of user   |

## CLI - cleos

```bash
cleos push action ultra.avatar rmethaddr '["alice", "0x774246187e1e2205c5920898eede0945016080df"]' -p alice
```

## Javascript - eosjs

```js
await api.transact([
    {
        account: 'ultra.avatar',
        name: 'rmethaddr',
        authorization: [{ actor: 'alice', permission: 'active' }],
        data: {
            account: 'alice',
            eth_address: '0x774246187e1e2205c5920898eede0945016080df'
        },
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
]);
```
