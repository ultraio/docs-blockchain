---
title: 'Establishing a Connection'
deploy: []
order: 5
outline: [0,4]
---

# Establishing a Connection

To begin interacting with Ultra Wallet, a web application must first establish a connection. This connection request will ask the user for permission to share its blockchain id and public key, indicating that they are willing to continue interacting. Once the permission is set for the first time, the web application domain will be whitelisted for future connection requests.
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

### Eagerly Connecting

After a web application connects to Ultra Wallet for the first time, it gains a trusted status.
Once this trust is established, the application can seamlessly link with Ultra Wallet during future visits or when the page is refreshed, 
eliminating the need to ask the user for authorization. This concept is commonly known as "eagerly connecting".

To implement this, web applications should pass an `onlyIfTrusted` option into the `connect()` call.

```JavaScript
try {
    await ultra.connect({onlyIfTrusted: true});
} catch (err) {
    // { status: 'error', code: 4001, message: 'The user rejected the request.' }
}
```

### Sending a referral code

An application can send its referral code to the wallet. The referral code will be used if the user signs up during the connection process.

To implement this, applications should pass the referralCode option into the connect() call.

```JavaScript
ultra.connect({referralCode: 'ecd1f052-9d0d-4b84-8dd3-10a753d044b5'});
```

To get your referral code, go to the Ultra Desktop client -> Wallet and look for the "My referral link" section

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
