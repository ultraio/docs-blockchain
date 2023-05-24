---
title: 'close'
order: 0
deploy: ['staging', 'mainnet']
---

# close

This action is the opposite for open, it closes the account `owner` for token `symbol`.

-   Parameters

| Fields   | Type          | Description                                             |
| -------- | ------------- | ------------------------------------------------------- |
| `owner`  | eosio::name   | The owner account to execute the close action for       |
| `symbol` | eosio::symbol | The symbol of the token to execute the close action for |

Required Permissions: `owner`

-   `cleos` Example

```shell script
cleos push action eosio.token close '["ultra", "8,UOS"]' -p ultra
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.token',
                    name: 'close',
                    authorization: [
                        {
                            actor: 'ultra',
                            permission: 'active',
                        },
                    ],
                    data: {
                        owner: 'ultra',
                        symbol: '8,UOS',
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
