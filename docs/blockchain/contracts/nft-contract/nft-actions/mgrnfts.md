---
title: 'mgrnfts'
order: 18
deploy: ['staging', 'mainnet']
---

# mgrnfts

This action can be used to migrate tokens from v0 to v1 as continuous migration.

## Technical Behavior

**Parameter validation**

Owners should be an array of token owner accounts.

The number of tokens to migrate is specified as total_no, which should not be zero.

**Main operations**

Each v0 token record in token.a table is converted to v1 token record and moved to token.b table. This process continues until total_no of tokens are migrated or it reaches the end of token.a table of the last owner account of owners.

| Property Name | C++ Type       | JavaScript Type  |
| ------------- | -------------- | ---------------- |
| owners        | `vector<name>` | array of strings |
| total_no      | uint64_t       | number           |

## CLI - cleos

```
cleos push action eosio.nft.ft mgrnfts '{"owners": ["alice", "bob"], "total_no": 10}' -p ultra.nft.ft@active
```

## JavaScript - eosjs

```

await api.transact({
  actions: [
    {
      account: "eosio.nft.ft",
      name: "mgrnfts",
      authorization: [{ actor: "ultra.nft.ft", permission: "active" }],
      data: {
        owners: ["alice", "bob"],
        total_no: 10
      }
    }
  ]
}, {
  blocksBehind: 3,
  expireSeconds: 30,
});
```
