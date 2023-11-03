---
title: 'Import your account’s private key'
deploy: ['staging', 'mainnet']
order: 11
outline: [0, 4]
---

# Import your account’s private key

The Ultra Wallet Extension supports two kinds of accounts: EBA and Non-EBA. To understand how a private key can be imported into the wallet, we have to explain first the differences between both account types.

## EBA (Easy Blockchain Account)

One of the most critical missions of Ultra is to democratize the blockchain, bringing all its advantages to the mass market. To do so, it was required to simplify drastically how the blockchain is managed, making it almost transparent for the user.

The EBA is an account type where the users store their own private keys in their devices and Ultra only provides a way to recover a blockchain account or sync a private key with a blockchain account.

![](/images/uwax-login-btns.png)

To get an Easy Blockchain Account you only have to create an Ultra account using the Ultra Wallet Extension or the Ultra Desktop client.

## Non-EBA (Self-managed blockchain account)

A non-EBA account is a typical blockchain account controlled by private keys that you must secure yourself. This type of account is recommended for developers and other advanced users. To learn more about how to generate your own keys, read this [documentation page](../../tools/protocol/nodeos.md).

![](/images/uwax-private-key-btn.png)

To import your blockchain account’s private key, use the `Use Private Key & Password` option in the wallet extension. The wallet will ask you for a strong password to encrypt your keys. This password is not stored in the wallet so you have to save it securely. Without this password, you won’t be able to unlock your wallet again.

Once the private key is imported and encrypted, you will be able to select and activate the associated Ultra blockchain accounts.
