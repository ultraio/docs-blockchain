---
title: 'System Contract Overview'
order: -99

---

# System Contract Overview

The `eosio.system` contract inherits its functionality from the traditional EOSIO `eosio.system` contract. Below are Ultra’s additions or modification to it.

## EBA and Non-EBA Accounts

An Ultra account is a set of blockchain data records that establishes a permission graph for the account keys and keys belonging to other accounts. It controls the resources possessed by the account and provides a set of actions that are used to communicate with the account, and in the case that it is present, the smart contract.

[EBA and non-EBA Accounts](./eba-non-eba-accounts.html)

## Know Your Client

Ultra requires that developers who wish to deploy smart contracts on Ultra platform perform a Know Your Client procedure.

[Know Your Client](./know-your-client.html)

## RAM Market

RAM is used for storing various on-chain data, like token, account, or smart contract data. Ultra requires that developers pay for the RAM consumed by their users. Only developer accounts are able to purchase larger amounts of RAM and then allocate it to their user base.

[RAM Market](./ram-market.html)

## Paying for 3rd Parties with Predicates

The predicate system allows developers to cover their users' resource costs. Developers may allow certain actions to be performed by other accounts at the cost of their own POWER resources.

[Predicate System](./predicate-system.html)

## POWER Staking

Account owners can stake POWER for their transactions to be included in blocks in a prioritized way. The traditional EOSIO stakes for CPU and NET separately while staking for POWER combines the two resources.

[POWER bandwidth staking](./power-bandwidth-staking.html)
