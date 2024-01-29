---
title: 'addma'
order: 3

---

# addma - add moving average

Registers new moving averages to the oracle contract.

## Technical Behavior

Moving average must be specified as a 4 digit precision asset with following symbol codes allowed:

- `SECONDS`
- `MINUTES`
- `HOURS`
- `DAYS`

Window size cannot exceed the table size configured during initialization.

If the fractional part of the moving average is 0 then it will be used to calculate the SMA with specified number of time units (e.g. 60 minutes SMA, 12 hours SMA, etc.)

If the fractional part of the moving average is not 0 then it will be considered as EMA, the fractional part will be used as alpha parameter of EMA (e.g. 12.5000 hours EMA is an EMA with alpha parameter of 0.5, the decimal part 12 is mostly ignored)

::: warning
EMA is currently not used and will likely be deprecated and removed
:::

## Action Parameters

| Fields                          | Type                       | Description                             |
| ------------------------------- | -------------------------- | --------------------------------------- |
| `final_moving_average_settings` | std::vector\<eosio::asset> | List of new moving averages to register |

Required Permissions: `ultra.oracle`

## CLI - cleos

```bash
cleos push action eosio.oracle addma '[["60.0000 MINUTES", "12.5000 HOURS"]]' -p ultra.oracle
```

## JavaScript - eosjs

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.oracle',
                    name: 'addma',
                    authorization: [
                        {
                            actor: 'ultra.oracle',
                            permission: 'active',
                        },
                    ],
                    data: {
                        final_moving_average_settings: ["60.0000 MINUTES", "12.5000 HOURS"]
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
