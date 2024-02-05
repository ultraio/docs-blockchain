---
title: 'Oracle Contract Overview'
order: -99

---

# Oracle Contract

## Overview

`eosio.oracle` contract is responsible for processing conversion rates from USD to UOS, calculating moving averages for this conversion and storing it inside on-chain tables.

Oracle infrastructure is owned and managed by Ultra but anyone else can freely access the conversion rates stored in the tables to utilize in your own business logic.

## Contract features

- Supports multiple exchanges to process rates from
- Exchanges weighted based on the 24 hours trading volume
- Outlier detection removes likely anomalies from the conversion rates
- Supports variety of moving averages with windows ranging from couple seconds up to a couple of days
- Each conversion rate and moving average has an associated timestamp for validation purposes

## Tutorials

- [UOS conversion rate is calculation](./how-does-oracle-contract-calculate-uos-conversion-rate.md)
    - Read this guide to better understand how the USD to UOS conversion rate is calculated
- [Reading UOS conversion rate](../../../tutorials/oracle/how-to-get-uos-conversion-rate.md)
    - This tutorial covers how to access and read conversion rates and averages from the Oracle contract
- [Validating moving averages](../../../tutorials/oracle/how-to-validate-and-refresh-moving-average.md)
    - This page covers the validation and seconds level moving average refresh operation
- [Oracle contract tables](./oracle-tables.md)
    - If you already went through the tutorial to access conversion rates from the Oracle contract then you can also refer to this page for deeper understanding of the contract table structure

## Use Cases

Oracle contract is used or can be used in following scenarios

- Any contract logic that requires converting USD to UOS
- Any contract logic that requires the trend or average data for UOS price
- BP payouts for blocks produced
- NFT first-hand and second-hand pricing calculation that is done through USD and converted to UOS
- NFT RAM payment conversion from bytes to USD to UOS
- Non-EBA account creation price conversion from USD to UOS