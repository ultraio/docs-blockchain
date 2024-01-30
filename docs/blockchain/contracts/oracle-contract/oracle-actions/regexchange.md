---
title: 'regexchange'
order: 1

---

# regexchange

Registers a new exchange in the oracle contract.

## Technical Behavior

Adds a new exchange to the `feeddata` table and initializes the cache to write conversion rates into during `pushrate`.

Will also update `oraclestate` singleton to have new total number of registered conversion rate sources.

## Action Parameters

| Fields     | Type | Description                          |
| ---------- | ---- | ------------------------------------ |
| `exchange` | name | Name of the new exchange to register |

Required Permissions: `ultra.oracle`

## CLI - cleos

```bash
cleos push action eosio.oracle regexchange '["ugateio"]' -p ultra.oracle
```

## JavaScript - eosjs

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.oracle',
                    name: 'regexchange',
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