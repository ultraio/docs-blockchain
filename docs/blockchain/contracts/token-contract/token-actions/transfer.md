---
title: 'transfer'
order: 5

---

# transfer

Allows `from` account to transfer to `to` account the `quantity` tokens. One account is debited and the other is credited with quantity tokens. `to` token balance will be opened if it does not exist and `eosio.token` will pay for RAM usage.

-   Parameters

| Fields     | Type         | Description                                  |
| ---------- | ------------ | -------------------------------------------- |
| `from`     | eosio::name  | The account to transfer from                 |
| `to`       | eosio::name  | The account to transfer to                   |
| `quantity` | eosio::asset | The quantity of tokens to be transferred     |
| `memo`     | string       | The memo string to accompany the transaction |

Required Permissions: `from`

-   `cleos` Example

```shell script
cleos push action eosio.token transfer '["eosio", "ultra", "100.00000000 UOS", ""]' -p eosio
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.token',
                    name: 'transfer',
                    authorization: [
                        {
                            actor: 'eosio',
                            permission: 'active',
                        },
                    ],
                    data: {
                        from: 'eosio',
                        to: 'ultra',
                        quantity: '100.00000000 UOS',
                        memo: '',
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
