---
title: 'adduser'
order: 3
deploy: ['experiment']
---

## `adduser.a`

The `adduser.a` action is the first version of the adduser action in the Ultra blockchain. This action allows the creator of a group to add one or more users to a specified group. The user account names will be added to the `users.a` table and the `nr_users` field in the `groups.a` table will be updated accordingly.

### Behavior

- The creator of the group can add new users to it.
- The `nr_users` field in `groups.a` table is incremented by the number of users added.
- The action will fail if any of the user names have already been added to the group.

### Action Parameters

| Name       | C++ Type        | JavaScript Type | Remarks                                                                                                        |
|------------|-----------------|-----------------|----------------------------------------------------------------------------------------------------------------|
| `creator`  | `name`          | `String`        | The account that originally created the group.                                                                  |
| `group_id` | `uint64_t`      | `Number/String` | The ID used to identify the group to which the users will be added.                                             |
| `users`    | `vector<name>`  | `Array of String`| The user names to be added to the group.                                                                        |
| `memo`     | `string`        | `String`        | A memo string.                                                                                                  |

**Note**:
- The `creator` should be the original creator of the group specified by `group_id`.
- The `users` array should not be empty.

### CLI - cleos

To add users to a group, use the following `cleos` command:

```bash
cleos push action eosio.group adduser.a '{"creator": "alice", "group_id": 0, "users" : ["carol", "daniel"], "memo": "add two new users"}' -p alice@active
```

### JavaScript - eosjs

You can also use the following eosjs code snippet to add users to a group:

```javascript
await api.transact({
  actions: [
    {
      "account": "eosio.group",
      "name": "adduser.a",
      "authorization": [{ "actor": "alice", "permission": "active" }],
      "data": {
        "creator": "alice",
        "group_id": 0,
        "users": ["carol", "daniel"],
        "memo": "add two new users"
      }
    }
  ]
});
```
