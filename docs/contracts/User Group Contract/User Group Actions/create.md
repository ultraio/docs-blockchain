---
title: 'create'
order: 1
deploy: ['experimental', 'staging']
---

## `create.a`

The `create.a` action is the first version of the create action for the Ultra blockchain. It registers a new group in the `groups.a` table using the parameters specified by the creator.

### Behavior

- This action reads the new group ID from the `groupid` table and then increments the `id` field.
- The `eosio.group` account pays for the RAM usage for the `groupid` table.
- Any account can create a group, and the creator account pays the RAM usage to store the group info in the `groups.a` table.

### Action Parameters

| Name       | C++ Type         | JavaScript Type | Remarks                                                                                                                                                                     |
|------------|------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `creator`  | `name`           | `String`        | The account that creates the group.                                                                                                                                          |
| `meta_uri` | `optional<string>`| `String/Null`   | URI pointing to the group's off-chain metadata.                                                                                                                              |
| `meta_hash`| `optional<checksum256>`| `String/Null` | Hash of the group's metadata.                                                                                                                                                |
| `memo`     | `string`         | `String`        | A memo string.                                                                                                                                                               |

**Note**: The `meta_uri` and `meta_hash` can be null or an empty string, except that the combination of a null/empty `meta_uri` and a non-null/non-empty `meta_hash` is not allowed.

### CLI - cleos

You can use the following `cleos` command to create a new group:

```bash
cleos push action eosio.group create.a '{"creator": "alice", "meta_uri": "https://ultra/group/meta/germany", "meta_hash": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08", "memo": "new group"}' -p alice@active
```

### JavaScript - eosjs

To interact with this action using eosjs, you can use the following JavaScript code:

```javascript
await api.transact({
  actions: [
    {
      "account": "eosio.group",
      "name": "create.a",
      "authorization": [{ "actor": "alice", "permission": "active" }],
      "data": {
        "creator": "alice",
        "meta_uri": "https://ultra/group/meta/germany",
        "meta_hash": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
        "memo": "new group"
      }
    }
  ]
});
```
