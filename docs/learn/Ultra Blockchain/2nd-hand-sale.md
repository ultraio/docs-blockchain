---
title: '2nd Hand Sale (Uniqs)'
deploy: ['staging', 'mainnet']
outline: [0, 4]
order: -92
---

# 2nd Hand Sale

2nd hand sales include resell (in version a), auction (in a future version), and potentially other forms. Different parties can set up certain settings relevant to reselling a token in any form.

There is a global share for Ultra.

When a token factory allows NFT trading, the token factory manager can configure certain resale settings, e.g., minimum resale price, resale shares

An owner can also set up promoter share in the direct resell feature.

## How it works

### Gloabl Share set by Ultra

-   Ultra can set up a global resale share that applies to any resale.

    -   By default it is 2.5%.
    -   It can be updated to any value between 0% to 10%, **which will be applied to all existing token factories and new token factories**.

### Resale Shares(beneficiaries) set by creator and manager

-   A token factory manager can set up the following information when creating a token factory.

| Resell Configs       | Meaning                                                                                                                                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| minimum resale price | All NFTs from this token factory must be listed at a price larger than or equal to this price for resale.                                                                                                                                             |
| resale shares        | resale shares in percentages for all beneficiaries set up by the creator and the manager. The sum of all resale shares must be between 0% and 70% ( configurable at factory creation, Ultra use Ultra.royal as Ultra’s beneficiary account at moment) |

The above information cannot be updated once the token factory is created, no matter whether it’s active or inactive.

### Promoter shares set by seller and buyers

-   The seller can specify the share for a promoter when reselling an NFT

| Resell Configs | Meaning                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| promoter share | How much share for a promoter, it must be between 2.5% and 10%. If given value is less than 2.5%, it will use 2.5%. If given value is more than 10%, it will fail to list for resale. |

The buyer can specify the name of the promoter when buying an NFT. In Ultra marketplace, Ultra can set it to an Ultra’s account, but buyer could edit it with some effort.

### Overall 2nd hand Shares distribution in a buy event

-   Once an NFT is sold at X amount of UOS. The shares are as follows:

| Shares                                                                                     | Meaning                                                                                                      |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| X \* Ultra global share percentage [0-10%]                                                 | The amount of UOS goes to Ultra.nft.ft account (configurable)                                                |
| X \* resale share percentages [0-70%]                                                      | Resale shares go to all beneficiaries                                                                        |
| X \* promoter share percentage [0-10%]                                                     | The promoter share goes to the promoter that is confrimed by the buyer. If no promoter, then this share is 0 |
| X \* (1 - global share percentage - sum of resale percentages - promoter share percentage) | After given shares to Ultra, token factory beneficiaries, promoter, the rest goes to the owner of the NFT    |

For example; Token A from token Factory F is on resell at the price of 100 UOS.

-   Ultra global share is 2.5%

-   Resale shares of token factory F are (dev1, 10%), (dev2,20%)

-   promoter share for token A is 5%

When a user buys token A specify the promoter opensea.

-   Ultra receives 2.5% \* 100 UOS = 2.5 UOS

-   dev1 receives 10% \* 100 UOS = 10 UOS

-   dev2 receives 20% \*100 UOS = 20 UOs

-   Promoter opensea receives 5% \* 100 UOS = 5 UOS

-   Seller A got 100 UOS - 2.5UOS - 10 UOS - 20 UOS - 5UOS = 62.5UOS

## Relevant actions

-   [create](../../contracts/NFT%20Contract/NFT%20Actions/create.html): A token factory manager can configure the trading window when creating a token factory

-   [resell](../../contracts/NFT%20Contract/NFT%20Actions/resell.html): An owner of the NFT can use this action to resell an NFT when allowed by the trading window

## Relevant tables

-   [factory.a](../../contracts/NFT%20Contract/nft-tables.html#factory-a): stores factory resale shares.

-   [resale.a](../../contracts/NFT%20Contract/nft-tables.html#resale-a): stores promoter share.
