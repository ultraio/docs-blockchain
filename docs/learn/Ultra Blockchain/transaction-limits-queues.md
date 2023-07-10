---
title: 'Transaction Limits'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -96
---

# Transaction Limits and Queue Mechanism

Ultra’s network provides its users and developers with free transactions.

Ultra has developed a unique queuing mechanism that helps prioritize the large number of transactions that go through the network. This queue also helps deal with potential abusers of the network by eventually de-prioritizing any entity which attempts to flood the network.

![](/images/transaction-queue.jpg)

Users who have not staked can perform transactions, with their weighting within the prioritized Queue moving down for each transaction. This weight decays with time, ensuring that a user who depleted his position within the queue regains it over time.

Developers who consistently require priority within the queue can stake to the network.

## Toggleable Algorithm

Ultra provides a consistent approach for executing transactions which were added to the queue by prioritizing them based on the POWER. Based on the ranking algorithm specified by `setrankingalgo`.

_Keep in mind that only **Ultra** has the authority to perform these actions._

**Rank based on ratio of available POWER**

```typescript
cleos push action eosio setrankalgo '[0]' -p eosio
```

**Rank based on the delta between POWER quota and POWER usage**

```typescript
cleos push action eosio setrankalgo '[1]' -p eosio
```