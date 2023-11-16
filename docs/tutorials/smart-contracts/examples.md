---
title: '6. Code Examples'
deploy: ['staging', 'mainnet']
outline: [0,5]
order: -94
next: false
---

# Smart Contract Examples

[Blockmatic Contract List](https://github.com/blockmatic/antelope-contracts-list) provides a ton of example links to various smart contracts that are available.

However, you might be just looking for a quick way to perform basic functionality inside of your smart contract.

## Require Authorization Action

Requires permission from the name passed from the client to transact.

::: details Code
```cpp
ACTION hi(name user) {
    require_auth(user);
}
```
:::

## Actions with More Parameters

When you need to add more parameters to your action.

::: details Code
```cpp
ACTION hi(name user, string message) {
    print("Hello, your message was: ", message);
}
```
:::

## CRUD Operations

When you want to create a data entry, store it, update it, and delete that entry from a table.

The code below is a simple 'set your status' contract.

::: details Code

<<< @/examples/contracts/contract-with-table.cpp

:::

## Scoped CRUD Operations

When you want to create a data entry, store it, update it, and delete that entry from a table owned by a user.

This means that table entries are owned by the user for their specific table. Only they can modify their entries.

The code below is the equivalent of a Twitter clone.

::: details Code

<<< @/examples/contracts/contract-with-table-scope.cpp

:::

## Reading Data from Table Iterators

In some cases, you may need to read directly from a table in a contract.

You can use the iterator to directly access the data.

The code below is based on the Scoped CRUD Operations

::: details Code
```cpp
journal_t scoped_journal = journal_t(get_self(), user.value);
auto journal_itr = scoped_journal.require_find(timepoint, "entry was not found");
print("Message at ", timepoint, " is ", journal_itr->message);
```
:::

## Listening for Token Transfers

The code below allows only the default `UOS` token with a precision of `8`.

_You must add the `eosio.code` permission to your account to use this._

::: details Code

<<< @/examples/contracts/contract-on-notify-eosio-token.cpp

:::

## Listening for Uniq Transfers

If you want to listen for transfers from `eosio.nft.ft` see [onIssue Example](../../guides/Uniq%20Variants/Examples/on-issue.md).



