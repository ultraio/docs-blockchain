---
title: 'The `clearavatar` action'
deploy: ['staging', 'mainnet']
outline: [0, 4]
order: 3
---

# The clearavatar action

## Summary

This action is used to unlink user’s Uniq as the avatar of their account.

## Technical Behavior

The action requires authorization of the user who created a link. In case the user hasn’t linked anything an error message will be emitted that the user doesn't have an avatar is returned.

## Action Parameters

| Property Name | C++ Type | JS Type |
| ------------- | -------- | ------- |
| user          | name     | string  |

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
]);
```
