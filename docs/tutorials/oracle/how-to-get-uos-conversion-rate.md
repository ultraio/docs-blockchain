---
title: 'How to get UOS conversion rate'
order: 0
oultine: [0,5]
---

# How to get UOS conversion rate

Oracle contract allows to retrieve USD to UOS conversion rates from the chain or utilize it in your smart contract to perform the necessary logic. This tutorial will explain those two use cases and provide examples on how to get the conversion rate.

To see details about the way oracle calculates the conversion rate and moving averages see [this page](../../blockchain/contracts/oracle-contract/how-does-oracle-contract-calculate-uos-conversion-rate.md)

## General layout of the oracle data

For broader overview visit [oracle tables structure page](../../blockchain/contracts/oracle-contract/oracle-tables.md)

When working with oracle you will most likely be interested in one of the 3 following tables:
- `finalaverage`
- `lastknwnrate`
- `finalrates`

### Using finalaverage

`finalaverage` should be used in case you want to utilize one of the available moving averages already calculated by the oracle contract. For the list of available moving averages see: [for seconds](https://explorer.mainnet.ultra.io/account/eosio.oracle/tables?scope=SECONDS&tableName=finalaverage), [for minutes](https://explorer.mainnet.ultra.io/account/eosio.oracle/tables?scope=MINUTES&tableName=finalaverage), [for hours](https://explorer.mainnet.ultra.io/account/eosio.oracle/tables?scope=HOURS&tableName=finalaverage), [for days](https://explorer.mainnet.ultra.io/account/eosio.oracle/tables?scope=SECONDS&tableName=finalaverage).

To know the actual window utilized by moving averages in the data you see you need to take the `Param` value (e.g. 600000) and divide it by 10000 (so 60). And if then check the scope you used to find this moving average (e.g. `MINUTES`). So in the example provided it means the moving average is calculated over the window of 60 minutes.

When you've found the moving average you are interested in then just utilize the `average` field stored in the table to get USD to UOS conversion rate (denoted as DUOS symbol) and the associated timestamp.

### Using lastknwnrate

`lastknwnrate` stores a single latest rate received by the oracle contract. It can be useful in case you want to have a quick reference regarding the conversion rate and don't specifically want to know the average over a period of time or look through all the possible exchange that are pushing the rates.

[View in block explorer](https://explorer.mainnet.ultra.io/account/eosio.oracle/tables?scope=eosio.oracle&tableName=lastknwnrate)

### Using finalrates

`finalrates` contains some of the historical information about the conversion rates and it is useful in case you need the previous values for 1 minute, 1 hour or 1 day moving average.

The scope used for `finalrates` table determines the unit of time you are looking at: [1 - minutes](https://explorer.mainnet.ultra.io/account/eosio.oracle/tables?scope=1&tableName=finalrates), [2 - hours](https://explorer.mainnet.ultra.io/account/eosio.oracle/tables?scope=2&tableName=finalrates), [3 - days](https://explorer.mainnet.ultra.io/account/eosio.oracle/tables?scope=1&tableName=finalrates).

Then you can utilize the `rates` field to get the UOS conversion rate. Note that to convert the `price` stored here you will need to divide it by 100000000 (8 zeros). For minutes scope the `rates` are stored in intervals of 60 seconds (so it is an average over the past 60 seconds as well), for hours scope - 60 minutes, for days scope - 24 hours.

## Get conversion rate using cleos (ang jq for parsing)

For `finalaverage` table (can use `SECONDS`, `MINUTES`, `HOURS`, `DAYS`)

```bash
cleos -u https://ultra.api.eosnation.io get table eosio.oracle MINUTES finalaverage | jq '.rows[0].average.price'
```

For `lastknwnrate` table

```bash
cleos -u https://ultra.api.eosnation.io get table eosio.oracle eosio.oracle lastknwnrate | jq '.rows[0].latest_rate.price'
"0.17627000 DUOS"
```

For `finalrates` table (can use 1, 2 or 3)

```bash
cleos -u https://ultra.api.eosnation.io get table eosio.oracle 1 finalrates | jq '.rows[0].rates'
```

## Get conversion rate using Wharfkit

For `finalaverage` table. Since Wharfkit does not properly support `time_symbol` as a scope you will need to use values converted to a `name` type. Refer to [this page](../../blockchain/contracts/oracle-contract/oracle-tables.md#finalaverage) for the list of scopes.

```ts
const contract = await kit.load("eosio.oracle")
const rows = await contract.table("finalaverage").query({scope:".1doep2pdt4oh"}).next()
```

## Get conversion rate using HTTP

## Get conversion rate inside the smart contract

::: details Data structures used for deserialization
```cpp

```
:::