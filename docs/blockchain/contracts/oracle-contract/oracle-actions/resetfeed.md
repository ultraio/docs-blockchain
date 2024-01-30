---
title: 'resetfeed'
order: 7

---

# resetfeed

Resets the feed data cache by scope.

## Technical Behavior

For specified exchange will reset the `feeddata` table entry.

When resetting the feed data the weight of the exchange (24 hours trading volume) will be set to 0 and all rates stored in `rates` array will also be set to 0.

::: info
This action is meant to be used for diagnostics, debugging or fixing purposes only. It should not be used during normal oracle operation.
:::

## Action Parameters

| Fields     | Type                 | Description                                                                                                                                            |
| ---------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `exchange` | std::optional\<name> | Name of the registered exchange which will be used as a scope for `feeddata` table. If `null` is provided it will instead use all registered exchanges |

Required Permissions: `ultra.oracle`

## CLI - cleos

```bash
cleos push action eosio.oracle resetfeed '["ugateio"]' -p ultra.oracle
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
                        exchange: 'ugateio'
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