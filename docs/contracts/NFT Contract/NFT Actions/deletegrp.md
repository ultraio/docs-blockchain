---
title: 'deletegrp'
order: 12
deploy: ['staging', 'mainnet']
---

# deletegrp

Deletes a factory group with specified id.

## Technical Behavior

ID should be valid and transaction signed by the manager of the corresponding group.

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
