---
title: 'Connecting'

order: 2
outline: [0, 4]
---

# Connecting

A dApp must be **connected** before the wallet will share account information or accept signing requests. When a user approves a connection, your site's origin becomes **trusted** by their wallet. Later `connect()` calls from that origin can then complete without another prompt.

## connect()

```ts
connect(params?: ConnectParams): Promise<UltraResponse<ConnectResult>>
```

```ts
try {
    const { data } = await wallet.connect();
    data.blockchainid; // "aa1aa2aa3aa4"  (the connected account name)
    data.publicKey; //    "EOS7HUZZ6AQvrEi3wGRrKd2A3CuktaeM6xnguA2CrVxH9BUMB5aRx"
} catch (err) {
    // { status: 'error', code: 4001, message: 'The user rejected the request.' }
}
```

### Parameters

| Parameter            | Type      | Description |
| -------------------- | --------- | ----------- |
| `onlyIfTrusted`      | `boolean` | Never show a prompt. Resolve only if the origin is already trusted, otherwise reject with `4001`. See [Eager reconnect](#eager-reconnect). |
| `nonce`              | `string`  | A challenge for the wallet to sign during connection. See [Login with a signed nonce](#login-with-a-signed-nonce). Must start with `message:`, `0x` or `UOSx`. |
| `referralCode`       | `string`  | Your Ultra referral code, credited if the user creates an Ultra account during the connection. |

### The connect result

| Field             | Type                   | Extension | Web Wallet | Description |
| ----------------- | ---------------------- | :-------: | :--------: | ----------- |
| `blockchainid`    | `string`               | ✅        | ✅         | The connected **account name** (for example `aa1aa2aa3aa4`). Despite the name, this is not a chain ID. |
| `publicKey`       | `string`               | ✅        | ✅         | A public key of the connected account. |
| `accounts`        | `AccountInfo[]`        | ✅        | —          | Every account the wallet can sign for **on the current network**, with its permissions and keys. |
| `selectedAccount` | `AccountInfo`          | ✅        | —          | The account currently selected in the wallet. Matches `blockchainid`. |
| `network`         | `{ name, chainId }`    | ✅        | —          | The network the wallet is on. |
| `nonce`           | `string`               | ✅        | ✅         | Only when you passed `nonce`: the nonce, echoed back. |
| `signedNonce`     | `string`               | ✅        | ✅         | Only when you passed `nonce`: the signature (`SIG_K1_…`). |

```ts
// Example extension result
{
  status: 'success',
  data: {
    blockchainid: 'aa1aa2aa3aa4',
    publicKey: 'EOS7HUZZ6AQvrEi3wGRrKd2A3CuktaeM6xnguA2CrVxH9BUMB5aRx',
    accounts: [
      { accountName: 'aa1aa2aa3aa4', permissions: [{ name: 'active', publicKeys: ['EOS7HUZ…'] }, { name: 'owner', publicKeys: ['EOS7HUZ…'] }] },
      { accountName: 'bb1bb2bb3bb4', permissions: [{ name: 'active', publicKeys: ['EOS5Xa…'] }] },
    ],
    selectedAccount: { accountName: 'aa1aa2aa3aa4', permissions: [ /* … */ ] },
    network: { name: 'mainnet', chainId: 'a9c481dfbc7d9506dc7e87e9a137c931b0a9303f64fd7a1d08b8230133920097' },
  },
}
```

::: tip Writing for both wallets
Read `blockchainid` and `publicKey` for code that must work with both wallets. Use `accounts`, `selectedAccount` and `network` when they are present (extension users), and fall back to the legacy fields when they are not.
:::

### When does the user see a prompt?

**Browser Extension**

| Situation                                                     | Behavior |
| ------------------------------------------------------------- | -------- |
| Origin not trusted                                            | Connection prompt. With `onlyIfTrusted`, rejects with `4001` instead. |
| Origin trusted                                                | **Resolves silently** with the current account, with or without `onlyIfTrusted`. |
| Origin trusted, `nonce` passed                                | Always prompts, because the user must approve signing the nonce. |
| Wallet locked                                                 | Prompt to unlock. With `onlyIfTrusted`, rejects with `4001`. |
| Another `connect()` from the same origin still pending        | Rejects with `-32002` (resource unavailable). |

Trust is granted per **origin**, across all networks. A dApp connected on testnet stays trusted after the user switches to mainnet.

**Web Wallet**

Every `connect()` opens the Web Wallet popup. If the user is signed in and the origin is already trusted, the popup resolves at once and closes itself. Otherwise the user signs in with Ultra SSO and approves the connection. A connection with a `nonce` always shows the approval screen. The Web Wallet ignores `onlyIfTrusted` and still opens the popup.

## Eager reconnect

After a page reload, you usually want to restore a previous connection without bothering the user. With the extension, call `connect({ onlyIfTrusted: true })` on page load:

```ts
async function restoreSession() {
    try {
        const { data } = await wallet.connect({ onlyIfTrusted: true });
        return data; // Still trusted: the UI shows "connected"
    } catch {
        return null; // Not trusted (or locked): show the "Connect" button
    }
}
```

::: warning Web Wallet
Do **not** call `connect()` on page load with the Web Wallet. Each call opens a popup, and without a user gesture the browser blocks it (`4301`). With the Web Wallet, store the account name from the last successful `connect()` yourself, and call `connect()` again only from a click.
:::

## Login with a signed nonce

To prove to **your backend** that the user controls an account, have the wallet sign a server-issued challenge while it connects. This takes a single popup:

```ts
// 1. Get a one-time challenge from your server
const { challenge } = await fetch('/auth/challenge').then((r) => r.json());
// e.g. "message: Sign in to example.com\nNonce: 7c1e9f…\nIssued at: 2026-09-23T10:00:00Z"

// 2. Connect and sign it (from a click handler)
const { data } = await wallet.connect({ nonce: challenge });
const { nonce, signedNonce } = data;

// 3. Send the result to your server for verification
await fetch('/auth/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ account: data.blockchainid, nonce, signature: signedNonce }),
});
```

The nonce is signed the same way as [`signMessage()`](./signing.md#verifying-a-message-signature): a K1 signature over the SHA-256 of the UTF-8 nonce string. On the server:

1. Check that the nonce is one **you** issued, has not expired, and has not been used before.
2. Recover the public key from the signature.
3. Check **on chain** that this key is authorized for the claimed account. Never trust a `publicKey` sent by the client.

```ts
// Node.js, using @wharfkit/antelope
import { APIClient, Bytes, Signature } from '@wharfkit/antelope';

const client = new APIClient({ url: 'https://api.mainnet.ultra.io' });

export async function verifyLogin(account: string, nonce: string, signature: string): Promise<boolean> {
    const key = Signature.from(signature).recoverMessage(Bytes.from(nonce, 'utf8'));
    const { accounts } = await client.v1.chain.get_accounts_by_authorizers({ keys: [key] });
    return accounts.some((a) => a.account_name.equals(account));
}
```

::: tip API node
The lookup needs an API node that supports `get_accounts_by_authorizers`, such as `https://api.mainnet.ultra.io` on mainnet or `https://api.testnet.ultra.eossweden.org` on testnet. Not every public node supports it (for example, `test.ultra.eosusa.io` does not).
:::

::: tip
Put your domain and an expiry time in the challenge text. The user sees the text in the wallet, and it stops a signature collected by one site from being replayed on another.
:::

## disconnect()

```ts
disconnect(): Promise<UltraResponse<boolean>>
```

Revokes your origin's trusted status. The next `connect()` prompts the user again.

```ts
await wallet.disconnect();
```

-   **Extension:** no prompt. The call is idempotent: it succeeds even if the origin was already disconnected. It also fires a [`disconnect` event](./events.md).
-   **Web Wallet:** opens the popup to complete the disconnection.

Users can also disconnect your site from inside the extension. Listen for the [`disconnect` event](./events.md) so your UI stays in sync.
