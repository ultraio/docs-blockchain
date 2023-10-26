---
title: 'creategrp'
order: 11
deploy: ['staging', 'mainnet']
---

# creategrp

Creates a factory group.

## Technical Behavior

* Anyone can create a factory group. RAM is charged in the beginning so a creator needs to make sure max_uos_payment is larger than charged value.

* `factories` field cannot contain duplicates.

**RAM usage/cost calculation and payment/refund**

-   RAM usage used to store factory group info is covered by `eosio.nftram` account. If the unused RAM of eosio.nftram is less than or equal to 200MB, the action can’t be executed.

-   The cost of a factory group entry is paid to `eosio.nftram` and it will be locked up in this entry. The funds are released back to the original payer after the factory group is deleted

      -   First, the cost in USD is (factory RAM payment size) \* (RAM price), where

          -   NFT RAM payment size: **960 bytes**. Estimated for:
              - `uri` with length of 256
              - 64 entries in `factories`

          -   RAM price: **0.15 USD/KB**

      -   The cost is paid in UOS. The action gets `1 MINUTE` conversion rate in USD/UOS from `eosio.oracle` contract. and calculates the cost by
          (960B/1024B \* 0.15USD/KB) / (conversion rate) = `0.140625` **USD**/(conversion rate)

-   When a factory group manager adds or removes a factory from the group

    -   No additional RAM is charged for or released funds for

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
        uri: "https://nft.ubisoft.com/factorygroups/assasinscreed",
        hash: "d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523",
        factories: [1, 2, 5, 10],
        max_uos_payment: "1.00000000 UOS"
    }
}], {
  blocksBehind: 3,
  expireSeconds: 30,
});
```
