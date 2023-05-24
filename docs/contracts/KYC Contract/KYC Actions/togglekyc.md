---
title: 'togglekyc'
deploy: ['staging', 'mainnet']
---

# togglekyc

Enable/Disable KYC check

-   Parameters - None

Required Permissions: `ultra.kyc`

-   `cleos` Example

```shell script
cleos push action eosio.kyc togglekyc '[]' -p ultra.kyc
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.kyc',
                    name: 'togglekyc',
                    authorization: [
                        {
                            actor: 'ultra.kyc',
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
