---
title: '/get_info'

order: -99
---

# GET - /get_info

A good way to get information about the chain including a unique identifier for the chain, current head block number, etc.

### Request

```
curl -X GET https://api.ultra.eossweden.org/v1/chain/get_info
```

### Response

::: details Response
```typescript
{
	"server_version": "dcec8f25",
	"chain_id": "a9c481d....",
	"head_block_num": 61691776,
	"last_irreversible_block_num": 61691680,
	"last_irreversible_block_id": "03ad57....",
	"head_block_id": "03ad5....",
	"head_block_time": "2022-06-10T23:26:11.500",
	"head_block_producer": "eosnationftw",
	"virtual_block_cpu_limit": 400000,
	"virtual_block_net_limit": 1048576,
	"block_cpu_limit": 399999,
	"block_net_limit": 1048568,
	"server_version_string": "v2.0.9-1.13.1",
	"fork_db_head_block_num": 61691776,
	"fork_db_head_block_id": "03ad57....",
	"server_full_version_string": "v2.0.9-1.13.1-dc...."
}
```
:::

## Try It

<DemoApi 
	type="GET" 
	query="/v1/chain/get_info" 
	:body="[]"
/>