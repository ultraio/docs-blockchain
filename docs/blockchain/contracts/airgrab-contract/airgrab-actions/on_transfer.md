---
title: 'on_transfer'
order: 4

---

# on_transfer

This is a notify action which will trigger when `manager` do a token transfer to `ultra.rgrab` with memo that follow the format of `<CampaignName>,<TotalCampaignPoints>,<Deadline>` with `Deadline` in block number. For example: `'testcampaign,10,10003123'`

-   Parameters

Please refer to [token transfer action](../../token-contract/token-actions/transfer.md).

-   `cleos` Example

```shell script
cleos push action eosio.token transfer '["manager", "ultra.rgrab", "1000.00000000 UOS", "testcampaign,10,10003123"]' -p manager
```

-   `eos-js` Example

```typescript
(async () => {
    const result = await api.transact(
        {
            actions: [
                {
                    account: 'eosio.token',
                    name: 'transfer',
                    authorization: [
                        {
                            actor: 'manager',
                            permission: 'active',
                        },
                    ],
                    data: {
                        from: 'manager',
                        to: 'ultra.rgrab',
                        quantity: '1000.00000000 UOS',
                        memo: 'testcampaign,10,10003123',
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
