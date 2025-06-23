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
import { UltraWallet } from '@ultraos/wallet-sdk';

const wallet = new UltraWallet({
  env: 'testnet', // Required. Defines the target Ultra network.
});
```

The `env` option determines which Ultra blockchain network the wallet connects to. Supported values:

- `'mainnet'` – Ultra's production blockchain.
- `'testnet'` – Public network for development and testing.

Unlike the Ultra Wallet Extension—which allows users to select their active network manually—the Web Wallet relies on this `env` configuration to determine network context at runtime.

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

## Next Steps

After connecting, you can:

- Sign blockchain transactions with `signTransaction()`
- Sign raw messages with `signMessage()`
- Get the current chain ID with `getChainId()`
- Perform on-chain purchases with `purchaseItem()`

These methods are covered in detail in the [Core API Methods](./core-api-methods.md).
