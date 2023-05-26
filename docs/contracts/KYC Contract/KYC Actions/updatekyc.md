---
title: 'updatekyc'
deploy: ['staging', 'mainnet']
---

# updatekyc

Update user KYC info of provider.

-   Parameters

| Fields          | Type               | Description                           |
| --------------- | ------------------ | ------------------------------------- |
| `owner`         | eosio::name        | KYC User who wants to update info     |
| `provider`      | eosio::name        | KYC Provider who user wants to update |
| `cert_id`       | eosio::checksum256 | User KYC data                         |
| `req_signature` | eosio::signature   | User signature                        |
| `pro_signature` | eosio::signature   | Provider signature                    |

Required Permissions: `ultra.kyc`

-   `cleos` Example

```shell script
cleos push action eosio.kyc updatekyc '["<OWNER>", "<PROVIDER>", "<CERTIFICATE_ID>", "<REQUIRED_SIGNATURE>", "<PROVIDER_SIGNATURE>"]' -p ultra.kyc
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.kyc',
                    name: 'updatekyc',
                    authorization: [
                        {
                            actor: 'ultra.kyc',
                            permission: 'active',
                        },
                    ],
                    data: {
                        owner: '<OWNER>',
                        provider: '<PROVIDER>',
                        cert_id: '<CERTIFICATE_ID>',
                        req_signature: '<REQUIRED_SIGNATURE>',
                        pro_signature: '<PROVIDER_SIGNATURE>',
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
