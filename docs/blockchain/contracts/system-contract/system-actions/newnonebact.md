---
title: 'newnonebact'

---

# newnonebact - create an Ultra Pro Wallet

Allows creating a new Ultra Pro Wallet, with expected cost not larger than max payment. The cost calculation will be based on the config from `newactconfig` table.

| Field       | Type             | Description                                                                                                   |
| ----------- | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| creator     | eosio::name      | The account that will pay for Ultra Pro Wallet account creation                                               |
| owner       | eosio::authority | The `owner` authority for the new account                                                                     |
| active      | eosio::authority | The `active` authority for the new account                                                                    |
| max_payment | eosio::asset     | Maximum payment in UOS that creator is willing to pay to account for possible USD/UOS conversion fluctuations |

## CLI - cleos

```sh
cleos push action eosio newnonebact '{"creator":"alice", "owner":{"threshold":1,"keys":[{"key":"EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9","weight":1}],"accounts":[],"waits":[]}, "active":{"threshold":1,"keys":[{"key":"EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9","weight":1}],"accounts":[],"waits":[]}, "max_payment":"50.00000000 UOS"}' -p alice
```

## JavaScript - eosjs

```js
await api.transact({
    actions: [
        {
            account: 'eosio',
            name: 'newnonebact',
            authorization: [{ actor: 'creator', permission: 'active' }],
            data: {
                creator: 'creator'
                owner: {
                    threshold: 1,
                    keys: [
                        {
                            key: 'EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9',
                            weight: 1,
                        },
                    ],
                    accounts: [],
                    waits: [],
                },
                active: {
                    threshold: 1,
                    keys: [
                        {
                            key: 'EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9',
                            weight: 1,
                        },
                    ],
                    accounts: [],
                    waits: [],
                },
                max_payment: "50.00000000 UOS",
            },
        },
    ],
});
```
