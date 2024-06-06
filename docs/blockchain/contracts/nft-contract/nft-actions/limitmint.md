---
title: 'limitmint'
order: 15

---

# limitmint

Sets/Resets the minting limit per account of a token factory

## Technical Behavior

-   limitmint action first verifies the parameters passed to it.

    - token_factory_id - the token factory ID

    - account_minting_limit - the number of minting limit per account, or 0 to invalidate the setting. If not 0 and token factory has a valid max_mintable_tokens (i.e., not null), account_minting_limit should be no more than max_mintable_tokens.

    - memo - the memo string to accompany the transaction, should be no more than 256 bytes

    - The action should be called with the token factory manager(asset_manager)’s permission.

- The action stores account_minting_limit parameter value to the token factory’s account_minting_limit field. If account_minting_limit of 0 is specified, the action resets the token factory’s account_minting_limit field to null.

- Each time when issue action is called, if the token factory has a valid account_minting_limit, minted number of tokens is recorded for each of the token receiver's account in mintstat (mintstat.a) table. If the number of minted tokens has been already reached  account_minting_limit , issue action prevents the receiver from getting any more tokens.

## RAM Usage

Setting account_minting_limit will consume 4 bytes of RAM

RAM usage is covered by eosio.nftram. But this action will fail if the unused RAM of eosio.nftram is less than or equal to 200MB.

If the RAM usage is exceed factory maximum pack size of 1920 bytes, action will fail.

When update or reset account_minting_limit, there is no restriction on RAM usage.

## Action Parameters

| Name                  | C++ Type  | Javascript Type  |
| --------------------- | --------- | ---------------- |
| token_factory_id      | unint64_t | number or string |
| account_minting_limit | uint32_t  | number or string |
| memo                  | string    | string           |

## CLI - Cleos

```
cleos push action eosio.nft.ft limitmint '{"token_factory_id": 5, "account_minting_limit": 100, "memo": "limitmint time"}' -p factory.manager@active
```

## JavaScript - eosjs

```javascript
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'limitmint',
                authorization: [{ actor: 'factory.manager', permission: 'active' }],
                data: {
                    token_factory_id: 5,
                    account_minting_limit: 100,
                    memo: 'limitmint time',
                },
            },
        ],
    },
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```

## Migration from v0 to v1

There is no interface change

### behavior change

has no changes in business logic

### changes in tables to read/write

it will migrate factory.a to factory.b, before updating minting limit of the factory.b object
