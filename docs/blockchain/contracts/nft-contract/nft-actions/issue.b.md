---
title: 'issue.b'
order: 14

---

# issue.b

This action can be used to issue tokens by factory managers or authorized minters

## Technical Behavior

**Parameter validation**

Upon the usage of the **issue action,** the action verifies that the parameters supplied in the action have values, such as **to, token_configs**, and **memo.** The memo specifically has a 256-byte limitation. The required authorization is either the token factory manager or the authorized minter account for each token specified in **token_configs**. The **token_configs** vector is verified to not be empty and each **token_config** is verified to have an **amount** specified and a valid **token_factory_id** in order to begin the minting process of a token. The **token_metadata** vector is optional, but if provided, it is verified to be the same length as the number of tokens to mint. Providing the **token_metadata** parameter allows user to set the token metadata at the time of minting the token.

**On-the-fly migration**

If **token_factory** (**token_factory_v0**, to be exact) exists in v0 factory table, **factory.a**, the action copies it to v1 factory table, **factory.b** and removes the existing one from **factory.a**. After that, it operates on v1 **token_factory** (**token_factory_v1**, to be exact).

**Main operations**

The action retrieves the **token_factory** from the token factory table, **factory.b**. It validates that the **token_factory** is currently allowing tokens to be issued and checks if the token can currently be minted based on the **minting window** specified by the **token_factory.** It also checks if there is a **max_mintable_tokens** and ensure that additional token combined with existed token does not exceed that count.

When **max_mintable_tokens** amount of tokens has been minted, token factory will NOT transition to `inactive` or `shutdown` state automatically, this step needs to be done manually.

The token is then created and whoever the **to** user is the token is emplaced into their token list, **token.b**.

**Token ID**

-   Upon issue, each token will be assigned with 1 unique token ID

-   A singleton is used to track the global token ID.

**Minting Limit**

Minting limit is a new concept that was introduced in Release 27. It allows for uniq factories to limit the amount of tokens that can be minted to an individual account. Meaning, that if the **account_minting_limit** of a token factory is set to 5, then users may not purchase more than 5 tokens under that specific account.

-   **account_minting_limit** of a token factory can be set/reset by calling `limitmint` action. It is null by default, which means the minting limit function is not applied to the factory.

-   If a token factory has **account_minting_limit** specified, it automatically creates entries in the **mintstat.a** table with the scope of the **token_factory_id**, where the number of minted tokens for each issued account is recorded.

-   When the limit for the token factory is reached, it will prevent the user from purchasing any more tokens.

-   If the **account_minting_limit** is set to null it allows users to purchase infinite tokens.

**Authorized minter**

-   An optional parameter, **authorizer**, can be specified to issue tokens by an authorized minter instead of token factory manager (**asset_manager**).
    In this case:

    -   **authorizer**'s permission is required instead of token factory manager's one.

    -   **authorizer**'s minting quota stored in authorized minter info table is reduced by the number of minted tokens, and if it reaches zero, their authorized minter info record is removed from the table.

**RAM usage**

-   Creating new token

    -   RAM usage of creating a token is covered by `eosio.nftram`. **4GB** will be gifted to `eosio.nfrram` to start with. The action fails If the unused RAM of `eosio.nftram` is less than or equal to **200MB**.

    -   Token data is stored to `token.b` table and each entry’s pack size will be **192 bytes**.

    -   If the RAM usage for token exceeds maximum pack size of **384 bytes**, action will fail.

    -   If **asset_manager** or **authorizer** is other than `ultra.nft.ft`, The cost of creating a token is paid to `eosio.nftram` and it will be locked up in the token minted.

        -   First, the cost in USD is (factory RAM payment size) \* (RAM price), where

            -   NFT RAM payment size: **384 bytes**

                - estimated for a token with URI of size 192

            -   RAM price: **0.15 USD/KB**

        -   The cost is paid in UOS. The action gets `1 MINUTE` conversion rate in USD/UOS from `eosio.oracle` contract. and calculates the cost by
            (384B/1024B \* 0.15USD/KB) / (conversion rate) = `0.05625` **USD**/(conversion rate)

-   When a mintstats.a entry is added due to first time minting to an account from a factory with minting limit, it will charge the cost for adding each mintstat.a entry. The payer is the authorizer of the minting (it’s the authorized minter if using authorizer, ortherwise the manager). It pays to eosio.nftram, and its ram usage and payment will be bookkept in the manager’s vault.

-   When an authorized minter’s quota becomes zero (by minting their quota or by delegating their quota to another authorized minter)

    -   The authorized minter’s info is removed from `authmintrs.a` table.

    -   The factory’s manager will get the refund proportional to the amount of RAM released from the RAM vault, i.e.
        refund = (accumulated RAM payment) \* (released amount of RAM)/(accumulated amount of RAM usage).

**Notifications**

`require_recipient` is done for `asset_manager` of the token factory, `to` account that recieves the token and `authorizer` (if specified in the action)

## Action Parameters

Try to think of the action parameters as a **JSON Object** when reading this table. There will be a **JavaScript** example of the action below this table.

| Property Name       | C++ Type                                                               | JavaScript Type                          |
| ------------------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| to                  | eosio::name                                                            | string                                   |
| token_configs       | std::vector\<token_config>                                             | Array                                    |
| memo                | std::string                                                            | string                                   |
| authorizer          | std::optional\<eosio::name>                                            | string (must be provided, can be `null`) |
| maximum_uos_payment | std::optional\<eosio::asset>                                           | string (must be provided, can be `null`) |
| token_metadata      | eosio::binary_extension\<std::optional\<std::vector\<token_metadata>>> | Array (can be omitted or be `null`)      |

**Token Config Interface**

| Property Name    | C++ Type    | JavaScript Type |
| ---------------- | ----------- | --------------- |
| token_factory_id | uint64_t    | number          |
| amount           | uint32_t    | number          |
| custom_data      | std::string | string          |

**Token Metadata Interface**

| Property Name | C++ Type                    | JavaScript Type |
| ------------- | --------------------------- | --------------- |
| meta_uri      | std::optional\<std::string> | string          |
| meta_hash     | std::optional\<checksum256> | string          |

## CLI - cleos

```bash
cleos push action eosio.nft.ft issue.b '[{ "to": "to.user.acc", "token_configs": [{"token_factory_id": 5, "amount": 1, "custom_data": ""}], "memo": "token time", "authorizer": null, "maximum_uos_payment": "10.00000000 UOS" }]' -p factory.manager@active
```

-   with **authorizer and token_metadata**

```bash
cleos push action eosio.nft.ft issue.b '[{ "to": "to.user.acc", "token_configs": [{"token_factory_id": 2, "amount": 1, "custom_data": ""}], "token_metadata":[{"meta_uri": "some-uri", "meta_hash": "d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc539"}], "memo": "token time", "authorizer": "auth.minter.account", "maximum_uos_payment": null }]' -p auth.minter.account@active
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'issue.b',
                authorization: [{ actor: 'factory.manager', permission: 'active' }],
                data: {
                    issue: {
                        to: 'to.user.acc',
                        token_configs: [
                            {
                                token_factory_id: 5,
                                amount: 1,
                                custom_data: '',
                            },
                        ]
                        memo: 'token time',
                        authorizer: null,
                        maximum_uos_payment: '10.00000000 UOS'
                    },
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

-   with **authorizer and token_metadata**

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'issue.b',
                authorization: [{ actor: 'auth.minter.account', permission: 'active' }],
                data: {
                    issue: {
                        to: 'to.user.acc',
                        token_configs: [
                            {
                                token_factory_id: 5,
                                amount: 1,
                                custom_data: '',
                            },
                        ],
                        token_metadata: [
                            {
                                meta_uri: 'some-uri',
                                meta_hash: 'd5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc539',
                            },
                        ],
                        memo: 'token time',
                        authorizer: 'auth.minter.account',
                        maximum_uos_payment: null
                    },
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
