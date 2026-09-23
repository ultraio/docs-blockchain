---
title: 'Uniq Factory purchase'

order: 9
outline: [0, 4]
---

# Uniq Factory purchase

::: warning `ultra.purchaseItem()` has been removed
Earlier versions of the Ultra Wallet exposed `ultra.purchaseItem(itemType, itemId)`, which opened Ultra's hosted checkout. The current wallet no longer depends on the Ultra platform backend, so that checkout was removed, and `@ultraos/wallet-sdk` 0.6.0 removed the method. Calling `window.ultra.purchaseItem()` now rejects with `-32601` (method does not exist).
:::

To sell Uniqs from a Uniq Factory, have the buyer sign the NFT contract's on-chain [`purchase.a`](../../blockchain/contracts/nft-contract/nft-actions/purchase.a.md) action. See [Ultra Wallet SDK → Selling Uniqs](../ultra-wallet-sdk/selling-uniqs.md) for a complete example.
