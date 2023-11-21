---
title: 'KYC Tables'
order: 1

---

# KYC Tables

## kyc

-   Code: `eosio.kyc`
-   Table: `kyc`
-   Scope: `user`
-   Key: `provider`
-   Data

| Fields          | Type               | Description                      |
| --------------- | ------------------ | -------------------------------- |
| `provider`      | eosio::name        | KYC Provider who user registered |
| `cert_id`       | eosio::checksum256 | User KYC data                    |
| `req_signature` | eosio::signature   | User signature                   |
| `pro_signature` | eosio::signature   | Provider signature               |

-   `cleos` Query Example

```shell script
cleos get table eosio.kyc <USER> kyc
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"<USER>", "code":"eosio.kyc", "table":"kyc", "json": true}'
```

## kyc.state

-   Code: `eosio.kyc`
-   Table: `kyc.state`
-   Scope: `eosio.kyc`
-   Data

| Fields       | Type | Description |
| ------------ | ---- | ----------- |
| `is_enabled` | bool | KYC state   |

-   `cleos` Query Example

```shell script
cleos get table eosio.kyc eosio.kyc kyc.state
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"eosio.kyc", "code":"eosio.kyc", "table":"kyc.state", "json": true}'
```
