---
title: 'How does oracle contract calculate UOS conversion rate'
order: 1
oultine: [0,5]
---

# How does oracle contract calculate UOS conversion rate

On-chain UOS conversion oracle contract is required to process conversion rates from multiple possible registered exchanges and needs to provide accurate information and on top of that needs to be resilient to gaps in data and potential deviation.

## Updating `feeddata` of associated exchange

When `pushrate` action is executed the oracle will update the `feeddata` table to add the new rate pushed by the exchange to the cache. Each exchange has a dedicated cache for rates which is later used for calculating the moving averages.

## Calculating moving average for `finalrates` table

When UTC minute changes (so 60 seconds have passed) the oracle will finalize the accumulated rates when the next `pushrate` occurs.

During the finalization process the oracle will perform outlier detection for the rates received from exchanges and will calculate the weighted average based on the 24 hours trading volume of each exchange. Calculated value in this way is considered a 1 minute moving average and is inserted into the `finalrates` table for level 1 (minutes) and will update the `rolling_moving_average` stored there.

Oracle utilizes median absolute deviation algorithm to detect and reject outliers from the available set of conversion rates from different exchanges.

Another finalization step occurs at the end of each UTC hour and day. The oracle will use the moving average stored in `rolling_moving_average` for level 1 (minutes) of `finalrates` table to update the level 2 (hours) of `finalrates` table each hour. And it will do a similar update between level 2 (hours) and level 3 (days) at the end of each day. In the process the rates and `rolling_moving_average` of the `finalrates` table will be update.

For each exchange oracle stores 2 sets of 60 seconds worth of conversion rates. After the finalization the `feeddata` table will be updated to delete the oldest set of rates (located at the bottom half of the 120 elements array).

## Updating moving averages stored in `finalaverage` table

During each finalization step done by the oracle (either for minutes, hours or days levels) the oracle will additionally update moving averages stored in `finalaverage` table at the associated level. This means that when level 1 of `finalrates` is updated the `finalaverage` table at the scope of `MINUTES` will also be updated. Similar for 2 - `HOURS` and 3 - `DAYS`.

## Handling gaps in data

In case there were no rates provided to the oracle contract the next time any rate appears from any of the exchanges the oracle will perform the calculations based on the available rates only. In case there is not enough rates to calculate the 1 minute average - it will be skipped. Similar thing is done for hours and days - in case there is a large gap in data the moving averages will be left unchanged.

You can utilize the timestamp to figure out how old the moving average is and whether you can consider it up-to-date or outdated. For more details see [this section](../../../tutorials/oracle/how-to-validate-and-refresh-moving-average.md#when-the-moving-average-can-be-considered-valid)

## Updating seconds moving averages on demand

To trigger the update it is necessary to manually execute the [`calcsecma`](./oracle-actions/calcsecma.md) action.

When the action is executed it will retrieve the most recent rates from the `feeddata` table for all exchanges, will perform outlier detection and will calculate the weighted average based on the 24 hours trading volume for each exchange. This step is done for multiple `feeddata` entries based on the window size of the moving average that is updated.

After the update the moving average stored at the `SECONDS` level of the `finalaverage` table will be updated.