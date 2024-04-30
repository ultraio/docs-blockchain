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
- [`finalaverage`](../../blockchain/contracts/oracle-contract/oracle-tables.md#finalaverage)
- [`lastknwnrate`](../../blockchain/contracts/oracle-contract/oracle-tables.md#lastknwnrate)
- [`finalrates`](../../blockchain/contracts/oracle-contract/oracle-tables.md#finalrates)

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

## Get conversion rate using cleos (and jq for parsing)

For `finalaverage` table (can use `SECONDS`, `MINUTES`, `HOURS`, `DAYS`)

```bash
cleos -u https://ultra.api.eosnation.io get table eosio.oracle MINUTES finalaverage | jq '.rows[0].average.price'
```

For `lastknwnrate` table

```bash
cleos -u https://ultra.api.eosnation.io get table eosio.oracle eosio.oracle lastknwnrate | jq '.rows[0].latest_rate.price'
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

For `lastknwnrate` table

```ts
const contract = await kit.load("eosio.oracle")
const rows = await contract.table("lastknwnrate").query().all()
```

For `finalrates` table (can use 1, 2 or 3)

```ts
const contract = await kit.load("eosio.oracle")
const rows = await contract.table("finalrates").query({scope:1}).next()
```

## Get conversion rate using HTTP

For `finalaverage` table (can use `SECONDS`, `MINUTES`, `HOURS`, `DAYS`)

```js
const rows = await fetch(`https://ultra.api.eosnation.io/v1/chain/get_table_rows`, {
    method:"POST",
    body:JSON.stringify({
        json: true,
        code: 'eosio.oracle',
        table: 'finalaverage',
        scope: 'MINUTES'
    })
}).then(x => x.json());
```

For `lastknwnrate` table

```js
const rows = await fetch(`https://ultra.api.eosnation.io/v1/chain/get_table_rows`, {
    method:"POST",
    body:JSON.stringify({
        json: true,
        code: 'eosio.oracle',
        table: 'lastknwnrate',
        scope: 'eosio.oracle'
    })
}).then(x => x.json());
```

For `finalrates` table (can use 1, 2 or 3)

```js
const rows = await fetch(`https://ultra.api.eosnation.io/v1/chain/get_table_rows`, {
    method:"POST",
    body:JSON.stringify({
        json: true,
        code: 'eosio.oracle',
        table: 'finalrates',
        scope: 1
    })
}).then(x => x.json());
```

## Get conversion rate inside the smart contract

::: details Data structures used for deserialization
```cpp
using namespace std;
using namespace eosio;

const static symbol null_symbol = symbol("NULL", 0);
const static asset null_asset = asset(0, null_symbol);

static constexpr symbol seconds_symbol = symbol("SECONDS", 4);
static constexpr symbol minutes_symbol = symbol("MINUTES", 4);
static constexpr symbol hours_symbol = symbol("HOURS", 4);
static constexpr symbol days_symbol = symbol("DAYS", 4);

struct rate {
    uint64_t    timestamp = 0;
    asset       price = null_asset;

    EOSLIB_SERIALIZE(rate, (timestamp)(price))
};

struct urate {
    uint64_t timestamp = 0;
    uint64_t price = 0;

    EOSLIB_SERIALIZE(urate, (timestamp)(price))
};

struct feed_data {
    name                    source;
    std::vector<uint64_t>   rates;
    uint64_t                weight = 0;
    uint8_t                 source_type = 0;

    EOSLIB_SERIALIZE(feed_data, (source)(rates)(weight)(source_type))
};

struct moving_average_impl {
    rate        average = {.price = asset(0, null_symbol), .timestamp = 0};
    bool        is_valid_deprecated = false;
    uint64_t    param = 0;
    uint8_t     moving_window_counter = 0;
    uint8_t     unit = 1;

    static uint64_t get_primary_key(uint8_t unit, uint64_t param) {
        return param;
    }
    uint64_t primary_key() const { return get_primary_key(unit, param); }

    EOSLIB_SERIALIZE(moving_average_impl, (average)(is_valid_deprecated)(param)(moving_window_counter)(unit))
};
typedef eosio::multi_index<name("finalaverage"), moving_average_impl> final_moving_average_table;

struct final_rates_data {
    uint64_t             index;
    std::vector<urate>   rates;
    moving_average_impl  rolling_moving_average;

    EOSLIB_SERIALIZE(final_rates_data, (index)(rates)(rolling_moving_average))
};
typedef eosio::singleton<name("finalrates"), final_rates_data> final_rates_singleton;

struct last_known_rate {
    name source;
    rate latest_rate = {.price = asset(0, null_symbol), .timestamp = 0};

    EOSLIB_SERIALIZE(last_known_rate, (source)(latest_rate))
};
typedef eosio::singleton<name("lastknwnrate"), last_known_rate> last_known_rate_singleton;
```
:::

For `finalaverage` table (can use `seconds_symbol`, `minutes_symbol`, `hours_symbol`, `days_symbol`)

```cpp
final_moving_average_table _final_moving_average(name("eosio.oracle"), seconds_symbol.code().raw());
final_moving_average_table::const_iterator final_moving_avg_itr = _final_moving_average.find(moving_average_impl::get_primary_key(5 * 10000)); // 5.0000 SECONDS
// can also iterate over all possible entries
for(auto itr = _final_moving_average.begin(); itr != _final_moving_average.end(); ++itr) {
    auto rate& r = itr->average;
}
```

For `lastknwnrate` table

```cpp
last_known_rate_singleton last_known_rate_s(name("eosio.oracle"), name("eosio.oracle").value);
auto latest_rate = last_known_rate_s.get_or_default().latest_rate;
```

For `finalrates` table (can use 1, 2 or 3)

```cpp
final_rates_singleton final_rates_s(name("eosio.oracle"), 1);
auto rates = final_rates_s.get_or_default().rates;
```