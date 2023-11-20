---
title: 'Organizing Metadata'
deploy: ['staging', 'mainnet']
order: -99997
---

# Organizing metadata

This page will cover how the metadata off-chain can be linked to on-chain data and what options you have to better organize your metadata URIs

## Dynamic and static metadata URI

The distinction between static and dynamic metadata URI applies only for `default_token_uri` field inside the token factory. By specifying one of the possible dynamic values inside the `default_token_uri` the URI will automatically be considered as dynamic for the purposes of searching the token metadata as described in the section below.

If no dynamic value is used inside `default_token_uri` then this URI will be considered static.

Acceptable dynamic URI values:

-   `factory_id` - Factory ID based on the on-chain data
-   `serial_number` - Serial number of a specific token. Incremental value starting from 1
-   `id` - ID of the token. Pool of possible IDs is shared between all Uniqs and in general you won't know it until the token is minted
-   `hash` - Hash of the token metadata stored per token

Example of `static` default token URI: http://myfactory.io/deafult_token.json

Example of `dynamic` default token URI: http://myfactory.io/{serial_number}.json

## How to set factory metadata

Factory can contain two different types of metadata URI: factory metadata URI and default uniq metadata. Factory metadata URI must always be provided and point to a single JSON metadata file. Factory metadata hash must also be provided and be a hash of the metadata file pointed by factory metadata URI.

For default token URI there is a flexibility in choosing between static and dynamic default token URI (the difference is explained above) but you must always specify some default token URI. For static default token URI you have a possibility to also specify a hash, but for dynamic default token URI you should not be providing hash since dynamic URI implies the possibility that it points to multiple different metadata files depending on the context and thus a single hash cannot fully describe the provenance of metadata files.

The following diagram displays potential use cases when setting factory URIs:

![](/images/bbea7125-931a-4f98-b99e-d91ac8c8fe48.png)

Token factory metadata can be specified during creation - [create.b](/docs/contracts/nft-contract/nft-actions/create.b.md)

Following actions are used to change factory metadata URIs and hashes after creation:
[setmeta.b](../../contracts/nft-contract/nft-actions/setmeta.b.md)
[setdflttkn](../../contracts/nft-contract/nft-actions/setdflttkn.md)

## How to set token metadata

You have an option to provide a metadata URI and hash for each token individually. In this case there will be no need to fallback to default token URI inside the token factory.

Both the URI and hash are optional. You may want to provide either of them or both of them at the same time depending on your use case. Refer to this page for details: [use cases](./Examples/variant-example-use-cases.md)

Token metadata can be specified when minting a token - [issue.b](../../contracts/nft-contract/nft-actions/issue.b.md)

Alternatively URI and hash can be changed after the token is minted using the following action - [settknmeta](../../contracts/nft-contract/nft-actions/settknmeta.md)

## How to find metadata for a given Uniq

For the integrators it may be important to know how to fetch the token metadata if you already know the [on-chain token data](../../contracts/nft-contract/nft-tables.md#token.b).

The first step is to check if there is a URI specified on the token itself by checking the `uri` field of the token. If it is specified then you are done - go to `uri` and fetch the metadata.

In case the `uri` is empty or points to an invalid file you need to fallback to default token URI stored inside the token factory. Token factory ID is available in the token data and by querying the `factory.b` table you will be able to access it's `default_token_uri` field.

Then depending on if `default_token_uri` is dynamic or not one of two following paths should be used:

-   `default_token_uri` is `static` - go to the URI pointed by `default_token_uri` and fetch the metadata
-   `default_token_uri` is `dynamic` - substitute all dynamic values inside the URI with information available in the token data (e.g. serial number) and then fetch the metadata using the generated URI.

Refer to the following diagram for details:

![](/images/5c92a44c-bbb0-4111-ac27-e5848fe43aeb.png)
