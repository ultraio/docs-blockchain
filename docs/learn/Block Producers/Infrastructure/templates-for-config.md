---
title: 'Templates for Config'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -96
---

# Templates for Config

## Benchmarking Config - Producer / API

This is the configuration file that we used doing our benchmarking tests. This should not be used in production and should only be used for benchmarking local chains, or stress testing the network. The configurations for Producer and APIs need to target all available endpoints for pushing transactions through.

```typescript
chain-state-db-size-mb = 4096
chain-state-db-guard-size-mb = 256

agent-name = "Producer"

max-clients = 0
p2p-max-nodes-per-host = 10

chain-threads = 4
producer-threads = 4

http-server-address = 127.0.0.1:8888
p2p-listen-endpoint = bhs-infra-1:9876

# peers
# producers
p2p-peer-address = <host>:<port>
p2p-peer-address = <host>:<port>

# api
p2p-peer-address = <host>:<port>
p2p-peer-address = <host>:<port>
p2p-peer-address = <host>:<port>
p2p-peer-address = <host>:<port>
p2p-peer-address = <host>:<port>
p2p-peer-address = <host>:<port>

enable-stale-production  = true
pause-on-startup = false

max-transaction-time = 5000
http-max-response-time-ms = 30000

producer-name = <BLOCKCHAIN_NAME_ID_ETC>
signature-provider = <public>=KEY:<private_key>

plugin = eosio::chain_api_plugin
plugin = eosio::net_api_plugin
plugin = eosio::producer_api_plugin

wasm-runtime=eos-vm-jit
eos-vm-oc-enable=true
```

## API Node Template

This is a general template you should be running for your producing node. Keep in mind that it should be connected solely to your producer node and all other APIs.

```typescript
chain-state-db-size-mb = 4096
chain-state-db-guard-size-mb = 256

agent-name = "API"
max-clients = 0
p2p-max-nodes-per-host = 10

http-threads = 6
chain-threads = 4
# http not listening on localhost because of nginx HA setup
http-server-address = <YOUR_HOST:YOUR_PORT>
p2p-listen-endpoint = <YOUR_HOST:YOUR_PORT>

# OTHER APIs
p2p-peer-address = <HOST:PORT>
p2p-peer-address = <HOST:PORT>
p2p-peer-address = <HOST:PORT>
p2p-peer-address = <HOST:PORT>
p2p-peer-address = <HOST:PORT>
p2p-peer-address = <HOST:PORT>
p2p-peer-address = <HOST:PORT>
p2p-peer-address = <HOST:PORT>

# YOUR PRODUCER
p2p-peer-address = <HOST:PORT>

http-validate-host = false

access-control-allow-origin = *
access-control-allow-headers = *
access-control-allow-credentials = true

plugin = eosio::history_api_plugin
plugin = eosio::chain_api_plugin

wasm-runtime=eos-vm-jit
eos-vm-oc-enable=true
```

## Producer Node Template

This is the general template you should be running for your producer node. This node should only be connected to other producers and your own API nodes.

```typescript
chain-state-db-size-mb = 4096
chain-state-db-guard-size-mb = 256

agent-name = "Producer"
max-clients = 0
p2p-max-nodes-per-host = 10

chain-threads = 4
producer-threads = 4

http-server-address = 127.0.0.1:<YOUR_PORT>
p2p-listen-endpoint = <YOUR_HOST:YOUR_PORT>

# YOUR API Endpoints
p2p-peer-address = <HOST:PORT>
p2p-peer-address = <HOST:PORT>

enable-stale-production  = true
pause-on-startup = false

max-transaction-time = 5000
http-max-response-time-ms = 30000

producer-name = <BLOCKCHAIN_NAME_ID_ETC>
signature-provider= <public>=KEY:<private_key>

plugin = eosio::chain_api_plugin
plugin = eosio::net_api_plugin
plugin = eosio::producer_api_plugin

wasm-runtime=eos-vm-jit
eos-vm-oc-enable=true
```

## Parameters Explained

### wasm-runtime

Override the default runtime.

```typescript
eos-vm | eos-vm-jit 
```

### eos-vm-oc-enable

Enable optimized runtime for WASM.

```typescript
0 | 1
```

### signature-provider

This should only be present in your producer node. This should be your private key and public key for your producer account. This allows you to properly produce blocks.

```typescript
<public>=KEY:<private_key>
```

### producer-name

The account name of the producer that is controlled by this node.

```typescript
producer-name = <BLOCKCHAIN_NAME_ID_ETC>
```

### p2p-peer-address

A public endpoint of a peer node to connect to.

```typescript
p2p-peer-address = <ip>:<port>
```

### p2p-listen-endpoint

The actual host/port used to listen for incoming p2p connections.

```typescript
p2p-listen-endpoint = <ip>:<port>
```

### max-clients

The maximum number of clients that can connect to this node. Use **0** for unlimited.

```typescript
max-clients = 0
```

### p2p-max-nodes-per-host

The maximum number of nodes allowed to connect to this node from a single IP address.

```typescript
p2p-max-nodes-per-host = 1
```