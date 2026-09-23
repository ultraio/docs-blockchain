---
title: 'Accounts & Networks'

order: 4
outline: [0, 4]
---

# Accounts & Networks

The Browser Extension can hold **many accounts** and switch between **several networks**. The methods on this page let your dApp read that state. Apart from `getChainId()`, they are **extension-only**. [Events](./events.md) tell you when the state changes.

::: warning Web Wallet
With the Web Wallet provider, `getAccounts()`, `getSelectedAccount()` and `getAvailableAuthorizations()` open the popup and then reject with `-32601` (method not found), because the Web Wallet does not implement them. `getNetwork()`, `getNetworks()` and `switchNetwork()` throw `Not supported in web provider` synchronously. Check [which provider is active](./getting-started.md#choosing-a-provider) before calling them. A Web Wallet user always has exactly one account, which `connect()` returns.
:::

## Accounts

All account methods return data only for a **trusted** origin (one the user has connected) whose wallet is unlocked. Otherwise, they resolve with an empty value (`[]` or `null`) instead of rejecting. Accounts are resolved **against the network the wallet is on**, so a key's mainnet accounts do not appear while the wallet is on testnet.

### getSelectedAccount()

```ts
getSelectedAccount(): Promise<UltraResponse<AccountInfo | null>>
```

The SDK types the result as `AccountInfo`, but it is `null` when the origin is not trusted, the wallet is locked, or no account resolves on this network.

The account the user has selected in the wallet. This is the account the wallet signs with by default.

```ts
const { data } = await wallet.getSelectedAccount();
// {
//   accountName: 'aa1aa2aa3aa4',
//   permissions: [
//     { name: 'active', publicKeys: ['EOS7HUZZ6AQvrEi3wGRrKd2A3CuktaeM6xnguA2CrVxH9BUMB5aRx'] },
//     { name: 'owner',  publicKeys: ['EOS7HUZZ6AQvrEi3wGRrKd2A3CuktaeM6xnguA2CrVxH9BUMB5aRx'] },
//   ],
// }
```

The wallet's selected account is authoritative. Your dApp cannot change it. It can only follow changes through the [`accountChanged`](./events.md#accountchanged) event.

### getAccounts()

```ts
getAccounts(): Promise<UltraResponse<AccountInfo[]>>
```

Lists every account the wallet can sign for on the current network, with its permissions and keys. It returns the same shape as `connect()`'s `accounts` field:

```ts
const { data } = await wallet.getAccounts();
// [
//   { accountName: 'aa1aa2aa3aa4', permissions: [{ name: 'active', publicKeys: ['EOS7HUZ…'] }] },
//   { accountName: 'bb1bb2bb3bb4', permissions: [{ name: 'active', publicKeys: ['EOS5Xa…'] }] },
// ]
```

::: warning Older extensions
Extension **2.2.13 and earlier** return bare account names (`['aa1aa2aa3aa4', 'bb1bb2bb3bb4']`) instead. Until your users have upgraded, read the names defensively:

```ts
const names = (data as unknown[]).map((a) => (typeof a === 'string' ? a : (a as { accountName: string }).accountName));
```
:::

### getAvailableAuthorizations()

```ts
getAvailableAuthorizations(): Promise<UltraResponse<AvailableAuth[]>>
```

Returns every `account@permission` pair the wallet holds a key for, together with the key. Call this before you build a transaction that needs a specific permission, so you know the wallet can sign it:

```ts
const { data: auths } = await wallet.getAvailableAuthorizations();
// [
//   { accountName: 'aa1aa2aa3aa4', permission: 'active', publicKey: 'EOS7HUZ…' },
//   { accountName: 'aa1aa2aa3aa4', permission: 'owner',  publicKey: 'EOS7HUZ…' },
//   { accountName: 'teamtreasury', permission: 'active', publicKey: 'EOS7HUZ…' },
// ]

const canUseGameplayKey = auths.some((a) => a.accountName === player && a.permission === 'gameplay');
```

The list includes accounts that authorize one of the wallet's keys through the chain's permission system, such as a shared account whose `active` permission lists the user's key.

## Networks

### getChainId()

```ts
getChainId(): Promise<UltraResponse<string>>
```

Returns the chain ID of the network the wallet is using. **Available with both providers.**

-   **Extension:** asks the wallet's current node (`/v1/chain/get_info`). Resolves with `data: null` if the node cannot be reached. In that case `connect()` also fails the environment check (`… but received "null"`).
-   **Web Wallet:** answered locally from the `environment` option, with no popup. With a custom Web Wallet URL, it asks the Web Wallet, which opens the popup, so call it from a user gesture.

```ts
const MAINNET = 'a9c481dfbc7d9506dc7e87e9a137c931b0a9303f64fd7a1d08b8230133920097';
const { data: chainId } = await wallet.getChainId();
if (chainId !== MAINNET) showWrongNetworkBanner();
```

### getNetwork()

```ts
getNetwork(): Promise<UltraResponse<NetworkDetails>>
```

The wallet's active network:

```ts
const { data } = await wallet.getNetwork();
// { name: 'Mainnet', chainId: 'a9c481df…', nodeUrl: 'https://api.mainnet.ultra.io' }
```

`isCustom` is `true` only for networks the user added. Network names are not consistent across APIs (`'Mainnet'` here, `'mainnet'` in the connect result), so compare `chainId`.

### getNetworks()

```ts
getNetworks(): Promise<UltraResponse<NetworkDetails[]>>
```

Every network configured in the wallet: the built-in Mainnet and Testnet, plus the networks the user added in **Settings → Networks**. User-added networks are listed only for a connected (trusted) origin, and only from extension 2.2.14; earlier versions list only the built-ins. Use it to check whether a network exists before you call `switchNetwork()`.

### switchNetwork()

```ts
switchNetwork(chainId: string): Promise<UltraResponse<void>>
```

Asks the extension to switch to another network that is **already configured** in the wallet. Extension 2.2.13 and earlier can only switch to the built-in Mainnet and Testnet; 2.2.14+ can also switch to networks the user added.

```ts
const TESTNET = '7fc56be645bb76ab9d747b53089f132dcb7681db06f0852cfa03eaf6f7ac80e9';
await wallet.switchNetwork(TESTNET);
```

-   Your origin must be **trusted** (connected). Otherwise the call rejects with `4100`.
-   The switch happens **without a prompt**, and it resolves at once, without changing anything, if the wallet is already on that chain.
-   It rejects with `-32602` if `chainId` is not a 64-character lowercase hex string.
-   It rejects with `4902` (unrecognized chain ID) if no configured network has that chain ID.
-   It rejects with `-32002` if the wallet is locked, or while any wallet request (such as a signing prompt) is pending.
-   After the switch, the wallet sends [`networkChanged`](./events.md#networkchanged) and then [`accountChanged`](./events.md#accountchanged) to every connected dApp, because the account list depends on the network.

Trust is per origin across networks, so your dApp stays connected after the switch.

### Adding a network

dApps cannot add networks. A network added by a website, without the user reviewing it, could route the user's signing requests through an attacker's node. The extension therefore removed that capability, and SDK 0.6.0 removed `addNetwork()`. Ask users to add a custom network themselves in the extension's **Settings → Networks**. With extension 2.2.14+, your dApp can then call `switchNetwork()` with its chain ID; with earlier versions, ask the user to switch to it in the wallet.
