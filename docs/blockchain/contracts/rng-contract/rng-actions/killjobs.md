---
title: 'killjobs'
order: 3

---

# killjobs

Removes jobs from the jobs table. This action is typically called by the Oracle to clean up dangling or expired jobs.

-   Parameters

| Fields    | Type                    | Description                    |
| --------- | ----------------------- | ------------------------------ |
| `job_ids` | std::vector\<uint64_t>  | Vector of job IDs to remove    |

Required Permissions: `ultra.rng`

-   `cleos` Example

```shell script
cleos push action ultra.rng killjobs '[[123, 124, 125]]' -p ultra.rng@active
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'ultra.rng',
                    name: 'killjobs',
                    authorization: [
                        {
                            actor: 'ultra.rng',
                            permission: 'active',
                        },
                    ],
                    data: {
                        job_ids: [123, 124, 125],
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
-   The `job_ids` vector cannot be empty
-   Jobs that don't exist are silently ignored
-   This is typically used for maintenance and cleanup purposes 