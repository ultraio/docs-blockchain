---
title: 'Getting Started'

order: 1
outline: [0, 4]
---

# Getting Started

To begin using the Ultra Web Wallet in your application, you’ll need to integrate the `@ultraos/wallet-sdk`. This SDK provides a unified interface for both the Ultra Wallet Extension and the Ultra Web Wallet.

## Installation

First, install the SDK via npm:

```bash
npm install @ultraos/wallet-sdk
```

## SDK Initialization

To begin interacting with Ultra Web Wallet or Ultra Wallet Extension, you need to create an instance of the `UltraWallet` class provided by the `@ultraos/wallet-sdk`.

This instance will be used throughout your application to trigger wallet connections, sign transactions, and more.

```ts
import { UltraWalletSDK } from '@ultraos/wallet-sdk';

const wallet = new UltraWalletSDK({
  env: 'testnet', // Required. Defines the target Ultra network.
  provider: 'web' // Optional. Use a specific provider independetly of auto-detection 
});
```

The `env` option determines which Ultra blockchain network the wallet connects to. Supported values:

- `'mainnet'` – Ultra's production blockchain.
- `'testnet'` – Public network for development and testing.

> Unlike the Ultra Wallet Extension—which allows users to select their active network manually—the Web Wallet relies on this `env` configuration to determine network context at runtime.

The `provider` property allows developers to explicitly select the wallet implementation to use (e.g., `'web'` or `'extension'`). Currently, the Web Wallet does not support Non-EBA accounts. If your application requires support for Non-EBA accounts, you should use the Extension instead.

::: warning
⚠️ Always verify that your environment is set appropriately before deploying to production.
:::

## Connecting the Wallet

Use the `connect()` method to initiate the login process and register the device with the Ultra Web Wallet:

```ts
const result = await wallet.connect();
console.log('Connected:', result);
```

If the Ultra Wallet Extension is installed, it will be used by default. Otherwise, the SDK will automatically fall back to the Web Wallet.

## Disconnecting

To log out the user and clear local credentials:

```ts
await wallet.disconnect();
```

## ⚠️ Important: Popup Handling Requirements

To ensure proper functioning of the Ultra Web Wallet, **all API calls that trigger UI actions (such as connect, purchase, or signature requests)** must be initiated **within a direct user action**, such as a `click` or `tap` event.

Browsers enforce strict popup blockers for non-user-initiated windows. If your call to the wallet (e.g., `ultra.connect()` or `ultra.purchaseItem()`) is not triggered from a user interaction, the popup will likely be blocked, and no action will occur.

### ✅ Correct Usage (inside a button event):

```js
button.addEventListener("click", async () => {
  await wallet.connect();
});
```

### ❌ Incorrect Usage (auto-triggered or delayed):

```js
// This will likely be blocked
setTimeout(() => {
  wallet.connect();
}, 1000);
```

:::info TIP
🛡 Always ensure wallet methods are triggered synchronously inside user input events to avoid UX issues.
::: 


## Next Steps

After connecting, you can:

- Sign blockchain transactions with `signTransaction()`
- Sign raw messages with `signMessage()`
- Get the current chain ID with `getChainId()`
- Perform on-chain purchases with `purchaseItem()`

These methods are covered in detail in the [Core API Methods](./core-api-methods.md).
