---
title: 'Your First Token Factory'
deploy: ['staging', 'mainnet']
order: 5
outline: [0, 4]
---

# Your First Token Factory

## Make sure you're ready

Once you have your [metadata set up](./creatingmetadata.md), you'll be ready to create your first token factory.

Just to be absolutely clear, the expected flow for building a Token Factory is:

1. Upload images
2. Generate metadata
3. Calculate hashes
4. Push on-chain

Without the images already uploaded to the correct location, the metadata tool can not verify that they exist, nor can it create the unique hashes that identify them.

::: warning

**It is up to you to manage the Token Factory images and ensure that they are permanently available for the network to access.**

:::

If you'd prefer to focus just on this section and learn how to push the on-chain transaction that generates the Token Factory, we have prepared a simple example zip file for you that already has been generated based on files that are located in this developer guide. You're welcome to upload this to anywhere semi-permanent for your learning purposes. We suggest Github, and you can access it as a RAW file from there.

[![Download](/images/token-factories/download.png)](/zip/example_token_factory.zip)

To create a Token Factory on Testnet, you'll be using the Ultra Developer Tools. If you haven't set up your developer environment, we've [set up a quick checklist](./yourdevelopmentenv.md) for you to be able to hit the ground running.

Once you're inside your docker image, have your wallet set up, and have your Testnet account ready, you're good to go for the next step.

## Creating your first Token Factory

![](/images/token-factories/new-token-factory.png)

Once you have everything set up, you'll be ready to create this Token Factory on the Testnet.

The following is an example transaction. You will have to fill in the missing details:

-   `<YOUR ACCOUNT>` - Your Testnet account
-   `<MINT WINDOW START>` - A datetime in the format `2021-05-31T00:00:00`
-   `<TRADING WINDOW START>` - A datetime in the format `2021-05-31T00:00:00`
-   `<YOUR UNIQ FACTORY URI>` - The URI of the metadata either as a zip file, or targeting the `factory.json` file with a full path
-   `<YOUR META HASH>` - The hash of the filename, you can find this in `upload.json` in the `factory` block at the top

```sh
cleos -u http://ultratest.api.eosnation.io push action eosio.nft.ft create \
  '[
      {
        "memo":"thirdPartyUniqNewMeta",
        "version":0,
        "asset_manager":"<YOUR ACCOUNT>",
        "asset_creator":"<YOUR ACCOUNT>",
        "conversion_rate_oracle_contract":null,
        "chosen_rate":null,
        "minimum_resell_price":null,
        "resale_shares":null,
        "mintable_window_start":"<MINT WINDOW START>",
        "mintable_window_end":null,
        "trading_window_start": "<TRADING WINDOW START>",
        "trading_window_end":null,
        "recall_window_start": null,
        "recall_window_end":null,
        "max_mintable_tokens":10,
        "lockup_time":null,
        "conditionless_receivers":null,
        "stat":0,
        "meta_uris":["<YOUR UNIQ FACTORY URI>"],
        "meta_hash":"<YOUR META HASH>",
        "authorized_minters":[],
        "account_minting_limit":1
      }
    ]' \
-p <YOUR ACCOUNT>
```

Once you've run this command, you should get a message confirming that your transaction has been executed locally.

To see it in action on the Testnet, hop on over to the [Testnet block explorer](https://explorer.testnet.ultra.io/) and input your account name into the search box at the top.

You should see a new transaction that shows that your new Token Factory has been successfully created.

![](/images/token-factories/great_success.png)

We are glossing over a lot of functionality here, in the interest of getting you up and running quickly. Later guides will cover some of the more advanced features that our NFT standard supports, including variants, authorized minters, and much more.

In the meantime, congratulations on creating your first Token Factory. **Now, let's go mint your first Uniq!**
