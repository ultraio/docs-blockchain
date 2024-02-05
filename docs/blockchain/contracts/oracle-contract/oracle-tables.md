---
title: 'Oracle Tables'
order: 0

---

# Oracle Tables

## feeddata

-   Table: `feeddata`
-   Code: `eosio.oracle`
-   Scope: `eosio.oracle`
-   Key: `source`

The table contains conversion rate cache and weight for individual exchanges.

| Fields      | Type                   | Description                                                                                                                                                 |
| ----------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| source      | name                   | Name of the registered exchange                                                                                                                             |
| rates       | std::vector\<uint64_t> | Cached rates pushed by this exchange. Value stored is `amount` from the conversion rate `asset` type                                                        |
| weight      | uint64_t               | Weight of the exchange for the purpose of calculating weighted average between exchanges. It is equal to the last 24 hours trading volume for this exchange |
| source_type | uint8_t                | Unused                                                                                                                                                      |

Most relevant actions: **regexchange, unregexchg**

## oraclestate

-   Table: `oraclestate`
-   Code: `eosio.oracle`
-   Scope: `eosio.oracle`

This singleton contains common values used by oracle during it's operation.

| Fields                          | Type     | Description                                                                                  |
| ------------------------------- | -------- | -------------------------------------------------------------------------------------------- |
| conversion_rate_symbol          | symbol   | Symbol used for conversion rates `asset` type pushed by exchanges. Default value is `8,DUOS` |
| trading_volume_symbol           | symbol   | Symbol used for validation of the 24 hours trading volume asset. Default value is `8,USD`    |
| latest_timestamp                | uint64_t | Stores the most recent timestamp extracted from the rates pushed by the exchanges            |
| interval                        | uint8_t  | Interval enforced between rates pushed to the oracle. Forced to be 1 during initialization   |
| cache_window                    | uint8_t  | Time window for exchanges/source to push the rates. Forced to be 60 during initialization    |
| registered_sources              | uint32_t | Total number of exchange/sources registered                                                  |
| ultra_comprehensive_rate_weight | uint32_t | Unusued |

Most relevant actions: **init**

## feedcompl

This table is deprecated and is not currently in use.

## finalaverage

-   Table: `finalaverage`
-   Code: `eosio.oracle`
-   Scope: `time symbol_code`
-   Key: `param`

The table contains moving averages for specified time units and windows.

Possible scopes for `finalaverage table`
- `SECONDS` (or `.1docnmjch2p3`)
- `MINUTES` (or `.1doep2pdt4oh`)
- `HOURS` (or `.....oumepboc`)
- `DAYS` (or `......2nf5.o4`)

| Fields                | Type     | Description                                                                                          |
| --------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| average               | rate     | Calculated moving average with a timestamp corresponding to the latest update                        |
| is_valid_deprecated   | bool     | Unused                                                                                               |
| param                 | uint64_t | Stores the window size and EMA alpha coefficient. See [addma](./oracle-actions/addma.md) for details |
| moving_window_counter | uint8_t  | Incremental counter which is used to track how many values were accumulated by the moving average    |
| unit                  | uint8_t  | Unused. Forced to be 1 |

Most relevant actions: **pushrate**

## finalrates

-   Table: `finalrates`
-   Code: `eosio.oracle`
-   Scope: `0 (seconds) / 1 (minutes) / 2 (hours) / 3 (days)`

The table contains intermediate values and calculated moving averages to be used for updating `finalaverage` table entries.

| Fields                 | Type                | Description                                                                                                                                                                                                                                                         |
| ---------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| index                  | uint64_t            | Index pointing to the latest value in the `rates` vector that was updated                                                                                                                                                                                           |
| rates                  | std::vector\<urate> | Cached rates calculated based on rates pushed by exchanges or calculated from `rolling_moving_average` of the previous scope of `finalrates`. Value stored is a pair of the timestamp of calculated conversion rate and associated price stored as unsigned integer |
| rolling_moving_average | moving_average_impl | Refer to `finalaverage` table to see the structure of this type. This moving average is used to populate the `rates` vector of `finalrates` with scope one higher than the current one                                                                              |

Most relevant actions: **pushrate**

## lastknwnrate

-   Table: `lastknwnrate`
-   Code: `eosio.oracle`
-   Scope: `eosio.oracle`

Stores the latest conversion rate pushed from any exchange.

| Fields      | Type        | Description                                                                                                             |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| source      | eosio::name | Name of the exchange that was the last to push the new rate                                                             |
| latest_rate | rate        | Pair of `asset` storing the conversion rate of USD to UOS and a `uint64_t` UTC timestamp when this last rate was pushed |
