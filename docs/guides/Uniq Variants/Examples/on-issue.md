---
title: 'On issue.b smart contract example'
deploy: ['staging', 'mainnet']
---

# Uniq variants - On issue.b smart contract example

This page describes an example smart contract that utilizes smart contract notifications produced by `eosio.nft.ft` contract when one of the actions within it are utilized. As a goal for this smart contract we chose to modify the token URI right after it is minted based on it's serial number. For tokens with even or odd serial number we will substitute one of 2 possible URIs.

### Logic

When writing a smart contract that actively interacts with some other contract you need to either write some definitions to properly read the data from that other smart contract or you will need to get the definitions directly from the smart contract source code. This is needed since data on blockchain is stored in dense binary representation so without these definitions you will only be able to get the raw binary data from the smart contract which is not convenient to work with.

For this smart contract to properly interact with `eosio.nft.ft` we will need information regarding the following tables:

- `token.b` - described using `token_v1` structure. This table stores information about all tokens of NFT standard v1
- `next.token` - described using `next_token_number` structure. This singleton stores the id of the next token that will be minted, by subtracting 1 you get the id of the token that was previously minted.

To know the layout of those tables refer to the following documents [uniq metadata fields](/docs/invalid.md)

In addition to the above we also need to define an action within our smart contract with interface that matches `issue.b` action. This will cause `eosio.nft.ft` contract to notify us when `issue.b` action is executed and the account that will host this contract (here it will be `onissue`) is involved in the minting process (e.g. `onissue` is the issuer of the token). For that the following interface is re-created with an indication to listen for `issue.b` action:

```cpp
[[eosio::on_notify("eosio.nft.ft::issue.b")]]
void on_issue(const issue_wrap_v1& issue);
```

We will also add 2 extra actions to be able to configure which URI will be used depending on if serial number is odd or even. This data will be stored a simple singleton `uricfg` and depending on the scope it will be either for even URIs (scope is 0) or for odd URIs (scope is 1). The actions themselves are `even_uri` and `odd_uri` and they simply write input string into the singleton.

Logic for `on_issue` listener is to first deduce the token ID that was just minted by reading `next.token` singleton, then to read the `token.b` to get the serial number of the token. After that we simply read `uricfg` singleton and get the URI to write based on the serial number of the token and do an inline call to `settknmeta`. The `settknmeta` action will be responsible for writing the new URI we want into the token data since our example contract does not have authority to change data of other smart contracts - we can only read the data and do inline action calls.

::: info
To be able to do the inline call to `settknmeta` an extra permission is required for `onissue` account. It is configured in the test using the following `cleos` command:
```
await cleos(`set account permission onissue active --add-code onissue -p onissue@owner`)
```
This is equivalent to adding `onissue@eosio.code` account permission inside `onissue@active`. And effectively means that smart contract stored in `onissue` account has same authority that `onissue@active` would have
:::

### Disclaimers

::: warning
This example contract is not production ready and has some functionality and checks missing, be sure to do a proper testing if you intend to use any of the code provided in your solution
:::

::: warning
This contract only listens to `issue.b` action, but tokens may also be issued when `issue` action is called after v1 actions are enabled. That means that in addition to listening to `issue.b` action you may also want to listen to `issue` action. This is only applicable in cases where you don't control the service that initiates the minting process (e.g. token is issued from 3rd party to your service). This example contract assumes you have full control over the minting process so only `issue.b` action is considered
:::

::: warning
`issue.b` action supports minting multiple tokens at a time but this example contract will only update the very last token minted per `issue.b` action. This again assumes you have full ownership of the minting process and can control the number of tokens minted at a time. If this is not the case the smart contract will require adjustments to support multiple tokens minted at a time.
:::

::: warning
This contract assumes no one will be issuing tokens to `onissue` contract so if someone actually does try to issue a token this example contract will try to modify it, but will fail since it will most likely not be the factory manager.
:::

### How to build and test

First step after writing the `onissue.hpp` and `onissue.cpp` will be to build the contract. Follow [uniq metadata fields](/docs/invalid.md) for instructions for simplest build process.

As an alternative the build command using `eosio-cpp`:

```bash
eosio-cpp ./src/onissue.cpp -abigen
```

After you successfully compile the contract you will have two files: `onissue.abi` and `onissue.wasm` both of them are needed for proper functionality of your contract on-chain.

The test provided in `onissue.ultra_test.js` in the section below assumes that the compiled contract is located at `pconfig.ultraRootPath + '/eosio.contracts/build/contracts/onissue'` where `ultraRootPath` is the persistent path configured for `ultratest` (e.g. the end result could be `~/ultra/eosio.contracts/build/contracts/onissue`). In your case it may not be true so be sure to modify the `set contract` section of the test with correct path to your contract.

To run the test simply run the `ultratest` with proper path to the test file:

```bash
ultratest -t ./onissue.ultra_test.js
```

### Smart contract source code

::: details onissue.hpp
```cpp
#include <eosio/eosio.hpp>
#include <eosio/system.hpp>
#include <eosio/asset.hpp>
#include <eosio/singleton.hpp>
#include <eosio/binary_extension.hpp>

using namespace std;
using namespace eosio;

// Alternatively can include if available:
//#include <eosio.nft.ft/nft.common.hpp>
//#include <eosio.nft.ft/eosio.nft.ft.hpp>
namespace eosio {
  // Declare table structure types
  struct next_token_number {
    uint64_t value;
    EOSLIB_SERIALIZE( next_token_number, (value) )
  };
  typedef eosio::singleton<"next.token"_n, next_token_number> next_token_number_singleton;

  struct token_v1 {
    uint64_t                id;
    uint64_t                token_factory_id;
    time_point_sec          mint_date;
    uint32_t                serial_number;
    int64_t                 uos_payment;
    optional<string>        uri;
    optional<checksum256>   hash;

    uint64_t primary_key()const { return id; }

    EOSLIB_SERIALIZE( token_v1, (id)(token_factory_id)(mint_date)(serial_number)(uos_payment)(uri)(hash) )
  };
  typedef eosio::multi_index< "token.b"_n, token_v1 > token_table_v1;

  // Get interface issue_wrap_v1 type from eosio.nft.ft contract
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

  struct issue_wrap_v1 {
    name                      to;
    issue_token_config_vector token_configs;
    string                    memo;
    optional<name>            authorizer;
    optional<asset>           maximum_uos_payment;
    binary_extension<optional<issue_token_metadata_vector>> token_metadata;

    EOSLIB_SERIALIZE( issue_wrap_v1, (to)(token_configs)(memo)(authorizer)(maximum_uos_payment)(token_metadata) )
  };
}

class [[eosio::contract("onissue")]] onissue : public contract {
  public:
    using contract::contract;

    [[eosio::action("even.uri")]]
    void even_uri(const string& uri);
    [[eosio::action("odd.uri")]]
    void odd_uri(const string& uri);

    onissue(name receiver, name code, datastream<const char*> ds)
      : contract(receiver, code, ds) {
    }

    [[eosio::on_notify("eosio.nft.ft::issue.b")]]
    void on_issue(const issue_wrap_v1& issue);
  
  private:
    struct [[eosio::table("uricfg"), eosio::contract("onissue")]] uri_config {
      string value;

      EOSLIB_SERIALIZE( uri_config, (value) )
    };

    //scope: 0 (even), 1 (odd)
    typedef eosio::singleton< "uricfg"_n, uri_config > uri_config_singleton;
};
```
:::

::: details onissue.cpp
```cpp
#include "onissue.hpp"

void onissue::even_uri(const string& uri) {
  onissue::uri_config_singleton _s(get_self(), 0);
  _s.set({.value = uri}, get_self());
}

void onissue::odd_uri(const string& uri) {
  onissue::uri_config_singleton _s(get_self(), 1);
  _s.set({.value = uri}, get_self());
}

void onissue::on_issue(const issue_wrap_v1& issue) {
  // Multiple tokens could be issued by a single issue action.
  // For the purposes of this smart contract we will assume that 'onissue' account will issue tokens
  // only from the factories that this contract should apply to and that only one token will be issued at a time.

  // If more granular logic is required then it is necessary to check issue.token_configs vector and check
  // each token_factory_id to make sure it is one of the factories managed by 'onissue'.
  // Additionally will need to check the issue.token_configs[i].amount and apply the logic for each token minted

  eosio::name token_owner = issue.to;
  // next token number singleton indicates the id of the next token that will be minted
  // we can safely subtract 1 from it to get the id of that token that was just minted
  next_token_number_singleton next_token_number_s("eosio.nft.ft"_n, 0);
  uint64_t token_id = next_token_number_s.get().value - 1;

  eosio::token_table_v1 tokens("eosio.nft.ft"_n, token_owner.value);
  auto token_itr = tokens.find(token_id);
  uint64_t serial_number_remainder = token_itr->serial_number % 2;
  onissue::uri_config_singleton uri_config_s(get_self(), serial_number_remainder);
  string new_uri = uri_config_s.get().value;

  // if the eosio.nft.ft.hpp header is included the following wrapper can be used
  //eosio::nft::set_token_meta_action settknmeta("eosio.nft.ft"_n, {{ get_self(), "active"_n }});
  //settknmeta.send( token_id, token_owner, "modify on mint", new_uri, std::nullopt );

  action(
    permission_level{get_self(), "active"_n},
    "eosio.nft.ft"_n,
    "settknmeta"_n,
    std::make_tuple( token_id, token_owner, std::string("modify on mint"), std::optional<string>(new_uri), std::optional<checksum256>() )
  ).send();
}
```
:::

### Validation test

::: details onissue.ultra_test.js
```js
module.exports = class onissue_test {

    constructor() {}

    requiredPlugins() {
        return [];
    }

    requiresSystemContracts() {
        return true;
    }

    nodeosConfigs() {
        return {
            config: {
                'abi-serializer-max-time-ms': 100000,
            },
        }
    }

    requiredUnlimitedAccounts() {
        return [];
    }

    requiredAccounts() {
        return [
            "onissue"
        ];
    }

    tests({assert, endpoint, cleos, rpc, api, ecc, pconfig}) {
        const sleep = ms => new Promise(r => setTimeout(r, ms));

        const {
            activers,
            default_create_wrap_v1,
            create_test_conversion_rate,
            create_token_factory_v1,
            issue_nft_v1,
        } = require('./eosio.nft.ft/shared_nft')(cleos, api, rpc, assert, this.requiredAccounts, endpoint);

        const test_create = { ... default_create_wrap_v1,
            stat: 0,
            asset_manager: 'onissue',
            asset_creator: 'onissue',
            factory_uri: 'test',
            factory_hash: 'd5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523',
            default_token_uri: 'test',
            default_token_hash: 'd5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523'
        }

        return {
            'should activate v1 and allow 3rd party factories': async () => {
                assert(await activers(), 'failed to activate v1');
                await sleep(1000);
            },
            'should create test factory': async () => {
                // need to have oracle rates available for NFT contract to work properly
                await create_test_conversion_rate();
                await create_token_factory_v1(test_create, "onissue", "onissue");
            },
            'should deploy onissue contract': async () => {
                // provide KYC with dummy signature to be able to deploy the contract
                assert(await cleos(`push action eosio.kyc registerkyc '["onissue","ultra","bfed20bb7e82fd800f653411d17d9ec1f51ff7e3ac5635113061af50a99d40e4","SIG_K1_KiyvFxSYrFNawpf747HFG4wDtq2wjV3dp6dbW6AijtMiKSzz5Gm5JBtLQ55yKnMpbsUuJwYc9AsDoTANMhVqKrfLXCmaid","SIG_K1_KiyvFxSYrFNawpf747HFG4wDtq2wjV3dp6dbW6AijtMiKSzz5Gm5JBtLQ55yKnMpbsUuJwYc9AsDoTANMhVqKrfLXCmaid"]' -p ultra.kyc`), "Did not register KYC for onissue account");
                // modify the path to the compiled contract as needed
                const contractPath = pconfig.ultraRootPath + '/eosio.contracts';
                assert(await cleos(`set contract onissue ${contractPath}/build/contracts/onissue onissue.wasm onissue.abi -p onissue@active`), 'Did not set contract for onissue');
                // allow inline actions to use active permission of 'onissue' account
                assert(await cleos(`set account permission onissue active --add-code onissue -p onissue@owner`), "Could not set onissue permissions");
            },
            'should try to issue a token and fail because even.uri and odd.uri are not configured for smart contract': async() => {
                assert(!await issue_nft_v1(test_create.asset_manager, [{token_factory_id: 0, amount: 1, custom_data: ''}], test_create.asset_manager, null, null, null, null, 'singleton does not exist'), 'was able to mint a token');
            },
            'should configure even.uri and odd.uri': async() => {
                assert(await cleos(`push action onissue even.uri '["http://test.io/even.json"]' -p onissue`), "Was not able to configure even URI");
                assert(await cleos(`push action onissue odd.uri '["http://test.io/odd.json"]' -p onissue`), "Was not able to configure odd URI");
            },
            'should issue 2 tokens, first one should have even URI, second one should have odd uri': async() => {
                // first token has serial number of 1 - odd
                // second token has serial number of 2 - even

                // as mentioned in the contract code - will only issue 1 token at a time
                // token_factory_id is 0 since it is the first factory ever created within this test so it will have id of 0
                // in practice you need to get your token factory ID after creation from the chain
                assert(await issue_nft_v1(test_create.asset_manager, [{token_factory_id: 0, amount: 1, custom_data: ''}], test_create.asset_manager), 'was not able to mint tokens');
                assert(await issue_nft_v1(test_create.asset_manager, [{token_factory_id: 0, amount: 1, custom_data: ''}], test_create.asset_manager), 'was not able to mint tokens');
            
                // check tokens owned by 'onissue' and make sure that first one has odd.json URI and second one has even.json URI
                const tokens = await rpc.get_table_rows({json: true, code: 'eosio.nft.ft', scope: 'onissue', table: `token.b`});
                assert(tokens.rows[0].uri === 'http://test.io/odd.json', "Wrong token 1 URI");
                assert(tokens.rows[1].uri === 'http://test.io/even.json', "Wrong token 2 URI");
            },
        }
    }
}
```
:::