---
title: '/get_block'
deploy: ['staging', 'mainnet']
---

# POST - /get_block

Returns information about a block.

**Highlights**

* confirmed - Determines if a block is finalized.
* timestamp - When the block was made.
* producer - Who produced the block

### Body

```typescript
{
	"block_num_or_id": 61672404
}
```

### Request

```
curl -X POST -d '{ "block_num_or_id": 61672404 }'  https://api.ultra.eossweden.org/v1/chain/get_block
```

### Response

::: details Response
```typescript
{
	"timestamp": "2022-06-10T20:44:45.500",
	"producer": "eosriobrazil",
	"confirmed": 0,
	"previous": "03ad0bd3...",
	"transaction_mroot": "71a4f5...",
	"action_mroot": "afbd14c...",
	"schedule_version": 15,
	"new_producers": null,
	"producer_signature": "SIG_K1_K5...",
	"transactions": [],
	"id": "03ad0bd4a31c382ad257cf72247dfbdc3317bd977f1762353a6f5171620819b5",
	"block_num": 61672404,
	"ref_block_prefix": 1926191058
}
```
:::

## Try It

<DemoApi 
	type="POST" 
	query="/v1/chain/get_block" 
	:body="[{ key: 'block_num_or_id', value: '8675309' }]"
/>