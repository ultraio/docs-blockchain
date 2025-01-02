---
title: 'closecampgn'
order: 3

---

# closecampgn

## Summary

This action will allow `manager` to remove all whitelist users from `campaign`, and once whitelist is empty, `campaign` will be deleted.
If campaign have a large whitelist, this action might fail when trying to remove users.

## Action Parameters

| Property Name | C++ Type    | JavaScript Type | Description                                                                                               |
| ------------- | ----------- | --------------- | --------------------------------------------------------------------------------------------------------- |
| `campaign`    | eosio::name | String          | The name of the campaign                                                                                  |
| `manager`     | eosio::name | String          | The account that will act as manager of the campaign                                                      |
| `limit`       | uint32_t    | Number          | How many whitelist users to remove from the campaign. If 0, try to remove all entries and delete campaign |

Required Permissions: `manager`

## CLI - cleos

```shell script
cleos push action ultra.rgrab closecampgn '["testcampaign", "manager", 0]' -p manager
```

## Javascript - eosjs

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'ultra.rgrab',
                    name: 'closecampgn',
                    authorization: [
                        {
                            actor: 'manager',
                            permission: 'active',
                        },
                    ],
                    data: {
                        campaign: 'testcampaign',
                        manager: 'manager',
                        limit: 0
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
