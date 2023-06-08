---
title: 'Uniq Default Metadata'
deploy: ['staging', 'mainnet']
---


# Uniq default metadata

## Introduction

Uniq default metadata is utilized whenever any token is reference that does not have a dedicated metadata URI. This can happen either intentionally if the tokens minted from the factory are identical (so there is no need for anything except default metadata) or accidentally in case due to some issue the tokens are minted without a dedicated metadata URI. In any case the default metadata functions identically to individual Uniq metadata with only exceptions that it is utilized when there is no override and the URI for this metadata is placed in the dedicated field of the factory on-chain data `default_token_uri`.

## Supported dynamic values

Default token URI supports special `dynamic` values that can be used to modify the URI based on different context values which are different between different tokens/factories. If none of those values are specified the the URI is considered to be `static` (meaning that it is not context dependant). Followind `dynamic` values are supported:

| Value               | Description                                             |
| ------------------- | ------------------------------------------------------- |
| factory_id          | ID of the token factory from which the token was minted |
| token_id            | ID of the token                                         |
| token_hash          | Hash of the token                                       |
| token_serial_number | Serial number of the token                              |

To specify a `dynamic` values within a URI you must enclose it in `{}` like so: `https://example.io/{token_id}.json` which should evaluate to `https://example.io/42.json` for the token with serial number of 42 whenever Ultra or any other integrator will be reading this default token metadata.

## Metadata fields

Identical to [Uniq metadata fields](./uniq-metadata.md#metadata-fields)

## Minimalistic example

```JSON
{
    "specVersion":"1.0",
    "name":"Uniq default variant",
    "defaultLocale":"en-US",
    "media": {
        "product": {
            "contentType":"image/png",
            "integrity": {
                "type":"SHA256","hash":"76378a8e97f500dfd69fb9816189fb503a913e0f306a4307bc2d4d61ded8f89e"
            },
            "uris":["https://example.io/default/76378a8e97f500dfd69fb9816189fb503a913e0f306a4307bc2d4d61ded8f89e.png"]
        },
        "square": {
            "contentType":"image/png",
            "integrity":{
                "type":"SHA256","hash":"f41938bf16ed3e779b3de6c63e531bce84101947da49617ee6f6322ecadb1b0e"
            },
            "uris":["https://example.io/default/f41938bf16ed3e779b3de6c63e531bce84101947da49617ee6f6322ecadb1b0e.png"]
        }
    }
}
```

## JSON schema

Identical to [Uniq metadata schema](./uniq-metadata.md#json-schema)
