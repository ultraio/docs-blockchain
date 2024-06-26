---
title: 'Subscriptions'
deploy: ['staging', 'mainnet']
order: 5
---


# Understanding GraphQL Subscriptions

GraphQL subscriptions enable a real-time connection between the client and the server, allowing the server to push updates to the client when specific events occur. Subscriptions can be used for live queries or as a stream of events. The `graphql-ws` library simplifies the process of implementing these subscriptions.

## Basic Concept of Subscriptions

Unlike queries and mutations, which follow a request-response pattern, subscriptions use a persistent connection (typically via WebSocket) to push updates from the server to the client.

## Setting Up with `graphql-ws`

To implement subscriptions with the `graphql-ws` library, follow these basic steps:

1. **Install the Library**: Ensure you have the `graphql-ws` library installed.

2. **Establish a WebSocket Connection**: Create a WebSocket connection using the `graphql-ws` library.

3. **Authenticate the Connection**: During the connection initialization, include an authorization header to authenticate the user. This is crucial for secure communications.

4. **Subscribe to Events**: Use the connection to subscribe to the desired events. When these events occur, the server will push updates to the client.

## Step-by-Step Example with Code

### 1. Creating the WebSocket Client

```javascript
import { createClient } from 'graphql-ws';

const client = createClient({
    url: 'wss://your-graphql-endpoint/graphql',
    connectionParams: {
        headers: {
            authorization: 'Bearer your_user_token',
        },
    },
});
```

### 2. Subscribing to a Subscription

```javascript
client.subscribe(
    {
        query: `subscription {
          eventOccurred {
            field1
            field2
          }
        }`,
    },
    {
        next: (data) => console.log(data),
        error: (err) => console.error(err),
        complete: () => console.log('Subscription complete'),
    },
);
```

## Postman: Testing an Example WebSocket Connections

### 1. Creating a WebSocket Request

-   Open Postman and create a new WebSocket request.
-   Set the URL to your GraphQL subscription endpoint (e.g., `wss://your-graphql-endpoint/graphql`).
-   Add the correct sub-protocol `Sec-WebSocket-Protocol : graphql-transport-ws` on header section.

### 2. Initializing the Connection

-   In the "Text" tab, enter the following JSON payload to initialize the connection with the authorization header:

    ```json
    {
        "type": "connection_init",
        "payload": {
            "headers": { "authorization": "Bearer {{BEARER_TOKEN}}" }
        }
    }
    ```

-   Click the "Connect" button to establish the WebSocket connection.

### 3. Subscribing to a GraphQL Subscription

-   After the connection is successfully initialized, enter the following JSON payload to subscribe to a GraphQL subscription:

    ```json
    {
        "id": "d77e14e3-9ef2-43a3-a15e-d81a5f346f73",
        "type": "subscribe",
        "payload": {
            "variables": {
                "positionStrategy": "EARLIEST"
            },
            "query": "subscription UniqFactorySnapshots( $positionStrategy: StreamPositionStrategy!) { uniqFactorySnapshots( positionStrategy: $positionStrategy ) { cursor id position state { accountMintingLimit assetCreator assetManager authorizedMinters { quantity walletId } conditionlessReceivers defaultUniqMetadata { cachedSource { contentType integrity { hash type } uri } content { attributes { descriptor { description dynamic name type } key value } description dynamicAttributes { contentType uris } dynamicResources { key value { contentType uris } } medias { gallery { contentType integrity { hash type } uri } hero { contentType integrity { hash type } uri } product { contentType integrity { hash type } uri } square { contentType integrity { hash type } uri } } name properties resources { key value { contentType integrity { hash type } uri } } subName } source { contentType integrity { hash type } uri } status } firsthandPurchases { groupRestriction { excludes includes } id option { factories { count id strategy } transferUniqsReceiver } price { amount currency { code symbol } } promoterBasisPoints purchaseLimit purchaseWindow { endDate startDate } purchasedUniqs saleShares { basisPoints receiver } uosPayment } id metadata { cachedSource { contentType integrity { hash type } uri } content { attributes { key value { description dynamic name type } } description medias { gallery { contentType integrity { hash type } uri } hero { contentType integrity { hash type } uri } product { contentType integrity { hash type } uri } square { contentType integrity { hash type } uri } } name properties resources { key value { contentType integrity { hash type } uri } } subName } locked source { contentType integrity { hash type } uri } status } mintableWindow { endDate startDate } resale { minimumPrice { amount currency { code symbol } } shares { basisPoints receiver } } status stock { authorized existing maxMintable mintable minted } tradingWindow { endDate startDate } transferWindow { endDate startDate } type } } }"
        }
    }
    ```

-   Click the "Send" button to start the subscription.

### 4. Handling the Cursor Value

For subsequent requests, include the cursor value if it is not the first subscription. Here is an example of how to modify the subscription request to include the cursor value:

```json
{
    "id": "d77e14e3-9ef2-43a3-a15e-d81a5f346f73",
    "type": "subscribe",
    "payload": {
        "variables": {
            "cursor": "1k05ksqt9v3ew",
            "positionStrategy": "EARLIEST"
        },
        "query": "subscription UniqFactorySnapshots( $cursor: StreamCursor, $positionStrategy: StreamPositionStrategy!) { uniqFactorySnapshots( cursor: $cursor, positionStrategy: $positionStrategy ) { cursor id position state { accountMintingLimit assetCreator assetManager authorizedMinters { quantity walletId } conditionlessReceivers defaultUniqMetadata { cachedSource { contentType integrity { hash type } uri } content { attributes { descriptor { description dynamic name type } key value } description dynamicAttributes { contentType uris } dynamicResources { key value { contentType uris } } medias { gallery { contentType integrity { hash type } uri } hero { contentType integrity { hash type } uri } product { contentType integrity { hash type } uri } square { contentType integrity { hash type } uri } } name properties resources { key value { contentType integrity { hash type } uri } } subName } source { contentType integrity { hash type } uri } status } firsthandPurchases { groupRestriction { excludes includes } id option { factories { count id strategy } transferUniqsReceiver } price { amount currency { code symbol } } promoterBasisPoints purchaseLimit purchaseWindow { endDate startDate } purchasedUniqs saleShares { basisPoints receiver } uosPayment } id metadata { cachedSource { contentType integrity { hash type } uri } content { attributes { key value { description dynamic name type } } description medias { gallery { contentType integrity { hash type } uri } hero { contentType integrity { hash type } uri } product { contentType integrity { hash type } uri } square { contentType integrity { hash type } uri } } name properties resources { key value { contentType integrity { hash type } uri } } subName } locked source { contentType integrity { hash type } uri } status } mintableWindow { endDate startDate } resale { minimumPrice { amount currency { code symbol } } shares { basisPoints receiver } } status stock { authorized existing maxMintable mintable minted } tradingWindow { endDate startDate } transferWindow { endDate startDate } type } } }"
    }
}
```

## Appendix

References

-   GraphQL over WebSocket Protocol: [graphql-ws](https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md)

# Subscriptions

## `uniqFactories`

Transition to uniqFactorySnapshots for improved data management. This
method will be phased out in future updates.

##### Description

Subscribes to updates on Uniq Factories, providing a mechanism for
real-time monitoring and data synchronization based on specified
criteria.

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
      validationFailures {
        code
        context {
          key
          value
        }
        defaultMessage
      }
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
      validationFailures {
        code
        context {
          key
          value
        }
        defaultMessage
      }
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

Engages with Uniq Factory snapshots, offering an advanced model for
tracking changes and state transitions within factories, powered by
stream positions and optional cursors for continuity.

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
        validationFailures {
          code
          context {
            key
            value
          }
          defaultMessage
        }
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
        validationFailures {
          code
          context {
            key
            value
          }
          defaultMessage
        }
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

Initiates a subscription to Uniq snapshots, offering a modern framework
for observing Uniq state changes and updates, supported by strategic
stream positioning and cursor-based continuity.

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
        validationFailures {
          code
          context {
            key
            value
          }
          defaultMessage
        }
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

Adopt uniqSnapshots for enhanced state tracking and real-time updates.
This method is slated for discontinuation.

##### Description

Provides a subscription service for tracking Uniqs associated with a
specific factory, leveraging serial number ranges and ID filters for
targeted data retrieval.

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
        validationFailures {
          code
          context {
            key
            value
          }
          defaultMessage
        }
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
        validationFailures {
          code
          context {
            key
            value
          }
          defaultMessage
        }
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
      validationFailures {
        code
        context {
          key
          value
        }
        defaultMessage
      }
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

Shift to uniqSnapshots for a streamlined and updated approach to Uniq
monitoring. This subscription will be phased out.

##### Description

Facilitates user-centric tracking of Uniqs, catering to individual
ownership patterns and preferences with optional filters for ID and
factory association.

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
        validationFailures {
          code
          context {
            key
            value
          }
          defaultMessage
        }
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
        validationFailures {
          code
          context {
            key
            value
          }
          defaultMessage
        }
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
      validationFailures {
        code
        context {
          key
          value
        }
        defaultMessage
      }
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

