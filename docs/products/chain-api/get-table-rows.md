---
title: '/get_table_rows'

---

# POST - /v1/chain/get_table_rows

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

### How to fetch the NFTs of a given account

- *code* is eosio.nft.ft, where NFT smart contract is deployed.
- *table* is token.b.
- *scope* is the owner account, in this case: *fy1rp2kk3np4*.

::: details NFT query
```shell
curl -s -X POST http://ultra.api.eosnation.io/v1/chain/get_table_rows -H 'Content-Type: application/json' --data '{"table":"token.b","scope":"fy1rp2kk3np4","code":"eosio.nft.ft","limit":1,"json":true}'

# output example
{
  "rows": [
    {
      "id": 189,
      "token_factory_id": 2,
      "mint_date": "2021-11-26T07:21:01",
      "serial_number": 37,
      "uos_payment": 0,
      "uri": null,
      "hash": null
    }
  ],
  "more": true,
  "next_key": "272"
}

```
:::


### How to fetch the info of a given factory

- *code* is eosio.nft.ft, where NFT smart contract is deployed.
- *table* is factory.b.
- *scope* is eosio.nft.ft.
- *lower_bound* is the factory id from the above NFT query result: 2

::: details factory query
```shell
curl -s -X POST http://ultra.api.eosnation.io/v1/chain/get_table_rows -H 'Content-Type: application/json' --data '{"table":"factory.b","scope":"eosio.nft.ft","code":"eosio.nft.ft","lower_bound":2,"limit":1,"json":true}'

# example output
{
  "rows": [
    {
      "id": 2,
      "asset_manager": "ultra.nft.ft",
      "asset_creator": "ultra.nft.ft",
      "minimum_resell_price": "0.00000000 UOS",
      "resale_shares": [
        {
          "receiver": "gg1kf2or3vt4",
          "basis_point": 500
        },
        {
          "receiver": "mc1lh2wu3wx4",
          "basis_point": 500
        }
      ],
      "mintable_window_start": null,
      "mintable_window_end": null,
      "trading_window_start": null,
      "trading_window_end": null,
      "recall_window_start": 0,
      "recall_window_end": null,
      "lockup_time": 0,
      "conditionless_receivers": [
        "ultra.nft.ft"
      ],
      "stat": 0,
      "factory_uri": "https://s3.us-east-1.wasabisys.com/ultraio-uniq-prod/3844d9f938db8144895407e198492a2b7a670e975c2224f880815f38c18f7e11.zip",
      "factory_hash": "3844d9f938db8144895407e198492a2b7a670e975c2224f880815f38c18f7e11",
      "max_mintable_tokens": 80,
      "minted_tokens_no": 80,
      "existing_tokens_no": 80,
      "authorized_tokens_no": null,
      "account_minting_limit": null,
      "transfer_window_start": null,
      "transfer_window_end": null,
      "default_token_uri": "https://s3.us-east-1.wasabisys.com/ultraio-uniq-prod/3844d9f938db8144895407e198492a2b7a670e975c2224f880815f38c18f7e11.zip",
      "default_token_hash": "3844d9f938db8144895407e198492a2b7a670e975c2224f880815f38c18f7e11",
      "lock_hash": 0
    }
  ],
  "more": true,
  "next_key": "3"
}

```
:::

## Try It

<DemoApi 
	type="POST" 
	query="/v1/chain/get_table_rows" 
	:body="[
		{ key: 'code', value: 'eosio.nft.ft'},
		{ key: 'table', value: 'factory.b' },
		{ key: 'scope', value: 'eosio.nft.ft' },
		{ key: 'limit', value: 5 },
	]"
/>