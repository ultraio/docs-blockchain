---
title: 'Tutorial - Token transfer and Uniq purchase transactions'
order: -99998
outline: [0, 5]
---

# Tutorial - Tutorial - Token transfer and Uniq purchase transactions

This tutorial will demonstrate how to use the Ultra toolkit for sending asset (transfer) and purchasing Uniq interact with Ultra the blockchain.

## Prerequisites

Before starting this tutorial, you will need:

- A developer account on the Ultra testnet. If you don't have one, follow our previous tutorial: [Generate a key and create a developer Testnet account](./tutorial-generate-key-create-account.md).
- Your account must have sufficient UOS tokens for transactions and fees.
- The latest version of the Ultra toolkit installed on your machine.

## Goal

The goal of this tutorial is to show you how to:

1. Transfer UOS tokens between accounts using the `eosio.token::transfer` action.
2. Purchase digital assets (Uniqs) using the `eosio.nft.ft::purchase.a` action within the Ultra ecosystem.

## Transferring Tokens

To transfer tokens using the Ultra toolkit, follow these steps closely:

### Step 1: Access the Transaction Builder

Open the Ultra toolkit and log in with your developer account. Click on the 'Transaction Builder' tab to begin creating a new transaction.

![](./images/token-transfer-action-builder.png)

### Step 2: Select the eosio.token Contract

Navigate to the `eosio.token` contract by clicking on it from the list of available contracts. Once you select the contract, choose the `eosio.token::transfer` action to initiate a token transfer.

![](./images/token-transfer-eosio.token.png)

### Step 3: Fill in the Transfer Details

In the token transfer fields, enter the details of the transaction:
- **From**: `1aa2aa3aa4in` (your account)
- **To**: `1aa2aa3aa4io` (recipient's account)
- **Quantity**: `0.00000001 UOS` (amount to be transferred)
- **Memo**: `Test transaction` (a note about the transaction)

Ensure all details are correct to avoid any errors in the transaction.

![](./images/token-transfer-attributes.png)

### Step 4: Preview and Confirm the Transaction

Review all the transaction details on the preview screen. Make sure that everything is accurate before you proceed.

![](./images/token-transfer-confirm.png)

### Step 5: Confirm and Sign with Ultra Wallet

Confirm and sign the transaction using the Ultra Wallet extension. This step is crucial as it authorizes the blockchain to execute the transfer under your account.

![](./images/token-transfer-ultra-wallet-confirm.png)

### Step 6: Transaction Completion

After signing the transaction, you will see a confirmation screen indicating that the transaction was successfully completed.

![](./images/token-transfer-txn-completed.png)

### Step 7: Verify the Transaction

To ensure the transaction was successfully processed, visit the Ultra Testnet Explorer at `https://explorer.testnet.ultra.io/`. Search for your account (`1aa2aa3aa4in`) to view the transaction details and confirm that the transfer went through as intended.

![](./images/token-transfer-explorer.png)

## Purchasing Digital Assets (Uniqs)

To purchase a Uniq from the Token Factory using the Ultra toolkit, follow these steps carefully:

### Step 1: Verify Factory Details

Begin by checking the Factory Explorer in the Uniq Explorer. Confirm the on-chain data for the Token Factory you are interested in, which in this case is Factory ID 4243, owned by account `1aa2aa3aa4io`.

![](./images/purchase-factory-explorer.png)

### Step 2: Explore Available Uniqs

View the Uniqs available under Token Factory 4243. This screen will show you the specific Uniqs that you can purchase from this factory.

![](./images/purchase-factory-explorer-uniqs.png)

### Step 3: Initiate Purchase Action

Navigate to the action builder in your toolkit and select the `eosio.nft.ft` contract. Choose the purchase action to start the process of buying a Uniq.

![](./images/purchase-action-builder.png)

### Step 4: Enter Purchase Details

On the purchase action screen, fill out the attributes necessary for the transaction:
- **Factory ID**: `4243` (ID of the Token Factory)
- **Maximum Price**: `1.00000000 UOS` (maximum amount you are willing to pay)
- **Buyer**: `1aa2aa3aa4in` (your account)
- **Receiver**: `1aa2aa3aa4in` (your account, receiving the Uniq)

![](./images/purchase-attribute-I.png)

Scroll down to complete any additional required attributes for the purchase.

![](./images/purchase-attribute-II.png)

### Step 5: Review and Confirm Transaction

Carefully review all the transaction details on the confirmation screen to ensure they are correct before proceeding.

![](./images/purchase-confirm.png)

### Step 6: Confirm and Sign with Ultra Wallet

Confirm and sign the transaction using the Ultra Wallet extension. This step is essential to authorize the transaction on the blockchain.

![](./images/purchase-confirm-ultra-wallet.png)

### Step 7: Transaction Completion

Once the transaction is signed, a confirmation screen will display indicating that the purchase was successfully completed.

![](./images/purchase-ultra-wallet-confirm.png)

### Step 8: Verify Ownership of New Uniq

To confirm the purchase, revisit the Factory Explorer page for Factory 4243. Verify that the new Uniq now appears under your account `1aa2aa3aa4in`.

![](./images/purchase-verify-new-uniqs.png)