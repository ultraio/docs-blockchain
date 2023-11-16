---
title: 'open'
order: 3
deploy: ['staging', 'mainnet']
---

# open

-   Summary: Allow `ram_payer` to create an account `owner` with zero balance for token `symbol` at expense of `ram_payer`.

-   Parameters

| Fields      | Type          | Description                                       |
| ----------- | ------------- | ------------------------------------------------- |
| `owner`     | eosio::name   | The account to be created                         |
| `symbol`    | eosio::symbol | The token to be payed with by `ram_payer`         |
| `ram_payer` | eosio::asset  | The account that supports the cost of this action |

Required Permissions: `ram_payer`

-   `cleos` Example

```shell script
cleos push action eosio.token open '["ultra", "8,UOS", "eosio"]' -p eosio
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.token',
                    name: 'open',
                    authorization: [
                        {
                            actor: 'eosio',
                            permission: 'active',
                        },
                    ],
                    data: {
                        owner: 'ultra',
                        symbol: '8,UOS',
                        ram_payer: 'eosio',
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
