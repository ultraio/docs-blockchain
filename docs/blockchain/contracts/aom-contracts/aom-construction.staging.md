---
title: 'AOM Construction Contract'
order: 102
---

# AOM Construction Contract (aom.constrct)

The AOM Construction contract manages building construction on land parcels within the Ash of Mankind ecosystem. This contract handles the creation of various structures including mines, factories, and other buildings on both resource and construction land.

## Overview

The construction contract enables players to:
- Build structures on prospected resource land and construction land
- Manage construction timers and completion
- Handle instant construction for premium fees
- Update land metadata and visual assets upon completion

## Tables

### Configuration Tables

#### `global` (Singleton)
- **Scope**: Contract (`aom.constrct`)
- **Description**: Global contract state

| Field | Type | Description |
|-------|------|-------------|
| `locked` | `bool` | Emergency lock status |

#### `basesettings` (Singleton)
- **Scope**: Contract (`aom.constrct`)
- **Description**: Base construction configuration

| Field | Type | Description |
|-------|------|-------------|
| `valid_construction_land_factory_ids` | `vector<uint64_t>` | Valid factory IDs for construction land |

#### `cnstrcsttngs` (Multi-Index)
- **Scope**: Contract (`aom.constrct`)
- **Primary Key**: `string_idx(building_type)`

| Field | Type | Description |
|-------|------|-------------|
| `building_type` | `string` | Type of building (e.g., "Mine", "Factory") |
| `required_factory_id` | `uint64_t` | Required land factory ID |
| `construction_duration_sec` | `uint32_t` | Construction time in seconds |
| `building_fee` | `map<symbol, uint64_t>` | Required fees for construction |
| `instant_construction_fee` | `map<symbol, uint64_t>` | Fees for instant completion |

#### `metadata` (Multi-Index)
- **Scope**: Contract (`aom.constrct`)
- **Primary Key**: `string_idx(land_state)`

| Field | Type | Description |
|-------|------|-------------|
| `land_state` | `string` | Land state identifier |
| `metadata_url` | `string` | JSON metadata URL |
| `metadata_hash` | `checksum256` | Metadata content hash |

### Operational Tables

#### `construction` (Multi-Index)
- **Scope**: Contract (`aom.constrct`)
- **Primary Key**: `uniq_id`

| Field | Type | Description |
|-------|------|-------------|
| `uniq_id` | `uint64_t` | Uniq under construction |
| `building_type` | `string` | Type of building being constructed |
| `completion_block_time` | `uint32_t` | When construction completes |

#### `feebuffer` (Singleton)
- **Scope**: User account
- **Description**: Buffered fees for multi-asset payments

| Field | Type | Description |
|-------|------|-------------|
| `building_type` | `string` | Type of building being paid for |
| `fee` | `map<symbol, uint64_t>` | Accumulated fees by asset |

## Actions

### Administrative Actions

#### `updbasesttng`
Updates base construction settings.

**Authorization**: Contract (`aom.constrct`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `row` | `construction_base_settings` | New base settings |

**Behavior**: 
Sets valid construction land factory IDs.

**CLI Example**:
```bash
cleos push action aom.constrct updbasesttng '{"row": {"valid_construction_land_factory_ids": [200, 201, 202]}}' -p aom.constrct@active
```

#### `updcnststtng`
Updates construction settings for a building type.

**Authorization**: Contract (`aom.constrct`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `row` | `construction_settings` | Building configuration |

**Behavior**: 
Configures construction parameters for a specific building type.

**CLI Example**:
```bash
cleos push action aom.constrct updcnststtng '{"row": {"building_type": "Mine", "required_factory_id": 123, "construction_duration_sec": 3600, "building_fee": [["4,ASH", 1000], ["4,IRON", 500]], "instant_construction_fee": [["4,ASH", 5000]]}}' -p aom.constrct@active
```

#### `updmetadata`
Updates metadata mapping for land states.

**Authorization**: Contract (`aom.constrct`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `row` | `metadata` | Metadata configuration |

**Behavior**: 
Maps land states to their corresponding JSON metadata URLs and hashes.

**CLI Example**:
```bash
cleos push action aom.constrct updmetadata '{"row": {"land_state": "ResourceLandIronMine", "metadata_url": "https://example.com/iron-mine.json", "metadata_hash": "abc123..."}}' -p aom.constrct@active
```

#### `setlocked`
Emergency lock/unlock the contract.

**Authorization**: Contract (`aom.constrct`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `locked` | `bool` | Lock status |

**CLI Example**:
```bash
cleos push action aom.constrct setlocked '{"locked": true}' -p aom.constrct@active
```

### Gameplay Actions

#### `cutribbon`
Completes construction of a building.

**Authorization**: Uniq owner

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `uniq_id` | `uint64_t` | Uniq to complete construction for |
| `uniq_owner` | `name` | Owner of the Uniq |

**Behavior**: 
- Validates construction is complete (time elapsed)
- Updates land metadata with final building type
- Sets initial building parameters (production speed, storage)
- Updates JSON metadata for visual representation
- Removes construction timer entry

**Special Handling for Mines**:
- Calls `aom.mining::minebuilt` to initialize collection timer
- Sets storage capacity based on resource type settings
- Updates metadata key format for resource-specific buildings

**CLI Example**:
```bash
cleos push action aom.constrct cutribbon '{"uniq_id": 12345, "uniq_owner": "alice"}' -p alice@active
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
cleos push action aom.constrct clearbuffer '{"user": "alice"}' -p alice@active
```

## Token Transfer Actions

The contract accepts token transfers for construction operations through the `on_transfer` notification.

### Building Construction
**Memo Format**: `Build,<building_type>[,<uniq_id>]`

**Two-Phase Process**:
1. **Fee Collection**: Send required assets without uniq_id to accumulate fees
2. **Construction Start**: Send final asset with uniq_id to begin construction

**Validation**:
- Land must be from correct factory for building type
- Land must be in appropriate state (unbuilt or prospected)
- All required fees must be paid

**Examples**:
```bash
# Phase 1: Send ASH tokens
cleos transfer alice aom.constrct "1000.0000 ASH" "Build,Mine"

# Phase 2: Send IRON tokens and start construction
cleos transfer alice aom.constrct "500.0000 IRON" "Build,Mine,12345"
```

### Instant Construction
**Memo Format**: `InstantConstruction,<building_type>[,<uniq_id>]`

**Two-Phase Process**:
1. **Fee Collection**: Send required assets without uniq_id
2. **Instant Completion**: Send final asset with uniq_id to instantly complete

**Behavior**:
- Sets completion time to current block time
- Allows immediate `cutribbon` call

**Examples**:
```bash
# Phase 1: Send instant construction fees
cleos transfer alice aom.constrct "5000.0000 ASH" "InstantConstruction,Mine"

# Phase 2: Complete instantly
cleos transfer alice aom.constrct "0.0001 ASH" "InstantConstruction,Mine,12345"
```

## Land Type Validation

The contract validates land compatibility with building types:

### Resource Land
- **Valid Buildings**: Only "Mine"
- **Factory Requirements**: 5-key schema with ResourceType metadata
- **State Requirements**: Must be prospected (have ResourceType set)

### Construction Land  
- **Valid Buildings**: Any except "Mine"
- **Factory Requirements**: 3-key schema (BuildingType, ProductionSpeed, BuildingName)
- **State Requirements**: Must be unbuilt (no key_values set)

## Integration with On-Chain Data

### Factory Schema Validation

The contract validates factory schemas match building requirements:

#### Resource Land Schema (5 keys):
1. **BuildingType** (string) - Default: "Unbuilt"
2. **ResourceType** (string) - Default: "Unprospected" 
3. **ResourceQty** (uint64)
4. **ProductionSpeed** (uint64)
5. **StorageCapacity** (uint64)

#### Construction Land Schema (3 keys):
1. **BuildingType** (string) - Default: "Unbuilt"
2. **ProductionSpeed** (uint64)
3. **BuildingName** (string)

### Metadata State Management

The contract manages complex state transitions:

1. **Construction Start**: "Unbuilt" → "Unfinished {BuildingType}"
2. **Construction Complete**: "Unfinished {BuildingType}" → "{BuildingType}"

### JSON Metadata Updates

Upon construction completion, the contract updates the Uniq's JSON metadata to reflect the new visual appearance. Metadata keys follow patterns:

- **Resource Mines**: "ResourceLand{ResourceType}{BuildingType}"
- **Construction Buildings**: "ConstructionLand{BuildingType}"

## Fee Management

### Multi-Asset Payments

The construction system supports complex fee structures requiring multiple asset types:

```cpp
// Example fee structure for building a Mine
building_fee: [
    ["4,ASH", 1000],     // 1000 ASH tokens
    ["4,IRON", 500],     // 500 IRON tokens  
    ["4,STONE", 200]     // 200 STONE tokens
]
```

### Fee Buffering Process

1. **Accumulation**: Players send assets incrementally
2. **Validation**: Contract validates each asset type and amount
3. **Execution**: When all fees collected, operation executes
4. **Retirement**: Non-ASH tokens retired, ASH sent to vault

### Asset Handling

- **ASH Tokens**: Transferred to `aom.vault` as revenue
- **Other Tokens**: Transferred to `aom.coins` for retirement

## Cross-Contract Integration

### Mining Contract Integration

For mine construction:
1. Validates resource settings from `aom.mining`
2. Sets initial storage capacity based on resource type
3. Calls `aom.mining::minebuilt` to initialize collection timer

### Permission Management

The contract uses specific permissions for cross-contract calls:
- **AOM_UNIQS** account for metadata updates
- **setvalsa** permission for on-chain data modifications
- **settknmeta** permission for JSON metadata updates

## Security Considerations

- **Ownership Validation**: Strict validation of Uniq ownership
- **State Consistency**: Prevents invalid construction on inappropriate land
- **Fee Integrity**: Robust validation prevents fee manipulation
- **Time Validation**: Ensures construction timers are properly enforced
- **Factory Validation**: Validates land factory compatibility
- **Emergency Controls**: Contract locking for emergency situations