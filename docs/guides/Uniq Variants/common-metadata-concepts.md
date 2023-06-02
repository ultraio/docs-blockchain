# Common metadata concepts

## Integrity

Integrity allows standard integrators and Ultra backend to validate how genuine the provided information is. By providing a hash within the integrity field it is possible to verify that the associated data (e.g. media image or another JSON file) is what it is claimed to be by calculating it's hash and comparing it with the one provided within the metadata.

For now the only supported hash algorithm is SHA256 and hash must be represented as a hexidecimal string

The following schema is used for the integrity field

```JSON
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
```

## Static resource

Static resource describes some piece of data that is intended to change infrequently or never at all. For static resource you specify it's `contentType`, provide a single URI pointing to the resource and provide an `integrity` field (described above). Each time any change is done to the underlying data described by the static resource you must update the associated `integrity` field to maintain data consistency. Note that this may require you to also update the hash in any parent metadata files containing the resource fields and it will also require you to update token/factory metadata hash on-chain.

The following schema is used for the static resource field

```JSON
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
```

## Dynamic resource

Dynamic resource describes some piece of data that is intended to change frequently or you are is not intended to have any integrity or validation attached to it. For dynamic resource you specify it's `contentType` and provide a single URI pointing to the resource. No integrity field is specified in this case and there is no need to update any other place in the metadata file in case underlying data pointed by dynamic resource is changed.

The following schema is used for the dynamic resource field

```JSON
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
```

## Metadata media

Each token and factory must have some visual representation added to it so it could be nicely displayed in the frontend. Each media must be represented as a [staticResource](#static-resource) with a hash specified.

Breakdown of each individual media:

| Field   | Description                                                                                                                                                                                                                         |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| product | This is a main media resource visually representing your token. If your token is a picture of an apple then `product` media would be this picture by itself                                                                         |
| square  | Square image is used whenever multiple tokens are shown on the same page, by providing a square image you make it easy to display your token by making it's representation tileable.                                                |
| hero    | Hero image is a big banner image that is typically placed in the top middle of the page. You can think of it as a movie poster buy applied to Uniq token.                                                                           |
| gallery | Here you provide a list of multiple media files. Not always would it make sense to have multiple images, but if this token is representing an in-game item then gallery images could be screenshots of this item in the game itself |


```JSON
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
}
```