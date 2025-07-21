---
title: 'AOM Assembly Contract'
order: 104
---

# AOM Assembly Contract (aom.assembly)

The AOM Assembly contract manages assembly line construction and operations within the Ash of Mankind ecosystem. This contract handles the creation of specialized production facilities that can manufacture complex items using patents and assembly line factories.

## Overview

The assembly contract enables players to:
- Build assembly lines on construction land using patent Uniqs
- Manage assembly line construction timers
- Upgrade assembly line production capabilities
- Handle patent licensing and production rewards

## Tables

### Configuration Tables

#### `global` (Singleton)
- **Scope**: Contract (`aom.assembly`)
- **Description**: Global contract state

| Field | Type | Description |
|-------|------|-------------|
| `locked` | `bool` | Emergency lock status |

#### `asmblysttngs` (Singleton)
- **Scope**: Contract (`aom.assembly`)
- **Description**: Assembly line configuration

| Field | Type | Description |
|-------|------|-------------|
| `required_factory_id` | `uint64_t` | Factory ID for assembly line factory Uniqs |
| `construction_duration_sec` | `uint32_t` | Construction time in seconds |
| `building_fee` | `map<symbol, uint64_t>` | Required fees for construction |
| `instant_construction_fee` | `map<symbol, uint64_t>` | Fees for instant completion |
| `production_upgrade_fee` | `map<symbol, uint64_t>` | Fees for production upgrades |
| `production_speed_upgrade_increment` | `uint64_t` | Speed increase per upgrade (precision: 2) |
| `max_production_speed` | `uint64_t` | Maximum production speed (precision: 2) |

#### `metadata` (Multi-Index)
- **Scope**: Contract (`aom.assembly`)
- **Primary Key**: `patent_factory_id`

| Field | Type | Description |
|-------|------|-------------|
| `patent_factory_id` | `uint64_t` | Patent Uniq factory ID |
| `metadata_url` | `string` | JSON metadata URL for assembly lines |
| `metadata_hash` | `checksum256` | Metadata content hash |

### Operational Tables

#### `construction` (Multi-Index)
- **Scope**: Contract (`aom.assembly`)
- **Primary Key**: `uniq_id`

| Field | Type | Description |
|-------|------|-------------|
| `uniq_id` | `uint64_t` | Assembly line factory Uniq under construction |
| `patent_factory_id` | `uint64_t` | Patent factory ID used for construction |
| `completion_block_time` | `uint32_t` | When construction completes |

#### `feebuffer` (Singleton)
- **Scope**: User account
- **Description**: Buffered fees for multi-asset payments

| Field | Type | Description |
|-------|------|-------------|
| `action_type` | `string` | Type of action being paid for |
| `factory_uniq_id` | `uint64_t` | Factory Uniq ID (or upgrade count for production upgrades) |
| `fee` | `map<symbol, uint64_t>` | Accumulated fees by asset |

## Actions

### Administrative Actions

#### `updasmbsttng`
Updates assembly line settings.

**Authorization**: Contract (`aom.assembly`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `row` | `assembly_settings` | New assembly settings |

**Behavior**: 
Sets global assembly line parameters including construction duration and upgrade fees.

**CLI Example**:
```bash
cleos push action aom.assembly updasmbsttng '{"row": {"required_factory_id": 300, "construction_duration_sec": 7200, "building_fee": [["4,ASH", 2000], ["4,STEEL", 100]], "instant_construction_fee": [["4,ASH", 10000]], "production_upgrade_fee": [["4,ASH", 1500]], "production_speed_upgrade_increment": 50, "max_production_speed": 400}}' -p aom.assembly@active
```

#### `updmetadata`
Updates metadata mapping for patent types.

**Authorization**: Contract (`aom.assembly`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `row` | `metadata` | Metadata configuration |

**Behavior**: 
Maps patent factory IDs to their corresponding assembly line metadata.

**CLI Example**:
```bash
cleos push action aom.assembly updmetadata '{"row": {"patent_factory_id": 400, "metadata_url": "https://example.com/sword-assembly.json", "metadata_hash": "def456..."}}' -p aom.assembly@active
```

#### `setlocked`
Emergency lock/unlock the contract.

**Authorization**: Contract (`aom.assembly`)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `locked` | `bool` | Lock status |

**CLI Example**:
```bash
cleos push action aom.assembly setlocked '{"locked": true}' -p aom.assembly@active
```

### Gameplay Actions

#### `cutribbon`
Completes assembly line construction.

**Authorization**: Uniq owner

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `uniq_id` | `uint64_t` | Assembly line factory Uniq to complete |
| `uniq_owner` | `name` | Owner of the factory Uniq |

**Behavior**: 
- Validates construction is complete (time elapsed)
- Updates factory metadata with assembly line type
- Sets initial production speed to 1 (0.01x speed)
- Updates JSON metadata based on patent type
- Removes construction timer entry

**CLI Example**:
```bash
cleos push action aom.assembly cutribbon '{"uniq_id": 12345, "uniq_owner": "alice"}' -p alice@active
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
cleos push action aom.assembly clearbuffer '{"user": "alice"}' -p alice@active
```

## Token Transfer Actions

The contract accepts token transfers for assembly line operations through the `on_transfer` notification.

### Assembly Line Construction
**Memo Format**: `BuildAssemblyLine,<factory_uniq_id>[,<patent_uniq_id>]`

**Two-Phase Process**:
1. **Fee Collection**: Send required assets without patent_uniq_id to accumulate fees
2. **Construction Start**: Send final asset with patent_uniq_id to begin construction

**Validation**:
- Factory Uniq must be from correct assembly line factory
- Patent Uniq must be owned by user
- All required fees must be paid

**Examples**:
```bash
# Phase 1: Send construction fees
cleos transfer alice aom.assembly "2000.0000 ASH" "BuildAssemblyLine,12345"
cleos transfer alice aom.assembly "100.0000 STEEL" "BuildAssemblyLine,12345"

# Phase 2: Start construction with patent
cleos transfer alice aom.assembly "0.0001 ASH" "BuildAssemblyLine,12345,67890"
```

### Instant Assembly Construction
**Memo Format**: `AssemblyInstantConstruction,<factory_uniq_id>[,<patent_uniq_id>]`

**Two-Phase Process**:
1. **Fee Collection**: Send required assets without patent_uniq_id
2. **Instant Completion**: Send final asset with patent_uniq_id to instantly complete

**Behavior**:
- Sets completion time to current block time
- Allows immediate `cutribbon` call

**Examples**:
```bash
# Phase 1: Send instant construction fees
cleos transfer alice aom.assembly "10000.0000 ASH" "AssemblyInstantConstruction,12345"

# Phase 2: Complete instantly with patent
cleos transfer alice aom.assembly "0.0001 ASH" "AssemblyInstantConstruction,12345,67890"
```

### Production Speed Upgrades
**Memo Format**: `UpgradeProductionSpeed[,<factory_uniq_id>]`

**Two-Phase Process**:
1. **Fee Collection**: Send upgrade fees without factory_uniq_id (fees determine upgrade count)
2. **Upgrade Application**: Send final fee with factory_uniq_id to apply upgrades

**Examples**:
```bash
# Phase 1: Send upgrade fees (for 3 upgrades)
cleos transfer alice aom.assembly "4500.0000 ASH" "UpgradeProductionSpeed"

# Phase 2: Apply upgrades to assembly line
cleos transfer alice aom.assembly "0.0001 ASH" "UpgradeProductionSpeed,12345"
```

### Fee Transfers
The contract also handles special transfers for patent licensing and production rewards:

#### Transfer Order Permit Fee
**Memo Format**: `TransferOrderPermitFee,<patent_uniq_id>,<uniq_owner>`

Transfers fees related to patent usage permissions.

#### Transfer Production Reward
**Memo Format**: `TransferProductionReward,<factory_uniq_id>,<uniq_owner>`

Transfers production rewards to assembly line operators.

## Assembly Line Mechanics

### Construction Requirements

Assembly line construction requires:

1. **Assembly Line Factory Uniq**: Must be from the configured factory ID
2. **Patent Uniq**: Must own a patent that defines what can be produced
3. **Construction Fees**: Multi-asset payment for building materials

### Patent Integration

Patents define what assembly lines can produce:

- **Patent Factory ID**: Determines the type of items that can be manufactured
- **Metadata Mapping**: Links patent types to assembly line visual assets
- **Production Licensing**: Patent ownership grants production rights

### Production Speed System

Assembly lines start with minimal production speed and can be upgraded:

- **Initial Speed**: 1 (0.01x speed, precision: 2)
- **Upgrade Increment**: Configurable speed increase per upgrade
- **Maximum Speed**: Configurable upper limit
- **Upgrade Cost**: Multi-asset fees for speed improvements

## Integration with On-Chain Data

### Factory Metadata Management

Assembly lines update their on-chain metadata during construction:

1. **AssemblyType**: Set to the type of assembly line being built
2. **ProductionSpeed**: Initially set to minimum value (1)

### Patent Validation

The contract validates patent Uniqs to ensure proper licensing:

- **Ownership Verification**: User must own the patent being used
- **Patent Type**: Patent factory ID determines assembly line capabilities

### Metadata Updates

The contract updates both on-chain key-value data and JSON metadata:

- **On-Chain Data**: Stores operational parameters (type, speed)
- **JSON Metadata**: Visual representation based on patent type

## Cross-Contract Integration

### Permission Management

The contract uses specific permissions for operations:
- **AOM_UNIQS** account for metadata updates
- **setvalsa** permission for on-chain data modifications
- **settknmeta** permission for JSON metadata updates

### Asset Handling

Like other AOM contracts:
- **ASH Tokens**: Transferred to `aom.vault` as revenue
- **Other Tokens**: Transferred to `aom.coins` for retirement

## Fee Management

### Multi-Asset Construction Fees

Assembly line construction requires various materials:

```cpp
// Example fee structure
building_fee: [
    ["4,ASH", 2000],     // 2000 ASH tokens
    ["4,STEEL", 100],    // 100 STEEL tokens
    ["4,COPPER", 50]     // 50 COPPER tokens
]
```

### Upgrade Fee Calculation

Production speed upgrades use proportional fees:

```cpp
// Number of upgrades = total_fee_amount / individual_upgrade_fee
upgrade_count = transfer_amount / upgrade_fee_per_upgrade
```

### Fee Buffering Process

1. **Accumulation**: Players send assets incrementally
2. **Validation**: Contract validates each asset type and amount
3. **Execution**: When all fees collected, operation executes
4. **Settlement**: Fees distributed to vault or retired

## Security Considerations

- **Ownership Validation**: Strict validation of both factory and patent ownership
- **Patent Verification**: Ensures users own patents they're using for construction
- **Fee Integrity**: Robust validation prevents fee manipulation
- **Time Validation**: Ensures construction timers are properly enforced
- **State Consistency**: Prevents invalid assembly line states
- **Emergency Controls**: Contract locking for emergency situations

## Query Examples

### Get Assembly Settings
```bash
cleos get table aom.assembly aom.assembly asmblysttngs
```

### Get Patent Metadata Mappings
```bash
cleos get table aom.assembly aom.assembly metadata
```

### Get Active Construction
```bash
cleos get table aom.assembly aom.assembly construction
```

### Get User Fee Buffer
```bash
cleos get table aom.assembly alice feebuffer
```