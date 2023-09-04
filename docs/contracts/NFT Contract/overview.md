---
title: 'NFT Contract Overview'
order: -99
deploy: ['staging', 'mainnet']
---

# NFT Overview

The abbreviation ‘NFT’ stands for Non-Fungible Token which means that NFT is a unit of data stored on a blockchain that can be sold or traded like other tokens. Unlike other tokens all NFTs are unique and one NFT cannot be replaced with another. That is why NFTs are often called `Uniqs`. In this document the NFTs can also be referred to as tokens.

The Ultra's `eosio.nft.ft` smart contract defines a set of data structures (multi index tables, singletons) and a set of blockchain actions to manipulate the data structures. Both the data structures and the actions implement the supported set of NFT Use cases.

## Info

NFT use cases describe what different users can do with NFTs. The text in **bold** represents actions, the text in _italic_ represents blockchain accounts and the `highlighted` text represents the related data structures or data structure elements. Please refer to the action description or data structure overview to obtain more information.

## Token Factory Creation

**PLEASE NOTE:** _Recall and Lockup feature will be disabled by default which means when creating new token factory, action will fail if you put any value for recall window or lockup time. This note will be removed when these features are enabled again._

The _Asset Creator_ and the _Asset Manager_ can **create.b** a token factory.

To issue a token, a token factory should be created first. For this version of `eosio.nft.ft` only _Ultra_ can be the _Asset Creator_ and the _Asset Manager_. A token factory is a set of blockchain data which provides settings for the NFTs issued with the factory. During the creation process it is required to set up several token parameters which control the NFTs parameters and the lifecycle - the NFTs off-chain metadata, minimum prices, reselling timeframes etc. All these data is stored in the `factory.b` table.

-   [create.b - create token factory](./NFT%20Actions/create.b.md)
-   [factory.b](./nft-tables.md#factory-b)

## Issuing

The _Asset Manager_ can **issue.b** a token either to the _Asset Manager_ or to another _Account_.

The NFT issuance requires setting several parameters like the receiving _Account_ and the amount of tokens. The issued NFTs receive a global unique ID and a token factory recorded serial (ordinal) number. The issued token is recorded into the _Account_'s `token.b` table. The **issue.b** action reads and updates the data in the `factory.b` table.

-   [issue.b - issue tokens with token factory](./NFT%20Actions/issue.b.md)
-   [factory.b](./nft-tables.md#factory-b)
-   [token.b](./nft-tables.md#token-b)

## Transferring

The token _Owner_ can **transfer** tokens to another _Account_.

An NFT _Owner_ can **transfer** their tokens to another _Account_. If the _Account_ is listed on the `conditionless_receivers` array of the token factory, no transfer checks are done. Otherwise the action is checked against the trading window and lock time limitations. The tables affected are `token.b` scoped to the sender and receiver accounts. The `factory.b` is read to obtain limitations.

-   [transfer - hand tokens over to another user](./NFT%20Actions/transfer.md)
-   [token.b](./nft-tables.md#token-b)

## Selling

The token _Owner_ can **resell** tokens.

An NFT _Owner_ can **resell** their tokens on the resale marketplace specifying the desirable price. A resale promoter fee can be specified, the resale promoter will receive a fraction of the received funds. This action is a subject to the trading window, minimal resale price and the lockup checks. The token ownership is verified using the `token.b` table. The resale marketplace table is `resale.a`.

-   [resell - place tokens for sale on resell marketplace](./NFT%20Actions/resell.md)
-   [token.b](./nft-tables.md#token-b)
-   [resale.b](./nft-tables.md#resale-a)

## Buying

An _Account_ can **buy** a token ownership.

A blockchain _Account_ can **buy** a token from the resale marketplace. This action is a subject to the trading window checks. The global and the token factory specific resale shares as well as the resale promoter are dealt with when the paid funds are transferred from the buer to the seller. The token is deduced from the _Seller_'s `token.b` and added to the _Buyer_'s `token.b`. The `factory.b` and `resale.a` are read to obtain the tradeable window, promoter and the shares info.

-   [buy - purchase token on resale marketplace](./NFT%20Actions/buy.md)
-   [factory.b](./nft-tables.md#factory-b)
-   [token.b](./nft-tables.md#token-b)
-   [resale.a](./nft-tables.md#resale-a)

## Cancelling resell

The token _Owner_ can **cancelresell** tokens.

This action is only removes the token from the resale marketplace. The resale marketplace table is `resale.a`.

-   [cancelresell - cancel token resell](./NFT%20Actions/cancelresell.md)
-   [resale.a](./nft-tables.md#resale-a)

## Burning

The token _Owner_ can **burn** tokens.

An NFT _Owner_ can execute the **burn** action which removes the token from the resale marketplace (`resale.a`), removes the token from the _Owner_ account (`token.b`) and updates the token factory `existing_tokens_no` field (`factory.b`).

-   [burn - erase tokens from owners and token factories](./NFT%20Actions/burn.md)
-   [factory.b](./nft-tables.md#factory-b)
-   [token.b](./nft-tables.md#token-b)
-   [resale.a](./nft-tables.md#resale-a)

## NFT Service Use Cases

## Recalling

The _Asset Manager_ can **recall** tokens from an _Account_ in case of fraudulent action or erroneous issue.

During the recall time window the _Asset Manager_ can recall tokens from an _Account_ in case of fraudulent action or erroneous issue or other cases that require tokens ownership be returned to the _Asset Manager_. If the token being recalled has entered the resell marketplace, the reselling of such token is canceled. The **recall** action affects `factory.b`, `resale.a` and `token.b` tables.

-   [recall - cancel resell, return tokens to factory manager](./NFT%20Actions/recall.md)
-   [factory.b](./nft-tables.md#factory-b)
-   [token.b](./nft-tables.md#token-b)
-   [resale.a](./nft-tables.md#resale-a)

## Authorizing Another Minter

The _Asset Manager_ or an _Authorized Minter_ can authorize another _Minter_ to issue tokens with a token factory with the **authminter** action.

Initially the _Asset Manager_ can delegate their ability to issue NFTs to some other account _Authorized Minter_ limited to issue up to the quantity of tokens. An _Authorized Minter_ can re-delegate a part of their quantity to another _Authorized Minter_. The `factory.a` table is read and `authmintr.a` table is modified during this action.

-   [authmint.b - authorize an account to be able to mint tokens](./NFT%20Actions/authmint.b.md)
-   [factory.b](./nft-tables.md#factory-b)
-   [authmintr.a](./nft-tables.md#authmintrs-a)

## Controlling Token Factory Lifecycle

The _Asset Manager_ can stop issuing with or decommission a token factory.

The **setstatus** action lets the _Asset Manager_ to control the lifecycle of the token factory. Only the `factory.b` table is involved.

-   [setstatus - set token factory state](./NFT%20Actions/setstatus.md)
-   [factory.b](./nft-tables.md#factory-b)

## Updating the Token Factory Metadata

The _Asset Manager_ can update the token factory metadata.

The **setmeta.b** action lets the _Asset Manager_ to set the token factory metadata updating the `factory.b` table.

-   [setmeta.b - set token factory metadata uri and hash](./NFT%20Actions/setmeta.b.md.md)
-   [factory.b](./nft-tables.md#factory-b)

## Setting the conditionless receivers

The _Asset Manager_ can set the token factory conditionless receivers.

The **setconrecv** action allows the _Asset Manager_ to set the token factory conditional receivers - the accounts that can receive NFTs without checking for mintable window, lockup and other limitations. The action updats the `factory.b` table.

-   [setconrecv - set conditionless receivers](./NFT%20Actions/setconrecv.md)
-   [factory.b](./nft-tables.md#factory-b)

## Adding factory purchase options

The _Asset Manager_ can add the factory first-hand purchase requirements

The **setprchsreq.a** action allows the _Asset Manager_ to set a purchase requirement for the factory which can then be used by any user to purchase a token from the factory directly using **purchase.a** action.

Multiple purchase requirements can be specified for a single factory. In addition to a simple fungible token price (UOS or USD) asset manager can specify the price for an individual purchase option using uniqs from other factories. Those uniqs can be either burnt or transferred to a specified account or simply verify their presence.

-   [setprchsreq.a - set purchase requirement](./NFT%20Actions/setprchsreq.a.md)
-   [delprchsreq.a - delete purchase requirement](./NFT%20Actions/delprchsreq.a.md)
-   [purchase.a - purchase a token](./NFT%20Actions/purchase.a.md)
-   [fctrprchs.a](./nft-tables.md#fctrprchs-a)