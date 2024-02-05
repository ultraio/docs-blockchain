---
title: 'How to validated and refresh moving average'
order: 1
oultine: [0,5]
---

# How to validate and refresh moving average

Conversion rates received from the oracle have a timestamp associated with them. It is important to always validate that timestamp to make sure the rates are not outdated and represent a reasonable up-to-date conversion rate.

## When the moving average can be considered valid

Depending on your business use case you may consider different conditions for when to consider the moving average valid or not. The two key metrics you could utilize are as follows:
- Timestamp of the moving average (or a conversion rate)
- Number of samples used to calculate the specific moving average

For timestamp you must be cautious of the fact that oracle updates conversion rates and moving averages only at the end of the minute / hour or day. For seconds level moving average there is a manual trigger explained in the next section. This means that if you look at the 1 minute moving average it will be updated once a minute, 60 minutes moving average - also once a minute (note that oracle makes a distinction here between 60 minutes and 1 hour), 1 hour moving average - once an hour.

Simple guideline for timestamp you could follow is to double the unit of time used by the moving average (e.g. 2 minutes, 2 hours or 2 days). NFT contract for example allows moving averages to be up to 30 minutes old.

Property `moving_window_counter` inside moving average data structure stores the number of entries used to calculate the moving average. If you compare it against the expected number (divide `param` of the moving average by 10000 to get the expected window size) you should be able to have a metric to determine if there were any gaps in the conversion rates stream. Note that this property may change over time so we advise it to only use as a reference and not as a strict value to build the rules around.

## Updating seconds level moving average

For details on using the action see [`calcsecma`](../../blockchain/contracts/oracle-contract/oracle-actions/calcsecma.md)

During normal oracle operation the moving average at the seconds level is not updated automatically and no Ultra smart contract is currently relying on them. You can manually issue the `calcsecma` from any account you have to recalculate them (thus updating the conversion rate and the timestamp inside `finalaverage` table).

Moving averages located at other scopes of the `finalaverage` table are updated automatically when new rates appear in the oracle. There is no need or way for you to update them yourself.

In case the moving averages provided are not enough please give us a feedback using the [feedback form](../../feedback/index.md)