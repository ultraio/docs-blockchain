---
title: 'setvals.a'
order: 50

---

# setvals.a

Set key values of an Uniq

## Technical Behavior

Before setting values, the key have to be defined in factory with [`addkeys.a` action](./addkeys.a.md)

Only editor including owner | manager | authorized editor can update Uniq's values if the edit right is configured for them.

The key value will only store in Uniq, and will be stored as key index and key value. Key index will be referred to factory key definition list.

In `key_values`, `key_name` must be unique and existed in factory keys. `key_value` must match the type defined in factory keys.

If no `editor` is included, owner will be the editor and the editor also need to sign the contract.

No RAM payment requires for this action since it's already paid in factory level.

## Action Parameters

The properties of this type are provided below:

| Property Name | C++ Type              | JavaScript Type | Description                                   |
| ------------- | --------------------- | --------------- | --------------------------------------------- |
| owner         | name                  | String          | Onwer of the Uniq                             |
| editor        | optional\<name>       | String          | The authorized editor of the key              |
| token_id      | uint64_t              | Number          | The ID of the Uniq that value will be updated |
| key_values    | key_values_action_vec | Object[]        | The list of key name and value for updating   |
| memo          | string                | String          | Memo                                          |

`key_values_action_vec` is the vector of `key_values_action`

### `key_values_action` interface

| Property Name | C++ Type        | JavaScript Type | Description                                                                                    |
| ------------- | --------------- | --------------- | ---------------------------------------------------------------------------------------------- |
| key_name      | string          | String          | The name of the key defined in factory keys.                                                   |
| key_value     | key_value_store | Object[]        | The value that will be set for the key. Value needs to match the type defined in factory keys. |

`key_value_store` will be an array with first element is type of the value and second is the value. Here is the support list and example:

| Value Type | Key Def Type string | Example                    |
| ---------- | ------------------- | -------------------------- |
| int8       | int8                | ["int8", 0]                |
| int16      | int16               | ["int16", 0]               |
| int32      | int32               | ["int32", 0]               |
| int64      | int64               | ["int64", 0]               |
| uint8      | uint8               | ["uint8", 0]               |
| uint16     | uint16              | ["uint16", 0]              |
| uint32     | uint32              | ["uint32", 0]              |
| uint64     | uint64              | ["uint64", 0]              |
| float      | float               | ["float", 0.1]             |
| double     | double              | ["double", 0.1]            |
| string     | string              | ["string", "a"]            |
| INT8_VEC   | int8[]              | ["INT8_VEC", [0,1,2]]      |
| INT16_VEC  | int16[]             | ["INT16_VEC", [0,1,2]]     |
| INT32_VEC  | int32[]             | ["INT32_VEC", [0,1,2]]     |
| INT64_VEC  | int64[]             | ["INT64_VEC", [0,1,2]]     |
| UINT8_VEC  | uint8[]             | ["UINT8_VEC", [0,1,2]]     |
| UINT16_VEC | uint16[]            | ["UINT16_VEC", [0,1,2]]    |
| UINT32_VEC | uint32[]            | ["UINT32_VEC", [0,1,2]]    |
| UINT64_VEC | uint64[]            | ["UINT64_VEC", [0,1,2]]    |
| FLOAT_VEC  | float[]             | ["FLOAT_VEC", [0.1,1.2]]   |
| DOUBLE_VEC | double[]            | ["DOUBLE_VEC", [0.1,1.2]]  |
| STRING_VEC | string[]            | ["STRING_VEC", ["a", "b"]] |

## CLI - cleos

```bash
cleos push action eosio.nft.ft setvals.a '{ "owner": "alice", "editor": null, "token_id": 8, "keys_values": [ "key_name": "keyname", "key_value": [ "uint8", 3 ] ], "memo": "set key value" }' -p alice@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'addkeys.a',
            authorization: [{ actor: 'alice', permission: 'active' }],
            data:  {
                owner: "alice",
                editor: null,
                token_id: 8,
                keys_values: [
                    key_name: "keyname",
                    key_value: [ "uint8", 3 ]
                ],
                "memo": "set key value"
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```