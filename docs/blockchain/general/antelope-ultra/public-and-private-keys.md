---
title: 'Public and Private Keys'

outline: [0, 4]
order: -90
---

# Public and Private Keys

Ultra uses an elliptic curve key pair consists of a public key (used for verification) and a private key (kept secret for signing transactions), enabling secure digital interactions on the Ultra blockchain.

A keypair is **required** for most blockchain development besides reading APIs. If you are going to publish a smart contract, sign a transaction, or even sign a message you're going to need a keypair.

::: details Additional Information

#### What is a Public Key?

A public key is primarily used for cryptographic verification. In the context of blockchain or digital signatures, it allows others to confirm that a message or transaction was indeed signed by the corresponding private key without revealing the private key itself. This verification process is crucial for ensuring the integrity and authenticity of data in secure communications and transactions.

#### What is a Private Key?

A private key, a secret alphanumeric code, is used to digitally sign transactions or messages. It grants control over associated assets or data in blockchain systems. Essential for secure communication, it enables identity verification and access control, emphasizing the need for stringent security measures to prevent unauthorized access or loss.

:::

### Generate a Keypair

In most cases we don't recommend generating private keys online. However, if you are using this for our test network it is safe to use there. Otherwise, seek out some of the additional ways to generate a key pair safely. Such as using [cleos](../tools/cleos.md).

<KeyGenerator />
<br />
<br />

### Alternative Ways to Generate Keypairs

-   [Ultra.io VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp)
-   [EOS Authority](https://eosauthority.com/generate_eos_private_key)
-   [EOSCafe Offline Generator](https://github.com/eoscafe/eos-key)
-   [NadeJDE Key Generator](https://nadejde.github.io/eos-token-sale/)
