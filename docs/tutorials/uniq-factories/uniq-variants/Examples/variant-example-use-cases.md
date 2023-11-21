---
title: 'Variant Example Use Cases'

---

# Variant example use cases

Variant standard is quite flexible and allows for a variety of potential projects and use cases. This page will cover some of them and explain how they work

## Video game token factory

The simplest example is providing the same metadata to all the tokens minted from the factory. Such example could be tokens of a specific game, where each token is identical. This factory utilizes `default_token_uri` to avoid duplication inside each minted token

| Property                   | Value                      |
| -------------------------- | -------------------------- |
| factory.default_token_uri  | MyGame.com/Metadata        |
| factory.default_token_hash | b0dafd687d5527cef28300392e |
| token.uri (per token)      | _null_                     |
| token.hash (per token)     | _null_                     |

## Video game token factory with a rare unique copy

Similar to the previous example we have a simple factory for game tokens where all of them are identical except for a few unique cases. For those unique tokens (here it is token #1000000) we provide a specific URI and hash so it does not fallback to default

| Property                   | Value                                         |
| -------------------------- | --------------------------------------------- |
| factory.default_token_uri  | MyGame.com/DefaultMetadataMyGame.com/Metadata |
| factory.default_token_hash | b0dafd687d5527cef28300392e                    |
| token.uri (#1000000)       | MyGame.com/1MthMetadata                       |
| token.hash (#1000000)      | 4e3304e9af1ec7aaa05206b                       |
| token.uri (rest of Uniqs)  | _null_                                        |
| token.hash (rest of Uniqs) | _null_                                        |

## Simple profile picture project

Common situation for profile picture projects is that there is a base URI with serial number utilized as an identifier to find the metadata for a specific token. By using a dynamic value inside `default_token_uri` we can avoid duplication of base URI inside each of the minted tokens and can still provide a hash to each of the tokens for the purposes of data provenance.

| Property                   | Value                                     |
| -------------------------- | ----------------------------------------- |
| factory.default_token_uri  | https://AngryBananas/Uniq/{serial_number} |
| factory.default_token_hash | _null_                                    |
| token.uri (#1)             | _null_                                    |
| token.hash (#1)            | bea34b0a7cdef454f4                        |
| ...                        | ...                                       |
| token.uri (#1000)          | _null_                                    |
| token.hash (#1000)         | def454f46557a96ff84                       |

## Obfuscated profile picture project

In some cases it may be desired for a profile picture project to not be able to probe metadata beforehand by substituting different serial numbers. Since serial numbers are sequential it is easy to go through all of them. In this example we use token hash which is not known beforehand as a part of dynamic `deafult_token_uri`. Hash of the token will only be known after the token is minted.

| Property                   | Value                            |
| -------------------------- | -------------------------------- |
| factory.default_token_uri  | https://AngryBananas/Uniq/{hash} |
| factory.default_token_hash | _null_                           |
| token.uri (#1)             | _null_                           |
| token.hash (#1)            | bea34b0a7cdef454f4               |
| ...                        | ...                              |
| token.uri (#1000)          | _null_                           |
| token.hash (#1000)         | def454f46557a96ff84              |

## IPFS-based profile picture project

Alternative storage solutions may have a different way of naming the metadata URIs. This example demonstrates how in case of IPFS you could provide both a URI and a hash for all the tokens you mint as each metadata file on IPFS will have a unique URI.

| Property                   | Value                                     |
| -------------------------- | ----------------------------------------- |
| factory.default_token_uri  | https://ipfs.io/ipfs/Qme7ss3ARVgxv6rX     |
| factory.default_token_hash | b0dafd687d5527cef28300392e                |
| token.uri (#1)             | https://ipfs.io/ipfs/04e9af1ec7aaa0520    |
| token.hash (#1)            | bea34b0a7cdef454f4                        |
| ...                        | ...                                       |
| token.uri (#1000)          | https://ipfs.io/ipfs/cdef454f46557a96ff84 |
| token.hash (#1000)         | def454f46557a96ff84                       |
