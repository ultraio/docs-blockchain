---
title: 'RNG Tables'
order: 1

---

# RNG Tables

## jobs

Stores pending random number generation jobs

-   Code: `ultra.rng`
-   Table: `jobs`
-   Scope: `ultra.rng`
-   Key: `id`
-   Data

| Fields      | Type         | Description                                    |
| ----------- | ------------ | ---------------------------------------------- |
| `id`        | uint64_t     | Unique job identifier                          |
| `assoc_id`  | uint64_t     | User-defined association ID for the request   |
| `seed`      | uint64_t     | Seed value used for random number generation  |
| `caller`    | eosio::name  | Account that requested the random number      |

-   `cleos` Query Example

```shell script
cleos get table ultra.rng ultra.rng jobs
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"ultra.rng", "code":"ultra.rng", "table":"jobs", "json": true}'
```

## banlist

Stores banned accounts that cannot request random numbers

-   Code: `ultra.rng`
-   Table: `banlist`
-   Scope: `ultra.rng`
-   Key: `dapp`
-   Data

| Fields | Type        | Description                    |
| ------ | ----------- | ------------------------------ |
| `dapp` | eosio::name | Account name of banned dapp    |

-   `cleos` Query Example

```shell script
cleos get table ultra.rng ultra.rng banlist
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"ultra.rng", "code":"ultra.rng", "table":"banlist", "json": true}'
```

## seeds

Stores used seed values to prevent reuse

-   Code: `ultra.rng`
-   Table: `seeds`
-   Scope: `ultra.rng`
-   Key: `val`
-   Data

| Fields | Type     | Description                    |
| ------ | -------- | ------------------------------ |
| `val`  | uint64_t | Seed value that has been used |

-   `cleos` Query Example

```shell script
cleos get table ultra.rng ultra.rng seeds
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"ultra.rng", "code":"ultra.rng", "table":"seeds", "json": true}'
```

## pubkey

Stores the BLS12-381 public key used for signature verification

-   Code: `ultra.rng`
-   Table: `pubkey`
-   Scope: `ultra.rng`
-   Key: `ultra.rng`
-   Data

| Fields         | Type     | Description                                    |
| -------------- | -------- | ---------------------------------------------- |
| `pk`           | g1       | BLS12-381 public key for signature verification |
| `next_job_id`  | uint64_t | Next available job ID                          |

-   `cleos` Query Example

```shell script
cleos get table ultra.rng ultra.rng pubkey
```

-   `curl` query example

```shell script
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"ultra.rng", "code":"ultra.rng", "table":"pubkey", "json": true}'
```
