---
title: 'Instant Finality'

outline: [0,4]
order: -100
---

# Instant Finality

Ultra now delivers **Instant Finality**: transactions become **irreversibly final in about 1 second**, down from the multiple minutes required by the previous consensus. It was activated on Mainnet as part of the **Antelope Spring 1.x** upgrade.

::: info TL;DR
**Before:** a transaction took up to ~3 minutes to become irreversible.
**Now:** ~1 second — a **greater than 100x improvement** in time-to-finality, with stronger, cryptographic security guarantees.
:::

## What "finality" means

Finality is the moment a transaction becomes **permanent and irreversible** — it can never be undone or rolled back by a chain reorganization. Until a transaction is final, anyone relying on it (an exchange, a marketplace, a game) must wait to be safe. Faster finality makes everything faster *and* safer.

## Why it matters

### For everyone

*   **Near-instant settlement.** Payments, token transfers, NFT/Uniq trades, and in-game actions are locked in within ~1 second.
*   **A web2-like experience.** No more watching a spinner for minutes — confirmations feel instant.
*   **Stronger guarantees.** Once a transaction is final, it is mathematically irreversible — not just "probably" safe.

### For developers

*   **Instant-confirmation UX.** React the moment a transaction is final, instead of polling through long "pending" states.
*   **Faster deposits & withdrawals.** Exchanges and bridges can credit Ultra transactions in ~1 second instead of minutes, cutting settlement risk.
*   **Simpler logic.** Deterministic finality removes the guesswork of "how many confirmations are safe enough."
*   **No migration required.** Your existing contracts and dApps simply finalize faster — no code changes needed.

## How it works

Instant Finality is powered by **Savanna**, a **Byzantine Fault Tolerant (BFT)** consensus protocol (inspired by the HotStuff algorithm). It separates two responsibilities that used to belong to a single role:

*   **Block Proposers** produce blocks, as before.
*   **Block Finalizers** vote on blocks by signing them.

Finalizer votes use **BLS signatures**, which aggregate into a single compact **Quorum Certificate** (verified in ~1.1 ms). Once a supermajority of finalizers has signed a block, that block is **final** — cryptographically and permanently.

::: info Ultra still uses Proof of Authority
Instant Finality changes *how fast* blocks become final — it does **not** change *who* produces them. Ultra continues to use [Proof of Authority](./consensus.md#proof-of-authority-poa) with its carefully selected Block Producers; the Savanna protocol provides this finality layer on top.
:::

## Compared to the previous protocol

|                   | Before (legacy)       | Now                              |
| ----------------- | --------------------- | -------------------------------- |
| Time to finality  | up to ~3 minutes      | **~1 second**                    |
| Finality type     | delayed confirmation  | **cryptographic & deterministic**|
| Producer roles    | single role           | Proposers + Finalizers           |
| Scaling producers | slowed finality       | add producers without slowing finality |

## Ultra vs. other blockchains

Finality is where Ultra stands apart. Compared with other major chains:

| Blockchain | Time to finality   | Finality type        |
| ---------- | ------------------ | -------------------- |
| Ethereum   | ~13–15 minutes     | deterministic        |
| Solana     | ~13 seconds        | deterministic (BFT)  |
| **Ultra**  | **~1 second**      | **deterministic (BFT)** |

*Figures are typical real-world values and vary with network conditions.*

## Is it secure?

Yes — more secure than before. Instant Finality provides **deterministic** finality backed by BFT cryptography: a block is final only after a supermajority of finalizers has cryptographically signed it, and a final block can never be reverted. This is a stronger guarantee than the **probabilistic** finality used by chains like Bitcoin, where "final" only ever means "extremely unlikely to be reversed."

## Learn more

*   [Consensus](./consensus.md) — how Ultra's Proof of Authority works
*   [Block Production](./block-production.md) — how blocks are produced on Ultra
