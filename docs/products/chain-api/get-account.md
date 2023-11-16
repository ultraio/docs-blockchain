---
title: '/get_account'
deploy: ['staging', 'mainnet']
---

# POST - /get_account

Returns account information for a given blockchain account name.

**Highlights**

* core_liquid_balance - Amount of UOS Available
* RAM available
* Permission list

### Body

Account name should be `., 1-5, a-z` and up to 12 characters long.

```typescript
{
    "account_name": "ultra"
}
```

### Request

```
curl -X POST -d '{ "account_name": "ultra" }'  https://api.ultra.eossweden.org/v1/chain/get_account
```

### Response

::: details Response
```typescript
{
	"account_name": "ultra",
	"head_block_num": 61670882,
	"head_block_time": "2022-06-10T20:32:04.500",
	"privileged": true,
	"last_code_update": "2021-11-09T11:58:35.500",
	"created": "2021-06-18T07:07:07.000",
	"core_liquid_balance": "0.01100000 UOS",
	"ram_quota": -1,
	"net_weight": -1,
	"cpu_weight": -1,
	"net_limit": {
		"used": -1,
		"available": -1,
		"max": -1
	},
	"cpu_limit": {
		"used": -1,
		"available": -1,
		"max": -1
	},
	"ram_usage": 2301250,
	"permissions": [
		{
			"perm_name": "active",
			"parent": "owner",
			"required_auth": {
				"threshold": 1,
				"keys": [],
				"accounts": [
					{
						"permission": {
							"actor": "eosio.prods",
							"permission": "active"
						},
						"weight": 1
					}
				],
				"waits": []
			}
		},
		{
			"perm_name": "owner",
			"parent": "",
			"required_auth": {
				"threshold": 1,
				"keys": [],
				"accounts": [
					{
						"permission": {
							"actor": "eosio.prods",
							"permission": "active"
						},
						"weight": 1
					}
				],
				"waits": []
			}
		}
	],
	"total_resources": null,
	"self_delegated_bandwidth": null,
	"refund_request": null
}
```
:::


## Try It

<DemoApi 
	type="POST" 
	query="/v1/chain/get_account" 
	:body="[{ key: 'account_name', value: 'ultra' }]"
/>