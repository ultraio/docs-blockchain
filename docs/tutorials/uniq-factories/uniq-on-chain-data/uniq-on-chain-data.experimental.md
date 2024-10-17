---
title: 'Uniq On-chain Data'

order: 1
---

# Uniq On-chain Data

## Overview of Uniq On-chain Data feature

Uniq On-chain Data allows the factory manager to add key pair values in their settings to allow any Uniq minted from that factory to modify their data. When defined in factory keys settings, an authorized user can alter any key values, and values will be stored only on Uniq.

The factory manager has to pay a non-refundable RAM fee when adding the new key pair.

Whenever a Uniq is minted from that factory, a RAM fee will be transferred from the manager to his key RAM vault and will be refunded to the manager when Uniq is burnt.

Usage of the actions for adding new key pair for factory and updating value in Uniq are provided below.

-   [addkeys.a - Add new key pair for factory](../../../blockchain/contracts/nft-contract/nft-actions/addkeys.a.md)

-   [setvals.a - Set key value for Uniq](../../../blockchain/contracts/nft-contract/nft-actions/setvals.a.md)

And the below action sets the global supported key type for Uniq on-chain data.

-   [setktypes - Set supported key types for key pair](../../../blockchain/contracts/nft-contract/nft-actions/stauctcfg.a.md)

## Benefits of Uniq On-chain data

- Allow Uniq's metadata to be updated on chain.

- Changing off-Chain metadata constantly with the backend is tedious and inefficient in many scenarios.

- Having on-chain Uniq data would also allow Uniq marketplaces to provide filters for Uniqs whose data are changing regularly.
