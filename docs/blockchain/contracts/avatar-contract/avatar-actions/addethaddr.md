---
title: 'addethaddr'

outline: [0, 4]
order: 4
---

# addethaddr

## Summary

This action is used to link user account with ETH signature and address.

## Technical Behavior

The action requires that there is an authorization of the user, a valid ETH signature and address.

## Action Parameters

| Property Name   | C++ Type              | JavaScript Type | Description               |
| --------------- | --------------------- | --------------- | ------------------------- |
| `account`       | eosio::name           | String          | The account of user       |
| `eth_signature` | std::vector\<uint8_t> | String          | The ETH signature of user |
| `eth_address`   | std::vector\<uint8_t> | String          | The ETH address of user   |

## CLI - cleos

```bash
cleos push action ultra.avatar addethaddr '["alice", "0x34d95ba2cdfdc4abbcc9b2627a8956c16753023903e14a4a8f0d2cef42a614fe", "0x774246187e1e2205c5920898eede0945016080df"]' -p alice
```

## Javascript - eosjs

```js
await api.transact([
    {
        account: 'ultra.avatar',
        name: 'addethaddr',
        authorization: [{ actor: 'alice', permission: 'active' }],
        data: {
            account: 'alice',
            eth_signature: '0x34d95ba2cdfdc4abbcc9b2627a8956c16753023903e14a4a8f0d2cef42a614fe',
            eth_address: '0x774246187e1e2205c5920898eede0945016080df'
        },
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
]);
```
