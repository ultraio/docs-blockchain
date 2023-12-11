---
title: '/get_transaction'

---

# GET - /v2/history/get_transaction

::: warning

This request requires an endpoint with Hyperion available. Check [Hyperion Endpoints](./index.md#hyperion-endpoints) to ensure you are using the correct one.

:::

Returns all transaction infromation for a given `transaction id` from an endpoint that is running a [Hyperion Endpoint](./index.md#hyperion-endpoints)

### Request

```
curl -X GET https://ultra.eosusa.io/v2/history/get_transaction?id=dd02fa177852034e75c664a180aa3c02f4706c616f18a05ad09c798d93fd3be2
```

### Response

::: details Response
```typescript
{
	"query_time_ms": 1.601,
	"executed": true,
	"cache_expires_in": 3591,
	"trx_id": "dd02fa177852034e75c664a180aa3c02f4706c616f18a05ad09c798d93fd3be2",
	"lib": 156429132,
	"cached_lib": false,
	"actions": [
		{
			"action_ordinal": 1,
			"creator_action_ordinal": 0,
			"act": {
				"account": "eosio.oracle",
				"name": "pushrate",
				"authorization": [
					{
						"actor": "ultra.oracle",
						"permission": "pushrate"
					}
				],
				"data": {
					"exchange": "ubitmax",
					"rates": [
						{
							"timestamp": "1702313012",
							"price": "0.25198000 DUOS"
						}
					],
					"volume": "214550.93620000 USD"
				}
			},
			"@timestamp": "2023-12-11T16:43:50.000",
			"block_num": 156429209,
			"block_id": "0952eb993f9bec8de17e98ab36cdc62b0864644cb2b0979aa1bbc5eac2d7fb5c",
			"producer": "eosioubisoft",
			"trx_id": "dd02fa177852034e75c664a180aa3c02f4706c616f18a05ad09c798d93fd3be2",
			"global_sequence": 334847694,
			"cpu_usage_us": 228,
			"net_usage_words": 75,
			"signatures": [
				"SIG_K1_K4fFawjHMqx69uQevoiprN4tKPRr43QHJPDeCXAcHncNiy87Uy6yovZ2PFMH88ip8ZBwWG3abXGtYXLTjqXdSVXa7EFQdJ"
			],
			"code_sequence": 15,
			"abi_sequence": 15,
			"act_digest": "A798CE26B18DD51734F4E183F84502FDBE38E6A07CA5CC3120CED9B83B26E85A",
			"receipts": [
				{
					"receiver": "eosio.oracle",
					"global_sequence": "334847694",
					"recv_sequence": "177618958",
					"auth_sequence": [
						{
							"account": "ultra.oracle",
							"sequence": "177618965"
						}
					]
				}
			],
			"timestamp": "2023-12-11T16:43:50.000"
		}
	]
}
```
:::