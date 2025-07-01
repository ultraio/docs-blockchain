---
title: 'How It Works'

order: 0
outline: [0, 4]
---


# How It Works

The Ultra Web Wallet is tightly integrated with the Ultra ecosystem to provide a smooth and secure Web3 experience without requiring users to install browser extensions.

## Authentication & Key Management

When a user connects via Ultra Web Wallet, the authentication flow begins with Ultra SSO (Single Sign-On). This process:

- Authenticates the user.
- Registers the device with Ultra's EBA (Easy Blockchain Account) service.
- Securely synchronizes a private key that is stored on the user's local device.

Ultra does not store full private keys. Instead, keys are split and encrypted—one part held by Ultra and the other stored securely on the client device—ensuring non-custodial ownership.

## Fallback Strategy: Extension or Web Wallet

The `@ultraos/wallet-sdk` automatically detects whether the Ultra Wallet Extension is installed. If it is, the extension is prioritized. If not, the SDK seamlessly falls back to the Web Wallet experience.

This makes it easy for developers to support both environments without needing to change implementation logic.

## Signing Flow

Once authenticated, any Web3 event—such as signing messages or submitting transactions—can be triggered by the client application using the Wallet SDK. The general flow is:

1. App requests an action via SDK (e.g., `signTransaction()`).
2. SDK communicates with Ultra Web Wallet UI.
3. Web Wallet securely signs the transaction.
4. Result is returned to the app for submission or follow-up logic.

This flow abstracts away the complexity of handling private keys, making Ultra Web Wallet a powerful tool for dApp developers.
