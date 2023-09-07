---
title: 'On-Chain User Groups'
deploy: ['experiment']
outline: [0, 4]
order: -90
---

# On-Chain User Groups in Ultra

This document describes the feature of on-chain user groups in Ultra. It serves as a guide for both users and developers to understand how this feature works and how it can be utilized in smart contracts.

Whether you are a developer looking to integrate this system into your application, or an end-user seeking to understand how to use the CLI or JavaScript SDK, this guide has got you covered. The documentation is divided into several key sections, each focusing on different aspects of the system.

### What Will You Learn?

- **Smart Contract Actions**: Understand how to create and manage groups through actions like `create.a`, `setmeta.a`, `adduser.a`, `rmuser.a`, and `clear.a`.
- **CLI Commands**: Get a hands-on guide on how to use `cleos` commands for performing various actions.
- **JavaScript SDK (eosjs)**: Learn how to make transactions using JavaScript via eosjs.
- **Table Descriptions**: Get acquainted with the blockchain tables like `groupid`, `groups.a`, and `users.a` that store state information for the group management system.

## Table of Contents

- [Rules](#rules)
- [Use Cases](#use-cases)
- [Potential Queries](#potential-queries)
- [Storing Group Information](#storing-group-information)
- [API Documentation](#api-documentation)
- [Table Descriptions](#table-descriptions)

## Rules

### Group Creation

- Any account can create a group.
- The creator pays for the RAM usage.
- Optionally, a URI and hash for off-chain metadata can be specified during creation.

### Group Scope

- All groups reside in a global scope, not under the creator's scope.

### Group Information

For each group, the following information is stored on-chain:

- **ID**: Globally unique identifier that auto-increases.
- **Creator**: The EOSIO account that created the group.
- **User Number**: Number of users in the group.
- **Meta_URI**: URI for metadata (e.g., `https://ultra/group/meta/germany` or `IPFS://23LSDJFLSKJFL…`)
- **Meta_Hash**: Hash of the metadata.

#### Metadata Rules

1. Both `meta_uri` and `meta_hash` can have values.
2. Both can be empty.
3. `meta_uri` not empty, `meta_hash` is empty.
4. Cannot have an empty `meta_uri` while `meta_hash` is not empty.

### Group Updates

- Only the creator can update `meta_uri` and `meta_hash`.
- The creator pays for the additional RAM usage or receives a RAM refund.

### User Management

- Only the creator can add new users to or remove existing users from the group.
- The creator pays for RAM when adding users and receives a RAM refund when removing users.

## Use Cases

- Any smart contract can utilize groups for various functionalities.
- A user needs to belong to a group to mint tokens.
- Issue an NFT to a user if the user belongs to a specific group.
- Ownership rules can be group-dependent.


## API Documentation

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

## `setmeta.a`

The `setmeta.a` action is the first version of the setmeta action for the Ultra blockchain. It allows users to set or update the `meta_uri` and `meta_hash` for an existing group in the `groups.a` table.

### Behavior

- Only the creator of the group can update the group meta.
- The creator pays for the RAM usage for the update.

### Action Parameters

| Name       | C++ Type         | JavaScript Type | Remarks                                                                                                                              |
|------------|------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `creator`  | `name`           | `String`        | The account that originally created the group.                                                                                        |
| `group_id` | `uint64_t`       | `Number/String` | The ID of the group to be modified.                                                                                                   |
| `meta_uri` | `optional<string>`| `String/Null`   | URI pointing to the group's off-chain metadata.                                                                                       |
| `meta_hash`| `optional<checksum256>`| `String/Null` | Hash of the group's metadata.                                                                                                         |
| `memo`     | `string`         | `String`        | A memo string.                                                                                                                        |

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

## Table Descriptions

The Ultra blockchain employs various tables to store information about groups and their users. This chapter outlines the structure, properties, and example states of these tables.

### `groupid` Table


#### Description
The `groupid` table keeps track of the next group ID to be issued during the creation of a new group.

- **Owner**: `eosio.group`
- **Scope**: `eosio.group`
- **Type**: Singleton

#### Fields

- `id`: The next ID to be issued when creating a new group.

#### Example State

```bash
$ cleos get table eosio.group eosio.group groupid
{
  "rows": [{
      "id": 3
    }
  ],
  "more": false,
  "next_key": ""
}
```


### `groups.a` Table


#### Description
The `groups.a` table serves as the first version of the group information table. Each row within the table holds key details about a group, including its unique ID, the account that created the group, optional metadata URI and hash, as well as the count of users within the group.

- **Owner**: `eosio.group`
- **Scope**: `eosio.group`
- **Type**: Multi-index
- **Primary Index**: `id`

#### Fields

- `id`: A unique identifier assigned to the group.
- `creator`: The EOSIO account responsible for creating the group.
- `meta_uri`: An optional URI pointing to metadata stored off-chain.
- `meta_hash`: An optional hash string of the metadata for validation.
- `nr_users`: A count of the number of users currently within the group.

#### Example State

```bash
$ cleos get table eosio.group eosio.group groups.a
{
  "rows": [
    {
      "id": 0,
      "creator": "alice",
      "meta_uri": null,
      "meta_hash": null,
      "nr_users": 0
    },
    {
      "id": 1,
      "creator": "alice",
      "meta_uri": "meta_uri",
      "meta_hash": null,
      "nr_users": 0
    },
    {
      "id": 2,
      "creator": "bob",
      "meta_uri": "meta_uri",
      "meta_hash": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
      "nr_users": 0
    }
  ],
  "more": false,
  "next_key": ""
}
```

### `users.a` Table


#### Description
The `users.a` table is the first version of the group users table. It holds records of user accounts that belong to each group. Each row contains the EOSIO account name of a user that is part of a specific group.

- **Owner**: `eosio.group`
- **Scope**: Group ID
- **Type**: Multi-index
- **Primary Index**: `user.value` (uint64_t representation of the user account)

#### Fields

- `user`: The EOSIO account name of a user in the group.

#### Example State

```bash
$ cleos get table eosio.group 0 users.a
{
  "rows": [
    {
      "user": "carol"
    },
    {
      "user": "daniel"
    }
  ],
  "more": false,
  "next_key": ""
}
```
