---
title: 'Wallets'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -96
---

# Wallets

A wallet is a piece of software that securely holds a user’s keys so that they may interact with an open network without risk.

The wallet does this by holding the user’s keys in a locally encrypted vault. When the user wishes to sign a transaction on an open network, the client sends a request to the user’s wallet, which asks the user to decrypt the keys and compares them to the public key in the requesting transaction. If they match, the wallet confirms and allows the user to sign the transaction.

![](/images/wallet-signing-transaction.jpg)

There are many different types of wallets available for EOSIO-based networks. The most basic is Keosd, which comes as part of the developer kit provided. Additionally, there are custodial, non-custodial, and hardware wallets. Each of these have their upsides and downsides.

Keosd runs in the command-line and is generally used by developers for interacting directly with the open network.

Custodial wallets allow a third party to hold your keys.

Non-custodial wallets are self-managed.

A hardware wallet is a physical device that keeps an account’s keys secure within the device, and asks a user for a confirmation on the device to complete the transaction.