---
title: 'Exchange a Uniq Using Smart Contract'
deploy: ['staging', 'mainnet']
---

# Exchange a Uniq Using Smart Contract

## What does "Exchange a Uniq" mean

## When do you need a smart contract

## Overview of the smart contract

To make the contract below work based on your needs you will need to do some adjustments:
- awd
- awd

Source code for Uniq swap contract is provided below

::: details uniq.swap.hpp
```cpp
#include <eosio/eosio.hpp>
#include <eosio/system.hpp>
#include <eosio/asset.hpp>
#include <eosio/singleton.hpp>

using namespace std;
using namespace eosio;

// replace these with your actual factory manager account
// simplest scenario is that the manager account and the account you place this contract in are the same
// in this case can use get_self() instead of writing the account name explicitly
constexpr eosio::name factory_manager{"1aa2aa3aa4aa"};
constexpr uint64_t factory_id = 1234;

struct burn_wrap {
    optional<name> owner;
    optional<uint64_t_vector> token_ids;
    optional<string> memo;

    EOSLIB_SERIALIZE( burn_wrap, (owner)(token_ids)(memo) )
};

struct transfer_wrap {
    optional<name> from;
    optional<name> to;
    optional<uint64_t_vector> token_ids;
    optional<string> memo;

    EOSLIB_SERIALIZE( transfer_wrap, (from)(to)(token_ids)(memo) )
};

struct issue_token_config {
    uint64_t token_factory_id;
    uint32_t amount;
    string custom_data;

    EOSLIB_SERIALIZE( issue_token_config, (token_factory_id)(amount)(custom_data) )
};

typedef vector<issue_token_config> issue_token_config_vector;

struct issue_token_metadata{
    optional<string> meta_uri;
    optional<checksum256> meta_hash;

    EOSLIB_SERIALIZE( issue_token_metadata, (meta_uri)(meta_hash) )
};

typedef vector<issue_token_metadata> issue_token_metadata_vector;

// this struct is not required but provides a reference about the interface of issue.b action
struct issue_wrap_v1 {
    name                      to;
    issue_token_config_vector token_configs;
    string                    memo;
    optional<name>            authorizer;
    optional<asset>           maximum_uos_payment;
    binary_extension<optional<issue_token_metadata_vector>> token_metadata;

    EOSLIB_SERIALIZE( issue_wrap_v1, (to)(token_configs)(memo)(authorizer)(maximum_uos_payment)(token_metadata) )
};

[[eosio::action("issue.b")]]
void issue_v1(const issue_wrap_v1& issue);

using issue_v1_action = eosio::action_wrapper<"issue.b"_n, &issue_v1>;

class [[eosio::contract("uniq.swap")]] uniq_swap_contract : public contract {
  public:
    using contract::contract;

    uniq_swap_contract(name receiver, name code, datastream<const char*> ds)
      : contract(receiver, code, ds) {
    }

    // will be called when someone transfers a token 
    [[eosio::on_notify("eosio.nft.ft::transfer")]]
    void on_transfer(const transfer_wrap& param);

    [[eosio::on_notify("eosio.nft.ft::burn")]]
    void on_burn(const burn_wrap& param);

  private:

};
```
:::

::: details uniq.swap.cpp
```cpp
#include <uniq.swap.hpp>

void issue_token(name user) {
    action(
        permission_level{factory_manager, eosio::name{"active"}},
        "eosio.nft.ft"_n,
        "issue.b"_n,
        std::make_tuple(
            user,
            issue_token_config_vector{ { .token_factory_id = factory_id, .amount = 1 } },
            string{""},
            optional<name>(),
            optional<issue_token_metadata_vector>{}
        )
    ).send();
}

void ultra_avatar_contract::on_transfer(const transfer_wrap& param) {
    if (*param.to != factory_manager) {
        // if you put check() instead of return it will make it so users won't be able
        // to transfer tokens from your factory between each other
        return;
    }
    // perform any other checks you want here
    issue_token(*param.from);
}

void ultra_avatar_contract::on_burn(const burn_wrap& param) {
    // perform any checks you want here
    issue_token(*param.owner);
}
```
:::