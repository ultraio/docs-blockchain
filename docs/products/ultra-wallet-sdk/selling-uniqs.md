---
title: 'Selling Uniqs'

order: 7
outline: [0, 4]
---

# Selling Uniqs

Users buy directly from a Uniq Factory that has a purchase option set up. Use the NFT contract's [`purchase.a`](../../blockchain/contracts/nft-contract/nft-actions/purchase.a.md) action through [`signTransaction()`](./signing.md#signtransaction). The price is paid in UOS from the buyer's account:

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

The transaction does not return the minted Uniq's ID as a field. Look it up in the buyer's inventory with the [NFT API](../nft-api/introduction.md). For second-hand listings, see the [`buy`](../../blockchain/contracts/nft-contract/nft-actions/buy.md) action.

::: info `purchaseItem()` was removed
SDK versions before 0.6.0 had a `purchaseItem()` method that opened Ultra's hosted checkout. The current wallets deliberately do not depend on the Ultra platform backend, so no wallet serves that checkout any more, and SDK 0.6.0 removed the method. Use the on-chain purchase above.
:::
