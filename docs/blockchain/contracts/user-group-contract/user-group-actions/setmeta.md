---
title: 'setmeta'
order: 2

---

## `setmeta.a`

The `setmeta.a` action is the first version of the setmeta action for the Ultra blockchain. It allows users to set or update the `meta_uri` and `meta_hash` for an existing group in the `groups.a` table.

### Behavior

- Only the creator of the group can update the group meta.
- The creator pays for the RAM usage for the update.

### Action Parameters

| Name        | C++ Type                | JavaScript Type | Remarks                                         |
| ----------- | ----------------------- | --------------- | ----------------------------------------------- |
| `creator`   | `name`                  | `String`        | The account that originally created the group.  |
| `group_id`  | `uint64_t`              | `Number/String` | The ID of the group to be modified.             |
| `meta_uri`  | `optional<string>`      | `String/Null`   | URI pointing to the group's off-chain metadata. |
| `meta_hash` | `optional<checksum256>` | `String/Null`   | Hash of the group's metadata.                   |
| `memo`      | `string`                | `String`        | A memo string.                                  |

**Note**: 
- The `meta_uri` and `meta_hash` can be null or an empty string, except that the combination of a null/empty `meta_uri` and a non-null/non-empty `meta_hash` is not allowed.
- The same pair of `meta_uri` and `meta_hash` cannot be set again if they already exist for the group.

### CLI - cleos

To set or update the metadata of a group, use the following `cleos` command:

```bash
cleos push action eosio.group setmeta.a '{"creator": "alice", "group_id": 1, "meta_uri": "https://ultra/group/meta/germany", "meta_hash": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08", "memo": "set group meta"}' -p alice@active
```


### JavaScript - eosjs

You can also use the following eosjs code to interact with this action:

```javascript
await api.transact({
  actions: [
    {
      "account": "eosio.group",
      "name": "setmeta.a",
      "authorization": [{ "actor": "alice", "permission": "active" }],
      "data": {
        "creator": "alice",
        "group_id": 1,
        "meta_uri": "https://ultra/group/meta/germany",
        "meta_hash": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
        "memo": "set group meta"
      }
    }
  ]
});
```
