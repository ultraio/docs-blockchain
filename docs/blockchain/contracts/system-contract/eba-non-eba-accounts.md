---
title: 'EBA and non-EBA Accounts'
order: 1
deploy: ['staging', 'mainnet']
---

# EBA and non-EBA Accounts

## How it works

For non-EBA the account name is auto generated and has a form of “1aa2aa3aa4aa” where “a” is an English alphabet letter in the range of \[a-z\]. An EBA account name has a form of “aa1aa2aa3aa4” and can be proposed by the account creator. If the proposed name exists or does not follow the format, a new name is generated automatically.

Ultra sponsors the RAM needed for an EBA account creation. For non-EBA account records the RAM can be paid by another account.

## Easy Blockchain Account - EBA

An Easy Blockchain Account is a special type of account mainly for average users.

## Non-EBA

A non-EBA account is a typical blockchain account controlled by private keys you must secure yourself.

## Relevant actions

[newnonebact - create a non-EBA account](./System%20Actions/newnonebact.html)

[newebact - create a EBA account](./System%20Actions/newebact.html)

### Relevant tables

[userres - resource-allocation-per-account](./data-structures-overview.html#userres-resource-allocation-per-account)
