---
title: 'Detecting the Ultra Wallet'
deploy: ['staging', 'mainnet']
order: 4
outline: [0,4]
---

# Detecting the Ultra Wallet

To detect if a user has already installed the Ultra Wallet browser extension, the web application should check for the existence of an `ultra` object in the `window` variable.

```JavaScript
if (typeof window.ultra !== 'undefined') {
  console.log('Ultra Wallet is installed!');
}
```
