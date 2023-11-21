---
title: 'KYC - Know Your Client'
order: 2

---

# Know Your Client

Ultra requires that developers who wish to deploy smart contracts on Ultra platform perform a Know Your Client procedure.

The purpose of the KYC requirement is to allow Ultra's end users to trust the smart contracts that they interact with. For Ultra this ensures that if there is an issue, we can contact the smart contract owner directly.

The KYB information ensures that there is no developer anonymity, which ensures that if there are bad actors actively taking advantage of either the network or its users, Ultra can step in.

## How it works

Ultra will let KYC providers to push their certificate on-chain. When a sensitive action is executed by a user (buying RAM might be one of such actions), the system checks if there is a KYC provider related to the user’s action.

## Relevant actions

All the KYC actions require Ultra authentication. They are listed here for general information only.

## registerkyc - register KYC information

Register KYC info from user with required signature and provider signature.

| Field         | Type               | Description                                        |
| ------------- | ------------------ | -------------------------------------------------- |
| owner         | eosio::name        | The account that the KYC information is stored for |
| provider      | eosio::name        | The KYC provider                                   |
| cert_id       | eosio::checksum256 | The KYC provider certificate ID                    |
| req_signature | eosio::signature   | The account signature                              |
| pro_signature | eosio::signature   | The KYC provider signature                         |

## Relevant tables

[kyc - account KYC information](./data-structures-overview.html#kyc-account-kyc-information)
