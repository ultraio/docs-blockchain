---
title: 'newebact'
---

# newebact - create an EBA account

| Field       | Type             | Description                                         |
| ----------- | ---------------- | --------------------------------------------------- |
| creator     | eosio::name      | The account that pays for the new account           |
| owner       | eosio::authority | The owner authority of new account                  |
| active      | eosio::authority | The active authority of new account                 |
| max_payment | eosio::asset     | The max payment for the new account creation in UOS |

## CLI - cleos

```sh
cleos push action eosio newebact '{"active":{"threshold":1,"keys":[{"key":"EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9","weight":1}],"accounts":[],"waits":[]}, "major_idp":"account", "major_idp_id":"", "account":"account", "memo":"sample"}}' -p from
```

## JavaScript - eosjs

```java
await api.transact({
  actions: [
    {
      account: "eosio",
      name: "newebact",
      authorization: [{ actor: "from", permission: "active" }],
      data: {
        active: {
          threshold: 1,
          keys: [
            {
                key: 'EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9',
                weight: 1,
            },
        ],
          accounts: [],
          waits: []
        },
        major_idp: 'account',
        major_idp_id: [],
        account: 'account',
        memo: "sample"
      },
    },
  ],
});
```
