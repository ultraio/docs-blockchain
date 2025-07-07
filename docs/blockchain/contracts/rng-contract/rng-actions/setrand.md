---
title: 'setrand'
order: 2

---

# setrand

Used by the Ultra oracle service to set the generated random value for a specific job. The oracle service monitors the RNG contract for new requests, generates cryptographically secure random values, and calls this action with the BLS12-381 signature. This action verifies the signature and then calls the `receiverand` action on the requesting contract.

-   Parameters

| Fields         | Type                    | Description                                    |
| -------------- | ----------------------- | ---------------------------------------------- |
| `job_id`       | uint64_t                | Unique job identifier                          |
| `random_value` | std::vector\<uint8_t>   | BLS12-381 signed random value                  |

Required Permissions: `ultra.rng`

-   `cleos` Example

```shell script
cleos push action ultra.rng setrand '[123, "0x1234567890abcdef..."]' -p ultra.rng@active
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'ultra.rng',
                    name: 'setrand',
                    authorization: [
                        {
                            actor: 'ultra.rng',
                            permission: 'active',
                        },
                    ],
                    data: {
                        job_id: 123,
                        random_value: [0x12, 0x34, 0x56, 0x78, 0x90, 0xab, 0xcd, 0xef, ...],
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

-   This action can only be called by the `ultra.rng` contract itself
-   The `random_value` must be exactly 96 bytes (sizeof(g2))
-   The signature is verified using BLS12-381 pairing
-   After verification, the job is removed from the jobs table
-   The `receiverand` action is called on the requesting contract with the association ID and random value
-   The Ultra oracle service is responsible for monitoring requests and calling this action 