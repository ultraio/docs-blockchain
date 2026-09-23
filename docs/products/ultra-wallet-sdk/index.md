---
title: 'Introduction'

order: -1
outline: [0, 4]
---

# Ultra Wallet SDK

`@ultraos/wallet-sdk` is the official JavaScript/TypeScript client that dApps use to talk to an Ultra wallet. It gives you one API that works with both of Ultra's wallets:

-   **Ultra Wallet Browser Extension** — a self-custody wallet installed in Chrome. It supports multiple accounts, custom networks and live events.
-   **Ultra Web Wallet** — a popup wallet for Easy Blockchain Account (EBA) users that needs no installation.

The SDK decides which wallet to use when it is created. You write your integration once: connect, sign, and listen for changes, and the SDK routes each call to the wallet the user has.

```ts
import { UltraWalletSDK } from '@ultraos/wallet-sdk';

const wallet = new UltraWalletSDK({ environment: 'mainnet' });

connectButton.addEventListener('click', async () => {
    const { data } = await wallet.connect();
    console.log('Connected account:', data.blockchainid);
});
```

## What you can do

| Capability                                                          | Method(s)                                                         |
| ------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Connect / disconnect a dApp                                         | `connect()`, `disconnect()`                                       |
| Prove account ownership (login challenge)                           | `connect({ nonce })`, `signMessage()`                             |
| Sign and broadcast transactions, or sign only                       | `signTransaction()`                                               |
| Read the user's accounts and signing authorities                    | `getAccounts()`, `getSelectedAccount()`, `getAvailableAuthorizations()` |
| Read and switch the active network                                  | `getChainId()`, `getNetwork()`, `getNetworks()`, `switchNetwork()` |
| React to account, network and disconnect changes                    | `on()`, `off()`, `dispose()`                                      |

## Provider support

Not every method is available with both wallets. Web Wallet requests travel through a popup window, one request at a time, so that transport cannot support long-lived features such as events and network switching.

| Method                                                   | Browser Extension | Web Wallet                                   |
| -------------------------------------------------------- | :---------------: | :------------------------------------------: |
| Networks                                                 | Mainnet, Testnet, custom | Mainnet only                           |
| `connect()` / `disconnect()`                             | ✅                | ✅                                           |
| `signMessage()`                                          | ✅                | ✅                                           |
| `signTransaction()` (incl. `signOnly`)                   | ✅                | ✅                                           |
| `getChainId()`                                           | ✅                | ✅ (resolved from `environment`, no popup)   |
| `getAccounts()` / `getSelectedAccount()`                 | ✅                | ❌                                           |
| `getAvailableAuthorizations()`                           | ✅                | ❌                                           |
| `getNetwork()` / `getNetworks()` / `switchNetwork()`     | ✅                | ❌                                           |
| `on()` / `off()` events                                  | ✅                | ❌ (no-op)                                   |
| `connect()` result: `accounts`, `selectedAccount`, `network` | ✅            | ❌ (legacy fields only)                      |

See [Getting Started → Choosing a provider](./getting-started.md#choosing-a-provider) to learn how to detect which wallet is active.

## Versions

This documentation covers `@ultraos/wallet-sdk` **0.6.1**. Install it with `npm install @ultraos/wallet-sdk@^0.6.1`.

| SDK version | Highlights                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| 0.6.1       | Web Wallet on testnet rejects with `4302`; Web Wallet JSON-RPC errors reject with their code instead of `undefined`; types resolve under `nodenext` |
| 0.6.0       | Removed the `purchaseItem()` and `addNetwork()` methods, which no wallet serves (users still add networks in the extension); `nonce` / `signedNonce` typed on the connect result |
| 0.3.x       | Multi-account results, structured `authorization`, `getAvailableAuthorizations()`, network API, events, `dispose()`; bundled ES module with an `exports` map (0.3.2) |
| 0.2.0       | `provider` option to force the extension or the Web Wallet                                                   |
| 0.1.x       | `nonce` on `connect()`                                                                                       |

## Where to go next

-   [Getting Started](./getting-started.md): install, configure, and make your first call.
-   [Connecting](./connecting.md): connection options, eager reconnects, and login with a signed nonce.
-   [Signing](./signing.md): messages, transactions, multiple actions, and sign-only.
-   [Accounts & Networks](./accounts-and-networks.md): read the user's accounts and switch networks.
-   [Events](./events.md): react to account and network changes.
-   [Selling Uniqs](./selling-uniqs.md): on-chain purchases from a Uniq Factory.
-   [Errors](./errors.md) and the [API Reference](./api-reference.md).
