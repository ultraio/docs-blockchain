---
title: 'Events'

order: 5
outline: [0, 4]
---

# Events

The Browser Extension notifies connected dApps when the user changes accounts, switches networks or disconnects. Subscribe with `on()` and unsubscribe with `off()`.

```ts
on(event: WalletEventType, callback: (data: any) => void): void
off(event: WalletEventType, callback: (data: any) => void): void

type WalletEventType = 'accountChanged' | 'networkChanged' | 'disconnect';
```

::: info Extension only
Events need a long-lived connection to the wallet, which the Web Wallet's popup transport does not have. With the Web Wallet provider, `on()` and `off()` do nothing.
:::

## Subscribing

```ts
function handleAccountChanged({ selected }) {
    if (selected) setCurrentAccount(selected.accountName);
}

wallet.on('accountChanged', handleAccountChanged);

// Later: pass the same function reference
wallet.off('accountChanged', handleAccountChanged);
```

-   Events are delivered only to **trusted** (connected) origins. You can subscribe before `connect()`. The SDK registers your listeners again automatically once the connection succeeds.
-   The SDK re-registers listeners every 2 seconds, so they survive a restart of the extension's background service worker. Call [`dispose()`](./getting-started.md#cleaning-up) when you no longer need the instance, to stop this heartbeat.
-   Pass the **same function reference** to `off()` that you passed to `on()`.

## accountChanged

Fires when the user selects a different account, when the wallet is unlocked, and after a network switch.

```ts
{
  accounts: [
    { accountName: 'aa1aa2aa3aa4', permission: 'active', publicKey: 'EOS7HUZ…' },
    { accountName: 'aa1aa2aa3aa4', permission: 'owner',  publicKey: 'EOS7HUZ…' },
    { accountName: 'bb1bb2bb3bb4', permission: 'active', publicKey: 'EOS5Xa…' },
  ],
  selected: { accountName: 'bb1bb2bb3bb4', permission: 'active', publicKey: 'EOS5Xa…' }, // or null
}
```

-   `accounts` is **flat**: one entry per `account + permission + key`, the same shape as [`getAvailableAuthorizations()`](./accounts-and-networks.md#getavailableauthorizations) but with the account name in `accountName`.
-   `selected` is the newly selected account, or `null` if it has no entry on this network.
-   The wallet does not send this event while it is locked, or while an account lookup fails temporarily. An empty `accounts` list therefore means what it says, not "logged out".

## networkChanged

Fires when the wallet switches networks, whether the user switched or your dApp called [`switchNetwork()`](./accounts-and-networks.md#switchnetwork).

```ts
{
  chainId: '7fc56be645bb76ab9d747b53089f132dcb7681db06f0852cfa03eaf6f7ac80e9',
  name: 'Testnet',
  nodeUrl: 'https://test.ultra.eosusa.io',
  accounts: [{ accountName: 'aa1aa2aa3aa4' }], // the selected account, if known
}
```

An `accountChanged` event with the account list for the new network follows. If your dApp supports only one network, compare `chainId` with the one you expect and show a "wrong network" state, or call `switchNetwork()` to switch back.

## disconnect

Fires when your origin loses its trusted status: your dApp called `disconnect()`, or the user removed your site in the extension.

The payload is `{ origin: 'https://example.com' }` when your dApp disconnected, and empty when the user disconnected from the extension. Do not depend on it.

Clear your session state and show the "Connect" button:

```ts
wallet.on('disconnect', () => {
    clearSession();
    renderConnectButton();
});
```

## Example: keeping UI state in sync

```ts
const EXPECTED_CHAIN = 'a9c481dfbc7d9506dc7e87e9a137c931b0a9303f64fd7a1d08b8230133920097';

wallet.on('accountChanged', ({ selected }) => {
    state.account = selected?.accountName ?? null;
});

wallet.on('networkChanged', ({ chainId }) => {
    state.wrongNetwork = chainId !== EXPECTED_CHAIN;
});

wallet.on('disconnect', () => {
    state.account = null;
});
```
