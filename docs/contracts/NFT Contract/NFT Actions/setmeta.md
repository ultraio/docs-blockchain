---
title: 'setmeta'
order: 22
deploy: ['staging', 'mainnet']
---

# setmeta

Set token factory metadata uri and hash.

## Behavior

Allows a token manager to set metadata uri and hash for an existing token factory.

## Technical Behavior

The required authorization is the **token_factory_manager** as the manager is responsible for updating the data.

**token_factory_id** is required and must be exist.

**memo** value has a 256 byte limitation

## Action Parameters

| Fields           | Type                      | Description                     |
| ---------------- | ------------------------- | ------------------------------- |
| token_factory_id | uint64_t                  | The token factory ID.           |
| memo             | std::string               | A short operation description.  |
| meta_uris        | std::vector\<std::string> | The array of the metadata URIs. |
| meta_hash        | checksum256               | The metadata hash.              |

## CLI - cleos

```bash
cleos push action eosio.nft.ft setmeta '[1, "updating", ["uri1", "uri2"], "fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9"]' -p manager.acc@active
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'setmeta',
                authorization: [{ actor: 'manager.acc', permission: 'active' }],
                data: {
                    token_factory_id: 1,
                    memo: 'set meta',
                    meta_uris: ['uri1', 'uri2'],
                    meta_hash: 'fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9',
                },
            },
        ],
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
