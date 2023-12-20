---
title: 'Types'
deploy: ['staging', 'mainnet']
order: 6
---

# Types

## BigFloat

##### Description

A binary integer decimal representation of a 128-bit decimal value,
supporting 34 decimal digits of significand and an exponent range of
-6143 to +6144.

##### Example

``` js
987.65
```

[Types](#group-Types)

## BigInt

##### Description

Defines a Long class for representing a 64-bit two’s-complement integer
value.

##### Example

``` js
987
```

[Types](#group-Types)

## Boolean

##### Description

The `Boolean` scalar type represents `true` or `false`.

##### Example

``` js
true
```

[Types](#group-Types)

## Currency

##### Description

Represents a currency, can be used to display pricing unit.

##### Fields

| Field Name                                 | Description                                                                                                                              |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `code` - [`String!`](#string)   | Country currency code, defines alpha codes and numeric codes for the representation of currencies. This field follow ISO 4217 code list. |
| `symbol` - [`String!`](#string) | The currency symbol or currency sign is a graphic symbol used to denote a currency unit.                                                 |

##### Example

``` js
{
  "code": "xyz789",
  "symbol": "abc123"
}
```

[Types](#group-Types)

## Date

##### Description

ISO 8601 date format. The timezone is always zero UTC offset, as denoted
by the suffix Z. Milliseconds since epoch is an alternative input
format.

##### Example

``` js
"Thu Jul 13 2023 13:27:11 GMT+0200"
```

[Types](#group-Types)

## Float

##### Description

The `Float` scalar type represents signed double-precision fractional
values as specified by [IEEE
754](https://en.wikipedia.org/wiki/IEEE_floating_point).

##### Example

``` js
123.45
```

[Types](#group-Types)

## Int

##### Description

The `Int` scalar type represents non-fractional signed whole numeric
values. Int can represent values between -(2^31) and 2^31 - 1.

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

The MonetaryAmount object represents a monetary value using a currency's
unit.

##### Fields

| Field Name                                       | Description                                |
|--------------------------------------------------|--------------------------------------------|
| `amount` - [`BigFloat!`](#bigfloat)   | Amount value with a precision of 8 digits. |
| `currency` - [`Currency!`](#currency) | Currency unit related to the amount.       |

##### Example

``` js
{"amount": 987.65, "currency": Currency}
```

[Types](#group-Types)

## Pagination

##### Description

Pagination applied to the result. Maximum limit allowed result per page
is 25.

##### Fields

| Field Name                          | Description                                                   |
|-------------------------------------|---------------------------------------------------------------|
| `limit` - [`Int!`](#int) | Maximum number of expected results per page. Mandatory field. |
| `skip` - [`Int!`](#int)  | Number of results skipped. Mandatory field.                   |

##### Example

``` js
{"limit": 987, "skip": 123}
```

[Types](#group-Types)

## PaginationInput

##### Description

Pagination filter. Used as query argument, it's optional filter. If not
provided, default pagination will be applied with skip value to 0 and
limit to 25 maximum results per page.

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

The `String` scalar type represents textual data, represented as UTF-8
character sequences. The String type is most often used by GraphQL to
represent free-form human-readable text.

##### Example

``` js
"xyz789"
```

[Types](#group-Types)

## Uniq

##### Description

The Uniq object represents all information about a uniq.

##### Fields

| Field Name                                                                | Description                                                                 |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `factory` - [`UniqFactory!`](#uniqfactory)                     | Information on factory related to this uniq.                                |
| `id` - [`BigInt!`](#bigint)                                    | On chain id of the uniq.                                                    |
| `metadata` - [`UniqMetadata!`](#uniqmetadata)                  | Information on uniq metadata.                                               |
| `mintDate` - [`Date!`](#date)                                  | Date of uniq mint.                                                          |
| `owner` - [`WalletId!`](#walletid)                             | WalletId of the uniq owner.                                                 |
| `resale` - [`UniqResale`](#uniqresale)                         | Information about the uniq resale. Null means not on sale.                  |
| `serialNumber` - [`BigInt!`](#bigint)                          | Serial number of the uniq.                                                  |
| `tradingPeriod` - [`UniqTradingPeriod`](#uniqtradingperiod)    | Window time which trading actions are allowed. Null means not tradable      |
| `transferPeriod` - [`UniqTransferPeriod`](#uniqtransferperiod) | Window time which transfer actions are allowed. Null means not transferable |
| `type` - [`UniqType!`](#uniqtype)                              | Specify the type of the uniq asset.                                         |

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

The UniqDynamicResource object represents a resource, it's an image,
video or a file. It can be refreshed to discover changes.

##### Fields

| Field Name                                      | Description                        |
|-------------------------------------------------|------------------------------------|
| `contentType` - [`String!`](#string) | Type of resource image,video etc.  |
| `uris` - [`[String!]!`](#string)     | Uris where the resource is stored. |

##### Example

``` js
{
  "contentType": "abc123",
  "uris": ["abc123"]
}
```

[Types](#group-Types)

## UniqFactory

##### Description

The UniqFactory object represents all information about a uniq factory.

##### Fields

| Field Name                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `accountMintingLimit` - [`BigInt`](#bigint)                                   | The number of minting limit per account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `assetCreator` - [`WalletId!`](#walletid)                                     | Wallet id of who created the uniq factory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `assetManager` - [`WalletId!`](#walletid)                                     | Wallet id of whom manages the uniq lifecycle - issuing, burning, reselling etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `conditionlessReceivers` - [`[WalletId!]!`](#walletid)                        | A set of receiver account which uniqs can be transferred to without any restrictions. Without taking in account the trading windows, minimum resell price, etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `defaultUniqMetadata` - [`UniqMetadata`](#uniqmetadata)                       | uniq default metadata are utilized whenever any token is the reference that does not have a dedicated metadata uri. this can happen either intentionally if the tokens minted from the factory are identical (so there is no need for anything except default metadata) or accidentally in case due to some issue, tokens are minted without a dedicated metadata URI. In any case, the default metadata function identically to individual Uniq metadata with only exceptions that it is utilized when there is no override and the URI for this metadata is placed in the dedicated field of the factory on-chain data default_token_uri. It can be used as a fallback when uniq metadata is not yet available. |
| `id` - [`BigInt!`](#bigint)                                                   | On chain id of the uniq factory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `metadata` - [`UniqFactoryMetadata!`](#uniqfactorymetadata)                   | Metadata information of the uniq factory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `mintableWindow` - [`UniqFactoryMintableWindow!`](#uniqfactorymintablewindow) | Period of time which minting actions are allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `resale` - [`UniqFactoryResale!`](#uniqfactoryresale)                         | Information about resale operations that will be applied on uniqs on the second hand market.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `status` - [`UniqFactoryStatus!`](#uniqfactorystatus)                         | The uniq factory on chain status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `stock` - [`UniqFactoryStock!`](#uniqfactorystock)                            | Information about the circulation quantity of uniqs related to the factory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `tradingWindow` - [`UniqFactoryTradingWindow!`](#uniqfactorytradingwindow)    | Period of time which trading actions are allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `transferWindow` - [`UniqFactoryTransferWindow!`](#uniqfactorytransferwindow) | Period of time which transfer actions are allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `type` - [`UniqType!`](#uniqtype)                                             | Specify the type of the uniq factory asset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

##### Example

``` js
{
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
```

[Types](#group-Types)

## UniqFactoryActionWindow

##### Description

Interface for actions on a window period.

##### Fields

| Field Name                               | Description |
|------------------------------------------|-------------|
| `endDate` - [`Date`](#date)   |             |
| `startDate` - [`Date`](#date) |             |

##### Possible Types

| UniqFactoryActionWindow Types                                        |
|----------------------------------------------------------------------|
| [`UniqFactoryMintableWindow`](#uniqfactorymintablewindow) |
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

## UniqFactoryDigest

##### Description

The UniqFactory digest object represents all immutable informations
about a uniq factory.

##### Fields

| Field Name                                                                               | Description                                                                                  |
|------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| `assetCreator` - [`WalletId!`](#walletid)                                     | Wallet id of who created the uniq factory.                                                   |
| `assetManager` - [`WalletId!`](#walletid)                                     | Wallet id of whom manages the uniq lifecycle - issuing, burning, reselling etc.              |
| `id` - [`BigInt!`](#bigint)                                                   | On chain id of the uniq factory.                                                             |
| `maxMintableUniqs` - [`BigInt`](#bigint)                                      | The maximal number of uniq that can be minted with the factory. Null means infinite.         |
| `mintableWindow` - [`UniqFactoryMintableWindow!`](#uniqfactorymintablewindow) | Period of time which minting actions are allowed.                                            |
| `resale` - [`UniqFactoryResale!`](#uniqfactoryresale)                         | Information about resale operations that will be applied on uniqs on the second hand market. |
| `tradingWindow` - [`UniqFactoryTradingWindow!`](#uniqfactorytradingwindow)    | Period of time which trading actions are allowed.                                            |
| `transferWindow` - [`UniqFactoryTransferWindow!`](#uniqfactorytransferwindow) | Period of time which transfer actions are allowed.                                           |
| `type` - [`UniqType!`](#uniqtype)                                             | Specify the type of the uniq factory asset.                                                  |

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

## UniqFactoryList

##### Description

The UniqFactoryList object represents a list of uniq factory with
pagination information.

##### Fields

| Field Name                                             | Description                           |
|--------------------------------------------------------|---------------------------------------|
| `data` - [`[UniqFactory!]!`](#uniqfactory)  | List of factory results.              |
| `pagination` - [`Pagination!`](#pagination) | Pagination applied.                   |
| `totalCount` - [`Int!`](#int)               | Total number of uniq factory results. |

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

The UniqFactoryMetadata object represents global metadata information
related to a uniq factory.

##### Fields

| Field Name                                                                         | Description                                                                                                                                                                          |
|------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `cachedSource` - [`UniqResource`](#uniqresource)                        | Copy of the source metadata inside ultra system. Optimized access to the metadata file, should be preferred over source field if provided. Null if not stored yet into ultra system. |
| `content` - [`UniqFactoryMetadataContent`](#uniqfactorymetadatacontent) | Resolved content of the metadata file, ideal to display all metadata information about a uniq factory. Null if not resolved yet.                                                     |
| `locked` - [`Boolean!`](#boolean)                                       | Metadata modification allowed. False means metadata can change over the time. True means metadata are immutable and cannot be changed.                                               |
| `source` - [`UniqResource!`](#uniqresource)                             | All information related to the source of the metadata information.                                                                                                                   |
| `status` - [`UniqMetadataStatus!`](#uniqmetadatastatus)                 | Internal status of verification and caching metadata into ultra system. It can be used to know if the metadata content is available/displayable.                                     |

##### Example

``` js
{
  "cachedSource": UniqResource,
  "content": UniqFactoryMetadataContent,
  "locked": false,
  "source": UniqResource,
  "status": "INVALID"
}
```

[Types](#group-Types)

## UniqFactoryMetadataAttribute

##### Description

The UniqFactoryMetadataAttribute object represents a key value store
describing attributes available for uniqs related to a factory.

##### Fields

| Field Name                                                                                  | Description                               |
|---------------------------------------------------------------------------------------------|-------------------------------------------|
| `key` - [`String!`](#string)                                                     | Key that allow to retrieve the attribute. |
| `value` - [`UniqMetadataAttributeDescriptor!`](#uniqmetadataattributedescriptor) | Information details about the attribute.  |

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

The UniqFactoryMetadataContent object represents the content that
follows the uniq factory metadata structure of the NFT standard.

##### Fields

| Field Name                                                                                   | Description                                                                                |
|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| `attributes` - [`[UniqFactoryMetadataAttribute!]`](#uniqfactorymetadataattribute) | This field allows you to specify structured numeric or string data for the factory.        |
| `description` - [`String`](#string)                                               | A detailed explanation about what this factory represents, mints and/or used for.          |
| `medias` - [`UniqMedias!`](#uniqmedias)                                           | Contains the media used to display this factory. Refer to Metadata media for more details. |
| `name` - [`String!`](#string)                                                     | Name of the factory as a whole. Can represent the collection name.                         |
| `properties` - [`JSONObject`](#jsonobject)                                        | An arbitrary data that you can supply that does not fit any other category.                |
| `resources` - [`[UniqMetadataResource!]`](#uniqmetadataresource)                  | Allows additional media or reference data to be added as a part of the metadata.           |
| `subName` - [`String`](#string)                                                   | An additional flavor name used to describe this Uniq factory.                              |

##### Example

``` js
{
  "attributes": [UniqFactoryMetadataAttribute],
  "description": "xyz789",
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

The UniqFactoryMintableWindow object represents a period of time when a
uniq can be minted from a factory. \[no start, no end\], forever
mintable. \[no start, end\], can only be minted before the ending date.
\[start, no end\], can only be minted after the starting date. \[start,
end\], can only be minted between the start and end dates

##### Fields

| Field Name                               | Description                                                                                         |
|------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `endDate` - [`Date`](#date)   | The end of the time period when uniq can be minted. Null means no ending date to mint a uniq.       |
| `startDate` - [`Date`](#date) | The beginning of a time period when uniq can be minted. Null means no starting date to mint a uniq. |

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

The UniqFactoryResale object represents information about second hand
market resale operations that will be applied to a uniq related to this
factory.

##### Fields

| Field Name                                                       | Description                                                                                                                                                                   |
|------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `minimumPrice` - [`MonetaryAmount!`](#monetaryamount) | The minimum price allowed when a resell is performed on a secondhand marketplace.                                                                                             |
| `shares` - [`[UniqSaleShare!]!`](#uniqsaleshare)      | A vector of \[account, share\] pairs setting the share each account receives during the token resale. Total limit to 7000 basis_point or 70%. The receiver can be duplicated. |

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

The Uniq Factory Snapshot.

##### Fields

| Field Name                                                   | Description                                           |
|--------------------------------------------------------------|-------------------------------------------------------|
| `cursor` - [`StreamCursor`](#streamcursor)        | The optional stream cursor to resume snapshots after. |
| `id` - [`BigInt!`](#bigint)                       | On chain id of the uniq factory.                      |
| `position` - [`StreamPosition!`](#streamposition) | The stream position.                                  |
| `state` - [`UniqFactory`](#uniqfactory)           | The optional state, null means deleted.               |

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

Uniq factory on chain status.

##### Values

| Enum Value | Description                                             |
|------------|---------------------------------------------------------|
| `ACTIVE`   | On chain value 0 = active - fully functional            |
| `INACTIVE` | On chain value 1 = inactive - cannot mint               |
| `SHUTDOWN` | On chain value 2 = shutdown - cannot mint or set active |

##### Example

``` js
"ACTIVE"
```

[Types](#group-Types)

## UniqFactoryStock

##### Description

The UniqFactoryStock object represents quantity available for minting
purpose.

##### Fields

| Field Name                                     | Description                                                                            |
|------------------------------------------------|----------------------------------------------------------------------------------------|
| `authorized` - [`BigInt`](#bigint)  | The number of uniq authorized by the asset_manager to be minted by authorized minters. |
| `existing` - [`BigInt!`](#bigint)   | The number circulating uniqs, corresponding to minted uniq minus number of burnt uniq. |
| `maxMintable` - [`BigInt`](#bigint) | The maximal number of uniq that can be minted with the factory. Null means infinite.   |
| `mintable` - [`BigInt`](#bigint)    | The number of uniq left that can be minted. Null means infinite.                       |
| `minted` - [`BigInt!`](#bigint)     | The total number of minted uniq.                                                       |

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

The UniqFactoryTradingWindow object represents a period of time when a
uniq can be traded. \[no start, no end\], forever tradable. \[no start,
end\], can only be traded before the ending date. \[start, no end\], can
only be traded after the starting date. \[start, end\], can only be
traded between the start and end dates It's being checked when a
buy/resell action is performed.

##### Fields

| Field Name                               | Description                                                                                          |
|------------------------------------------|------------------------------------------------------------------------------------------------------|
| `endDate` - [`Date`](#date)   | The end of a time period when uniq can be traded. Null means no ending date to trade a uniq.         |
| `startDate` - [`Date`](#date) | The beginning of a time period when uniq can be traded. Null means no starting date to trade a uniq. |

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

The UniqFactoryTransferWindow object represents a period of time when a
uniq can be transferred. \[no start, no end\], forever transferable.
\[no start, end\], can only be transferred before the ending date.
\[start, no end\], can only be transferred after the starting date.
\[start, end\], can only be transferred between the start and end dates
It's being checked when a transfer action is performed.

##### Fields

| Field Name                               | Description                                                                                                  |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `endDate` - [`Date`](#date)   | The end of a time period when uniq can be transferred. Null means no ending date to transfer a uniq.         |
| `startDate` - [`Date`](#date) | The beginning of a time period when uniq can be transferred. Null means no starting date to transfer a uniq. |

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

The UniqList object represents a list of uniq with pagination
information.

##### Fields

| Field Name                                             | Description                            |
|--------------------------------------------------------|----------------------------------------|
| `data` - [`[Uniq!]!`](#uniq)                | List of uniq results.                  |
| `pagination` - [`Pagination!`](#pagination) | Pagination applied.                    |
| `totalCount` - [`Int!`](#int)               | Total amount of uniq matching results. |

##### Example

``` js
{
  "data": [Uniq],
  "pagination": Pagination,
  "totalCount": 123
}
```

[Types](#group-Types)

## UniqMedias

##### Description

Each token and factory must have some visual representation added to it
so it could be nicely displayed in the frontend.

##### Fields

| Field Name                                                 | Description                                                                                                                                                                                                                         |
|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `gallery` - [`[UniqResource!]!`](#uniqresource) | Here you provide a list of multiple media files. Not always would it make sense to have multiple images, but if this token is representing an in-game item then gallery images could be screenshots of this item in the game itself |
| `hero` - [`UniqResource`](#uniqresource)        | Hero image is a big banner image that is typically placed in the top middle of the page. You can think of it as a movie poster buy applied to Uniq token.                                                                           |
| `product` - [`UniqResource!`](#uniqresource)    | This is a main media resource visually representing your token. If your token is a picture of an apple, then product media would be this picture by itself.                                                                         |
| `square` - [`UniqResource!`](#uniqresource)     | Square image is used whenever multiple tokens are shown on the same page, by providing a square image you make it easy to display your token by making its representation tileable.                                                 |

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

Uniq metadata represent what this specific token is - it's name,
description and attached media and data. When the token is issued, you
can attach a URI of this Uniq metadata to the token and this way you
would create a link between on-chain token and off-chain metadata.
Example of what this metadata could represent can be an image from a
collection of various other images and in this case you would put this
image as one of the media fields and fill out the name and description
to give some flavour to the token.

##### Fields

| Field Name                                                           | Description                                                                                                                                                                          |
|----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `cachedSource` - [`UniqResource`](#uniqresource)          | Copy of the source metadata inside ultra system. Optimized access to the metadata file, should be preferred over source field if provided. Null if not stored yet into ultra system. |
| `content` - [`UniqMetadataContent`](#uniqmetadatacontent) | Resolved content of the metadata file, ideal to display all metadata information about a uniq. Null if not resolved yet.                                                             |
| `source` - [`UniqResource!`](#uniqresource)               | All information related to the source of the metadata information.                                                                                                                   |
| `status` - [`UniqMetadataStatus!`](#uniqmetadatastatus)   | Internal status of verification and caching metadata inside ultra system. Can be used to know if the metadata content is available/displayable.                                      |

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

The UniqMetadataAttribute object represents a key value store describing
attributes available for the uniq.

##### Fields

| Field Name                                                                                      | Description                                                                              |
|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| `descriptor` - [`UniqMetadataAttributeDescriptor`](#uniqmetadataattributedescriptor) | Details about the attribute.                                                             |
| `key` - [`String!`](#string)                                                         | Key that allow to retrieve the attribute.                                                |
| `value` - [`JSONPrimitive`](#jsonprimitive)                                          | The value of the attribute, the type can be determined thanks to the "descriptor" field. |

##### Example

``` js
{
  "descriptor": UniqMetadataAttributeDescriptor,
  "key": "xyz789",
  "value": "true | \"myStringValue\" | 987 | 987.65"
}
```

[Types](#group-Types)

## UniqMetadataAttributeDescriptor

##### Description

The UniqMetadataAttributeDescriptor allows you to specify structured
numerical or string data for the factory.

##### Fields

| Field Name                                                                     | Description                                                                                                                       |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| `description` - [`String`](#string)                                 | Details about what this attribute is.                                                                                             |
| `dynamic` - [`Boolean`](#boolean)                                   | Information flag to tag if the attribute is intended to change over time or not.                                                  |
| `name` - [`String!`](#string)                                       | Title of the attribute                                                                                                            |
| `type` - [`UniqMetadataAttributeType!`](#uniqmetadataattributetype) | Type of value expected. Can be used to know how to display the attribute. It can be boolean \| number \| string \| ISODateString. |

##### Example

``` js
{
  "description": "abc123",
  "dynamic": false,
  "name": "abc123",
  "type": "ISODateString"
}
```

[Types](#group-Types)

## UniqMetadataAttributeType

##### Description

Primitive type of the attribute.

##### Values

| Enum Value      | Description             |
|-----------------|-------------------------|
| `ISODateString` | Date primitive type.    |
| `boolean`       | Boolean primitive type. |
| `number`        | Number primitive type.  |
| `string`        | String primitive type.  |

##### Example

``` js
"ISODateString"
```

[Types](#group-Types)

## UniqMetadataContent

##### Description

The UniqMetadataContent object represents the content that follows the
uniq metadata structure of the NFT standard.

##### Fields

| Field Name                                                                                       | Description                                                                                                                                                                |
|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `attributes` - [`[UniqMetadataAttribute!]`](#uniqmetadataattribute)                   | Here you can specify a list of simple numerical or string attributes to go with the token. Allowed types for each of the attributes are: boolean, string and number        |
| `description` - [`String`](#string)                                                   | A detailed explanation about what this token is. The description could include some trivia or details about how it can be sued.                                            |
| `dynamicAttributes` - [`UniqDynamicResource`](#uniqdynamicresource)                   | This field is represented as a single dynamic resource and it is used to provide a URI to an external resource detailing the content of dynamic attributes for this token. |
| `dynamicResources` - [`[UniqMetadataDynamicResource!]`](#uniqmetadatadynamicresource) | Allows additional dynamic media or reference data to be added as a part of the metadata. Each resource must be described as a dynamic resource.                            |
| `medias` - [`UniqMedias!`](#uniqmedias)                                               | Contains the media used to display this token. Refer to Metadata media for more details.                                                                                   |
| `name` - [`String!`](#string)                                                         | Name of this uniq. Used for identification purposes so best to make it distinguishable from other uniqs.                                                                   |
| `properties` - [`JSONObject`](#jsonobject)                                            | An arbitrary data that you can supply that does not fit any other category.                                                                                                |
| `resources` - [`[UniqMetadataResource!]`](#uniqmetadataresource)                      | Allows additional media or reference data to be added as a part of the metadata. Each resource must be described as a static resource.                                     |
| `subName` - [`String`](#string)                                                       | An additional flavor name used to describe this Uniq token.                                                                                                                |

##### Example

``` js
{
  "attributes": [UniqMetadataAttribute],
  "description": "abc123",
  "dynamicAttributes": UniqDynamicResource,
  "dynamicResources": [UniqMetadataDynamicResource],
  "medias": UniqMedias,
  "name": "abc123",
  "properties": {"someProperty": "myStringValue", "otherProperty": 987},
  "resources": [UniqMetadataResource],
  "subName": "xyz789"
}
```

[Types](#group-Types)

## UniqMetadataDynamicResource

##### Description

Allows additional dynamic media or reference data to be added as a part
of the metadata. Each resource must be described as a dynamicResource.

##### Fields

| Field Name                                                          | Description                                              |
|---------------------------------------------------------------------|----------------------------------------------------------|
| `key` - [`String!`](#string)                             | Key that allow to retrieve the additional dynamic media. |
| `value` - [`UniqDynamicResource!`](#uniqdynamicresource) | The additional dynamic media data.                       |

##### Example

``` js
{
  "key": "xyz789",
  "value": UniqDynamicResource
}
```

[Types](#group-Types)

## UniqMetadataResource

##### Description

The UniqMetadataResource object allows additional media or reference
data to be added as a part of the metadata. Each resource must be
described as a staticResource.

##### Fields

| Field Name                                                        | Description                                      |
|-------------------------------------------------------------------|--------------------------------------------------|
| `key` - [`String!`](#string)                           | Key that allow to retrieve the additional media. |
| `value` - [`UniqStaticResource!`](#uniqstaticresource) | The additional media data.                       |

##### Example

``` js
{
  "key": "xyz789",
  "value": UniqStaticResource
}
```

[Types](#group-Types)

## UniqMetadataStatus

##### Description

Internal status of the metadata resolution.

##### Values

| Enum Value   | Description                                                                                                                                            |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `INVALID`    | Metadata resolution are in error, resources are misisng or metadata are not compliant, all informations about metadata are not or partially available. |
| `PROCESSING` | Metadata resolution is in progress inside ultra backend system.                                                                                        |
| `VALID`      | Metadata resolution are done, all informations about metadata are compliant and available.                                                             |

##### Example

``` js
"INVALID"
```

[Types](#group-Types)

## UniqResale

##### Description

The UniqResale object represents information about the resale action.

##### Fields

| Field Name                                                  | Description                                                                                                                                                                   |
|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onSaleDate` - [`Date!`](#date)                  | Date of the resale.                                                                                                                                                           |
| `price` - [`MonetaryAmount!`](#monetaryamount)   | Selling price.                                                                                                                                                                |
| `promoterBasisPoints` - [`Int`](#int)            | Promoter fees basis points. 1 means 0.0001, which means 0.01%                                                                                                                 |
| `shares` - [`[UniqSaleShare!]!`](#uniqsaleshare) | A vector of \[account, share\] pairs setting the share each account receives during the token resale. Total limit to 7000 basis_point or 70%. The receiver can be duplicated. |

##### Example

``` js
{
  "onSaleDate": "Thu Jul 13 2023 13:27:11 GMT+0200",
  "price": MonetaryAmount,
  "promoterBasisPoints": 123,
  "shares": [UniqSaleShare]
}
```

[Types](#group-Types)

## UniqResource

##### Description

The UniqResource object represents a resource, it's an image, video or a
file.

##### Fields

| Field Name                                                                 | Description                               |
|----------------------------------------------------------------------------|-------------------------------------------|
| `contentType` - [`String`](#string)                             | Type of resource image, video etc.        |
| `integrity` - [`UniqResourceIntegrity`](#uniqresourceintegrity) | Information about the resource integrity. |
| `uri` - [`String!`](#string)                                    | Uri where the resource is stored.         |

##### Example

``` js
{
  "contentType": "abc123",
  "integrity": UniqResourceIntegrity,
  "uri": "abc123"
}
```

[Types](#group-Types)

## UniqResourceIntegrity

##### Description

The UniqResourceIntegrity object provides information about the
integrity of the resource. Can be used to verify that the resource is
the attended one.

##### Fields

| Field Name                                                                     | Description                   |
|--------------------------------------------------------------------------------|-------------------------------|
| `hash` - [`String!`](#string)                                       | Hash related to the resource. |
| `type` - [`UniqResourceIntegrityType!`](#uniqresourceintegritytype) | Type of cryptographic hash.   |

##### Example

``` js
{"hash": "abc123", "type": "SHA256"}
```

[Types](#group-Types)

## UniqResourceIntegrityType

##### Description

Type of cryptographic hash used.

##### Values

| Enum Value | Description                  |
|------------|------------------------------|
| `SHA256`   | SHA256 encryption algorithm. |

##### Example

``` js
"SHA256"
```

[Types](#group-Types)

## UniqSaleShare

##### Description

The UniqSaleShare object represents a share commission on second hand
market. It can be used to display details about commissions that will be
applied when the uniq is sold.

##### Fields

| Field Name                                       | Description                                              |
|--------------------------------------------------|----------------------------------------------------------|
| `basisPoints` - [`Int!`](#int)        | The resale commission. 1 means 0.0001, which means 0.01% |
| `receiver` - [`WalletId!`](#walletid) | WalletId receiving the share.                            |

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

The UniqSerialRangeInput object represent a range of value. Can be used
to filter uniqs by a range of serial number inside a factory.

##### Fields

| Input Field                             | Description                                                                                                                                                                                     |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `max` - [`BigInt`](#bigint)  | Maximum value of the range. If provided, it has to be greater or equal than min field. Null value means it will return all existing uniqs with a serial number greater or equal than min field. |
| `min` - [`BigInt!`](#bigint) | Minimum value of the range.                                                                                                                                                                     |

##### Example

``` js
{"max": 987, "min": 987}
```

[Types](#group-Types)

## UniqSnapshot

##### Description

The Uniq Snapshot.

##### Fields

| Field Name                                                   | Description                                           |
|--------------------------------------------------------------|-------------------------------------------------------|
| `cursor` - [`StreamCursor`](#streamcursor)        | The optional stream cursor to resume snapshots after. |
| `id` - [`BigInt!`](#bigint)                       | On chain id of the uniq.                              |
| `position` - [`StreamPosition!`](#streamposition) | The stream position.                                  |
| `state` - [`UniqState`](#uniqstate)               | The optional state, null means deleted.               |

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

The Uniq State object represents all information about a uniq in
snapshot stream.

##### Fields

| Field Name                                                                | Description                                                                 |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `factory` - [`UniqFactoryDigest!`](#uniqfactorydigest)         | Information on factory related to this uniq.                                |
| `id` - [`BigInt!`](#bigint)                                    | On chain id of the uniq.                                                    |
| `metadata` - [`UniqMetadata!`](#uniqmetadata)                  | Information on uniq metadata.                                               |
| `mintDate` - [`Date!`](#date)                                  | Date of uniq mint.                                                          |
| `owner` - [`WalletId!`](#walletid)                             | WalletId of the uniq owner.                                                 |
| `resale` - [`UniqResale`](#uniqresale)                         | Information about the uniq resale. Null means not on sale.                  |
| `serialNumber` - [`BigInt!`](#bigint)                          | Serial number of the uniq.                                                  |
| `tradingPeriod` - [`UniqTradingPeriod`](#uniqtradingperiod)    | Window time which trading actions are allowed. Null means not tradable      |
| `transferPeriod` - [`UniqTransferPeriod`](#uniqtransferperiod) | Window time which transfer actions are allowed. Null means not transferable |
| `type` - [`UniqType!`](#uniqtype)                              | Specify the type of the uniq asset.                                         |

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

The UniqStaticResource object represents a resource, it's an image,
video or a file. Represented as a UniqResource with a hash specified.

##### Fields

| Field Name                                                                  | Description                               |
|-----------------------------------------------------------------------------|-------------------------------------------|
| `contentType` - [`String!`](#string)                             | Type of resource image,video etc.         |
| `integrity` - [`UniqResourceIntegrity!`](#uniqresourceintegrity) | Information about the resource integrity. |
| `uri` - [`String!`](#string)                                     | Uri where the resource is stored.         |

##### Example

``` js
{
  "contentType": "xyz789",
  "integrity": UniqResourceIntegrity,
  "uri": "xyz789"
}
```

[Types](#group-Types)

## UniqTradingPeriod

##### Description

The UniqTradingPeriod object represents a period of time when a uniq can
be traded. \[no start, no end\], forever tradable. \[no start, end\],
can only be traded before the ending date. \[start, no end\], can only
be traded after the starting date. \[start, end\], can only be traded
between the start and end dates.

##### Fields

| Field Name                                  | Description                                                                                                                                   |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| `duration` - [`BigInt`](#bigint) | Duration of trading period, number of milliseconds. Ideal to display the remaining time before the period ends. Null means infinite duration. |
| `endDate` - [`Date`](#date)      | The ending of a time period when uniq can be traded. Null means no ending date to trade a uniq.                                               |
| `startDate` - [`Date!`](#date)   | The beginning of a time period when uniq can be traded.                                                                                       |

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

The UniqTransferPeriod object represents a period of time when a uniq
can be transferred. \[no start, no end\], forever transferable. \[no
start, end\], can only be transferred before the ending date. \[start,
no end\], can only be transferred after the starting date. \[start,
end\], can only be transferred between the start and end dates.

##### Fields

| Field Name                                  | Description                                                                                                                                    |
|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `duration` - [`BigInt`](#bigint) | Duration of transfer period, number of milliseconds. Ideal to display the remaining time before the period ends. Null means infinite duration. |
| `endDate` - [`Date`](#date)      | The ending of a time period when uniq can be transferred. Null means no ending date to transfer a uniq.                                        |
| `startDate` - [`Date!`](#date)   | The beginning of a time period when uniq can be transferred.                                                                                   |

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

Specify the type of the uniq asset.

##### Values

| Enum Value    | Description                         |
|---------------|-------------------------------------|
| `COLLECTIBLE` | Asset available on the marketplace. |
| `GAME`        | Asset of type Game.                 |

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
