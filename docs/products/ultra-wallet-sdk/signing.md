---
title: 'Signing'

order: 3
outline: [0, 4]
---

# Signing

The wallet signs with the user's keys. Keys never leave the wallet. Your dApp receives only signatures or transaction results.

## signMessage()

```ts
signMessage(message: string): Promise<UltraResponse<SignMessageResult>>
```

Asks the user to sign an arbitrary message. Signing a message sends nothing to the chain and costs no resources.

```ts
const { data } = await wallet.signMessage('message: I agree to the terms of example.com');
data.signature; // "SIG_K1_K8r…"
```

The message **must** start with one of these prefixes, or the wallet rejects it with `-32000` (invalid input):

| Prefix     | Use for                                                           |
| ---------- | ----------------------------------------------------------------- |
| `message:` | Human-readable text. The user sees the text in the prompt.        |
| `0x`       | Hex-encoded data.                                                 |
| `UOSx`     | Ultra-specific payloads.                                          |

The extension trims leading and trailing whitespace from the message before signing.

### Verifying a message signature

The wallet computes a K1 signature over **SHA-256(UTF-8 bytes of the full message string, prefix included)**. The `0x` form is not hex-decoded first; the whole string is signed as text. To verify, recover the public key and check it on chain, as described in [Login with a signed nonce](./connecting.md#login-with-a-signed-nonce):

```ts
import { Bytes, Signature } from '@wharfkit/antelope';

const key = Signature.from(signature).recoverMessage(Bytes.from(message, 'utf8'));
// Then confirm with get_accounts_by_authorizers that `key` belongs to the expected account.
```

The extension signs with the **selected account's** key. The Web Wallet signs with the key of the user's EBA account.

## signTransaction()

```ts
signTransaction(
    transaction: BlockchainTransaction | BlockchainTransaction[],
    options?: SignTransactionOptions,
): Promise<UltraResponse<SignTransactionResult>>
```

Shows the user a transaction to approve. On approval, the wallet signs it and **broadcasts** it to the network the wallet is on.

### Transaction format

The SDK uses a simplified action format. The wallet adds the chain's TAPoS fields, the expiration and the signatures for you.

| Field           | Type                          | Required | Description |
| --------------- | ----------------------------- | :------: | ----------- |
| `contract`      | `string`                      | ✅       | The account the contract is deployed to, for example `eosio.token`. |
| `action`        | `string`                      | ✅       | The action name, for example `transfer`. |
| `data`          | `object`                      | ✅       | The action arguments as JSON. The wallet serializes them using the contract's ABI. |
| `authorization` | `{ actor, permission }[]`     |          | Who authorizes the action. Defaults to the connected account with `active`. |
| `authorizations`| `string[]`                    |          | _Deprecated._ The same, as `"account@permission"` strings. |

```ts
const { data } = await wallet.signTransaction({
    contract: 'eosio.token',
    action: 'transfer',
    data: {
        from: 'aa1aa2aa3aa4',
        to: 'bb1bb2bb3bb4',
        quantity: '1.00000000 UOS',
        memo: 'Thanks!',
    },
});

data.transactionHash; // "51c6d324522a0ee05baeee2a8857b016e47481207850074ee83f914e6adc45ae"
```

Token quantities must use the token's exact precision. UOS has **8 decimals** (`'1.00000000 UOS'`).

### Authorizations

In the common case, where the connected user authorizes with `active`, **leave the authorization out**. Both wallets default to the connected account with `active`.

To use a different permission, or several signers:

```ts
await wallet.signTransaction({
    contract: 'mygame.dapp',
    action: 'claim',
    data: { player: 'aa1aa2aa3aa4' },
    authorization: [{ actor: 'aa1aa2aa3aa4', permission: 'gameplay' }],
});
```

-   A legacy string without a permission (`'aa1aa2aa3aa4'`) is treated as `aa1aa2aa3aa4@active`.
-   The extension merges `authorizations` and `authorization` and removes duplicates.
-   Call [`getAvailableAuthorizations()`](./accounts-and-networks.md#getavailableauthorizations) first to see which `account@permission` pairs the extension can actually sign for.

::: warning Older Web Wallet releases
Older Web Wallet releases read only the legacy `authorizations` string array, and sign as the connected account with `active` when it is missing. If you need a non-default authorization with Web Wallet users, also pass `authorizations: ['account@permission']`.
:::

### Multiple actions in one transaction

Pass an array to put several actions into **one atomic transaction**. It needs one approval and has one transaction ID, and if any action fails, the whole transaction fails:

```ts
const { data } = await wallet.signTransaction([
    {
        contract: 'eosio.token',
        action: 'transfer',
        data: { from: 'aa1aa2aa3aa4', to: 'mygame.dapp', quantity: '5.00000000 UOS', memo: 'deposit' },
    },
    {
        contract: 'mygame.dapp',
        action: 'enter',
        data: { player: 'aa1aa2aa3aa4', round: 42 },
    },
]);
```

### The broadcast result

When the transaction is broadcast, `data` contains the chain's `push_transaction` response, plus `transactionHash`:

| Field             | Description |
| ----------------- | ----------- |
| `transactionHash` | The transaction ID. Look it up on an explorer or with the history API. |
| `processed`       | The execution trace: `block_num`, `block_time`, `receipt` (CPU/NET usage), `action_traces` (including inline actions and console output), `except`. |

The chain has **executed** the transaction when `signTransaction()` resolves. It is not yet irreversible. If your app needs finality, wait for the block to become irreversible before you treat the result as final.

### Sign without broadcasting

Pass `{ signOnly: true }` to get the signed transaction back **without** sending it. Use this when your backend or another party broadcasts it, or when the transaction needs several signatures (multisig):

```ts
const { data } = await wallet.signTransaction(actions, { signOnly: true });
// {
//   expiration: '2026-09-23T10:01:00',
//   ref_block_num: 12345,
//   ref_block_prefix: 987654321,
//   max_net_usage_words: 0,
//   max_cpu_usage_ms: 0,
//   delay_sec: 0,
//   context_free_actions: [],
//   actions: [ /* serialized actions */ ],
//   transaction_extensions: [],
//   signatures: ['SIG_K1_…'],
//   …
// }
```

-   **Extension:** a sign-only request is a **partial-signing** request. The approval screen makes the user tick an explicit consent checkbox before approving. The wallet signs with every key it holds for the requested authorizations. Any authorization it could **not** sign is listed in `data.unsignedAuth` as `"account@permission"` strings. If that list is empty or missing, the wallet signed everything.
-   **Web Wallet:** signs with the keys it holds and returns the signed transaction.

The signed transaction is only valid until its `expiration` time. Broadcast it before then.

### Limits

-   The extension queues at most **10 pending requests per origin**. More requests reject with `-32005` (limit exceeded).
-   The Web Wallet handles **one request at a time** per SDK instance. A second call while a request is pending rejects with `32002` (_Requested resource not available_).
-   If the chain rejects the transaction (an assertion fails, for example), the promise rejects with `-32003` (transaction rejected), and the chain's error text is included in the error.
