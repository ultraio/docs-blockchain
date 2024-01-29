---
title: 'init'
order: 0

---

# init - initialize oracle contract

Initializes tables and values for oracle contract to be able to start normal operation.

## Technical Behavior

uint8_t interval, uint32_t cache_window, std::vector<uint32_t> final_price_table_size,
         std::vector<asset> final_moving_average_settings, uint32_t ultra_comprehensive_rate_weight

Instantly recalculates seconds level moving average in case it is outdated and there are new rates to recalculate it from.

`moving_average_setting` must be a previously registered seconds level moving average (from scope `SECONDS` (or equivalent `.1docnmjch2p3`) of `finalaverage`).

## Action Parameters

| Fields                            | Type                       | Description                                                                                                                                                           |
| --------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `interval`                        | uint8_t                    | Will be forced to be 1. This means that rates are expected to be pushed to the oracle once every 1 second                                                             |
| `cache_window`                    | uint32_t                   | Will be forced to be 60. This means that for each exchange 60 seconds of rates will be stored in a rotating bucket                                                    |
| `final_price_table_size`          | std::vector\<eosio::asset> | Cache size for individual oracle time unit levels (first element is for seconds level, second for minutes, third for hours, fourth for days). Capped at 365 per level |
| `final_moving_average_settings`   | std::vector\<eosio::asset> | List of moving averages to register by default. Refer to [addma](./addma.md) for details                                                                              |
| `ultra_comprehensive_rate_weight` | uint32_t                   | Unused, but must be provided                                                                                                                                          |

Required Permissions: `ultra.oracle`

## CLI - cleos

```bash
cleos push action eosio.oracle init '[1, 60, [240, 360, 240, 365], ["1.0000 MINUTES","60.0000 MINUTES","24.0000 HOURS","7.0000 DAYS","14.0000 DAYS"], 1]' -p ultra.oracle
```

## JavaScript - eosjs

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.oracle',
                    name: 'init',
                    authorization: [
                        {
                            actor: 'ultra.oracle',
                            permission: 'active',
                        },
                    ],
                    data: {
                        interval: 1,
                        cache_window: 60,
                        final_price_table_size: [240, 360, 240, 365],
                        final_moving_average_settings: ["1.0000 MINUTES","60.0000 MINUTES","24.0000 HOURS","7.0000 DAYS","14.0000 DAYS"],
                        ultra_comprehensive_rate_weight: 0
                    },
                },
            ],
        },
        {
            blocksBehind: 3,
            expireSeconds: 30,
        }
    );
})();
```