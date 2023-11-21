---
title: 'allowpred'

---

# allowpred - setup a predicate

Allows a specific predicate which will select specific actions of 3rd party accounts to be paid by the account.

| Field               | Type                         | Description                                                           |
| ------------------- | ---------------------------- | --------------------------------------------------------------------- |
| payer               | eosio::name                  | The account that setups a predicate                                   |
| paid_contract       | eosio::name                  | The contract that account will allow paying for                       |
| paid_action         | eosio::name                  | The action from the contract that account will allow paying for       |
| maximum_power_usage | uint64_t                     | The limit for CPU usage in us for paid action                         |
| predicate_contract  | std::optional`<eosio::name>` | The predicate contract that will be used to create inline action call |
| predicate_action    | std::optional`<eosio::name>` | The predicate action that will be used to create inline action call   |

## CLI - cleos

```sh
cleos push action eosio allowpred '["alice", "eosio", "buyram", 2000, "bob", "buyrampred"]' -p alice
```

## JavaScript - eosjs

```js
await api.transact({
    actions: [
        {
            account: 'eosio',
            name: 'allowpred',
            authorization: [{ actor: 'alice', permission: 'active' }],
            data: {
                payer: 'alice',
                paid_contract: 'eosio',
                paid_action: 'buyram',
                maximum_power_usage: 2000,
                predicate_contract: 'bob',
                predicate_action: 'buyrampred',
            },
        },
    ],
});
```
