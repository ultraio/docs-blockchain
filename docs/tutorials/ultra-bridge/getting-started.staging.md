---
title: 'Getting Started with Ultra Bridge'

outline: [0, 4]
order: 1
---

# Getting Started with Ultra Bridge

This guide will help you get started with the Ultra Bridge DApp, covering the essential setup and prerequisites needed to begin bridging tokens between Ultra and EVM networks.

**Testnet Bridge URL**: [https://bridge.testnet.ultra.io/](https://bridge.testnet.ultra.io/)

## Prerequisites

Before you can use the Ultra Bridge, you need to have the following components set up:

### 1. Ultra Wallet

The Ultra Wallet is required for interacting with the Ultra blockchain. You have two options:

#### Option A: Ultra Wallet Extension (Recommended)
- Install the [Ultra Wallet extension](https://chromewebstore.google.com/detail/ultra-wallet/kjjebdkfeagdoogagbhepmbimaphnfln) for your browser
- Create an Ultra account or import an existing one
- Ensure you have some UOS tokens for gas fees

#### Option B: Ultra Pro Wallet
- Create an Ultra Pro Wallet using the [Ultra Toolkit](https://developers.ultra.io/products/ultra-toolkit/)
- Import your wallet into the Ultra Wallet extension
- Ensure you have some UOS tokens for gas fees

### 2. EVM-Compatible Wallet

You'll need an EVM-compatible wallet for interacting with Ethereum and other EVM networks. Popular options include:

- **MetaMask**: Most popular EVM wallet
- **WalletConnect**: Multi-wallet solution
- **Coinbase Wallet**: User-friendly option
- **Trust Wallet**: Mobile wallet option

### 3. Network Access

Ensure you have access to the testnet networks:

#### Ultra Networks
- **Ultra Testnet**: For testing (free tokens available via [faucet](https://faucet.testnet.app.ultra.io/))

#### EVM Networks
- **Ethereum Sepolia**: Testnet for Ethereum

**Note**: This staging tutorial covers the testnet environment only. The testnet bridge is available at [https://bridge.testnet.ultra.io/](https://bridge.testnet.ultra.io/)

## Setting Up Your Wallets

### Setting Up Ultra Wallet

1. **Install the Extension**
   - Go to the [Chrome Web Store](https://chromewebstore.google.com/detail/ultra-wallet/kjjebdkfeagdoogagbhepmbimaphnfln)
   - Click "Add to Chrome" to install the extension

2. **Create or Import Account**
   - Open the Ultra Wallet extension
   - Choose "Create Account" for a new account or "Import Account" for existing
   - Follow the setup wizard

3. **Get Test Tokens (Testnet Only)**
   - Visit the [Ultra Testnet Faucet](https://faucet.testnet.app.ultra.io/)
   - Enter your account name
   - Receive free test UOS tokens

### Setting Up EVM Wallet (MetaMask Example)

1. **Install MetaMask**
   - Go to [metamask.io](https://metamask.io/)
   - Download and install the extension

2. **Create or Import Wallet**
   - Follow the setup wizard
   - Create a new wallet or import existing one
   - Save your seed phrase securely

3. **Add Networks**
   - **Ethereum Sepolia**: Add manually for testing (required for this tutorial)

4. **Add Test UOS Token**
   - **Contract Address**: `0x3AC63AA2c077D676Fa24a7BCE05b05A2F81237FE`
   - **Token Symbol**: UOS
   - **Decimals**: 4
   - This will allow you to see your bridged UOS tokens in your wallet

## Understanding the Bridge Interface

The Ultra Bridge DApp has a clean, intuitive interface designed to make cross-chain transfers simple:

### Main Components

1. **Network Selectors**: Choose source and destination networks
2. **Wallet Connection**: Connect both Ultra and EVM wallets
3. **Token Selection**: Choose which token to bridge
4. **Amount Input**: Enter the amount to transfer
5. **Destination Address**: Specify where tokens should go
6. **Transaction Details**: Review fees and transaction information

### Key Features

- **Real-time Status**: Monitor transaction progress
- **Fee Transparency**: Clear display of all fees
- **Address Validation**: Automatic address format checking
- **Network Validation**: Ensures correct network connections

## Security Best Practices

### Wallet Security
- **Never share your private keys or seed phrases**
- **Use hardware wallets for large amounts**
- **Keep your wallet software updated**
- **Enable two-factor authentication where available**

### Transaction Security
- **Always verify destination addresses**
- **Start with small amounts for testing**
- **Double-check network selections**
- **Review transaction details before confirming**

### Network Security
- **Use official RPC endpoints**
- **Verify you're on the correct network**
- **Check for maintenance announcements**
- **Monitor for suspicious activity**

## Next Steps

Once you have your wallets set up and understand the basics, you can proceed to:

1. **[Connecting Your Wallets](./connecting-wallets.staging.md)** - Learn how to connect both wallets to the bridge
2. **[Ultra to EVM Bridge](./ultra-to-evm.staging.md)** - Transfer tokens from Ultra to EVM networks
3. **[EVM to Ultra Bridge](./evm-to-ultra.staging.md)** - Transfer tokens from EVM to Ultra networks

## Getting Help

If you encounter issues during setup:

- **Check the [Troubleshooting](./troubleshooting.staging.md) guide**
- **Join the [Ultra Discord community](https://discord.com/invite/WfJCN6YbGk)**
- **Contact support at contact@ultra.io**
- **Review the [Ultra documentation](https://developers.ultra.io/)**
