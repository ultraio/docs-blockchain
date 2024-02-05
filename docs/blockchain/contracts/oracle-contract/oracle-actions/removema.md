---
title: 'removema'
order: 4

---

# removema - remove moving average

Removes existing moving averages from the oracle contract.

## Technical Behavior

Moving averages specified must be previously registered using [`addma`](./addma.md).

Table entries will be removed from `finalaverage` table.

## Action Parameters

| Fields                          | Type                       | Description                                |
| ------------------------------- | -------------------------- | ------------------------------------------ |
| `final_moving_average_settings` | std::vector\<eosio::asset> | List of existing moving averages to remove |

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
                        final_moving_average_settings: ['60.0000 MINUTES', '12.5000 HOURS']
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