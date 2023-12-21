---
title: 'Subscriptions'
deploy: ['staging', 'mainnet']
order: 5
---

# Subscriptions

## `uniqFactories`

Use uniqFactorySnapshots instead. This subscription will be removed in a
next version.

##### Description

This subscription is used to find information about uniq factories. If
no filter is applied, it will return all existing factories.

##### Response

Returns a [`UniqFactory!`](types.md#uniqfactory)

##### Arguments

| Name                                                | Description                                                                                                    |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `assetManager` - [`WalletId`](types.md#walletid) | Filter to help you to retrieve only factories related to a specific asset manager. For example 'ultra.nft.ft'. |

#### Example

##### Query

``` js
subscription UniqFactories($assetManager: WalletId) {
  uniqFactories(assetManager: $assetManager) {
    accountMintingLimit
    assetCreator
    assetManager
    conditionlessReceivers
    defaultUniqMetadata {
      cachedSource {
        contentType
        integrity {
          hash
          type
        }
        uri
      }
      content {
        attributes {
          descriptor {
            description
            dynamic
            name
            type
          }
          key
          value
        }
        description
        dynamicAttributes {
          contentType
          uris
        }
        dynamicResources {
          key
          value {
            contentType
            uris
          }
        }
        medias {
          gallery {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
          hero {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
          product {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
          square {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
        }
        name
        properties
        resources {
          key
          value {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
        }
        subName
      }
      source {
        contentType
        integrity {
          hash
          type
        }
        uri
      }
      status
    }
    id
    metadata {
      cachedSource {
        contentType
        integrity {
          hash
          type
        }
        uri
      }
      content {
        attributes {
          key
          value {
            description
            dynamic
            name
            type
          }
        }
        description
        medias {
          gallery {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
          hero {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
          product {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
          square {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
        }
        name
        properties
        resources {
          key
          value {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
        }
        subName
      }
      locked
      source {
        contentType
        integrity {
          hash
          type
        }
        uri
      }
      status
    }
    mintableWindow {
      endDate
      startDate
    }
    resale {
      minimumPrice {
        amount
        currency {
          code
          symbol
        }
      }
      shares {
        basisPoints
        receiver
      }
    }
    status
    stock {
      authorized
      existing
      maxMintable
      mintable
      minted
    }
    tradingWindow {
      endDate
      startDate
    }
    transferWindow {
      endDate
      startDate
    }
    type
  }
}
```

##### Variables

``` js
{"assetManager": "aa1aa2aa3ag4"}
```

##### Response

``` js
{
  "data": {
    "uniqFactories": {
      "accountMintingLimit": 987,
      "assetCreator": "aa1aa2aa3ag4",
      "assetManager": "aa1aa2aa3ag4",
      "conditionlessReceivers": [
        "aa1aa2aa3ag4"
      ],
      "defaultUniqMetadata": UniqMetadata,
      "id": 987,
      "metadata": UniqFactoryMetadata,
      "mintableWindow": UniqFactoryMintableWindow,
      "resale": UniqFactoryResale,
      "status": "ACTIVE",
      "stock": UniqFactoryStock,
      "tradingWindow": UniqFactoryTradingWindow,
      "transferWindow": UniqFactoryTransferWindow,
      "type": "COLLECTIBLE"
    }
  }
}
```

[Subscriptions](#group-Operations-Subscriptions)

## `uniqFactorySnapshots`

##### Description

Subscribes on uniq factory snapshots. A snapshot is fired when a state
change occurs. Provides efficient state synchronization feature based on
cursors with position reset strategy.

##### Response

Returns a [`UniqFactorySnapshot!`](types.md#uniqfactorysnapshot)

##### Arguments

| Name                                                                                 | Description                                                                                                                               |
|--------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `cursor` - [`StreamCursor`](types.md#streamcursor)                                | The optional stream cursor to resume snapshots position after. If the given cursor is unreachable, the given positionStrategy is applied. |
| `positionStrategy` - [`StreamPositionStrategy!`](types.md#streampositionstrategy) | The stream position strategy to apply if no cursor provided or the given cursor is unreachable.                                           |

#### Example

##### Query

``` js
subscription UniqFactorySnapshots(
  $cursor: StreamCursor,
  $positionStrategy: StreamPositionStrategy!
) {
  uniqFactorySnapshots(
    cursor: $cursor,
    positionStrategy: $positionStrategy
  ) {
    cursor
    id
    position
    state {
      accountMintingLimit
      assetCreator
      assetManager
      conditionlessReceivers
      defaultUniqMetadata {
        cachedSource {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        content {
          attributes {
            descriptor {
              description
              dynamic
              name
              type
            }
            key
            value
          }
          description
          dynamicAttributes {
            contentType
            uris
          }
          dynamicResources {
            key
            value {
              contentType
              uris
            }
          }
          medias {
            gallery {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            hero {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            product {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            square {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          name
          properties
          resources {
            key
            value {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          subName
        }
        source {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        status
      }
      id
      metadata {
        cachedSource {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        content {
          attributes {
            key
            value {
              description
              dynamic
              name
              type
            }
          }
          description
          medias {
            gallery {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            hero {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            product {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            square {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          name
          properties
          resources {
            key
            value {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          subName
        }
        locked
        source {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        status
      }
      mintableWindow {
        endDate
        startDate
      }
      resale {
        minimumPrice {
          amount
          currency {
            code
            symbol
          }
        }
        shares {
          basisPoints
          receiver
        }
      }
      status
      stock {
        authorized
        existing
        maxMintable
        mintable
        minted
      }
      tradingWindow {
        endDate
        startDate
      }
      transferWindow {
        endDate
        startDate
      }
      type
    }
  }
}
```

##### Variables

``` js
{
  "cursor": "0",
  "positionStrategy": "EARLIEST"
}
```

##### Response

``` js
{
  "data": {
    "uniqFactorySnapshots": {
      "cursor": "0",
      "id": 987,
      "position": "CURSOR",
      "state": UniqFactory
    }
  }
}
```

[Subscriptions](#group-Operations-Subscriptions)

## `uniqSnapshots`

##### Description

Subscribes on uniq snapshots. A snapshot is fired when a state change
occurs. Provides efficient state synchronization feature based on
cursors with position reset strategy.

##### Response

Returns a [`UniqSnapshot!`](types.md#uniqsnapshot)

##### Arguments

| Name                                                                                 | Description                                                                                                                               |
|--------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `cursor` - [`StreamCursor`](types.md#streamcursor)                                | The optional stream cursor to resume snapshots position after. If the given cursor is unreachable, the given positionStrategy is applied. |
| `positionStrategy` - [`StreamPositionStrategy!`](types.md#streampositionstrategy) | The stream position strategy to apply if no cursor provided or the given cursor is unreachable.                                           |

#### Example

##### Query

``` js
subscription UniqSnapshots(
  $cursor: StreamCursor,
  $positionStrategy: StreamPositionStrategy!
) {
  uniqSnapshots(
    cursor: $cursor,
    positionStrategy: $positionStrategy
  ) {
    cursor
    id
    position
    state {
      factory {
        assetCreator
        assetManager
        id
        maxMintableUniqs
        mintableWindow {
          endDate
          startDate
        }
        resale {
          minimumPrice {
            amount
            currency {
              code
              symbol
            }
          }
          shares {
            basisPoints
            receiver
          }
        }
        tradingWindow {
          endDate
          startDate
        }
        transferWindow {
          endDate
          startDate
        }
        type
      }
      id
      metadata {
        cachedSource {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        content {
          attributes {
            descriptor {
              description
              dynamic
              name
              type
            }
            key
            value
          }
          description
          dynamicAttributes {
            contentType
            uris
          }
          dynamicResources {
            key
            value {
              contentType
              uris
            }
          }
          medias {
            gallery {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            hero {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            product {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            square {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          name
          properties
          resources {
            key
            value {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          subName
        }
        source {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        status
      }
      mintDate
      owner
      resale {
        onSaleDate
        price {
          amount
          currency {
            code
            symbol
          }
        }
        promoterBasisPoints
        shares {
          basisPoints
          receiver
        }
      }
      serialNumber
      tradingPeriod {
        duration
        endDate
        startDate
      }
      transferPeriod {
        duration
        endDate
        startDate
      }
      type
    }
  }
}
```

##### Variables

``` js
{
  "cursor": "0",
  "positionStrategy": "EARLIEST"
}
```

##### Response

``` js
{
  "data": {
    "uniqSnapshots": {
      "cursor": "0",
      "id": 987,
      "position": "CURSOR",
      "state": UniqState
    }
  }
}
```

[Subscriptions](#group-Operations-Subscriptions)

## `uniqsOfFactory`

Use uniqSnapshots instead. This subscription will be removed in a next
version.

##### Description

This subscription is used to find uniqs that are associated with a
factory based on their ID.

##### Response

Returns a [`Uniq!`](types.md#uniq)

##### Arguments

| Name                                                                       | Description                                                                                                    |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `factoryId` - [`BigInt!`](types.md#bigint)                              | On chain id of the factory.                                                                                    |
| `ids` - [`[BigInt!]`](types.md#bigint)                                  | Filter from a list of uniq id. It can be used to know with a list of uniq witch one is related to the factory. |
| `serialRange` - [`UniqSerialRangeInput`](types.md#uniqserialrangeinput) | Filter from a range of serial number.                                                                          |

#### Example

##### Query

``` js
subscription UniqsOfFactory(
  $factoryId: BigInt!,
  $ids: [BigInt!],
  $serialRange: UniqSerialRangeInput
) {
  uniqsOfFactory(
    factoryId: $factoryId,
    ids: $ids,
    serialRange: $serialRange
  ) {
    factory {
      accountMintingLimit
      assetCreator
      assetManager
      conditionlessReceivers
      defaultUniqMetadata {
        cachedSource {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        content {
          attributes {
            descriptor {
              description
              dynamic
              name
              type
            }
            key
            value
          }
          description
          dynamicAttributes {
            contentType
            uris
          }
          dynamicResources {
            key
            value {
              contentType
              uris
            }
          }
          medias {
            gallery {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            hero {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            product {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            square {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          name
          properties
          resources {
            key
            value {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          subName
        }
        source {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        status
      }
      id
      metadata {
        cachedSource {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        content {
          attributes {
            key
            value {
              description
              dynamic
              name
              type
            }
          }
          description
          medias {
            gallery {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            hero {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            product {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            square {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          name
          properties
          resources {
            key
            value {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          subName
        }
        locked
        source {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        status
      }
      mintableWindow {
        endDate
        startDate
      }
      resale {
        minimumPrice {
          amount
          currency {
            code
            symbol
          }
        }
        shares {
          basisPoints
          receiver
        }
      }
      status
      stock {
        authorized
        existing
        maxMintable
        mintable
        minted
      }
      tradingWindow {
        endDate
        startDate
      }
      transferWindow {
        endDate
        startDate
      }
      type
    }
    id
    metadata {
      cachedSource {
        contentType
        integrity {
          hash
          type
        }
        uri
      }
      content {
        attributes {
          descriptor {
            description
            dynamic
            name
            type
          }
          key
          value
        }
        description
        dynamicAttributes {
          contentType
          uris
        }
        dynamicResources {
          key
          value {
            contentType
            uris
          }
        }
        medias {
          gallery {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
          hero {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
          product {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
          square {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
        }
        name
        properties
        resources {
          key
          value {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
        }
        subName
      }
      source {
        contentType
        integrity {
          hash
          type
        }
        uri
      }
      status
    }
    mintDate
    owner
    resale {
      onSaleDate
      price {
        amount
        currency {
          code
          symbol
        }
      }
      promoterBasisPoints
      shares {
        basisPoints
        receiver
      }
    }
    serialNumber
    tradingPeriod {
      duration
      endDate
      startDate
    }
    transferPeriod {
      duration
      endDate
      startDate
    }
    type
  }
}
```

##### Variables

``` js
{
  "factoryId": 987,
  "ids": [987],
  "serialRange": UniqSerialRangeInput
}
```

##### Response

``` js
{
  "data": {
    "uniqsOfFactory": {
      "factory": UniqFactory,
      "id": 987,
      "metadata": UniqMetadata,
      "mintDate": "Thu Jul 13 2023 13:27:11 GMT+0200",
      "owner": "aa1aa2aa3ag4",
      "resale": UniqResale,
      "serialNumber": 987,
      "tradingPeriod": UniqTradingPeriod,
      "transferPeriod": UniqTransferPeriod,
      "type": "COLLECTIBLE"
    }
  }
}
```

[Subscriptions](#group-Operations-Subscriptions)

## `uniqsOfWallet`

Use uniqSnapshots instead. This subscription will be removed in a next
version.

##### Description

This subscription is used to recover user-specific uniqs.

##### Response

Returns a [`Uniq!`](types.md#uniq)

##### Arguments

| Name                                             | Description                                                                                                 |
|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| `factoryIds` - [`[BigInt!]`](types.md#bigint) | Filter from a list of uniq factory id.                                                                      |
| `ids` - [`[BigInt!]`](types.md#bigint)        | Filter from a list of uniq id. Can be used to know with a list of uniq witch one is related to the factory. |
| `walletId` - [`WalletId!`](types.md#walletid) | Wallet id of the user.                                                                                      |

#### Example

##### Query

``` js
subscription UniqsOfWallet(
  $factoryIds: [BigInt!],
  $ids: [BigInt!],
  $walletId: WalletId!
) {
  uniqsOfWallet(
    factoryIds: $factoryIds,
    ids: $ids,
    walletId: $walletId
  ) {
    factory {
      accountMintingLimit
      assetCreator
      assetManager
      conditionlessReceivers
      defaultUniqMetadata {
        cachedSource {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        content {
          attributes {
            descriptor {
              description
              dynamic
              name
              type
            }
            key
            value
          }
          description
          dynamicAttributes {
            contentType
            uris
          }
          dynamicResources {
            key
            value {
              contentType
              uris
            }
          }
          medias {
            gallery {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            hero {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            product {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            square {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          name
          properties
          resources {
            key
            value {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          subName
        }
        source {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        status
      }
      id
      metadata {
        cachedSource {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        content {
          attributes {
            key
            value {
              description
              dynamic
              name
              type
            }
          }
          description
          medias {
            gallery {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            hero {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            product {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
            square {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          name
          properties
          resources {
            key
            value {
              contentType
              integrity {
                hash
                type
              }
              uri
            }
          }
          subName
        }
        locked
        source {
          contentType
          integrity {
            hash
            type
          }
          uri
        }
        status
      }
      mintableWindow {
        endDate
        startDate
      }
      resale {
        minimumPrice {
          amount
          currency {
            code
            symbol
          }
        }
        shares {
          basisPoints
          receiver
        }
      }
      status
      stock {
        authorized
        existing
        maxMintable
        mintable
        minted
      }
      tradingWindow {
        endDate
        startDate
      }
      transferWindow {
        endDate
        startDate
      }
      type
    }
    id
    metadata {
      cachedSource {
        contentType
        integrity {
          hash
          type
        }
        uri
      }
      content {
        attributes {
          descriptor {
            description
            dynamic
            name
            type
          }
          key
          value
        }
        description
        dynamicAttributes {
          contentType
          uris
        }
        dynamicResources {
          key
          value {
            contentType
            uris
          }
        }
        medias {
          gallery {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
          hero {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
          product {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
          square {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
        }
        name
        properties
        resources {
          key
          value {
            contentType
            integrity {
              hash
              type
            }
            uri
          }
        }
        subName
      }
      source {
        contentType
        integrity {
          hash
          type
        }
        uri
      }
      status
    }
    mintDate
    owner
    resale {
      onSaleDate
      price {
        amount
        currency {
          code
          symbol
        }
      }
      promoterBasisPoints
      shares {
        basisPoints
        receiver
      }
    }
    serialNumber
    tradingPeriod {
      duration
      endDate
      startDate
    }
    transferPeriod {
      duration
      endDate
      startDate
    }
    type
  }
}
```

##### Variables

``` js
{
  "factoryIds": [987],
  "ids": [987],
  "walletId": "aa1aa2aa3ag4"
}
```

##### Response

``` js
{
  "data": {
    "uniqsOfWallet": {
      "factory": UniqFactory,
      "id": 987,
      "metadata": UniqMetadata,
      "mintDate": "Thu Jul 13 2023 13:27:11 GMT+0200",
      "owner": "aa1aa2aa3ag4",
      "resale": UniqResale,
      "serialNumber": 987,
      "tradingPeriod": UniqTradingPeriod,
      "transferPeriod": UniqTransferPeriod,
      "type": "COLLECTIBLE"
    }
  }
}
```

