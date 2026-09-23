---
title: 'Errors'

order: 8
outline: [0, 4]
---

# Errors

## Error shape

When a wallet request fails, the promise **rejects** with a plain object (not an `Error` instance):

```ts
{
    status: 'error' | 'fail',
    code: number,
    message: string,
    data?: unknown, // extra detail, e.g. which parameter was invalid
}
```

-   `status: 'fail'`: usually the request itself was invalid (bad parameters), though the extension also uses it for a few busy or internal conditions. Branch on `code`, not `status`.
-   `status: 'error'`: the request could not be completed. The user rejected it, the wallet was busy, the transaction failed, and so on.

For wallet errors, `message` is the generic text for the code. Extra detail, such as the chain's error for a failed transaction, is in `data`.

A few SDK-side checks throw a regular `Error` instead. These are the environment mismatch on `connect()`, and `Not supported in web provider` for `getNetwork()`, `getNetworks()` and `switchNetwork()` with the Web Wallet. Those three throw **synchronously**, so catch them with `try { await … }` rather than `.catch()`. Handle both kinds:

```ts
import { SdkErrorCode } from '@ultraos/wallet-sdk';

try {
    await wallet.signTransaction(tx);
} catch (err: any) {
    if (err instanceof Error) {
        showError(err.message); // SDK configuration / unsupported method
    } else if (err?.code === SdkErrorCode.USER_REJECTED_REQUEST) {
        // 4001: the user said no. Usually no error message is needed.
    } else {
        showError(err?.message ?? 'Wallet request failed');
    }
}
```

## Wallet error codes

The codes follow [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193#provider-errors) and [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474#error-codes).

| Code     | Name                  | Typical cause |
| -------- | --------------------- | ------------- |
| `4001`   | User rejected request | The user clicked Cancel or Reject. Also `connect({ onlyIfTrusted: true })` on an untrusted origin. With the Web Wallet, closing the popup rejects with `4001` too. With the extension, closing the approval window leaves the request **pending**: the user can reopen the extension to approve or reject it. |
| `4100`   | Unauthorized          | The origin is not connected, for example `signMessage()`, `signTransaction()` or `switchNetwork()` before `connect()`, or a Web Wallet `disconnect()` from an origin that is not connected. |
| `4900`   | Disconnected          | Reserved. Not currently raised by either wallet. |
| `4902`   | Unrecognized chain ID | `switchNetwork()` to a network the wallet does not have. |
| `-32000` | Invalid input         | Missing or invalid parameters, such as an invalid transaction object, authorizations with no valid `account@permission` (Web Wallet), or (extension) a message without a `message:` / `0x` / `UOSx` prefix. |
| `-32002` | Resource unavailable  | The wallet is busy: a duplicate `connect()`, a pending request blocking `switchNetwork()`, or the wallet is locked. |
| `-32003` | Transaction rejected  | Signing or broadcasting failed. The chain's error is in `data`. The Web Wallet also uses this code for a message or nonce with an invalid prefix, after the user confirms. |
| `-32005` | Limit exceeded        | More than 10 pending requests from your origin. |
| `-32600` | Invalid request       | The request object is malformed. |
| `-32601` | Method not found      | The wallet does not implement the method, for example `getAccounts()` with the Web Wallet, or a removed method called directly on `window.ultra`. |
| `-32602` | Invalid params        | A parameter has the wrong format, such as a `switchNetwork()` chain ID that is not 64 hex characters. |
| `-32603` | Internal error        | An unexpected wallet-side failure. |

## SDK error codes

The SDK raises these codes itself. Most come from the Web Wallet's popup transport. They are exported as `SdkErrorCode`:

| Code     | `SdkErrorCode`                     | Message                                          | Cause |
| -------- | ---------------------------------- | ------------------------------------------------ | ----- |
| `4001`   | `USER_REJECTED_REQUEST`            | The user rejected the request.                   | The user closed the Web Wallet popup before finishing. |
| `4300`   | `WALLET_HANDSHAKE_TIMEOUT`         | Timeout to connect with the web wallet.          | The popup did not respond within 10 seconds. The SDK closes it. |
| `4301`   | `WALLET_WINDOW_UNAVAILABLE`        | Wallet window blocked by browser or failed to open. | The popup was blocked. Call from a [user gesture](./getting-started.md#call-wallet-methods-from-a-user-gesture). |
| `4302`   | `WEB_WALLET_UNAVAILABLE`           | The Ultra Web Wallet is not available on this network. … | _SDK 0.6.1+._ The Web Wallet provider was used with `environment: 'testnet'`. Testnet is supported through the browser extension only. |
| `32002`  | `REQUESTED_RESOURCE_NOT_AVAILABLE` | Requested resource not available.                | A Web Wallet request is already in progress. Note: this is **positive** `32002`, unlike the extension's `-32002`. |
| `-32604` | `UNKNOWN_ERROR`                    | Unknown error occurred.                          | The popup's JSON-RPC call failed without an error code. The original error is in `data`. When the Web Wallet returns a coded JSON-RPC error (such as `-32601`), SDK 0.6.1+ rejects with that code and closes the popup. (SDK 0.6.0 rejected with `undefined`, so guard with `err?.code`.) |
