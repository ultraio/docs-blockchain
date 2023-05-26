---
title: 'create'
order: 1
deploy: ['staging', 'mainnet']
---

# create

Allows `issuer` account to create a token in supply of `maximum_supply`. If validation is successful a new entry in `stat` table for token symbol scope gets created.

-   Parameters

| Fields           | Type         | Description                                  |
| ---------------- | ------------ | -------------------------------------------- |
| `issuer`         | eosio::name  | The account that creates the token           |
| `maximum_supply` | eosio::asset | The maximum supply set for the token created |

Required Permissions: `eosio.token`

-   `cleos` Example

```shell script
cleos push action eosio.token create '["eosio", "1000000000.00000000 UOS"]' -p eosio.token
# For unlimited supply
cleos push action eosio.token create '["eosio", "0.00000000 UOS"]' -p eosio.token@owner
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.token',
                    name: 'create',
                    authorization: [
                        {
                            actor: 'eosio.token',
                            permission: 'owner',
                        },
                    ],
                    data: {
                        issuer: 'eosio',
                        maximum_supply: '1000000000.00000000 UOS',
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
