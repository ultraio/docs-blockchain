---
title: 'resetfrates'
order: 8

---

# resetfrates - reset final rates

Resets the final rates cache and moving average by scope.

## Technical Behavior

For specified scope will reset the `finalrates` table entry.

When resetting the final rates entry the action will set the index pointing to the current value to out-of-bounds value (default), will clear the averaged rates and will also reset the rolling moving average.

::: info
This action is meant to be used for diagnostics, debugging or fixing purposes only. It should not be used during normal oracle operation.
:::

## Action Parameters

| Fields  | Type                     | Description                                                                                                                                         |
| ------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `scope` | std::optional\<uint64_t> | Level of `finalrates` table to reset. 0 - seconds, 1 - minutes, 2 - hours, 3 - days. If `null` is provided it will instead reset all scopes at once |

Required Permissions: `ultra.oracle`

## CLI - cleos

```bash
cleos push action eosio.oracle resetfrates '[1]' -p ultra.oracle
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
                        scope: 1
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