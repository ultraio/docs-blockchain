---
title: 'adjtrdwin.a'
order: 5
deploy: []
---

# adjtrdwin.a - adjust trading windows

Allows a token manager to update the `trading_window_start` and `trading_window_end` for an existing token factory.

## Technical Behavior

Tradeability can only be update from this:

-   Uniq is never Tradable (`trading_window_start`=null, `trading_window_end`=0)

to one of these:

-   Uniq is always Tradable (`trading_window_start`=null, `trading_window_end`=null)
-   There is a start date (`trading_window_start`=X, `trading_window_end`=null)
-   There is an end date (`trading_window_start`=null, `trading_window_end`=Y)
-   There is a full trading window (`trading_window_start`=X, `trading_window_end`=Y)

**Parameter validation**

-   `token_factory_id` is required and a token factory for the provided ID must exist.
-   If provided, `trading_window_end` should be greater than `trading_window_start`.

## Action Parameters

| Property Name        | C++ Type                 | Javascript Type | Example               |
| -------------------- | ------------------------ | --------------- | --------------------- |
| token_factory_id     | uint64_t                 | number          | 1                     |
| trading_window_start | optional<time_point_sec> | string          | "2023-01-01T00:00:00" |
| trading_window_end   | optional<time_point_sec> | string          | "2023-01-01T00:00:30" |

## CLI - cleos

```bash
cleos push action eosio.nft.ft adjtrdwin.a '[ 1, "2023-01-01T00:00:00", "2023-01-01T00:00:30" ]' -p manager.acc
```

## JavaScript - eosjs

```js
await api.transact({
    actions: [
        {
            account: 'eosio.nft.ft',
            name: 'adjtrdwin.a',
            authorization: [{ actor: 'manager.acc', permission: 'active' }],
            data: {
                token_factory_id: 1,
                trading_window_start: '2023-01-01T00:00:00',
                trading_window_end: '2023-01-01T00:00:30',
            },
        },
    ],
});
```
