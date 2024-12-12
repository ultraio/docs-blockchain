---
title: 'configburn'
order: 7

---

# configburn

This action will allow token `issuer` to config the `trigger_supply` and when token supply surpass this any transfer will be applied with `rate_bp` tax except for `whitelisted_accounts`. All burnt amounts will be deducted to token supply.

-   Parameters

| Fields                 | Type                      | Description                                                    |
| ---------------------- | ------------------------- | -------------------------------------------------------------- |
| `trigger_supply`       | eosio::asset              | The threshold supply for when burn will be applied to transfer |
| `rate_bp`              | uint16_t                  | The rate where burn will be applied in basis where 1 is 0.01%  |
| `whitelisted_accounts` | std::vector\<eosio::name> | The accounts will be exempted from burn                        |

Required Permissions: `issuer` or `ultra`

-   `cleos` Example

```shell script
cleos push action eosio.token configburn '["6,BURN", 1000, '["account1", "account2"]']' -p issuer
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.token',
                    name: 'configburn',
                    authorization: [
                        {
                            actor: 'issuer',
                            permission: 'active',
                        },
                    ],
                    data: {
                        trigger_supply: '6,BURN',
                        rate_bp: 1000,
                        whitelisted_accounts: ['account1', 'account2'],
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
