---
title: 'Genesis Node Sync'

outline: [0,4]
order: -97
---

# Synchronizing with Genesis Node

## Connecting to the Genesis Node

Ultra will provide a configuration with all Wireguard IPs that will allow our Block Producers to synchronize with each other and the Genesis node. This will help smooth out the process of getting all of our Block Producers connected and streamlining our network launch.

## Retrieving the Genesis Configuration

The `genesis.json` is used as a starting point for the chain and is used to ensure that our Block Producers are synchronizing properly with Ultra’s genesis node. Ultra will be providing the `genesis.json` to utilize at the time of launch.

Here’s an example configuration. Ensure that **max\_inline\_action\_depth** is set to the value that is decided upon before launch.

**Important:** The following **genesis.json** needs to take into account the **‘ultra\_veto\_enabled’** configuration. This is incredibly important for the chain launch as it is required functionality for our enterprise solution.

```json
{
    "initial_timestamp": "2018-09-01T12:00:00.000",
    "initial_key": "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
    "initial_configuration": {
      	"max_block_net_usage": 1048576,
		"target_block_net_usage_pct": 1000,
		"max_transaction_net_usage": 524288,
		"base_per_transaction_net_usage": 12,
		"net_usage_leeway": 500,
		"context_free_discount_net_usage_num": 20,
		"context_free_discount_net_usage_den": 100,
		"max_block_cpu_usage": 200000,
		"target_block_cpu_usage_pct": 1000,
		"max_transaction_cpu_usage": 150000,
		"min_transaction_cpu_usage": 100,
		"free_cpu_basis_point": 6000,
		"free_net_basis_point": 6000,
		"ultra_veto_enabled": 1,
		"max_transaction_lifetime": 3600,
		"deferred_trx_expiration_window": 600,
		"max_transaction_delay": 3888000,
		"max_inline_action_size": 4096,
		"max_inline_action_depth": 4,
		"max_authority_depth": 6
    }
}.
```

## Initial Key Pair

**initial\_key** should be unique, and will be used to launch the genesis nodeos; only **Ultra** should be aware of the private initial key. You will be sent a public key by Ultra to put in place of the **initial\_key**.

## Initial Chain ID

The Chain ID is now derived by the configuration after starting the network. This Chain ID will be passed to the Block Producers to ensure that they all are connecting to the same network.