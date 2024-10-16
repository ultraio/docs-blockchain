---
title: 'addkeys.a'
order: 49

---

# addkeys.a

Add key pairs for Uniq factory

## Technical Behavior

The manager of an Uniq factory should be able to add one or more key pairs at the factory level at any time, which means key pairs at the factory level can change over time. When that happens, all Uniqs minted from that factory should be able to use all key pairs no matter when minted.

Key `name` has to be unique.

Key `type` is the data type of the value, and it has to be in the supported list from `keytypes` table.

`edit_rights` define which permission can edit the value including manager | owner | authorized editor | user group.

`editor` this is authorized editor mentioned above, and it required to have at least one account here.

`default_value` has to match the key `type`, like integer if it's `uint` or `int`. Also, if the type is an array, total element cannot exceed the limit from [`keytypes` action](./setktypes.md). In case of the `string` or `string[]`, total character cannot exceed the limit.

Factory RAM payment will be calculated based on the usage of `key_defs` which include some fixed RAM usage and usage which will determined by the key `type`. And the payment is non-refundable.

Uniq RAM payment for the new key will be calculated based on how many Uniq are already minted from factory. And this payment will be put into factory on-chain RAM vault, which will be refunded when Uniq is burn.

## Action Parameters

The properties of this type are provided below:

| Property Name | C++ Type                     | JavaScript Type | Description                                                                             |
| ------------- | ---------------------------- | --------------- | --------------------------------------------------------------------------------------- |
| factory_id    | uint64_t                     | Number          | ID of the Uniq factory for which key pairs will be added.                               |
| key_defs      | std::vector\<key_def_action> | Object[]        | The definition of the key including name, type, edit right, editors and default values. |
| memo          | string                       | String          | Memo                                                                                    |

### `key_def_action` interface

| Property Name | C++ Type                        | JavaScript Type | Description                                                                                     |
| ------------- | ------------------------------- | --------------- | ----------------------------------------------------------------------------------------------- |
| name          | string                          | String          | The name of the key, need to be unique.                                                         |
| type          | string                          | String          | The type of the value store in the key.                                                         |
| edit_rights   | uint8_t                         | Number          | Determine who can edit the key including asset manager, owner, authorized editor or user group. |
| editors       | std::vector\<name>              | String[]        | The editor if authorized editor is set.                                                         |                 
| default_value | std::optional\<key_value_store> | Object          | The default value of the key and this need to match with type.                                  |                 

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
cleos push action eosio.nft.ft addkeys.a '{ "factory_id": "10", "key_defs": [ { "name": "id", "type": "uint8[]", "edit_rights": 8, "editors": [ "bob" ], "default_value": [ "UINT8_VEC", [0, 1] ] } ], "memo": "new key pairs" }' -p alice@active
```

## JavaScript - eosjs

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'addkeys.a',
            authorization: [{ actor: 'alice', permission: 'active' }],
            data: {
                factory_id: 10,
                key_defs: [{
                    name: "id",
                    type: "uint8[]",
                    edit_rights: 8,
                    editors: [
                        "bob"
                    ],
                    default_value: [
                        "UINT8_VEC",
                        [0, 1]
                    ]
                }],
                "memo": "add new key pairs"
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```