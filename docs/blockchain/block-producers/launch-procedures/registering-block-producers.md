---
title: 'Registering Block Producers'

outline: [0,4]
order: -96
---

# Registering Block Producers

## Obtaining a Private and Public Key Pair

Each Block Producer must provide Ultra with a public key that they will generate locally.

It is highly recommended that when you generate these keys that the private key is stored in a safe location. Please formulate a plan to keep this private key a secret. We refer you to [Account administration](../maintenance/account-administration.md) for more details.

### To output the key pair to the console.

```typescript
cleos create key --to-console
```

### To save the key pair to file

```typescript
cleos create key --file FILE_TO_SAVEKEY
```

Ultra will then create the Block Producers' accounts with the Block Producer’s public key.

Once this is done; Ultra can use the following command to create an account for them.

```typescript
cleos system newaccount ultra <account_name> <public_key> --transfer --stake-net "0.0000 UOS" --stake-cpu "0.0000 UOS" --gift-ram-kbytes <determine_kbytes_to_buy> -p ultra --ultra-id <ultra_id>
```

Block Producers must be registered through Ultra and will need to synchronize their chains up with the genesis nodeos. Once synchronized and the Block Producer is receiving blocks successfully, they can request for Ultra to register them on the network.

## Block Producer Checklist

Here are some things that block producers will be providing to Ultra for their genesis node.

*   Wireguard IP / Port
    
*   Endpoint Address
    
*   Public Key for Producer
    

Once they are provided; Ultra can easily register them. This can be done through the following command.

```typescript
cleos push action eosio regproducer '["<account_name>","<public_key>","<url>",<location>]' -p ultra 
```

Once this is done, Ultra can verify the current producers by checking the following table.

```typescript
cleos get table eosio eosio producers
```