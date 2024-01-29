---
title: 'unregexchg'
order: 2

---

# unregexchg

This action issues to `to` account a `quantity` of tokens. `to` token balance will be opened if it does not exist and `eosio.token` will pay for RAM usage.

-   Parameters

| Fields     | Type         | Description                                                       |
| ---------- | ------------ | ----------------------------------------------------------------- |
| `to`       | eosio::name  | The account to issue tokens to, it must be the same as the issuer |
| `quantity` | eosio::asset | The amount of tokens to be issued                                 |
| `memo`     | string       | The memo string to accompany the transaction                      |

Required Permissions: `issuer`

-   `cleos` Example

```shell script
cleos push action eosio.token issue '["eosio", "100.00000000 UOS", "init"]' -p eosio
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.token',
                    name: 'issue',
                    authorization: [
                        {
                            actor: 'eosio',
                            permission: 'active',
                        },
                    ],
                    data: {
                        to: 'eosio',
                        quantity: '100.00000000 UOS',
                        memo: 'init',
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
