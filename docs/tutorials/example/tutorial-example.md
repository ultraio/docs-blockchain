---
title: 'Tutorial - Example'
order: -10
oultine: [0, 4]
---

# Tutorial example

High level overview of this tutorial. We are going to do a thing. E.g. in this tutorial we will generate a key and create a Blockchain account.

## Prerequisites

(can include links to other tutorials (but not how-to guides), or some general prerequisites)

- Chromium based browser

## Goal

Details on what will be covered in the tutorial and what will be achieved. E.g. this tutorial will cover key generation and account creation using the wallet extension

## First step instructions

Tutorial is structured in steps, each steps achieves some meaningful result. E.g. first step could be to click the button on this page to generate a new key pair

When providing a command it should ideally not require and manual replacements. If it is not possible then it must be extremely obvious (and highlighted in the text) if you need to replace some value.

```sh
# Get info about the current account
cleos -u https://api.testnet.ultra.eossweden.org get account $(cleos -u https://api.testnet.ultra.eossweden.org get accounts $(cleos wallet keys | jq '.[0]' | tr -d '"') | jq '.account_names[0]' | tr -d '"')
```

In this command you must replace the `<your_account_name>` with the account name you have created

```sh
# Get info about the current account
cleos -u https://api.testnet.ultra.eossweden.org get account <your_account_name>
```

Guides should be accompanied by images to illustrate the process and the expected outcome.

![](../fundamentals/images/account-name.png)

If the result is some text output then using a code box is also ok.

```
created: 2021-07-06T08:59:21.500
permissions: 
     owner     1:    1 EOS6xjDaEUHMH7qEBBdfxW5Td3DmEoYZfrMnCEzMoDHyTjwk86faA
        active     1:    1 EOS6xjDaEUHMH7qEBBdfxW5Td3DmEoYZfrMnCEzMoDHyTjwk86faA

permission links: 
     eosio.any: 

memory: 
     quota:         0 bytes  used:         0 bytes
```

Use automation with Vue components to assist the user in assembling commands

<AccountLookupTestnet />

## Nth step instructions

Avoid making too big of a steps, each step should include a couple of commands or actions and provide a meaningful result. If it makes a logical sense then need to split the step into smaller steps.

## Conclusions

Optional section to cover the results of the work. Can additionally provide links to the next tutorial to suggest to the reader and briefly tell what is going to be done.