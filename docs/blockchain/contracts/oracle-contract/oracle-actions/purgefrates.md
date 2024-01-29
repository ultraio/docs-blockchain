---
title: 'purgefrates'
order: 4

---

# purgefrates - purge final rates

The opposite for create action, if all validations succeed, it debits the `stat` table supply amount.

-   Parameters

| Fields     | Type         | Description                                  |
| ---------- | ------------ | -------------------------------------------- |
| `quantity` | eosio::asset | The quantity of tokens to retire             |
| `memo`     | string       | The memo string to accompany the transaction |

Required Permissions: `issuer`

-   `cleos` Example

```shell script
cleos push action eosio.token retire '["100.00000000 UOS", "burn"]' -p eosio
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.token',
                    name: 'retire',
                    authorization: [
                        {
                            actor: 'eosio',
                            permission: 'active',
                        },
                    ],
                    data: {
                        quantity: '100.00000000 UOS',
                        memo: 'burn',
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
