---
title: 'settrnfwin.a'
order: 28
deploy: ['experimental', 'staging', 'mainnet']
---

# settrnfwin.a - set transfer window

Allows a token manager to update the `transfer_window_start` and `transfer_window_end` for an existing token factory.

::: warning
This action is disabled.

Refer to *[exchange a uniq guide](../../../../tutorials/uniq-factories/factory-management/exchange-a-uniq-using-smart-contract.md)* or *[swap uniqs using purchase options](../../../../tutorials/uniq-factories/factory-management/exchange-a-uniq-using-smart-contract.md#swap-uniqs)* pages for alternative migration solutions to a new factory
:::

## Technical Behavior

Required authorization is a token factory manager

Transferability can only be update from this:

-   Uniq is never transferable (`transfer_window_start` = `null`, `transfer_window_end` = `1970-01-01T00:00:00`)

to one of these:

-   Uniq is always transferable (`transfer_window_start`=null, `transfer_window_end`=null)
-   There is a start date (`transfer_window_start`=X, `transfer_window_end`=null)
-   There is an end date (`transfer_window_start`=null, `transfer_window_end`=Y)
-   There is a full transfer window (`transfer_window_start`=X, `transfer_window_end`=Y)

**Parameter validation**

-   `token_factory_id` is required and a token factory for the provided ID must exist.
-   If provided, `transfer_window_end` should be greater than `transfer_window_start`.

## Action Parameters

| Property Name         | C++ Type                 | Javascript Type | Example               |
| --------------------- | ------------------------ | --------------- | --------------------- |
| token_factory_id      | uint64_t                 | number          | 123                   |
| transfer_window_start | optional<time_point_sec> | string          | "2023-01-01T00:00:00" |
| transfer_window_end   | optional<time_point_sec> | string          | "2023-01-01T12:00:00" |

## CLI - cleos

```bash
cleos push action eosio.nft.ft settrnfwin.a '[ 123, "2023-01-01T00:00:00", "2023-01-01T12:00:00" ]' -p manager.acc
```

## JavaScript - eosjs

```js
await api.transact({
    actions: [
        {
            account: 'eosio.nft.ft',
            name: 'settrnfwin.a',
            authorization: [{ actor: 'manager.acc', permission: 'active' }],
            data: {
                token_factory_id: 123,
                transfer_window_start: '2023-01-01T00:00:00',
                transfer_window_end: '2023-01-01T12:00:00',
            },
        },
    ],
});
```