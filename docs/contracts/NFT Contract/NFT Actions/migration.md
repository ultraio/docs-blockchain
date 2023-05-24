---
title: 'Migration Behavior'
order: 0
deploy: ['staging', 'mainnet']
---

# Migration Behavior

The NFT smart contract is written in a way to allow for **migration from our existing NFT version to our new version automatically**. The end user of the action does not have to do anything new, but it is **highly recommended to migrate** to the new action pattern as soon as possible.

This is done by having a parent function that handles migration on the fly. This means that when the action is called in the future for a specific smart contract that has not migrated from a previous version to the new version, it will re-route the action through the appropriate version after making the necessary table changes to support the new version.

These migration behaviors are done across the entire smart contract and exist in almost every action.

## Example Behavior

We will take the `create` action as an example of this behavior.

We will be doing a migration from V0 to V1 to help describe the general behavior.

Once migration has started inside of the smart contract a flag is enabled and will begin taking any of the existing `create` structs that are sent through the main function and automatically converting them.

This is done by taking the `V0` struct and automatically creating a new `V1` struct. New values are created, defined, and even in some cases transformed to support the new tables.

After performing the struct migration, it will reroute the action into the correct version of the function that can handle the new `struct` data.

## Conclusion

Each action has their own migration pattern and they are all complex in their own unique way.

When a new version is announced it is always best to migrate your actions to match the structs which are provided.
