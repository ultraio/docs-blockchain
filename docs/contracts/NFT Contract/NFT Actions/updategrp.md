---
title: 'updategrp'
order: 30
deploy: ['staging', 'mainnet']
---

# updategrp

Updates factory group parameters: uri, hash and factory list.

## Technical Behavior

ID should be valid and signed and transaction should be signed by the manager of the group. factories cannot contain duplicates.

## Action Parameters

| field name | c++ type                     | js type                 |
| ---------- | ---------------------------- | ----------------------- |
| id         | uint64_t                     | number                  |
| uri        | `optional<string>`           | string or null          |
| hash       | `optional<string>`           | string or null          |
| factories  | `optional<vector<uint64_t>>` | `Array<number>` or null |

## CLI

```bash
cleos push action eosio.nft.ft updategrp '[11, "http://localhost", "d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523", null]' -p ubisoft
```

## JS

```ts
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'updategrp',
            authorization: [{ actor: 'ubisoft', permission: 'active' }],
            data: {
                id: 14,
                uri: 'https://nft.ubisoft.com/factorygroups/assasinscreed',
                hash: 'd5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523',
                factories: null,
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
