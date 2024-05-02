---
title: 'Queries'
deploy: ['staging', 'mainnet']
order: 4
---

# Queries

## `uniq`

##### Description

Provides direct access to detailed information about a specific Uniq using its unique blockchain ID.

##### Response

Returns a [`Uniq!`](types.md#uniq)

##### Arguments

| Name                                   | Description                                                                                           |
|----------------------------------------|-------------------------------------------------------------------------------------------------------|
| `id` - [`BigInt!`](types.md#bigint) | The blockchain ID of the Uniq, serving as a primary key to fetch detailed information about the Uniq. |

#### Example

##### Query

``` js
query Uniq($id: BigInt!) {
  uniq(id: $id) {
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
{"id": 987}
```

##### Response

``` js
{
  "data": {
    "uniq": {
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

## `uniqFactories`

##### Description

Retrieves a list of Uniq factories, optionally filtered by asset manager, and applies pagination for result management. Returns all factories if no specific filters are used.

##### Response

Returns a [`UniqFactoryList!`](types.md#uniqfactorylist)

##### Arguments

| Name                                                            | Description                                                                                                            |
|-----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `assetManager` - [`WalletId`](types.md#walletid)             | Optional filter to narrow down factories by their associated asset manager, aiding in targeted queries.                |
| `pagination` - [`PaginationInput`](types.md#paginationinput) | Pagination settings to control the volume and segmentation of returned results, enhancing usability and accessibility. |

#### Example

##### Query

``` js
query UniqFactories(
  $assetManager: WalletId,
  $pagination: PaginationInput
) {
  uniqFactories(
    assetManager: $assetManager,
    pagination: $pagination
  ) {
    data {
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
    pagination {
      limit
      skip
    }
    totalCount
  }
}
```

##### Variables

``` js
{
  "assetManager": "aa1aa2aa3ag4",
  "pagination": PaginationInput
}
```

##### Response

``` js
{
  "data": {
    "uniqFactories": {
      "data": [UniqFactory],
      "pagination": Pagination,
      "totalCount": 123
    }
  }
}
```

## `uniqFactory`

##### Description

Fetches a specific Uniq factory by its blockchain ID, providing detailed information about its configuration, operations, and associated default Uniqs metadata.

##### Response

Returns a [`UniqFactory!`](types.md#uniqfactory)

##### Arguments

| Name                                   | Description                                                                        |
|----------------------------------------|------------------------------------------------------------------------------------|
| `id` - [`BigInt!`](types.md#bigint) | The blockchain ID of the desired Uniq factory, serving as the query's focal point. |

#### Example

##### Query

``` js
query UniqFactory($id: BigInt!) {
  uniqFactory(id: $id) {
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
{"id": 987}
```

##### Response

``` js
{
  "data": {
    "uniqFactory": {
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

## `uniqGlobalShares`

##### Response

Returns [`[UniqSaleShare!]!`](types.md#uniqsaleshare)

#### Example

##### Query

``` js
query UniqGlobalShares {
  uniqGlobalShares {
    basisPoints
    receiver
  }
}
```

##### Response

``` js
{
  "data": {
    "uniqGlobalShares": [
      {
        "basisPoints": 987,
        "receiver": "aa1aa2aa3ag4"
      }
    ]
  }
}
```



## `uniqsOfFactory`

##### Description

Lists Uniqs associated with a particular factory, allowing for advanced filtering based on serial numbers, IDs, resale status, and incorporates pagination for comprehensive result exploration.

##### Response

Returns a [`UniqList!`](types.md#uniqlist)

##### Arguments

| Name                                                                       | Description                                                                                                                 |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| `factoryId` - [`BigInt!`](types.md#bigint)                              | The blockchain ID of the factory, specifying the source of the Uniqs to be retrieved.                                       |
| `ids` - [`[BigInt!]`](types.md#bigint)                                  | Optional list of specific Uniq IDs for targeted retrieval, offering precise control over the query output.                  |
| `pagination` - [`PaginationInput`](types.md#paginationinput)            | Pagination settings, structuring the query results into segmented, navigable data sets for user convenience.                |
| `resale` - [`Boolean`](types.md#boolean)                                | Optional filter for Uniq resale status, distinguishing between items available for sale and those not on the market.        |
| `serialRange` - [`UniqSerialRangeInput`](types.md#uniqserialrangeinput) | Optional serial number range filter, refining the selection of Uniqs based on their sequence within the factory's issuance. |

#### Example

##### Query

``` js
query UniqsOfFactory(
  $factoryId: BigInt!,
  $ids: [BigInt!],
  $pagination: PaginationInput,
  $resale: Boolean,
  $serialRange: UniqSerialRangeInput
) {
  uniqsOfFactory(
    factoryId: $factoryId,
    ids: $ids,
    pagination: $pagination,
    resale: $resale,
    serialRange: $serialRange
  ) {
    data {
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
    pagination {
      limit
      skip
    }
    totalCount
  }
}
```

##### Variables

``` js
{
  "factoryId": 987,
  "ids": [987],
  "pagination": PaginationInput,
  "resale": true,
  "serialRange": UniqSerialRangeInput
}
```

##### Response

``` js
{
  "data": {
    "uniqsOfFactory": {
      "data": [Uniq],
      "pagination": Pagination,
      "totalCount": 987
    }
  }
}
```

## `uniqsOfWallet`

##### Description

Enables querying user-specific Uniqs, offering personalized insight into Uniq ownership and management based on wallet ID.

##### Response

Returns a [`UniqList!`](types.md#uniqlist)

##### Arguments

| Name                                                            | Description                                                                                                                    |
|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `factoryIds` - [`[BigInt!]`](types.md#bigint)                | Optional: Specifies a list of Uniq Factory IDs to refine the query results, focusing on Uniqs from specific factories.         |
| `ids` - [`[BigInt!]`](types.md#bigint)                       | Optional: Specifies a list of Uniq IDs to filter the query results. Useful for identifying specific Uniqs owned by the user.   |
| `pagination` - [`PaginationInput`](types.md#paginationinput) | Applies pagination to manage the data volume, facilitating efficient data retrieval and display.                               |
| `resale` - [`Boolean`](types.md#boolean)                     | Optional: Filters the Uniqs based on their resale status, allowing users to segregate Uniqs that are currently on sale or not. |
| `walletId` - [`WalletId!`](types.md#walletid)                | The unique identifier for the user's wallet, essential for retrieving Uniqs associated with this particular user.              |

#### Example

##### Query

``` js
query UniqsOfWallet(
  $factoryIds: [BigInt!],
  $ids: [BigInt!],
  $pagination: PaginationInput,
  $resale: Boolean,
  $walletId: WalletId!
) {
  uniqsOfWallet(
    factoryIds: $factoryIds,
    ids: $ids,
    pagination: $pagination,
    resale: $resale,
    walletId: $walletId
  ) {
    data {
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
    pagination {
      limit
      skip
    }
    totalCount
  }
}
```

##### Variables

``` js
{
  "factoryIds": [987],
  "ids": [987],
  "pagination": PaginationInput,
  "resale": true,
  "walletId": "aa1aa2aa3ag4"
}
```

##### Response

``` js
{
  "data": {
    "uniqsOfWallet": {
      "data": [Uniq],
      "pagination": Pagination,
      "totalCount": 987
    }
  }
}
```

