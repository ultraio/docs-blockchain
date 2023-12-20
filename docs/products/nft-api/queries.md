---
title: 'Queries'
deploy: ['staging', 'mainnet']
order: 4
---

# Queries

## `uniq`

##### Description

This query is used to retrieve information about a uniq by its id.

##### Response

Returns a [`Uniq!`](types.md#uniq)

##### Arguments

| Name                                   | Description              |
|----------------------------------------|--------------------------|
| `id` - [`BigInt!`](types.md#bigint) | On chain id of the uniq. |

#### Example

##### Query

``` js
query Uniq($id: BigInt!) {
  uniq(id: $id) {
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

[Queries](#group-Operations-Queries)

## `uniqFactories`

##### Description

This query is used to find information about uniq factories. If no
filter applied, will return all existing factories.

##### Response

Returns a [`UniqFactoryList!`](types.md#uniqfactorylist)

##### Arguments

| Name                                                            | Description                                                                                                    |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `assetManager` - [`WalletId`](types.md#walletid)             | Filter to help you to retrieve only factories related to a specific asset manager. For example 'ultra.nft.ft'. |
| `pagination` - [`PaginationInput`](types.md#paginationinput) | Pagination to apply. Please refer to pagination section.                                                       |

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
      "totalCount": 987
    }
  }
}
```

[Queries](#group-Operations-Queries)

## `uniqFactory`

##### Description

This query is used to find a factory based on their ID.

##### Response

Returns a [`UniqFactory!`](types.md#uniqfactory)

##### Arguments

| Name                                   | Description                       |
|----------------------------------------|-----------------------------------|
| `id` - [`BigInt!`](types.md#bigint) | On chain id of the uniq factory . |

#### Example

##### Query

``` js
query UniqFactory($id: BigInt!) {
  uniqFactory(id: $id) {
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

[Queries](#group-Operations-Queries)

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
        "basisPoints": 123,
        "receiver": "aa1aa2aa3ag4"
      }
    ]
  }
}
```

[Queries](#group-Operations-Queries)

## `uniqsOfFactory`

##### Description

This query is used to find uniqs that are associated with a factory
based on their ID.

##### Response

Returns a [`UniqList!`](types.md#uniqlist)

##### Arguments

| Name                                                                       | Description                                                                                                    |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `factoryId` - [`BigInt!`](types.md#bigint)                              | On chain id of the factory.                                                                                    |
| `ids` - [`[BigInt!]`](types.md#bigint)                                  | Filter from a list of uniq id. It can be used to know with a list of uniq witch one is related to the factory. |
| `pagination` - [`PaginationInput`](types.md#paginationinput)            | Pagination to apply. Please refer to pagination section.                                                       |
| `serialRange` - [`UniqSerialRangeInput`](types.md#uniqserialrangeinput) | Filter by a range of serial number.                                                                            |

#### Example

##### Query

``` js
query UniqsOfFactory(
  $factoryId: BigInt!,
  $ids: [BigInt!],
  $pagination: PaginationInput,
  $serialRange: UniqSerialRangeInput
) {
  uniqsOfFactory(
    factoryId: $factoryId,
    ids: $ids,
    pagination: $pagination,
    serialRange: $serialRange
  ) {
    data {
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
      "totalCount": 123
    }
  }
}
```

[Queries](#group-Operations-Queries)

## `uniqsOfWallet`

##### Description

This query is used to recover user-specific uniqs.

##### Response

Returns a [`UniqList!`](types.md#uniqlist)

##### Arguments

| Name                                                            | Description                                                                                               |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| `factoryIds` - [`[BigInt!]`](types.md#bigint)                | Filter from a list of uniq factory id.                                                                    |
| `ids` - [`[BigInt!]`](types.md#bigint)                       | Filter from a list of uniq id. It can be used to know with a list of uniq witch one is owned by the user. |
| `pagination` - [`PaginationInput`](types.md#paginationinput) | Pagination to apply. Please refer to pagination section.                                                  |
| `walletId` - [`WalletId!`](types.md#walletid)                | Wallet id of the user.                                                                                    |

#### Example

##### Query

``` js
query UniqsOfWallet(
  $factoryIds: [BigInt!],
  $ids: [BigInt!],
  $pagination: PaginationInput,
  $walletId: WalletId!
) {
  uniqsOfWallet(
    factoryIds: $factoryIds,
    ids: $ids,
    pagination: $pagination,
    walletId: $walletId
  ) {
    data {
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
      "totalCount": 123
    }
  }
}
```

