---
title: 'Detecting the Ultra Wallet'

order: 4
outline: [0, 4]
---

# Detecting the Ultra Wallet

To detect if a user has already installed the Ultra Wallet browser extension the web application should run over **HTTPS** and check for the existence of an `**ultra**` object in the `window` variable.

```JavaScript
if ('ultra' in window) {
  console.log('Ultra Wallet is installed!');
}
```

This code can be called when you want (for example, when clicking on a button or a link).  
If you want this check to be carried out automatically when the web page loads, you will need to integrate it into the '**load**' event in the `window` variable:

```JavaScript
if(document.readyState !== 'complete') {
    window.addEventListener('load',afterWindowLoaded);
} else {
    afterWindowLoaded();
}

function afterWindowLoaded(){
    if ('ultra' in window) {
        console.log('Page load: Ultra Wallet is installed!');
    } else {
        console.log('Page load: No Ultra Wallet extension detected!');
    } 
}
```
