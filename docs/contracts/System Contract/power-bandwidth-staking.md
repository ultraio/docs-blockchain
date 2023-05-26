---
title: 'Power Bandwidth Staking'
order: 5
deploy: ['staging', 'mainnet']
---

# Power Bandwidth Staking

## How it works

A block producer includes the transactions into a block in a prioritized way so that the transactions from accounts which staked the most UOS for POWER bandwidth get into a block first. When all the transactions from the accounts that staked for POWER bandwidth get into a block, a BP starts including the “free” transactions from accounts that do not have staked POWER bandwidth.

The POWER bandwidth covers both CPU bandwidth and NET bandwidth which are employed in the process of transaction handling. Let us think that for processing a block of 3 transactions a block producer CPU requires spending 40 milliseconds, 20 ms for the first 2 transactions and 20 ms for the 3rd one. If the first 2 transactions belong to Account A and the 3rd one belongs to Account B, then accounts A and B should both have staked approximately same amount of UOS for the POWER at their accounts. The network bandwidth is handled alike: the account transactions size is proportional to the fraction of the POWER bandwidth that was staked to this account.

Both CPU and NET bandwidth usage for the accounts that submitted the transactions to the block are calculated and the distribution of the bandwidth usage per account should be approximately the same as the amounts of UOS staked for the POWER bandwidth per account.

## Relevant actions

[delegatebw - stake tokens for POWER](./System%20Actions/delegatebw.html)

[undelegatebw - unstake tokens for POWER](./System%20Actions/undelegatebw.html)

## Relevant tables

[userres - resource-allocation-per-account](./data-structures-overview.html#userres-resource-allocation-per-account)

[delband - delegated-POWER-bandwidth-per-account](./data-structures-overview.html#delband-delegated-power-bandwidth-per-account)

[refunds - information-on-refunding-of-the-delegated-POWER](./data-structures-overview.html#refunds-information-on-refunding-of-the-delegated-power)
