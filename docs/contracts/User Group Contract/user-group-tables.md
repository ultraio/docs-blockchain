---
title: 'On-Chain User Groups Tables'
deploy: ['experimental', 'staging']
outline: [0, 4]
order: -98
---

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
