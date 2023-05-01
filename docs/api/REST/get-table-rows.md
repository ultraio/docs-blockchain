---
title: '/get_table_rows'
deploy: ['staging', 'mainnet']
---

# POST - /get_table_rows

Returns rows in a table given a code, table, and a scope. Rows will return empty if there is no table available under that table, or scope.

### Body

```typescript
{
	"code": "eosio.nft.ft",
	"table": "factory.a",
	"scope": "eosio.nft.ft",
	"json": true,
    "limit": 5
}
```

### Additional Parameters

There are many additional parameters but here are the useful ones.

* lower_bound - The lowest matching start point in table rows. Useful for looking from forward to back.

* upper_bound - The highest matching point in the table rows. Useful for looking from back to forward.

* limit - How many entries to return.

* json - convert from serialized to readable json. Should always set this to true.

### Request

```
curl -X POST -d '{"code": "eosio.nft.ft", "table": "factory.a", "scope": "eosio.nft.ft", "json": true, "limit": 5}'  https://api.ultra.eossweden.org/v1/chain/get_table_rows
```

### Response

If the response has "more" with an account name that means there are more entries below and potentially above.

::: details Response
```typescript
{
	"rows": [
		{
			"id": 0,
			"asset_manager": "ultra.nft.ft",
			...more here
		}
	],
	"more": true,
	"next_key": "1"
}
```
:::