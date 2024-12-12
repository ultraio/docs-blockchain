---
title: 'updatemeta'
order: 6

---

# updatemeta

Update token with `symbol` with metadata including `name`, `icon` URL, `description` and `color`.

-   Parameters

| Fields        | Type          | Description                    |
| ------------- | ------------- | ------------------------------ |
| `symbol`      | eosio::symbol | The symbol of the token        |
| `name`        | eosio::name   | The name of the token          |
| `icon`        | string        | The URL of token's icon        |
| `description` | string        | The description of the token   |
| `color`       | uint32_t      | The display color of the token |

Required Permissions: `issuer` or `ultra`

-   `cleos` Example

```shell script
cleos push action eosio.token updatemeta '["4,META", "Meta", "http://token.icon", "Token Metadata", 0]' -p issuer
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.token',
                    name: 'updatemeta',
                    authorization: [
                        {
                            actor: 'issuer',
                            permission: 'active',
                        },
                    ],
                    data: {
                        symbol: '4,META',
                        name: 'Meta',
                        icon: 'http://token.icon',
                        description: 'Token Metadata',
                        color: 0,
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
