---
title: 'delprchsreq'
order: 33
deploy: ['experimental']
---

# Purchase

This action is used to delete purchase requirements for a token factory.

## Technical Behavior

TBA

## Action Parameters

**Action Interface**

| Property Name            | C++ Type   | JavaScript Type |
| ------------------------ | -----------| --------------- |
| token_factory_id         | uint64_t   | number          |
| index                    | uint64_t   | number          |
| memo                     | string     | string          |



## CLI - cleos

```bash
cleos push action eosio.nft.ft delprchsreq.a '[100, 0, "delete purchase req"]' -p factory.manager
```

## JavaScript - eosjs

```js
await api.transact({
  actions: [{
      account: 'eosio.nft.ft',
      name: 'delprchsreq.a',
      authorization: [{ actor: 'factory.manager', permission: 'active' }],
      data: {
        token_factory_id: 100,
        index: 0,
        memo: ""
      },
    }],
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  }
);
```
