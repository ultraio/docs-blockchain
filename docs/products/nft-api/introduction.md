---
title: 'Introduction'
deploy: ['staging', 'mainnet']
order: -9999
---

# Introduction

Ultra is excited to offer external developers enhanced access to on-chain data through an easily consumable package, designed to streamline the integration process within their applications.

Leveraging the power of [graphQL](https://graphql.org/), the Ultra API adopts a schema-driven approach, making data more accessible and developer-friendly.

Resources provided include:

-   [Authentication](./authentication.md)
-   [Errors](./errors.md)
-   [Queries](./queries.md)
-   [Subscriptions](./subscriptions.md)
-   [Types](./types.md)

## Purpose of the Ultra API

Accessing up-to-date, specific data within our ecosystem can be challenging. This includes information on Uniq Factories, the Uniqs they produce, and associated metadata—all vital components that are traditionally difficult to retrieve.

The Ultra API simplifies the integration and manipulation of NFT data for developers.

## Capabilities Offered by the Ultra API

Focused on NFT data, the Ultra API facilitates a variety of tasks, making the following operations straightforward:

-   Retrieving a complete list of Uniq Factory IDs
-   Fetching details for a specific Uniq Factory using its ID
-   Accessing a particular Uniq with its ID
-   Identifying a Uniq Factory associated with a given Uniq ID
-   Listing Uniqs linked to a wallet ID
-   Extracting Uniq Factory Metadata and/or Media Content by ID, including images, descriptions, and more
-   Determining the type of a Uniq (e.g., collectible, game) via its ID

Additionally, it enables access to marketplace-specific information such as resale status, revenue splits, and metadata conditions.

## Using the Ultra API

Developers need a `client_id` to interact with the Ultra API's endpoints. For access, please send a request to [developers@ultra.io](mailto:developers@ultra.io).
