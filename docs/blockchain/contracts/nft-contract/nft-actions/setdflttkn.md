---
title: 'setdflttkn'
order: 24

---

# setdflttkn

Allows a token manager to set metadata uri and hash for default token of an existing token factory.

Refer to [uniq-default-metadata](../../../../tutorials/uniq-factories/uniq-variants/uniq-default-metadata.md) for explanation on possible uses for default token metadata

## Technical Behavior

The required authorization is the token_factory_manager as the manager is responsible for updating the data.

-   token_factory_id is required and must exist.

-   memo value has a 256 byte limitation

-   uri is required to have non-zero length

If factory has `lock_hash` set to `true`:

-   Can change the `uri`, but `hash` must remain unchanged.

-   Cannot switch between `static` and `dynamic` default token URI (more details [here](../../../../tutorials/uniq-factories/uniq-variants/uniq-default-metadata.md))

## RAM usage

-   Adding uri and hash will consume certain bytes depend on how many data are added.

    -   RAM usage is covered by eosio.nftram. But this action will fail if the unused RAM of eosio.nftram is less than or equal to 200MB.

    -   If the RAM usage is exceed factory maximum pack size of 1920 bytes, action will fail.

-   Updating or remove meta data which result in no bytes is added, there will be no restriction.

## Action Parameters

| Property Name    | C++ Type               | JavaScript Type | Example                                                            |
| ---------------- | ---------------------- | --------------- | ------------------------------------------------------------------ |
| token_factory_id | uint64_t               | number          | 1                                                                  |
| memo             | string                 | string          | "hi"                                                               |
| uri              | string                 | string          | "uri1"                                                             |
| hash             | optional\<checksum256> | string          | "fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9" |

## CLI - cleos

```javascript
cleos push action eosio.nft.ft setdflttkn '[1, "updating", "uri1", "fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9"]' -p manager.acc@active
```

## JavaScript - eosjs

```javascript
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'setdflttkn ',
                authorization: [{ actor: 'manager.acc', permission: 'active' }],
                data: {
                    token_factory_id: 1,
                    memo: 'set meta',
                    uri: 'uri1',
                    hash: null,
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
