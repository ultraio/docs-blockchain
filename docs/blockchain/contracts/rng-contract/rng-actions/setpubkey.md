---
title: 'setpubkey'
order: 4

---

# setpubkey

Sets the BLS12-381 public key used for signature verification. This key is used to verify that random values are properly signed by the Ultra oracle service. The oracle service calls this action to update the public key when needed.

-   Parameters

| Fields | Type                    | Description                                    |
| ------ | ----------------------- | ---------------------------------------------- |
| `pk`   | std::vector\<uint8_t>   | BLS12-381 public key in raw bytes              |

Required Permissions: `ultra.rng`

-   `cleos` Example

```shell script
cleos push action ultra.rng setpubkey '["0x1234567890abcdef..."]' -p ultra.rng@active
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'ultra.rng',
                    name: 'setpubkey',
                    authorization: [
                        {
                            actor: 'ultra.rng',
                            permission: 'active',
                        },
                    ],
                    data: {
                        pk: [0x12, 0x34, 0x56, 0x78, 0x90, 0xab, 0xcd, 0xef, ...],
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
-   The `pk` parameter must be exactly 48 bytes (sizeof(g1))
-   When a new public key is set, the entire seed history is wiped
-   Seeds from existing jobs are re-inserted into the seeds table
-   The next_job_id is preserved when updating the public key
-   The Ultra oracle service manages this public key and calls this action when needed 