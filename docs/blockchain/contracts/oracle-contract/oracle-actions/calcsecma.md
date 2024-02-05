---
title: 'calcsecma'
order: 6

---

# calcsecma - calculate seconds moving average

Recalculates seconds level moving average. Refer to [this tutorial page](../../../../tutorials/oracle/how-to-validate-and-refresh-moving-average.md) to read on use case for this action.

## Technical Behavior

Immediately recalculates seconds level moving average in case it is outdated and there are new rates to recalculate it from.

`moving_average_setting` must be a previously registered seconds level moving average (from scope `SECONDS` (or equivalent `.1docnmjch2p3`) of `finalaverage`).

## Action Parameters

| Fields                   | Type         | Description                           |
| ------------------------ | ------------ | ------------------------------------- |
| `moving_average_setting` | eosio::asset | Second level moving average to update |

Required Permissions: none

## CLI - cleos

```bash
cleos push action eosio.oracle calcsecma '["5.0000 SECONDS"]' -p your_user_account
```

## JavaScript - eosjs

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.oracle',
                    name: 'calcsecma',
                    authorization: [
                        {
                            actor: 'your_user_account',
                            permission: 'active',
                        },
                    ],
                    data: {
                        moving_average_setting: '5.0000 SECONDS'
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