---
title: 'unban'
order: 6

---

# unban

Unbans a dapp from requesting random numbers. The dapp will be able to request random numbers again after being unbanned.

-   Parameters

| Fields | Type        | Description                    |
| ------ | ----------- | ------------------------------ |
| `dapp` | eosio::name | Account name of dapp to unban  |

Required Permissions: `ultra.rng`

-   `cleos` Example

```shell script
cleos push action ultra.rng unban '["malicious.dapp"]' -p ultra.rng@active
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'ultra.rng',
                    name: 'unban',
                    authorization: [
                        {
                            actor: 'ultra.rng',
                            permission: 'active',
                        },
                    ],
                    data: {
                        dapp: 'malicious.dapp',
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

## Notes

-   This action can only be called by the `ultra.rng` contract itself
-   The dapp must already be banned
-   After being unbanned, the dapp can request random numbers again
-   This is typically used to restore access after a temporary ban 