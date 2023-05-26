---
title: 'NFT Tables'
order: 1
deploy: ['staging', 'mainnet']
---

# NFT Tables

## factory.a

-   Table: `factory.a`
-   Code: `eosio.nft.ft`
-   Scope: `eosio.nft.ft`
-   Key: `id`

The table contains token factories settings and the operational info.

| Fields                          | Type                              | Description                                                                                                                              |
| ------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| id                              | uint64_t                          | (primary key) The token factory ID                                                                                                       |
| asset_manager                   | eosio::name                       | Manages the token lifecycle - issuing, burning, reselling etc.                                                                           |
| asset_creator                   | eosio::name                       | Creates the token factory.                                                                                                               |
| conversion_rate_oracle_contract | eosio::name                       | Deprecated. Please do not use.                                                                                                           |
| chosen_rate                     | std::vector\<eosio::asset>        | Deprecated. Please do not use.                                                                                                           |
| minimum_resell_price            | eosio::asset                      | A minimum price when resell on marketplaces.                                                                                             |
| resale_shares                   | std::vector\<eosio::resale_share> | A vector of [account, share] pairs setting the share each account receives during the token resale.                                      |
| mintable_window_start           | std::optional<uint32_t>           | The beginning of the time window when tokens can be minted.                                                                              |
| mintable_window_end             | std::optional<uint32_t>           | The end of the time window when tokens can be minted.                                                                                    |
| trading_window_start            | std::optional<uint32_t>           | The beginning of the time window when tokens can be traded.                                                                              |
| trading_window_end              | std::optional<uint32_t>           | The end of the time window when tokens can be traded.                                                                                    |
| recall_window_start             | std::optional<uint32_t>           | The beginning of the time window when tokens can be recalled.                                                                            |
| recall_window_end               | std::optional<uint32_t>           | The beginning of the time window when tokens can be recalled.                                                                            |
| lockup_time                     | std::optional<uint32_t>           | The time window since token minting in which the token cannot be transferred                                                             |
| conditionless_receivers         | std::vector\<eosio::name>         | A set of token receiver account tokens can be transferred to without any restrictions - like trading windows, minimum resell price, etc. |
| stat                            | uint8_t                           | The token factory status:0 = active - fully functional1 = inactive - cannot mint2 = shutdown - cannot mint or set active                 |
| meta_uris                       | std::vector\<std::string>         | The token factory metadata URI vector.                                                                                                   |
| meta_hash                       | eosio::checksum256                | The token factory metadata hash.                                                                                                         |
| max_mintable_tokens             | std::optional<uint32_t>           | The maximal number of tokens that can be minted with the factory.                                                                        |
| minted_tokens_no                | uint32_t                          | The number of minted of tokens.                                                                                                          |
| existing_tokens_no              | uint32_t                          | The number of minted minus number of burnt tokens.                                                                                       |

Most relevant actions: **create, issue, setcondrecv, setmeta, setstat**

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft eosio.nft.ft factory.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"eosio.nft.ft", "code":"eosio.nft.ft", "table":"factory.a", "json": true}'
```

---

## token.a

-   Table: `token.a`
-   Code: `eosio.nft.ft`
-   Scope: `account`
-   Key: `id`

The table stores the tokens owned by a user.

| Fields           | Type                  | Description                                              |
| ---------------- | --------------------- | -------------------------------------------------------- |
| id               | uint64_t              | (primary key) Global token ID                            |
| token_factory_id | uint64_t              | The token factory ID the token was issued with.          |
| mint_date        | eosio::time_point_sec | The token mint date.                                     |
| serial_number    | uint32_t              | The ordinal number of the token assigned during issuance |

Most relevant actions: **buy, burn**, **issue, resell**.

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft <ACCOUNT> token.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"<ACCOUNT>", "code":"eosio.nft.ft", "table":"token.a", "json": true}'
```

---

## token.b

-   Table: `token.b`
-   Code: `eosio.nft.ft`
-   Scope: `account`
-   Key: `id`

The table stores the tokens owned by a user.

| Fields           | Type                                | Description                                              |
| ---------------- | ----------------------------------- | -------------------------------------------------------- |
| id               | uint64_t                            | (primary key) Global token ID                            |
| token_factory_id | uint64_t                            | The token factory ID the token was issued with.          |
| mint_date        | eosio::time_point_sec               | The token mint date.                                     |
| serial_number    | uint32_t                            | The ordinal number of the token assigned during issuance |
| uri              | std::optional\<string\>             | URI pointing to the metadata of this token               |
| hash             | std::optional\<eosio::checksum256\> | hash of the metadata for this token                      |

Most relevant actions: **buy**, **burn**, **issue.b**, **resell**.

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft <ACCOUNT> token.b
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"<ACCOUNT>", "code":"eosio.nft.ft", "table":"token.b", "json": true}'
```

---

## resale.a

-   Table: `resale.a`
-   Code: `eosio.nft.ft`
-   Scope: `eosio.nft.ft`
-   Key: `token_id`

The table stores tokens for resale.

| Fields               | Type         | Description                             |
| -------------------- | ------------ | --------------------------------------- |
| token_id             | uint64_t     | (primary key) Global token ID           |
| owner                | eosio::name  | The token owner account.                |
| price                | eosio::asset | The token resale price.                 |
| promoter_basis_point | uint16_t     | The token resale advertiser commission. |

Most relevant actions: **resell, cancellresell**

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft eosio.nft.ft resale.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"eosio.nft.ft", "code":"eosio.nft.ft", "table":"resale.a", "json": true}'
```

---

## authmintrs.a

-   Table: `authmintrs.a`
-   Code: `eosio.nft.ft`
-   Scope: `token factory ID`
-   Key: `authorized_minter`

The table stores information about token minters permitted by token factories asset managers or other authorized minters to issue tokens.

| Fields            | Type        | Description                                          |
| ----------------- | ----------- | ---------------------------------------------------- |
| authorized_minter | eosio::name | (primary key) The authorized minter account.         |
| quantity          | uint32_t    | The number of tokens the authorized minter can mint. |

Most relevant actions: **authminter, issue**

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft <TOKEN FACTORY ID> authmintrs.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"<TOKEN FACTORY ID>", "code":"eosio.nft.ft", "table":"authmintrs.a", "json": true}'
```
