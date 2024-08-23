---
title: 'Uniq Factory purchase using FIAT or UOS'

order: 9
outline: [0, 4]
---

# Purchase an Uniq Factory using FIAT or UOS

To facilitate the purchase of an Uniq Factory with FIAT or Blockchain tokens, the Ultra platform provides the `ultra.purchaseItem(itemType, itemId)` API method. This method is designed to initiate the purchase process for a specific item, identified by its type and unique ID on the blockchain.

API Method: `ultra.purchaseItem(itemType, itemId)`
- `itemType`: For Uniq Factory purchases, this value should be "UniqFactory".
- `itemId`: The identifier of the Uniq Factory on the blockchain.

When this API method is called, it triggers a popup window displaying the Ultra purchase flow. This flow allows users to complete their purchase using Credit or Debit cards, as well as UOS tokens. Upon successful payment, Ultra mints the Uniq to the user and returns the following information as the result of the API call:
- `orderHash`: An ID used for support requests if required.
- `items`: An array of purchased elements
  - `productId`: The item ID that was sent in the API call.
  - `artifactId`: The minted Uniq ID on the blockchain.
  - `blockchainTransactionId`: The transaction ID on the blockchain, useful for tracking the status and details.

If the user cancels the purchase flow by either closing the window or explicitly canceling the purchase in the user UI, or if an error related to the payment occurs, the API will throw an error. The error message will provide details about the cancellation.

```JavaScript
try {
  const response = await ultra.purchaseItem("UniqFactory", "599");
  response
  // {
  //   status: "success",
  //   data: {
  //     orderHash: "XXX",
  //     items: [{
  //       productId: 599,
  //       artifactId: 7777,
  //       blockchainTransactionId: "XXX",
  //     }],
  //   },
  // }
} catch (err) {
  // { status: "error", message: "Purchase canceled" }
}
```
