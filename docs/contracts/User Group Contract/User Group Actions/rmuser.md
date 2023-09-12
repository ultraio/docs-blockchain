---
title: 'rmuser'
order: 4
deploy: ['experimental']
---

## `rmuser.a`

The `rmuser.a` action is the first version of the `rmuser` action in the Ultra blockchain. This action allows the creator of a group to remove one or more users from a specified group. The user account names will be removed from the `users.a` table and the `nr_users` field in the `groups.a` table will be updated accordingly.

### Behavior

- The creator of the group can remove users from it.
- The `nr_users` field in `groups.a` table is decremented by the number of users removed.
- The action will fail if any of the user names are not in the group.

### Action Parameters

| Name       | C++ Type        | JavaScript Type | Remarks                                                                                                  |
|------------|-----------------|-----------------|----------------------------------------------------------------------------------------------------------|
| `creator`  | `name`          | `String`        | The account that originally created the group.                                                            |
| `group_id` | `uint64_t`      | `Number/String` | The ID used to identify the group to remove the user from.                                                |
| `users`    | `vector<name>`  | `Array of String`| The names of the users to be removed from the group.                                                      |
| `memo`     | `string`        | `String`        | A memo string.                                                                                            |

**Note**:
- The `creator` should be the original creator of the group specified by `group_id`.
- The `users` array should not be empty.

### CLI - cleos

To remove users from a group, use the following `cleos` command:

```bash
cleos push action eosio.group rmuser.a '{"creator": "bob", "group_id": 1, "users" : ["carol", "daniel"], "memo": "remove two users"}' -p bob@active
```

### JavaScript - eosjs

You can also use the following eosjs code snippet to remove users from a group:

```javascript
await api.transact({
  actions: [
    {
      "account": "eosio.group",
      "name": "rmuser.a",
      "authorization": [{ "actor": "bob", "permission": "active" }],
      "data": {
        "creator": "bob",
        "group_id": 1,
        "users": ["carol", "daniel"],
        "memo": "remove two users"
      }
    }
  ]
});
```
