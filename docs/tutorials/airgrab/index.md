---
title: 'Airgrab Overview'

outline: [0,4]
order: -99
---

# Airgrab Overview

## What we want

We want to use 3rd party quest systems to ask community to perform all kinds of actions such as: Follow user x, retweet tweet y, etc. Unfortunately, these quest systems such as Galxe, only support Ethereum accounts.

To solve this problem, we will collect the user's "Ethereum Wallet IDs" and the "points" they earned doing these quests and then publish them on Ultra.

Users can then link their Ethereum account using Ultra's Avatar system and claim their reward on the whitelisted air grab smart contract.

We want this smart contract to be usable by any third project on Ultra, making it a new infrastructure service.

## How a campaign works

- A manager will create a campaign with a unique name, a quantity of tokens as rewards, and the total number of campaign points. These campaign points will be used to calculate the rewards the user will get.

- The manager can whitelist users along with their points and add them to the existing campaign. The manager can only add a whitelisted user after the campaign is created and before the campaign is credited.

- The manager can credit the campaign by transferring the quantity of tokens to `ultra.rgrab` with the specific format memo which includes the campaign name, points, and deadline. For actual format and example, please refer to [on_transfer - To credit the campaign](../../blockchain/contracts/airgrab-contract/airgrab-actions/on_transfer.md)

- A user can claim the rewards after being added to the whitelist and the campaign is credited. When a user claims rewards, he can use his ultra wallet or any associated ether wallet, but the user needs to sign the transaction with his ultra wallet. No matter which wallet is used, the claim action will find all rewards belonging to the ultra wallet and its ETH wallets and send the rewards one by one.

- A manager can close a campaign after it expires and take back any rewards left.

## Usage of actions

-   [createcampgn - Create a new Airgrab Campaign](../../blockchain/contracts/airgrab-contract/airgrab-actions/createcampgn.md)
-   [whitelistusr - Whitelist users with specified points](../../blockchain/contracts/airgrab-contract/airgrab-actions/whitelistusr.md)
-   [claimrewards - Claim rewards from campaign](../../blockchain/contracts/airgrab-contract/airgrab-actions/claimrewards.md)
-   [closecampgn - Close and existing campaign](../../blockchain/contracts/airgrab-contract/airgrab-actions/closecampgn.md)

On notify action, which will be called after `eosio.token::transfer`
-   [on_transfer - To credit the campaign](../../blockchain/contracts/airgrab-contract/airgrab-actions/on_transfer.md)

## Benefits

- Allow token creator have more flexible policy with their token