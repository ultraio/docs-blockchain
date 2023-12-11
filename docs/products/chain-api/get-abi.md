---
title: '/get_abi'

outline: [0,4]
---

# POST - /v1/chain/get_abi

Returns information about a smart contract's available actions, tables, etc. This is really useful for creating data validation off-chain for forms when having a user create a transaction based on manual entries.

## Body

```typescript
{
	"account_name": "ultra.tools"
}
```

## Request

```
curl -X POST -d '{ "account_name": "ultra.tools" }'  https://api.ultra.eossweden.org/v1/chain/get_abi
```

## Response

::: details Response
```typescript
{
	"account_name": "ultra.tools",
	"abi": {
		"version": "eosio::abi/1.1",
		"types": [],
		"structs": [
			{
                // This is an action name
                // The action itself can be found further down.
				"name": "correlate",
				"base": "",
                // These are the required fields
				"fields": [
					{
						"name": "payer",
						"type": "name"
					},
					{
						"name": "correlation_id",
						"type": "string"
					}
				]
			}
		],
		"actions": [
            // This action matches the one above.
			{
				"name": "correlate",
				"type": "correlate",
				"ricardian_contract": ""
			}
		],
		"tables": [
			{
				"name": "corrids",
				"index_type": "i64",
				"key_names": [],
				"key_types": [],
				"type": "correlation_id"
			}
		],
		"ricardian_clauses": [],
		"error_messages": [],
		"abi_extensions": [],
		"variants": []
	}
}
```
:::

## Try It

<DemoApi 
	type="POST" 
	query="/v1/chain/get_abi" 
	:body="[{ key: 'account_name', value: 'eosio.token' }]"
/>