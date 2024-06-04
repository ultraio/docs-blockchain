---
title: 'Account Types'

outline: [0,4]
order: -98
---

# Account Types

Accounts have a resource cost as RAM is a limited resource on the network. To generate a new account, the RAM must be paid for. In some cases Ultra might cover the costs for account creation and sponsoring RAM for development purposes, in all other cases the user or developer will have to purchase RAM from the on-chain market.

In traditional EOS blockchain accounts, the OWNER permission may change the ACTIVE permission’s keys, and the ACTIVE permission may also change its own keys. In Ultra, the ACTIVE permission may not change its own keys. This applies to both Ultra Pro Wallets and to Ultra Accounts.

## Ultra Account

Accounts created using Ultra client are referred to as Ultra Accounts. Formerly referred to as `Easy Blockchain Account` (or EBA). This type of account is managed by Ultra Backend and provides users with account recovery options in case they lose access to their account.

The name in this case is auto-generated on chain with format of `aa1aa2aa3aa4` where the positional numerals 1, 2, 3 and 4 remain in the same place for all accounts, but the letters `a` will be incremented for each new account starting from `a` and ending at `z` after which the next `a` will be incremented to a `b` and so on (e.g. `aa1aa2aa3aa4`, `aa1aa2aa3ab4`, `aa1aa2aa3ac4`, ... `aa1aa2aa3az4`, `aa1aa2aa3ba4`).

## Ultra Pro Wallet

Ultra Pro Wallets (formerly referred to as non-EBA) are equivalent to traditional EOS blockchain accounts, in that they are fully managed by the end user. These accounts are used internally by Ultra, and are recommended for developers to deploy their smart contracts to.

The name in this case is auto-generated on chain with format of `1aa2aa3aa4aa` where the positional numerals 1, 2, 3 and 4 remain in the same place for all accounts, but the letters `a` will be incremented for each new account starting from `a` and ending at `z` after which the next `a` will be incremented to a `b` and so on (e.g. `1aa2aa3aa4aa`, `1aa2aa3aa4ab`, `1aa2aa3aa4ac`, ... `1aa2aa3aa4az`, `1aa2aa3aa4ba`).

## Ultra Premium Wallet

Ownership of the account and private keys is the same as for Ultra Pro Wallet. In this case Ultra will be responsible for personally creating an account for you. The limitation on the name is that it is a single purpose name like `devname123` or `productname`.

## Ultra Corporate Wallet

Ownership of the account and private keys mirrors that of Ultra Pro Wallet. Ultra is responsible for creating these accounts. Names follow the pattern `partner.contract`, `partner.data`, `partner.account`, or `contract.partner`, etc.

## Okay, how do I make an account?

We currently allow **Ultra Accounts** to be created through the official ultra.io client which can be found at [https://ultra.io](https://ultra.io).

To create **Ultra Pro Wallet**, refer to either [Testnet tutorial](../../../tutorials/fundamentals/tutorial-generate-key-and-create-testnet-account.md) or [Mainnet guide](../../../tutorials/guides/how-to-create-ultra-pro-wallet.md).

Using our docker image you can create local accounts for testing.

- [Read more in the cleos section](../../../blockchain/general/tools/cleos.md#creating-an-account)


