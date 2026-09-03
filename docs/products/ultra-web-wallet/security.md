---
title: 'Security Model'

order: 1
outline: [0, 4]
---

# Security Model

The Ultra Web Wallet is non-custodial: transaction and message signing happens in the user's browser, and Ultra does not store the complete private key.

## Key generation and storage

When a browser device is registered, the Web Wallet generates the private/public key pair locally. It sends the public key for registration with the user's EBA account and saves the private key in an encrypted vault in the Web Wallet origin's local browser storage.

The vault encryption key is assembled from two parts during authentication:

- A user/device part retained in the Web Wallet's local storage in encrypted form.
- An Ultra part returned by the device activation service after the user authenticates.

Neither the encrypted local vault nor Ultra's server-side part is sufficient on its own to recover the private key. This model still depends on the security of the user's browser, device, Ultra account, and the Web Wallet service; it should not be treated as protection against every form of compromise.

Clearing site data for the Web Wallet removes its local device and vault data. The user may need to register the browser as a new device on the next connection.

## Authentication and device registration

The popup authenticates through Ultra SSO. A new device registers its generated public key with the EBA service and waits until the account/device update is confirmed before enabling signing. Some device-management operations can require a higher SSO authentication level.

The Web Wallet currently supports EBA accounts only.

## dApp permissions and request approval

The Web Wallet stores approved dApp origins locally for each signed-in user. A previously approved origin can reconnect silently; disconnecting removes that local approval.

Message and transaction requests are shown in the Web Wallet for user approval. Messages must begin with `message:`, `0x`, or `UOSx`. Transactions are broadcast only after approval unless the dApp requests `signOnly`, in which case the signed transaction is returned without broadcasting.

## Communication boundary

The SDK and Web Wallet exchange JSON-RPC messages through the popup. The SDK sends requests only to the configured wallet origin and accepts responses only from that origin. The Web Wallet binds a popup session to the origin that initiated the request and sends its response back to that origin.

## Developer practices

- Use the official `@ultraos/wallet-sdk` package.
- Set the intended `environment` explicitly and use `provider: 'web'` when the Web Wallet is required rather than an automatic fallback.
- Invoke popup-opening methods directly from a user gesture.
- Display the transaction details in the dApp before opening the wallet, and treat rejected or closed requests as normal outcomes.
- Do not request signatures for opaque data that users cannot independently understand.
- Avoid retaining signed payloads longer than the application requires.
