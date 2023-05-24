---
title: 'newnonebact - create a non-EBA account'
order: 0
deploy: ['staging', 'mainnet']
---

# newnonebact - create a non-EBA account

Allows creating a new non-EBA account, with expected cost not larger than max payment. The cost calculation will be based on the config from `newactconfig` table.

| Field     | Type                        | Description                                     |
| --------- | --------------------------- | ----------------------------------------------- |
| active    | eosio::authority            | The `active` authority for the new account      |
| major_idp | eosio::name                 | The default ID provider name of the new account |
| active    | eosio::authority            | The default ID provider id of the new account   |
| account   | std::optional\<eosio::name> | Suggested account name for new EBA account      |

## CLI - cleos

```sh
cleos push action eosio newnonebact 'cleos push action eosio newebact '{"active":{"threshold":1,"keys":[{"key":"EOS7i1PgEe399sjbhhS6umNFU6okzit96chj8NtpBRzy6XpDYXUH9","weight":1}],"accounts":[],"waits":[]}, "major_idp":"ultra.idp", "major_idp_id":"id1", "account":null|"aa1aa2aa3aa4"}' -p ultra.eosio
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
                major_idp: 'ultra.idp',
                major_idp_id: 'id1',
                account: null | 'aa1aa2aa3aa4',
            },
        },
    ],
});
```
