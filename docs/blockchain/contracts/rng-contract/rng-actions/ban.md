---
title: 'ban'
order: 5

---

# ban

Bans a dapp from requesting random numbers. Banned accounts are silently ignored when they call the `requestrand` action.

-   Parameters

| Fields | Type        | Description                    |
| ------ | ----------- | ------------------------------ |
| `dapp` | eosio::name | Account name of dapp to ban    |

Required Permissions: `ultra.rng`

-   `cleos` Example

```shell script
cleos push action ultra.rng ban '["malicious.dapp"]' -p ultra.rng@active
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'ultra.rng',
                    name: 'ban',
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
-   The dapp must not already be banned
-   Banned accounts are silently ignored when requesting random numbers
-   This is typically used to prevent abuse of the RNG service 