---
title: 'FAQ / Troubleshooting'

order: 3
outline: [0, 4]
---

# FAQ / Troubleshooting

Below are common questions and issues developers may encounter when integrating or using the Ultra Web Wallet via the `@ultraos/wallet-sdk`.

## Why am I seeing "EBA account required"?

The Ultra Web Wallet currently supports only **Easy Blockchain Account (EBA)** users. If you're using a self-managed account, you won't be able to connect via the Web Wallet. Ensure the account you're testing with is EBA-enabled.

## The wallet doesn't connect. What should I check?

-   Confirm the `env` parameter matches the desired Ultra environment (e.g., `'testnet'`, `'mainnet'`).
-   Ensure you're using a compatible browser with secure (HTTPS) context.
-   Check your app’s domain is approved to interact with Ultra SSO if necessary.
-   Clear local storage or try an incognito window for a fresh auth attempt.

## Why is the Ultra Wallet Extension being used instead of the Web Wallet?

The SDK automatically checks if the Ultra Wallet Extension is installed. If detected, it takes priority over the Web Wallet to maintain compatibility with user preferences. To test Web Wallet specifically, disable or uninstall the extension.

## Can I use this SDK in mobile browsers?

Yes. The Ultra Web Wallet SDK is compatible with mobile browsers, although support is still considered experimental. Functionality may vary depending on browser capabilities and operating system restrictions.

## I'm not seeing anything or getting a browser error—what should I check?

The Ultra Web Wallet requires permission to open a popup window to complete certain actions such as connecting the wallet or processing a transaction.

If nothing happens when calling a method like `connect()` or `purchaseItem()`, ensure the following:

-   Your application is not blocking popups via custom browser settings or extensions.
-   The user has not previously blocked popups for your domain.
-   The action was initiated as a result of a direct user gesture (e.g., button click), as modern browsers restrict popups outside user-initiated events.

If you're testing locally, try enabling popups for `localhost` or your local dev server's URL.

## What if I need to switch networks?

The `env` option passed to `UltraWallet` must match the target Ultra blockchain environment. You cannot dynamically switch environments after instantiating the SDK—you’ll need to re-initialize with a new configuration.

## Where are keys stored and is it safe?

The private key is securely stored in the user’s browser, encrypted with a key partially derived from Ultra. Ultra cannot access the full key, and signing occurs client-side, ensuring high levels of security.
