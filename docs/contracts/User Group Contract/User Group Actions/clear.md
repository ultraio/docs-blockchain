---
title: 'clear'
order: 5
deploy: ['experimental', 'staging']
---

## `clear.a`

The `clear.a` action is the first version of the `clear` action in the Ultra blockchain. This action allows the creator of a group to remove all or a specified number of users from a group. The number of users removed is controlled by the `nr_removals` parameter.

### Behavior

- The creator of the group can remove all or a specified number of users from the group.
- The `nr_users` field in the `groups.a` table will be decremented by the number of users removed.
- The action will fail if there are no users in the group.

### Action Parameters

| Name          | C++ Type           | JavaScript Type | Remarks                                                                                                  |
|---------------|--------------------|-----------------|----------------------------------------------------------------------------------------------------------|
| `creator`     | `name`             | `String`        | The account that originally created the group.                                                            |
| `group_id`    | `uint64_t`         | `Number/String` | The ID used to identify the group to clear the users from.                                                |
| `nr_removals` | `optional<uint64_t>`| `Number/null`   | If not specified, all users will be removed. Otherwise, the number of users specified will be removed.   |
| `memo`        | `string`           | `String`        | A memo string.                                                                                            |

**Note**:
- The `creator` should be the original creator of the group specified by `group_id`.

### CLI - cleos

To clear users from a group, use the following `cleos` command:

```bash
cleos push action eosio.group clear.a '{"creator": "alice", "group_id": 0, "nr_removals" : 1, "memo": "remove one user"}' -p alice@active
```

### JavaScript - eosjs

You can also use the following eosjs code snippet to clear users from a group:

```javascript
await api.transact({
  actions: [
    {
      "account": "eosio.group",
      "name": "clear.a",
      "authorization": [{ "actor": "alice", "permission": "active" }],
      "data": {
        "creator": "alice",
        "group_id": 0,
        "nr_removals": 1,
        "memo": "remove one user"
      }
    }
  ]
});
```
