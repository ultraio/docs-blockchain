---
title: 'AOM Processing Contract'
order: 103
---

# AOM Processing Contract (aom.processi)

The AOM Processing contract manages resource conversion and production within the Ash of Mankind ecosystem. This contract enables players to transform raw materials into processed goods using various building types, implementing time-based production cycles and progressive claiming mechanisms.

## Overview

The processing contract enables players to:
- Convert raw resources into processed materials
- Manage time-based production cycles
- Upgrade building production capabilities
- Claim processed goods progressively or in full
- Handle owner reclamation of unclaimed production

## Tables

### Configuration Tables

#### `global` (Singleton)
- **Scope**: Contract (`aom.processi`)
- **Description**: Global contract state

| Field | Type | Description |
|-------|------|-------------|
| `locked` | `bool` | Emergency lock status |

#### `prcsngsttngs` (Multi-Index)
- **Scope**: Contract (`aom.processi`)
- **Primary Key**: `output_resource.code().raw()`

| Field | Type | Description |
|-------|------|-------------|
| `output_resource` | `symbol` | Symbol of the produced resource |
| `required_building_type` | `string` | Building type required for production |
| `base_conversion_duration_sec` | `uint32_t` | Base production time in seconds |
| `input_resources` | `map<symbol, uint64_t>` | Required input materials and quantities |

#### `bldngsttngs` (Multi-Index)
- **Scope**: Contract (`aom.processi`)
- **Primary Key**: `string_idx(building_type)`

| Field | Type | Description |
|-------|------|-------------|
| `building_type` | `string` | Type of building (e.g., "Smelter", "Forge") |
| `production_fee` | `uint32_t` | Production fee percentage (precision: 2) |
| `upgrade_fee` | `map<symbol, uint64_t>` | Fees for upgrading production speed |
| `production_speed_upgrade_increment` | `uint64_t` | Speed increase per upgrade (precision: 2) |
| `max_production_speed` | `uint64_t` | Maximum production speed (precision: 2) |

### Operational Tables

#### `processing` (Multi-Index)
- **Scope**: Uniq ID
- **Primary Key**: `start_block_time`

| Field | Type | Description |
|-------|------|-------------|
| `user` | `name` | User who started the production |
| `output_resource` | `symbol` | Resource being produced |
| `total_qty` | `uint64_t` | Total quantity being produced |
| `claimed_qty` | `uint64_t` | Quantity already claimed |
| `start_block_time` | `uint32_t` | Production start timestamp |
| `end_block_time` | `uint32_t` | Production completion timestamp |

#### `processiuser` (Multi-Index)
- **Scope**: User account
- **Primary Key**: `index`
- **Secondary Index**: `start` (by `start_block_time`)

| Field | Type | Description |
|-------|------|-------------|
| `index` | `uint64_t` | Unique entry index |
| `uniq_id` | `uint64_t` | Building Uniq used for production |
| `output_resource` | `symbol` | Resource being produced |
| `total_qty` | `uint64_t` | Total quantity being produced |
| `claimed_qty` | `uint64_t` | Quantity already claimed |
| `start_block_time` | `uint32_t` | Production start timestamp |
| `end_block_time` | `uint32_t` | Production completion timestamp |

### Buffer Tables

#### `resbuffer` (Singleton)
- **Scope**: User account
- **Description**: Buffered resources for production

| Field | Type | Description |
|-------|------|-------------|
| `output_resource` | `symbol` | Desired output resource |
| `total_qty` | `uint64_t` | Total output quantity |
| `input_resources` | `map<symbol, uint64_t>` | Accumulated input resources |

#### `feebuffer` (Singleton)
- **Scope**: User account
- **Description**: Buffered fees for upgrades

| Field | Type | Description |
|-------|------|-------------|
| `building_type` | `string` | Building type being upgraded |
| `total_upgrades` | `uint64_t` | Number of upgrades being purchased |
| `upgrade_fee` | `map<symbol, uint64_t>` | Accumulated upgrade fees |

## Actions

### Administrative Actions

#### `updprocsttng`
Updates processing settings for a resource.

**Authorization**: Contract (`aom.processi`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `row` | `processing_settings` | Resource processing configuration |

**Behavior**: 
Configures how a specific resource is produced, including required inputs and building type.

**CLI Example**:
```bash
cleos push action aom.processi updprocsttng '{"row": {"output_resource": "4,STEEL", "required_building_type": "Smelter", "base_conversion_duration_sec": 7200, "input_resources": [["4,IRON", 2], ["4,COAL", 1]]}}' -p aom.processi@active
```

#### `updbldsttng`
Updates building settings for production capabilities.

**Authorization**: Contract (`aom.processi`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `row` | `building_settings` | Building configuration |

**Behavior**: 
Configures production parameters for a building type including fees and upgrade limits.

**CLI Example**:
```bash
cleos push action aom.processi updbldsttng '{"row": {"building_type": "Smelter", "production_fee": 500, "upgrade_fee": [["4,ASH", 1000]], "production_speed_upgrade_increment": 25, "max_production_speed": 300}}' -p aom.processi@active
```

#### `updatefees`
Updates production fees for a building type.

**Authorization**: Contract (`aom.processi`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `building_type` | `name` | Building type to update |
| `production_fee` | `uint32_t` | New production fee (precision: 2) |

**CLI Example**:
```bash
cleos push action aom.processi updatefees '{"building_type": "smelter", "production_fee": 750}' -p aom.processi@active
```

#### `setlocked`
Emergency lock/unlock the contract.

**Authorization**: Contract (`aom.processi`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `locked` | `bool` | Lock status |

**CLI Example**:
```bash
cleos push action aom.processi setlocked '{"locked": true}' -p aom.processi@active
```

### Gameplay Actions

#### `collectprod`
Collects processed goods from a production run.

**Authorization**: User or Uniq owner (depending on `owner_claims`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `user` | `name` | User who started production |
| `uniq_owner` | `name` | Owner of the building Uniq |
| `owner_claims` | `bool` | Whether owner is claiming vs user |
| `uniq_id` | `uint64_t` | Building Uniq ID |
| `start_block_time` | `uint32_t` | Production start time identifier |

**Behavior**: 
- **User Claims**: Can claim progressively during production or fully after completion
- **Owner Claims**: Can claim unclaimed goods 2 weeks after production completion

**Progressive Claiming Formula**:
```cpp
claimable_amount = (total_qty - claimed_qty) * elapsed_time / total_production_time
```

**CLI Examples**:
```bash
# User claims during production
cleos push action aom.processi collectprod '{"user": "alice", "uniq_owner": "bob", "owner_claims": false, "uniq_id": 12345, "start_block_time": 1640995200}' -p alice@active

# Owner reclaims after 2 weeks
cleos push action aom.processi collectprod '{"user": "alice", "uniq_owner": "bob", "owner_claims": true, "uniq_id": 12345, "start_block_time": 1640995200}' -p bob@active
```

#### `clearbuffer`
Clears resource/fee buffers and refunds assets.

**Authorization**: User

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `user` | `name` | User to clear buffers for |

**CLI Example**:
```bash
cleos push action aom.processi clearbuffer '{"user": "alice"}' -p alice@active
```

## Token Transfer Actions

The contract accepts token transfers for production and upgrade operations through the `on_transfer` notification.

### Resource Production
**Memo Format**: `Production,<output_resource>,<total_qty>[,<uniq_id>]`

**Two-Phase Process**:
1. **Resource Collection**: Send input resources without uniq_id to accumulate materials
2. **Production Start**: Send final resource with uniq_id to begin production

**Example Production Flow**:
```bash
# Phase 1: Send input resources
cleos transfer alice aom.processi "200.0000 IRON" "Production,4,STEEL,100"
cleos transfer alice aom.processi "100.0000 COAL" "Production,4,STEEL,100"

# Phase 2: Start production with building
cleos transfer alice aom.processi "0.0001 IRON" "Production,4,STEEL,100,12345"
```

### Production Speed Upgrades
**Memo Format**: `UpgradeProductionSpeed,<building_type>[,<uniq_id>]`

**Two-Phase Process**:
1. **Fee Collection**: Send upgrade fees without uniq_id
2. **Upgrade Application**: Send final fee with uniq_id to apply upgrades

**Example Upgrade Flow**:
```bash
# Phase 1: Send upgrade fees (for 2 upgrades)
cleos transfer alice aom.processi "2000.0000 ASH" "UpgradeProductionSpeed,Smelter"

# Phase 2: Apply upgrades to building
cleos transfer alice aom.processi "0.0001 ASH" "UpgradeProductionSpeed,Smelter,12345"
```

## Production Mechanics

### Production Formula

The production system calculates completion time based on:

```cpp
adjusted_duration = base_duration * 100 / production_speed
end_time = start_time + adjusted_duration
```

Where:
- `base_duration`: Base conversion time from settings
- `production_speed`: Building's current speed (precision: 2, default: 100)

### Progressive Claiming

Users can claim processed goods before production completes:

1. **During Production**: Proportional claiming based on elapsed time
2. **After Completion**: Full remaining amount claimable
3. **Owner Reclaim**: After 2 weeks, building owner can claim unclaimed goods

### Resource Requirements

Production requires exact resource ratios as configured in processing settings:

```cpp
// Example: Steel production requires 2 IRON + 1 COAL per unit
input_resources: [
    ["4,IRON", 2],
    ["4,COAL", 1]
]
```

## Building Integration

### Building Type Validation

The contract validates that buildings can produce specific resources:

1. **Building Ownership**: User must own or have access to the building
2. **Building Type**: Must match `required_building_type` for the resource
3. **Building State**: Building must be operational (not under construction)

### Production Speed System

Buildings have upgradeable production speeds:

- **Base Speed**: 100 (100% speed, precision: 2)
- **Upgrade Increment**: Configurable per building type
- **Maximum Speed**: Configurable limit per building type

### Fee Structure

Production operations include fees paid to building owners:

- **Production Fee**: Percentage of input resources (precision: 2)
- **Upgrade Fees**: Fixed asset amounts for speed improvements

## Buffer Management

### Resource Buffering

The system buffers input resources to handle multi-asset production requirements:

1. **Accumulation**: Resources collected as they're sent
2. **Validation**: Ensures correct ratios and quantities
3. **Consumption**: All required resources consumed when production starts

### Fee Buffering

Upgrade operations buffer fees for multi-asset upgrade costs:

1. **Collection**: Upgrade fees accumulated incrementally
2. **Validation**: Ensures all required fees are present
3. **Processing**: Upgrades applied when all fees collected

## Cross-Contract Integration

### Token Management

- **Input Consumption**: Resources transferred to contract and consumed
- **Output Production**: New tokens issued via `aom.coins` contract
- **Fee Handling**: ASH fees transferred to vault, others retired

### Building Verification

The contract integrates with building systems to verify:

- Building ownership and state
- Building type compatibility
- Production capability and speed

## Security Considerations

- **Ownership Validation**: Strict validation of building access rights
- **Resource Integrity**: Prevents manipulation of input/output ratios
- **Time Validation**: Ensures proper production timing
- **Fee Validation**: Robust checks prevent fee manipulation
- **Buffer Limits**: Prevents resource/fee buffer overflow
- **Reclaim Protection**: 2-week delay protects user claiming rights
- **Emergency Controls**: Contract locking for emergency situations

## Query Examples

### Get Processing Settings
```bash
cleos get table aom.processi aom.processi prcsngsttngs
```

### Get Building Settings
```bash
cleos get table aom.processi aom.processi bldngsttngs
```

### Get Active Production (by Uniq)
```bash
cleos get table aom.processi 12345 processing
```

### Get User Production History
```bash
cleos get table aom.processi alice processiuser
```