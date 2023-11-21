---
title: 'Account Administration'

outline: [0,4]
order: -99
---

# Account Administration

Every Block Producer needs to be able to manage his keys in a secure and efficient manner for the sake of his own security and security of the Ultra Blockchain. As a best practice every BP account must at least use 4 key pairs:

1.  **Owner keys:** This is the root permission, proving ownership of your account. These keys can be used to replace keys on any other permission. Owner keys should be stored securely and only used in emergencies.
    
2.  **Active keys:** Used for signing and executing transactions and also for pushing actions. Should be kept secure and used with caution.
    
3.  **Signature keys:** A key pair that is used only for signing blocks. It must not be used to perform any other operation.
    
4.  **Claim keys:** A key pair that is used only for claiming rewards.
    

Make sure to create these four key pairs and store them securely.

**Recommended storage of keypairs**

For the Owner and Active keypairs, we recommend storing these on a hardware wallet like a Ledger which requires a second physical step for authorization.

The Signature and Claim keys can be stored securely according to the internal security policies of the Block Producers. The Signature keypair can not be stored on a hardware wallet as it needs to be input into nodeos.

When you finish this setup, you should update the signature provider record in your config.ini file with your new signature keys.

You should also create a new permission called claim using your claim keys. Don't forget to link the _claimrewards_ action to this new permission. This way, your claim keys can only be used to claim rewards. This process is described below:

### Create the custom claim permission as a child of the active permission

```typescript
cleos set account permission YOURACCOUNT claim CLAIM_PUBLIC_KEY active -p YOURACCOUNT@active​
```

### Link claimrewards action to the claim permission

```typescript
cleos set action permission YOURACCOUNT eosio claimrewards claim -p YOURACCOUNT@active
```

### Claiming the rewards with claim permission

```typescript
cleos system claimrewards YOURACCOUNT -p YOURACCOUNT@claim
```

### Removing the claim permission

```typescript
cleos set account permission YOURACCOUNT claim NULL active -p YOURACCOUNT@active
cleos set action permission YOURACCOUNT eosio claimrewards NULL -p YOURACCOUNT@active
```