---
title: 'NFT Contract Overview'
order: 0
deploy: ['staging', 'mainnet']
---

# NFT Overview

The abbreviation ‘NFT’ stands for Non-Fungible Token which means that NFT is a unit of data stored on a blockchain that can be sold or traded like other tokens. Unlike other tokens all NFTs are unique and one NFT cannot be replaced with another. That is why NFTs are often called `Uniqs`. In this document the NFTs can also be referred to as tokens.

The Ultra's `eosio.nft.ft` smart contract defines a set of data structures (multi index tables, singletons) and a set of blockchain actions to manipulate the data structures. Both the data structures and the actions implement the supported set of NFT Use cases.

## Info

NFT use cases describe what differrent users can do with NFTs. The text in **bold** represents actions, the text in _italic_ represents blockchain accounts and the `highlighted` text represents the related data structures or data structure elements. Please refer to the action description or data structure overview to obtain more information.

## Token Factory Creation

**PLEASE NOTE:** _Recall and Lockup feature will be disabled by default which means when creating new token factory, action will fail if you put any value for recall window or lockup time. This note will be removed when these features are enabled again._

The _Asset Creator_ and the _Asset Manager_ can **create** a token factory.

To issue a token, a token factory should be created first. For this version of `eosio.nft.ft` only _Ultra_ can be the _Asset Creator_ and the _Asset Manager_. A token factory is a set of blockchain data which provides settings for the NFTs issued with the factory. During the creation process it is required to set up several token parameters which control the NFTs parameters and the lifecycle - the NFTs off-chain metadata, minimum prices, reselling timeframes etc. All these data is stored in the `factory.a` table.

-   [create - create token factory](./NFT%20Actions/create.md)
-   [factory.a](./nft-tables.html#factory-a)

## Issuing

The _Asset Manager_ can **issue** a token either to the _Asset Manager_ or to another _Account_.

The NFT issuance requires setting several parameters like the receiving _Account_ and the amount of tokens. The issued NFTs receive a global unique ID and a token factory recorded serial (ordinal) number. The issued token is recorded into the _Account_'s `token.a` table. The **issue** action reads and updates the data in the `factory.a` table.

-   [issue - issue tokens with token factory](./NFT%20Actions/issue.md)
-   [factory.a](./nft-tables.html#factory-a)
-   [token.a](./nft-tables.html#token-a)

## Transferring

The token _Owner_ can **transfer** tokens to another _Account_.

An NFT _Owner_ can **transfer** their tokens to another _Account_. If the _Account_ is listed on the `conditionless_receivers` array of the token factory, no transfer checks are done. Otherwise the action is checked against the trading window and lock time limitations. The tables affected are `token.a` scoped to the sender and receiver accounts. The `factory.a` is read to obtain limitations.

-   [transfer - hand tokens over to another user](./NFT%20Actions/transfer.md)
-   [token.a](./nft-tables.html#token-a)

## Selling

The token _Owner_ can **resell** tokens.

An NFT _Owner_ can **resell** their tokens on the resale marketplace specifying the desirable price. A resale promoter fee can be specified, the resale promoter will receive a fraction of the received funds. This action is a subject to the trading window, minimal resale price and the lockup checks. The token ownership is verified using the `token.a` table. The resale marketplace table is `resale.a`.

-   [resell - place tokens for sale on resell marketplace](./NFT%20Actions/resell.md)
-   [token.a](./nft-tables.html#token-a)
-   [resale.a](./nft-tables.html#resale-a)

## Buying

An _Account_ can **buy** a token ownership.

A blockchain _Account_ can **buy** a token from the resale marketplace. This action is a subject to the trading window checks. The global and the token factory specific resale shares as well as the resale promoter are dealt with when the paid funds are transferred from the buer to the seller. The token is deduced from the _Seller_'s `token.a` and added to the _Buyer_'s `token.a`. The `factory.a` and `resale.a` are read to obtain the tradeable window, promoter and the shares info.

-   [buy - purchase token on resale marketplace](./NFT%20Actions/buy.md)
-   [factory.a](./nft-tables.html#factory-a)
-   [token.a](./nft-tables.html#token-a)
-   [resale.a](./nft-tables.html#resale-a)

## Cancelling resell

The token _Owner_ can **cancelresell** tokens.

This action is only removes the token from the resale marketplace. The resale marketplace table is `resale.a`.

-   [cancelresell - cancel token resell](./NFT%20Actions/cancelresell.md)
-   [resale.a](./nft-tables.html#resale-a)

## Burning

The token _Owner_ can **burn** tokens.

An NFT _Owner_ can execute the **burn** action which removes the token from the resale marketplace (`resale.a`), removes the token from the _Owner_ account (`token.a`) and updates the token factory `existing_tokens_no` field (`factory.a`).

-   [burn - erase tokens from owners and token factories](./NFT%20Actions/burn.md)
-   [factory.a](./nft-tables.html#factory-a)
-   [token.a](./nft-tables.html#token-a)
-   [resale.a](./nft-tables.html#resale-a)

## NFT Service Use Cases

## Recalling

The _Asset Manager_ can **recall** tokens from an _Account_ in case of fraudulent action or erroneous issue.

During the recall time window the _Asset Manager_ can recall tokens from an _Account_ in case of fraudulent action or erroneous issue or other cases that require tokens ownership be returned to the _Asset Manager_. If the token being recalled has entered the resell marketplace, the reselling of such token is canceled. The **recall** action affects `factory.a`, `resale.a` and `token.a` tables.

-   [recall - cancel resell, return tokens to factory manager](./NFT%20Actions/recall.md)
-   [factory.a](./nft-tables.html#factory-a)
-   [token.a](./nft-tables.html#token-a)
-   [resale.a](./nft-tables.html#resale-a)

## Authorizing Another Minter

The _Asset Manager_ or an _Authorized Minter_ can authorize another _Minter_ to issue tokens with a token factory with the **authminter** action.

Initially the _Asset Manager_ can delegate their ability to issue NFTs to some other account _Authorized Minter_ limited to issue up to the quantity of tokens. An _Authorized Minter_ can re-delegate a part of their quantity to another _Authorized Minter_. The `factory.a` table is read and `authmintr.a` table is modified during this action.

-   [authminter - authorize an account to be able to mint tokens](./NFT%20Actions/authminter.md)
-   [factory.a](./nft-tables.html#factory-a)
-   [authmintr.a](./nft-tables.html#authmintrs-a)

## Controlling Token Factory Lifecycle

The _Asset Manager_ can stop issuing with or decommission a token factory.

The **setstat** action lets the _Asset Manager_ to control the lifecycle of the token factory. Only the `factory.a` table is involved.

-   [setstat - set token factory state](./NFT%20Actions/setstatus.md)
-   [factory.a](./nft-tables.html#factory-a)

## Updating the Token Factory Metadata

The _Asset Manager_ can update the token factory metadata.

The **setmeta** action lets the _Asset Manager_ to set the token factory metadata updating the `factory.a` table.

-   [setmeta - set token factory metadata uri and hash](./NFT%20Actions/setmeta.md)
-   [factory.a](./nft-tables.html#factory-a)

## Setting the conditionless receivers

The _Asset Manager_ can set the token factory conditionless receivers.

The **setconrecv** action allows the _Asset Manager_ to set the token factory conditional receivers - the accounts that can receive NFTs without checking for mintable window, lockup and other limitations. The action updats the `factory.a` table.

-   [setconrecv - set conditionless receivers](./NFT%20Actions/setconrecv.md)
-   [factory.a](./nft-tables.html#factory-a)
