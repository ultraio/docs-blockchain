---
title: 'Introduction'
deploy: []
order: -1
oultine: [0, 4]
---

# Ultra Wallet Browser Extension

Ultra Wallet browser extension is a crypto wallet that helps you access decentralized applications on Ultra blockchain and securely manage digital assets.

The principal function is to create and manage private keys on behalf of its users and manage the connections between the wallet and web applications. 

To interact with the wallet, the wallet injects an object named ultra into the javascript context of every site. This object contains all the methods required to obtain the blockchain id, the private key, and sign blockchain transactions.

## Links

- [How to install the extension](./installing-extension.md)
- [How to get tokens on Testnet](./get-tokens-testnet.md)
- [Demo application](https://stackblitz.com/edit/ultra-wallet-test)
- [Developer resources](./developer-resources.md)
- [App Template](https://github.com/Stuyk/ultra-wallet-app-template)

## Try It

Use the button below to try connecting with the Ultra Wallet, it should pop up when clicked if the extension is installed.

<ClientOnly>
    <Button @onClick="openWallet" align="left">Open Wallet</Button>
</ClientOnly>

<script lang="ts" setup>
import { ref } from 'vue';

let isOpening = ref<bool>(false);

async function openWallet() {
    if (isOpening.value) {
        return;
    }

    isOpening.value = true;

    if (window && window.ultra) {
        await window.ultra.connect();
        alert('Wallet Connected!')
    } else {
        alert('Wallet Unavailable')
    }

    isOpening.value = false;
}
</script>
