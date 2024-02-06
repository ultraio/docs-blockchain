---
title: 'unregexchg'
order: 2

---

# unregexchg

Unregister an existing exchange from the oracle contract.

## Technical Behavior

Removes the exchange data from the `feeddata` table.

Will also update `oraclestate` singleton to have new total number of registered conversion rate sources.

## Action Parameters

| Fields     | Type | Description                                 |
| ---------- | ---- | ------------------------------------------- |
| `exchange` | name | Name of the existing exchange to unregister |

Required Permissions: `ultra.oracle`

## CLI - cleos

```bash
cleos push action eosio.oracle unregexchg '["ugateio"]' -p ultra.oracle
```

## JavaScript - eosjs

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.oracle',
                    name: 'unregexchg',
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