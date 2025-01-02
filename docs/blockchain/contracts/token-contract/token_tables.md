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
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"<SYMBOL_RAW_VALUE>", "code":"eosio.token", "table":"stat", "json": true}'
```

## metadata

Store token metadata

-   Code: `eosio.token`
-   Table: `metadata`
-   Scope: `symbol_raw_value`
-   Key: `symbol_raw_value`
-   Data

| Fields        | Type          | Description                    |
| ------------- | ------------- | ------------------------------ |
| `symbol`      | eosio::symbol | The symbol of the token        |
| `name`        | eosio::name   | The name of the token          |
| `icon`        | string        | The URL of token's icon        |
| `description` | string        | The description of the token   |
| `color`       | uint32_t      | The display color of the token |

-   `cleos` Query Example

```shell script
cleos get table eosio.token <SYMBOL_RAW_VALUE> metadata
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"<SYMBOL_RAW_VALUE>", "code":"eosio.token", "table":"metadata", "json": true}'
```

## tokenconfig

Store token strategy configuration

-   Code: `eosio.token`
-   Table: `tokenconfig`
-   Scope: `symbol_raw_value`
-   Key: `symbol_raw_value`
-   Data

| Fields                 | Type                      | Description                                                                                   |
| ---------------------- | ------------------------- | --------------------------------------------------------------------------------------------- |
| `trigger_supply`       | eosio::asset              | The threshold supply for when strategy will be applied to transfer                            |
| `strategy`             | uint16_t                  | The strategy will be used to decide which config to use tax or burn. 0 nothing, 1 burn, 2 tax |
| `rate_bp`              | uint16_t                  | The rate where strategy will be applied in basis where 1 is 0.01%                             |
| `tax_receiver`         | eosio::name               | The account where tax will be transfer to                                                     |
| `whitelisted_accounts` | std::vector\<eosio::name> | The accounts will be exempted from strategy                                                   |

-   `cleos` Query Example

```shell script
cleos get table eosio.token <SYMBOL_RAW_VALUE> tokenconfig
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"<SYMBOL_RAW_VALUE>", "code":"eosio.token", "table":"tokenconfig", "json": true}'
```
