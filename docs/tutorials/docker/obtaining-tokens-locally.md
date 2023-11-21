---
title: 'Obtaining Tokens Locally'

order: -9989
outline: [0,4]
---

# Obtaining Tokens Locally

Tokens can be obtained in one of two ways in the **local environment**.

The first way involves obtaining tokens in a unit test, check the [ultratest](../../products/ultratest/index.md#adduos) documentation for more information.

The second way involves an `ultratest` no test instance and `cleos`.

## Before the Transfer Action

You should be inside of the docker image.

You should have [ultratest running in a no-tests instance](../../products/ultratest/index.md#starting-a-system-node).

Make sure you have [created an account locally](../../blockchain/general/tools/cleos.md#creating-an-account) before running the following command.

## The Transfer Action

The chain should be ran locally through ultratest. 

You have all of the account keys for your own chain inside of `cleos`.

You can now perform a simple transfer action through the `eosio.token` contract.

```
cleos push action eosio.token transfer '["ultra.eosio", "someaccount", "5.00000000 UOS", ""]' -p ultra.eosio
```

_The above command transfers 5 UOS from `ultra.eosio` to `someaccount`.

