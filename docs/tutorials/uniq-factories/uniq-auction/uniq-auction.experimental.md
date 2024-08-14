---
title: 'Uniq Auction'

order: 1
---

# Uniq Auction

## Overview of Uniq Auction feature

Uniq Auction allows a Uniq owner to sell his Uniq to another user, similar to `resell`. Potential buyers place progressively increasing bids until the expiry date of the auction. The highest bidder will receive the Uniq after the auction concludes and his bid will be split between the seller, factory royalties and the promoter.

Auction creator controls the starting price, start date of an auction and promoter share.

Only UOS pricing is supported for an auction. The starting price must respect the minimum resell price of the factory. The start and initial expiry date of an auction must respect the trading window of the factory.

When a bid is placed, it will be transferred to a secure account and locked there until the new bid arrives or the auction is concluded.

When the auction is concluded, the funds will be distributed accordingly to [2nd Hand Sale Policy](../../../blockchain/general/antelope-ultra/2nd-hand-sale.md)

Usage of the actions for creating, cancelling, bidding and settling an auction is provided below.

-   [createauct.a - Create an Uniq auction](../../../blockchain/contracts/nft-contract/nft-actions/createauct.a.md)

And the below action sets the global configurations for Uniq auctions.

-   [stauctcfg.a - Set global Uniq auction configuration](../../../blockchain/contracts/nft-contract/nft-actions/stauctcfg.a.md)

## Benefits of Uniq Auction

- Simpler price decision process - you specify the starting price and at the end of the auction you will receive the highest amount of UOS somebody was willing to pay for your Uniq.

- Auctions have trackable start and end time - you can control when the auction for your Uniq will start and can check the expiry time when desired. Note that the expiry time is extended if there are active bids going on.

- By locking the funds, we will protect Uniq owners from fake bidding and encourage buyers to use their funds smartly.

