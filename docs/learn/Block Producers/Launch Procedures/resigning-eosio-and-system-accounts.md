---
title: 'Resigning System Accounts'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -95
---

# Resigning EOSIO and System Accounts

Once the network has 3 producers actively producing blocks for the chain; Ultra can move on to resigning the eosio permissions to the producers.

Ultra will also need to go through and only let eosio control the system accounts. This is a precaution to ensure that all system accounts are only controlled by eosio.

## Resigning System Accounts

The first thing we’ll do is resign eosio and give privileges to eosio.wrap and eosio.msig.

```typescript
cleos push action eosio setpriv '["eosio.msig", 1]' -p eosio@active
cleos push action eosio setpriv '["eosio.wrap", 1]' -p eosio@active
```

## Resigning EOSIO Account

After we can do the final update of authorization on eosio by resigning all permissions to the eosio.prods account.

```typescript
cleos push action eosio updateauth '{"account": "eosio", "permission": "owner", "parent": "", "auth": {"threshold": 1, "keys": [], "waits": [], "accounts": [{"weight": 1, "permission": {"actor": "eosio.prods", "permission": "active"}}]}}' -p eosio@owner

cleos push action eosio updateauth '{"account": "eosio", "permission": "active", "parent": "owner", "auth": {"threshold": 1, "keys": [], "waits": [], "accounts": [{"weight": 1, "permission": {"actor": "eosio.prods", "permission": "active"}}]}}' -p eosio@active
```