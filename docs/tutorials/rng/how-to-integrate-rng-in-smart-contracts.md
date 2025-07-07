---
title: 'How to Integrate RNG in Smart Contracts'
order: 1

---

# How to Integrate RNG in Smart Contracts

This guide shows you how to add secure, verifiable random number generation to your Ultra smart contract using the `ultra.rng` service.

## Quick Start

Want to add randomness to your contract? Here's what you need to do:

1. **Add the `receiverand` action** to your contract
2. **Call `requestrand`** when you need a random number
3. **Handle the callback** in your `receiverand` action

That's it! The Ultra oracle service handles the rest.

## How It Works

The Ultra RNG system is designed to be simple for developers:

```
Your Contract → ultra.rng → Oracle Service → Your Contract
     ↓              ↓              ↓              ↓
  requestrand   queues job    generates &    receiverand
                & assigns     signs random   callback with
                job ID        number         random value
```

**Key Points:**
- Your contract requests a random number via `requestrand`
- The Ultra oracle service monitors and processes requests automatically
- Your contract receives the random number via the `receiverand` callback
- The system uses BLS12-381 cryptography to ensure the randomness cannot be manipulated

## Step 1: Add the Required Action to Your Contract

Your contract must implement a `receiverand` action that the RNG service will call:

```cpp
#include <eosio/eosio.hpp>

class [[eosio::contract("mycontract")]] mycontract : public eosio::contract {
public:
    mycontract(eosio::name receiver, eosio::name code, eosio::datastream<const char*> ds)
        : contract(receiver, code, ds) {}

    // This action will be called by the RNG service
    [[eosio::action]]
    void receiverand(uint64_t assoc_id, uint64_t random_value) {
        // Only the RNG contract can call this
        require_auth("ultra.rng"_n);
        
        // Handle your random number here
        handle_random_result(assoc_id, random_value);
    }

private:
    void handle_random_result(uint64_t assoc_id, uint64_t random_value) {
        // Your logic here - example: roll a dice
        uint64_t dice_roll = (random_value % 6) + 1;
        
        // Store result, update state, etc.
        // ...
    }
};
```

## Step 2: Request a Random Number

When you need randomness in your contract, call the RNG service:

```cpp
[[eosio::action]]
void start_game(eosio::name player) {
    require_auth(player);
    
    // Generate a unique request ID
    uint64_t request_id = get_next_request_id();
    
    // Generate a unique seed (important for security)
    uint64_t seed = current_time_point().sec_since_epoch() + player.value + request_id;
    
    // Store the pending request
    pending_requests.emplace(get_self(), [&](auto& req) {
        req.id = request_id;
        req.player = player;
        req.timestamp = current_time_point();
    });
    
    // Request the random number
    eosio::action(
        eosio::permission_level{get_self(), "active"_n},
        "ultra.rng"_n,
        "requestrand"_n,
        std::make_tuple(request_id, seed, get_self())
    ).send();
}
```

## Step 3: Handle the Random Number

The RNG service will call your `receiverand` action with the random number:

```cpp
[[eosio::action]]
void receiverand(uint64_t assoc_id, uint64_t random_value) {
    require_auth("ultra.rng"_n);
    
    // Find your pending request
    auto req_it = pending_requests.find(assoc_id);
    check(req_it != pending_requests.end(), "Request not found");
    
    // Use the random number for your logic
    uint64_t game_result = random_value % 100; // 0-99
    
    // Update your contract state
    game_results.emplace(get_self(), [&](auto& result) {
        result.id = game_results.available_primary_key();
        result.player = req_it->player;
        result.value = game_result;
        result.timestamp = current_time_point();
    });
    
    // Clean up the pending request
    pending_requests.erase(req_it);
}
```

## Complete Integration Example

Here's a complete example showing how to integrate RNG into a simple game contract:

```cpp
#include <eosio/eosio.hpp>
#include <eosio/time.hpp>

class [[eosio::contract("rnggame")]] rnggame : public eosio::contract {
public:
    rnggame(eosio::name receiver, eosio::name code, eosio::datastream<const char*> ds)
        : contract(receiver, code, ds) {}

    // User action to start a random game
    [[eosio::action]]
    void play_game(eosio::name player) {
        require_auth(player);
        
        // Check if player can play
        check(get_player_balance(player) >= 100, "Insufficient balance");
        
        // Deduct fee
        update_balance(player, -100);
        
        // Generate unique request ID
        uint64_t request_id = get_next_request_id();
        uint64_t seed = current_time_point().sec_since_epoch() + player.value + request_id;
        
        // Store pending game
        pending_games.emplace(get_self(), [&](auto& game) {
            game.request_id = request_id;
            game.player = player;
            game.timestamp = current_time_point();
        });
        
        // Request random number
        eosio::action(
            eosio::permission_level{get_self(), "active"_n},
            "ultra.rng"_n,
            "requestrand"_n,
            std::make_tuple(request_id, seed, get_self())
        ).send();
    }

    // RNG callback - called by ultra.rng contract
    [[eosio::action]]
    void receiverand(uint64_t assoc_id, uint64_t random_value) {
        require_auth("ultra.rng"_n);
        
        auto game_it = pending_games.find(assoc_id);
        check(game_it != pending_games.end(), "Game request not found");
        
        // Determine game outcome (example: win if random_value > 50)
        bool is_winner = random_value > 50;
        uint64_t payout = is_winner ? 200 : 0; // Win: 2x, Lose: 0
        
        // Update player balance
        update_balance(game_it->player, payout);
        
        // Record game result
        game_history.emplace(get_self(), [&](auto& result) {
            result.id = game_history.available_primary_key();
            result.player = game_it->player;
            result.random_value = random_value;
            result.is_winner = is_winner;
            result.payout = payout;
            result.timestamp = current_time_point();
        });
        
        // Clean up
        pending_games.erase(game_it);
    }

private:
    // Data structures
    struct [[eosio::table]] pending_game {
        uint64_t request_id;
        eosio::name player;
        eosio::time_point timestamp;
        
        uint64_t primary_key() const { return request_id; }
    };
    
    struct [[eosio::table]] game_result {
        uint64_t id;
        eosio::name player;
        uint64_t random_value;
        bool is_winner;
        uint64_t payout;
        eosio::time_point timestamp;
        
        uint64_t primary_key() const { return id; }
    };
    
    struct [[eosio::table]] player_balance {
        eosio::name player;
        uint64_t balance;
        
        uint64_t primary_key() const { return player.value; }
    };
    
    // Table instances
    typedef eosio::multi_index<"pendinggames"_n, pending_game> pending_games_t;
    typedef eosio::multi_index<"gamehistory"_n, game_result> game_history_t;
    typedef eosio::multi_index<"playerbalance"_n, player_balance> player_balance_t;
    
    pending_games_t pending_games{get_self(), get_self().value};
    game_history_t game_history{get_self(), get_self().value};
    player_balance_t player_balances{get_self(), get_self().value};
    
    // Helper functions
    uint64_t get_next_request_id() {
        return current_time_point().sec_since_epoch();
    }
    
    uint64_t get_player_balance(eosio::name player) {
        auto balance_it = player_balances.find(player.value);
        return balance_it != player_balances.end() ? balance_it->balance : 0;
    }
    
    void update_balance(eosio::name player, int64_t delta) {
        auto balance_it = player_balances.find(player.value);
        if (balance_it == player_balances.end()) {
            player_balances.emplace(get_self(), [&](auto& balance) {
                balance.player = player;
                balance.balance = delta > 0 ? delta : 0;
            });
        } else {
            player_balances.modify(balance_it, get_self(), [&](auto& balance) {
                balance.balance = std::max(0ULL, (uint64_t)((int64_t)balance.balance + delta));
            });
        }
    }
};
```

## Testing Your Integration

### 1. Deploy Your Contract

```bash
# Compile and deploy
eosio-cpp -o rnggame.wasm rnggame.cpp
cleos set contract rnggame /path/to/contract -p rnggame@active
```

### 2. Test the Integration

```bash
# Start a game
cleos push action rnggame play_game '["player1"]' -p player1@active

# Check pending games
cleos get table rnggame rnggame pendinggames

# Wait for oracle processing, then check results
cleos get table rnggame rnggame gamehistory
```

### 3. Monitor the Process

```bash
# Check if your request was queued
cleos get table ultra.rng ultra.rng jobs

# Monitor for the callback
cleos get actions rnggame
```

## Important Implementation Details

### Unique Seeds
Always use unique seeds to prevent replay attacks:
```cpp
uint64_t seed = current_time_point().sec_since_epoch() + player.value + request_id;
```

### Request Tracking
Store pending requests to handle the callback:
```cpp
pending_requests.emplace(get_self(), [&](auto& req) {
    req.id = request_id;
    req.player = player;
    req.timestamp = current_time_point();
});
```

### Security
Only allow the RNG contract to call your callback:
```cpp
require_auth("ultra.rng"_n);
```

### Error Handling
Always check if the request exists:
```cpp
auto req_it = pending_requests.find(assoc_id);
check(req_it != pending_requests.end(), "Request not found");
```

## Common Patterns

### Random Selection
```cpp
uint64_t selection = random_value % total_options;
```

### Weighted Random
```cpp
uint64_t weighted_result = random_value % 100;
if (weighted_result < 30) {
    // 30% chance
} else if (weighted_result < 60) {
    // 30% chance
} else {
    // 40% chance
}
```

### Range Generation
```cpp
uint64_t min = 1;
uint64_t max = 100;
uint64_t result = min + (random_value % (max - min + 1));
```

## Best Practices

1. **Always use unique seeds** - Combine timestamp, user ID, and request ID
2. **Store pending requests** - Track requests to handle callbacks properly
3. **Validate callbacks** - Check that the RNG contract is calling your action
4. **Handle errors gracefully** - Implement proper error handling for missing requests
5. **Test thoroughly** - Test your integration before deploying to mainnet
6. **Monitor performance** - The oracle service may take time to process requests

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `Request not found` | Ensure you're storing pending requests properly |
| `Authentication errors` | Check that your contract has the correct permissions |
| `Seed already used` | Use unique seeds for each request |
| `No response received` | Check that your request was queued in the RNG jobs table |
| `Banned account` | Contact Ultra support if your contract is banned |

## Use Cases

- **Gaming**: Dice rolls, card games, loot boxes
- **NFTs**: Random trait generation, rarity distribution
- **Lotteries**: Fair random selection
- **Airdrops**: Random recipient selection
- **Gambling**: Provably fair games

## Next Steps

- [RNG Contract Reference](/blockchain/contracts/rng-contract/) - Detailed contract documentation
- [requestrand - Request random numbers](/blockchain/contracts/rng-contract/rng-actions/requestrand) - Main action for requesting RNG
- [RNG Contract Tables](/blockchain/contracts/rng-contract/rng-tables) - Table structures

The Ultra RNG service provides enterprise-grade random number generation for your smart contracts. The integration is simple, secure, and ready for production use. 