---
title: 'setktypes'
order: 48

---

# setktypes.a

Update supported value type for on chain data

## Technical Behavior

Here is the default table of supported value type and its limit.

| C++ Type   | Type string | Limit by element |
| ---------- | ----------- | ---------------- |
| int8       | int8        | 1                |
| int16      | int16       | 1                |
| int32      | int32       | 1                |
| int64      | int64       | 1                |
| uint8      | uint8       | 1                |
| uint16     | uint16      | 1                |
| uint32     | uint32      | 1                |
| uint64     | uint64      | 1                |
| float      | float       | 1                |
| double     | double      | 1                |
| string     | string      | 128              |
| INT8_VEC   | int8[]      | 128              |
| INT16_VEC  | int16[]     | 64               |
| INT32_VEC  | int32[]     | 32               |
| INT64_VEC  | int64[]     | 16               |
| UINT8_VEC  | uint8[]     | 128              |
| UINT16_VEC | uint16[]    | 64               |
| UINT32_VEC | uint32[]    | 32               |
| UINT64_VEC | uint64[]    | 16               |
| FLOAT_VEC  | float[]     | 32               |
| DOUBLE_VEC | double[]    | 16               |
| STRING_VEC | string[]    | 256              |

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
cleos push action eosio.nft.ft setktypes '{ "key_types": [ {"key_type": "int8", "element_number_limit": 1}, {"key_type": "int16", "element_number_limit": 1}, {"key_type": "int32", "element_number_limit": 1}, {"key_type": "int64", "element_number_limit": 1}, {"key_type": "uint8", "element_number_limit": 1}, {"key_type": "uint16", "element_number_limit": 1}, {"key_type": "uint32", "element_number_limit": 1}, {"key_type": "uint64", "element_number_limit": 1}, {"key_type": "float", "element_number_limit": 1}, {"key_type": "double", "element_number_limit": 1}, {"key_type": "string", "element_number_limit": 128}, {"key_type": "int8[]", "element_number_limit": 128}, {"key_type": "int16[]", "element_number_limit": 64}, {"key_type": "int32[]", "element_number_limit": 32}, {"key_type": "int64[]", "element_number_limit": 16}, {"key_type": "uint8[]", "element_number_limit": 128}, {"key_type": "uint16[]", "element_number_limit": 64}, {"key_type": "uint32[]", "element_number_limit": 32}, {"key_type": "uint64[]", "element_number_limit": 16}, {"key_type": "float[]", "element_number_limit": 32}, {"key_type": "double[]", "element_number_limit": 16}, {"key_type": "string[]", "element_number_limit": 256} ] }' -p ultra.nft.ft@active
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
                    {key_type: "float", element_number_limit: 1},
                    {key_type: "double", element_number_limit: 1},
                    {key_type: "string", element_number_limit: 128},
                    {key_type: "int8[]", element_number_limit: 128},
                    {key_type: "int16[]", element_number_limit: 64},
                    {key_type: "int32[]", element_number_limit: 32},
                    {key_type: "int64[]", element_number_limit: 16},
                    {key_type: "uint8[]", element_number_limit: 128},
                    {key_type: "uint16[]", element_number_limit: 64},
                    {key_type: "uint32[]", element_number_limit: 32},
                    {key_type: "uint64[]", element_number_limit: 16},
                    {key_type: "float[]", element_number_limit: 32},
                    {key_type: "double[]", element_number_limit: 16},
                    {key_type: "string[]", element_number_limit: 256}
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