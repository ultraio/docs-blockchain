#include <eosio/eosio.hpp>
#include <eosio/print.hpp>
#include <eosio/asset.hpp>
#include <eosio/symbol.hpp>
#include <eosio/system.hpp>

using namespace std;
using namespace eosio;

CONTRACT hello : public eosio::contract {
    using eosio::contract::contract;
    
    public:
        [[eosio::on_notify("eosio.token::transfer")]] void deposit(name from, name to, eosio::asset amount, std::string memo) {
            check(amount.amount > 0, "deposit amount should be positive");

            // We want to ignore any transfers not going to us
            // We want to make sure we are ignoring transfers out from ourselves
            if (to != get_self() || from == get_self()) {
                return;
            }

            check(memo.size() >= 1);
            check(amount.symbol == eosio::symbol('UOS', 8), "Not the token we need. Bye.");
            
            // You can check a memo here after an 'order' is created
            // An order can be given a string value
            // The memo can then be used to find a table entry
        }
};