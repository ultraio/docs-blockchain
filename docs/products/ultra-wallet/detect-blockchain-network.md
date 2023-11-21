---
title: 'Detecting the Blockchain Network'

order: 5
outline: [0, 4]
---

# Detecting the Blockchain Network

The Ultra blockchain is distinguished by a unique identifier that facilitates the identification of the associated blockchain network. 
This essential information can be retrieved through the Wallet extension using the following method.

```JavaScript
try {
    const response = await ultra.getChainId();
    response.data;
    // a9c481dfbc7d9506dc7e87e9a137c931b0a9303f64fd7a1d08b8230133920097
} catch (err) {
    // { status: "error" }
}
```

For more information visit the [List of official Ultra blockchain networks](../../products/chain-api/index.md)
