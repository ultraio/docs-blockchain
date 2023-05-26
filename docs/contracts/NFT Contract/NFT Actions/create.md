---
title: 'create'
order: 9
deploy: ['staging', 'mainnet']
---

# create

Create a token factory.

## Behavior

Used to create a token factory for the **asset_creator** and will be managed by the **asset_manager**.

The **asset_manager** and the **asset_creator** need to agree on the token factory configuration according to their specific business strategy, like resale share, etc. The agreement is done via the co-signing of the transaction.

By creating the token factory together, the **asset_creator** agrees to all the terms, including letting the **asset_manager** manage the factory and its tokens.

If the `stat` parameter is not specified, a new token factory is created in inactive state which may be changed with the `setstat` action.

## Technical Behavior

Upon creation, a token factory id will be automatically assigned to the new token factory. This id is incremental and includes information about the NFT version.

## Token factory ID

-   64 bit number
-   First 12 bit will be NFT version
-   Next 52 bit will be factory counter
-   Factory counter is singleton table with NFT version as entry, will auto increase each time a token factory is created

## Action Parameters

Try to think of the action parameters as a **JSON Object** when reading this table. There will be a **JavaScript** example of the action below this table.

| Fields                          | Type                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| memo                            | std::string                              | Memo, 256 bytes max.                                                                                                                                                                                                                                                                                                                                                                                       |
| version                         | uint64_t                                 | Version, always 0.                                                                                                                                                                                                                                                                                                                                                                                         |
| asset_creator                   | eosio::name                              | asset_manager and asset_creator are required to sign this action. asset_manager and asset_creator can be same account. For v0, asset_manager will be ultra.nft.ft                                                                                                                                                                                                                                          |
| asset_manager                   | eosio::name                              |                                                                                                                                                                                                                                                                                                                                                                                                            |
| conversion_rate_oracle_contract | eosio::name                              | The contract where token will query the conversion rate from. Not implemented in v0.                                                                                                                                                                                                                                                                                                                       |
| chosen_rate                     | std::vector`<eosio::asset>`              | Array of conversion rates. Each rate describes the conversion between USD ↔︎ UOS. Not implemented in v0                                                                                                                                                                                                                                                                                                    |
| minimum_resell_price            | eosio::asset                             | Should be specified in UOS. If set to 0, tokens can be transferred to other accounts with the transfer action, as long as token still in trading window and outside of lockup time. If set to >` 0, token can only be sold to others through the buy action. conditionless_receivers will ignore these restrictions when transferred.                                                                      |
| resale_shares                   | std::vector`<resale_share>`              | An array of pairs of (receiver of the resale, basis point). In basis points 1 means 0.0001 = 0.01%. The total limit is 7000 basis_point or 70%. Receiver can be duplicated.                                                                                                                                                                                                                                |
| mintable_window_start           | eosio::time_point_sec                    | Input will be in UTC date up to seconds, for example: '2021-06-01T00:00:00'. The following combinations are possible: [no start, no end] --- forever mintable, [no start, end] --- can only be minted before the ending date, [start, no end] --- can only be minted after the starting date, [start, end] --- can only be minted between the start and end dates.                                         |
| mintable_window_end             | eosio::time_point_sec                    |                                                                                                                                                                                                                                                                                                                                                                                                            |
| trading_window_start            | eosio::time_point_sec                    | There 2 types of inputs available: null: will ignore this property, UTC_date_string exact date in UTC, up to seconds, for example: '2021-06-01T00:00:00'. Combinations: [no start, no end] --- forever tradable, [no start, end] --- can only be traded before ending date. [start, no end] --- can only be traded after starting date, [start, end] --- can only be traded in between start and end date. |
| trading_window_end              | eosio::time_point_sec                    |                                                                                                                                                                                                                                                                                                                                                                                                            |
| recall_window_start             | uint32_t                                 | Recall feature is disabled. Must be set to null                                                                                                                                                                                                                                                                                                                                                            |
| recall_window_end               | uint32_t                                 | Recall feature is disabled. Must be set to null                                                                                                                                                                                                                                                                                                                                                            |
| max_mintable_tokens             | uint64_t                                 | Null means this can be minted with an unlimited capacity, >` 0 means the factory can only mint as many tokens as specified.                                                                                                                                                                                                                                                                                |
| lockup_time                     | uint32_t                                 | Lockup feature is disabled. Must be set to null                                                                                                                                                                                                                                                                                                                                                            |
| conditionless_receivers         | std::vector`<eosio::name>`               | If set, all accounts must exist when transferred to an account in the list, it will bypass checks for trading window and lockup time                                                                                                                                                                                                                                                                       |
| stat                            | uint8_t                                  | 0 (active) -- active token factories can do everything, 1 (inactive) --- inactive token factories can do everything, except for issuing. 2 (shutdown) --- shutdown token factories can do everything, except issuing and activating.                                                                                                                                                                       |
| meta_uris                       | std::vector`<std::string>`               | An array of base URIs pointing to the meta data of the token factory. e.g. Ultra.io/meta/1234, redundancy.ultra.io/meta/1234. If set, values cannot contain empty strings or duplicated values.                                                                                                                                                                                                            |
| meta_hash                       | checksum256                              | Meta data of token. Optional - can be signed with asset_creator key as proof of being original.                                                                                                                                                                                                                                                                                                            |
| authorized_minters              | std::vector`<minter_authorization_info>` | This binary extension specifies accounts authorized to mint tokens from the token factory. `minter_authorization_info` is defined as a tuple of eosio::name (the account being authorized) and uint32_t (quantity that the authorized account can mint).                                                                                                                                                   |
| account_minting_limit           | uint32_t                                 | This binary extension specifies the maximum number of tokens that each account can receive from token minting (issuing).                                                                                                                                                                                                                                                                                   |

## CLI - cleos

```bash
cleos push action eosio.nft.ft create '[{"memo":null,"version":0,"asset_manager":"ultra.nft.ft","asset_creator":"ultra","conversion_rate_oracle_contract":"eosio.oracle","chosen_rate":["60.0000 SECONDS"],"minimum_resell_price":null,"resale_shares":[{"receiver":"ultra.nft.ft", "basis_point":1}],"mintable_window_start":"2021-05-31T00:00:00","mintable_window_end":null,"trading_window_start": "2021-05-31T00:00:00","trading_window_end":null,"recall_window_start": null,"recall_window_end":null,"max_mintable_tokens":10000,"lockup_time":null,"conditionless_receivers":null,"stat":0,"meta_uris":["test"],"meta_hash":"d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523","authorized_minters":[],"account_minting_limit":100}]' -p ultra.nft.ft -p ultra
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'create',
                authorization: [
                    { actor: 'ultra.nft.ft', permission: 'active' },
                    { actor: 'asset_creator.acc', permission: 'active' },
                ],
                data: {
                    create: {
                        memo: '',
                        version: 0,
                        asset_manager: 'ultra.nft.ft',
                        asset_creator: 'asset_creator.acc',
                        conversion_rate_oracle_contract: 'oracle.rate',
                        chosen_rate: ['60.0000 SECONDS'],
                        minimum_resell_price: '1.00000000 UOS',
                        resale_shares: [
                            { receiver: 'resale1', basis_point: 1 },
                            { receiver: 'resale2', basis_point: 1 },
                        ],
                        mintable_window_start: '2021-05-31T00:00:00',
                        mintable_window_end: null,
                        trading_window_start: '2021-05-31T00:00:00',
                        trading_window_end: null,
                        recall_window_start: null,
                        recall_window_end: null,
                        max_mintable_tokens: null,
                        lockup_time: null,
                        conditionless_receivers: ['receiver1'],
                        stat: 0,
                        meta_uris: ['test'],
                        meta_hash: 'd5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523',
                        authorized_minters: [{ authorized_minter: 'ultra', quantity: 1 }],
                        account_minting_limit: 100,
                    },
                },
            },
        ],
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
