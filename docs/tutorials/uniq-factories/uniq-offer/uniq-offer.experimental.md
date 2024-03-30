---
title: 'Uniq Offer'

order: 1
---

# Uniq Offer

## Overview of Uniq Offer feature

Uniq Offer allow user to make a buy offer directly to the owner of Uniq or Uniq Factory if it's tradable.

Once these offers are made, owner of Uniq or Uniq Factory can accept these offers as long as offer is still valid. This means offers remain valid even if the Uniq changes hands, ensuring your offer stands until it expires or is withdrawn.

Upon making an offer, `UOS` is securely locked through smart contracts, safeguarding Uniq owners against fake bids.

You can cancel your offer anytime or let it expire. Once an offer expires, anyone can cancel the offer. When an offer is canceled, the offered price will be transferred back to the user who made the offer.

When an offer is accepted, the Uniq transfers to the specified buyer address, ensuring a smooth transition of ownership. The fund will also be released and transferred to the owner of the Uniq. If the promoter option is configured, fund will be distributed accordingly to [2nd Hand Sale Policy](../../../general/antelope-ultra/2nd-hand-sale.md)

Various configuration and usage of the actions for creating, accepting and canceling is provided below.

-   [mknftofr.a - Make an offer to an Uniq](../../../blockchain/contracts/nft-contract/nft-actions/mknftofr.a.md)
-   [acptnftofr.a - Accept an Uniq offer](../../../blockchain/contracts/nft-contract/nft-actions/acptnftofr.a.md)
-   [rmnftofr.a - Cancel an Uniq offer](../../../blockchain/contracts/nft-contract/nft-actions/rmnftofr.a.md)
-   [mkfctofr.a - Cancel an Uniq offer](../../../blockchain/contracts/nft-contract/nft-actions/mkfctofr.a.md)
-   [acptfctofr.a - Cancel an Uniq offer](../../../blockchain/contracts/nft-contract/nft-actions/acptfctofr.a.md)
-   [rmfctofr.a - Cancel an Uniq offer](../../../blockchain/contracts/nft-contract/nft-actions/rmfctofr.a.md)

And all Uniq offer will need to follow the global configuration set by action below

-   [stofrcfg.a - Set global Uniq offer configuration](../../../blockchain/contracts/nft-contract/nft-actions/stofrcfg.a.md)

## Benefit of Uniq Offer

- If user missed an Uniq sale, as long as that Uniq is still tradable, user can make an offer to buy it directly from Uniq current owner. And if user is after a specific type of Uniq, user can also make offer to Uniq token factory.

- By locking the funds, we will protect owner from fake bidding and encourage buyer to use the fund smartly if they really want that Uniq.

- Offer will always be valid until it's expired or cancelled, this way the new owner can always resell right away if they don't like or there's a better offer missed by the last owner.