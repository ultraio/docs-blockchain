---
title: 'Factory Purchase Options'

order: 1
---


# Factory Purchase Options

## Overview of factory purchase options feature

First-hand factory purchase options allow users to receive Uniqs from the factory directly without requiring you to manually issue Uniqs to the users. Various configuration options can be set when creating the purchase option for your factory, and in addition to that each factory can have multiple purchase options available. The usage of the actions to create and utilize purchase options is provided below.

-   [setprchsreq.a - set purchase requirement](../../../blockchain/contracts/nft-contract/nft-actions/setprchsreq.a.md)
-   [purchase.a - purchase a token](../../../blockchain/contracts/nft-contract/nft-actions/purchase.a.md)

The first-hand purchase options provide following benefits to you
- No need for factory manager input to issue a token to the user
- Flexible pricing and conditions: can utilize other factories as a condition and can interact with [user groups contract](../../../blockchain/contracts/user-group-contract/index.md)
- Configurable accessibility time window which does not require you to manually disable ability to purchase Uniqs

## Purchase option use cases

There are various use cases that are covered by the first-hand purchase feature. The list below covers the most common ones that are supported:
- Specifying fixed UOS or USD price to purchase from factory
    - To have both prices available simultaneously, you can simply create two purchase options
- Restricting the number of Uniqs that can be bought from the specific purchase option
    - To globally limit the number that can be purchased (minted in this case) you have to specify it during the token factory creation
- Splitting the purchase revenue between multiple recipients
    - Note that protocol fee still applies and the split only occurs for UOS or USD amounts
- Limiting the availability window when Uniqs can be purchased
    - You can set a campaign to open at a later date and have a fixed date when it will end (or no end date at all)
- Specifying the price using Uniqs from other factories
    - Allows user to exchange or swap Uniqs
- Verify eligibility using Uniqs from other factories or user groups
    - Those are read-only operations, so user does not lose Uniqs or membership of the user group
- Migrating Uniqs of the factory to a new one which has desired alternative values set
    - Since some of the values inside the factory cannot be changed after creation that can be an alternative solution to effectively provide the option to users to migrate to a new factory with alternative values

### First-hand purchase directly from Uniq factory

All use cases above are accessible using the `setprchsreq.a` action and examples are provided in the following page: [factory purchase option examples](./factory-purchase-options-examples.md)

### Swap Uniqs

In certain situations you may need a more granular condition set which is not provided by the first-hand purchase feature. Since the range of possible conditions you may desire is vast we only limited the feature to the most common ones. For any more advanced usage you should consider utilizing a smart contract instead.

Refer to [this page](./exchange-a-uniq-using-smart-contract.md) for more in-depth explanation of the smart contract usage
