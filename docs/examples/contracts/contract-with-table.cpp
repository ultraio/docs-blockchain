#include <eosio/eosio.hpp>
#include <eosio/print.hpp>

using namespace std;
using namespace eosio;

CONTRACT status : public eosio::contract {
    using eosio::contract::contract;
    
    public:
        ACTION setstatus(name& user, string& status) {
            require_auth(user);
            
            auto info_itr = info.find(user.value);
            if (info_itr == info.end()) {
                // This creates an entry in the table for the user
                info.emplace(user, [&](status_struct &_info) {
                    _info.user = user.value;
                    _info.status = status;
                });
            } else {
                // This modifies an existing entry, and sets existing data.
                info.modify(info_itr, same_payer, [&](status_struct &_info) {
                    _info.status = status;
                });
            }

            print(user.to_string(), " has set their status to: ", status);
        }

        ACTION rmvstatus(name& user) {
            require_auth(user);

            // This requires an entry to exist; before proceeding any further
            auto info_itr = info.require_find(user.value, "user does not have any entries");

            // This empties the table entry for the specified user
            info.erase(info_itr);

            print(user.to_string(), " removed table entry");
        }

    private:
        TABLE status_struct {
            uint64_t user;
            string status;
        
            uint64_t primary_key() const {
                return user;
            }
        };

        typedef multi_index<name("status"), status_struct> status_t;
        status_t info = status_t(get_self(), get_self().value);
};

// Trevor Wessel - 2023