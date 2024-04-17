---
title: 'Types'
deploy: ['staging', 'mainnet']
order: 6
---

# Types

## BigFloat

##### Description

A binary integer decimal representation of a 128-bit decimal value, supporting 34 decimal digits of significand and an exponent range of -6143 to +6144.

##### Example

``` js
987.65
```

[Types](#group-Types)

## BigInt

##### Description

Defines a Long class for representing a 64-bit two’s-complement integer value.

##### Example

``` js
987
```

[Types](#group-Types)

## Boolean

##### Description

The `Boolean` scalar type represents `true` or `false`.

[Types](#group-Types)

## Currency

##### Description

Defines a currency unit for displaying pricing information, adhering to ISO 4217 standards for currency representation.

##### Fields

| Field Name                                 | Description                                                                                                      |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `code` - [`String!`](#string)   | Alpha and numeric codes for currencies as defined by ISO 4217. Identifies the currency in a standardized format. |
| `symbol` - [`String!`](#string) | A graphical symbol used to denote the currency unit, making it easily recognizable.                              |

##### Example

``` js
{
  "code": "xyz789",
  "symbol": "xyz789"
}
```

[Types](#group-Types)

## Date

##### Description

ISO 8601 date format. The timezone is always zero UTC offset, as denoted by the suffix Z. Milliseconds since epoch is an alternative input format.

##### Example

``` js
"Thu Jul 13 2023 13:27:11 GMT+0200"
```

[Types](#group-Types)

## Float

##### Description

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

##### Example

``` js
123.45
```

[Types](#group-Types)

## Int

##### Description

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

##### Example

``` js
987
```

[Types](#group-Types)

## JSONObject

##### Description

Represent a JSON object.

##### Example

``` js
{"someProperty": "myStringValue", "otherProperty": 987}
```

[Types](#group-Types)

## JSONPrimitive

##### Description

Represent all supported primitive type for json object.

##### Example

``` js
"true | "myStringValue" | 987 | 987.65"
```

[Types](#group-Types)

## MonetaryAmount

##### Description

Encapsulates a monetary value in a specific currency, allowing for precise financial transactions.

##### Fields

| Field Name                                       | Description                                                                                                       |
|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `amount` - [`BigFloat!`](#bigfloat)   | Represents the monetary value, supporting a precision up to 8 decimal places for accurate financial calculations. |
| `currency` - [`Currency!`](#currency) | The currency in which this amount is denominated, providing context for the value.                                |

##### Example

``` js
{"amount": 987.65, "currency": Currency}
```

[Types](#group-Types)

## Pagination

##### Description

Pagination applied to the result. Maximum limit allowed result per page is 25.

##### Fields

| Field Name                          | Description                                                   |
|-------------------------------------|---------------------------------------------------------------|
| `limit` - [`Int!`](#int) | Maximum number of expected results per page. Mandatory field. |
| `skip` - [`Int!`](#int)  | Number of results skipped. Mandatory field.                   |

##### Example

``` js
{"limit": 123, "skip": 123}
```

[Types](#group-Types)

## PaginationInput

##### Description

Pagination filter. Used as query argument, it's optional filter. If not provided, default pagination will be applied with skip value to 0 and limit to 25 maximum results per page.

##### Fields

| Input Field                        | Description                                        |
|------------------------------------|----------------------------------------------------|
| `limit` - [`Int`](#int) | Number of wanted results per page. Optional field. |
| `skip` - [`Int`](#int)  | Number of results to skip.s Optional field.        |

##### Example

``` js
{"limit": 987, "skip": 987}
```

[Types](#group-Types)

## StreamCursor

##### Description

An opaque string used to resume a stream.

##### Example

``` js
"0"
```

[Types](#group-Types)

## StreamPosition

##### Description

The stream position.

##### Values

| Enum Value | Description                                                                                                    |
|------------|----------------------------------------------------------------------------------------------------------------|
| `CURSOR`   | The stream position was resumed after the given cursor position.                                               |
| `EARLIEST` | The stream position was set to the earliest position if no cursor provided or the given cursor is unreachable. |
| `LATEST`   | The stream position was set to the latest position if no cursor provided or the given cursor is unreachable.   |

##### Example

``` js
"CURSOR"
```

[Types](#group-Types)

## StreamPositionStrategy

##### Description

The stream position strategy.

##### Values

| Enum Value | Description                                                                                                                                     |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `EARLIEST` | Automatically set the stream position to the earliest position. The stream entries are emitted with position between \[earliest .. latest + n). |
| `LATEST`   | Automatically set the stream position to the latest position. The stream entries are emitted with position between \[latest .. latest + n).     |

##### Example

``` js
"EARLIEST"
```

[Types](#group-Types)

## String

##### Description

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

##### Example

``` js
"abc123"
```

[Types](#group-Types)

## Uniq

##### Description

Encapsulates all pertinent details of a Uniq, including its blockchain ID, asset type, ownership, and associated metadata, providing a comprehensive overview of its identity and status.

##### Fields

| Field Name                                                                | Description                                                                                                                                                   |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `factory` - [`UniqFactory!`](#uniqfactory)                     | Details on the factory that produced the Uniq, linking it to its origin and the broader context of its issuance.                                              |
| `id` - [`BigInt!`](#bigint)                                    | The blockchain identifier for the Uniq, serving as its unique reference within the ecosystem.                                                                 |
| `metadata` - [`UniqMetadata!`](#uniqmetadata)                  | Comprehensive metadata providing insight into the Uniq's attributes, visual representation, and narrative context.                                            |
| `mintDate` - [`Date!`](#date)                                  | The date and time when the Uniq was minted, chronicling its creation within the blockchain.                                                                   |
| `owner` - [`WalletId!`](#walletid)                             | The Wallet ID of the current owner, establishing possession and control over the Uniq.                                                                        |
| `resale` - [`UniqResale`](#uniqresale)                         | Data pertaining to the resale status of the Uniq, including availability and conditions for secondary market transactions. Absence indicates non-sale status. |
| `serialNumber` - [`BigInt!`](#bigint)                          | A unique serial number assigned to the Uniq, facilitating identification and differentiation among similar items.                                             |
| `tradingPeriod` - [`UniqTradingPeriod`](#uniqtradingperiod)    | Specifies the period during which trading actions are permitted, defining market participation conditions.                                                    |
| `transferPeriod` - [`UniqTransferPeriod`](#uniqtransferperiod) | Defines the timeframe for allowed transfer actions, setting the parameters for ownership changes.                                                             |
| `type` - [`UniqType!`](#uniqtype)                              | Clarifies the Uniq's asset category, aiding in its classification and interaction within the platform.                                                        |

##### Example

``` js
{
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
```

[Types](#group-Types)

## UniqDynamicResource

##### Description

Represents a dynamic Uniq resource capable of being refreshed to reflect changes, including multiple URIs for alternate versions or updates.

##### Fields

| Field Name                                      | Description                                                                                                             |
|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| `contentType` - [`String!`](#string) | The MIME type of the dynamic resource, identifying its content format for appropriate handling and display.             |
| `uris` - [`[String!]!`](#string)     | A list of URIs for the dynamic resource, allowing for access to different versions or updates as they become available. |

##### Example

``` js
{
  "contentType": "xyz789",
  "uris": ["xyz789"]
}
```

[Types](#group-Types)

## UniqFactory

##### Description

Aggregates all relevant information about a Uniq factory, encompassing types, statuses, and operational details.

##### Fields

| Field Name                                                                                            | Description                                                                                                             |
|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| `accountMintingLimit` - [`BigInt`](#bigint)                                                | The limit on the number of Uniqs an individual account can mint, controlling distribution and access.                   |
| `assetCreator` - [`WalletId!`](#walletid)                                                  | The wallet ID of the individual or entity that created the Uniq factory.                                                |
| `assetManager` - [`WalletId!`](#walletid)                                                  | The wallet ID responsible for managing the lifecycle of Uniqs issued by this factory.                                   |
| `authorizedMinters` - [`[UniqFactoryAuthorizedMinter!]!`](#uniqfactoryauthorizedminter)    | A list of authorized minters, detailing who can issue new Uniqs under this factory.                                     |
| `conditionlessReceivers` - [`[WalletId!]!`](#walletid)                                     | A list of wallets to which Uniqs can be transferred without restrictions, bypassing standard transfer checks.           |
| `defaultUniqMetadata` - [`UniqMetadata`](#uniqmetadata)                                    | Default metadata for Uniqs minted from this factory, used in the absence of specific metadata URIs.                     |
| `firsthandPurchases` - [`[UniqFactoryFirsthandPurchase!]!`](#uniqfactoryfirsthandpurchase) | Information on firsthand purchase options available for this factory, detailing pricing, limits, and strategies.        |
| `id` - [`BigInt!`](#bigint)                                                                | The unique identifier for the Uniq factory on the blockchain.                                                           |
| `metadata` - [`UniqFactoryMetadata!`](#uniqfactorymetadata)                                | Metadata describing the Uniq factory, including its verification status and content details.                            |
| `mintableWindow` - [`UniqFactoryMintableWindow!`](#uniqfactorymintablewindow)              | Defines the timeframe during which minting of Uniqs is permitted, governing new issuances.                              |
| `resale` - [`UniqFactoryResale!`](#uniqfactoryresale)                                      | Details regarding second-hand market resale operations, including minimum pricing and commission structures.            |
| `status` - [`UniqFactoryStatus!`](#uniqfactorystatus)                                      | The operational status of the Uniq factory, indicating its current functional state.                                    |
| `stock` - [`UniqFactoryStock!`](#uniqfactorystock)                                         | Information on the stock of Uniqs associated with the factory, including minted, circulating, and available quantities. |
| `tradingWindow` - [`UniqFactoryTradingWindow!`](#uniqfactorytradingwindow)                 | Specifies the period during which trading of Uniqs is allowed, regulating market activities.                            |
| `transferWindow` - [`UniqFactoryTransferWindow!`](#uniqfactorytransferwindow)              | Delineates the timeframe for transferring Uniqs, ensuring transfers comply with designated periods.                     |
| `type` - [`UniqType!`](#uniqtype)                                                          | Categorizes the asset type of the Uniq factory, aiding in classification and sorting.                                   |

##### Example

``` js
{
  "accountMintingLimit": 987,
  "assetCreator": "aa1aa2aa3ag4",
  "assetManager": "aa1aa2aa3ag4",
  "authorizedMinters": [UniqFactoryAuthorizedMinter],
  "conditionlessReceivers": [
    "aa1aa2aa3ag4"
  ],
  "defaultUniqMetadata": UniqMetadata,
  "firsthandPurchases": [UniqFactoryFirsthandPurchase],
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
```

[Types](#group-Types)

## UniqFactoryActionWindow

##### Description

Provides a timeframe for actions related to a Uniq factory, such as minting, trading, or transferring.

##### Fields

| Field Name                               | Description |
|------------------------------------------|-------------|
| `endDate` - [`Date`](#date)   |             |
| `startDate` - [`Date`](#date) |             |

##### Possible Types

| UniqFactoryActionWindow Types                                        |
|----------------------------------------------------------------------|
| [`UniqFactoryMintableWindow`](#uniqfactorymintablewindow) |
| [`UniqFactoryPurchaseWindow`](#uniqfactorypurchasewindow) |
| [`UniqFactoryTradingWindow`](#uniqfactorytradingwindow)   |
| [`UniqFactoryTransferWindow`](#uniqfactorytransferwindow) |

##### Example

``` js
{
  "endDate": "Thu Jul 13 2023 13:27:11 GMT+0200",
  "startDate": "Thu Jul 13 2023 13:27:11 GMT+0200"
}
```

[Types](#group-Types)

## UniqFactoryAuthorizedMinter

##### Description

Information about authorized minters for a Uniq factory, including wallet IDs and minting quotas.

##### Fields

| Field Name                                       | Description                                                |
|--------------------------------------------------|------------------------------------------------------------|
| `quantity` - [`BigInt!`](#bigint)     | The quantity of Uniqs the minter is authorized to produce. |
| `walletId` - [`WalletId!`](#walletid) | The wallet ID of the authorized minter.                    |

##### Example

``` js
{
  "quantity": 987,
  "walletId": "aa1aa2aa3ag4"
}
```

[Types](#group-Types)

## UniqFactoryDigest

##### Description

Summarizes immutable information about a Uniq Factory, capturing its identity, operational parameters, and lifecycle management details.

##### Fields

| Field Name                                                                               | Description                                                                                                                   |
|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| `assetCreator` - [`WalletId!`](#walletid)                                     | Identifies the wallet responsible for creating the factory, linking ownership and initiation rights.                          |
| `assetManager` - [`WalletId!`](#walletid)                                     | Designates the wallet charged with managing the Uniq lifecycle, including issuance, burning, and resale activities.           |
| `id` - [`BigInt!`](#bigint)                                                   | The blockchain ID of the Uniq Factory, uniquely identifying it across the platform.                                           |
| `maxMintableUniqs` - [`BigInt`](#bigint)                                      | Indicates the maximum number of Uniqs that can be minted, with a null value signifying no upper limit.                        |
| `mintableWindow` - [`UniqFactoryMintableWindow!`](#uniqfactorymintablewindow) | Specifies the timeframe during which minting is permissible, outlining the operational window for creating new Uniqs.         |
| `resale` - [`UniqFactoryResale!`](#uniqfactoryresale)                         | Details the resale conditions applied to Uniqs on the secondary market, including restrictions and profit-sharing mechanisms. |
| `tradingWindow` - [`UniqFactoryTradingWindow!`](#uniqfactorytradingwindow)    | Defines the period when Uniq trading is allowed, establishing guidelines for market transactions.                             |
| `transferWindow` - [`UniqFactoryTransferWindow!`](#uniqfactorytransferwindow) | Delineates the timeframe for Uniq transfers, ensuring compliance with predetermined transfer policies.                        |
| `type` - [`UniqType!`](#uniqtype)                                             | Clarifies the type of assets managed by the factory, providing context for its production and lifecycle capabilities.         |

##### Example

``` js
{
  "assetCreator": "aa1aa2aa3ag4",
  "assetManager": "aa1aa2aa3ag4",
  "id": 987,
  "maxMintableUniqs": 987,
  "mintableWindow": UniqFactoryMintableWindow,
  "resale": UniqFactoryResale,
  "tradingWindow": UniqFactoryTradingWindow,
  "transferWindow": UniqFactoryTransferWindow,
  "type": "COLLECTIBLE"
}
```

[Types](#group-Types)

## UniqFactoryFirsthandPurchase

##### Description

Details firsthand purchase information for a Uniq factory, including pricing, limits, and applicable restrictions.

##### Fields

| Field Name                                                                                                                         | Description                                                                                         |
|------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `groupRestriction` - [`[UniqFactoryFirsthandPurchaseGroupRestriction!]`](#uniqfactoryfirsthandpurchasegrouprestriction) | Optional group restrictions, refining who can access the purchase option based on group membership. |
| `id` - [`BigInt!`](#bigint)                                                                                             | Unique identifier for the firsthand purchase option.                                                |
| `option` - [`UniqFactoryFirsthandPurchaseOption`](#uniqfactoryfirsthandpurchaseoption)                                  | Detailed purchase options for the factory, including strategies and quantities.                     |
| `price` - [`MonetaryAmount!`](#monetaryamount)                                                                          | The set price for purchasing Uniqs under this option.                                               |
| `promoterBasisPoints` - [`Int!`](#int)                                                                                  | Commission points for promoters, incentivizing marketing and sales efforts.                         |
| `purchaseLimit` - [`BigInt`](#bigint)                                                                                   | An optional limit on the number of purchases, controlling availability.                             |
| `purchaseWindow` - [`UniqFactoryPurchaseWindow!`](#uniqfactorypurchasewindow)                                           | The purchase window, specifying when the Uniqs can be bought from the factory.                      |
| `purchasedUniqs` - [`BigInt!`](#bigint)                                                                                 | The number of Uniqs purchased under this option, tracking sales.                                    |
| `saleShares` - [`[UniqSaleShare!]!`](#uniqsaleshare)                                                                    | Commission shares for secondary sales, detailing distribution of proceeds.                          |
| `uosPayment` - [`BigInt!`](#bigint)                                                                                     | Payment made using UOS, Ultra's native currency, for the purchase.                                  |

##### Example

``` js
{
  "groupRestriction": [
    UniqFactoryFirsthandPurchaseGroupRestriction
  ],
  "id": 987,
  "option": UniqFactoryFirsthandPurchaseOption,
  "price": MonetaryAmount,
  "promoterBasisPoints": 123,
  "purchaseLimit": 987,
  "purchaseWindow": UniqFactoryPurchaseWindow,
  "purchasedUniqs": 987,
  "saleShares": [UniqSaleShare],
  "uosPayment": 987
}
```

[Types](#group-Types)

## UniqFactoryFirsthandPurchaseGroupRestriction

##### Description

Represents group-based restrictions for firsthand purchases, allowing for inclusion and exclusion criteria based on group memberships.

##### Fields

| Field Name                                      | Description                                                                                                |
|-------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| `excludes` - [`[BigInt!]!`](#bigint) | Groups from which members are excluded from the purchase option, allowing for precise market segmentation. |
| `includes` - [`[BigInt!]!`](#bigint) | Groups whose members are included in the purchase option, enabling targeted offerings.                     |

##### Example

``` js
{"excludes": [987], "includes": [987]}
```

[Types](#group-Types)

## UniqFactoryFirsthandPurchaseOption

##### Description

Outlines firsthand purchase options, including potential restrictions and strategies for managing factory-related purchases.

##### Fields

| Field Name                                                                                                             | Description                                                                                                         |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `factories` - [`[UniqFactoryFirsthandPurchaseOptionFactory!]!`](#uniqfactoryfirsthandpurchaseoptionfactory) | A list of related factories, each with its own set of purchase options.                                             |
| `transferUniqsReceiver` - [`WalletId`](#walletid)                                                           | Optional receiver for transferred Uniqs, specifying where Uniqs are sent if not retained by the original purchaser. |

##### Example

``` js
{
  "factories": [
    UniqFactoryFirsthandPurchaseOptionFactory
  ],
  "transferUniqsReceiver": "aa1aa2aa3ag4"
}
```

[Types](#group-Types)

## UniqFactoryFirsthandPurchaseOptionFactory

##### Description

Describes firsthand purchase options associated with a Uniq factory, including applicable strategies and quantities.

##### Fields

| Field Name                                                                                                                         | Description                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| `count` - [`BigInt!`](#bigint)                                                                                          | The number of Uniqs involved in the purchase option.                                  |
| `id` - [`BigInt!`](#bigint)                                                                                             | The ID of the related factory, linking the purchase option to its origin.             |
| `strategy` - [`UniqFactoryFirsthandPurchaseOptionFactoryStrategy!`](#uniqfactoryfirsthandpurchaseoptionfactorystrategy) | The strategy applied to the firsthand purchase option, determining how it is managed. |

##### Example

``` js
{"count": 987, "id": 987, "strategy": "BURN"}
```

[Types](#group-Types)

## UniqFactoryFirsthandPurchaseOptionFactoryStrategy

##### Description

Outlines strategies for managing firsthand purchase options within a
Uniq Factory.

##### Values

| Enum Value | Description                                                                                                                                           |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `BURN`     | Removes the option for firsthand purchase by destroying the associated asset.                                                                         |
| `CHECK`    | Verifies the eligibility for firsthand purchase without altering ownership status.                                                                    |
| `TRANSFER` | If any of the factories specified contain a requirement with transfer strategy then this account will be the one to receive the uniq during purchase. |

##### Example

``` js
"BURN"
```

[Types](#group-Types)

## UniqFactoryList

##### Description

Provides a paginated list of Uniq factories, including data on individual factories and total counts for navigation and display purposes.

##### Fields

| Field Name                                             | Description                                                                                            |
|--------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `data` - [`[UniqFactory!]!`](#uniqfactory)  | A collection of Uniq factories, presented according to specified filters and pagination settings.      |
| `pagination` - [`Pagination!`](#pagination) | Details on the applied pagination, aiding in the navigation of large datasets.                         |
| `totalCount` - [`Int!`](#int)               | The total number of Uniq factories matching the query criteria, useful for pagination and UI displays. |

##### Example

``` js
{
  "data": [UniqFactory],
  "pagination": Pagination,
  "totalCount": 987
}
```

[Types](#group-Types)

## UniqFactoryMetadata

##### Description

Encapsulates global metadata for a Uniq factory, including status, source, cached content, and resolved information.

##### Fields

| Field Name                                                                         | Description                                                                                                  |
|------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `cachedSource` - [`UniqResource`](#uniqresource)                        | A copy of the metadata optimized for access, preferred for use over the original source. Null if not stored. |
| `content` - [`UniqFactoryMetadataContent`](#uniqfactorymetadatacontent) | The fully resolved content of the metadata, ready for display. Null if resolution is pending.                |
| `locked` - [`Boolean!`](#boolean)                                       | Indicates whether the metadata is locked and immutable or can be altered over time.                          |
| `source` - [`UniqResource`](#uniqresource)                              | The original source of the metadata, with details on the metadata's origin. Null if restricted.              |
| `status` - [`UniqMetadataStatus!`](#uniqmetadatastatus)                 | The processing status of the metadata, indicating its availability and compliance.                           |

##### Example

``` js
{
  "cachedSource": UniqResource,
  "content": UniqFactoryMetadataContent,
  "locked": true,
  "source": UniqResource,
  "status": "INVALID"
}
```

[Types](#group-Types)

## UniqFactoryMetadataAttribute

##### Description

Stores key-value pairs describing attributes for Uniqs related to a factory, providing detailed information about each attribute.

##### Fields

| Field Name                                                                                  | Description                                                                             |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| `key` - [`String!`](#string)                                                     | The key for retrieving the attribute.                                                   |
| `value` - [`UniqMetadataAttributeDescriptor!`](#uniqmetadataattributedescriptor) | Detailed information about the attribute, including its type and whether it is dynamic. |

##### Example

``` js
{
  "key": "xyz789",
  "value": UniqMetadataAttributeDescriptor
}
```

[Types](#group-Types)

## UniqFactoryMetadataContent

##### Description

Represents content associated with Uniq factory metadata, including names, descriptions, media, and additional properties.

##### Fields

| Field Name                                                                                   | Description                                                                                          |
|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `attributes` - [`[UniqFactoryMetadataAttribute!]`](#uniqfactorymetadataattribute) | Structured data detailing specific attributes of the factory.                                        |
| `description` - [`String`](#string)                                               | An explanatory text describing the purpose and scope of the factory.                                 |
| `medias` - [`UniqMedias!`](#uniqmedias)                                           | Media assets associated with the factory, including images and other forms of visual representation. |
| `name` - [`String!`](#string)                                                     | The overall name of the factory, often representing a collection.                                    |
| `properties` - [`JSONObject`](#jsonobject)                                        | Arbitrary data offering further insight into the factory's attributes or properties.                 |
| `resources` - [`[UniqMetadataResource!]`](#uniqmetadataresource)                  | Additional resources or media enhancing the factory's metadata.                                      |
| `subName` - [`String`](#string)                                                   | A secondary name providing additional context or flavor to the factory.                              |

##### Example

``` js
{
  "attributes": [UniqFactoryMetadataAttribute],
  "description": "abc123",
  "medias": UniqMedias,
  "name": "abc123",
  "properties": {"someProperty": "myStringValue", "otherProperty": 987},
  "resources": [UniqMetadataResource],
  "subName": "abc123"
}
```

[Types](#group-Types)

## UniqFactoryMintableWindow

##### Description

Specifies the time window during which Uniqs can be minted from a factory, with various combinations of start and end dates dictating minting availability.

##### Fields

| Field Name                               | Description                                                                                             |
|------------------------------------------|---------------------------------------------------------------------------------------------------------|
| `endDate` - [`Date`](#date)   | The end date after which minting is no longer available. Null indicates no restriction on the end date. |
| `startDate` - [`Date`](#date) | The start date for when minting becomes available. Null indicates no restriction from the start date.   |

##### Example

``` js
{
  "endDate": "Thu Jul 13 2023 13:27:11 GMT+0200",
  "startDate": "Thu Jul 13 2023 13:27:11 GMT+0200"
}
```

[Types](#group-Types)

## UniqFactoryPurchaseWindow

##### Description

Defines a purchase window for Uniq factories, indicating when Uniqs can be bought directly from the factory.

##### Fields

| Field Name                               | Description                                                                                          |
|------------------------------------------|------------------------------------------------------------------------------------------------------|
| `endDate` - [`Date`](#date)   | The end date for the purchase period, with null indicating that purchases can continue indefinitely. |
| `startDate` - [`Date`](#date) | The start date for the purchase period, with null indicating no start date restriction.              |

##### Example

``` js
{
  "endDate": "Thu Jul 13 2023 13:27:11 GMT+0200",
  "startDate": "Thu Jul 13 2023 13:27:11 GMT+0200"
}
```

[Types](#group-Types)

## UniqFactoryResale

##### Description

Details the resale information for a Uniq factory, including minimum pricing and commission shares for secondary market sales.

##### Fields

| Field Name                                                       | Description                                                                                              |
|------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `minimumPrice` - [`MonetaryAmount!`](#monetaryamount) | The minimum allowable price for reselling Uniqs, enforcing price floors on the secondary market.         |
| `shares` - [`[UniqSaleShare!]!`](#uniqsaleshare)      | Commission shares distributed during resale, detailed as pairs of receivers and their respective shares. |

##### Example

``` js
{
  "minimumPrice": MonetaryAmount,
  "shares": [UniqSaleShare]
}
```

[Types](#group-Types)

## UniqFactorySnapshot

##### Description

Represents a momentary snapshot of a Uniq Factory's state, including its blockchain ID and operational status, facilitating real-time data synchronization and monitoring.

##### Fields

| Field Name                                                   | Description                                                                                                                  |
|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| `cursor` - [`StreamCursor`](#streamcursor)        | An optional cursor for resuming snapshot updates, ensuring continuity and relevance of the data stream.                      |
| `id` - [`BigInt!`](#bigint)                       | The blockchain ID of the Uniq Factory, essential for identifying the factory within the system.                              |
| `position` - [`StreamPosition!`](#streamposition) | Indicates the position in the stream of updates, critical for tracking changes and updates to the factory's state.           |
| `state` - [`UniqFactory`](#uniqfactory)           | Represents the current state of the factory, with a null value indicating deletion or absence from the current data context. |

##### Example

``` js
{
  "cursor": "0",
  "id": 987,
  "position": "CURSOR",
  "state": UniqFactory
}
```

[Types](#group-Types)

## UniqFactoryStatus

##### Description

Represents the operational status of a Uniq factory within the blockchain environment.

##### Values

| Enum Value | Description                                                                                                                   |
|------------|-------------------------------------------------------------------------------------------------------------------------------|
| `ACTIVE`   | Indicates the factory is fully operational, with capabilities to mint new Uniqs. (On-chain value 0)                           |
| `INACTIVE` | The factory is currently not operational for minting new Uniqs, but may still perform other functions. (On-chain value 1)     |
| `SHUTDOWN` | The factory is completely non-operational, with no ability to mint new Uniqs or revert to an active state. (On-chain value 2) |

##### Example

``` js
"ACTIVE"
```

[Types](#group-Types)

## UniqFactoryStock

##### Description

Represents the stock information of a Uniq factory, detailing mintable quantities and existing circulation.

##### Fields

| Field Name                                     | Description                                                                                   |
|------------------------------------------------|-----------------------------------------------------------------------------------------------|
| `authorized` - [`BigInt`](#bigint)  | The quantity of Uniqs authorized for minting by designated minters.                           |
| `existing` - [`BigInt!`](#bigint)   | The current circulating number of Uniqs, derived from minted minus burned quantities.         |
| `maxMintable` - [`BigInt`](#bigint) | The maximum number of Uniqs that can be minted, with null indicating no upper limit.          |
| `mintable` - [`BigInt`](#bigint)    | The remaining number of Uniqs that can be minted, with null indicating an unlimited quantity. |
| `minted` - [`BigInt!`](#bigint)     | The total number of Uniqs that have been minted.                                              |

##### Example

``` js
{
  "authorized": 987,
  "existing": 987,
  "maxMintable": 987,
  "mintable": 987,
  "minted": 987
}
```

[Types](#group-Types)

## UniqFactoryTradingWindow

##### Description

Specifies the time window during which Uniqs can be traded. This window is checked during buy/resell actions to enforce trading periods.

##### Fields

| Field Name                               | Description                                                                                             |
|------------------------------------------|---------------------------------------------------------------------------------------------------------|
| `endDate` - [`Date`](#date)   | The end date after which trading is no longer available. Null indicates no restriction on the end date. |
| `startDate` - [`Date`](#date) | The start date for when trading becomes available. Null indicates no restriction from the start date.   |

##### Example

``` js
{
  "endDate": "Thu Jul 13 2023 13:27:11 GMT+0200",
  "startDate": "Thu Jul 13 2023 13:27:11 GMT+0200"
}
```

[Types](#group-Types)

## UniqFactoryTransferWindow

##### Description

Defines the time window during which Uniqs can be transferred. This is checked during transfer actions to ensure compliance with specified periods.

##### Fields

| Field Name                               | Description                                                                                           |
|------------------------------------------|-------------------------------------------------------------------------------------------------------|
| `endDate` - [`Date`](#date)   | The end date after which transferring is no longer available. Null indicates no end date restriction. |
| `startDate` - [`Date`](#date) | The start date for when transferring becomes available. Null indicates no start date restriction.     |

##### Example

``` js
{
  "endDate": "Thu Jul 13 2023 13:27:11 GMT+0200",
  "startDate": "Thu Jul 13 2023 13:27:11 GMT+0200"
}
```

[Types](#group-Types)

## UniqList

##### Description

Organizes a collection of Uniqs into a structured list, incorporating pagination to manage and navigate through large datasets effectively.

##### Fields

| Field Name                                             | Description                                                                                                                       |
|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| `data` - [`[Uniq!]!`](#uniq)                | An array of Uniqs, each representing a unique asset within the platform, selected according to specified criteria.                |
| `pagination` - [`Pagination!`](#pagination) | Pagination details, facilitating the efficient browsing of large collections by segmenting the data into manageable portions.     |
| `totalCount` - [`Int!`](#int)               | The total count of Uniqs matching the query parameters, essential for understanding the scope of results and planning navigation. |

##### Example

``` js
{
  "data": [Uniq],
  "pagination": Pagination,
  "totalCount": 987
}
```

[Types](#group-Types)

## UniqMedias

##### Description

Centralizes visual representation details of tokens and factories, ensuring an engaging and informative display across frontend interfaces.

##### Fields

| Field Name                                                 | Description                                                                                                                                                    |
|------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `gallery` - [`[UniqResource!]!`](#uniqresource) | A curated collection of images providing diverse perspectives or contexts of the token, such as different angles or in-situ representations for in-game items. |
| `hero` - [`UniqResource`](#uniqresource)        | A large, banner-style image serving as the focal point for showcasing the token, akin to a feature image in a gallery or a promotional banner.                 |
| `product` - [`UniqResource!`](#uniqresource)    | The primary visual representation of the token. For example, if the token represents an artwork, this media would be the artwork itself.                       |
| `square` - [`UniqResource!`](#uniqresource)     | A square-formatted image designed for uniform display in listings, enhancing visual harmony when presenting multiple tokens.                                   |

##### Example

``` js
{
  "gallery": [UniqResource],
  "hero": UniqResource,
  "product": UniqResource,
  "square": UniqResource
}
```

[Types](#group-Types)

## UniqMetadata

##### Description

Represents the essence of a Uniq token, encapsulating its name, description, visual identity, and associated metadata to forge a link between on-chain presence and off-chain representation. This forms the basis for understanding and interacting with the token within digital environments.

##### Fields

| Field Name                                                           | Description                                                                                                                                                                       |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `cachedSource` - [`UniqResource`](#uniqresource)          | A system-optimized copy of the metadata intended for efficient access, offering an alternative to the original source for enhanced performance. Absent if integration is pending. |
| `content` - [`UniqMetadataContent`](#uniqmetadatacontent) | The fully resolved and structured metadata content, ready for presentation, outlining the Uniq's identity and characteristics. Absent if resolution is incomplete.                |
| `source` - [`UniqResource`](#uniqresource)                | The origin of the metadata, providing context and source verification. Absent if access is restricted or the content is confidential.                                             |
| `status` - [`UniqMetadataStatus!`](#uniqmetadatastatus)   | Reflects the current processing state of the metadata within the system, indicating availability and conformity to standards for display purposes.                                |

##### Example

``` js
{
  "cachedSource": UniqResource,
  "content": UniqMetadataContent,
  "source": UniqResource,
  "status": "INVALID"
}
```

[Types](#group-Types)

## UniqMetadataAttribute

##### Description

Associates key-value pairs with a Uniq, describing its attributes in a structured format for easy reference and interpretation.

##### Fields

| Field Name                                                                                      | Description                                                                                                            |
|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `descriptor` - [`UniqMetadataAttributeDescriptor`](#uniqmetadataattributedescriptor) | Provides context and details about the attribute, including its name, type, and potential dynamic nature.              |
| `key` - [`String!`](#string)                                                         | The key used to access the attribute, acting as a unique identifier within the metadata structure.                     |
| `value` - [`JSONPrimitive`](#jsonprimitive)                                          | The attribute's value, with its type inferred from the associated descriptor, supporting flexible data representation. |

##### Example

``` js
{
  "descriptor": UniqMetadataAttributeDescriptor,
  "key": "abc123",
  "value": "true | \"myStringValue\" | 987 | 987.65"
}
```

[Types](#group-Types)

## UniqMetadataAttributeDescriptor

##### Description

Allows the specification of structured data attributes for Uniqs, including whether the attribute is dynamic and its data type.

##### Fields

| Field Name                                                                     | Description                                                                                |
|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| `description` - [`String`](#string)                                 | A description of what the attribute represents or signifies.                               |
| `dynamic` - [`Boolean`](#boolean)                                   | Indicates whether the attribute is dynamic and may change over time.                       |
| `name` - [`String!`](#string)                                       | The name of the attribute, serving as an identifier.                                       |
| `type` - [`UniqMetadataAttributeType!`](#uniqmetadataattributetype) | The expected data type of the attribute, aiding in appropriate display and interpretation. |

##### Example

``` js
{
  "description": "xyz789",
  "dynamic": true,
  "name": "abc123",
  "type": "ISODateString"
}
```

[Types](#group-Types)

## UniqMetadataAttributeType

##### Description

Defines the data type of attributes associated with Uniq metadata.

##### Values

| Enum Value      | Description                                                   |
|-----------------|---------------------------------------------------------------|
| `ISODateString` | Represents dates in ISO 8601 format.                          |
| `boolean`       | Represents a true or false value.                             |
| `number`        | Represents numerical values, both integer and floating-point. |
| `string`        | Represents sequences of characters.                           |

##### Example

``` js
"ISODateString"
```

[Types](#group-Types)

## UniqMetadataContent

##### Description

Defines the comprehensive content structure of Uniq metadata according to the NFT standard, encompassing names, descriptions, media, and additional data attributes.

##### Fields

| Field Name                                                                                       | Description                                                                                                                                                 |
|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `attributes` - [`[UniqMetadataAttribute!]`](#uniqmetadataattribute)                   | A selection of attributes that define specific characteristics of the Uniq, supporting a variety of types for detailed specification.                       |
| `description` - [`String`](#string)                                                   | An elaborate description providing insights into the Uniq's backstory, usage, or conceptual significance, potentially including lore or functional details. |
| `dynamicAttributes` - [`UniqDynamicResource`](#uniqdynamicresource)                   | A link to an external resource providing dynamic content, enabling live updates or changes to attributes that may evolve over time.                         |
| `dynamicResources` - [`[UniqMetadataDynamicResource!]`](#uniqmetadatadynamicresource) | Supplementary dynamic resources that introduce variability or real-time updates to the metadata, each clearly delineated for dynamic content integration.   |
| `medias` - [`UniqMedias!`](#uniqmedias)                                               | A comprehensive set of media assets that visually represent the Uniq, including primary images, icons, and galleries for a multi-faceted display.           |
| `name` - [`String!`](#string)                                                         | The identifiable name of the Uniq, crucial for distinguishing it among a collection or within its ecosystem.                                                |
| `properties` - [`JSONObject`](#jsonobject)                                            | Customizable data points that do not conform to standard metadata fields, offering flexibility for unique or specialized information.                       |
| `resources` - [`[UniqMetadataResource!]`](#uniqmetadataresource)                      | Additional static resources that further describe or complement the Uniq, each distinctly defined to ensure clarity and purpose within the metadata.        |
| `subName` - [`String`](#string)                                                       | A secondary name or tagline that adds depth or context to the Uniq, enriching its narrative or thematic connection.                                         |

##### Example

``` js
{
  "attributes": [UniqMetadataAttribute],
  "description": "xyz789",
  "dynamicAttributes": UniqDynamicResource,
  "dynamicResources": [UniqMetadataDynamicResource],
  "medias": UniqMedias,
  "name": "xyz789",
  "properties": {"someProperty": "myStringValue", "otherProperty": 987},
  "resources": [UniqMetadataResource],
  "subName": "abc123"
}
```

[Types](#group-Types)

## UniqMetadataDynamicResource

##### Description

Facilitates the inclusion of dynamic media or reference data within Uniq metadata, allowing for content that may update or change over time. Each resource must be identified and managed as a dynamic resource to accommodate variability and updates.

##### Fields

| Field Name                                                          | Description                                                                                                                               |
|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `key` - [`String!`](#string)                             | A unique key for fetching the dynamic media or reference data, supporting content flexibility and dynamism within the metadata.           |
| `value` - [`UniqDynamicResource!`](#uniqdynamicresource) | Specifies the dynamic content, represented through a UniqDynamicResource, to accommodate evolving media or data associated with the Uniq. |

##### Example

``` js
{
  "key": "abc123",
  "value": UniqDynamicResource
}
```

[Types](#group-Types)

## UniqMetadataResource

##### Description

Enables the addition of extra media or reference data to Uniq metadata, enhancing its descriptive and visual elements. Each media or reference is strictly categorized as a static resource for consistency and reliability.

##### Fields

| Field Name                                                        | Description                                                                                                                           |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `key` - [`String!`](#string)                           | A unique identifier used to access the corresponding media or reference data within the metadata structure.                           |
| `value` - [`UniqStaticResource!`](#uniqstaticresource) | Detailed information about the media, encapsulated within a UniqStaticResource, providing a consistent data model for static content. |

##### Example

``` js
{
  "key": "abc123",
  "value": UniqStaticResource
}
```

[Types](#group-Types)

## UniqMetadataStatus

##### Description

Tracks the progress and outcome of metadata processing for Uniqs.

##### Values

| Enum Value   | Description                                                                                                                                     |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `INVALID`    | Encountered issues during metadata resolution, such as missing resources or non-compliance, resulting in incomplete or unavailable information. |
| `PROCESSING` | Indicates that the metadata resolution process is currently underway within the Ultra backend system.                                           |
| `RESTRICTED` | The metadata has been deemed restricted due to platform policies, leading to a lack of available information.                                   |
| `VALID`      | Metadata resolution has been successfully completed, ensuring compliance and availability of all related information.                           |

##### Example

``` js
"INVALID"
```

[Types](#group-Types)

## UniqResale

##### Description

Details a specific resale transaction for a Uniq, including the date, price, shares, and promoter fees involved.

##### Fields

| Field Name                                                  | Description                                                                                      |
|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| `onSaleDate` - [`Date!`](#date)                  | The date when the Uniq was put on sale, providing a timestamp for the transaction.               |
| `price` - [`MonetaryAmount!`](#monetaryamount)   | The agreed-upon selling price for the Uniq, facilitating financial transactions.                 |
| `promoterBasisPoints` - [`Int`](#int)            | The commission points allocated to promoters, rewarding marketing and promotional efforts.       |
| `shares` - [`[UniqSaleShare!]!`](#uniqsaleshare) | A breakdown of commission shares for the resale, specifying the distribution among participants. |

##### Example

``` js
{
  "onSaleDate": "Thu Jul 13 2023 13:27:11 GMT+0200",
  "price": MonetaryAmount,
  "promoterBasisPoints": 987,
  "shares": [UniqSaleShare]
}
```

[Types](#group-Types)

## UniqResource

##### Description

Represents a digital resource, such as an image or video, associated with a Uniq, providing a URI for access and integrity information for verification.

##### Fields

| Field Name                                                                 | Description                                                                            |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| `contentType` - [`String`](#string)                             | the mime type of the resource, indicating its format and nature (e.g., image, video).  |
| `integrity` - [`UniqResourceIntegrity`](#uniqresourceintegrity) | Integrity information for the resource, ensuring its authenticity and unchanged state. |
| `uri` - [`String!`](#string)                                    | The URI where the resource is stored, facilitating access and retrieval.               |

##### Example

``` js
{
  "contentType": "abc123",
  "integrity": UniqResourceIntegrity,
  "uri": "xyz789"
}
```

[Types](#group-Types)

## UniqResourceIntegrity

##### Description

Details the integrity of a Uniq resource, ensuring that the resource is authentic and unaltered through cryptographic verification.

##### Fields

| Field Name                                                                     | Description                                                                                         |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `hash` - [`String!`](#string)                                       | The hash value associated with the resource, serving as a digital fingerprint for integrity checks. |
| `type` - [`UniqResourceIntegrityType!`](#uniqresourceintegritytype) | Specifies the type of cryptographic hash used, aiding in the verification process.                  |

##### Example

``` js
{"hash": "abc123", "type": "SHA256"}
```

[Types](#group-Types)

## UniqResourceIntegrityType

##### Description

Specifies the cryptographic hash algorithm used for ensuring the integrity of Uniq resources.

##### Values

| Enum Value | Description                                                                                                      |
|------------|------------------------------------------------------------------------------------------------------------------|
| `SHA256`   | Utilizes the SHA256 hashing algorithm for encryption, providing a secure method of verifying resource integrity. |

##### Example

``` js
"SHA256"
```

[Types](#group-Types)

## UniqSaleShare

##### Description

Describes the commission structure for secondary market sales, including the receiver and the commission rate.

##### Fields

| Field Name                                       | Description                                                                       |
|--------------------------------------------------|-----------------------------------------------------------------------------------|
| `basisPoints` - [`Int!`](#int)        | The commission rate, expressed in basis points, where 1 basis point equals 0.01%. |
| `receiver` - [`WalletId!`](#walletid) | The wallet ID entitled to receive the commission.                                 |

##### Example

``` js
{
  "basisPoints": 987,
  "receiver": "aa1aa2aa3ag4"
}
```

[Types](#group-Types)

## UniqSerialRangeInput

##### Description

Defines a range of serial numbers for Uniqs, facilitating filtering based on serial number criteria.

##### Fields

| Input Field                             | Description                                                                                                                                                                                |
|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `max` - [`BigInt`](#bigint)  | The upper bound of the range, inclusive. Must be greater than or equal to the min value. A null value indicates no upper limit, including all serial numbers greater than or equal to min. |
| `min` - [`BigInt!`](#bigint) | The lower bound of the range, inclusive. Must be a positive value.                                                                                                                         |

##### Example

``` js
{"max": 987, "min": 987}
```

[Types](#group-Types)

## UniqSnapshot

##### Description

Enables real-time tracking of Uniq states within the ecosystem, offering a snapshot-based approach to data synchronization and monitoring.

##### Fields

| Field Name                                                   | Description                                                                                                          |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| `cursor` - [`StreamCursor`](#streamcursor)        | An optional cursor facilitating the continuation of snapshot updates, enabling seamless data streaming and recovery. |
| `id` - [`BigInt!`](#bigint)                       | The blockchain ID of the Uniq, serving as a foundational identifier for tracking and interaction.                    |
| `position` - [`StreamPosition!`](#streamposition) | Marks the position in the update stream, essential for managing data flow and ensuring chronological integrity.      |
| `state` - [`UniqState`](#uniqstate)               | Reflects the current state of the Uniq, with a null value denoting its removal or absence in the current dataset.    |

##### Example

``` js
{
  "cursor": "0",
  "id": 987,
  "position": "CURSOR",
  "state": UniqState
}
```

[Types](#group-Types)

## UniqState

##### Description

Captures the comprehensive state of a Uniq within a streaming data model, facilitating dynamic updates and real-time monitoring.

##### Fields

| Field Name                                                                | Description                                                                                                                             |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| `factory` - [`UniqFactoryDigest!`](#uniqfactorydigest)         | Summarizes details about the factory associated with this Uniq, linking it to its origin and production parameters.                     |
| `id` - [`BigInt!`](#bigint)                                    | The unique blockchain ID of the Uniq, central to its identification and tracking within the ecosystem.                                  |
| `metadata` - [`UniqMetadata!`](#uniqmetadata)                  | Presents detailed metadata about the Uniq, encompassing its identity, description, and associated media content.                        |
| `mintDate` - [`Date!`](#date)                                  | The date when the Uniq was minted, capturing its inception and contributing to its provenance.                                          |
| `owner` - [`WalletId!`](#walletid)                             | The wallet ID of the current Uniq owner, providing clarity on ownership and custody.                                                    |
| `resale` - [`UniqResale`](#uniqresale)                         | Provides information on the resale status of the Uniq, with a null value indicating that it is not currently offered for sale.          |
| `serialNumber` - [`BigInt!`](#bigint)                          | The serial number assigned to the Uniq, offering additional granularity for identification and sorting.                                 |
| `tradingPeriod` - [`UniqTradingPeriod`](#uniqtradingperiod)    | Outlines the trading window, specifying when the Uniq is eligible for market transactions. A null value indicates trading restrictions. |
| `transferPeriod` - [`UniqTransferPeriod`](#uniqtransferperiod) | Defines the transfer window, clarifying when the Uniq can be transferred between parties. A null value signals transfer limitations.    |
| `type` - [`UniqType!`](#uniqtype)                              | Specifies the type of asset the Uniq represents, aiding in classification and management.                                               |

##### Example

``` js
{
  "factory": UniqFactoryDigest,
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
```

[Types](#group-Types)

## UniqStaticResource

##### Description

A static representation of a Uniq resource, including a predefined hash for integrity verification and a specific URI for retrieval.

##### Fields

| Field Name                                                                  | Description                                                                                                    |
|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `contentType` - [`String!`](#string)                             | the mime type of the static resource, defining its specific format (e.g., image/jpeg, video/mp4).              |
| `integrity` - [`UniqResourceIntegrity!`](#uniqresourceintegrity) | Integrity details for the static resource, affirming its authenticity through cryptographic hash verification. |
| `uri` - [`String!`](#string)                                     | The URI for accessing the static resource, providing a direct link to the content.                             |

##### Example

``` js
{
  "contentType": "abc123",
  "integrity": UniqResourceIntegrity,
  "uri": "xyz789"
}
```

[Types](#group-Types)

## UniqTradingPeriod

##### Description

Defines a trading period for a Uniq, specifying start and end dates, as well as the duration of the trading opportunity.

##### Fields

| Field Name                                  | Description                                                                                                   |
|---------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| `duration` - [`BigInt`](#bigint) | The total duration of the trading period, measured in milliseconds, aiding in time-sensitive decision-making. |
| `endDate` - [`Date`](#date)      | Indicates the end of the trading period, with null implying no fixed conclusion and ongoing tradeability.     |
| `startDate` - [`Date!`](#date)   | Marks the beginning of the period during which the Uniq can be traded, setting temporal boundaries.           |

##### Example

``` js
{
  "duration": 987,
  "endDate": "Thu Jul 13 2023 13:27:11 GMT+0200",
  "startDate": "Thu Jul 13 2023 13:27:11 GMT+0200"
}
```

[Types](#group-Types)

## UniqTransferPeriod

##### Description

Specifies a transfer period for a Uniq, outlining when the asset can be transferred between parties within designated timeframes.

##### Fields

| Field Name                                  | Description                                                                                                 |
|---------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| `duration` - [`BigInt`](#bigint) | The length of the transfer window, expressed in milliseconds, providing clarity on the available timeframe. |
| `endDate` - [`Date`](#date)      | The end date beyond which the Uniq cannot be transferred, with null indicating no such limitation.          |
| `startDate` - [`Date!`](#date)   | The start date for when transfers of the Uniq become permissible, establishing a window of action.          |

##### Example

``` js
{
  "duration": 987,
  "endDate": "Thu Jul 13 2023 13:27:11 GMT+0200",
  "startDate": "Thu Jul 13 2023 13:27:11 GMT+0200"
}
```

[Types](#group-Types)

## UniqType

##### Description

Categorizes the nature of a Uniq asset within the ecosystem.

##### Values

| Enum Value    | Description                                                            |
|---------------|------------------------------------------------------------------------|
| `COLLECTIBLE` | A tradable asset, typically available on the marketplace for exchange. |
| `GAME`        | Represents assets specifically categorized as part of a game.          |

##### Example

``` js
"COLLECTIBLE"
```

[Types](#group-Types)

## WalletId

##### Description

A non empty string that represent a user wallet id.

##### Example

``` js
"aa1aa2aa3ag4"
```
