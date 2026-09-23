---
title: 'Managing accounts and keys'

order: 14
outline: [0, 4]
---

# Managing accounts and keys

Starting with version 2.x, the Ultra Wallet stores all of your keys in a single on-device **vault** protected by one password. A single key can control several blockchain accounts, and you can hold multiple keys — so the wallet separates the two ideas into an **Accounts** view and a **Key Manager**.

Both screens are available from the wallet **Menu**.

## Accounts

The **Accounts** screen lists every blockchain account controlled by the keys in your vault. For each account you can see its name, permissions, and UOS balance, with the currently active account clearly marked.

![](/images/wallet-2x-accounts.png)

From this screen you can:

-   **Switch accounts** — select any account to make it the active one used for signing and shown on the home screen.
-   **Search** — filter the list by account name when you manage many accounts.
-   **Refresh balances** — balances load as you scroll and can be refreshed on demand.
-   **Export a key** — reveal the private key behind an account (you must re-enter your wallet password).
-   **Delete an account** — remove an account from the wallet.

### Adding more accounts

You can add more accounts at any time from the Accounts screen using the same options described in the [setup tutorial](../../tutorials/fundamentals/tutorial-setup-the-wallet.md):

-   **Add Ultra Account** — link an existing Ultra account.
-   **Import Private Key** — discover and import every account a key controls.
-   **Create Ultra Pro Account** — create a brand-new blockchain account on-chain by paying a small amount of UOS.

## Key Manager

The **Key Manager** shows the raw public keys in your vault and the accounts and permissions each key is linked to. Expand a key to see its associated accounts.

![](/images/wallet-2x-keys.png)

From this screen you can:

-   **Export a private key** — reveal a key's private key after re-entering your wallet password. Keep exported keys secure.
-   **Delete a key** — remove a key (and its derived accounts) from the vault.
-   **Spot orphaned keys** — the wallet warns you about keys that no longer control any on-chain account.

## Rescan accounts

If you create or modify accounts outside the wallet, your local list can fall out of date. Use **Rescan accounts** from the menu to re-run on-chain discovery for every key in your vault and refresh the accounts each key controls.

## Security notes

-   Your password encrypts the vault and is never transmitted or stored remotely. If you lose it, the wallet cannot be recovered — only re-imported from your keys.
-   Exporting a private key reveals sensitive material. Anyone with that key controls the associated accounts.
-   To wipe the wallet completely, use **Reset wallet** (see [Networks and settings](./networks-and-settings.md)). This removes all stored keys and cannot be undone.
