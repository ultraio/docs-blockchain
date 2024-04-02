---
title: 'Uniq Offer'

order: 1
---

# Uniq Offer

## Overview of Uniq Offer feature

Uniq Offer allows user to make a buy offer directly to the owner of Uniq or Uniq Factory if it's tradable.

Once these offers are made, the owner of Uniq can accept these offers as long as they are valid. This means offers remain valid even if the Uniq changes hands, ensuring your offer stands until it expires or is withdrawn.

Upon making an offer, `UOS` is securely locked through smart contracts, safeguarding Uniq owners against fake bids.

You can cancel your offer anytime or let it expire. Once an offer expires, anyone can cancel the offer. When an offer is canceled, the offered price will be transferred back to the user who made the offer.

When an offer is accepted, the Uniq will be transferred to the specified buyer (or receiver if specified when making an offer), ensuring a smooth transition of ownership. The fund will also be released and transferred to the owner of the Uniq. If the promoter option is configured, fund will be distributed accordingly to [2nd Hand Sale Policy](../../../blockchain/general/antelope-ultra/2nd-hand-sale.md)

Usage of the actions for creating, accepting and canceling is provided below.

-   [mknftofr.a - Make an offer on an Uniq](../../../blockchain/contracts/nft-contract/nft-actions/mknftofr.a.md)
-   [acptnftofr.a - Accept an Uniq offer](../../../blockchain/contracts/nft-contract/nft-actions/acptnftofr.a.md)
-   [rmnftofr.a - Cancel an Uniq offer](../../../blockchain/contracts/nft-contract/nft-actions/rmnftofr.a.md)
-   [mkfctofr.a - Make an offer on an Uniq factory](../../../blockchain/contracts/nft-contract/nft-actions/mkfctofr.a.md)
-   [acptfctofr.a - Accept an Uniq factory offer](../../../blockchain/contracts/nft-contract/nft-actions/acptfctofr.a.md)
-   [rmfctofr.a - Cancel an Uniq factory offer](../../../blockchain/contracts/nft-contract/nft-actions/rmfctofr.a.md)

And the below action sets the global configurations for Uniq offer.

-   [stofrcfg.a - Set global Uniq offer configuration](../../../blockchain/contracts/nft-contract/nft-actions/stofrcfg.a.md)

## Benefits of Uniq Offer

- Even if a user misses a Uniq sale, as long as the Uniq is tradable, the user can make an offer to buy it directly from its current owner.

- By locking the funds, we will protect Uniq owners from fake bidding and encourage buyers to use their funds smartly.

- An offer will always be valid until it's expired or cancelled. In this way, the new owner can always resell right away if they don't like or there's a better offer missed by the last owner.