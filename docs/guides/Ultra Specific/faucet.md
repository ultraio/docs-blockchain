---
title: 'Testnet Faucet Guide'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -99
---

# Testnet Faucet Guide

To create an account on testnet you need a key. The easiest way to do this is via
[cleos](../Docker/cleos.md#create-a-key-pair):

```sh
$ cleos create key --to-console
Private key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Public key: EOS6DErFdPHRJxeQr5vRrX71LkzsKuXTgGFzwA2bzHoEtJhxxmMwP
```

Next go to the https://faucet.testnet.app.ultra.io/ and paste public key into the form as shown below

![](/images/faucet-create-account-1.png)

Click on Create Account

![](/images/faucet-create-account-2.png)

Make sure the account was created

```sh
cleos -u https://ultratest-api.eoseoul.io get account 1aa2aa3aa4ae
```

## Claiming tokens

Once you created an account click on the `Token Faucet` tab and insert your account name in the form.

![](/images/faucet-issue-tokens-1.png)

Click on issue and you should get 10 UOS

![](/images/faucet-issue-tokens-2.png)

If you need more tokens wait for 2 minutes and claim again.
