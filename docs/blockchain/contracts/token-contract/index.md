---
title: 'Token Contract Overview'
order: -99

---

# Token Contract

## Overview

`eosio.token` contract defines the tables and actions that allow users to create, issue and manage tokens on EOSIO based blockchains.

For Ultra, core token `UOS` are issued under account `eosio.token` using this contract.

## Contract features

### 1 - Create and Issue token

-   Only the contract owner, or the account owner where the contract is deployed, can create or issue tokens with this contract.
-   When creating a new token, you must define the maximum supply as well as the token symbol.
-   Once created, issuer can issue any amount to himself, however the amount of issued tokens cannot exceed maximum supply. Token balance will be opened for the issuer if it does not exist and `eosio.token` will pay for that RAM usage.

### 2 - Send and Receive token

-   Users can receive tokens from the account, if the user doesn't have token balance, it will be opened once transfer action from sender is successful. By default, `eosio.token` will pay the RAM usage for opening a new token balance.
-   To transfer, you will be required to have some tokens and a target account, not your account, which you want to transfer tokens to. Your transferred tokens need to not exceed the amount of tokens you currently hold.

### 3 - Retire token and close account balance

-   If you are a token issuer, you can retire any amount of tokens you already issued from your available supply.
-   For other users, once you open a token balance, you can close the balance as long as you have zero tokens in your account.

### 4 - System token UOS

-   UOS is the Ultra system token, it was created through the boot-up process during our network's genesis.
-   1 Billion Ultra UOS were issued at genesis to support swapping with ERC20 UOS and we will use inflation to pay Block Producers.
-   The UOS token is used to transfer value in the network, and as a way to gain access to required network resources like RAM or POWER.

