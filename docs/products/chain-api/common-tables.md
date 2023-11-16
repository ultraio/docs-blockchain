---
title: 'Common Table Lookups'
deploy: ['staging', 'mainnet']
order: -99998
---

# Common Table Lookups

When you are looking for information about the Ultra blockchain and its individual uers there are a few tables in particular that are very handy to lookup.

See [get table rows](./REST/get-table-rows.md) for more information.

## Latest USD/UOS Price

| account      | table      | scope |
| ------------ | ---------- | ----- |
| eosio.oracle | finalrates | 1     |

## User Owned Tokens

| account      | table   | scope              |
| ------------ | ------- | ------------------ |
| eosio.nft.ft | token.a | `*account of user` |
| eosio.nft.ft | token.b | `*account of user` |

## Token Factory

| account      | table     | scope        |
| ------------ | --------- | ------------ |
| eosio.nft.ft | factory.a | eosio.nft.ft |
| eosio.nft.ft | factory.b | eosio.nft.ft |