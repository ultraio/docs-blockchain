---
title: 'Token Tables'
order: 1

---

# Token Tables

## accounts

Store all account balance created by this contract

-   Code: `eosio.token`
-   Table: `accounts`
-   Scope: `user`
-   Key: `symbol_raw_value`
-   Data

| Fields    | Type         | Description   |
| --------- | ------------ | ------------- |
| `balance` | eosio::asset | Token balance |

-   `cleos` Query Example

```shell script
cleos get table eosio.token <USER> accounts
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"<USER>", "code":"eosio.token", "table":"accounts", "json": true}'
```

## stat

Store token supply created by this contract

-   Code: `eosio.token`
-   Table: `stat`
-   Scope: `symbol_raw_value`
-   Key: `symbol_raw_value`
-   Data

| Fields       | Type         | Description            |
| ------------ | ------------ | ---------------------- |
| `supply`     | eosio::asset | Available token supply |
| `max_supply` | eosio::asset | Maximum token supply   |
| `issuer`     | eosio::name  | Issuer of this token   |

-   `cleos` Query Example

```shell script
cleos get table eosio.token <SYMBOL_RAW_VALUE> stat
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"<SYMBOL_RAW_VALUE>", "code":"eosio.token", "table":"stat", "json": true}'s
```
