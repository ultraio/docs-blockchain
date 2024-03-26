---
title: 'How to example'
order: -10
oultine: [0, 4]
---

# How to example

High level overview of this how-to guide. We are going to do a thing. E.g. in this guide we will create a transaction using wallet extension to create a new account.

## Prerequisites

- [How to create an account](../fundamentals/how-to-create-an-account.md)
- [How to setup the wallet](../fundamentals/how-to-setup-the-wallet.md)

## Goal

Details on what will be covered in the guide and what will be achieved. E.g. this guide will cover how to select appropriate account creation action, how to fill out the `newnonebact` form, how to execute the transaction

## First step instructions

Guide is structured in steps, each steps achieves some meaningful result. E.g. first step could be to login in into the toolkit, go to transaction builder, select eosio contract, type `newnonebact` into search.

Guides should be accompanied by images to illustrate the process and the expected outcome.

![](../fundamentals/images/use-private-key-wallet.png)

If the result is some text output then using a code box is also ok.

```
executed transaction: 2a8e7617ed251e032a3fb6d1ad9f95a19a3f717a924d52f94a87a08656144b6f  944 bytes  358 us
#   eosio.token <= eosio.token::transfer        {"from":"1aa2aa3aa4hw","to":"1aa2aa3aa4aa","quantity":"0.10000000 UOS","memo":""}
#  1aa2aa3aa4hw <= eosio.token::transfer        {"from":"1aa2aa3aa4hw","to":"1aa2aa3aa4aa","quantity":"0.10000000 UOS","memo":""}
#  1aa2aa3aa4aa <= eosio.token::transfer        {"from":"1aa2aa3aa4hw","to":"1aa2aa3aa4aa","quantity":"0.10000000 UOS","memo":""}
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

## Nth step instructions

Avoid making too big of a steps, each step should include a couple of commands or actions and provide a meaningful result. If it makes a logical sense then need to split the step into smaller steps.

## Conclusions

Optional section to cover the results of the work. Can additionally provide links to the next tutorials/guides to suggest to the reader.