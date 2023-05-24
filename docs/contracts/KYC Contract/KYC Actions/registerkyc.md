---
title: 'registerkyc'
deploy: ['staging', 'mainnet']
---

# registerkyc

Register KYC info from user with requirement signature and provider signature.

-   Parameters

| Fields          | Type               | Description                                  |
| --------------- | ------------------ | -------------------------------------------- |
| `owner`         | eosio::name        | KYC User                                     |
| `provider`      | eosio::name        | KYC Provider who user wants to register with |
| `cert_id`       | eosio::checksum256 | User KYC data                                |
| `req_signature` | eosio::signature   | User signature                               |
| `pro_signature` | eosio::signature   | Provider signature                           |

Required Permissions: `ultra.kyc`

-   `cleos` Example

```shell script
cleos push action eosio.kyc registerkyc '["<OWNER>", "<PROVIDER>", "<CERTIFICATE_ID>", "<REQUIRED_SIGNATURE>", "<PROVIDER_SIGNATURE>"]' -p ultra.kyc
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.kyc',
                    name: 'registerkyc',
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
