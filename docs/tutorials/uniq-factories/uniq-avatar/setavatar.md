---
title: 'The `setavatar` action'

outline: [0, 4]
order: 2
---

# The setavatar action

## Summary

This action is used to set a user’s Uniq as the avatar for their account.

## Technical Behavior

The action requires that there is an authorization of the user who is creating a link, and that the nft_id of the Uniq belongs to the user. If a link already exists, it will be updated with a new nft_id.

## Action Parameters

| Property Name | C++ Type | JS Type |
| ------------- | -------- | ------- |
| user          | name     | string  |
| nft_id        | uint64   | number  |

## CLI - cleos

```bash
cleos push action ultra.avatar setavatar '["alice", 42]' -p alice
```

## Javascript - eosjs

```js
await transact([
    {
        account: 'ultra.avatar',
        name: 'setavatar',
        authorization: [{ actor: 'alice', permission: 'active' }],
        data: {
            user: 'alice',
            nft_id: 42,
        },
    },
]);
```
