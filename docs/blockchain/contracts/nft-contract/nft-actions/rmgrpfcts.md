---
title: 'rmgrpfcts'
order: 21
deploy: ['staging', 'mainnet']
---

# rmgrpfcts

Remove factory ids from a group.

## Technical Behavior

ID should be valid and transaction signed by the manager of the corresponding group.

Factories argument should contain only existing ids.

## Action Parameters

| field name | c++ type           | js type         |
| ---------- | ------------------ | --------------- |
| id         | uint64_t           | number          |
| factories  | `vector<uint64_t>` | `Array<number>` |

## CLI

```bash
cleos push action eosio.nft.ft rmgrpfcts '[33, ["7", "11", "22"]' -p ubisoft
```

## JS

```ts
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'rmgrpfcts',
            authorization: [{ actor: 'ubisoft', permission: 'active' }],
            data: {
                id: 33,
                factories: [7, 11, 22],
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
