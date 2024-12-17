---
title: 'setavatar'

outline: [0, 4]
order: 1
---

# setavatar

## Summary

This action is used to set a user’s Uniq as the avatar for their account.

## Technical Behavior

The action requires that there is an authorization of the user who is creating a link, and that the `nft_id` of the Uniq belongs to the user. If a link already exists, it will be updated with a new `nft_id`.

## Action Parameters

| Property Name | C++ Type    | JavaScript Type | Description                        |
| ------------- | ----------- | --------------- | ---------------------------------- |
| `user`        | eosio::name | String          | The name of user that own the Uniq |
| `nft_id`      | uint64      | Number          | The ID of user's nft               |

## CLI - cleos

```bash
cleos push action ultra.avatar setavatar '["alice", 42]' -p alice
```

## Javascript - eosjs

```js
await api.transact([
    {
        account: 'ultra.avatar',
        name: 'setavatar',
        authorization: [{ actor: 'alice', permission: 'active' }],
        data: {
            user: 'alice',
            nft_id: 42,
        },
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
]);
```
