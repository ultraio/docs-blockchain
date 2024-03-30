---
title: 'NFT Tables'
order: 1

---

# NFT Tables

## factory.b

-   Table: `factory.b`
-   Code: `eosio.nft.ft`
-   Scope: `eosio.nft.ft`
-   Key: `id`

The table contains uniq factories settings and the operational info.

| Fields                  | Type                              | Description                                                                                                                              |
| ----------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| id                      | uint64_t                          | (primary key) The token factory ID                                                                                                       |
| asset_manager           | eosio::name                       | Account that manages the token lifecycle - issuing, burning, reselling etc.                                                              |
| asset_creator           | eosio::name                       | Account that ceates the token factory.                                                                                                   |
| minimum_resell_price    | eosio::asset                      | A minimum price when resell on marketplaces.                                                                                             |
| resale_shares           | std::vector\<eosio::resale_share> | A vector of [account, share] pairs setting the share each account receives during the token resale.                                      |
| mintable_window_start   | std::optional\<uint32_t>          | The beginning of the time window when tokens can be minted.                                                                              |
| mintable_window_end     | std::optional\<uint32_t>          | The end of the time window when tokens can be minted.                                                                                    |
| trading_window_start    | std::optional\<uint32_t>          | The beginning of the time window when tokens can be traded.                                                                              |
| trading_window_end      | std::optional\<uint32_t>          | The end of the time window when tokens can be traded.                                                                                    |
| recall_window_start     | std::optional\<uint32_t>          | *Disabled*. The beginning of the time window when tokens can be recalled.                                                                |
| recall_window_end       | std::optional\<uint32_t>          | *Disabled*. The beginning of the time window when tokens can be recalled.                                                                |
| lockup_time             | std::optional\<uint32_t>          | *Disabled*. The time window since token minting in which the token cannot be transferred                                                 |
| conditionless_receivers | std::vector\<eosio::name>         | A set of token receiver account tokens can be transferred to without any restrictions - like trading windows, minimum resell price, etc. |
| stat                    | uint8_t                           | The token factory status:0 = active - fully functional1 = inactive - cannot mint2 = shutdown - cannot mint or set active                 |
| factory_uri             | std::string                       | The token factory metadata URI vector.                                                                                                   |
| factory_hash            | eosio::checksum256                | The token factory metadata hash.                                                                                                         |
| max_mintable_tokens     | std::optional\<uint32_t>          | The maximal number of tokens that can be minted with the factory.                                                                        |
| minted_tokens_no        | uint32_t                          | The number of minted of tokens.                                                                                                          |
| existing_tokens_no      | uint32_t                          | The number of minted minus number of burnt tokens.                                                                                       |
| authorized_tokens_no    | std::optional\<uint32_t>          | The current quantity of tokens that authorized minters can issue                                                                         |
| account_minting_limit   | std::optional\<uint32_t>          | The limit of tokens that can be minted to each individual account                                                                        |
| transfer_window_start   | std::optional\<uint32_t>          | The beginning fo the time window when tokens can be transferred                                                                          |
| transfer_window_end     | std::optional\<uint32_t>          | The end of the time window when tokens can be transferred                                                                                |
| default_token_uri       | std::string                       | The default token metadata URI for tokens without dedicated URI                                                                          |
| default_token_hash      | std::optional\<checksum256>       | The default token metadata hash                                                                                                          |
| lock_hash               | bool                              | Controls whether metadata of the factory, tokens or default tokens could be changed                                                      |

Most relevant actions: **create.b, issue.b, settknmeta, setdflttkn, setcondrecv, setmeta.b, setstatus**

## factory.a

-   Table: `factory.a`
-   Code: `eosio.nft.ft`
-   Scope: `eosio.nft.ft`
-   Key: `id`

The table contains uniq factories settings and the operational info.

::: warning
Deprecated. Refer to `factory.b` instead
:::

| Fields                          | Type                              | Description                                                                                                                              |
| ------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| id                              | uint64_t                          | (primary key) The token factory ID                                                                                                       |
| asset_manager                   | eosio::name                       | Account that manages the token lifecycle - issuing, burning, reselling etc.                                                              |
| asset_creator                   | eosio::name                       | Account that creates the token factory.                                                                                                  |
| conversion_rate_oracle_contract | eosio::name                       | *Deprecated*. Please do not use.                                                                                                         |
| chosen_rate                     | std::vector\<eosio::asset>        | *Deprecated*. Please do not use.                                                                                                         |
| minimum_resell_price            | eosio::asset                      | A minimum price when resell on marketplaces.                                                                                             |
| resale_shares                   | std::vector\<eosio::resale_share> | A vector of [account, share] pairs setting the share each account receives during the token resale.                                      |
| mintable_window_start           | std::optional\<uint32_t>          | The beginning of the time window when tokens can be minted.                                                                              |
| mintable_window_end             | std::optional\<uint32_t>          | The end of the time window when tokens can be minted.                                                                                    |
| trading_window_start            | std::optional\<uint32_t>          | The beginning of the time window when tokens can be traded.                                                                              |
| trading_window_end              | std::optional\<uint32_t>          | The end of the time window when tokens can be traded.                                                                                    |
| recall_window_start             | std::optional\<uint32_t>          | The beginning of the time window when tokens can be recalled.                                                                            |
| recall_window_end               | std::optional\<uint32_t>          | The beginning of the time window when tokens can be recalled.                                                                            |
| lockup_time                     | std::optional\<uint32_t>          | The time window since token minting in which the token cannot be transferred                                                             |
| conditionless_receivers         | std::vector\<eosio::name>         | A set of token receiver account tokens can be transferred to without any restrictions - like trading windows, minimum resell price, etc. |
| stat                            | uint8_t                           | The token factory status:0 = active - fully functional1 = inactive - cannot mint2 = shutdown - cannot mint or set active                 |
| meta_uris                       | std::vector\<std::string>         | The token factory metadata URI vector.                                                                                                   |
| meta_hash                       | eosio::checksum256                | The token factory metadata hash.                                                                                                         |
| max_mintable_tokens             | std::optional\<uint32_t>          | The maximal number of tokens that can be minted with the factory.                                                                        |
| minted_tokens_no                | uint32_t                          | The number of minted of tokens.                                                                                                          |
| existing_tokens_no              | uint32_t                          | The number of minted minus number of burnt tokens.                                                                                       |

Most relevant actions: **create, issue, setcondrecv, setmeta, setstatus**

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft eosio.nft.ft factory.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"eosio.nft.ft", "code":"eosio.nft.ft", "table":"factory.a", "json": true}'
```

---

## token.b

-   Table: `token.b`
-   Code: `eosio.nft.ft`
-   Scope: `account`
-   Key: `id`

The table stores the tokens owned by a user.

| Fields           | Type                               | Description                                              |
| ---------------- | ---------------------------------- | -------------------------------------------------------- |
| id               | uint64_t                           | (primary key) Global token ID                            |
| token_factory_id | uint64_t                           | The token factory ID the token was issued with.          |
| mint_date        | eosio::time_point_sec              | The token mint date.                                     |
| serial_number    | uint32_t                           | The ordinal number of the token assigned during issuance |
| uri              | std::optional\<string>             | URI pointing to the metadata of this token               |
| hash             | std::optional\<eosio::checksum256> | hash of the metadata for this token                      |

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

## token.a

-   Table: `token.a`
-   Code: `eosio.nft.ft`
-   Scope: `account`
-   Key: `id`

The table stores the tokens owned by a user.

::: warning
Deprecated. Refer to `token.b` instead
:::

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

The table stores information about token minters permitted by uniq factories asset managers or other authorized minters to issue tokens.

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

## global.share

-   Table: `global.share`
-   Code: `eosio.nft.ft`
-   Scope: `eosio.nft.ft` (for second hand), `0` (for first hand)
-   Key: N/A

The table stores information about global share of each first hand purchase or second hand token sale: which account and how many basis points it receives (each basis point = 0.01%)

| Fields      | Type        | Description                                     |
| ----------- | ----------- | ----------------------------------------------- |
| receiver    | eosio::name | Receiver of the global sale share               |
| basis_point | uint16_t    | Share of the sale specified in the basis points |

Most relevant actions: `buy`, `resell`, `globalshare`, `fhglobalshr`, `purchase.a`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft eosio.nft.ft global.share
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"eosio.nft.ft", "code":"eosio.nft.ft", "table":"global.share", "json": true}'
```

## migration

-   Table: `migration`
-   Code: `eosio.nft.ft`
-   Scope: `eosio.nft.ft`
-   Key: N/A

The table stores information about current active NFT standard version and flags used to indicate the status of the migration

| Fields                | Type     | Description                                                                                                                                                         |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| active_nft_version    | uint64_t | Version of the current active NFT standard                                                                                                                          |
| table_migration_stats | uint16_t | Bitmask storing information about the status of the migration. `factory_a_migration_done = 0x0000'0000'0000'0001`, `token_a_migration_done = 0x0000'0000'0000'0002` |

Most relevant actions: `migration`, `mgrfactories`, `mgrnfts`, `setnftmgrflg`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft eosio.nft.ft migration
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"eosio.nft.ft", "code":"eosio.nft.ft", "table":"migration", "json": true}'
```

## next.factory

-   Table: `next.factory`
-   Code: `eosio.nft.ft`
-   Scope: `0`
-   Key: N/A

The table stores information about the ID of the next created token factory

| Fields | Type     | Description                                         |
| ------ | -------- | --------------------------------------------------- |
| value  | uint64_t | ID that the next created token factory will receive |

Most relevant actions: `create`, `create.b`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft 0 next.factory
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"0", "code":"eosio.nft.ft", "table":"next.factory", "json": true}'
```

## next.token

-   Table: `next.token`
-   Code: `eosio.nft.ft`
-   Scope: `0`
-   Key: N/A

The table stores information about the ID of the next issued token

| Fields | Type     | Description                                |
| ------ | -------- | ------------------------------------------ |
| value  | uint64_t | ID that the next issued token will receive |

Most relevant actions: `issue`, `issue.b`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft 0 next.token
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"0", "code":"eosio.nft.ft", "table":"next.token", "json": true}'
```

## next.fct.grp

-   Table: `next.fct.grp`
-   Code: `eosio.nft.ft`
-   Scope: `0`
-   Key: N/A

The table stores information about the ID of the next created factory group

| Fields | Type     | Description                                         |
| ------ | -------- | --------------------------------------------------- |
| value  | uint64_t | ID that the next created token factory will receive |

Most relevant actions: `creategrp`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft 0 next.fct.grp
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"0", "code":"eosio.nft.ft", "table":"next.fct.grp", "json": true}'
```

## tfcreateflag

-   Table: `tfcreateflag`
-   Code: `eosio.nft.ft`
-   Scope: `eosio.nft.ft`
-   Key: N/A

The table stores information about whether the creation of uniq factories by accounts other than Ultra is allowed

| Fields        | Type | Description                                                                       |
| ------------- | ---- | --------------------------------------------------------------------------------- |
| require_ultra | bool | Whether Ultra permission is required to create a token factory. Default is `true` |

Most relevant actions: `create.b`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft eosio.nft.ft tfcreateflag
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"eosio.nft.ft", "code":"eosio.nft.ft", "table":"tfcreateflag", "json": true}'
```

## mintstat.a

-   Table: `mintstat.a`
-   Code: `eosio.nft.ft`
-   Scope: `token factory ID`
-   Key: `user`

The table stores information about how many tokens were minted to the specific user account. Utilized to check against minting limit within the token factory

| Fields | Type     | Description                                                            |
| ------ | -------- | ---------------------------------------------------------------------- |
| user   | name     | Account name of the user                                               |
| minted | uint32_t | Number of tokens that were minted to this user from this token factory |

Most relevant actions: `issue`, `issue.b`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft 15 mintstat.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"15", "code":"eosio.nft.ft", "table":"mintstat.a", "json": true}'
```

## ramvault.a

-   Table: `ramvault.a`
-   Code: `eosio.nft.ft`
-   Scope: `eosio.nft.ft`
-   Key: `owner`

The table stores information about the utilization of RAM vault per account with usage and UOS payment done

| Fields  | Type    | Description                         |
| ------- | ------- | ----------------------------------- |
| owner   | name    | Owner of this RAM vault entry       |
| usage   | int64_t | Current RAM usage of the vault RAM  |
| payment | int64_t | Total payment done to the RAM vault |

Most relevant actions: `create.b`, `issue.b`, `clrmintst`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft eosio.nft.ft ramvault.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"eosio.nft.ft", "code":"eosio.nft.ft", "table":"ramvault.a", "json": true}'
```

## factorygrp.a

-   Table: `factorygrp.a`
-   Code: `eosio.nft.ft`
-   Scope: `eosio.nft.ft`
-   Key: `id`

The table stores information about the utilization of RAM vault per account with usage and UOS payment done

| Fields      | Type                   | Description                                                  |
| ----------- | ---------------------- | ------------------------------------------------------------ |
| id          | uint64_t               | ID of this token factory group                               |
| manager     | eosio::name            | Manager of the factory group                                 |
| uri         | std::string            | URI of the factory group metadata                            |
| hash        | eosio::checksum256     | Hash of the factory group metadata                           |
| factories   | std::vector\<uint64_t> | Array of factories in the token factory group                |
| uos_payment | int64_t                | UOS payment charged during the creation of the factory group |

Most relevant actions: `creategrp`, `deletegrp`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft eosio.nft.ft factorygrp.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"eosio.nft.ft", "code":"eosio.nft.ft", "table":"factorygrp.a", "json": true}'
```

## saleshrlimcfg

-   Table: `saleshrlmcfg`
-   Code: `eosio.nft.ft`
-   Scope: `0 - first hand, 1 - second hand`
-   Key: N/A

The table stores information about maximum share basis points that can be distributed during token purchase

| Fields                    | Type                        | Description                                                                                         |
| ------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------- |
| max_ultra_share_bp        | uint16_t                    | Maximum protocol fee that can be configured with `globalshare`                                      |
| max_factory_share_bp      | uint16_t                    | Maximum total resale shares that can be specified during token factory creation                     |
| min_promoter_share_bp     | uint16_t                    | Minimum allowed promoter fee for first-hand or second-hand purchase (depending on scope)            |
| max_promoter_share_bp     | uint16_t                    | Maximum allowed promoter fee for first-hand or second-hand purchase (depending on scope) metadata   |
| default_promoter          | std::optional\<eosio::name> | Default promoter used during first-hand or second-hand purchase if none was specified in the action |
| promoter_payments_enabled | bool                        | Whether the promoter shares are enabled globally                                                    |

Most relevant actions: `setsharelim`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft 0 saleshrlmcfg
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":0, "code":"eosio.nft.ft", "table":"saleshrlmcfg", "json": true}'
```

## fctrprchs.a

-   Table: `fctrprchs.a`
-   Code: `eosio.nft.ft`
-   Scope: `token factory ID`
-   Key: `id`

The table stores information about the utilization of RAM vault per account with usage and UOS payment done

| Fields                     | Type                                            | Description                                                                                                                                        |
| -------------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                         | uint64_t                                        | ID of this purchase requirement                                                                                                                    |
| price                      | asset                                           | Price of the uniq specified in UOS or USD                                                                                                          |
| purchase_limit             | uint32_t                                        | Max number of uniqs that can be purchased with this purchase option                                                                                |
| purchased_tokens_no        | uint16_t                                        | Number of uniqs that were already purchased using this option (Default: 0)                                                                         |
| promoter_basis_point       | uint16_t                                        | UOS share received by the promoter with each purchase done for this option. Specified in basis points. 1 means 0.01%                               |
| purchase_option_with_uniqs | std::optional\<purchase_requirement_with_uniqs> | Optional feature that allows the purchase option to require user to own uniqs from specific factories or to pay with uniqs from specific factories |
| sale_shares                | std::vector\<sale_share>                        | A vector of [account, share] pairs setting the share each account receives during the purchase                                                     |
| uos_payment                | int64_t                                         | UOS payment charged during the creation of the purchase option                                                                                     |
| purchase_window_start      | std::optional\<eosio::time_point_sec>           | Optional start of the purchase window. Cannot purchase using this option until the start                                                           |
| purchase_window_end        | std::optional\<eosio::time_point_sec>           | Optional end of the purchase window. Cannot purchase using this option after the end                                                               |
| group_restriction          | std::optional\<uint64_t_vector>                 | Optional user group requirement can be specified                                                                                                   |

Most relevant actions: `setprchsreq.a`, `setprchsreq.b`, `delprchsreq.a`, `purchase.a`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft 123 fctrprchs.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"123", "code":"eosio.nft.ft", "table":"fctrprchs.a", "json": true}'
```

The tables below describe the structure and usage of each of the fields inside `purchase_option_with_uniqs` and `uniqs_count` structures that can be provided 

### `purchase_option_with_uniqs` type

| Field                            | Type                        | Description                                                                                                                                                |
| -------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| transfer_tokens_receiver_account | std::optional\<eosio::name> | If any of the `factories` specified contain a requirement with `transfer` strategy then this account will be the one to receive the uniq during `purchase` |
| factories                        | std::vector\<uniqs_count>   | List of purchase requirements using uniqs from other factories. Description of the `uniqs_count` type provided below                                       |

### `uniqs_count` type

| Field            | Type     | Description                                                                                                                                                                                                                                                                                                                         |
| ---------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| token_factory_id | uint64_t | ID of the factory that the user needs to have tokens from                                                                                                                                                                                                                                                                           |
| count            | uint32_t | How many tokens are needed from the specified factory                                                                                                                                                                                                                                                                               |
| strategy         | uint8_t  | Can be either `check` (use 0), `burn` (use 1), `transfer` (use 2). If `check` is used - only the presence of the tokens is validated, no change occurs. If `burn` is specified - provided uniq from the factory will be burnt. If `transfer` is specified - provided uniq will be transferred to `transfer_tokens_receiver_account` |

### `group_restriction` type

By default, regardless of which action version is used, `group_restriction` will be saved as vector of 64-bit integers. This might be hard to read since it includes logical expression with the value. For example: `2305843009213693953` means `NOT 1` or `~1`.

To be displayed as human-readable values, we recommend you implement some conversion on your side. Here is our small JavaScript example to convert 64-bit integer to readable string. You can run the included demo with `node user-group-converter.js`.

```js
// user-group-converter.js
const { isBigUint64Array } = require("util/types")

const OR_MASK       = 0x1000000000000000n   // 0: AND, 1: OR (= 1152921504606846976)
const NEGATION_MASK = 0x2000000000000000n   // 0: No Negation, 1: Negation (= 2305843009213693952)
const GROUP_ID_MASK = ~(OR_MASK + NEGATION_MASK)

/* RULES
- 1st element in group restriction array should not contain OR or AND
- Combination rules: [OR] + [NEGATION] + [group_id]
    + &[group_id]   = 0                     + 0                     + [group_id]
    + |[group_id]   = 1152921504606846976   + 0                     + [group_id]
    + ~[group_id]   = 0                     + 2305843009213693952   + [group_id]
    + |~[group_id]  = 1152921504606846976   + 2305843009213693952   + [group_id]
*/

const expression_to_string = (group, firstIndex = false) => {
    var result = ""
    
    // OR Extraction
    if (!firstIndex) {
        if ((group & OR_MASK) == OR_MASK)
            result += "|" // OR
        else
            result += "&" // AND
    }

    // NEGATION Extraction
    if ((group & NEGATION_MASK) == NEGATION_MASK)
        result += "~" // NOT

    // Group ID Extraction
    result += group & GROUP_ID_MASK
    
    return result;
}

const convert_group_restrictions = (groupRestrictions) => {

    var result = ""

    if (!isBigUint64Array(groupRestrictions) || groupRestrictions.length == 0)
        return result
    
    for (var i = 0; i < groupRestrictions.length; ++i) {
        result += expression_to_string(groupRestrictions[i], i == 0);
    }

    return result
}

const demo = () => {
    const groups = new BigUint64Array([2305843009213693953n, 2n, 3458764513820540931n]) // = "~1&2|~3"
    console.log(convert_group_restrictions(groups))
}

demo()
```

## offercfg.a

-   Table: `offercfg.a`
-   Code: `eosio.nft.ft`
-   Scope: `eosio.nft.ft`
-   Key: `N/A`

The table stores information about global uniq offer configuration

| Fields                    | Type     | Description                                                              |
| ------------------------- | -------- | ------------------------------------------------------------------------ |
| min_price                 | asset    | Minimum offer price in UOS (Default: 1 UOS)                              |
| min_duration              | uint32_t | Minimum duration for offer in seconds (Default: 86400 sec or 1 day)      |
| max_duration              | uint32_t | Maximum duration for offer in seconds (Default: 15552000 sec or 180 day) |
| max_active_offer_per_user | uint32_t | Maximum active offer per user (Default: 50)                              |

Most relevant actions: `stofrcfg.a`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft eosio.nft.ft offercfg.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"eosio.nft.ft", "code":"eosio.nft.ft", "table":"offercfg.a", "json": true}'
```

## next.nftofr

-   Table: `next.nftofr`
-   Code: `eosio.nft.ft`
-   Scope: `0`
-   Key: N/A

The table stores information about the ID of the next created token offer

| Fields | Type     | Description                                       |
| ------ | -------- | ------------------------------------------------- |
| value  | uint64_t | ID that the next created token offer will receive |

Most relevant actions: `mknftofr.a`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft 0 next.nftofr
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"0", "code":"eosio.nft.ft", "table":"next.nftofr", "json": true}'
```

## nftoffer.a

-   Table: `nftoffer.a`
-   Code: `eosio.nft.ft`
-   Scope: `token ID`
-   Key: `id`

The table stores information about the offer made by the buyer for specific token ID

| Fields               | Type                 | Description                                                                                  |
| -------------------- | -------------------- | -------------------------------------------------------------------------------------------- |
| offer_id             | uint64_t             | Token offer ID                                                                               |
| buyer                | name                 | Buyer who make the offer for token                                                           |
| receiver             | std::optional\<name> | Users who will receive the token if offer is accepted, if specified                          |
| price                | asset                | Offer price in UOS                                                                           |
| promoter_basis_point | uint16_t             | UOS share received by the promoter with this offer. Specified in basis points. 1 means 0.01% |
| expiry_date          | time_point_sec       | Expiry date of the offer in seconds from the EPOCH                                           |

Most relevant actions: `mknftofr.a`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft <TOKEN ID> nftoffer.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"<TOKEN ID>", "code":"eosio.nft.ft", "table":"nftoffer.a", "json": true}'
```

## next.fctofr

-   Table: `next.fctofr`
-   Code: `eosio.nft.ft`
-   Scope: `0`
-   Key: `N/A`

The table stores information about the ID of the next created uniq offer

| Fields | Type     | Description                                               |
| ------ | -------- | --------------------------------------------------------- |
| value  | uint64_t | ID that the next created token factory offer will receive |

Most relevant actions: `mkfctofr.a`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft 0 next.fctofr
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"0", "code":"eosio.nft.ft", "table":"next.fctofr", "json": true}'
```

## fctoffer.a

-   Table: `fctoffer.a`
-   Code: `eosio.nft.ft`
-   Scope: `token factory ID`
-   Key: `id`

The table stores information about the offer made by the buyer for specific token factory ID

| Fields               | Type                 | Description                                                                                  |
| -------------------- | -------------------- | -------------------------------------------------------------------------------------------- |
| offer_id             | uint64_t             | Token factory offer ID                                                                       |
| buyer                | name                 | Buyer who make the offer for token factory                                                   |
| receiver             | std::optional\<name> | Users who will receive the token if offer is accepted, if specified                          |
| price                | asset                | Offer price in UOS                                                                           |
| promoter_basis_point | uint16_t             | UOS share received by the promoter with this offer. Specified in basis points. 1 means 0.01% |
| expiry_date          | time_point_sec       | Expiry date of the offer in seconds from the EPOCH                                           |

Most relevant actions: `mkfctofr.a`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft <TOKEN FACTORY ID> fctoffer.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"<TOKEN FACTORY ID>", "code":"eosio.nft.ft", "table":"fctoffer.a", "json": true}'
```

## buyoffer.a

-   Table: `buyoffer.a`
-   Code: `eosio.nft.ft`
-   Scope: `eosio.nft.ft`
-   Key: `account`

The table stores information about the offer made by the buyer for specific token factory ID

| Fields      | Type                  | Description                                                              |
| ----------- | --------------------- | ------------------------------------------------------------------------ |
| buyer       | name                  | Buyer account                                                            |
| nft_ids     | std:vector\<uint64_t> | Token IDs of all offers made by buyer, sorted in ascending order         |
| factory_ids | std:vector\<uint64_t> | Token factory IDs of all offers made by buyer, sorted in ascending order |

Most relevant actions: `mkfctofr.a`

-   `cleos` Query Example

```sh
cleos get table eosio.nft.ft eosio.nft.ft buyoffer.a
```

-   `curl` query example

```sh
curl <NODEOS_API_IP>/v1/chain/get_table_rows -X POST -d '{"scope":"eosio.nft.ft", "code":"eosio.nft.ft", "table":"buyoffer.a", "json": true}'
```
