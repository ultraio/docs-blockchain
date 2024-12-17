---
title: 'createcampgn'
order: 0

---

# createcampgn

This action will allow `manager` to create a new `campaign`

-   Parameters

| Property Name | C++ Type    | JavaScript Type | Description                                          |
| ------------- | ----------- | --------------- | ---------------------------------------------------- |
| `campaign`    | eosio::name | String          | The name of the campaign                             |
| `manager`     | eosio::name | String          | The account that will act as manager of the campaign |

Required Permissions: `manager`

-   `cleos` Example

```shell script
cleos push action ultra.rgrab createcampgn '["testcampaign", "manager"]' -p manager
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'ultra.rgrab',
                    name: 'createcampgn',
                    authorization: [
                        {
                            actor: 'manager',
                            permission: 'active',
                        },
                    ],
                    data: {
                        campaign: 'testcampaign',
                        manager: 'manager'
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
