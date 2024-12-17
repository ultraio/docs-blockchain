---
title: 'clearavatar'

outline: [0, 4]
order: 2
---

# clearavatar

## Summary

This action is used to unlink user’s Uniq as the avatar of their account.

## Technical Behavior

The action requires authorization of the user who created a link. In case the user hasn’t linked anything an error message will be emitted that the user doesn't have an avatar is returned.

## Action Parameters

| Property Name | C++ Type    | JavaScript Type | Description                                |
| ------------- | ----------- | --------------- | ------------------------------------------ |
| `user`        | eosio::name | String          | The name of user that need to clear avatar |

# CLI - cleos

```bash
cleos push action ultra.avatar clearavatar '["alice"]' -p alice
```

# Javascript - eosjs

```js
await transact([
    {
        account: 'ultra.avatar',
        name: 'clearavatar',
        authorization: [{ actor: 'alice', permission: 'active' }],
        data: {
            user: 'alice',
        },
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
]);
```
