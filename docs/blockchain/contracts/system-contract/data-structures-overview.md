---
title: 'Data Structures Overview'
order: 6

---

# Data Structures Overview

## delband - delegated POWER bandwidth per account

The table contains the information about POWER bandwidth delegation between different accounts.

| Table name  | delband      |
| ----------- | ------------ |
| Code        | eosio.system |
| Scope       | account      |
| Primary key | to           |

| Fields       | Type         | Description                       |
| ------------ | ------------ | --------------------------------- |
| from         | eosio::name  | The account that delegates POWER  |
| to           | eosio::name  | The account it is delegated to    |
| power_weight | eosio::asset | The amount of staked UOS to POWER |

## kyc - account KYC information

| Table name  | kyc          |
| ----------- | ------------ |
| Code        | eosio.system |
| Scope       | account      |
| Primary key | provider     |

| Fields        | Type               | Description                     |
| ------------- | ------------------ | ------------------------------- |
| provider      | eosio::name        | The KYC provider account        |
| cert_id       | eosio::checksum256 | The KYC provider certificate ID |
| req_signature | eosio::signature   | The account signature           |
| pro_signature | eosio::signature   | The KYC provider signature      |

## paycntactid - contract action ID catalog

| Table name  | paycntactid   |
| ----------- | ------------- |
| Code        | eosio.system  |
| Scope       | paid contract |
| Primary key | paid_action   |

| Fields                  | Type        | Description                                 |
| ----------------------- | ----------- | ------------------------------------------- |
| paid_action             | eosio::name | The catalog contract action ID              |
| paid_contract_action_id | uint64_t    | Auto incremented ID for the contract action |

## payerpred - predicates for paying for 3rd parties

| Table name  | payerpred               |
| ----------- | ----------------------- |
| Code        | eosio.system            |
| Scope       | payer account           |
| Primary key | paid_contract_action_id |

| Fields                  | Type                         | Description                                                                     |
| ----------------------- | ---------------------------- | ------------------------------------------------------------------------------- |
| paid_contract_action_id | uint64_t                     | The catalog contract action ID, references paycntactid::paid_contract_action_id |
| maximum_power_usage     | uint64_t                     | The max POWER to be paid for                                                    |
| predicate_contract      | std::optional`<eosio::name>` | The contract to use for inline action creation                                  |
| predicate_action        | std::optional`<eosio::name>` | The inline action to create when the predicate is executed                      |

## rammarket - RAM trades settings and limitations

The table contains the information about the RAM market (buys / sells) settings such as KYC/non KYC account limits, global RAM reserve and fee calculation coefficients

| Table name  | rammarket         |
| ----------- | ----------------- |
| Code        | eosio.system      |
| Scope       | eosio.system      |
| Primary key | ram_supply.symbol |

| Fields             | Type         | Description                                                           |
| ------------------ | ------------ | --------------------------------------------------------------------- |
| ram_supply         | eosio::asset | RAM available on the market                                           |
| ram_reserved       | eosio::asset | RAM reserved for ultra and its partners                               |
| ram_total_non_kyc  | eosio::asset | Maximum amount of RAM for non-KYC users                               |
| ram_threshold_kyc  | eosio::asset | Unused RAM limits for KYC users                                       |
| ram_purchase_limit | eosio::asset | RAM purchase limit in a single buy action                             |
| core_reserve       | eosio::asset | UOS reserve that represents market state at full ram supply           |
| connector_weight   | double       | In Bancor algorithm describes how tightly the RAM is connected to UOS |
| ram_fee_rate       | double       | RAM fee fraction applied to each purchase                             |
| is_trade_enabled   | bool         | enables buy and sell actions for RAM                                  |

## refunds - information on refunding of the delegated POWER

The table contains information about the refunds that delegating accounts can request after delegation period. For example, if Alice delegates some POWER to Bob, Alice can refund the POWER after the delegation period (3 days).

| Table name  | refunds      |
| ----------- | ------------ |
| Code        | eosio.system |
| Scope       | account      |
| Primary key | owner        |

| Fields       | Type                  | Description                                             |
| ------------ | --------------------- | ------------------------------------------------------- |
| owner        | eosio::name           | The account that delegated POWER and now being refunded |
| request_time | eosio::time_point_sec | The time when the POWER was delegated                   |
| power_amount | eosio::asset          | The amount of staked UOS to POWER                       |

## userres - resource allocation per account

The table contains the information about the resources that are allocated some account.

| Table name  | userres      |
| ----------- | ------------ |
| Code        | eosio.system |
| Scope       | account      |
| Primary key | owner        |

| Fields       | Type         | Description                                                                           |
| ------------ | ------------ | ------------------------------------------------------------------------------------- |
| owner        | eosio::name  | The account that currently owns the resources                                         |
| power_weight | eosio::asset | The amount of staked UOS to POWER                                                     |
| ram_bytes    | int64_t      | The amount of available RAM                                                           |
| flags        | uint32_t     | Indicates if RAM or POWER is managed by the accountram_managed = 1, power_managed = 2 |
