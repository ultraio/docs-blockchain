---
title: 'Introduction'
deploy: ['staging', 'mainnet']
order: -9999
---

# Introduction

Ultra is proud to provide external developers more direct access to the data that is stored on-chain in a package that is easy for them to digest within the apps that they are building.

The NFTAPI is based on [graphql](https://graphql.org/), which is a schema-based format that abstracts data into a developer-friendly, accessible configuration.

-   [Authentication](./authentication.md)
-   [Errors](./errors.md)
-   [Queries](./queries.md)
-   [Subscriptions](./subscriptions.md)
-   [Types](./types.md)

## Why would someone need the NFTAPI?

It’s currently hard to get specific current data about stuff that we consider central to our ecosystem. This means that Users, Token Factories, the Uniqs that they mint, and the metadata associated with them are hard to access.

The NFTAPI makes it easy for developers to integrate and use NFT data.

## Specific Examples of what you can do with the NFTAPI

The NFTAPI is targeted towards (surprise, surprise) NFT data.

Some stuff that is now simple to do with access to the NFTAPI:

-   Get a list of all Token Factories IDs
-   Get a specific Token Factory based on an ID
-   Get a specific Uniq based on an ID
-   Get a specific Token Factory based on the Uniq ID
-   Get a list of Uniqs based on a wallet ID
-   Get the Token Factory Metadata and/or Media Content based on an ID
    -   Images
    -   Descriptions
    -   etc.
-   Get the Uniq type (collectible, game) based on an ID

You can also get a lot of marketplace specific data like resale status, revenue split, metadata status, etc.

## Using the NFTAPI

To use the NFTAPI developers must have a `client_id` to access the endpoints. To get access, developers must send an email to [developers@ultra.io](mailto:developers@ultra.io). Following this, a request must be made to the #devrel-requests Slack channel.
