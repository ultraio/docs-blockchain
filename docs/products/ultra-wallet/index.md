---
title: 'Introduction'

order: -1
oultine: [0, 4]
---

# Ultra Wallet Browser Extension

![](/images/wallet-2x-main.png)

The Ultra Wallet browser extension is a self-custody crypto wallet that allows you to access decentralized applications on Ultra's blockchain and securely manage your digital assets.

The principal functions are to create and manage private keys on behalf of its users, to manage the connections between the wallet and web applications, and allow users to securely sign transactions.

To interact with the wallet, the wallet injects an object named `ultra` into the javascript context of every site. This object contains all the methods required to obtain the user's blockchain id, their public key, and to sign blockchain transactions.

## What's new in 2.x

The 2.x release reworks the wallet around a single, on-device encrypted **vault**:

-   **One vault, one password** — all of your keys live in a single encrypted vault unlocked with one password.
-   **Multiple accounts and keys** — hold many keys and switch between every account they control. See [Managing accounts and keys](./managing-accounts-and-keys.md).
-   **Create accounts on-device** — create a brand-new blockchain account directly from the wallet.
-   **Networks and custom RPC** — switch between built-in networks or add your own. See [Networks and settings](./networks-and-settings.md).
-   **Side panel mode** — run the wallet as a Chrome side panel alongside your dApp.
-   **Connected apps management** — review and revoke the sites you've connected to.

## Links

-   [How to install the extension](./installing-extension.md)
-   [Setup the Ultra Wallet (tutorial)](../../tutorials/fundamentals/tutorial-setup-the-wallet.md)
-   [Managing accounts and keys](./managing-accounts-and-keys.md)
-   [Networks and settings](./networks-and-settings.md)
-   [How to get tokens on Testnet](./get-tokens-testnet.md)
-   [Demo application](https://stackblitz.com/edit/ultra-wallet-test)
-   [Developer resources](./developer-resources.md)
-   [App Template](https://github.com/Stuyk/ultra-wallet-app-template)

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
