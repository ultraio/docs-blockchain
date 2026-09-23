---
title: 'How to add custom networks'

order: 12
outline: [0, 4]
---

# How to add custom networks

Besides the built-in **Mainnet** and **Testnet**, you can add your own networks to the Ultra Wallet extension, for example a local development node.

1. Open the Ultra Wallet extension and click the network name under your account (or open the **Menu**, top right, and select **Networks**).

    ![Networks screen](/images/uwax-networks-screen.png)

2. Click **Add Custom Network**, enter a **Network Name** and the **Node URL** of your Ultra node (see [nodeos](../../blockchain/general/tools/nodeos.md)), then click **Add Network**.

    ![Add Custom Network form](/images/uwax-add-custom-network-form.png)

3. Select a network in the list to switch to it. Custom networks can also be edited or deleted from this screen.

The wallet checks a network before saving it:

-   The Node URL must use **HTTPS**. `http://localhost` and `http://127.0.0.1` are allowed for local development.
-   Private and internal network addresses are refused.
-   The name must not imitate a built-in network (for example "Ultra Mainnet").
-   The wallet contacts the node and records its chain ID.

::: info Websites cannot add networks
Only you can add a network, on this screen. Websites cannot add networks to your wallet. A connected website can switch the wallet to a network you have already added (extension 2.2.14+). See [Ultra Wallet SDK → Accounts & Networks](../ultra-wallet-sdk/accounts-and-networks.md#adding-a-network).
:::
