---
title: 'Nodeos APIs'
deploy: ['staging', 'mainnet']
outline: [0, 5]
order: 1
next: false
---

# Nodeos Chain Plugin APIs

Here listed are the most commonly used nodeos APIs, more will be added later. We will be using the endpoint provided by eosnation in the example, but you can use any endpoint listed in [ the endpoints document](./endpoints.md)

## get_table_rows

REQUEST BODY SCHEMA: application/json

| Property Name     | Type 			   | Description                     					      							 									 |
| ----------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| code 		        | string           | **Required field**. The name of the smart contract that controls the provided table 									 |
| table 			| string           | **Required field**. The name of the table to query          															 |
| scope          	| string 		   | **Required field**. The scope to which this data belongs 															 	 |
| index_position  	| string           | Type of index: primary(default), secondary, tertiary, fourth, fifth, sixth, seventh, eighth, ninth , tenth 			 |
| key_type          | string           | Type of key specified by index_position (for example - uint64_t or name)										         |
| encode_type		| string           | key_value econd type: dec(default), hex																			     |
| lower_bound		| string           | Filters results to return the first element that is not less than provided index value in set        				  	 |
| upper_bound		| string           | Filters results to return the first element that is greater than provided value in set 							     |
| limit             | integer int32    | Limit number of results returned, default: 10        																	 |
| reverse           | boolean          | Reverse the order of returned results, default: false																     |
| show_payer        | boolean          | Show RAM payer, default: false        																					 |
| json        		| boolean          | return results as json or not, default: false        																	 |

### How to fetch the NFTs of a given account

- *code* is eosio.nft.ft, where NFT smart contract is deployed.
- *table* is token.b.
- *scope* is the owner account, in this case: *fy1rp2kk3np4*.

```
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

### How to fetch the info of a given factory

- *code* is eosio.nft.ft, where NFT smart contract is deployed.
- *table* is factory.b.
- *scope* is eosio.nft.ft.
- *lower_bound* is the factory id from the above NFT query result: 2

```
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