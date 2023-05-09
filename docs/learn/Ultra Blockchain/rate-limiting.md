---
title: 'Rate Limiting'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -93
---

# Rate Limiting

Ultra has a rate limiting system added to the chain itself for controlling how many transactions a single account can push into a block.

## Who is affected by Rate Limits?

There are two types of accounts that exist on the chain.

* limited
* unlimited

Obviously, the unlimited has no limitations, and can push as many transactions as it needs to. These unlimited accounts were usually created during the chain launch, or through a special multi-signature transaction.

While limited accounts are effected by staking rules.

## Unstaked Limitations

Accounts that have not staked with `delegatebw` action are only able to send `1` transaction per block. This is termed as a `free` transaction.

## Staked Limitations

An account with staked tokens increases their priority for their transactions to be added to a block.

Basically, the higher amount you stake the more transactions you can push into one single block.

You also get higher transaction priority in the ranked transaction queue.

## Understanding the Rate Limiting Structure

The diagram below describes how transactions enter the ranked queue. Each account has a designated power `50, 30, 10, etc.`

The transactions that are being sent from that account are to the right of the account. 

- `Account A` is performing `3` transactions
- `Account G` is performing just `2`. 
  - Account G cannot perform both transactions within the same block since they have negative power.

This means that `Account G` can use `1 free transaction per block` to send one transaction through. The other transaction is rejected.

![](/images/rate-limiting-diagram.jpg)

After performing transactions in a block each account has their power reduced until it is negative. A negative account can still send a single transaction in each block.

![](/images/rate-limiting-account-power-diagram.jpg)

When power is reduced their position in the queue is also reduced and re-ordered per-account. This means that if you have **more power** you have **higher priority**.

![](/images/rate-limiting-after-transaction.jpg)

In the above diagram we can see that originally the ordering of the accounts was `A` and then `B`. However, once account `A` had a few of their transactions included into the block (yellow rectangles), its rank in the queue dropped below account `B`. At that point, account `B` started having their transactions included into the block first instead. 

## What happens if I'm stuck in the queue?

The queue will keep draining and impacting the ranks of the accounts it contains. Transactions that are lower in the queue will stay in the queue until they are consumed by being put into a block, expire because it took too long to get to them, or are ejected if the queue grows large enough to hit our queue size limitations and new higher ranking accounts enter the queue. 
