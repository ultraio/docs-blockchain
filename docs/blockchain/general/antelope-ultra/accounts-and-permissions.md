---
title: 'Account & Permissions'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -97
---

# Accounts, Permissions, & Keys

Unlike Bitcoin and Ethereum, Ultra necessitates an account on the network for participation. This account employs keypairs linked to permissions, controlling access to specific network actions.

A keypair, generated through elliptic curve cryptography, involves associating private and public keys. The private key proves ownership of an account, which, in turn, has a public key assigned to one of its permissions.

Ultra accounts come with default permissions called OWNER and ACTIVE. OWNER functions as a superuser, capable of updating keys for all permissions as the root permission. ACTIVE, another default permission, can execute all actions on the account except updating keys to the OWNER permission.

Smart contracts are deployed to an account, and each action within a smart contract can have keys assigned to it. This feature allows for specific limitations on which entity, along with which keypair, can call that action.

## Account Structure Output

```
permissions:
    owner 1: 1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
        active 1: 1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
memory:
    quota:       unlimited  used:      3.758 KiB

net bandwidth:
    used:               unlimited
    available:          unlimited
    limit:              unlimited

cpu bandwidth:
    used:               unlimited
    available:          unlimited
    limit:              unlimited
```

## Account Structure Diagram

![](/images/basic-account-structure.jpg)
