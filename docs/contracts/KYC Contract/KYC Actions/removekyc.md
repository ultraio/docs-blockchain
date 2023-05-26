---
title: 'removekyc'
deploy: ['staging', 'mainnet']
---

# removekyc

Remove all KYC info of user.

-   Parameters

| Fields  | Type        | Description                          |
| ------- | ----------- | ------------------------------------ |
| `owner` | eosio::name | KYC User who want to remove KYC info |

Required Permissions: `ultra.kyc`

-   `cleos` Example

```shell script
cleos push action eosio.kyc removekyc '["<OWNER>"]' -p ultra.kyc
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.kyc',
                    name: 'removekyc',
                    authorization: [
                        {
                            actor: 'ultra.kyc',
                            permission: 'active',
                        },
                    ],
                    data: {
                        owner: '<OWNER>',
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
