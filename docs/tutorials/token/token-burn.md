---
title: 'Token Burn'

outline: [0,4]
order: 2
---

# Token Burn Overview

## Overview

Token burn will allow the token creator to apply burn policy on any transfer made with specific token.

When token supply reach certain level, any transfer will be burnt with specific percentage, which is set by token creator.

Sender can be added to whitelist and will be exempted from any burn.

The burnt token amount will be deducted directly from recipient and transfer to configured receiver.

Also burn amount will be deducted directly to token current supply.

Actual burnt amount will be capped to make sure token supply will never go below the trigger threshold.

Only token creator and Ultra can set burn config for creator's token.

Once burn config is set for token, you cannot switch to other strategy.

Usage of the actions for config token burn

-   [configburn - Add or update burn config for token](../../blockchain/contracts/token-contract/token-actions/configburn.md)

## Benefits

- Allow token creator have more flexible policy with their token