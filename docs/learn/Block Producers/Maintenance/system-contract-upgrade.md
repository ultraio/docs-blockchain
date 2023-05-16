---
title: 'System Contract Upgrade'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -94
---

# System Contract Upgrade

The system contract upgrade needs to go through a packed transaction action; that will get the transaction ready. Once the transaction is ready we send it up to eosio.msig contract and get it ready for all of the active BPs to vote upon. 

First, we need to pack the transaction and get it ready. This will output the transaction to a file. However, this step implies that the system contract is already compiled, and you’ve copied this data to a new folder and opened it up with a terminal.

```typescript
cleos set contract eosio ./ eosio.system.wasm eosio.system.abi -p eosio.prods -x 60000 -d -s |& tee upgrade.json
```

Here’s an example of **before**:

```typescript
"expiration": "2019-08-15T22:07:41"
```

Here’s an example of **after**:

```typescript
"expiration": "2019-08-17T22:07:41"
```

After completing this step; you’ll want to get a list of the current producers and set up a file of ‘potential’ permissions that will be necessary to get this contract upgraded with Ultra’s permission. The way that we can do this is to run a simple command and then paste the following line of code; copy the below code first and modify it where necessary.

**Template**:

```typescript
[{"actor": "producer1", "permission": "active"}, {"actor": "ultra", "permission": "active"}]
```

**Example:**

```typescript
[{"actor": "producacnt11", "permission": "active"}, {"actor": "producacnt12", "permission": "active"},{"actor": "ultra", "permission": "active"}]
```

Once your template is ready to type the following and paste your modified permissions JSON.

```typescript
cat > perms.json
```

After it is pasted inside; press ctrl+c and that’ll cancel the editing and save the file. You can always re-open to ensure the permissions made it inside.

Now we’re ready to push up the proposal for the upgrade.

## Deploying the Multi-Signature Transaction

Instead of using ‘propose’ from eosio.msig we’re going to use a different version. Inside the folder with your ‘.wasm’, ‘.abi’, and two ‘.json’ files we’ll use the following to deploy it.

```typescript
cleos multisig propose_trx upgradesys perms.json upgrade.json ultra -p ultra
```

Great! We can review this on-chain after it has been deployed.

```typescript
cleos multisig review ultra upgradesys
```

## Gather Signatures

One of the final steps is to gather signatures for this upgrade. We can do this by having our block producers approve of the upgrade. Here’s an example template for the cleos command they can run.

```typescript
cleos multisig approve ultra upgradesys '{"actor":"producacnt11","permission":"active"}' -p producacnt11

cleos multisig approve ultra upgradesys '{"actor":"producacnt12","permission":"active"}' -p producacnt12
```

Very easy to get an upgrade going.

## Final Step

After enough signatures are gathered and Ultra has also signed on to this proposal; we can execute the code.

```typescript
cleos multisig exec ultra upgrade -p ultra
```

The transaction is complete. Celebrate by checking the system tables or running some of the new system contract actions that may or may not have been included.