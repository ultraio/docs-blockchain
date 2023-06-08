---
title: 'setmeta.b'
order: 23
deploy: ['staging', 'mainnet']
---

# setmeta.b - set token factory metadata uri and hash v1

Allows a token manager to set metadata uri and hash for an existing token factory, see more details metadata

## Technical Behavior

-   The required authorization is the token_factory_manager as the manager is responsible for updating the data.

-   `token_factory_id` is required and must exist.

-   `memo` value has a 256 byte limitation

-   `factory_uri` is required to have non-zero length

If factory has `lock_hash` set to `true`:

-   Can change the `factory_uri`, but `factory_hash` must remain unchanged

## RAM usage

Adding meta_uris and meta_hash will consume certain bytes depend on how many data are added.

RAM usage is covered by eosio.nftram. But this action will fail if the unused RAM of eosio.nftram is less than or equal to 200MB.

If the RAM usage is exceed factory maximum pack size of 1920 bytes, action will fail.

Updating or remove meta data which result in no bytes is added, there will be no restriction.

## Action Parameters

| Property Name    | C++ Type    | Javascript Type | Example                                                            |
| ---------------- | ----------- | --------------- | ------------------------------------------------------------------ |
| token_factory_id | uint64_t    | number          | 1                                                                  |
| memo             | string      | string          | "hi"                                                               |
| factory_uri      | string      | string          | "uri1"                                                             |
| factory_hash     | checksum256 | string          | "fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9" |

## CLI - cleos

```bash
cleos push action eosio.nft.ft setmeta.b '[1, "updating", "uri1", "fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9"]' -p manager.acc@active
```

## JavaScript - eosjs

```js
await api.transact({
    actions: [
        {
            account: 'eosio.nft.ft',
            name: 'setmeta.b',
            authorization: [{ actor: 'manager.acc', permission: 'active' }],
            data: {
                token_factory_id: 1,
                memo: 'set meta',
                factory_uri: 'uri1',
                factory_hash: 'fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9',
            },
        },
    ],
});
```
