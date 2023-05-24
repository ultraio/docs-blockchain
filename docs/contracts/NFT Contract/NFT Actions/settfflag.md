---
title: 'settfflag'
order: 27
deploy: ['staging', 'mainnet']
---

# settfflag

Allow ultra.nft.ft account to open the NFT standard to let any account create and manage token factories

## Technical Behavior

The required authorization is the ultra.nft.ft account managed by admins.

After the transaction execution any account will be able to create factories using create.b action. Original v0 create action will still be ultra only, but will be deprecated anyway

## Action Parameters

N / A

## CLI - cleos

```
cleos push action eosio.nft.ft settfflag '[]' -p ultra.nft.ft
```

## JavaScript - eosjs

```javascript
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'settfflag',
                authorization: [{ actor: 'ultra.nft.ft', permission: 'active' }],
                data: {},
            },
        ],
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
