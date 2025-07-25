---
title: 'Core API Methods'

order: 2
outline: [0, 4]
---

# Core API Methods

The `@ultraos/wallet-sdk` provides a unified interface for interacting with both the Ultra Web Wallet and the Ultra Wallet Extension. This means you can implement wallet functionality once, and the SDK will handle which wallet environment (web or extension) is used behind the scenes.

## Response Format

The Ultra Web Wallet SDK returns responses in the same format as the Ultra Wallet Extension.

Each successful method call returns a consistent object structure with the following top-level fields:

-   `status`: Always `"success"` for resolved calls
-   `data`: The actual payload of the response, specific to each method

Example structure:

```ts
{
  status: "success",
  data: {
    // method-specific values here
  }
}
```

For full details on the structure of each method’s response, refer to the shared documentation:

[See Ultra Wallet Response Format →](../ultra-wallet/response-format.md)

## Connect

Initiates the connection process with the wallet. For Web Wallet users, this includes authenticating via Ultra SSO and registering the device.

```ts
try {
    const response = await wallet.connect();
    response.data.blockchainid;
    // ej1vx2ft3ht4
    response.data.publicKey;
    // EOS7uRb72dR8jrLjNuC9UoevBBH3YbVZfNKUtYCfLkV7aPGcmDjs7
} catch (err) {
    // { status: "error", message: "Connection rejected" }
}
```

### Eagerly Connecting

After a web application connects to the Ultra Wallet for the first time, it gains a trusted status.
Once this trust is established, the application can seamlessly link with Ultra Wallet during future visits or when the page is refreshed,
eliminating the need to ask the user for authorization. This concept is commonly known as "eagerly connecting".

To implement this, web applications should pass an `onlyIfTrusted` option into the `connect()` call.

```ts
try {
    await wallet.connect({ onlyIfTrusted: true });
} catch (err) {
    // { status: 'error', code: 4001, message: 'The user rejected the request.' }
}
```

### Sending a Referral Code

An application can send its referral code to the wallet. The referral code will be used if the user signs up during the connection process.

To implement this, applications should pass the `referralCode` option into the `connect()` call.

```ts
wallet.connect({ referralCode: 'ecd1f052-9d0d-4b84-8dd3-10a753d044b5' });
```

To get your referral code, go to the Ultra Desktop client and then to the Wallet, and look for the "My referral link" section. Click the link to copy it.

Once you copy your referral link, you can extract the referral code from the URL. For example, from the following link:

```
https://ultra.io/register/ecd1f052-9d0d-4b84-8dd3-10a753d044b5
```

The referral code is: `ecd1f052-9d0d-4b84-8dd3-10a753d044b5`.


### Connect with Nonce

To streamline authentication flows and avoid browser restrictions on multiple popup windows, the `connect()` method supports an optional `nonce` parameter. When provided, the Ultra Web Wallet will automatically sign the nonce after completing key synchronization.

This is particularly useful for dApps that need to verify user identity using a signed challenge (i.e., the nonce) — commonly used in Web3 login/session flows.

:::info Note
If the `nonce` parameter is specified, the `connect()` method will always prompt the user to reconnect, even if a trusted session already exists.
:::

#### Usage

```ts
try {
  const response = await wallet.connect({ nonce: 'message: abc123randomnonce' });

  console.log(response.data.blockchainid);     // e.g., "aa1aa2aa3aa4"
  console.log(response.data.publicKey);        // e.g., "EOS7HUZZ6AQvrEi3wGRrKd2A3CuktaeM6xnguA2CrVxH9BUMB5aRx"
  console.log(response.data.nonce);            // "message: abc123randomnonce" (note: nonce must start with 'message:', '0x', or 'UOSx')
  console.log(response.data.signedNonce);      // Signed message
} catch (err) {
  // { status: "error", message: "Connection rejected" }
}
```

> **Important:** The `nonce` string must begin with one of the supported prefixes: `'message:'`, `'0x'`, or `'UOSx'`. This ensures compatibility with Ultra Wallet’s signature rules.

#### Response Format

When a `nonce` is provided, the response `data` object will include:

- `blockchainid`: User's Ultra Blockchain ID
- `publicKey`: Associated public key
- `nonce`: The original nonce sent by the dApp
- `signedNonce`: The message signature generated by the Ultra Wallet

This signed payload can then be verified off-chain or used to create stateless sessions server-side.

> Note: The signed message uses the standard `signMessage()` behavior with the same signature rules.


## Disconnect

The `disconnect()` method revokes the connection permission that the user granted to the web application. If the application is already disconnected, the Promise will throw an error.

```ts
try {
  await wallet.disconnect();
} catch (err) {
  // { status: "error", message: "Forbidden" }
```

## Sign Message

In some cases, a web application can also request the user to sign a given message to verify the ownership of a blockchain account. Applications are free to write their messages which will be displayed to users from within the Ultra Wallet's signature prompt using the method `signMessage()`. These messages should have one of the following prefixes: `0x`, `UOSx`, or `message:`.

```ts
const signature = await wallet.signMessage('message: Hello, blockchain!');
```

:::info
Message signatures do not involve network fees.
:::

## Sign Transaction

Once a web application is connected to the Ultra Wallet, it can prompt the user for permission to sign and push transactions on their behalf.

### Create a transaction object

Ultra Wallet uses a simplified format for transaction objects. The required fields are `action`, `contract`, and `data`.

Example: sending tokens between accounts.

```json
{
    "action": "transfer",
    "contract": "eosio.token",
    "data": {
        "memo": "This is a transaction test",
        "quantity": "11.20000000 UOS",
        "from": "ej1vx2ft3ht4",
        "to": "nwyklp2aa1qd"
    }
}
```

### Sign the transaction object

Once the transaction is created, you can request the wallet to sign and broadcast it using `signTransaction()`:

```ts
try {
    const response = await wallet.signTransaction(txObject);
    response.data.transactionHash;
    // 51c6d324522a0ee05baeee2a8857b016e47481207850074ee83f914e6adc45ae
} catch (err) {
    // { status: "error", message: "Transaction declined" }
}
```

### Sign multiple transactions at the same time

You can also pass an array of transactions to sign them together in a single call:

```ts
const txArray = [
    {
        action: 'transfer',
        contract: 'eosio.token',
        data: {
            memo: '',
            quantity: '11.20000000 UOS',
            from: 'ej1vx2ft3ht4',
            to: 'nwyklp2aa1qd',
        },
    },
    {
        action: 'buy',
        contract: 'eosio.nft.ft',
        data: {
            buy: {
                token_id: 9974,
                buyer: 'mg1vg2lv3fs4',
                receiver: 'mg1vg2lv3fs4',
                max_price: '78.00000000 UOS',
                memo: '',
                promoter_id: null,
            },
        },
    },
];

try {
    const response = await wallet.signTransaction(txArray);
    response.data.transactionHash;
} catch (err) {
    // { status: "error", message: "Transaction declined" }
}
```

### Sign a transaction without broadcasting to the blockchain

You can sign one or more transactions and receive the full signed payload without broadcasting it by passing `{ signOnly: true }`:

```ts
try {
    const response = await wallet.signTransaction(txObject, { signOnly: true });
    response.data;
    /**
   {
      "expiration": "...",
      "ref_block_num": ...,
      "actions": [...],
      "signatures": [...],
      ...
   }
  */
} catch (err) {
    // { status: "error", message: "Transaction declined" }
}
```

## Get Chain ID

Retrieves the current chain ID based on the environment configuration.

```ts
const chainId = await wallet.getChainId();
```

## Purchase Item

To facilitate the purchase of a Uniq Factory with FIAT or blockchain tokens, the Ultra platform provides the `wallet.purchaseItem(itemType, itemId)` method. This method initiates a complete purchase flow for a specific item, identified by its type and ID on the blockchain.

### Parameters

-   `itemType`: For Uniq Factory purchases, use `"UniqFactory"`.
-   `itemId`: The numeric identifier of the Uniq Factory product on the blockchain.

When this method is called, a popup will appear showing the Ultra purchase flow. Users can complete their purchase using credit/debit cards or UOS tokens.

Upon success, the result includes:

-   `orderHash`: Reference ID for customer support
-   `items`: An array of purchased items containing:
    -   `productId`: The requested item ID
    -   `artifactId`: The minted Uniq on the blockchain
    -   `blockchainTransactionId`: Transaction ID confirming the mint on-chain

If the user cancels or an error occurs, the promise will reject with an error message.

```ts
try {
    const response = await wallet.purchaseItem('UniqFactory', '599');
    // {
    //   status: "success",
    //   data: {
    //     orderHash: "XXX",
    //     items: [{
    //       productId: 599,
    //       artifactId: 7777,
    //       blockchainTransactionId: "XXX",
    //     }],
    //   },
    // }
} catch (err) {
    // { status: "error", message: "Purchase canceled" }
}
```

## Error Codes

The Ultra Web Wallet SDK follows the same error interface as the Ultra Wallet Extension.

When a method fails (e.g., the user cancels a transaction or rejects a connection request), the rejected promise will contain a standardized error object with fields like `status`, `code`, and `message`.

You can refer to the shared error documentation for full details on all possible error responses:

See [Ultra Wallet Error Codes](../ultra-wallet/errors.md).
