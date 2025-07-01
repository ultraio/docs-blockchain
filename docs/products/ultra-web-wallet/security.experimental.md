---
title: 'Security Model'

order: 1
outline: [0, 4]
---

# Security Model

Ultra Web Wallet is designed with a strong focus on user privacy and key safety, using a **non-custodial** approach that gives users full control of their blockchain assets without requiring external wallet software.

## Key Management

The Ultra Web Wallet uses a dual-part key encryption model:

-   **Client-side Storage:** The user's private key is stored locally in the browser, encrypted with a key only partially derived from Ultra.
-   **Ultra's Partial Key:** Ultra holds a partial encryption key used to assist in encrypting/decrypting the user’s private key, but never has full access to the key itself.

This ensures that even if Ultra's backend were compromised, user keys would remain protected.

## Device Registration via Ultra SSO

When users first log in, the SDK initiates a secure registration flow through Ultra SSO. During this process, the device is uniquely identified and securely provisioned to interact with the Web Wallet, enabling signing operations without ever exposing private keys directly.

## Transaction Signing

All blockchain interactions—such as transactions and message signing are performed **client-side**. The Web Wallet handles these securely, displaying transaction data to the user for confirmation before signing. This reduces the risk of unauthorized activity or invisible transactions.

## No Custodial Risk

Because the Ultra Web Wallet does not store complete private keys or user funds on Ultra servers, there is **no custodial liability**. This reinforces a user-first model where only the user can access and control their digital identity and assets.

## Best Practices for Developers

-   Always set the correct environment (`env`) when initializing the SDK.
-   Encourage users to use secure browsers and avoid shared/public machines.
-   Never cache or store sensitive SDK responses (e.g., signed transactions) unnecessarily.

:::info
🔐 With its layered encryption, secure device linking, and decentralized storage design, Ultra Web Wallet ensures a modern and responsible approach to Web3 security.
:::
