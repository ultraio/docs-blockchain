---
title: 'Wallet Response Format'
deploy: ['staging', 'mainnet']
order: -9998
outline: [0, 4]
---

# Usage

This document aims to explain the general usage for writing an application that utilizes the wallet extension.

::: danger

You will need an `https` address to utilize the ultra wallet for testing purposes. We are working on allowing localhost as well.

:::

# Vite HTTP(s) Setup

If you utilize `Vite` you can easily setup unsecure SSL for testing with this configuration.

```ts
import { defineConfig } from 'vite';
import basicSSL from '@vitejs/plugin-basic-ssl';

export default defineConfig({
    plugins: [basicSSL()],
    build: {
        emptyOutDir: true,
    },
    server: {
        host: 'localhost',
        https: true,
    },
});
```

# Detecting the Ultra Wallet

To detect if a user has already installed the Ultra Wallet browser extension, the web application should check for the existence of an ultra object in the window variable.

```JavaScript
const isUltraWalletInstalled = window.ultra && typeof window.ultra === "object";
```

## Wallet Response Format

To standardize the communication between the decentralized applications and the extension, each method will respond with a Promise and this response format.

```ts
/**
 * Based on JSend a specification for a simple, no-frills,
 * JSON based format for application-level communication.
 * https://github.com/omniti-labs/jsend
 */
{
  status: "fail", // "success", "fail" or "error"
  data: { ... }, // Response data
  message: "Forbiden"; // Optional: end-user-readable message, explaining what went wrong.
};
```

## Establishing a Connection

To begin interacting with Ultra Wallet, an app must first establish a connection. This connection request will ask the user for permission to share its blockchain id and public key, indicating that they are willing to continue interacting. Once the permission is set for the first time, the web application domain will be whitelisted for future connection requests.
Similarly, it is possible to terminate the connection both on the application and on the user side.

### Connecting

```JavaScript
try {
    const response = await ultra.connect();
    response.data.blockchainId;
    // ej1vx2ft3ht4
    response.data.publicKey;
    // EOS7uRb72dR8jrLjNuC9UoevBBH3YbVZfNKUtYCfLkV7aPGcmDjs7
} catch (err) {
    // { status: "error", message: "Connection rejected" }
}
```

The `connect()` call will return a Promise that is resolved when the user accepts the connection request and is rejected when the user rejects the request or closes the popup.

### Disconnecting

```JavaScript
try {
  await ultra.disconnect();
} catch (err) {
  // { status: "error", message: "Forbidden" }
}
```

The `disconnect()` method revokes the connection permission that the user granted to the web application, if the application is already disconnected,  the Promise will throw an error.

## Sending a Transaction

Once a web application is connected to Ultra Wallet, it can prompt the user for permission to sign and push transactions on their behalf.

The requirements to send a transaction are:


### Create a transaction object

Ultra Wallet has its own format for transaction objects that makes it easy to understand and fill it. The required fields are “action”, “contract” and “data”. Below is a transaction example to send tokens from a user's blockchain account to another one.

```JSON
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

## Signing a Message

In some cases, a web application can also request the user to sign a given message to verify the ownership of a blockchain account. Applications are free to write their messages which will be displayed to users from within the Ultra Wallet's signature prompt using the method `signMessage()`. These messages should have one of the next prefixes: `0x`, `UOSx`, or `message:`.

Message signatures do not involve network fees.

```JavaScript
try {
  const response = await ultra.signMessage("message:This is a test message");
  response.data.signature;
  // SIG_K1_KXuKhsxcdDTKuMbo2kveKsggwUfV9p5FuPsirkFcjjQo2sxUvxcc1TEnkoancsWTf6SEHj1jMjB9e6GuRkg6ZrEvV5tHa8
} catch (err) {
  // { status: "error", message: "Transaction declined" }
}
```

If the user declines the message signing or closes the window, the Promise will return an error.

## Errors

When making requests to the Ultra Wallet it may respond with one of the following errors.

These error messages are inspired by Ethereum's [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474#error-codes) and [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193#provider-errors).

| Code   | Title                 | Description                                                              |
| ------ | --------------------- | ------------------------------------------------------------------------ |
| 4001   | User Rejected Request | The user rejected the request.                                           |
| 4100   | Unauthorized          | The requested method and/or account has not been authorized by the user. |
| 4900   | Disconnected          | Could not connect to the network.                                        |
| -32000 | Invalid Input         | Missing or invalid parameters.                                           |
| -32002 | Resource unavailable  | Requested resource not available.                                        |
| -32003 | Transaction Rejected  | An error occurred while processing the transaction.                      |
| -32601 | Method Not Found      | The method does not exist.                                               |
| -32603 | Internal Error        | Something went wrong within the wallet extension.                        |

## Demo application

For a live example of simple integration with the Ultra Wallet browser extension, check out our sample project on [Stackblitz](https://stackblitz.com/edit/ultra-wallet-test?file=index.js).

https://ultra-wallet-test.stackblitz.io