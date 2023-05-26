---
title: 'creategrp'
order: 11
deploy: ['staging', 'mainnet']
---

# creategrp

Creates a factory group.

## Technical Behavior

Anyone can create a factory group. RAM is charged in the beginning so a creator needs to make sure max_uos_payment is larger than charged value.

Factories field cannot contain duplicates.

## Action Parameters

| field name      | c++ type         | js type |
| --------------- | ---------------- | ------- |
| manager         | name             | string  |
| uri             | string           | string  |
| hash            | checksum256      | string  |
| factories       | vector<uint64_t> | Array   |
| max_uos_payment | asset            | string  |

## CLI

```bash
cleos push action eosio.nft.ft creategrp '["ultra", "http://localhost", "d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523", ["20", "7", "44"], "1.00000000 UOS"]'
```

## JS

```ts
await transact([{
    account: 'eosio.nft.ft',
    name: 'creategrp',
    authorization: [{actor: 'ubisoft', permission: 'active'}],
    data: {
        manager: "ubisoft",
        uri: "https://nft.ubisoft.com/factorygroups/assasinscreed"
        hash: "d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523",
        factories: [1, 2, 5, 10],
        max_uos_payment: "1.00000000 UOS"
    }
}], {
  blocksBehind: 3,
  expireSeconds: 30,
});
```
