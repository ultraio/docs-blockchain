---
title: 'Uniq Metadata'

order: -99993
---


# Uniq metadata

## Introduction

Uniq metadata represents what this specific token is - it's name, description and attached media and data. When the token is issued you can attach a URI of this Uniq metadata to the token and this way you would create a link between on-chain token and off-chain metadata. Example of what this metadata could represent can be an image from a collection of various other images and in this case you would put this image as one of the `media` fields and fill out the name and description to give some flavour to the token.

## Concepts

Refer to this page for explanation on some concepts used in the metadata files

> [Common metadata concepts](./common-metadata-concepts.md)

## Metadata fields

| Property Name     | Description                                                                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| specVersion       | Defines the specification version for this metadata. The only allowed value is 1.0 for this version of specification                                                                                                             |
| name              | Name of this token. Used for identification purposes so best to make it distinguishable from other tokens                                                                                                                        |
| subName           | Additional flavor name used to describe this Uniq token                                                                                                                                                                          |
| description       | Detailed explanation about what this token is. Description could include some trivia or details about how it can be sued                                                                                                         |
| author            | Specifies who the author of this token is                                                                                                                                                                                        |
| defaultLocale     | Specifies the locale of this token metadata. For this version the only allowed value is `en-US`.                                                                                                                                 |
| media             | Contains the media used to display this token. Refer to [Metadata media](./common-metadata-concepts.md#metadata-media) for more details                                                                                          |
| properties        | Arbitrary data that you can supply that does not fit any other category                                                                                                                                                          |
| attributes        | Here you can specify a list of simple numerical or string attributes to go with the token. Allowed types for each of the attributes are: `boolean`, `string` and `number`                                                        |
| dynamicAttributes | This field is represented as a single [dynamicResource](./common-metadata-concepts.md#dynamic-resource) and it is used to provide a URI to an external resource detailing the content of dynamic attributes for this token.      |
| resources         | Allows additional media or reference data to be added as a part of the metadata. Each resource must be described as a `staticResource` (details here [staticResource](./common-metadata-concepts.md#static-resource))            |
| dynamicResources  | Allows additional dynamic media or reference data to be added as a part of the metadata. Each resource must be described as a `dynamicResource` (details here [dynamicResource](./common-metadata-concepts.md#dynamic-resource)) |

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

```JSON
{
    "specVersion":"1.0",
    "name":"Uniq variant (#68)",
    "defaultLocale":"en-US",
    "media": {
        "product": {
            "contentType":"image/png",
            "integrity": {
                "type":"SHA256","hash":"76378a8e97f500dfd69fb9816189fb503a913e0f306a4307bc2d4d61ded8f89e"
            },
            "uris":["https://example.io/uniqs/68/76378a8e97f500dfd69fb9816189fb503a913e0f306a4307bc2d4d61ded8f89e.png"]
        },
        "square": {
            "contentType":"image/png",
            "integrity":{
                "type":"SHA256","hash":"f41938bf16ed3e779b3de6c63e531bce84101947da49617ee6f6322ecadb1b0e"
            },
            "uris":["https://example.io/uniqs/68/f41938bf16ed3e779b3de6c63e531bce84101947da49617ee6f6322ecadb1b0e.png"]
        }
    }
}
```

## JSON schema

```JSON
{
    "type": "object",
    "title": "TokenMetadata",
    "description": "The NFT metadata",
    "properties": {
        "specVersion": {
            "type": "string",
            "description": "The version of the NFT metadata standard specification which the manifest uses. This enables the interpretation of the context. Compliant manifests MUST use a value of 0.1 when referring to this version of the specification."
        },
        "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256,
            "description": "Identifies the asset to which this NFT represents"
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
            "description": "Specify the advertising content for this NFT",
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
            "description": "Specify the properties for this NFT",
            "type": "object",
            "additionalProperties": true
        },
        "attributes": {
            "description": "Specify the attributes for this NFT",
            "type": "object",
            "additionalProperties": {
                "oneOf": [{ "type": "boolean" }, { "type": "string" }, { "type": "number" }]
            }
        },
        "dynamicAttributes": { "$ref": "#/definitions/dynamicResource" },
        "resources": {
            "type": "object",
            "additionalProperties": { "$ref": "#/definitions/staticResource" }
        },
        "dynamicResources": {
            "type": "object",
            "additionalProperties": { "$ref": "#/definitions/dynamicResource" }
        }
    },
    "required": ["specVersion", "name", "defaultLocale", "media"],
    "additionalProperties": false,
    "definitions": {
        "staticResource": {
            "type": "object",
            "title": "StaticResource",
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
        },
        "dynamicResource": {
            "type": "object",
            "title": "DynamicResource",
            "description": "A dynamic resource can be refreshed to discover changes",
            "properties": {
                "contentType": { "type": "string" },
                "uris": {
                    "type": "array",
                    "minItems": 1,
                    "items": { "type": "string" }
                }
            },
            "required": ["contentType", "uris"],
            "additionalProperties": false
        }
    }
}
```