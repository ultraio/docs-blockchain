---
title: 'Transaction Queues, Rate-limit, and Billing'

outline: [0, 4]
order: -94
---

# Transaction Queues, Rate-limit, and Billing

## Failed Transactions in Antelope Blockchains

Antelope-based blockchains have historically faced challenges with failed transactions. These failed transactions aren't billed, but they still consume valuable CPU resources.

In summary:

1. A user pushes a transaction to an API nodeos.
2. API nodeos validates this transaction and forwards it via P2P.
3. The transaction reaches the block producer nodeos, gets executed, and is included in a block.

However, many transactions sent to API nodeos and block producer nodeos pass signature validation but fail internal execution checks, like assert failure. This overflow of failed transactions puts strain on block producers and API nodeos, affecting the CPU time usage for regular transactions.

## Subjective Billing

To address this, subjective billing was introduced. It aims to bill failed transactions and reject any accounts that go subjectively negative. Successful transactions replace their temporary subjective billing with objective billing upon blockchain recording. While this approach significantly reduced CPU waste, it can result in inconsistent billing across nodeos. Consequently, transactions might be lost at any point, potentially causing an account to encounter recurring resource errors and subsequent subjective billings. For a deeper dive, refer to ['An Introduction to Subjective Billing and Lost Transactions'](https://eosnetwork.com/blog/api-plus-an-introduction-to-subjective-billing-and-lost-transactions/ 'An Introduction to Subjective Billing and Lost Transactions').

## Staking and the Ranked Transaction Queue

Antelope-based blockchain users need to stake UOS for CPU and NET resources before transacting. The staking amount required, relative to transaction demands, varies with the total staked number. The "ranked transaction queue" was implemented to allow end users free transactions without staking. However, abundant transactions from high-ranking users might delay those of lower-ranking users. Such high-ranking users aren't billed for failed transactions and subjective billing doesn't completely address this issue, especially since it lets users transact without staking.

## Two Transaction Queues

To balance free network usage for end users and to ensure that staked users have access to their resources, two transaction queues have been introduced:

1. **Staked User Queue**: For users with staking (primarily developers). This queue can use up to a set CPU time percentage per block (e.g., 80%).

2. **Free User Queue**: For users without staking. This queue can use the remaining CPU time (e.g., 20%). If one queue is vacant, the other can use more CPU time.

To counter spamming from non-staking users, there is a rate limit. Exceeding a set CPU usage threshold results in users getting rate-limited. Higher transaction demands necessitate more staking. See more details in ['Transaction Queue and Rate Limiting'](./rate-limiting.html).

## Addressing Failed Transactions

A "failed transaction billing" system has been added to minimize the impact of failed transactions on both user types.

In this system, failed transactions are added to blocks. Other nodeos validate and apply the provided block billing. Failed transactions only modify billing, not the blockchain state. If a transaction fails at the API nodeos level, it's added to a speculative block but isn't broadcast to the wider network. This is distinct from subjective billing, which bills on all nodes and doesn't add billed transactions to blocks. Furthermore, subjective billing tracks billing locally per nodeos, while failed transaction billing operates only on the active BP node.

Failures are treated differently. A transaction with an invalid signature or insufficient authority will always be rejected immediately, instead of included in a block and getting billed. Some failures will also be given a second chance to run, like transactions that hit the block deadline.

<Staging>

## Failed Transactions and Subjective Billing

After failed transaction billing was implemented, subjective billing was reconsidered and it turned out that both functions work either alone or at the same time, provided that double billing issue where subjective billing may be applied twice, is solved. Objective and subjective billing will bill users in speculative mode. Objective billing will be dropped when the speculative block is dropped, whereas subjective billing will persist as usual. To solve double billing, a small internal strucure was implemened to cache subjective billing info per block, which will be used to correct double billing.

</Staging>

<Experimental>

## Failed Transactions and Subjective Billing

After failed transaction billing was implemented, subjective billing was reconsidered and it turned out that both functions work either alone or at the same time, provided that double billing issue where subjective billing may be applied twice, is solved. Objective and subjective billing will bill users in speculative mode. Objective billing will be dropped when the speculative block is dropped, whereas subjective billing will persist as usual. To solve double billing, a small internal strucure was implemened to cache subjective billing info per block, which will be used to correct double billing.

</Experimental>

## Current Status

<Staging>

::: info
While the rate limit queue, failed transaction billing, and subjective billing can operate concurrently, subjective billing is currently deactivated.
:::

</Staging>

<Experimental>

::: info
While the rate limit queue, failed transaction billing, and subjective billing can operate concurrently, subjective billing is currently deactivated.
:::

</Experimental>

It remains an option for future activation. Chain usage will also be collected and leveraged by BPs for greylisting/blacklisting any account with malicious behavior via a decentralized and automatic mechanism in the future.
