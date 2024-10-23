---
title: 'setktypes'
order: 48

---

# setktypes.a

Update supported value type for on chain data

## Technical Behavior

Here is the default table of supported value type and its limit.

| C++ Type | Type string | Limit by element |
| -------- | ----------- | ---------------- |
| int8     | int8        | 1                |
| int16    | int16       | 1                |
| int32    | int32       | 1                |
| int64    | int64       | 1                |
| uint8    | uint8       | 1                |
| uint16   | uint16      | 1                |
| uint32   | uint32      | 1                |
| uint64   | uint64      | 1                |
| float    | float32     | 1                |
| double   | float64     | 1                |
| string   | string      | 128              |

**Note**: In case of `string` and `string[]`, it will count the total characters instead.

Only Ultra will have authority to update this list.

`key_types` can only extend the default list, cannot change the type name and its order, since we use this order to store type index in factory's keys.

## Action Parameters

The properties of this type are provided below:

| Property Name | C++ Type                    | JavaScript Type | Description                        |
| ------------- | --------------------------- | --------------- | ---------------------------------- |
| key_types     | std::vector\<key_type_info> | Object[]        | The key types that will be updated |

### `key_type_info` interface

| Property Name        | C++ Type | JavaScript Type | Description                                                                             |
| -------------------- | -------- | --------------- | --------------------------------------------------------------------------------------- |
| key_type             | string   | String          | The name of the key, needs to be unique.                                                |
| element_number_limit | uint16_t | Number          | The maximum number of entries allowed in dynamic types. For static types defaults to 1. |

## CLI - cleos

```bash
cleos push action eosio.nft.ft setktypes '{ "key_types": [ {"key_type": "int8", "element_number_limit": 1}, {"key_type": "int16", "element_number_limit": 1}, {"key_type": "int32", "element_number_limit": 1}, {"key_type": "int64", "element_number_limit": 1}, {"key_type": "uint8", "element_number_limit": 1}, {"key_type": "uint16", "element_number_limit": 1}, {"key_type": "uint32", "element_number_limit": 1}, {"key_type": "uint64", "element_number_limit": 1}, {"key_type": "float32", "element_number_limit": 1}, {"key_type": "float64", "element_number_limit": 1}, {"key_type": "string", "element_number_limit": 128} ] }' -p ultra.nft.ft@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'addkeys.a',
            authorization: [{ actor: 'ultra.nft.ft', permission: 'active' }],
            data: {
                key_types: [
                    {key_type: "int8", element_number_limit: 1},
                    {key_type: "int16", element_number_limit: 1},
                    {key_type: "int32", element_number_limit: 1},
                    {key_type: "int64", element_number_limit: 1},
                    {key_type: "uint8", element_number_limit: 1},
                    {key_type: "uint16", element_number_limit: 1},
                    {key_type: "uint32", element_number_limit: 1},
                    {key_type: "uint64", element_number_limit: 1},
                    {key_type: "float32", element_number_limit: 1},
                    {key_type: "float64", element_number_limit: 1},
                    {key_type: "string", element_number_limit: 128}
                ]
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```