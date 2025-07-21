---
title: 'AOM Coins Contract'
order: 105
---

# AOM Coins Contract (aom.coins)

The AOM Coins contract serves as the token management hub for the Ash of Mankind ecosystem. This lightweight contract handles token retirement operations and acts as an intermediary for resource token lifecycle management across all AOM contracts.

## Overview

The coins contract provides:
- Token retirement services for resource tokens
- Centralized token lifecycle management
- Integration point for cross-contract token operations
- Asset validation and security controls

## Contract Architecture

The AOM Coins contract follows a minimalist design focused on a single critical function: secure token retirement. This approach ensures:

- **Security**: Minimal attack surface with focused functionality
- **Reliability**: Simple logic reduces potential failure points  
- **Integration**: Clean interface for other contracts to retire tokens
- **Auditability**: Easy to verify token retirement operations

## Actions

### Token Notification Handler

#### `on_transfer`
Handles incoming token transfers for retirement operations.

**Authorization**: Automatic (notification handler)

**Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | `name` | Account sending tokens |
| `to` | `name` | This contract (aom.coins) |
| `quantity` | `asset` | Amount and type of tokens |
| `memo` | `string` | Transfer memo |

**Behavior**: 
- Validates tokens are from `eosio.token` contract
- Processes "retire" memo by calling token retirement
- Ignores outbound transfers from the contract itself

**Memo Formats**:

##### Token Retirement
**Memo**: `retire`

Retires the transferred tokens from circulation, reducing total supply.

**Validation**:
- Must be called by authorized token issuer
- Token contract validates issuer permissions
- Invalid retirement attempts will fail automatically

**Example**:
```bash
# Retire 1000 IRON tokens (called by AOM contracts)
cleos transfer aom.mining aom.coins "1000.0000 IRON" "retire"
```

## Integration with AOM Ecosystem

### Cross-Contract Token Flows

The coins contract serves as the retirement endpoint for various AOM operations:

#### From Mining Contract
- **Upgrade Fees**: Non-ASH tokens from mine upgrades
- **Instant Prospecting**: Resource tokens paid for instant completion

#### From Construction Contract  
- **Building Fees**: Non-ASH tokens from construction costs
- **Instant Construction**: Resource tokens for instant building

#### From Processing Contract
- **Upgrade Fees**: Non-ASH tokens from production speed upgrades

#### From Assembly Contract
- **Construction Fees**: Non-ASH tokens from assembly line building
- **Upgrade Fees**: Non-ASH tokens from assembly line upgrades

### Token Lifecycle Management

The AOM ecosystem implements a sophisticated token economy where:

1. **Resource Generation**: Raw materials mined from land
2. **Resource Processing**: Raw materials converted to refined goods
3. **Resource Consumption**: Refined goods used for construction/upgrades
4. **Token Retirement**: Used tokens removed from circulation

```
[Mining] → [Processing] → [Construction/Upgrades] → [Retirement]
   ↓              ↓              ↓                      ↓
 IRON          STEEL         (consumed)           (retired)
 COAL          COPPER        (consumed)           (retired)
 STONE         GLASS         (consumed)           (retired)
```

### Asset Categorization

The AOM system treats different assets differently:

#### ASH (Primary Currency)
- **Usage**: Payment for services and upgrades
- **Flow**: Transferred to `aom.vault` as revenue
- **Lifecycle**: Recirculated within ecosystem

#### Resource Tokens (Secondary Assets)
- **Usage**: Construction materials and upgrade components
- **Flow**: Transferred to `aom.coins` for retirement
- **Lifecycle**: Removed from circulation after use

## Security Model

### Authorization Validation

The contract implements multiple security layers:

#### Transfer Source Validation
```cpp
check(get_first_receiver() == "eosio.token"_n, "only tokens from eosio.token are accepted");
```

Only accepts tokens from the official Ultra token contract.

#### Self-Transfer Exclusion
```cpp
if(from == _self) return;
```

Ignores outbound transfers to prevent recursion loops.

#### Asset Validation
```cpp
check(quantity.is_valid(), "invalid asset");
check(quantity.amount > 0, "must transfer a positive amount");
```

Ensures only valid, positive amounts are processed.

#### Issuer Authorization
The retirement operation relies on the token contract's built-in authorization:

```cpp
// This will fail if this account is not the issuer of quantity
action(
    permission_level{ _self, "active"_n },
    "eosio.token"_n,
    "retire"_n,
    make_tuple(quantity, memo)
).send();
```

Only accounts authorized as token issuers can successfully retire tokens.

### Failure Modes and Recovery

#### Invalid Retirement Attempts
- **Unauthorized Retirement**: Token contract rejects non-issuer attempts
- **Invalid Assets**: Contract rejects malformed or zero amounts
- **Wrong Token Source**: Contract rejects tokens from unauthorized contracts

#### Transaction Rollback
Failed retirement attempts cause complete transaction rollback, ensuring:
- No partial operations
- Consistent state across all contracts
- Automatic fee refunds in calling contracts

## Operational Considerations

### Gas Efficiency

The contract is optimized for minimal resource usage:
- **Simple Logic**: Reduces CPU consumption
- **No State Storage**: Avoids RAM costs
- **Direct Passthrough**: Minimal processing overhead

### Error Handling

Clear error messages aid in debugging and user experience:
- `"invalid asset"` - Malformed asset format
- `"must transfer a positive amount"` - Zero or negative amounts
- `"only tokens from eosio.token are accepted"` - Wrong token contract

### Integration Testing

When integrating with the coins contract, test scenarios should include:

1. **Valid Retirement**: Proper memo format with authorized issuer
2. **Invalid Asset**: Malformed asset amounts or symbols
3. **Unauthorized Source**: Tokens from wrong contracts
4. **Non-Issuer Retirement**: Attempts by non-authorized accounts

## Contract Deployment and Management

### Deployment Requirements

The AOM Coins contract requires:
- **Token Issuer Permissions**: Must be authorized issuer for resource tokens
- **Active Permissions**: Sufficient permissions to call token retirement
- **Integration Setup**: Other AOM contracts must reference correct account name

### Monitoring and Maintenance

Key metrics to monitor:
- **Retirement Volume**: Track tokens removed from circulation
- **Failed Transactions**: Monitor authorization failures
- **Integration Health**: Verify cross-contract calls succeed

### Upgrade Considerations

Contract upgrades should maintain:
- **API Compatibility**: Other AOM contracts depend on stable interface
- **Security Model**: Authorization patterns must remain secure
- **Token Compatibility**: Must work with existing token contracts

## Usage Examples

### Direct Retirement (Testing)
```bash
# Retire tokens directly (must be issuer)
cleos transfer alice aom.coins "100.0000 IRON" "retire"
```

### Cross-Contract Integration
```cpp
// Example from another AOM contract
action(
    permission_level{ _self, "active"_n },
    ULTRA_FT,
    "transfer"_n,
    make_tuple(
        _self,
        "aom.coins"_n,
        asset(amount, symbol),
        string("retire")
    )
).send();
```

## Best Practices

### For Integrating Contracts
1. **Batch Operations**: Group multiple retirements when possible
2. **Error Handling**: Prepare for retirement failures
3. **Asset Validation**: Validate assets before sending
4. **Permission Management**: Ensure proper issuer setup

### For System Administration
1. **Permission Auditing**: Regularly verify issuer permissions
2. **Transaction Monitoring**: Track retirement patterns
3. **Integration Testing**: Test all cross-contract flows
4. **Security Reviews**: Regular security assessment of token flows

The AOM Coins contract demonstrates that critical infrastructure can be both simple and secure, providing essential token management services while maintaining minimal complexity and maximum reliability.