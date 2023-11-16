---
title: 'addgrpfcts'
order: 2
deploy: ['staging', 'mainnet']
---

# addgrpfcts

Adds factory ids to a factory group.

## Technical Behavior

ID should be valid and transaction signed by the manager of the corresponding group.

Factories argument should not contain any existing ids. Factory group pack size should be within the limit of 960 bytes after modification.

## Action Parameters

| field name | c++ type          | js type        |
| ---------- | ----------------- | -------------- |
| id         | uint64_t          | number         |
| factories  | vector\<uint64_t> | Array\<number> |

## CLI

```bash
cleos push action eosio.nft.ft addgrpfcts '[33, ["7", "11", "22"]]' -p ubisoft
```

## JS

```ts
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'addgrpfcts',
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
