---
title: 'deletegrp'
order: 12
deploy: ['staging', 'mainnet']
---

# deletegrp

Deletes a factory group with specified id.

## Technical Behavior

ID should be valid and transaction signed by the manager of the corresponding group.

**RAM usage/cost calculation and payment/refund**

-   After deleting a token factory group, 85% of UOS locked in the factory group is released back to the original payer, while 15% goes to the `eosio.pool` account.

## Action Parameters

| field name | c++ type | js type |
| ---------- | -------- | ------- |
| id         | uint64_t | number  |

## CLI

```bash
cleos push action eosio.nft.ft deletegrp '[33]' -p ubisoft
```

## JS

```ts
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'deletegrp',
            authorization: [{ actor: 'ubisoft', permission: 'active' }],
            data: {
                id: 33,
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
