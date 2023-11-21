---
title: 'Exchange a Uniq Using Smart Contract'

order: 3
---

# Exchange a Uniq Using Smart Contract

## What does "Exchange a Uniq" mean

In this guide, we will cover the possibility of issuing a new Uniq to the user when he burns or transfers some other Uniq. The purpose of such an exchange may be to migrate a user Uniq to a newer factory which may have different set of rules (e.g. Uniqs from new factory can be transferred).

An alternative use case could be if you want to allow users to redeem a Uniq using some "ticket" Uniq which does not have anything useful by itself but can be exchanged for an actual Uniq from a different factory.

Some of the factory's values are immutable after they are created, and when a Uniq is exchanged it provides the opportunity for customers to migrate to a new factory with different values.

## When do you need a smart contract

You won't need a dedicated smart contract for each case where you need to exchange Uniqs. In some cases the first-hand purchase options may be sufficient enough: [factory purchase options](./factory-purchase-options.md#purchase-option-use-cases).

You should consider using the smart contract approach in the following scenarios:
- I want to exchange Uniq only if some specific conditions are met which are not covered by first-hand purchase feature
    - examples include: requiring preregistration using a dedicated smart contract action; having alternative pricing model where you will check that the payment was done using smart contract; 
- I have some automation requirements which requires minimum user input
    - since smart contracts are flexible, you are able to do more things than besides simply minting a Uniq
- There is an extra interaction with other smart contract that needs to happen
    - NFT contract by default notifies only certain accounts about the action execution and if you need to extend this list you will have to rely on your own smart contract to notify other contracts

## Overview of the smart contract

Smart contract provided on this page does and showcases the following:
- Smart contract is notified when token is burnt or transferred
    - Burn notification happens only if contract is deployed to the same account as token factory manager
    - Transfer notification happens for both sender, receiver of the token and the token factory manager
- Smart contract issues a new Uniq from the pre-configured factory to the original owner of the Uniq

To make the contract below work based on your needs, you will need to do some adjustments:
- Change name of the factory manager account to the one appropriate to the factory you are trying to mint from
- Change factory id of the factory you are going to mint from
- Add any necessary preliminary checks before issuing a token
    - You may potentially want to check what token was burnt or transferred (id of the token, serial number of factory id)
    - There could be other requirements that you want to impose, like requiring user to register via some other smart contract action
- Depending on the permission structure and where you put the contract, you may want to add `smart_contract_name@eosio.code` permission under the `factory_manager@active` so that the contract will be able to issue tokens in the name of the factory manager

::: info
Note that in the later versions of NFT standard the specific names of the actions and their interface may change so be sure to reference the pages under *[NFT contract actions](../../../blockchain/contracts/nft-contract/nft-actions/activers.md)*
:::

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
    // note that contract is notified if the token is transferred either from or to
    // the account that has this contract or if the token that is being transferred
    // is from the factory managed by the account which has this contract
    [[eosio::on_notify("eosio.nft.ft::transfer")]]
    void on_transfer(const transfer_wrap& param);

    // will be called when someone burns a token
    // note that contract is notified only if the token being burnt is from a factory
    // managed by the account which has this contract
    // as such there is little reason to have this notification if the contract will
    // be deployed to the account which is not a factory manager
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
    // to make factory manager permission accessible to the smart contract you need to
    // add the code permission to the factory manager account
    // example: contract is set to 1aa2aa3aa4aa account, factory manager is 1aa2aa3aa4ab
    // need to add 1aa2aa3aa4aa@eosio.code permission to 1aa2aa3aa4ab@active
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
    // only want to swap a token if it was transferred to the factory manager
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