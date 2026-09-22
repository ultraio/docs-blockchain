---
title: 'FAQ / Troubleshooting'

order: 10
outline: [0, 4]
---

# FAQ / Troubleshooting

## Nothing happens when I call `connect()`

With the Web Wallet, this is almost always a **blocked popup**. The promise rejects with `4301`.

-   Call the method directly from a click or tap handler. See [User gestures](./getting-started.md#call-wallet-methods-from-a-user-gesture).
-   Check that the user has not blocked popups for your site.
-   If the popup opens but stays blank, and the call rejects with `4300` after 10 seconds, the Web Wallet could not load. Check the `environment` value and the network connection.

## `connect()` throws "Wallet environment mismatch"

The extension is on a different network from the `environment` you configured. Ask the user to switch networks in the extension, or build your app for the network they use. See [Options](./getting-started.md#options).

## I have the extension installed, but the SDK opens the Web Wallet

-   **Local development on `http://localhost`:** the Chrome Web Store build of the extension runs only on HTTPS pages. Serve your app over HTTPS. See [Choosing a provider](./getting-started.md#choosing-a-provider).
-   **Your app runs inside an iframe.** The extension injects `window.ultra` into top-level pages only.
-   Check that the extension is enabled for the site in the browser's extension settings.

## Can any Ultra account use the Web Wallet?

The Web Wallet supports **Easy Blockchain Accounts** (EBA) only, meaning accounts created through Ultra sign-up. Users with self-managed keys should use the Browser Extension.

## `getAccounts()` / `switchNetwork()` / events don't work

These are extension-only features. With the Web Wallet provider, they reject, throw or do nothing. See the [provider support table](./index.md#provider-support).

## `getAccounts()` returns strings, not objects

Extension 2.2.13 and earlier return bare account names. See [getAccounts()](./accounts-and-networks.md#getaccounts).

## `connect()` says it succeeded, but `accounts` is empty or missing

-   With the **Web Wallet**, only `blockchainid` and `publicKey` are returned.
-   With the **extension**, accounts are resolved on the wallet's current network. A user whose accounts exist only on mainnet has no accounts while the wallet is on testnet.

## My transaction fails with an authorization error

-   The transaction must be authorized by an account and permission the wallet holds a key for. Check with [`getAvailableAuthorizations()`](./accounts-and-networks.md#getavailableauthorizations).
-   Omit the authorization to use the connected account with `active`.
-   With older Web Wallet releases, also pass custom authorizations in the legacy `authorizations` field. See [Authorizations](./signing.md#authorizations).

## `signMessage()` fails with "Missing or invalid parameters"

The message must start with `message:`, `0x` or `UOSx`.

## Can I use the SDK in a mobile browser?

Mobile browsers do not support the Browser Extension, so the SDK uses the Web Wallet. Popup handling differs between mobile browsers, so test your flow on your target devices, and call wallet methods directly from taps.

## Can I switch between mainnet and testnet at runtime?

-   **Extension:** yes, with [`switchNetwork()`](./accounts-and-networks.md#switchnetwork) once connected.
-   **Web Wallet:** no. The network is fixed by `environment`. Create a new `UltraWalletSDK` instance (and `dispose()` the old one) to target another network.

## Where are the keys stored? Can the dApp access them?

No, a dApp can never read private keys. It receives only public keys, signatures and transaction results.

-   **Browser Extension:** keys are kept in the extension's encrypted vault, unlocked with the user's password.
-   **Web Wallet:** keys are generated in the browser and stored in an encrypted vault. The encryption key is assembled from a device-local part and a part from Ultra's device service, so Ultra never holds the complete key. See [Ultra Web Wallet → Security](../ultra-web-wallet/security.md).

## Can I call `window.ultra` directly instead of using the SDK?

Yes. The extension's `window.ultra` API is documented under [Ultra Wallet](../ultra-wallet/index.md). The SDK is recommended: it also supports Web Wallet users, checks the network, and handles event registration for you.
