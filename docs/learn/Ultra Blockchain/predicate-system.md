---
title: 'Predicate System'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -94
---

# Predicate System

As part of Ultra’s larger strategy to enable friction-less transactions on the network, we provide a predicate system that allows developers to cover their user’s resource costs.

Developers may now allow certain actions to be performed by other accounts at the cost of their own POWER resources using the allowpred action. Resources may be revoked using the revokepred action. Developers may also specify a predicate action to call to verify if this action should be paid or not (e.g. check that a user is a premium user or is whitelisted).

## Predicate API

| Optional | Type     | Name               | Description                                                     |
| -------- | -------- | ------------------ | --------------------------------------------------------------- |
| No       | name     | payer              | The account that adds a predicate.                              |
| No       | name     | paid_contract      | The contract that account will allow paying for                 |
| No       | name     | paid_action        | The action from the contract that account will allow paying for |
| No       | uint64_t | max power usage    | The limit for POWER usage in UOS for paid action                |
| Yes      | name     | predicate_contract | The predicate contract that will be used for inline action call |
| Yes      | name     | predicate_action   | The action that will be used to create inline action call       |


**Example**

```ts
cleos push action eosio allowpred '["<payer_account>", "<paid_contract>", "<paid_action>", <max_allowed_cpu_usage>, <predicate_contract (optional)>, <predicate_action (optional)>]' -p <payer_account>@active
```

```ts
cleos push action eosio allowpred '["alice", "eosio", "buyram", 2000, "ubisoft", "buyrampred"]' -p alice
```

A unique @payer permission of the developer account must be specified to utilize this system. An account with the @payer permission provided will be the one to pay for the whole transaction but only if all actions in the transaction are allowed by the payer, and all predicate actions are successfully executed. If @payer is present in the transaction then he will be ranked in the transaction queue described above instead of the first authorizer.