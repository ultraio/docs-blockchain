---
title: 'AOM Contracts'
order: 100
---

# Ash of Mankind (AOM) Smart Contracts

The Ash of Mankind (AOM) smart contracts form an integrated gaming ecosystem built on Ultra's blockchain. These contracts enable land-based gameplay where players can prospect for resources, build structures, mine materials, and create products through an interconnected system of NFT-based assets and tokenized resources.

## How to Use AOM Contracts

The AOM ecosystem consists of five interconnected smart contracts that work together to create a complete gaming experience:

- **aom.mining** - Prospect land, mine resources, upgrade production
- **aom.constrct** - Build structures on land parcels  
- **aom.assembly** - Create assembly lines for manufacturing
- **aom.processi** - Process raw materials into refined goods
- **aom.coins** - Handle token retirement and lifecycle

## Getting Started

### Prerequisites

To interact with AOM contracts you need:

1. **Land Uniqs** - NFTs representing land parcels (resource or construction land)
2. **ASH Tokens** - Primary currency for fees and operations
3. **Resource Tokens** - Materials for construction and upgrades

### Basic Workflow

#### 1. Acquire Land
Buy land through the `aom.buy` contract which handles multi-asset payments:

```bash
# Purchase resource land (requires multiple assets)
cleos transfer yourname aom.buy "100.0000 ASH" "BuyUniq"
cleos transfer yourname aom.buy "50.0000 AFE" "BuyUniq,4963"  # AFE = Iron token
```

#### 2. Prospect for Resources (Resource Land Only)
```bash
# Start prospecting (24-hour timer)
cleos push action aom.mining strtprspctng '{"uniq_owner": "yourname", "uniq_id": 12345}' -p yourname@active

# After timer expires, request random result
cleos push action aom.mining reqprspctrep '{"uniq_owner": "yourname", "uniq_id": 12345, "seed": 987654321}' -p yourname@active

# OR pay for instant prospecting
cleos transfer yourname aom.mining "1000.0000 ASH" "InstantProspect,12345"
```

#### 3. Build Structures
```bash
# Send construction fees (multi-asset payment system)
cleos transfer yourname aom.constrct "1000.0000 ASH" "Build,Mine"
cleos transfer yourname aom.constrct "500.0000 AFE" "Build,Mine,12345"  # Triggers construction

# Wait for construction timer, then complete
cleos push action aom.constrct cutribbon '{"uniq_id": 12345, "uniq_owner": "yourname"}' -p yourname@active

# OR pay for instant construction
cleos transfer yourname aom.constrct "5000.0000 ASH" "InstantConstruction,Mine,12345"
```

#### 4. Collect Resources
```bash
# Collect accumulated resources from active mines
cleos push action aom.mining collectrsrcs '{"uniq_owner": "yourname", "uniq_id": 12345}' -p yourname@active
```

#### 5. Process Materials
```bash
# Send input resources for processing (example: Iron -> Iron Plates)
cleos transfer yourname aom.processi "200.0000 AFE" "Production,8,AFEPLT,100"     # Iron input
cleos transfer yourname aom.processi "50.0000 AWATER" "Production,8,AFEPLT,100,67890"  # Final input + building ID

# Claim processed goods (progressive or full)
cleos push action aom.processi collectprod '{"user": "yourname", "uniq_owner": "buildingowner", "owner_claims": false, "uniq_id": 67890, "start_block_time": 1640995200}' -p yourname@active
```

## Land Types and Usage

### Resource Land
**Purpose**: Prospect for natural resources and build mines

**Required Factory Schema**:
- BuildingType (string) - Default: "Unbuilt"
- ResourceType (string) - Default: "Unprospected"  
- ResourceQty (uint64)
- ProductionSpeed (uint64)
- StorageCapacity (uint64)

**Workflow**:
1. Prospect → 2. Build Mine → 3. Collect Resources → 4. Upgrade Production

### Construction Land
**Purpose**: Build processing facilities and assembly lines

**Required Factory Schema**:
- BuildingType (string) - Default: "Unbuilt"
- ProductionSpeed (uint64)
- BuildingName (string)

**Workflow**:
1. Build Structure → 2. Process Resources → 3. Upgrade Facilities

## Asset Management

### Token Types

#### Primary Currency
- **ASH** - Main game currency for fees and services

#### Resource Tokens (Mined from land)
- **AUN** (Unobtainium) - Rare strategic resource
- **AFE** (Iron) - Common construction material
- **AAL** (Aluminium) - Lightweight construction material  
- **AAU** (Gold) - Precious metal for electronics
- **ALI** (Lithium) - Battery and technology component
- **ASI** (Silica) - Glass and electronics material
- **ACA** (Calcium) - Concrete and construction material
- **AWATER** (Water) - Essential for many processes

#### Processed Materials (Created by processing facilities)
- **AFEPLT** (Iron Plates) - Processed iron for construction
- **AFEBLK** (Iron Blocks) - Heavy iron construction components
- **AGLSSHT** (Glass Sheets) - Processed silica for buildings
- **ACONBLK** (Concrete Blocks) - Processed concrete materials
- **AHYDROG** (Hydrogen) - Processed energy component

### Asset Flow Patterns

#### ASH Token Flow
- **Revenue**: Sent to `aom.vault` 
- **Usage**: Fees, upgrades, instant completion
- **Circulation**: Remains in ecosystem

#### Resource Token Flow  
- **Generation**: Mined from land (8 decimal precision)
- **Usage**: Construction materials, processing inputs
- **Retirement**: Consumed via `aom.coins` contract

#### Material Token Flow
- **Creation**: Processed from raw resources in facilities
- **Usage**: Advanced construction and assembly
- **Retirement**: Consumed in higher-tier production

### Fee Buffering System
Many operations require multiple asset types. The system buffers payments:

1. **Send Assets Incrementally**: Transfer each required asset type
2. **Trigger Operation**: Send final asset with operation parameters
3. **Automatic Execution**: System validates and executes when complete

### Factory IDs
- **Resource Land Factory**: 4963
- **Construction Land Factory**: 4962

## Practical Examples

### Complete Mining Setup
Full workflow from land acquisition to resource collection:

```bash
# 1. Buy resource land
cleos transfer yourname aom.buy "100.0000 ASH" "BuyUniq"
cleos transfer yourname aom.buy "50.0000 AFE" "BuyUniq,4963"

# 2. Start prospecting (wait 24 hours or pay for instant)
cleos push action aom.mining strtprspctng '{"uniq_owner": "yourname", "uniq_id": 12345}' -p yourname@active
# OR instant: cleos transfer yourname aom.mining "1000.0000 ASH" "InstantProspect,12345"

# 3. Get prospection results (after timer expires)
cleos push action aom.mining reqprspctrep '{"uniq_owner": "yourname", "uniq_id": 12345, "seed": 987654321}' -p yourname@active

# 4. Build mine (multi-asset payment)
cleos transfer yourname aom.constrct "1000.0000 ASH" "Build,Mine"
cleos transfer yourname aom.constrct "500.0000 AFE" "Build,Mine,12345"

# 5. Complete construction (after timer)
cleos push action aom.constrct cutribbon '{"uniq_id": 12345, "uniq_owner": "yourname"}' -p yourname@active

# 6. Collect resources regularly
cleos push action aom.mining collectrsrcs '{"uniq_owner": "yourname", "uniq_id": 12345}' -p yourname@active
```

### Processing Facility Workflow
Set up resource processing from raw materials to finished goods:

```bash
# 1. Buy construction land
cleos transfer yourname aom.buy "200.0000 ASH" "BuyUniq"
cleos transfer yourname aom.buy "100.0000 ACONBLK" "BuyUniq,4962"

# 2. Build processing facility (e.g., Metal Foundry)
cleos transfer yourname aom.constrct "2000.0000 ASH" "Build,Metal Foundry"
cleos transfer yourname aom.constrct "800.0000 AFE" "Build,Metal Foundry,67890"

# 3. Complete construction
cleos push action aom.constrct cutribbon '{"uniq_id": 67890, "uniq_owner": "yourname"}' -p yourname@active

# 4. Process resources (Iron + Water -> Iron Plates)
cleos transfer yourname aom.processi "200.0000 AFE" "Production,8,AFEPLT,100"
cleos transfer yourname aom.processi "50.0000 AWATER" "Production,8,AFEPLT,100,67890"

# 5. Claim processed materials (can be done progressively)
cleos push action aom.processi collectprod '{"user": "yourname", "uniq_owner": "yourname", "owner_claims": false, "uniq_id": 67890, "start_block_time": 1640995200}' -p yourname@active
```

### Upgrade Operations
Enhance your infrastructure for better efficiency:

```bash
# Upgrade mine production speed (multiple levels)
cleos transfer yourname aom.mining "1000.0000 ASH" "UpgradeProductionSpeed"
cleos transfer yourname aom.mining "200.0000 AFEPLT" "UpgradeProductionSpeed,12345"

# Upgrade mine storage capacity
cleos transfer yourname aom.mining "800.0000 ASH" "UpgradeStorageCapacity"
cleos transfer yourname aom.mining "100.0000 ACONBLK" "UpgradeStorageCapacity,12345"

# Upgrade processing facility speed
cleos transfer yourname aom.processi "1500.0000 ASH" "UpgradeProductionSpeed"
cleos transfer yourname aom.processi "300.0000 AGLSSHT" "UpgradeProductionSpeed,67890"
```

### Emergency Operations
Handle issues and cancel operations:

```bash
# Clear fee buffers and get refunds
cleos push action aom.mining clearbuffer '{"user": "yourname"}' -p yourname@active
cleos push action aom.constrct clearbuffer '{"user": "yourname"}' -p yourname@active
cleos push action aom.processi clearbuffer '{"user": "yourname"}' -p yourname@active

# Owner reclaim from processing (after 2 weeks)
cleos push action aom.processi collectprod '{"user": "processor", "uniq_owner": "yourname", "owner_claims": true, "uniq_id": 67890, "start_block_time": 1640995200}' -p yourname@active
```

## Integration Patterns

### Multi-Asset Payments
Many operations require multiple resource types. Use this pattern:

1. **Send Required Assets**: Transfer each asset type separately
2. **Trigger Execution**: Send final asset with operation parameters  
3. **Automatic Processing**: Contract executes when all requirements met

### Time-Based Operations
Several contracts use time-based mechanics:

- **Prospecting**: 24-hour default duration
- **Construction**: Variable based on building type
- **Resource Generation**: Continuous based on production speed
- **Processing**: Based on recipe complexity

### Cross-Contract Dependencies
Operations often involve multiple contracts:

1. **Mine Construction**: `aom.constrct` → `aom.mining` (initialization)
2. **Resource Processing**: User → Building Owner → `aom.processi`
3. **Token Retirement**: All contracts → `aom.coins`

## Troubleshooting

### Common Issues

#### "Contract Locked" Error
All contracts can be emergency-locked by administrators. Wait for unlock or contact support.

#### "Asset Amount Incorrect" Error
Ensure you're sending the exact fee amounts configured in contract settings.

#### "Uniq Not Found" Error
Verify you own the Uniq and it exists in your account.

#### "Missing Fee" Error in Multi-Asset Operations
Complete all required asset transfers before triggering operation execution.

### Query Contract State

Check current settings and configurations:

```bash
# View mining settings
cleos get table aom.mining aom.mining basesettings
cleos get table aom.mining aom.mining resourcestng

# View construction settings  
cleos get table aom.constrct aom.constrct cnstrcsttngs

# View processing settings
cleos get table aom.processi aom.processi prcsngsttngs

# Check your fee buffers
cleos get table aom.mining yourname feebuffer
```

### Monitor Operations

Track ongoing operations:

```bash
# Check prospecting timers
cleos get table aom.mining aom.mining prospecttime

# Check construction progress
cleos get table aom.constrct aom.constrct construction

# View active processing
cleos get table aom.processi yourname processiuser
```

## DApp Integration Patterns

### UI State Management

The official AOM DApp demonstrates key integration patterns:

#### Multi-Asset Payment Flow
```javascript
// 1. Collect fees incrementally
fees.map((fee, i) => ({
    contract: "eosio.token",
    action: "transfer", 
    data: {
        from: user,
        to: targetContract,
        quantity: fee.quantity.toString(),
        memo: actionType + (i === fees.length-1 ? `,${uniqId}` : "")
    }
}))
```

#### Timer Management
```javascript
// Track completion progress
let progress = Math.min(100, 
    (Math.max(0, duration - (completionTime - currentTime)) / duration * 100)
);

// Display remaining time
timeLeft(completionTime - currentTime)
```

#### Contract State Queries
```javascript
// Fetch settings tables on startup
await fetchAOMProcessingSettings()
await fetchAOMMiningBaseSettings() 
await fetchAOMMiningResourceSettings()
await fetchAOMConstructionSettings()

// Query user-specific data
await fetchAccountLandUniqs(account)
await fetchAccountBalances(account)
```

### Real-World Contract Usage

#### Land State Transitions
The DApp tracks land through these metadata states:
- `"Unprospected"` → `"Unfinished Prospection"` → `"[ResourceType]"`
- `"Unbuilt"` → `"Unfinished [BuildingType]"` → `"[BuildingType]"`

#### Progressive Operations
```javascript
// Start operation
setSR({ actionButton: "START PROSPECTING", ... })

// Show progress during operation  
setSR({ body: () => `${progress}% complete` })

// Complete operation
setSR({ actionButton: "REQUEST REPORT", ... })
```

#### Asset Precision Handling
All resource tokens use 8 decimal precision:
```javascript
const RESOURCES = new Map([
    ['a_Iron', {symbolCode: 'AFE', precision: 8}],
    ['a_Water', {symbolCode: 'AWATER', precision: 8}]
]);
```

### Development Integration

#### For DApp Developers

When integrating AOM contracts:

1. **Fee Buffer Management**: Track partial payments and completion states
2. **Timer Visualization**: Show progress bars and countdowns for operations
3. **State Validation**: Check land metadata before allowing operations
4. **Error Recovery**: Provide clear fee buffer clearing options
5. **Real-time Updates**: Refresh state after successful transactions

#### Critical Implementation Details

```javascript
// Always include random seed for prospecting
seed: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)

// Handle Ultra Wallet responses
if(res.status === "success") {
    // Update UI state
    // Refresh balances
    // Show success notification
}

// Use timeouts for blockchain finality
setTimeout(() => {
    fetchAccountBalances(account)
    fetchAccountLandUniq(account, uniqId)
}, 3000); // Allow time for RNG response
```

### Production Configuration

#### Resource Processing Recipes
Common processing combinations observed in the DApp:

- **Iron + Water → Iron Plates** (`AFE` + `AWATER` → `AFEPLT`)
- **Silica + Calcium → Glass Sheets** (`ASI` + `ACA` → `AGLSSHT`)
- **Iron + Calcium → Concrete Blocks** (`AFE` + `ACA` → `ACONBLK`)

#### Building Types and Requirements
- **Metal Foundry**: Processes iron and aluminum materials
- **Glass Foundry**: Creates glass products from silica
- **Hydrogen Plant**: Produces hydrogen from water
- **Concrete Plant**: Makes concrete from calcium and other materials

### System Administration

#### Contract Configuration
All settings are stored in contract tables and can be updated:

```bash
# Update mining drop rates
cleos push action aom.mining updrsrcsttng '{"row": {...}}' -p aom.mining@active

# Update construction costs
cleos push action aom.constrct updcnststtng '{"row": {...}}' -p aom.constrct@active

# Update processing recipes
cleos push action aom.processi updprocsttng '{"row": {...}}' -p aom.processi@active
```

#### Economic Balance Monitoring
- Track `to_be_prospected` values to manage resource scarcity
- Monitor production rates vs consumption rates
- Adjust upgrade costs based on player progression
- Balance timer durations with instant completion fees

The Ash of Mankind contracts demonstrate how blockchain gaming can create complex, interconnected systems while maintaining user-friendly interfaces and robust security. The modular design allows for independent updates while the fee buffering system enables sophisticated multi-asset operations that feel natural to players.