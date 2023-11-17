---
title: 'Account Types'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -98
---

# Account Types

Accounts have a resource cost as RAM is a limited resource on the network. To generate a new account, the RAM must be paid for. In some cases Ultra might cover the costs for account creation and sponsoring RAM for development purposes, in all other cases the user or developer will have to purchase RAM from the on-chain market.

Ultra has deployed a platform-specific feature called the `Easy Blockchain Account`, more commonly referred to internally as EBA. We have yet to release public information about how these work.

In traditional EOSIO accounts, the OWNER permission may change the ACTIVE permission’s keys, and the ACTIVE permission may also change its own keys. In Ultra, the ACTIVE permission may not change its own keys. This applies to both non-EBA accounts and to EBA accounts.

Non-EBA accounts are equivalent to traditional EOSIO blockchain accounts, in that they are fully managed by the end user. These accounts are used internally by Ultra, and are recommended for developers to deploy their smart contracts to.

## Okay, how do I make an account?

We currently allow **EBA accounts** to be created through the official ultra.io client which can be found at [https://ultra.io](https://ultra.io).

Using our docker image you can create local accounts for testing.

- [Read more in the cleos section](../../../blockchain/general/tools/cleos.md#creating-an-account)


