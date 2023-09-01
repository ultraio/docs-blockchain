---
title: 'setsharelim'
order: 31
deploy: ['experimental', 'staging', 'mainnet']
---

# setsharelim

Allow ultra.nft.ft account to set maximum share limit for protocol fee, factory beneficiaries and promoter during first hand and second hand purchase

## Technical Behavior

The required authorization is the ultra.nft.ft account managed by admins.

After the transaction execution the maximum share in basis points will be adjusted for protocol fee, factory beneficiaries and sale promoter. Additionally a default promoter may be configured

## Action Parameters

| Fields | Type                            | Description                                                                             |
| ------ | ------------------------------- | --------------------------------------------------------------------------------------- |
| type   | factory_sale_share_type         | Indicates a type of limits to change. 0 - second hand purchase, 1 - first hand purchase |
| config | factory_sale_share_limit_config | Object detailing limits for specific types of sale shares                               |

## `factory_sale_share_limit_config` definition

| Fields                    | Type                        | Description                                                                 |
| ------------------------- | --------------------------- | --------------------------------------------------------------------------- |
| max_ultra_share_bp        | uint16_t                    | Maximum sale share for Ultra protocol in basis points                       |
| max_factory_share_bp      | uint16_t                    | Maximum total share of all factory beneficiaries in basis points            |
| min_promoter_share_bp     | uint16_t                    | Minimum allowed promoter share in basis points                              |
| max_promoter_share_bp     | uint16_t                    | Maximum allowed promoter share in basis points                              |
| default_promoter          | std::optional\<eosio::name> | Default promoter account to be used if no promoter is specified             |
| promoter_payments_enabled | bool                        | Whether the promoter payments should be enabled for this type of sale share |

## CLI - cleos

```
cleos push action eosio.nft.ft setsharelim '[0, [1000, 7000, 250, 1000, "ultra.nft.ft", true]]' -p ultra.nft.ft
```

## JavaScript - eosjs

```javascript
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'setsharelim',
                authorization: [{ actor: 'ultra.nft.ft', permission: 'active' }],
                data: {
                    type: 0,
                    config: {
                        max_ultra_share_bp: 1000,
                        max_factory_share_bp: 7000,
                        min_promoter_share_bp: 250,
                        max_promoter_share_bp: 1000,
                        default_promoter: 'ultra.nft.ft',
                        promoter_payments_enabled: true
                    }
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
