---
title: 'Updating Metadata'
deploy: ['staging', 'mainnet']
order: -99992
---

# Updating uniqs

An important aspect of the Ultra NFT standard is metadata updates. Game publishers should be able to change uniq's traits based on certain events in their games. On the other hand integrators should be able to verify its authenticity. Let's see how it works with the examples below:

## Creating a factory & Issuing tokens

Let's [`create`](/docs/contracts/NFT%20Contract/NFT%20Actions/create.b.md) a factory first and [`issue`](/docs/contracts/NFT%20Contract/NFT%20Actions/issue.b.md) a token:
```sh
# Create
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
    "mintable_window_start": "2021-05-31T00:00:00",
    "mintable_window_end": null,
    "trading_window_start": "2021-05-31T00:00:00",
    "trading_window_end": null,
    "recall_window_start": null,
    "recall_window_end": null,
    "max_mintable_tokens": 10000,
    "lockup_time": null,
    "conditionless_receivers": null,
    "stat": 0,
    "factory_uri": "ipfs://my_factory_uri",
    "factory_hash": "475970a4b0016368d0503d1ce01577376f91f5a5ba63dd4353683bd95101b88d",
    "authorized_minters": null,
    "account_minting_limit": 100,
    "transfer_window_start": null,
    "transfer_window_end": null,
    "maximum_uos_payment": null,
    "default_token_uri": "ipfs://my_default_token",
    "default_token_hash": "475970a4b0016368d0503d1ce01577376f91f5a5ba63dd4353683bd95101b88d",
    "lock_hash": null
  }
]' -p ultra.nft.ft -p ultra
# Issue
cleos push action eosio.nft.ft issue.b '[
  {
    "to": "ultra",
    "token_configs": [
      {
        "token_factory_id": 0,
        "amount": 1,
        "custom_data": ""
      }
    ],
    "memo": "",
    "authorizer": null,
    "maximum_uos_payment": null,
    "token_metadata": [
      {
        "meta_uri": "ipfs://uniq_uri",
        "meta_hash":"475970a4b0016368d0503d1ce01577376f91f5a5ba63dd4353683bd95101b88d"
      }
    ]
  }
]' -p ultra.nft.ft

```

After a factory and token is minted we can look up their ids from `factory.b` and `token.b` tables respectively. Let's say they're both `0` for the sake of this tutorial.

## Updating factory metadata

If a content creator reuploads a new factory metadata they have to use [`setmeta.b`](/docs/contract-nft/nft-actions/091_setmeta.b.md) to change the corresponding data:

```sh
cleos push action eosio.nft.ft setmeta.b '[
  0,
  "updating",
  "ipfs://new_factory_uri",
  "06528450506980cf5ab3a5cfeb870cb3109acd2fe6094c00d4e4ab31ac129b35"
]' -p ultra.nft.ft
```

## Updating a default token

Default token metadata is used as a fallback mechanism whenever there's no uri for a token. Here's how one updates on-chain data for it using [setdflttkn](../../contracts/NFT%20Contract/NFT%20Actions/setdflttkn.md) action:

```sh
cleos push action eosio.nft.ft setdflttkn '[
  0,
  "reuploading default token",
  "https://s3...",
  "fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9"
]' -p ultra.nft.ft
```

## Update a uniq

Updating uniq's is done with [`settknmeta`](../../contracts/NFT%20Contract/NFT%20Actions/settknmeta.md) action:

```sh
cleos push action eosio.nft.ft settknmeta '[
  0,
  "ultra",
  "update hash 2",
  "ipfs://uniq_uri",
  "cccf7bb05104ee6737d94a7f85b3cf4a9f44f67f2d198572c155721a07395613"
]' -p ultra.nft.ft@active
```

It's important to reiterate that whenever you make any changes to metadata (including images updates) for a token/factory you should also update corresponding data onchain, i.e uris/hashes. Otherwise, integrators won't be able to pick up the changes.

## Locking changes

For certain usecases it might make sense to make a factory immutable. Luckily there's a [`lckfactory`](../../contracts/NFT%20Contract/NFT%20Actions/lckfactory.md) action which enables a manager to disable any content updates. This might be useful for an nft art gallery as it allows the users to be sure theirupdating_metadata.md artwork will never change.

**THE CHANGE IS IRREVERSIBLE:**

```sh
cleos push action eosio.nft.ft lckfactory '[0]' -p ultra.nft.ft@active
```

Updating a token hash of factory `0` afterwards will fail:

```sh
cleos push action eosio.nft.ft settknmeta '[
  0,
  "ultra",
  "update hash 2",
  "ipfs://",
  "cccf7bb05104ee6737d94a7f85b3cf4a9f44f67f2d198572c155721a07395613"
]' -p ultra.nft.ft@active
Error 10500149: token hash must be same value
Error Details:
assertion failure with message: token hash must be same value
```