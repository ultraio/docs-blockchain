---
title: 'Creating a Wallet'

order: -99995
oultine: [0, 4]
---

# Creating a Wallet

This should only be done when you are **NOT** using `cleos` with `ultratest`. If you prefer to have Ultratest generate your accounts and wallets automatically, check the [start a local chain](start-local-chain.md) section for how to do so.

## Creating a Wallet

You can create a wallet with cleos using the command:

```sh
cleos wallet create --to-console
```

Alternatively, you can also output to a password file:

```sh
cleos wallet create --file <filename>
```

## Unlocking a Wallet

You can unlock your wallet with:

```sh
cleos wallet unlock
```

You'll be prompted to provide your password.

## Generating a Key Pair

Run the following command to generate a key pair:

```sh
cleos create key --to-console
```

This command will generate a new key pair and display the public and private keys on the console.

Make sure to securely store the generated private key as it will be needed for signing transactions.

Here's an example output of the cleos create key command:

```sh
Private key: `<private_key>`
Public key: `<public_key>`
```

Remember to keep your private key safe and secure. It's crucial to protect your private key from unauthorized access to prevent any potential misuse.

## Adding Keys to a Wallet

You must have your wallet open and unlocked. You'll need to generate a new key pair as is shown in the above section.

Run the following command to import the private key into your wallet:

```sh
cleos wallet import --private-key <private_key>
```

Make sure to keep your wallet secure and protect it with a strong password.
