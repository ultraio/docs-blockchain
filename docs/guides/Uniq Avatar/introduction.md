---
title: 'Introducing Uniq Avatars'
deploy: ['staging', 'mainnet']
outline: [0, 4]
order: 1
---

# Introducing Uniq Avatars

The Ultra Avatar contract, `ultra.avatar` allows users to set an Uniq as their avatar.

The user sets an avatar using the `setavatar` action and it is then availabe for anyone using Ultra's blockchain to view and use. They read data from the contract and render the Uniq inside their app.

Users can change their avatar with the same action or remove avatar completely with the `clearavatar` action.

If a user loses possession of the Uniq through transfer or burn actions, it can no longer be used as an avatar and an active avatar with such a Uniq will be cleared.

## What are Uniq Avatars for?

We intend for Uniq Avatars to be used within Ultra as cross-ecosystem visual identifiers of users and their identity. This means that if you see someone with a Uniq as their avatar in a game or an application, you can rest assured that **it is verifiable**.

## Developer Use

For developers we provide details about the two actions available via the on-chain ABI.

-   [setavatar](./setavatar.md)
-   [clearavatar](./clearavatar.md)
