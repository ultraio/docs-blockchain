#include <eosio/eosio.hpp>
#include <eosio/print.hpp>
#include <eosio/system.hpp>

using namespace std;
using namespace eosio;

CONTRACT journal : public eosio::contract {
    using eosio::contract::contract;
    
    public:
        ACTION add(name& user, string& message) {
            require_auth(user);

            check(message.size() <= 256, "Message cannot exceed 256 bytes");

            auto current_time = get_current_time();

            // This makes it so that multiple users can have a 'journal'
            // They have their own tables which are scoped to their name
            // They can only add entries to the table which they own
            journal_t scoped_journal = journal_t(get_self(), user.value);
            auto journal_itr = scoped_journal.find(current_time);

            check(journal_itr == scoped_journal.end(), "Entry already exists for this timepoint");

            scoped_journal.emplace(user, [&](journal_struct &_entry) {
                _entry.date = user.value;
                _entry.message = message;
            });

            print(user.to_string(), " added a new entry at ", current_time);
        }

        ACTION edit(name& user, uint32_t& timepoint, string& message) {
            require_auth(user);

            journal_t scoped_journal = journal_t(get_self(), user.value);
            auto journal_itr = scoped_journal.require_find(timepoint, "entry was not found");
   
            scoped_journal.modify(journal_itr, user, [&](journal_struct &_entry) {
                _entry.message = message;
            });

            print(user.to_string(), " updated entry at ", timepoint);
        }

        ACTION remove(name& user, uint32_t& timepoint) {
            require_auth(user);

            journal_t scoped_journal = journal_t(get_self(), user.value);
            auto journal_itr = scoped_journal.require_find(timepoint, "entry was not found");
            scoped_journal.erase(journal_itr);

            print(user.to_string(), " removed journal entry at ", timepoint);
        }

    private:
        // table: journal, scope: name
        TABLE journal_struct {
            uint32_t date;
            string message;
        
            uint32_t primary_key() const {
                return date;
            }
        };

        typedef multi_index<name("journal"), journal_struct> journal_t;

        uint32_t get_current_time() {
            return eosio::current_block_time().to_time_point().sec_since_epoch();
        }
};

// Trevor Wessel - 2023