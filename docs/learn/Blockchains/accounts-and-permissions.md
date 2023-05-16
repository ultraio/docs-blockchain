---
title: 'Account & Permissions'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -97
---

# Accounts, Permissions, & Keys

EOSIO, in contrast to some other open networks like Bitcoin and Ethereum, requires an account on the network. This account uses keypairs, assigned to permissions, to restrict access to specific actions on the network.

A keypair is generated using elliptic curve cryptography. In this system, private and public keys are associated with one another. You can use a private key to prove ownership of an account which has a public key assigned to one of its permissions.

Default permissions for accounts on EOSIO are called OWNER and ACTIVE. OWNER acts as a superuser, and is allowed to update keys for all permissions as it is the root permission. The ACTIVE permission can perform all actions on the account except updating the keys to the OWNER permission.

Smart contracts are always deployed to an account. Each action within a smart contract can also have keys assigned to it, allowing discrete limitations to be placed on which entity, and with which keypair, calls that action.

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
