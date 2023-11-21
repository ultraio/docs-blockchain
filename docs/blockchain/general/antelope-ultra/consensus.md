---
title: 'Consensus'

outline: [0,4]
order: -94
---

# Consensus

A blockchain is a decentralized peer-to-peer state machine. It has no centralized authority. While this creates a system that is devoid of corruption from a single source, it still creates a major problem.

How are any decisions made that determine the future of the network?

How do you ensure that the network stays decentralized?

In a centralized organization like a company, decisions are taken at the executive level. This isn’t possible in a blockchain because a blockchain has no such functionality. Necessary decisions must be made using “consensus mechanisms”.

## Common Consensus Mechanisms

Some of the most common consensus models used in blockchains are Proof of Work and Proof of Stake. 

### Proof of Work (PoW)

In Proof of Work, miner nodes compete to find a nonce added to the header of a block which causes the block to have some desired property (typically a certain number of zeros in the most significant bits of the cryptographic hash of the block header). By making it computationally expensive to find such nonces that make the blocks valid, it becomes difficult for attackers to create an alternative fork of the blockchain that would be accepted by the rest of the network as the best chain. The main disadvantage of Proof of Work is that the security of the network depends on spending a lot of resources on computing power to find the nonces.

### Proof of Stake (PoS)

In Proof-of-Stake, nodes that own the largest stake or percentage of some asset have equivalent decision power. In other words, voting power is proportional to the stake held. One interesting variant is Delegated Proof-of-Stake (DPoS) in which a large number of participants or stakeholders elect a smaller number of delegates, which in turn make decisions for them.

### Proof of Authority (PoA)

**Proof of Authority is what Ultra is currently based on.**

Proof of Authority (PoA) is a reputation-based consensus algorithm that introduces a practical and efficient solution for blockchain networks (especially the private ones). The term was proposed in 2017 by Ethereum co-founder and former CTO Gavin Wood. 

The PoA consensus algorithm leverages the value of identities, which means that block validators are not staking coins but their own reputation instead. Therefore, PoA blockchains are secured by the validating nodes that are arbitrarily selected as trustworthy entities.

The Proof of Authority model relies on a limited number of block validators and this is what makes it a highly scalable system. Blocks and transactions are verified by pre-approved participants, who act as moderators of the system.