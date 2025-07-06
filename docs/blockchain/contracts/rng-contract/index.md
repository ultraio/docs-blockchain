---
title: 'RNG Contract Overview'
order: -99

---

# RNG Contract

## Overview

`ultra.rng` contract provides a secure and verifiable random number generation service for Ultra blockchain applications. It uses BLS12-381 cryptographic signatures to ensure the randomness cannot be manipulated by any party, including the oracle.

For Ultra, the RNG service is deployed under account `ultra.rng` and provides a decentralized solution for generating random numbers that can be used in games, lotteries, and other applications requiring randomness.

## Contract features

### 1 - Request Random Numbers

-   Any smart contract can request a random number by calling the `requestrand` action with a unique seed and association ID.
-   The contract maintains a job queue and assigns unique job IDs to each request.
-   Seeds must be unique and cannot be zero to ensure proper randomness.

### 2 - Oracle Service Integration

-   The Ultra oracle service monitors the RNG contract for new random number requests.
-   When a request is detected, the oracle service generates a cryptographically secure random value.
-   The oracle service calls the `setrand` action with the generated random value and BLS12-381 signature.
-   The oracle service also manages the public key by calling `setpubkey` when needed.

### 3 - Verifiable Randomness

-   Uses BLS12-381 cryptographic signatures to ensure the randomness cannot be manipulated.
-   The oracle signs the random value with a private key, and the signature can be verified on-chain.
-   This prevents both the oracle and any other party from predicting or manipulating the random numbers.

### 4 - Callback System

-   When the oracle service calls `setrand`, the RNG contract verifies the signature and calls the `receiverand` action on the requesting contract.
-   The callback includes the association ID and the generated random number.
-   This allows contracts to receive random numbers asynchronously.

### 5 - Administrative Controls

-   The oracle service can set the public key used for signature verification via `setpubkey`.
-   DApps can be banned or unbanned from using the RNG service.
-   Jobs can be killed to clean up the job queue.
-   All administrative actions can be disabled through the contract manager.

### 6 - Security Features

-   Banned accounts are silently ignored when requesting random numbers.
-   Seeds are tracked to prevent reuse.
-   Job IDs are unique and incrementing.
-   All actions require proper authentication.

## Integration

To use the RNG contract in your smart contract:

1.  Implement a `receiverand` action that accepts `uint64_t assoc_id` and `uint64_t random_value` parameters.
2.  Call `requestrand` with a unique seed and association ID to request a random number.
3.  Handle the callback in your `receiverand` action to use the generated random number.

For a complete step-by-step tutorial on integrating the RNG contract into your smart contract, see [How to Integrate RNG in Smart Contracts](/tutorials/rng/how-to-integrate-rng-in-smart-contracts.md).

The RNG contract provides a secure, decentralized solution for random number generation that can be trusted for critical applications like gaming, lotteries, and other use cases requiring verifiable randomness.
