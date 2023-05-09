---
title: 'Genesis Node'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -98
---

# Setting Up Genesis Node

While you are reading this article keep in mind that these are steps that Ultra will be performing on their Genesis Node. These are not steps that are going to be taken by the Block Producers.

The Ultra system token is **UOS** and has a decimal count of **4**. This will be used to launch the system contract and ensure everything is synchronized between the eosio.token contract and eosio.system contract.

Ultra will be providing pre-compiled contract ABIs and WASMs.

**Important:** Before launch, any default chain parameters inside of the source files need to be **DISCUSSED** and **ADJUSTED** before the system contract is used.

## Creating System Accounts

The first thing that we’re going to do is create the system accounts. Here’s a full list of the system accounts.

*   eosio
    
*   eosio.token
    
*   eosio.system
    
*   eosio.msig
    
*   eosio.ram: store ram payment
    
*   eosio.ramfee: store ram fee
    
*   eosio.stake: store staked token
    
*   eosio.wrap: for the wrap contract
    
*   ultra: ultra root account
    

**Note:** All of the accounts should be placed under the same genesis key **except** for **ULTRA**. As these accounts will eventually forfeit their permissions to the producers. The creation of these accounts can be done through the following action.

```typescript
cleos create account eosio <account_name>
```

We will ensure that all accounts are created by checking them manually.

```typescript
cleos get account <account_name>
```

**Accounts which EOS mainnet use whereas ultra doesn't**

*   eosio.rex, as we don't have res
    
*   eosio.names, as we don't have premium name policy yet, no name bidding
    
*   eosio.saving, as we don't have extra inflation, so we don't need the saving account
    
*   eosio.bpay: producers' block reward, as we inflate token when doing reward for each BP, we don't need the cache
    
*   eosio.vpay
    

## Setting Up for Chain Feature Activation

The chain features must be manually activated before launch; here’s how we can do that.

```bash
curl -X POST http://127.0.0.1:8888/v1/producer/schedule_protocol_feature_activations -d '{"protocol_features_to_activate": ["0ec7e080177b2c02b278d5088611686b49d739925a92d9bfcacd7fc6b74053bd"]}' | jq
```

## Initializing the BIOS Contract

The BIOS contract must be deployed on eosio before we continue any further.

Ultra provides a compiled version of this contract.

```typescript
cleos set contract eosio ./eosio.contracts/contracts/eosio.bios.x.x.x eosio.bios.wasm eosio.bios.abi -p eosio
```

## Activating the Chain Features

These chain features must be activated manually. In order, the following features are going to be activated.

*   GET\_SENDER
    
*   FORWARD\_SETCODE
    
*   ONLY\_BILL\_FIRST\_AUTHORIZER
    
*   RESTRICT\_ACTION\_TO\_SELF
    
*   DISALLOW\_EMPTY\_PRODUCER\_SCHEDULE
    
*   FIX\_LINKAUTH\_RESTRICTION
    
*   REPLACE\_DEFERRED
    
*   NO\_DUPLICATE\_DEFERRED\_ID
    
*   ONLY\_LINK\_TO\_EXISTING\_PERMISSION
    
*   RAM\_RESTRICTIONS
    
*   WEBAUTHN\_KEYS
    
*   WTMSIG\_BLOCK\_SIGNATURES
    

```typescript
cleos push action eosio activate '["f0af56d2c5a48d60a4a5b5c903edfb7db3a736a94ed589d0b797df33ff9d3e1d"]' -p eosio

cleos push action eosio activate '["2652f5f96006294109b3dd0bbde63693f55324af452b799ee137a81a905eed25"]' -p eosio

cleos push action eosio activate '["8ba52fe7a3956c5cd3a656a3174b931d3bb2abb45578befc59f283ecd816a405"]' -p eosio

cleos push action eosio activate '["ad9e3d8f650687709fd68f4b90b41f7d825a365b02c23a636cef88ac2ac00c43"]' -p eosio

cleos push action eosio activate '["68dcaa34c0517d19666e6b33add67351d8c5f69e999ca1e37931bc410a297428"]' -p eosio

cleos push action eosio activate '["e0fb64b1085cc5538970158d05a009c24e276fb94e1a0bf6a528b48fbc4ff526"]' -p eosio

cleos push action eosio activate '["ef43112c6543b88db2283a2e077278c315ae2c84719a8b25f25cc88565fbea99"]' -p eosio

cleos push action eosio activate '["4a90c00d55454dc5b059055ca213579c6ea856967712a56017487886a4d4cc0f"]' -p eosio

cleos push action eosio activate '["1a99a59d87e06e09ec5b028a9cbb7749b4a5ad8819004365d02dc4379a8b7241"]' -p eosio

cleos push action eosio activate '["4e7bf348da00a945489b2a681749eb56f5de00b900014e137ddae39f48f69d67"]' -p eosio

cleos push action eosio activate '["4fca8bd82bbd181e714e283f83e1b45d95ca5af40fb89ad3977b653c448f78c2"]' -p eosio

cleos push action eosio activate '["299dcb6af692324b899b39f16d5a530a33062804e41f09dc97e9f156b4476707"]' -p eosio
```

We will verify all of these are activated by running the following command.

```bash
curl -X POST http://127.0.0.1:8888/v1/producer/get_supported_protocol_features -d '{}' | jq
```

## Initialize Base Contracts

We’re first going to initialize the **eosio.token** and **eosio.msig** contracts. This is entirely dependent on the directory you are in, but it should be a similar process. Ensure the keys for the accounts are inside of your wallet at this time.

After we’ll start with setting both the eosio.token and eosio.msig contracts. We’ll be using the ‘eosio.contracts/contracts’ the folder in this reference.

```typescript
cleos set contract eosio.token ./eosio.token

cleos set contract eosio.msig ./eosio.msig
```

After that, we'll be adding some permissions to the token account.

```typescript
cleos set account permission eosio.token active --add-code eosio.token owner -p eosio.token
cleos set account permission ultra active --add-code eosio.token owner -p ultra
```

Then we’ll initialize the actual eosio.token contract immediately after; putting reserved symbols into the eosio.token table.

```typescript
cleos push action eosio.token init '[]' -p ultra
```

Then we’ll initialize the system currency. Please replace **MAX\_SUPPLY** with the maximum tokens agreed upon in the IEO, which was 1,000,000,000 tokens.

```typescript
cleos push action eosio.token create '["ultra","1000000000.0000 UOS"]' -p ultra
```

Ultra needs to take into consideration their token pre-sale. This should match the pre-sale numbers and will be distributed after launch.

```typescript
cleos push action eosio.token issue '["ultra","AMOUNT.0000 UOS", "Init"]' -p ultra
```

## Initialize the System Contract

We’ll start off by setting the contract for the account **eosio**.

```typescript
cleos set contract eosio ./eosio.system
```

After setting this contract we need to initialize the system contract with our currency. Remember that we’re using 4 for the precision of our system currency.

```typescript
cleos push action eosio init '[0,"4,UOS"]' -f -p eosio
```

There is a README inside for additional information and the daemon can be called by running.

```typescript
node index.js <end_point> <private_key>
```

Here are the relevant actions as examples for conversion rates, and taxes.

```typescript
cleos push action eosio setconvper '[900]' -p ultra
cleos push action eosio setconvrate '[["1.0000 USD", "2.0000 EURO", "0.2000 CNY"], 1550174700]' -p ultra
cleos push action eosio setconvrate '[["1.1000 USD", "2.1000 EURO", "0.3000 CNY"], 1550174200]' -p ultra
cleos push action eosio setconvrate '[["1.2000 USD", "2.1000 EURO", "0.4000 CNY"], 1550175700]' -p ultra
cleos push action eosio setconvrate '[["1.1000 USD", "1.1300 EURO", "0.1500 CNY"], 1550174700]' -p ultra
cleos push action eosio settax '["USA", 15]' -p ultra
cleos push action eosio settax '["EUR", 10]' -p ultra
cleos push action eosio settax '["CHN", 5]' -p ultra
```

We also cannot forget to reserve some RAM for ultra.

```typescript
cleos push action eosio resvrambytes '["1073741824"]' -p ultra
```

## Registering New Accounts

At this point, we will need to register accounts for our Block Producer partners. Our Block Producer partners will need to provide their account names as well as their public key. We will use the system contract to make new accounts from this point forward.

```typescript
cleos system newaccount ultra <account_name> <public_key> --transfer --stake-net "0.0000 UOS" --stake-cpu "0.0000 UOS" --gift-ram-kbytes 4k -p ultra
```

## Resigning Genesis Account to Block Producers

At this stage we will be resigning our genesis account and removing all of the associated permissions. The **eosio.system** contract will be distributing its permissions to our Block Producers from here on in. After this step Ultra will no longer be responsible for anything that the system contract does and it will be fully automated by the block production schedule.

There are additional details on how this is done in the following article: [Resigning eosio and system accounts](./resigning-eosio-and-system-accounts.md)