---
title: 'Getting Started'

order: 1
outline: [0, 4]
---

# Getting Started

## Installation

```bash
npm install @ultraos/wallet-sdk@^0.6.1
```

The package ships as an **ES module** (`import`), with TypeScript type definitions included. Use it with any modern bundler, such as Vite, webpack, Next.js, Nuxt or Angular. The SDK only runs in the browser. Read [Server-side rendering](#server-side-rendering) if your framework also renders on the server.

## Creating the client

Create **one** `UltraWalletSDK` instance for your app and reuse it everywhere.

```ts
import { UltraWalletSDK } from '@ultraos/wallet-sdk';

export const wallet = new UltraWalletSDK({
    environment: 'mainnet',
});
```

### Options

| Option        | Type                                  | Default           | Description |
| ------------- | ------------------------------------- | ----------------- | ----------- |
| `environment` | `'mainnet' \| 'testnet' \| string`    | `'mainnet'`       | The Ultra network your dApp targets. A value that is not `mainnet` or `testnet` is treated as a custom Web Wallet URL. |
| `provider`    | `'extension' \| 'web'`                | auto-detect       | Force one wallet instead of auto-detecting. |

`environment` has two effects:

-   **Web Wallet:** it selects the wallet URL, which fixes the network for the whole session. The Web Wallet is deployed for **mainnet only** (`https://web-wallet.ultra.io`). With `environment: 'testnet'`, only extension users can connect; SDK 0.6.1+ rejects Web Wallet calls on testnet with `4302` instead of opening a popup. Hide the Web Wallet option on testnet.
-   **Extension:** the extension user picks their network inside the wallet. Before each `connect()`, the SDK compares the wallet's chain ID with the `environment` you configured. If they differ, `connect()` throws `Wallet environment mismatch: expected "testnet" chain, but received "<chainId>"…`. Ask the user to switch networks, or call [`switchNetwork()`](./accounts-and-networks.md#switchnetwork) on an already-trusted connection. The check runs only when `environment` is `mainnet` or `testnet`. If you omit it or pass a custom URL, the extension accepts any network.

| Network | Chain ID                                                           |
| ------- | ------------------------------------------------------------------ |
| Mainnet | `a9c481dfbc7d9506dc7e87e9a137c931b0a9303f64fd7a1d08b8230133920097` |
| Testnet | `7fc56be645bb76ab9d747b53089f132dcb7681db06f0852cfa03eaf6f7ac80e9` |

::: warning
Check that `environment` is set correctly before you deploy. A testnet build pointed at mainnet users (or the reverse) makes every extension `connect()` fail with the mismatch error.
:::

## Choosing a provider

With no `provider` option, the SDK checks for `window.ultra` **when the instance is created**:

-   If `window.ultra` exists, the SDK uses the **Browser Extension**.
-   Otherwise, it uses the **Web Wallet**.

The extension injects `window.ultra` at `document_start`, so it is already there when your app code runs. The SDK does not expose which provider it picked. If your UI needs to know (for example, to hide network switching when the Web Wallet is in use), run the same check yourself:

```ts
const hasExtension = typeof window !== 'undefined' && 'ultra' in window;

export const wallet = new UltraWalletSDK({
    environment: 'mainnet',
    provider: hasExtension ? 'extension' : 'web',
});
```

::: tip Local development with the extension
The Chrome Web Store build of the extension only injects `window.ultra` on **HTTPS** pages. On `http://localhost`, the SDK falls back to the Web Wallet. To test against the extension locally, serve your app over HTTPS (for example, `https://localhost:5173` with `@vitejs/plugin-basic-ssl`).
:::

## Your first integration

```ts
import { UltraWalletSDK } from '@ultraos/wallet-sdk';

// Testnet: extension users only (the Web Wallet serves mainnet)
const wallet = new UltraWalletSDK({ environment: 'testnet' });
let account: string | undefined;

document.querySelector('#connect')!.addEventListener('click', async () => {
    try {
        const { data } = await wallet.connect();
        account = data.blockchainid; // the account name, e.g. "aa1aa2aa3aa4"
    } catch (err) {
        // Rejections are objects like { status: 'error', code: 4001, message: 'The user rejected the request.' }
        console.error(err);
    }
});

document.querySelector('#tip')!.addEventListener('click', async () => {
    try {
        const { data } = await wallet.signTransaction({
            contract: 'eosio.token',
            action: 'transfer',
            data: { from: account, to: 'bb1bb2bb3bb4', quantity: '1.00000000 UOS', memo: 'hello' },
        });
        console.log('Transaction id:', data.transactionHash);
    } catch (err) {
        console.error(err);
    }
});
```

Use a separate click for each wallet request. The Web Wallet closes its popup after each request, and a second popup opened after an `await` in the same handler may be blocked.

Every successful call resolves to an `UltraResponse`:

```ts
{
    status: 'success',
    data: /* method-specific payload */,
}
```

Failures **reject** the promise. You never get `status: 'error'` in a resolved value. See [Errors](./errors.md).

## Call wallet methods from a user gesture

Methods that open a window, such as `connect()`, `signMessage()` and `signTransaction()`, must be called **synchronously inside a user event handler** such as `click` or `keydown`. This matters most for the Web Wallet, which opens a popup. Browsers block popups opened outside a user gesture. The SDK then rejects with code `4301` (_Wallet window blocked by browser or failed to open_).

```ts
// ✅ Opens the popup
button.addEventListener('click', () => wallet.connect());

// ❌ Probably blocked: the popup is not opened by a user gesture
setTimeout(() => wallet.connect(), 1000);

// ⚠️ May be blocked: slow async work before the wallet call can outlast
// the browser's user-activation window
button.addEventListener('click', async () => {
    await fetch('/api/prepare');
    await wallet.signTransaction(tx);
});
```

Prepare your data (fetch prices, build the transaction) **before** the user clicks, then call the wallet first thing in the handler.

## Server-side rendering

When the Web Wallet provider is created, it reads `window`, so creating the SDK on the server throws. Create it lazily in the browser:

```ts
let instance: UltraWalletSDK | undefined;

export function getWallet(): UltraWalletSDK {
    if (typeof window === 'undefined') throw new Error('Wallet is only available in the browser');
    return (instance ??= new UltraWalletSDK({ environment: 'mainnet' }));
}
```

In Next.js, call it only from client components or effects. In Nuxt, use `onMounted` or a `.client` plugin.

## Cleaning up

If your app creates the SDK inside a component that can unmount, call `dispose()` on teardown. With the extension, it removes the SDK's event listeners and stops the event heartbeat. With the Web Wallet, it does nothing. After `dispose()`, the instance can no longer be used. Create a new one if you need it again.

```ts
onUnmounted(() => wallet.dispose());
```

## Next steps

-   [Connecting](./connecting.md): the connection options and the connect result.
-   [Signing](./signing.md): messages and transactions.
