---
title: 'Airgrab Tables'
order: 1

---

# Airgrab Tables

## global.share

Store all campaign data

-   Code: `ultra.rgrab`
-   Table: `global.share`
-   Scope: `ultra.rgrab`
-   Key: `name`
-   Data

| Fields     | Type        | Description                              |
| ---------- | ----------- | ---------------------------------------- |
| `name`     | eosio::name | Campaign Name                            |
| `quantity` | eosio:asset | Reward quantity                          |
| `points`   | uint64_t    | Total point of the campaign              |
| `manager`  | eosio::name | Manager of the campaign                  |
| `deadline` | uint32_t    | Deadline of the campaign in block number |

-   `cleos` Query Example

```shell script
cleos get table ultra.rgrab ultra.rgrab global.share
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"ultra.rgrab", "code":"ultra.rgrab", "table":"global.share", "json": true}'
```

## whitelist

Store whitelisted accounts for a campaign

-   Code: `ultra.rgrab`
-   Table: `whitelist`
-   Scope: `name`
-   Key: `wallet_id`
-   Data

| Fields      | Type                  | Description            |
| ----------- | --------------------- | ---------------------- |
| `wallet_it` | std::vector\<uint8_t> | Available token supply |
| `points`    | uint64_t              | User's campaign points |

-   `cleos` Query Example

```shell script
cleos get table ultra.rgrab <CAMPAIGN> whitelist
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"<CAMPAIGN>", "code":"ultra.rgrab", "table":"whitelist", "json": true}'
```
