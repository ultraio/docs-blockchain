---
title: 'create.b'
order: 10
deploy: ['staging', 'mainnet']
---

# create.b

Create a token factory.

## Behavior

Used to create a token factory for the asset_creator and will be managed by the asset_manager.

The asset_manager and the asset_creator need to agree on the token factory configuration according to their specific business strategy, like resale share, etc. The agreement is done via the co-signing of the transaction.

By creating the token factory together, the asset_creator agrees to all the terms, including letting the asset_manager manage the factory and its tokens.

If the stat parameter is not specified, a new token factory is created in inactive state which may be changed with the setstatus action.

RAM usage of a factory creation is covered by eosio.nftram.

If asset_manager is other than ultra.nft.ft, the cost of a factory creation is paid in UOS to eosio.pool.

## Technical Behavior

Upon creation, a token factory id will be automatically assigned to the new token factory. This id is incremental.

**Token factory ID**

-   64-bit number

-   Factory counter is stored in a singleton table, which will be automatically increased each time a token factory is created.

**Factory creation**

-   RAM usage of a factory creation is covered by eosio.nftram. 4GB will be gifted to eosio.nfrram to start with. The action fails If the unused RAM of eosio.nftram is less than or equal to 200MB.

-   factory data is stored to factory.b table. Each factory.b entry’s pack size should be less than or equal to 1920 bytes.

-   if asset_manager is other than ultra.nft.ft, The cost of a factory creation is paid to eosio.pool and it is non-refundable.

    -   First, the cost in USD is (factory RAM payment size) \* (RAM price), where

        -   factory RAM payment size: 2KB

        -   RAM price: 0.15USD/KB

    -   The cost is paid in UOS. The action gets 1 MINUTE conversion rate in USD/UOS from eosio.oracle contract. and calculates the cost by
        (2KB \* 0.15USD/KB) / (conversion rate) = 0.3USD/(conversion rate)

**Authorized minters registration**

-   Authorized minters can be registered at the same time, by being specified as authorized_minters (an array of minter_authorization_info) parameter.

-   Registration cost is calculated and charged to asset_manager. For the details, see authorized minters info RAM usage/cost calculation and payment/refund.

Minting limit per account of a token factory
Minting limit can also be set at the same time, by being specified as account_minting_limit parameter.

**Notifications**

`require_recipient` is done for `asset_manager` and `asset_creator`

## Action Parameters

Try to think of the action parameters as a **JSON Object** when reading this table. There will be a **JavaScript** example of the action below this table.

| Property Name           | C++ Type                    | JavaScript Type | Required | Default (null input) | Remarks                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | --------------------------- | --------------- | -------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| memo                    | string                      | string          | yes      | no default           | memo cannot have more than 256 bytes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| asset_creator           | name                        | string          | yes      | no default           | asset_manager and asset_creator are required to sign this actionasset_manager will be the one who pays the RAM for the token factory storageasset_manager and asset_creator can be same accountasset_manager will be any valid account including ultra.nft.ft                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| asset_manager           | name                        | string          | yes      | no default           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| minimum_resell_price    | asset                       | string          | no       | null                 | Should be specified in UOS or USD.If set to null or 0, tokens can be transferred to other accounts with the transfer action, as long as token still in trading window and outside of lockup time. If set to > 0, the token can only be sold to others through the buy action. `conditionless_receivers` will ignore these restrictions when transferred                                                                                                                                                                                                                                                                                                                                                                                                                              |
| resale_shares           | vector::\<resale_share>     | Array           | no       | null                 | Each resale share has a `receiver` (C++ type: `name`, JS type: `string`) and `basis_point` (C++ type: uint16_t, JS type: `number`). `1` in `basis_point` mean `0.0001`, which means 0.01%. Total limit of resale shares: 7000 basis_point or 70%. Receiver can be duplicated                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| mintable_window_start   | time_point_sec              | string          | no       | null                 | Input will be in UTC date up to seconds. For example: `'2021-06-01T00:00:00'`. Combination: `[no start, no end]` - forever mintable; `[no start, end]` - can only be minted before the ending date; `[start, no end]` - can only be minted after the starting date; `[start, end]` - can only be minted between the start and end dates. Conditions: If end date is set, it must be after the current block time; if start and end are both set, the end date must be after the start date                                                                                                                                                                                                                                                                                           |
| mintable_window_end     | time_point_sec              | string          | no       | null                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| trading_window_start    | time_point_sec              | string          | no       | null                 | There are 2 types of inputs available: `null`: will ignore this property. `UTC_date_string` exact date in UTC, up to seconds. For example: `'2021-06-01T00:00:00'`. Combination: `[no start, no end]` - forever tradable; `[no start, end]` - can only be traded before ending date; `[start, no end]` - can only be traded after starting date; `[start, end]` - can only be traded in between start and end date. Conditions: If both input is the same type a `time_point_sec`, end date must be larger than the start date.Where this is being checked: `buy`, `resell`, `transfer`. `conditionless_receivers` will ignore this when transferring tokens                                                                                                                         |
| trading_window_end      | time_point_sec              | string          | no       | null                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| recall_window_start     | time_since_mint             | number          | no       | null                 | There are 2 types of inputs available: `null`: will ignore this property; time from the token mint time. For example: `5`. In this example exactly 5 seconds after the mint time. Combination: `[no start, no end]` - not recallable; `[no start, end]` - can only be recalled before ending date `[start, no end]` - can only be recalled after starting date; `[start, end]` - can only be recalled in between start and end date. Conditions: If both input is the same type a `time_since_mint`, end date must be larger than the start date. Where this being checked: `recall`. NOTE: From Release 36, recall feature will be disabled by default when creating new factory, which meant create action will fail if `recall_window_start` or `recall_window_end` was inputted. |
| recall_window_end       | time_since_mint             | number          | no       | null                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| max_mintable_tokens     | uint64_t                    | number          | no       | null                 | `null` means this can be minted with an unlimited capacity; > 0 means the factory can only mint as many tokens as specified                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| lockup_time             | uint32_t                    | number          | no       | 0                    | Value is in secondsCannot resell or transfer this token when it’s still in lockup time, unless the token is transferred to a conditionless_receiver. NOTE: From Release 36, lockup feature will be disabled by default when creating new factory, which meant create action will fail if lockup_time was inputted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| conditionless_receivers | vector                      | Array           | no       | null                 | if set, all accounts must existwhen transferred to an account in the list, it will bypass checks for trading window and lockup time                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| stat                    | uint8_t                     | number          | no       | 1                    | `0` - active token factories can do everything. `1` - inactive token factories can do everything, except mint. `2` - shutdown token factories can do everything, except mint, and activate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| factory_uri             | string                      | string          | yes      | no default           | base URI pointing to the metadata of the token factory. e.g. Ultra.io/meta/1234, redundancy.ultra.io/meta/1234. Values cannot be an empty string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| factory_hash            | checksum256                 | string          | no       | null                 | Hash of factory meta data. Optional - simple SHA256 hash of metadata file to guarantee no external content changes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| authorized_minters      | minter_authorization_vector | Array           | no       | null                 | Specifies accounts authorized to mint tokens from the token factory. minter_authorization_info is defined as a tuple of eosio::name (the account being authorized) and uint32_t (quantity that the authorized account can mint).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| account_minting_limit   | uint32_t                    | number          | no       | null                 | Must be at least 1.Limits the amount of tokens that can be minted per eos account.Set to null to allow for unlimited tokens per eos account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| transfer_window_start   | time_point_sec              | string          | no       | null                 | There are 2 types of inputs available: `null`: will ignore this property; `UTC_date_string`: exact date in UTC, up to seconds. For example: '2021-06-01T00:00:00'. Combinations: `[no start, no end]` - forever transferrable; `[no start, end]` - can only be transferred before ending date; `[start, no end]` - can only be transferred after starting date; `[start, end]` - can only be transferred in between start and end date. Conditions: If both input is the same type a time_point_sec, end date must be larger than the start date. Where this is being checked: `transfer`                                                                                                                                                                                            |
| transfer_window_end     | time_point_sec              | string          | no       | null                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| maximum_uos_payment     | asset                       | string          | no       | null                 | Specifies the maximum amount of UOS that the caller can pay.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| default_token_uri       | string                      | string          | yes      | no default           | URI pointing to the token metadata if there is no token-specific metadata. Must not be empty and can be either static or dynamic. More details [here](../../../guides/Uniq%20Variants/organizing-metadata.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| default_token_hash      | checksum256                 | string          | no       | null                 | Hash of static default token URI. It is optional to provide this and it should be a SHA256 of the content of default token URI. If default token URI is dynamic - specify the hash per token instead                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| lock_hash               | bool                        | boolean         | no       | false                | Whether to prevent changes to the hashes provided during the factory creation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## CLI - cleos

```bash
cleos push action eosio.nft.ft create.b '[{"memo":"","asset_manager":"ultra.nft.ft","asset_creator":"ultra","minimum_resell_price":null,"resale_shares":[{"receiver":"ultra.nft.ft", "basis_point":1}],"mintable_window_start":"2021-05-31T00:00:00","mintable_window_end":null,"trading_window_start": "2021-05-31T00:00:00","trading_window_end":null,"recall_window_start": 5,"recall_window_end":null,"max_mintable_tokens":10000,"lockup_time":0,"conditionless_receivers":null,"stat":0,"factory_uri":"test","factory_hash":null, "authorized_minters":null,"account_minting_limit":100,"transfer_window_start":1,"transfer_window_end":null, maximum_uos_payment: null, "default_token_uri": "test2", "default_token_hash":null, "lock_hash":false}]' -p ultra.nft.ft -p ultra
```

## JavaScript - eosjs

```js
await api.transact({
  actions: [
    {
      account: "eosio.nft.ft",
      name: "create.b",
      authorization: [{ actor: "ultra.nft.ft", permission: "active" }, { actor: "asset_creator.acc", permission: "active" }],
      data: {
        create: {
          memo: "",
          asset_manager: 'ultra.nft.ft',
          asset_creator: 'asset_creator.acc',
          minimum_resell_price: '1.00000000 USD',
          resale_shares: [
              {"receiver": "resale1", "basis_point":1},
              {"receiver": "resale2", "basis_point":1}
          ],
          mintable_window_start: '2021-05-31T00:00:00',
          mintable_window_end: null,
          trading_window_start: '2021-05-31T00:00:00',
          trading_window_end: null,
          recall_window_start: 5,
          recall_window_end: null,
          max_mintable_tokens: null,
          lockup_time: 0,
          conditionless_receivers: ['receiver1'],
          stat: 0,
          factory_uri: 'test',
          factory_hash: 'd5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523',
          authorized_minters : [{authorized_minter:"ultra", quantity: 1}],
          account_minting_limit: 100,
          transfer_window_start: 1,
          transfer_window_end: null,
          maximum_uos_payment: null,
          default_token_uri: 'test2',
          default_token_hash: null,
          lock_hash: null
        },
      },
    },
]}, {
  blocksBehind: 3,
  expireSeconds: 30,
}),
```
