---
title: 'Ultra Accounts and Ultra Pro Wallets'
order: 1

---

# Ultra Accounts and Ultra Pro Wallets

## How it works

System contract provides 2 actions to generate new accounts of the following types: Ultra Account and Ultra Pro Wallet. Their names are automatically generated using a pattern `aa1aa2aa3aa4` and `1aa2aa3aa4aa` respectively. For more details see [this page](../../general/antelope-ultra/account-types.md).

Ultra sponsors the RAM needed for an Ultra Account and Ultra Pro Wallet creation.

## Ultra Account

Ultra Accounts (formerly known as Easy Blockchain Account or EBA) is a special type of account mainly for average users. It provides recovery options and is managed by our Backend.

## Ultra Pro Wallet

Ultra Pro Wallet (formerly known as non-EBA) is a typical blockchain account controlled by private keys you must secure yourself. In case you lose the keys - you lose the ownership of the account. This type of account allows full control and automation.

## Relevant actions

[newnonebact - create an Ultra Pro Wallet](./system-actions/newnonebact.html)

[newebact - create an Ultra Account](./system-actions/newebact.html)

### Relevant tables

[userres - resource-allocation-per-account](./data-structures-overview.html#userres-resource-allocation-per-account)
