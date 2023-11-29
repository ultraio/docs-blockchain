---
title: 'settknmeta'
order: 26

---

# settknmeta

Allows a token manager to set metadata uri and hash for an existing token.

## Technical Behavior

The required authorization is the token factory manager as the manager is responsible for updating the data.

- `token_id` is required and must exist.

- `owner` is required and must own the token with id `token_id`

- `memo` value has a 256 byte limitation

- `uri` is required to have non-zero length or be null

If factory has `lock_hash` set to `true`:

- Can change the `uri`, but `hash` must remain unchanged. If the token does not have a `hash` then a hash can be changed regardless of `lock_hash` state.

**Notifications**

`require_recipient` is done for `owner` and `asset_manager` of the token factory

## RAM usage

-   Adding uri and hash will consume certain bytes depend on how many data are added.

    -   RAM usage is covered by eosio.nftram. But this action will fail if the unused RAM of eosio.nftram is less than or equal to 200MB.

    -   If the RAM usage is exceed token maximum pack size of 384 bytes, action will fail.

-   Updating or remove meta data which result in no bytes is added, there will be no restriction.

## Action Parameters

| Property Name | C++ Type                | JavaScript Type | Example                                                            |
| ------------- | ----------------------- | --------------- | ------------------------------------------------------------------ |
| token_id      | uint64_t                | number          | 1                                                                  |
| owner         | name                    | string          | "abc123"                                                           |
| memo          | string                  | string          | "hi"                                                               |
| uri           | `optional<string>`      | string          | "uri1"                                                             |
| hash          | `optional<checksum256>` | string          | "fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9" |

## CLI - cleos

```bash
cleos push action eosio.nft.ft settknmeta '[1, "ab1bc2cd3ef4", "updating", "uri1", "fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9"]' -p manager.acc@active
```

## JavaScript - eosjs

```javascript
await api.transact({
  actions: [
    {
      account: "eosio.nft.ft",
      name: "settknmeta",
      authorization: [{ actor: "manager.acc", permission: "active" }],
      data: {
        token_id: 1,
        owner: "ab1bc2cd3ef4"
        memo: "set meta",
        uri: "uri1",
        hash: null
      },
    },
  ],
}, {
  blocksBehind: 3,
  expireSeconds: 30,
});
```
