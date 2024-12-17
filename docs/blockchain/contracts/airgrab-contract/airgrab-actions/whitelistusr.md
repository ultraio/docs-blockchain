---
title: 'whitelistusr'
order: 1

---

# whitelistusr

This action will allow `manager` to whitelist user wallet and updating their points to be used for claiming rewards.

-   Parameters

| Property Name | C++ Type                | JavaScript Type | Description                                                                        |
| ------------- | ----------------------- | --------------- | ---------------------------------------------------------------------------------- |
| `campaign`    | eosio::name             | String          | The name of the campaign                                                           |
| `wallets`     | std::vector\<whitelist> | Object          | The whitelist user wallets, can be ultra wallet (8 bytes) or eth wallet (20 bytes) |

Required Permissions: `manager`

-   `cleos` Example

```shell script
cleos push action ultra.rgrab whitelistusr '["testcampaign", [{"90a7a60819855c34", 1}, {"448e3de41c8b52750c664f57fe023a730bcc0047", 2}]]' -p manager
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'ultra.rgrab',
                    name: 'whitelistusr',
                    authorization: [
                        {
                            actor: 'manager',
                            permission: 'active',
                        },
                    ],
                    data: {
                        campaign: 'testcampaign',
                        wallets: [
                            {
                                wallet_id: '90a7a60819855c34',
                                points: 1
                            },
                            {
                                wallet_id: '448e3de41c8b52750c664f57fe023a730bcc0047',
                                points: 2
                            }
                        ]
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
