---
title: 'Resource Allocation and Rate Limiting'
deploy: ['experimental']
outline: [0,4]
order: -93
---

# Introduction
The Ultra Blockchain employs two main concepts to enhance performance and security: **Resource Allocation** and **Rate Limiting**. This document aims to explain these concepts and how users can effectively interact with the Ultra Blockchain.

# Resource Allocation
When a user stakes UOS (Ultra Blockchain's native currency), they're eligible to use a portion of our CPU resources. The ratio of resource allocation is determined by the stake amount of an account relative to the total amount staked in the system. This is, however, not a strict ratio due to the resource allocation mechanism.

# Positive and Negative Accounts
Accounts that use less CPU than is available to them are considered "positive accounts", while those that exceed their CPU allocation are "negative accounts". In the protocol level, there are two transaction queues, the positive queue for positive accounts and the negative queue for negative accounts.

To ensure fair resource usage, Ultra Blockchain reserves 20% of all CPU resources for negative accounts. This results in a 80-20% processing time ratio where block producers process transactions from the positive queue for 320ms and from the negative queue for 80ms.

# Queue Processing
The normal processing order adheres to the 80-20% ratio. However, if there aren't enough transactions in the positive queue, the block producer can pick transactions from the negative queue and vice versa. This dynamic reallocation ensures efficient use of resources.

# Rate Limiting
Rate limiting is the second core concept, providing safeguards for the network. Transactions from positive accounts are added to the positive queue, while those from negative accounts go into the negative queue. However, negative accounts have further classifications: small negative accounts and huge negative accounts.

# Small and Huge Negative Accounts
Negative accounts are classified based on the threshold, which is 
```
abs(used CPU - available CPU)
```
If the threshold is greater or equal to 50ms, the account is considered a "huge negative account", otherwise it's a "small negative account".

Transactions from small negative accounts face no restrictions, but if an account becomes a huge negative, it's subject to "incoming rate limiting" and "execution rate limiting".

# Incoming Rate Limiting
This applies before a transaction from a huge negative account is added to the negative queue. The system checks if the incoming rate limiting timestamp is less than the current timestamp. If true, the transaction is **added** to the queue and the incoming rate limiting timestamp is updated to
```
now + abs(used CPU - available CPU) * 100
```
If not, the transaction is **rejected** with an incoming rate limiting exception.

# Execution Rate Limiting
This comes into play just before a transaction from a huge negative account is executed. The system checks if the execution rate limiting timestamp is less than the actual time. If true, the transaction is **executed** and the execution rate limiting timestamp is updated to 
```
now + abs(used CPU - available CPU) * 100
```
If not, the transaction is **rejected** before execution with an execution rate limiting exception.

# Switching Queues
In case an account becomes negative while its transaction is in the positive queue, the transaction is moved to the negative queue, applying the rules specified for the negative queue.

With these mechanisms, Ultra Blockchain ensures efficient resource allocation and transaction processing while preventing resource abuse. Always remember to monitor your CPU usage and stake enough UOS to maintain a positive account status.
