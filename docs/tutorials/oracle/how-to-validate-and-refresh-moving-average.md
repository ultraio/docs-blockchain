---
title: 'How to validated and refresh moving average'
order: 1
oultine: [0,5]
---

# How to validate and refresh moving average

Creating an account for development with Ultra.io is situational. You only need a developer account if you're dealing with smart contracts, and transactions. In that case continue forward with this brief tutorial.

## Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/zOmt-aYUJjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Generate a Key Pair

First you'll need need a private and public key. If you're going into production, do not use this key generator. See [how to generate a keypair](./how-to-generate-a-keypair.md) for additional information.

After obtaining a keypair, write it down somewhere safe. You are going to need it later.

<KeyGenerator />

## Visit Test Network Faucet

Visit the link below to open our faucet application.

* https://faucet.testnet.app.ultra.io

1. Click `Account Creator`
2. Paste your `Public Key` in the owner and active fields
3. Fill the Captcha
4. Click Create Account
5. Write down the **Account Name** that was returned

![](./images/create-account.png)

![](./images/account-name.png)

## Lookup Your Account

Use the form below to lookup your account on our [Test Network Explorer](https://explorer.testnet.ultra.io/)

<AccountLookupTestnet />

## All Done!

You now have a development account for our test network.