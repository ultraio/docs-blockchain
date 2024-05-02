---
title: 'Subscriptions'
deploy: ['staging', 'mainnet']
order: 5
---

# Subscriptions

## `uniqFactories`

Transition to uniqFactorySnapshots for improved data management. This method will be phased out in future updates.

##### Description

Subscribes to updates on Uniq Factories, providing a mechanism for real-time monitoring and data synchronization based on specified criteria.

##### Response

Returns a [`UniqFactory!`](types.md#uniqfactory)

##### Arguments

| Name                                                | Description                                                                                                                   |
|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| `assetManager` - [`WalletId`](types.md#walletid) | Optional filter to narrow down factories by their associated asset manager, enhancing focus and relevance of the data stream. |

#### Example

##### Query

``` js
subscription UniqFactories($assetManager: WalletId) {
  uniqFactories(assetManager: $assetManager) {
    accountMintingLimit
    assetCreator
    assetManager
    authorizedMinters {
      quantity
      walletId
    }
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
    firsthandPurchases {
      groupRestriction {
        excludes
        includes
      }
      id
      option {
        factories {
          count
          id
          strategy
        }
        transferUniqsReceiver
      }
      price {
        amount
        currency {
          code
          symbol
        }
      }
      promoterBasisPoints
      purchaseLimit
      purchaseWindow {
        endDate
        startDate
      }
      purchasedUniqs
      saleShares {
        basisPoints
        receiver
      }
      uosPayment
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
      "authorizedMinters": [UniqFactoryAuthorizedMinter],
      "conditionlessReceivers": [
        "aa1aa2aa3ag4"
      ],
      "defaultUniqMetadata": UniqMetadata,
      "firsthandPurchases": [
        UniqFactoryFirsthandPurchase
      ],
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

## `uniqFactorySnapshots`

##### Description

Engages with Uniq Factory snapshots, offering an advanced model for tracking changes and state transitions within factories, powered by stream positions and optional cursors for continuity.

##### Response

Returns a [`UniqFactorySnapshot!`](types.md#uniqfactorysnapshot)

##### Arguments

| Name                                                                                 | Description                                                                                        |
|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| `cursor` - [`StreamCursor`](types.md#streamcursor)                                | An optional parameter to resume snapshot streaming, enhancing data recovery and stream management. |
| `positionStrategy` - [`StreamPositionStrategy!`](types.md#streampositionstrategy) | Determines the starting point for snapshot updates, ensuring data relevance and stream continuity. |

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
      authorizedMinters {
        quantity
        walletId
      }
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
      firsthandPurchases {
        groupRestriction {
          excludes
          includes
        }
        id
        option {
          factories {
            count
            id
            strategy
          }
          transferUniqsReceiver
        }
        price {
          amount
          currency {
            code
            symbol
          }
        }
        promoterBasisPoints
        purchaseLimit
        purchaseWindow {
          endDate
          startDate
        }
        purchasedUniqs
        saleShares {
          basisPoints
          receiver
        }
        uosPayment
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

## `uniqSnapshots`

##### Description

Initiates a subscription to Uniq snapshots, offering a modern framework for observing Uniq state changes and updates, supported by strategic stream positioning and cursor-based continuity.

##### Response

Returns a [`UniqSnapshot!`](types.md#uniqsnapshot)

##### Arguments

| Name                                                                                 | Description                                                                                                      |
|--------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `cursor` - [`StreamCursor`](types.md#streamcursor)                                | Facilitates the resumption of snapshot updates, promoting efficient data streaming and enhanced user experience. |
| `positionStrategy` - [`StreamPositionStrategy!`](types.md#streampositionstrategy) | Sets the framework for initiating snapshot updates, ensuring alignment with user needs and system capabilities.  |

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

## `uniqsOfFactory`

Adopt uniqSnapshots for enhanced state tracking and real-time updates. This method is slated for discontinuation.

##### Description

Provides a subscription service for tracking Uniqs associated with a specific factory, leveraging serial number ranges and ID filters for targeted data retrieval.

##### Response

Returns a [`Uniq!`](types.md#uniq)

##### Arguments

| Name                                                                       | Description                                                                                                                |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| `factoryId` - [`BigInt!`](types.md#bigint)                              | Identifies the factory of interest, centralizing the focus of the subscription on its associated Uniqs.                    |
| `ids` - [`[BigInt!]`](types.md#bigint)                                  | Optional list of specific Uniq IDs for filtering, enabling targeted tracking within the factory's scope.                   |
| `serialRange` - [`UniqSerialRangeInput`](types.md#uniqserialrangeinput) | Optional range filter for focusing on Uniqs within specific serial number boundaries, adding precision to the data stream. |

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
      authorizedMinters {
        quantity
        walletId
      }
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
      firsthandPurchases {
        groupRestriction {
          excludes
          includes
        }
        id
        option {
          factories {
            count
            id
            strategy
          }
          transferUniqsReceiver
        }
        price {
          amount
          currency {
            code
            symbol
          }
        }
        promoterBasisPoints
        purchaseLimit
        purchaseWindow {
          endDate
          startDate
        }
        purchasedUniqs
        saleShares {
          basisPoints
          receiver
        }
        uosPayment
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

## `uniqsOfWallet`

Shift to uniqSnapshots for a streamlined and updated approach to Uniq monitoring. This subscription will be phased out.

##### Description

Facilitates user-centric tracking of Uniqs, catering to individual ownership patterns and preferences with optional filters for ID and factory association.

##### Response

Returns a [`Uniq!`](types.md#uniq)

##### Arguments

| Name                                             | Description                                                                                                         |
|--------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `factoryIds` - [`[BigInt!]`](types.md#bigint) | Optional filter for factory association, allowing users to monitor Uniqs from selected production sources.          |
| `ids` - [`[BigInt!]`](types.md#bigint)        | Optional list of Uniq IDs for refined tracking, aligning the data stream with user-specific interests and holdings. |
| `walletId` - [`WalletId!`](types.md#walletid) | The wallet ID of the user, providing a personalized data stream focused on owned Uniqs.                             |

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
      authorizedMinters {
        quantity
        walletId
      }
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
      firsthandPurchases {
        groupRestriction {
          excludes
          includes
        }
        id
        option {
          factories {
            count
            id
            strategy
          }
          transferUniqsReceiver
        }
        price {
          amount
          currency {
            code
            symbol
          }
        }
        promoterBasisPoints
        purchaseLimit
        purchaseWindow {
          endDate
          startDate
        }
        purchasedUniqs
        saleShares {
          basisPoints
          receiver
        }
        uosPayment
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

