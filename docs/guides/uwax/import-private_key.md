---
title: 'Import your account’s private key'
deploy: []
order: 10
outline: [0,4]
---

# Import your account’s private key

The Ultra Wallet Extension supports two kinds of accounts EBA and Non-EBA, to understand how a private key can be imported into the wallet, we have to explain first the differences between both account types.


## EBA (Easy Blockchain Account)

One of the most critical missions of Ultra is to democratize the blockchain, bringing all its advantages to the mass market. To do so, it was required to simplify drastically how the blockchain is managed, making it almost transparent for the user.

The EBA is a flow where the users store their own private keys in their devices and Ultra only provides a way to recover a blockchain account or sync a private key with a blockchain account.

To get an Easy Blockchain Account you only have to create an Ultra account using the Ultra Wallet Extension or the Ultra Desktop client.

![](/images/uwax-login-btns.png)


## Non-EBA (Self-managed blockchain account)

A non-EBA account is a typical blockchain account controlled by private keys you must secure yourself. It is mostly used for developing purposes. To know more about it read this [documentation page](/guides/Docker/nodeos.md).

To import your blockchain account’s private key use this option in your wallet and follow the process, the wallet will ask you for a strong password to encrypt it, this password is not stored in the wallet so you have to save it securely, otherwise, you won’t be able to unlock your wallet again.

Once the private key is imported and encrypted, you will be able to select and activate the associated accounts.

![](/images/uwax-private-key-btn.png)
