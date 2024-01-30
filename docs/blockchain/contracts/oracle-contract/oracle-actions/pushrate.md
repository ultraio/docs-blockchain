---
title: 'pushrate'
order: 5

---

# pushrate

Pushes a new USD to UOS exchange rate and latest 24 hours trading volume information to the oracle contract.

## Technical Behavior

Exchange used in the action must be one of the registered exchanges (see [regexchange](./regexchange.md)).

Timestamp for exchange rate must be at most 120 seconds older or 15 seconds ahead of the current chain time.

The action will update `feeddata` entry for the specified exchange writing the information about the new rate pushed. Will also update `oraclestate` to indicate the new latest rate timestamp and `lastknwnrate` singleton in case rate received is newer than the previous one.

In case the new rate has different UTC minute compared to the latest rate the finalization procedure will start which will calculate the SMA for 1 minute period using all the rates supplied in the last 60 seconds. All minute level averages defined in `finalaverage` table will also be updated. Similar procedure occurs when different UTC hour or UTC day starts.

For more details on logic and calculations see [this page](../how-does-oracle-contract-calculate-uos-conversion-rate.md)

## Action Parameters

| Fields     | Type               | Description                                                                                                                                                               |
| ---------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `exchange` | name               | Name of the exchange registered in the oracle contract                                                                                                                    |
| `rates`    | std::vector\<rate> | Exchange rate received from the exchange. Must have a single value                                                                                                        |
| `volume`   | eosio::asset       | 24 hour trading volume for only the specified exchange. Symbol must match `trading_volume_symbol` in [`oraclestate`](../oracle-tables.md#oraclestate) (8 digit USD by default) |

`rate` type is defined as follows:

| `rate` fields | Type         | Description                                                                                                                                         |
| ------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp`   | uint64_t     | UTC timestamp of the rate received from the exchange. Specified in seconds                                                                          |
| `price`       | eosio::asset | UOS to USD conversion rate. Symbol must match `trading_volume_symbol` in [`oraclestate`](../oracle-tables.md#oraclestate) (8 digit DUOS by default) |

Required Permissions: `ultra.oracle`

## CLI - cleos

```bash
cleos push action eosio.oracle pushrate '["ugateio", [[1706615754, "0.17900000 DUOS"]], "50149.76699157 USD"]' -p ultra.oracle
```

## JavaScript - eosjs

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.oracle',
                    name: 'pushrate',
                    authorization: [
                        {
                            actor: 'ultra.oracle',
                            permission: 'active',
                        },
                    ],
                    data: {
                        exchange: 'ugateio',
                        rates: [{timestamp: 1706615754, price: '0.17900000 DUOS'}],
                        volume: '50149.76699157 USD'
                    },
                },
            ],
        },
        {
            blocksBehind: 3,
            expireSeconds: 30,
        }
    );
})();
```