---
title: 'updatename'

outline: [0, 4]
order: 3
---

# updatename

## Summary

This action is used to set a user’s display username.

## Technical Behavior

The action requires that there is an authorization of the user, and the name need to contains only valid character which are alphabet numerical with `.` and `_`.

## Action Parameters

| Property Name | C++ Type    | JavaScript Type | Description          |
| ------------- | ----------- | --------------- | -------------------- |
| `account`     | eosio::name | String          | The account of user  |
| `username`    | string      | String          | The username of user |

## CLI - cleos

```bash
cleos push action ultra.avatar updatename '["alice", "alice123"]' -p alice
```

## Javascript - eosjs

```js
await api.transact([
    {
        account: 'ultra.avatar',
        name: 'updatename',
        authorization: [{ actor: 'alice', permission: 'active' }],
        data: {
            account: 'alice',
            username: 'alice123',
        },
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
]);
```
