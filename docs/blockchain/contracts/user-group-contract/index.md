---
title: 'User Groups Overview'

outline: [0, 4]
order: -99
---

# On-Chain User Groups in Ultra

This document describes the feature of on-chain user groups in Ultra. It serves as a guide for both users and developers to understand how this feature works and how it can be utilized in smart contracts.

Whether you are a developer looking to integrate this system into your application, or an end-user seeking to understand how to use the CLI or JavaScript SDK, this guide has got you covered. The documentation is divided into several key sections, each focusing on different aspects of the system.

### What Will You Learn?

- **Smart Contract Actions**: Understand how to create and manage groups through actions like `create.a`, `setmeta.a`, `adduser.a`, `rmuser.a`, and `clear.a`.
- **CLI Commands**: Get a hands-on guide on how to use `cleos` commands for performing various actions.
- **JavaScript SDK (eosjs)**: Learn how to make transactions using JavaScript via eosjs.
- **Table Descriptions**: Get acquainted with the blockchain tables like `groupid`, `groups.a`, and `users.a` that store state information for the group management system.

## Rules

### Group Creation

- Any account can create a group.
- The creator pays for the RAM usage.
- Optionally, a URI and hash for off-chain metadata can be specified during creation.

### Group Scope

- All groups reside in a global scope, not under the creator's scope.

### Group Information

For each group, the following information is stored on-chain:

- **ID**: Globally unique identifier that auto-increases.
- **Creator**: The EOSIO account that created the group.
- **User Number**: Number of users in the group.
- **Meta_URI**: URI for metadata (e.g., `https://ultra/group/meta/germany` or `IPFS://23LSDJFLSKJFL…`)
- **Meta_Hash**: Hash of the metadata.

#### Metadata Rules

1. Both `meta_uri` and `meta_hash` can have values.
2. Both can be empty.
3. `meta_uri` not empty, `meta_hash` is empty.
4. Cannot have an empty `meta_uri` while `meta_hash` is not empty.

### Group Updates

- Only the creator can update `meta_uri` and `meta_hash`.
- The creator pays for the additional RAM usage or receives a RAM refund.

### User Management

- Only the creator can add new users to or remove existing users from the group.
- The creator pays for RAM when adding users and receives a RAM refund when removing users.

## Use Cases

- Any smart contract can utilize groups for various functionalities.
- A user needs to belong to a group to mint tokens.
- Issue an NFT to a user if the user belongs to a specific group.
- Ownership rules can be group-dependent.

