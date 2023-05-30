---
title: 'Establishing a Connection'
deploy: ['staging', 'mainnet']
order: 5
outline: [0,4]
---

# Establishing a Connection

To begin interacting with Ultra Wallet, an app must first establish a connection. This connection request will ask the user for permission to share its blockchain id and public key, indicating that they are willing to continue interacting. Once the permission is set for the first time, the web application domain will be whitelisted for future connection requests.
Similarly, it is possible to terminate the connection both on the application and on the user side.

## Connecting

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

## Disconnecting

```JavaScript
try {
  await ultra.disconnect();
} catch (err) {
  // { status: "error", message: "Forbidden" }
}
```

The `disconnect()` method revokes the connection permission that the user granted to the web application, if the application is already disconnected,  the Promise will throw an error.

To handle disconnections, the app can also subscribe to disconnect events.

```JavaScript
ultra.on('disconnect', () => {
    console.log('Disconnected from Ultra Wallet');
})
```
