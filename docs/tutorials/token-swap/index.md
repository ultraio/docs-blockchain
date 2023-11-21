---
title: 'Token Swap Overview'

outline: [0,4]
order: -99
---

# Token Swap Overview

The new native Ultra Mainnet is an EOSIO-based so any exchanges that are currently familiar with the EOS Mainnet should not have any issues deploying infrastructure.

The only major differences that exchanges will need to worry about versus a standard EOSIO deployment are:

*   Accounts now require KYC to deploy a smart contract to our network
    
*   Depending on how the exchange sets up their infrastructure they may need a smart contract
    
In the case that an exchange needs to deploy a smart contract, please speak with our representative and we will enable the KYC flag for your account.

::: tip Info

If you are simply looking for a way to swap from ERC-20 to native UOS use the following service [https://dapp.ptokens.io](https://dapp.ptokens.io) which is provided by our partner at pNetwork.

:::

## API Nodes

See the [API Section](../../products/chain-api/index.md) for a list of available nodes to transact with.

## Block Explorers

You can use these explorers to check transactions on our networks.

### Testnet

*   [https://explorer.testnet.ultra.io/](https://explorer.testnet.ultra.io/)
    
### Mainnet

*   [https://explorer.mainnet.ultra.io/](https://explorer.mainnet.ultra.io/)
    

## Creating Account(s)

The exchanges will provide us with public keys for each permission (OWNER, ACTIVE) and a single, 12 character account name. Ultra will create these non-EBA accounts. Exchanges will be able to access the network and accounts through an API node.

*   **Requirement checklist**
    *   **Accountname** (12 characters, a-z, 1-5)
    *   **Public Keys** for each permission
        
## Pre-Swap

Ultra will be leveraging the p.network token swap solution. This means that partner exchanges will log in to [https://dapp.ptokens.io/](https://dapp.ptokens.io/) and must have their metamask (or ledger, etc.) ready to perform the swap.

During the swap process you will be making Ethereum transactions. Depending on the time of day, activity, etc. of the chain gas prices may be extremely high. Please keep an eye on gas prices before performing a swap.

## Performing the Swap

Since the original UOS token is ERC-20 based that means they will need to use the Ultra Vault Smart Contract that will automatically swap ERC-20 UOS for native chain UOS. See below for the general usage.

### General flow of the swap

![](/images/token-swap-pnetwork.png)

During the swap you will be putting in an Ultra accountname. This is the target account, controlled by the exchange. **This account must exist before you swap tokens.**

### Fees and Costs

The fee for ERC-20 swap to the native chain will have a 0% fee on the amount transferred. However, transferring from native UOS to ERC-20 UOS (or any other token) will have a 0.25% fee. Which means that you will only have a fee if you are moving into the ERC-20 platform. This fee will go to the validators of pNetwork and their infrastructure.

#### Actions and fees

| Action                                                   | Fee Covered By                             |
| -------------------------------------------------------- | ------------------------------------------ |
| Sending ERC20 UOS tokens to the p.network Vault Contract | Covered by the user, paid in ETH (Gas Fee) |
| Peg In                                                   | Covered by p.network                       |
| Peg Out                                                  | The user (0.25% of transaction)            |

## EOSIO Examples

Below you can see examples of the cleos commands necessary to perform the Ultra → Ethereum swap.

```ts
// using cleos
cleos transfer <YOUR_ACCOUNT> ultra.swap "1.00000000 UOS" "<ETHEREUM_ADDRESS>"

// using eosjs
const result = await api.transact({
  actions: [{
    account: 'eosio.token',
    name: 'transfer',
    authorization: [{
      actor: YOUR_ACCOUNT,
      permission: 'active',
    }],
    data: {
      from: YOUR_ACCOUNT,
      to: 'ultra.swap',
      quantity: '1.00000000 UOS',
      memo: ETHEREUM_ADDRESS,
    },
  }]
}, {
  blocksBehind: 3,
  expireSeconds: 30,
});
```

## Token Transfer to Ultra

Upon sending UOS token to `ultra.swap`, an inline action will be triggered to convert UOS to PUOS then redeem this PUOS to ERC20 UOS to targeted ETH address.

### Action Flow

*   User transfer UOS to **ultra.swap** with memo as ETH address
    
    ```typescript
    cleos transfer user.acc ultra.swap “1.00001000 UOS” “0xB57edF3fF3e1ba7854Ec083438D53AD6032518Ac“
    ```
    
*   `swap` contract will be notified and execute `on_transfer` to verify and process to redeem if all value is valid.
    
*   `on_transfer` order of execution and check
    
    *   Skip redeem if `from` is **ultra.eosio**
        
    *   Skip redeem if `to` is not **ultra.swap**
        
    *   Skip redeem if `quantity` is not **UOS**
        
    *   Reject transaction if `memo` is empty
        
    *   Reject transaction if `memo` is not a valid ETH address format
        
        *   Start with `0x`
            
        *   End with 40 hexadecimal characters
            
        *   Example: `0xB57edF3fF3e1ba7854Ec083438D53AD6032518Ac`
            
    *   Convert UOS to PUOS
        
        *   amount less than “0.00010000 UOS” will be return to `to` account
            
        *   the rest will convert to PUOS for redeem
            
        *   Example
            
            *   quantity = “1.00001000 UOS”
                
            *   return = “0.00001000 UOS”
                
            *   redeem = “1.00000000 PUOS”
                
    *   Reject transaction if redeem amount = 0
        
    *   If return amount > 0, **ultra.swap** will transfer these fund back to user
        
    *   Lastly, **ultra.swap** will call `redeem` action from pnetwork contract to handle the actual convert from PUOS to ERC20 UOS\\
        
        *   redeem(sender, quantity, memo)
            
            *   sender will be **ultra.swap**
                
            *   quantity will be PUOS from conversion
                
            *   memo will be memo (ETH address) from transfer action