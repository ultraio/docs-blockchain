---
title: 'resetfavg'
order: 9

---

# resetfavg - reset final average

Resets the final moving average by scope.

## Technical Behavior

For specified `finalaverage` table scope the action will reset the moving average stored under this scope.

When resetting the final average all values stored inside it will be set to 0 (`price`, `timestamp` and `moving_window_counter`).

::: info
This action is meant to be used for diagnostics, debugging or fixing purposes only. It should not be used during normal oracle operation.
:::

## Action Parameters

| Fields        | Type     | Description                                                                                                                     |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `time_symbol` | std::optional\<symbol> | Symbol indicating the scope of the `finalaverage` table to reset. Must be either `4,SECONDS`, `4,MINUTES`, `4,HOURS` or `4,DAYS`. If `null` is specified instead all the possible scopes will be reset at once |

Required Permissions: `ultra.oracle`

## CLI - cleos

```bash
cleos push action eosio.oracle purgefrates '["4,MINUTES"]' -p ultra.oracle
```

## JavaScript - eosjs

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.oracle',
                    name: 'purgefrates',
                    authorization: [
                        {
                            actor: 'ultra.oracle',
                            permission: 'active',
                        },
                    ],
                    data: {
                        time_symbol: '4,MINUTES'
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