---
title: 'Factory Metadata'

order: -99995
---

# Factory metadata

## Introduction

Factory metadata represents the high level overview of the Uniqs that this factory could mint. This metadata should always exist when a token factory is created and should contain the necessary information about what this factory is and what kind of tokens are expected to be minted from it. By specifying distinguishable name, description and media images you provide the necessary feedback for the users to know what to expect from tokens minted from this factory. Example of the theme for a factory could be a collection of images and in this case factory metadata would describe what kind of images to expect from this factory and what there common concept is or you could provide a breakdown about the rarity of some of images to expect (e.g. there are some more rare and special images compared to the rest)

## Concepts

Refer to this page for explanation on some concepts used in the metadata files

> [Common metadata concepts](./common-metadata-concepts.md)

## Metadata fields

Here is a short breakdown of possible fields for factory metadata and their purpose. In the next section a more detailed information will be provided for some of the fields. For exact restrictions per field see JSON schema at the bottom of the document

| Property Name | Description                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| specVersion   | Defines the specification version for this metadata. The only allowed value is 1.0 for this version of specification                                                                                                                                                                                                                                                                                                                             |
| name          | Name of the token factory as a whole. Can represent the collection name                                                                                                                                                                                                                                                                                                                                                                          |
| subName       | Additional flavor name used to describe this Uniq factory                                                                                                                                                                                                                                                                                                                                                                                        |
| description   | Detailed explanation about what this factory represents, mints anr/or used for                                                                                                                                                                                                                                                                                                                                                                   |
| author        | Specifies who the author of this factory is                                                                                                                                                                                                                                                                                                                                                                                                      |
| defaultLocale | Specifies the locale of this factory metadata. For this version the only allowed value is `en-US`.                                                                                                                                                                                                                                                                                                                                               |
| media         | Contains the media used to display this factory. Refer to [Metadata media](./common-metadata-concepts.md#metadata-media) for more details                                                                                                                                                                                                                                                                                                        |
| properties    | Arbitrary data that you can supply that does not fit any other category                                                                                                                                                                                                                                                                                                                                                                          |
| attributes    | This field allows you to specify structured numerical or string data for the factory. Each attribute must be represented as an object with a `name` - title of the attribute; `description` - details about what this attribute is; `type` - either `boolean`, `number`, `string` or `ISODateString`; `dynamic` - true or false depending on if it is intended to change over time or not, in any case it will be a part of the hash calculation |
| resources     | Allows additional media or reference data to be added as a part of the metadata. Each resource must be described as a `staticResource` (details here [staticResource](./common-metadata-concepts.md#static-resource))                                                                                                                                                                                                                            |

The following fields are required to be specified:
- `specVersion`
- `name`
- `defaultLocale`
- `media`
  - `product`
    - `contentType`
    - `uris`
    - `integrity`
      - `type`
      - `hash`
  - `square`
    - `contentType`
    - `uris`
    - `integrity`
      - `type`
      - `hash`

## Minimalistic example

To get started here is a simplest example of the valid factory metadata you can provide

```JSON
{
    "specVersion":"1.0",
    "name":"Uniq factory",
    "defaultLocale":"en-US",
    "media": {
        "product": {
            "contentType":"image/png",
            "integrity": {
                "type":"SHA256","hash":"76378a8e97f500dfd69fb9816189fb503a913e0f306a4307bc2d4d61ded8f89e"
            },
            "uris":["https://example.io/uniq/76378a8e97f500dfd69fb9816189fb503a913e0f306a4307bc2d4d61ded8f89e.png"]
        },
        "square": {
            "contentType":"image/png",
            "integrity":{
                "type":"SHA256","hash":"f41938bf16ed3e779b3de6c63e531bce84101947da49617ee6f6322ecadb1b0e"
            },
            "uris":["https://example.io/uniq/f41938bf16ed3e779b3de6c63e531bce84101947da49617ee6f6322ecadb1b0e.png"]
        }
    }
}
```

## JSON schema

Here the JSON schema is provided for Uniq factory metadata which can be used for validation purposes using AJV. Additionally it gives insight about what the allowed values are for different fields

```JSON
{
    "type": "object",
    "description": "The NTF Factory metadata",
    "properties": {
        "specVersion": {
            "type": "string",
            "description": "The version of the NFT Factory metadata standard specification which the manifest uses. This enables the interpretation of the context. Compliant manifests MUST use a value of 0.1 when referring to this version of the specification."
        },
        "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256,
            "description": "Identifies the asset to which this NFT Factory represents"
        },
        "subName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256,
            "description": "A secondary name that identify a special flavor of the asset to which this NFT represents. For example “Limited Edition”"
        },
        "description": {
            "type": "string",
            "description": "Long description of the asset to which this NFT represents",
            "maxLength": 4096
        },
        "author": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256,
            "description": "Specify the author(s) of the asset to which this NFT represents"
        },
        "defaultLocale": {
            "type": "string",
            "enum": ["en-US"],
            "description": "Specify the local of this metadata. The value must be one of the locales from the list available here: https://github.com/unicode-org/cldr-json/blob/master/cldr-json/cldr-core/availableLocales.json"
        },
        "media": {
            "description": "Specify the advertising content for this NFT Factory",
            "type": "object",
            "properties": {
                "product": { "$ref": "#/definitions/staticResource" },
                "square": { "$ref": "#/definitions/staticResource" },
                "hero": { "$ref": "#/definitions/staticResource" },
                "gallery": {
                    "description": "A list of path pointing to images, videos... relative from this manifest relative from this manifest.",
                    "type": "array",
                    "items": { "$ref": "#/definitions/staticResource" }
                }
            },
            "required": ["product", "square"],
            "additionalProperties": false
        },
        "properties": {
            "description": "Specify the properties for this NFT Factory",
            "type": "object",
            "additionalProperties": true
        },
        "attributes": {
            "description": "Describes the attributes of each NFT generated by this factory",
            "type": "object",
            "additionalProperties": {
                "type": "object",
                "properties": {
                    "dynamic": { "type": "boolean" },
                    "type": {
                        "type": "string",
                        "enum": ["boolean", "number", "string", "ISODateString"]
                    },
                    "name": { "type": "string" },
                    "description": { "type": "string" }
                },
                "required": ["type", "name"],
                "additionalProperties": false
            }
        },
        "resources": {
            "type": "object",
            "additionalProperties": { "$ref": "#/definitions/staticResource" }
        }
    },
    "required": ["specVersion", "name", "defaultLocale", "media"],
    "additionalProperties": false,
    "definitions": {
        "staticResource": {
            "type": "object",
            "description": "A static resource provides a hash to check integrity",
            "properties": {
                "contentType": { "type": "string" },
                "uris": {
                    "type": "array",
                    "minItems": 1,
                    "items": { "type": "string" }
                },
                "integrity": {
                    "type": "object",
                    "properties": {
                        "type": { "type": "string", "enum": ["SHA256"] },
                        "hash": {
                            "type": "string",
                            "description": "only 64 characters SHA256 hash is supported initially",
                            "minLength": 64,
                            "maxLength": 64,
                            "pattern": "^([a-fA-F0-9]{2})+$"
                        }
                    },
                    "required": ["type", "hash"],
                    "additionalProperties": false
                }
            },
            "required": ["contentType", "uris", "integrity"],
            "additionalProperties": false
        }
    }
}
```