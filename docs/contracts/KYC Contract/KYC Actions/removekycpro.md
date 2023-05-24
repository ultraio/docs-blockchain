---
title: 'removekycpro'
deploy: ['staging', 'mainnet']
---

# removekycpro

Remove certain KYC provider info of user

-   Parameters

| Fields      | Type                | Description                                  |
| ----------- | ------------------- | -------------------------------------------- |
| `owner`     | eosio::name         | KYC User                                     |
| `providers` | vector<eosio::name> | List of KYC Provider who user want to remove |

Required Permissions: `ultra.kyc`

-   `cleos` Example

```shell script
cleos push action eosio.kyc removekcypro '["<OWNER>", ["<PROVIDER_1>", "<PROVIDER_2>"]]' -p ultra.kyc
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.kyc',
                    name: 'removekycpro',
                    authorization: [
                        {
                            actor: 'ultra.kyc',
                            permission: 'active',
                        },
                    ],
                    data: {
                        owner: '<OWNER>',
                        providers: ['<PROVIDER_1>', '<PROVIDER_2>'],
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
