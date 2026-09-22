---
title: 'Purchasing Items'

order: 7
outline: [0, 4]
---

# Purchasing Items

## purchaseItem()

```ts
purchaseItem(itemType: PurchaseItemType, itemId: string): Promise<UltraResponse<PurchaseItemResult>>

enum PurchaseItemType {
    UNIQ_FACTORY = 'UniqFactory',
    GAME_FACTORY = 'GameFactory',
}
```

`purchaseItem()` was designed to open Ultra's hosted checkout for a Uniq Factory or a Game Factory. There, the user pays by card or in UOS, and the item is minted to their account.

::: danger Currently unavailable
The current wallet releases do not include the checkout screen. The method is still in the SDK for compatibility, but a call **never succeeds**: the wallet popup opens, but it has no checkout to show. Do not use `purchaseItem()` in new integrations. To sell Uniqs, use the [on-chain purchase](#on-chain-alternative) below.
:::

The result type is kept for reference:

```ts
interface PurchaseItemResult {
    orderHash: string; // order reference for Ultra support
    items: {
        productId: string; //               the requested item ID
        artifactId: string; //              the minted Uniq ID
        blockchainTransactionId: string; // the mint transaction
    }[];
}
```

## On-chain alternative

Users can buy directly from a Uniq Factory that has a purchase option set up. Use the NFT contract's [`purchase.a`](../../blockchain/contracts/nft-contract/nft-actions/purchase.a.md) action through [`signTransaction()`](./signing.md#signtransaction). The price is paid in UOS from the buyer's account:

```ts
const buyer = connected.blockchainid;

const { data } = await wallet.signTransaction({
    contract: 'eosio.nft.ft',
    action: 'purchase.a',
    data: {
        purchase: {
            token_factory_id: 599,
            index: 0, //                      the purchase option index
            max_price: '10.00000000 UOS', //  the most the buyer will pay (guards against USD/UOS price moves)
            buyer,
            receiver: buyer,
            promoter_id: null,
            user_uniqs: null,
            memo: '',
        },
    },
});

console.log('Purchased in', data.transactionHash);
```

The minted Uniq's ID appears in the transaction's `action_traces`. You can also find it later in the buyer's inventory with the [NFT API](../nft-api/introduction.md). For second-hand listings, see the [`buy`](../../blockchain/contracts/nft-contract/nft-actions/buy.md) action.
