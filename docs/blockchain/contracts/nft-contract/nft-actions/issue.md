---
title: 'issue'
order: 13

---

# issue

This action can be used to issue tokens by factory managers or authorized minters

::: warning
Deprecated. Use `issue.b` instead
:::

## Technical Behavior

Upon the usage of the issue action, the action will verify that the parameters supplied in the action have values, such as to, token_configs, and memo. The memo specifically has a 256-byte limitation. The required authorization is the token_factory_manager user for each token specified in token_configs. The token_configs vector is verified to not be empty and each token_config is verified to have an amount specified and a valid token_factory_id in order to begin the minting process of a token.

It will retrieve the token_factory from the token factory table. It will validate that the token_factory is currently allowing tokens to be issued and will check if the token can currently be minted based on the minting window specified by the token_factory. It will also check if there is a max_mintable_tokens and ensure that additional token combined with existed token does not exceed that count.

When max_mintable_tokens amount of tokens has been minted token factory will NOT transition to inactive or shutdown state automatically, this step needs to be done manually.

The token_factory manager is required to authorize the minting of the tokens.

The token is then created and whoever the to user is the token is emplaced into their token list.

**Token Id**

Upon issue, each token will be assigned with 1 unique token id

A singleton is used to track the global token ID.

**Minting Limit**

Minting limit is a new concept that was introduced in Release 27. It allows for uniq factories to limit the amount of tokens that can be minted to an individual account. Meaning, that if the account_minting_limit of a token factory is set to 5. Then users may not purchase more than 5 Tokens under that specific account.

-   account_minting_limit of a token factory can be set/reset by calling limitmint action. It is null by default, which means minting limit function is not applied to the factory.

-   When a token factory has account_minting_limit specified it will automatically create entries in the mintstat.a table with the scope of the token_factory_id, where the number of minted tokens for each issued account is recorded.

-   When the limit for the token factory is reached it will prevent the user from purchasing any more tokens.

-   If the account_minting_limit is set to null it will automatically allow users to purchase infinite tokens.

-   An optional parameter, authorizer, can be specified to issue tokens by an authorized minter instead of token factory manager (asset_manager).
    In this case:

    -   authorizer's permission is required instead of token factory manager's one.

    -   authorizer's minting quota stored in authorized minter info table is reduced by the number of minted tokens, and if it reaches zero, their authorized minter info record is removed from the table.

-   ram used to mint NFTs is covered by eosio.nft.ft account, will also be changed to eosio.nftram account

**Redirect to issue.b (issue v1) action**

After v1 is activated by activers action, calls to issue action will be redirected to issue.b (issue v1) action .

## Action Parameters

Try to think of the action parameters as a **JSON Object** when reading this table. There will be a **JavaScript** example of the action below this table.

| Fields        | Type                               | Description                                     |
| ------------- | ---------------------------------- | ----------------------------------------------- |
| to            | eosio::name                        | The receiver Account                            |
| token_configs | std::vector`<token_config>`        | An array of token configs described below.      |
| memo          | std::string                        | A short operation description.                  |
| authorizer    | std::binary_extension`<std::name>` | The account that authorizes this issue of NFTs. |

**Token Config Interface**

| Fields           | Type        | Description                    |
| ---------------- | ----------- | ------------------------------ |
| token_factory_id | uint64_t    | The issuing token factory ID   |
| amount           | uint64_t    | The number of tokens to mint   |
| custom_data      | std::string | A short operation description. |

## CLI - cleos

```bash
cleos push action eosio.nft.ft issue '[{ "to": "to.user.acc", "token_configs": [{"token_factory_id": 5, "amount": 1, "custom_data": ""}], "memo": "token time" }]' -p factory.manager@active
```

-   with **authorizer**

```bash
cleos push action eosio.nft.ft issue '[{ "to": "to.user.acc", "token_configs": [{"token_factory_id": 2, "amount": 1, "custom_data": ""}], "memo": "token time", "authorizer": "auth.minter.account" }]' -p auth.minter.account@active
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'issue',
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
                        ],
                        memo: 'token time',
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

-   with **authorizer**

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'issue',
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
                        memo: 'token time',
                        authorizer: 'auth.minter.account',
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
