---
title: 'configtax'
order: 8

---

# configtax

This action will allow token `issuer` to config the `trigger_supply` and when token supply surpass this, any transfer will be applied with `rate_bp` tax except for `whitelisted_accounts`. All tax amount will be transferred to `tax_receiver`.

-   Parameters

| Fields                 | Type                      | Description                                                   |
| ---------------------- | ------------------------- | ------------------------------------------------------------- |
| `trigger_supply`       | eosio::asset              | The threshold supply for when tax will be applied to transfer |
| `rate_bp`              | uint16_t                  | The rate where tax will be applied in basis where 1 is 0.01%  |
| `tax_receiver`         | eosio::name               | The account where tax will be transfer to                     |
| `whitelisted_accounts` | std::vector\<eosio::name> | The accounts will be exempted from tax                        |

Required Permissions: `issuer` or `ultra`

-   `cleos` Example

```shell script
cleos push action eosio.token configtax '["8,TAX", 100, "taxreceiver", '["account1", "account2"]']' -p issuer
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.token',
                    name: 'configtax',
                    authorization: [
                        {
                            actor: 'issuer',
                            permission: 'active',
                        },
                    ],
                    data: {
                        trigger_supply: '8,TAX',
                        rate_bp: 100,
                        tax_receiver: 'taxreceiver',
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
