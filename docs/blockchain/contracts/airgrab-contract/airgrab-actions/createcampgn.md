---
title: 'createcampgn'
order: 0

---

# createcampgn

## Summary

This action will allow `manager` to create a new `campaign`

## Action Parameters

| Property Name | C++ Type    | JavaScript Type | Description                                          |
| ------------- | ----------- | --------------- | ---------------------------------------------------- |
| `campaign`    | eosio::name | String          | The name of the campaign                             |
| `manager`     | eosio::name | String          | The account that will act as manager of the campaign |

Required Permissions: `manager`

## CLI - cleos

```shell script
cleos push action ultra.rgrab createcampgn '["testcampaign", "manager"]' -p manager
```

## Javascript - eosjs

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
