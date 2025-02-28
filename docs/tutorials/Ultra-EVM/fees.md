---
title: 'Fees'

outline: [0,4]
order: 2
---

# Ultra EVM Fee Structure

This document provides an overview of the fees charged on the Ultra EVM for both **normal EVM transactions** and **bridge-in transactions**.

---

## 1. EVM Transactions (including bridge-out)

When sending a transaction from one EVM address to another (or bridging out), the fee structure is:

1. **Gas Fee**: `gas price * gas used`
2. **Distribution of Gas Fee**:
   - **10%** goes to the EVM miner.
   - **90%** goes to the EVM account (a system account designated to receive a portion of the fees).
3. **Charged On Top of Transaction Amount**  
   If you send **1 UOS** from `evm1` to `evm2`, you will pay the 1 UOS **plus** the gas fee.  

### Example

- **Transaction**: Send 1 UOS from `evm1` to `evm2`
- **Gas Used**: 21000 (example figure)
- **Gas Price**: 0.0000015 UOS/Unit (example figure)
- **Gas Fee**: 21000 * 0.0000015 = 0.0315 UOS
- **Total Charged to Sender**: `1 UOS + 0.0315 UOS = 1.0315 UOS`
- **Amount Received by Recipient**: `1 UOS`
- **Gas Fee Distribution**: 0.0315 UOS
  - 10% (0.00315 UOS) goes to EVM miner
  - 90% (0.02835 UOS) goes to EVM account

---

## 2. UOS Bridge-In Transactions

When bridging UOS from a non-EVM Ultra account into the EVM, a **fixed** bridge-in fee applies:

1. **Fixed Bridge-In Fee**: `0.1 UOS`
2. **No Other Fees**: No gas fee is charged on bridge-in; only the fixed fee is applied.
3. **Charged From Sent Amount**  
   If you send 1 UOS to the EVM, the receiving EVM address will get `1 UOS - 0.1 UOS = 0.9 UOS`.

### Example

- **Transaction**: Send 1 UOS from a **non-EVM** Ultra account (`account1`) to an EVM address (`evm1`)
- **Fixed Bridge-In Fee**: 0.1 UOS
- **Amount Received by Recipient**: `1 UOS - 0.1 UOS = 0.9 UOS`
- **Fee Recipient**: The 0.1 UOS fee goes to the EVM account

---

## Summary

- **EVM Transactions**:
  - Gas fee = `gas price * gas used`
  - 10% of gas fee → EVM miner
  - 90% of gas fee → EVM account
  - Gas fee is in addition to the sent amount

- **Bridge-In Transactions**:
  - Fixed fee = `0.1 UOS`
  - Deducted from the sent amount
  - Goes entirely to the EVM account
