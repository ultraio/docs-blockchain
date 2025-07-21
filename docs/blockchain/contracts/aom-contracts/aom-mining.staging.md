---
title: 'AOM Mining Contract'
order: 101
---

# AOM Mining Contract (aom.mining)

The AOM Mining contract manages resource prospecting, mining operations, and mine upgrades within the Ash of Mankind ecosystem. This contract handles the discovery of natural resources on land parcels and their subsequent extraction through built mines.

## Overview

The mining contract enables players to:
- Prospect unbuilt resource land to discover natural resources
- Build and operate mines to extract resources over time
- Upgrade mine production speed and storage capacity
- Collect accumulated resources from active mines

## Tables

### Global Settings

#### `global` (Singleton)
- **Scope**: Contract (`aom.mining`)
- **Description**: Global contract state

| Field | Type | Description |
|-------|------|-------------|
| `locked` | `bool` | Emergency lock status |

#### `basesettings` (Singleton)
- **Scope**: Contract (`aom.mining`)  
- **Description**: Base mining configuration

| Field | Type | Description |
|-------|------|-------------|
| `prospecting_duration_sec` | `uint32_t` | Seconds required for prospecting |
| `instant_prospecting_fee` | `map<symbol, uint64_t>` | Fees for instant prospecting |
| `upgrade_production_speed_fee` | `map<symbol, uint64_t>` | Fees for production speed upgrades |
| `upgrade_storage_capacity_fee` | `map<symbol, uint64_t>` | Fees for storage capacity upgrades |
| `valid_resource_land_factory_ids` | `vector<uint64_t>` | Valid factory IDs for resource land |

#### `resourcestng` (Multi-Index)
- **Scope**: Contract (`aom.mining`)
- **Primary Key**: `resource_symbol.code().raw()`
- **Secondary Index**: `type` (by `resource_type`)

| Field | Type | Description |
|-------|------|-------------|
| `resource_symbol` | `symbol` | Token symbol for this resource |
| `resource_type` | `string` | Resource type name (e.g., "Iron", "Coal") |
| `to_be_prospected` | `uint64_t` | Remaining prospectable quantity |
| `min_droprate_qty` | `uint64_t` | Minimum quantity when found |
| `max_droprate_qty` | `uint64_t` | Maximum quantity when found |
| `base_daily_mining_qty` | `uint64_t` | Base daily production rate |
| `base_storage_qty` | `uint64_t` | Base storage capacity |
| `max_storage_qty` | `uint64_t` | Maximum storage capacity |
| `production_speed_upgrade_increment` | `uint64_t` | Production speed increase per upgrade (precision: 2) |
| `max_production_speed` | `uint64_t` | Maximum production speed (precision: 2) |

### Operational Tables

#### `prospecttime` (Multi-Index)
- **Scope**: Contract (`aom.mining`)
- **Primary Key**: `uniq_id`

| Field | Type | Description |
|-------|------|-------------|
| `uniq_id` | `uint64_t` | Uniq being prospected |
| `completion_block_time` | `uint32_t` | When prospecting completes |

#### `cllctngtime` (Multi-Index)
- **Scope**: Contract (`aom.mining`)
- **Primary Key**: `uniq_id`

| Field | Type | Description |
|-------|------|-------------|
| `uniq_id` | `uint64_t` | Mine Uniq ID |
| `last_collected` | `uint32_t` | Last collection timestamp |

#### `rngrequests` (Multi-Index)
- **Scope**: Contract (`aom.mining`)
- **Primary Key**: `assoc_id`

| Field | Type | Description |
|-------|------|-------------|
| `assoc_id` | `uint64_t` | RNG request association ID |
| `uniq_id` | `uint64_t` | Uniq being prospected |
| `uniq_owner` | `name` | Owner of the Uniq |

#### `feebuffer` (Singleton)
- **Scope**: User account
- **Description**: Buffered fees for multi-asset payments

| Field | Type | Description |
|-------|------|-------------|
| `action_type` | `string` | Type of action being paid for |
| `total_num` | `uint64_t` | Total number of upgrades |
| `fee` | `map<symbol, uint64_t>` | Accumulated fees by asset |

## Actions

### Administrative Actions

#### `updbasesttng`
Updates base mining settings.

**Authorization**: Contract (`aom.mining`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `row` | `mining_base_settings` | New base settings |

**Behavior**: 
Sets global mining parameters including prospecting duration and upgrade fees.

**CLI Example**:
```bash
cleos push action aom.mining updbasesttng '{"row": {"prospecting_duration_sec": 86400, "instant_prospecting_fee": [["4,ASH", 1000]], "upgrade_production_speed_fee": [["4,ASH", 500]], "upgrade_storage_capacity_fee": [["4,ASH", 300]], "valid_resource_land_factory_ids": [123, 124, 125]}}' -p aom.mining@active
```

#### `updrsrcsttng`
Updates resource-specific settings.

**Authorization**: Contract (`aom.mining`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `row` | `mining_resource_settings` | Resource configuration |

**Behavior**: 
Configures parameters for a specific resource type including drop rates and production values.

**CLI Example**:
```bash
cleos push action aom.mining updrsrcsttng '{"row": {"resource_symbol": "4,IRON", "resource_type": "Iron", "to_be_prospected": 1000, "min_droprate_qty": 100, "max_droprate_qty": 500, "base_daily_mining_qty": 50, "base_storage_qty": 1000, "max_storage_qty": 10000, "production_speed_upgrade_increment": 25, "max_production_speed": 500}}' -p aom.mining@active
```

#### `setlocked`
Emergency lock/unlock the contract.

**Authorization**: Contract (`aom.mining`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `locked` | `bool` | Lock status |

**CLI Example**:
```bash
cleos push action aom.mining setlocked '{"locked": true}' -p aom.mining@active
```

### Gameplay Actions

#### `strtprspctng`
Initiates prospecting on unbuilt resource land.

**Authorization**: Uniq owner

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `uniq_owner` | `name` | Owner of the land Uniq |
| `uniq_id` | `uint64_t` | Land Uniq to prospect |

**Behavior**: 
- Validates land is unbuilt resource land from valid factory
- Creates prospecting timer entry
- Updates land metadata to "Unfinished Prospection"

**Technical Requirements**:
- Land must have no key_values set (unbuilt state)
- Factory must have correct 5-key schema with proper defaults
- Land cannot already be under prospecting

**CLI Example**:
```bash
cleos push action aom.mining strtprspctng '{"uniq_owner": "alice", "uniq_id": 12345}' -p alice@active
```

#### `reqprspctrep`
Requests prospecting completion with randomness.

**Authorization**: Uniq owner

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `uniq_owner` | `name` | Owner of the land Uniq |
| `uniq_id` | `uint64_t` | Land Uniq being prospected |
| `seed` | `uint64_t` | Random seed value |

**Behavior**: 
- Validates prospecting is complete (time elapsed)
- Requests random number from Ultra RNG service
- Removes prospecting timer entry

**CLI Example**:
```bash
cleos push action aom.mining reqprspctrep '{"uniq_owner": "alice", "uniq_id": 12345, "seed": 987654321}' -p alice@active
```

#### `receiverand`
Receives random number and completes prospecting.

**Authorization**: `ultra.rng` (RNG service)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `assoc_id` | `uint64_t` | RNG request association ID |
| `random_value` | `uint64_t` | Generated random number |

**Behavior**: 
- Uses random value to determine resource type and quantity
- Updates land metadata with discovered resource
- Decrements available resources in settings
- Updates land JSON metadata

**Note**: This action is called automatically by the RNG service.

#### `collectrsrcs`
Collects accumulated resources from a mine.

**Authorization**: Uniq owner

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `uniq_owner` | `name` | Owner of the mine Uniq |
| `uniq_id` | `uint64_t` | Mine Uniq ID |

**Behavior**: 
- Calculates resources produced since last collection
- Issues resource tokens to owner
- Updates mine's remaining resources
- Records new collection timestamp

**Production Formula**:
```cpp
produced_amount = (time_elapsed * base_daily_mining_qty * production_speed / 86400 + 50) / 100
produced_amount = min(produced_amount, remaining_resources)
produced_amount = min(produced_amount, storage_capacity)
```

**CLI Example**:
```bash
cleos push action aom.mining collectrsrcs '{"uniq_owner": "alice", "uniq_id": 12345}' -p alice@active
```

#### `clearbuffer`
Clears fee buffer and refunds assets.

**Authorization**: User

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `user` | `name` | User to clear buffer for |

**CLI Example**:
```bash
cleos push action aom.mining clearbuffer '{"user": "alice"}' -p alice@active
```

### Internal Actions

#### `minebuilt`
Called by construction contract when a mine is built.

**Authorization**: `aom.constrct`

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `uniq_id` | `uint64_t` | Newly built mine ID |

**Behavior**: 
Creates initial collection timer entry for the new mine.

## Token Transfer Actions

The contract accepts token transfers for various upgrade operations through the `on_transfer` notification.

### Instant Prospecting
**Memo Format**: `InstantProspect[,<uniq_id>]`

Send required fees to instantly complete prospecting for a land parcel.

### Production Speed Upgrade  
**Memo Format**: `UpgradeProductionSpeed[,<uniq_id>]`

Send fees to upgrade a mine's production speed. Multiple upgrades can be purchased with proportional fees.

### Storage Capacity Upgrade
**Memo Format**: `UpgradeStorageCapacity[,<uniq_id>]`

Send fees to upgrade a mine's storage capacity. Multiple upgrades can be purchased with proportional fees.

## Integration with On-Chain Data

The mining contract extensively uses Ultra's on-chain data system to manage land state:

### Factory Schema Requirements

Resource land factories must have exactly 5 keys:
1. **BuildingType** (string) - Default: "Unbuilt"
2. **ResourceType** (string) - Default: "Unprospected"  
3. **ResourceQty** (uint64)
4. **ProductionSpeed** (uint64)
5. **StorageCapacity** (uint64)

### State Transitions

Land parcels progress through these states:
1. **Unbuilt** → **Unfinished Prospection** (prospecting started)
2. **Unfinished Prospection** → **Unbuilt** + ResourceType (prospecting completed)
3. **Unbuilt** → **Mine** (construction completed)

### Metadata Updates

The contract updates both on-chain key-value data and JSON metadata to maintain consistency between game state and display assets.

## Security Considerations

- **Ownership Validation**: All operations validate Uniq ownership
- **State Consistency**: Extensive validation prevents invalid state transitions
- **Random Number Security**: Uses Ultra's secure RNG service
- **Fee Validation**: Robust checks prevent fee manipulation
- **Emergency Controls**: Contract locking mechanism for emergencies