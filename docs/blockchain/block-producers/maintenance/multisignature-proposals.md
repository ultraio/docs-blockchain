---
title: 'MSIG Proposals'

outline: [0,4]
order: -96
---

# MSIG Proposals

Making proposals on-chain requires both Ultra and Block Producers to approve a proposal. A proposal is a series of actions and/or changes that are meant to be executed at the time of approval. Once Ultra and Block Producers approve of these changes then the code gets executed.

### Important steps before resignation to eosio.msigs

We need to do **setpriv** on the **eosio.msig** contract to allow it to be handled by other Block Producers. The following line will solve the issue, and allow other Block Producers to control the **eosio.prods** account properly.

```typescript
cleos push action eosio setpriv '["eosio.msig", 1]' -p eosio@active
```

## Creating a Proposal

Proposals use the multisig option inside of the built-in cleos interface. It can be done through the following action.

```typescript
cleos multisig propose <proposal_name> <requested_permissions> <trx_permissions> <contract> <action> <data> <proposer> <proposal_exp_in_hours>
```

*   **Proposal\_Name**
    
    *   The name of the proposal.
        
    *   Needs to be less than or equal to 12 characters.
        
    *   Needs to follow standard EOS name rules.
        
*   **Requested\_Permissions**
    
    *   A JSON String or filename defining requested permissions.
        
*   **Trx\_Permission**
    
    *   A JSON string or filename defining transaction permissions.
        
*   **Contract**
    
    *   The contract in which the deferred transaction should go to.
        
*   **Action**
    
    *   The action for the deferred transaction.
        
*   **Data**
    
    *   A JSON string or filename defining the action to propose.
        
*   **Proposer**
    
    *   An account proposing the transaction.
        
*   **Proposal\_Expiration**
    
    *   The time in hours until this transaction becomes expired.
        
    *   Optional
        

**Example:**

```typescript
cleos multisig propose proposalname '[{"actor": "producacnt11", "permission": "active"}, {"actor": "producacnt12", "permission": "active"}, {"actor": "producacnt13", "permission": "active"}, {"actor": "ultra", "permission": "active"}]' '[{"actor": "eosio.prods", "permission": "active"}]' eosio setacctram '{"account":"producacnt11", "ram_bytes":"5000"}' -p ultra
```

An alternative to the above proposal is **propose\_trx** which is a more flexible version of the above code.

```typescript
cleos multisig propose_trx <name> <requested_perms> <json string or file> <proposer>
```

## Reviewing a Proposal

You can always review the current proposal by reviewing who originally published it and then seeing what permissions are required under

```typescript
cleos multisig review <proposer_name> <proposal_name>
```

**Example:**

```typescript
cleos multisig review ultra setacctrm
```

## Approving a Proposal

Proposals must be approved by both Ultra and a handful of producers on the chain. This can be done with the following action. Note that Ultra is required for EVERY proposal. Otherwise, it will not be approved.

```typescript
cleos multisig approve <proposer> <proposal_name> <permissions> <proposal_hash>
```

## Canceling a Proposal

Proposals can only be canceled by the original owner or Ultra. Ultra reserves special veto rights over proposals.

```typescript
cleos multisig cancel <proposer> <proposal_name>
```

**Example:**

```typescript
cleos multisig cancel ultra setacctram
```

## Invalidate

When a proposal is changed then it is often appropriate to invalidate all signatures on the contract. This can be done through the invalidate action.

```typescript
cleos multisig invalidate <invalidator_name>
```

**Example:**

```typescript
cleos multisig cancel ultra setacctram
```