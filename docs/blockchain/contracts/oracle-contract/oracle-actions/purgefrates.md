---
title: 'purgefrates'
order: 4

---

# purgefrates - purge final rates

Clears all the entries from specified scope of `finalrates` table.

## Technical Behavior

Will remove all the rates from `finalrates` and reset the index pointing to the latest entry. Size of the `rates` cache will be left unchanged.

## Action Parameters

| Fields  | Type     | Description                                                                                                                     |
| ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `scope` | uint64_t | Scope of `finalrates` table. Value corrseponds to one of the possible time units: 0 - seconds, 1 - minutes, 2 - hours, 3 - days |

Required Permissions: `ultra.oracle`

## CLI - cleos

```bash
cleos push action eosio.oracle purgefrates '[0]' -p ultra.oracle
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
                        scope: 0
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