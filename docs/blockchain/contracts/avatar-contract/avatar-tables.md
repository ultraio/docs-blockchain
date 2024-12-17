---
title: 'Avatar Tables'
order: 1

---

# Avatar Tables

## accavatar

Store all account avatar

-   Code: `ultra.avatar`
-   Table: `accavatar`
-   Scope: `ultra.avatar`
-   Key: `account`
-   Data

| Fields    | Type        | Description           |
| --------- | ----------- | --------------------- |
| `account` | eosio::name | User Account          |
| `nft_id`  | uint64_t    | The ID of user's Uniq |

-   `cleos` Query Example

```shell script
cleos get table ultra.avatar ultra.avatar accavatar
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"ultra.avatar", "code":"ultra.avatar", "table":"accavatar", "json": true}'
```

## accusername

Store all account username

-   Code: `ultra.avatar`
-   Table: `accusername`
-   Scope: `ultra.avatar`
-   Key: `account`
-   Data

| Fields     | Type        | Description  |
| ---------- | ----------- | ------------ |
| `account`  | eosio::name | User Account |
| `username` | string      | Name of user |

-   `cleos` Query Example

```shell script
cleos get table ultra.avatar ultra.avatar accusername
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"ultra.avatar", "code":"ultra.avatar", "table":"accusername", "json": true}'
```

## accethaddr

Store all account ETH address

-   Code: `ultra.avatar`
-   Table: `accethaddr`
-   Scope: `ultra.avatar`
-   Key: `account`
-   Data

| Fields        | Type                  | Description         |
| ------------- | --------------------- | ------------------- |
| `account`     | eosio::name           | User Account        |
| `eth_address` | std::vector\<uint8_t> | ETH address of user |

-   `cleos` Query Example

```shell script
cleos get table ultra.avatar ultra.avatar accethaddr
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"ultra.avatar", "code":"ultra.avatar", "table":"accethaddr", "json": true}'
```
