---
title: 'revokepred - reset a predicate'
order: 6
deploy: ['staging', 'mainnet']
---

# revokepred - reset a predicate

Revokes an existing predicate of payer to no longer allow this action to be paid by them.

| Field         | Type        | Description                                                     |
| ------------- | ----------- | --------------------------------------------------------------- |
| payer         | eosio::name | The account that setups a predicate                             |
| paid_contract | eosio::name | The contract that account will allow paying for                 |
| paid_action   | eosio::name | The action from the contract that account will allow paying for |

## CLI - cleos

```sh
cleos push action eosio revokepred '["alice", "eosio", "buyram"]' -p alice
```

## JavaScript - eosjs

```js
await api.transact({
    actions: [
        {
            account: 'eosio',
            name: 'revokepred',
            authorization: [{ actor: 'alice', permission: 'active' }],
            data: {
                payer: 'alice',
                paid_contract: 'eosio',
                paid_action: 'buyram',
            },
        },
    ],
});
```
