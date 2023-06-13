---
title: 'Example Metadata Project'
deploy: ['staging', 'mainnet']
---


# Example Project with Reveal

Let's create a minimalistic bored ape factory. It has to contain 3 metadata files and 3 jsons
for factory, default token and uniq. For the sake of simplicity, we'll only fill the required fields for each metadata file. You can of course enrich uniqs, for example, by adding `attributes` to them. See [uniq metadata fields](../uniq-metadata.md#metadata-fields).

Since this is a reveal scenario each uniq will be displayed as a question mark until it's minted. This is controlled by `default_token_uri` which acts as fallback in case there's no uri for a token.

Download the example project [here](https://github.com/ultraio/docs-example-x/blob/main/nft/example-pfp-project.zip?raw=true).

## Creating a Bored Ape Factory

```sh
cleos push action eosio.nft.ft create.b '[
  {
    "memo": "",
    "asset_manager": "ultra.nft.ft",
    "asset_creator": "ultra",
    "minimum_resell_price": null,
    "resale_shares": [
      {
        "receiver": "ultra.nft.ft",
        "basis_point": 1
      }
    ],
    "mintable_window_start": "2023-05-04T00:00:00",
    "mintable_window_end": null,
    "trading_window_start": "2023-05-04T00:00:00",
    "trading_window_end": null,
    "recall_window_start": null,
    "recall_window_end": null,
    "max_mintable_tokens": 10000,
    "lockup_time": null,
    "conditionless_receivers": null,
    "stat": 0,
    "factory_uri": "https://s3.us-east-1.wasabisys.com/ultraio-uniq-dev/example-pfp-project/factory.json",
    "factory_hash": "f9e1a773c6f3c9df715f1ebf2dc08ed602851da7de862243630d0151632117c2",
    "authorized_minters": null,
    "account_minting_limit": 100,
    "transfer_window_start": null,
    "transfer_window_end": null,
    "maximum_uos_payment": null,
    "default_token_uri": "https://s3.us-east-1.wasabisys.com/ultraio-uniq-dev/example-pfp-project/default.json",
    "default_token_hash": "74f101c0fb325cbca62df0d4afaed241fedc488e4c917049c8fddaf7980d1858",
    "lock_hash": null
  }
]' -p ultra.nft.ft -p ultra
```

## Minting a token

Whenever there's a mint action triggered on your backend you can dynamically fill a token's uri:

```sh
cleos push action eosio.nft.ft issue.b '[
  {
    "to": "to.user.acc",
    "token_configs": [
      {
        "token_factory_id": 256,
        "amount": 1,
        "custom_data": ""
      }
    ],
    "token_metadata": [
      {
        "meta_uri": "https://s3.us-east-1.wasabisys.com/ultraio-uniq-dev/example-pfp-project/uniq.json",
        "meta_hash": "741f4cd605d0c777e42399367b10ffac621e8652bf709ed6ada2dd06d570f144"
      }
    ],
    "memo": ""
  }
]' -p ultra.nft.ft
```

