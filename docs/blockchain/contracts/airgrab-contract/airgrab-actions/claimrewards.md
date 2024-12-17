---
title: 'claimrewards'
order: 2

---

# claimrewards

This action will allow user to claim reward from `campaign` using their whitelisted wallets.

-   Parameters

| Property Name | C++ Type              | JavaScript Type | Description                                                                  |
| ------------- | --------------------- | --------------- | ---------------------------------------------------------------------------- |
| `campaign`    | eosio::name           | String          | The name of the campaign                                                     |
| `wallet_id`   | std::vector\<uint8_t> | String          | The wallet owned by the user which is registered in the campaign's whitelist |

Required Permissions: `user`

-   `cleos` Example

```shell script
cleos push action ultra.rgrab claimrewards '["testcampaign", "448e3de41c8b52750c664f57fe023a730bcc0047"]' -p user
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'ultra.rgrab',
                    name: 'claimrewards',
                    authorization: [
                        {
                            actor: 'user',
                            permission: 'active',
                        },
                    ],
                    data: {
                        campaign: 'testcampaign',
                        wallet_id: '448e3de41c8b52750c664f57fe023a730bcc0047'
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
