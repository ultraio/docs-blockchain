---
title: 'Activating the Chain'

outline: [0,4]
order: -94
---

# Activating the Chain

## Difference from Antelope

Ultra is responsible for activating the chain and the `ultra` account is the only account that can activate the chain. It is important to understand that instead of having `eosio` account relieve its permissions we opted instead for the `ultra` account to complete this task.

## How to Activate

Once everything is verified for the resignation of accounts; we can do a final step to activate the chain.

This is the final step before the producers begin **PRODUCING** blocks.

```typescript
cleos push action eosio activatechn '[]' -p ultra
```