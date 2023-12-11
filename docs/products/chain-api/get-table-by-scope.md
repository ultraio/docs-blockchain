---
title: '/get_table_by_scope'

---

# POST - /v1/chain/get_table_by_scope

Returns tables available and their given scopes for a specific contract account name. Useful for seeing what entries made it into a table and the amount of rows in that table.

### Body

```typescript
{
	"code": "eosio.token",
    "limit": 2
}
```

### Additional Parameters

There are many additional parameters but here are the useful ones.

* lower_bound - The lowest matching start point in table rows. Useful for looking from forward to back.

* upper_bound - The highest matching point in the table rows. Useful for looking from back to forward.

* table - filter by table name

* limit - How many entries to return.

### Request

```
curl -X POST -d '{ "code": "eosio.token", "limit": 2 }'  https://api.ultra.eossweden.org/v1/chain/get_table_by_scope
```

### Response

If the response has "more" with an account name that means there are more entries below and potentially above.

::: details Response
```typescript
{
	"rows": [
		{
			"code": "eosio.token",
			"scope": "........ehbp5",
			"table": "stat",
			"payer": "eosio.token",
			"count": 1
		},
		{
			"code": "eosio.token",
			"scope": "aa1aa2aa3aa4",
			"table": "accounts",
			"payer": "ultra.eosio",
			"count": 1
		}
	],
	"more": "aa1aa2aa3ab4"
}
```
:::

## Try It

<DemoApi 
	type="POST" 
	query="/v1/chain/get_table_by_scope" 
	:body="[
		{ key: 'code', value: 'eosio.token'},
		{ key: 'table', value: 'accounts' },
		{ key: 'limit', value: 10 }
	]"
/>