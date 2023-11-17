---
title: 'Understanding the Config'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -97
---

# Understanding the Config

Ultra provides [Templates for config.ini](./templates-for-config.md), but a good way for you to better understand _nodeos_ software is to look into its help options or scroll through the _config.ini_ file and search for configurations that may fit your needs. Below you will find listed only the basic configurations needed for your operation.

## Set Block Producer's name

Set the producer-name option to your blockchain account.

The blockchain account will be provided to Block Producers by Ultra

```typescript
producer-name = BP_EOS_ACCOUNT
```

## Set Block Producer's signature provider

You will need to set the signature keys for your Block Producer. By now you should have created a key pair specifically for this using cleos. For further details, please refer to the [Account Administration](../maintenance/account-administration.md) section.

```typescript
signature-provider = PUBLIC_SIGNING_KEY=KEY:PRIVATE_SIGNING_KEY
```

## Set Block Producer's server address

Here you should set your node IP address.

```typescript
p2p-server-address = YOUR_NODE_IP_ADDRESS:PORT
```

## Define peers list

Here you should define all peers that your nodeos instance is in communication with. Ideally, you want to keep your Producer node IP secret. Most Block Producers have several API/seed nodes that hide their producer node as described before. The producer-only peers with the API/seed node.

```typescript
p2p-peer-address = PEER_NODE_IP_ADDRESS:PORT
```

## New WASM Runtime

After EOS v1.9 there were major performance increases for EOSIO in general. We’ll be utilizing those performance increases in our chain and we can directly enable some of those performance increases with the following two parameters. [Read more about EOS-VM performance increases.](https://eos.io/news/eos-virtual-machine-a-high-performance-blockchain-webassembly-interpreter/)

```typescript
wasm-runtime=eos-vm-jit
eos-vm-oc-enable=true
```

## Load the required plugins

Here the configuration changes according to the node type. For your Producer nodes, you need to enable at least the Producer and the Producer API plugins. For the Full and API nodes, enable Chain API and State History plugins as well in addition to the aforementioned. See the listing below as a reference for the Full and API nodes: 

```typescript
plugin = eosio::producer_plugin
plugin = eosio::producer_api_plugin
plugin = eosio::chain_api_plugin
plugin = eosio::http_plugin
plugin = eosio::history_plugin
plugin = eosio::history_api_plugin
```