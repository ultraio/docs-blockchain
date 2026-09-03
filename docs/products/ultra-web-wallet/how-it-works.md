---
title: 'How It Works'

order: 0
outline: [0, 4]
---

# How It Works

The Ultra Web Wallet uses a popup and JSON-RPC messages over `window.postMessage` to handle dApp requests. The dApp never receives the user's private key.

## Provider selection

When `UltraWalletSDK` is created without a fixed provider, it checks for the Ultra Wallet Browser Extension. It uses the extension when detected and otherwise creates the Web Wallet provider.

You can select the Web Wallet explicitly:

```ts
const wallet = new UltraWalletSDK({
    environment: 'mainnet',
    provider: 'web',
});
```

`environment` accepts `mainnet`, `testnet`, or a custom Web Wallet URL. It defaults to `mainnet`.

## Connection flow

1. A user action in the dApp calls `wallet.connect()`.
2. The SDK opens the configured Web Wallet URL in a popup and waits for its readiness handshake.
3. The Web Wallet authenticates the user through Ultra SSO.
4. For a new browser device, the wallet generates a key pair locally and registers the public key with the user's EBA account. Returning devices are activated using their existing local wallet data.
5. The user approves the dApp origin. That trusted origin is stored locally for the signed-in user, allowing later `connect()` calls to resolve without another approval prompt.
6. The wallet returns the blockchain account name and public key to the dApp.

Passing a `nonce` to `connect()` also asks the wallet to sign that nonce. A nonce must begin with `message:`, `0x`, or `UOSx`. A nonce connection is not silently auto-approved, even for an already trusted origin.

## Signing flow

For messages and transactions:

1. The dApp calls `signMessage()` or `signTransaction()` from a user action.
2. The SDK opens or focuses the Web Wallet popup and sends the request after the readiness handshake.
3. The Web Wallet verifies that the dApp origin is connected and displays the request for approval.
4. After approval, signing happens in the Web Wallet using the locally stored encrypted key.
5. A transaction is signed and broadcast to the configured Ultra network by default. With `{ signOnly: true }`, the wallet returns the signed transaction without broadcasting it.
6. The result is returned to the dApp and the popup closes.

Only one Web Wallet request can be pending from an SDK instance at a time.

## Network and event model

The Web Wallet's network is selected when the SDK instance is created. To target a different environment, create a new `UltraWalletSDK` instance with a different `environment` value.

The Web Wallet transport is request/response only. Long-lived wallet events and runtime network switching are available through the browser-extension provider, not the Web Wallet provider.
