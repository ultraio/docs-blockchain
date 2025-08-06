---
title: 'Connecting Your Wallets'

outline: [0, 4]
order: 2
---

# Connecting Your Wallets

This guide will walk you through the process of connecting both your Ultra Wallet and EVM wallet to the Ultra Bridge DApp. Proper wallet connection is essential for successful cross-chain transfers.

**Testnet Bridge URL**: [https://bridge.testnet.ultra.io/](https://bridge.testnet.ultra.io/)

## Accessing the Bridge

### Step 1: Open the Bridge Interface

1. Navigate to the Ultra Bridge DApp in your web browser
2. The interface will display the main bridge form with network selectors
3. You'll see "Connect Wallet" buttons for both Ultra and EVM sides

![Main Bridge Interface](./images/01-main-interface.png)

## Connecting Your Ultra Wallet

### Step 1: Select Ultra Network

1. Click on the "Ultra" network selector (usually on the left side)
2. Ensure you're on the Ultra Testnet (only testnet networks are available)
3. The interface will show the Ultra wallet connection area

### Step 2: Connect Ultra Wallet

1. Click the "Connect Wallet" button in the Ultra section
2. Your Ultra Wallet extension should open automatically
3. If prompted, approve the connection request
4. Your Ultra wallet address will be displayed once connected

![Ultra Wallet Connection](./images/02-ultra-wallet-connection.png)

### Step 3: Verify Connection

- Your Ultra wallet address should be visible
- The connection status should show "Connected"
- You should see your UOS balance displayed

## Connecting Your EVM Wallet

### Step 2: Select EVM Network

1. Click on the "Ethereum" network selector (usually on the right side)
2. Choose Ethereum Sepolia testnet (only testnet networks are available)
3. Ensure you're on the correct network for your intended transfer

### Step 3: Connect EVM Wallet

1. Click the "Connect Wallet" button in the EVM section
2. Choose your preferred EVM wallet from the options:
   - **MetaMask**: Most popular option
   - **WalletConnect**: Multi-wallet solution
   - **Other EVM wallets**: Various other options
3. Approve the connection request in your chosen wallet
4. Your EVM wallet address will be displayed once connected

![EVM Wallet Connection](./images/03-evm-wallet-connection.png)

### Step 4: Verify Connection

- Your EVM wallet address should be visible
- The connection status should show "Connected"
- You should see your token balances displayed

## Network Mismatch Handling

Sometimes you might connect to the wrong network. The DApp will help you resolve this:

### Identifying Network Mismatch

- The DApp will display a warning message
- You'll see an option to switch to the correct network
- Transactions will be prevented until the network is corrected

![Network Mismatch Warning](./images/04-network-mismatch.png)

### Resolving Network Mismatch

1. **Automatic Switch**: Click the "Switch Network" button if available
2. **Manual Switch**: Manually switch networks in your wallet
3. **Verify Networks**: Ensure both wallets are on the correct networks

## Verifying Your Setup

### Before Proceeding

Once both wallets are connected, verify:

1. **Ultra Wallet**:
   - ✅ Connected to Ultra Testnet
   - ✅ Shows your Ultra wallet address
   - ✅ Displays UOS balance

2. **EVM Wallet**:
   - ✅ Connected to Ethereum Sepolia testnet
   - ✅ Shows your EVM wallet address
   - ✅ Displays token balances

3. **Network Compatibility**:
   - ✅ Both networks are compatible for bridging
   - ✅ No network mismatch warnings
   - ✅ Ready to proceed with transfers

## Troubleshooting Connection Issues

### Common Issues and Solutions

#### Wallet Won't Connect

**Problem**: Wallet extension doesn't respond or connection fails

**Solutions**:
- Refresh the page and try again
- Ensure your wallet extension is installed and unlocked
- Check if you're on the correct testnet network
- Clear browser cache and cookies
- Try a different browser

#### Wrong Network Connected

**Problem**: Connected to wrong testnet network

**Solutions**:
- Use the network switch dialog if available
- Manually switch networks in your wallet
- Ensure both wallets are on the correct testnet networks
- Check the network selector in the bridge interface

#### Connection Timeout

**Problem**: Connection request times out

**Solutions**:
- Check your internet connection
- Try refreshing the page
- Ensure wallet extensions are responsive
- Try disconnecting and reconnecting

#### Address Not Displayed

**Problem**: Wallet connects but address doesn't show

**Solutions**:
- Check if the wallet is properly unlocked
- Try disconnecting and reconnecting
- Ensure you have the correct permissions
- Check browser console for errors

## Security Considerations

### Connection Security

- **Verify URLs**: Ensure you're on the official Ultra Bridge testnet website
- **Check Permissions**: Review what permissions the DApp requests
- **Monitor Connections**: Keep track of connected applications
- **Disconnect When Done**: Disconnect wallets when not in use

### Best Practices

- **Test First**: Always test with small amounts
- **Verify Addresses**: Double-check wallet addresses
- **Use Secure Networks**: Avoid public WiFi for large transactions
- **Keep Software Updated**: Update wallet extensions regularly

## Next Steps

Once your wallets are properly connected, you can proceed to:

1. **[Ultra to EVM Bridge](./ultra-to-evm.staging.md)** - Learn how to transfer tokens from Ultra to EVM networks
2. **[EVM to Ultra Bridge](./evm-to-ultra.staging.md)** - Learn how to transfer tokens from EVM to Ultra networks

## Getting Help

If you continue to have connection issues:

- **Check the [Troubleshooting](./troubleshooting.staging.md) guide**
- **Join the [Ultra Discord community](https://discord.com/invite/WfJCN6YbGk)**
- **Contact support at contact@ultra.io**
- **Review wallet-specific documentation**
