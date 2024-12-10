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

| Property Name | C++ Type                        | JavaScript Type | Description                                                                                               |
| ------------- | ------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------- |
| name          | string                          | String          | The name of the key, needs to be unique.                                                                  |
| type          | string                          | String          | The type of the value stored in the key.                                                                  |
| edit_rights   | uint8_t                         | Number          | Bitmask, determines who can edit the key including asset manager, owner, authorized editor or user group. |
| editors       | std::vector\<name>              | String[]        | The editor if authorized editor is set.                                                                   |
| default_value | std::optional\<key_value_store> | Object          | The default value of the key which needs to match with type.                                              |

`key_value_store` will be an array with first element is type of the value and second is the value. Here is the support list and example:

| Value Type | Key Def Type string | Example          |
| ---------- | ------------------- | ---------------- |
| int8       | int8                | ["int8", 0]      |
| int16      | int16               | ["int16", 0]     |
| int32      | int32               | ["int32", 0]     |
| int64      | int64               | ["int64", 0]     |
| uint8      | uint8               | ["uint8", 0]     |
| uint16     | uint16              | ["uint16", 0]    |
| uint32     | uint32              | ["uint32", 0]    |
| uint64     | uint64              | ["uint64", 0]    |
| float      | float32             | ["float32", 0.1] |
| double     | float64             | ["float64", 0.1] |
| string     | string              | ["string", "a"]  |

### `edit_rights` bitmask breakdown

| Value  | Description                                   |
| ------ | --------------------------------------------- |
| `0x01` | Manager can edit                              |
| `0x02` | Owner can edit                                |
| `0x04` | Authorized editor can edit (used with `0x08`) |
| `0x08` | Editor is a user group                        |

## CLI - cleos

```bash
cleos push action eosio.nft.ft addkeys.a '{ "factory_id": 10, "key_defs": [ { "name": "id1", "type": "int8", "edit_rights": 8, "editors": [ "bob" ], "default_value": [ "int8", -8 ] }, { "name": "id2", "type": "int16", "edit_rights": 8, "editors": [ "bob" ], "default_value": [ "int16", 16 ] }, { "name": "id3", "type": "int32", "edit_rights": 8, "editors": [ "bob" ], "default_value": [ "int32", -32 ] }, { "name": "id4", "type": "int64", "edit_rights": 8, "editors": [ "bob" ], "default_value": [ "int64", 64 ] }, { "name": "id5", "type": "uint8", "edit_rights": 8, "editors": [ "bob" ], "default_value": [ "uint8", 8 ] }, { "name": "id6", "type": "uint16", "edit_rights": 8, "editors": [ "bob" ], "default_value": [ "uint16", 16 ] }, { "name": "id7", "type": "uint32", "edit_rights": 8, "editors": [ "bob" ], "default_value": [ "uint32", 32 ] }, { "name": "id8", "type": "uint64", "edit_rights": 8, "editors": [ "bob" ], "default_value": [ "uint64", 64 ] }, { "name": "id9", "type": "float32", "edit_rights": 8, "editors": [ "bob" ], "default_value": [ "float32", -1.32 ] }, { "name": "id10", "type": "float64", "edit_rights": 8, "editors": [ "bob" ], "default_value": [ "float64", 1.64 ] }, { "name": "id11", "type": "string", "edit_rights": 8, "editors": [ "bob" ], "default_value": [ "string", "abc" ] } ], "memo": "add new key pairs" }' -p alice@active
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
                key_defs: [
                    {
                        name: "id1",
                        type: "int8",
                        edit_rights: 8,
                        editors: [ "bob" ],
                        default_value: [ "int8", -8 ]
                    },
                    {
                        name: "id2",
                        type: "int16",
                        edit_rights: 8,
                        editors: [ "bob" ],
                        default_value: [ "int16", 16 ]
                    },
                    {
                        name: "id3",
                        type: "int32",
                        edit_rights: 8,
                        editors: [ "bob" ],
                        default_value: [ "int32", -32 ]
                    },
                    {
                        name: "id4",
                        type: "int64",
                        edit_rights: 8,
                        editors: [ "bob" ],
                        default_value: [ "int64", 64 ]
                    },
                    {
                        name: "id5",
                        type: "uint8",
                        edit_rights: 8,
                        editors: [ "bob" ],
                        default_value: [ "uint8", 8 ]
                    },
                    {
                        name: "id6",
                        type: "uint16",
                        edit_rights: 8,
                        editors: [ "bob" ],
                        default_value: [ "uint16", 16 ]
                    },
                    {
                        name: "id7",
                        type: "uint32",
                        edit_rights: 8,
                        editors: [ "bob" ],
                        default_value: [ "uint32", 32 ]
                    },
                    {
                        name: "id8",
                        type: "uint64",
                        edit_rights: 8,
                        editors: [ "bob" ],
                        default_value: [ "uint64", 64 ]
                    },
                    {
                        name: "id9",
                        type: "float32",
                        edit_rights: 8,
                        editors: [ "bob" ],
                        default_value: [ "float32", -1.32 ]
                    },
                    {
                        name: "id10",
                        type: "float64",
                        edit_rights: 8,
                        editors: [ "bob" ],
                        default_value: [ "float64", 1.64 ]
                    },
                    {
                        name: "id11",
                        type: "string",
                        edit_rights: 8,
                        editors: [ "bob" ],
                        default_value: [ "string", "abc" ]
                    }
                ],
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