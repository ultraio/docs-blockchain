---
title: 'Uniq On-chain Data'

order: 1
---

# Uniq On-chain Data

## Overview of Uniq On-chain Data feature

Uniq On-chain Data is a flexible schema system that allows factory managers to define custom data structures for their Uniqs. It consists of two main components:

1. **Factory Key Definitions**: Define the schema/structure with default values for all Uniqs from a factory
2. **Uniq Key Values**: Store custom values that override factory defaults for individual Uniqs

The factory manager pays a non-refundable RAM fee when adding new key definitions. When a Uniq is minted, a RAM fee is transferred from the manager to their key RAM vault and refunded when the Uniq is burnt.

## How the System Works

### Factory Key Definitions

Factory key definitions are stored in `token_factory_v1.keys` and define the schema for all Uniqs from that factory:

```cpp
struct factory_keys {
    vector<key_def_table> key_defs;          // Array of key definitions
    int64_t total_key_def_ram_payment_size;  // RAM costs
    int64_t total_key_value_ram_payment_size;
};

struct key_def_table {
    string name;                          // Key name (e.g. "Level", "Rarity")
    uint8_t type_index;                   // Index into supported types
    uint8_t edit_rights;                  // Who can edit this key
    vector<name> editors;                 // Authorized editors
    optional<key_value_store> default_value;  // Default value for all Uniqs
};
```

**Key Properties**:
- **Immutable Order**: Existing key definitions cannot be modified or reordered
- **Append-Only**: Only new keys can be added to the end
- **Default Values**: Each key can specify a default value that all Uniqs inherit

### Uniq Key Values

Individual Uniqs store custom values in `token_v1.key_values` to override factory defaults:

```cpp
struct key_value_pair {
    uint8_t key_index;           // References factory key_defs array index
    key_value_store key_value;   // The custom value
};
typedef vector<key_value_pair> key_value_vec;
typedef map<uint8_t, key_value_store> key_value_map;
```

**Key Properties**:
- **Selective Storage**: Uniqs only store values when overriding defaults
- **Index-Based References**: Uses `key_index` to point to factory key definitions
- **Unordered**: Custom values can be stored in any order
- **Optional**: Uniqs may have no custom values (all defaults)

### Integration Performance Note

For external integrators, the `key_value_map` structure can be used to read existing `key_value_vector` data:

- **Storage Format**: On-chain data is stored as `key_value_vector` (for compatibility)
- **Reading Format**: External contracts can deserialize as `key_value_map` for O(log n) lookups
- **Performance Trade-off**: Map requires sorting overhead during deserialization but provides faster lookups
- **Use Case**: Map approach may benefit contracts with many keys (>20) or very frequent lookups
- **Backward Compatibility**: Existing contracts using vector format continue to work unchanged

## Proper Integration Pattern

### ❌ WRONG - Hardcoded Array Indices

```cpp
// DON'T DO THIS - Very fragile and will break!
string level = get<string>(uniq.key_values->value()[0].key_value);     // Assumes position 0
uint64_t rarity = get<uint64_t>(uniq.key_values->value()[1].key_value); // Assumes position 1
```

**Why This is Wrong**:
- Assumes specific order in Uniq's key_values (but values can be in any order!)
- Ignores default value system
- Breaks when Uniqs store values in different orders
- Doesn't follow the intended design pattern

### ✅ CORRECT - Name-Based Lookup with Defaults

```cpp
// Proper pattern: Name → Factory Key Index → Uniq Value or Default
template<typename T>
T get_uniq_key_value(const token_v1& uniq, const factory_keys& factory_keys, const string& key_name) {
    // 1. Find key definition index by name
    uint8_t key_index = find_key_def_index(factory_keys.key_defs, key_name);
    const auto& key_def = factory_keys.key_defs[key_index];
    
    // 2. Search Uniq's key_values for custom value
    if (uniq.key_values && uniq.key_values->has_value()) {
        for (const auto& kv : uniq.key_values->value()) {
            if (kv.key_index == key_index) {
                return get<T>(kv.key_value);  // Found custom value
            }
        }
    }
    
    // 3. Fallback to factory default
    return get<T>(key_def.default_value.value());
}

// Usage
string level = get_uniq_key_value<string>(uniq, factory_keys, "Level");
uint64_t rarity = get_uniq_key_value<uint64_t>(uniq, factory_keys, "Rarity");
```

### Alternative: Map-Based Integration for Specific Use Cases

For external integrators with many keys or very frequent lookups, you can deserialize the same data as a map:

```cpp
// Using map structure for better performance
template<typename T>
T get_uniq_key_value_fast(const token_v1& uniq, const factory_keys& factory_keys, const string& key_name) {
    // 1. Find key definition index by name
    uint8_t key_index = find_key_def_index(factory_keys.key_defs, key_name);
    const auto& key_def = factory_keys.key_defs[key_index];
    
    // 2. Deserialize key_values as map for O(log n) lookup
    if (uniq.key_values && uniq.key_values->has_value()) {
        // Note: Same binary data, different deserialization
        key_value_map key_map = deserialize_as_map(uniq.key_values->value());
        
        auto it = key_map.find(key_index);
        if (it != key_map.end()) {
            return get<T>(it->second);  // Found custom value
        }
    }
    
    // 3. Fallback to factory default
    return get<T>(key_def.default_value.value());
}

// Usage - same API, better performance
string level = get_uniq_key_value_fast<string>(uniq, factory_keys, "Level");
uint64_t rarity = get_uniq_key_value_fast<uint64_t>(uniq, factory_keys, "Rarity");
```

**Performance Analysis**:
- **Vector approach**: O(n) linear search, but no deserialization overhead
- **Map approach**: O(log n) lookup, but requires sorting during deserialization  
- **For typical use**: Vector likely faster for ~10 keys or less due to sorting overhead
- **For large datasets**: Map becomes beneficial with many keys (>20) or frequent lookups
- **Binary compatibility**: Both read the same on-chain data

### Data Flow Example

```
Factory Definition:
key_defs[0] = {name: "Level", default_value: "1"}
key_defs[1] = {name: "Rarity", default_value: "Common"}
key_defs[2] = {name: "Experience", default_value: 0}

Fresh Uniq (no custom values):
key_values = null
→ Level="1" (default), Rarity="Common" (default), Experience=0 (default)

Leveled Uniq (some custom values):
key_values = [
    {key_index: 0, key_value: "5"},      // Level overridden
    {key_index: 2, key_value: 1500}      // Experience overridden
]
→ Level="5" (custom), Rarity="Common" (default), Experience=1500 (custom)

Different Uniq (same data, different order):
key_values = [
    {key_index: 2, key_value: 1500},     // Experience overridden
    {key_index: 0, key_value: "5"}       // Level overridden
]
→ Functionally identical to previous Uniq
```

## Integration Best Practices

### 1. Always Use Name-Based Lookup
```cpp
// ✅ Good - Resilient to changes
auto value = get_uniq_key_value<string>(uniq, factory_keys, "AttributeName");

// ✅ Alternative - For high-scale scenarios with many keys or frequent lookups
auto value = get_uniq_key_value_fast<string>(uniq, factory_keys, "AttributeName");

// ❌ Bad - Fragile and will break
auto value = get<string>(uniq.key_values->value()[0].key_value);
```

### 2. Choose Integration Approach Based on Use Case
```cpp
// ✅ Vector approach - Recommended for typical use cases
// Use when: ~10 keys or less, occasional lookups, simple integration
auto value = get_uniq_key_value<string>(uniq, factory_keys, "AttributeName");

// ✅ Map approach - For specific high-scale scenarios
// Use when: Many keys (>20), very frequent lookups, large datasets
auto value = get_uniq_key_value_fast<string>(uniq, factory_keys, "AttributeName");
```

### 3. Handle Default Values Properly
```cpp
// ✅ Your lookup function should automatically:
// 1. Check if Uniq has custom value
// 2. If not found, use factory default
// 3. Error if neither exists
```

### 4. Validate Factory Schema Once
```cpp
// ✅ At function start, validate factory has expected keys
void validate_factory_keys(const factory_keys& keys, const vector<string>& expected) {
    for (const auto& expected_key : expected) {
        bool found = false;
        for (const auto& key_def : keys.key_defs) {
            if (key_def.name == expected_key) {
                found = true;
                break;
            }
        }
        check(found, "Factory missing expected key: " + expected_key);
    }
}
```

### 5. Understand Business Logic vs Data Access
```cpp
// Business logic validation (workflow states)
check(!uniq.key_values->has_value(), "uniq should be fresh");     // Before processing
check(uniq.key_values->has_value(), "uniq should be processed");  // After processing

// Data access (use proper lookup)
string status = get_uniq_key_value<string>(uniq, factory_keys, "Status");
```

## Common Integration Mistakes

### ❌ Mistake 1: Assuming All Values Are Present
```cpp
// Wrong - assumes Uniq has all values stored
for (int i = 0; i < factory_keys.key_defs.size(); i++) {
    auto value = uniq.key_values->value()[i].key_value;  // Will crash!
}
```

### ❌ Mistake 2: Ignoring Order Independence
```cpp
// Wrong - assumes specific order
string first_attr = get<string>(uniq.key_values->value()[0].key_value);   // Could be anything!
string second_attr = get<string>(uniq.key_values->value()[1].key_value);  // Could be anything!
```

### ❌ Mistake 3: Not Handling Fresh Uniqs
```cpp
// Wrong - crashes on fresh Uniqs with no custom values
check(uniq.key_values->has_value(), "missing key values");  // Shouldn't be required for reading!
```

## Actions Reference

-   [addkeys.a - Add new key pair for factory](../../../blockchain/contracts/nft-contract/nft-actions/addkeys.a.md)

-   [setvals.a - Set key value for Uniq](../../../blockchain/contracts/nft-contract/nft-actions/setvals.a.md)

-   [setktypes - Set supported key types for key pair](../../../blockchain/contracts/nft-contract/nft-actions/stauctcfg.a.md)

## Benefits of Uniq On-chain data

- **Dynamic Metadata**: Allow Uniq's metadata to be updated on chain without off-chain complexity

- **Marketplace Integration**: Enable Uniq marketplaces to provide filters for Uniqs with changing data

- **Game Mechanics**: Support evolving game assets with stats, levels, and attributes

- **Flexible Schema**: Define custom data structures that fit your specific use case

- **Storage Efficiency**: Uniqs only store values that differ from factory defaults

## Summary

Uniq On-chain Data is a powerful flexible schema system, not a fixed data structure. Proper integration requires:

1. **Name-based key lookup** instead of position-based access
2. **Appropriate performance approach** - vector for typical use cases, map for high-scale scenarios
3. **Default value fallback** for efficient storage
4. **Order independence** awareness for robust code
5. **Business logic separation** from data access patterns

**Integration Options**:
- **Vector approach**: Simple, direct deserialization - recommended for typical use cases (~10 keys or less)
- **Map approach**: Same data with sorted structure - beneficial for large datasets (>20 keys) or very frequent lookups
- **Binary compatibility**: Both approaches read identical on-chain data

Following these patterns ensures your integration is robust, maintainable, and won't break as the system evolves.
