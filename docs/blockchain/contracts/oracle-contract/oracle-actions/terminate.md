---
title: 'terminate'
order: 99

---

# terminate

Terminates the oracle contract removing all the stored data and returning to original state.

## Technical Behavior

Will remove all table entries for `oraclestate`, `feeddata`, `feedcompl`, `finalrates` and `finalaverage` tables. This means that oracle must be initialized again after this action is executed as no data is preserved.

::: info
This action is meant to be used for diagnostics, debugging or fixing purposes only. It should not be used during normal oracle operation.
:::

## Action Parameters

This action does not accept any parameters.

Required Permissions: `ultra.oracle`

## CLI - cleos

```bash
cleos push action eosio.oracle terminate '[]' -p ultra.oracle
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
                    data: {},
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