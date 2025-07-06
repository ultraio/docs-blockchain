---
title: 'requestrand'
order: 1

---

# requestrand

Allows a smart contract to request a random number generation. The request is queued and will be processed by the oracle. When the random number is generated, the RNG contract will call the `receiverand` action on the requesting contract.

-   Parameters

| Fields      | Type         | Description                                    |
| ----------- | ------------ | ---------------------------------------------- |
| `assoc_id`  | uint64_t     | User-defined association ID for the request   |
| `seed`      | uint64_t     | Seed value used for random number generation  |
| `caller`    | eosio::name  | Account that requested the random number      |

Required Permissions: `caller`

-   `cleos` Example

```shell script
cleos push action ultra.rng requestrand '[12345, 987654321, "mygame.contract"]' -p mygame.contract@active
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'ultra.rng',
                    name: 'requestrand',
                    authorization: [
                        {
                            actor: 'mygame.contract',
                            permission: 'active',
                        },
                    ],
                    data: {
                        assoc_id: 12345,
                        seed: 987654321,
                        caller: 'mygame.contract',
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

## Notes

-   The `seed` parameter must be unique and cannot be zero
-   The `caller` account must implement a `receiverand` action to receive the random number
-   Banned accounts are silently ignored when requesting random numbers
-   The request will be queued and processed asynchronously by the oracle 