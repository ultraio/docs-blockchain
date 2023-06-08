---
title: 'authminter'
order: 3
deploy: ['staging', 'mainnet']
---

# authminter

Authorize an account to be able to mint tokens.

::: warning
Deprecated. Use `authmint.b` instead
:::

## Behavior

This action allows a factory Asset Manager to be able to authorize (delegate) minting of factory tokens to another account called Authorized Minter (further - AuthMinter). The following rules apply for this action:

-   The Asset Manager can authorize less than the totally available tokens, Total = `max_mintable_tokens` - `minted_tokens_no` - `sum of delegated tokens`.
-   Asset Manager cannot authorize themselves, an AuthMinter cannot return tokens to the Asset Manager.
-   An AuthMinter can authorize (re-delegate) yet another AuthMinter from their available amount of tokens.
-   An AuthMinter can mint their authorized `quantity` of tokens.
-   The RAM cost of storing new authorized minter info is covered by the authorizer’s (i.e., Asset Manager’s or AuthMinter’s) RAM quota. Modifying existing authorized minter info doesn’t change RAM payer.

## Technical Behavior

**Parameter validation**

The action requires authorization of authorizer which can be either the token_factory::asset_manager or another authorized minter. The account being authorized - authorized_minter should exist. token_factory_id is required and must exist. quantity should be a positive value. memo value has a 256 byte limitation

**On-the-fly migration**

After v1 is activated by activers action, token factory exists either in v0 factory table, factory.a, or v1 factory table, factory.b.
If the token factory exists in factory.a, then the token factory is moved to factory.b.
In the following descriptions, token factory is either v0 or v1 data structures.

**Main operations**

This action allows a factory Asset Manager to be able to authorize (delegate) minting of factory tokens to another account called Authorized Minter (further - AuthMinter). The following rules apply for this action:

-   The Asset Manager can authorize less than the totally available tokens, Total = max_mintable_tokens - minted_tokens_no - sum of delegated tokens.

-   Asset Manager cannot authorize themselves, an AuthMinter cannot return tokens to the Asset Manager.

-   An AuthMinter can authorize (re-delegate) yet another AuthMinter from their available amount of tokens.

-   An AuthMinter can mint their authorized quantity of tokens.

-   The RAM cost of storing new authorized minter info is covered by the authorizer’s (i.e., Asset Manager’s or AuthMinter’s) RAM quota. Modifying existing authorized minter info doesn’t change RAM payer.

The authorization data is stored into the authmintrs.a table of eosio.nft.ft contract within the token factory ID scope.

## Action Parameters

The action parameters as an **JSON Array of Objects.** The Object description is listed in the table below.

| Property Name     | C++ Type                  | JavaScript Type  | Definition                            |
| ----------------- | ------------------------- | ---------------- | ------------------------------------- |
| authorizer        | eosio::name               | string           | The account that authorizes           |
| authorized_minter | eosio::name               | string           | The account being authorized          |
| quantity          | uint32_t                  | number or string | The number of tokens being authorized |
| token_factory_id  | std::optional`<uint64_t>` | number           | The issuing token factory ID          |
| memo              | std::string               | string           | A short operation description.        |

### V1

| Property Name       | C++ Type                  | JavaScript Type  | Definition                                 |
| ------------------- | ------------------------- | ---------------- | ------------------------------------------ |
| authorizer          | eosio::name               | string           | The account that authorizes                |
| authorized_minter   | eosio::name               | string           | The account being authorized               |
| token_factory_id    | std::optional`<uint64_t>` | number           | The issuing token factory ID               |
| quantity            | uint32_t                  | number or string | The number of tokens being authorized      |
| maximum_UOS_payment | `optional<asset>`         | string           | The maximum amount the authorizer will pay |
| memo                | std::string               | string           | A short operation description.             |

## CLI - cleos

### V0

```bash
cleos push action eosio.nft.ft authminter '{"authorizer": "carol", "authorized_minter": "diane", "token_factory_id": "4503599627370496", "quantity": "1", "memo": ""}' - carol@active
# to view the authorization records (alice is the Asset Manager):
cleos get table eosio.nft.ft alice authmintrs.a
```

### V1

```bash
cleos push action eosio.nft.ft authminter '{"authorizer":"someone","authorized_minter":"someoneelse","token_factory_id":0,"quantity":5,"maximum_uos_payment":null,"memo":"hello world"}' - carol@active
# to view the authorization records (alice is the Asset Manager):
cleos get table eosio.nft.ft alice authmintrs.a
```

## JavaScript - eosjs

### V0

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'authminter',
            authorization: [{ actor: 'carol', permission: 'active' }],
            data: {
                authorizer: 'carol',
                authorized_minter: 'diane',
                token_factory_id: '4503599627370496',
                quantity: 1,
                memo: '',
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```

### V1

```js
await transact(
    [
        {
            account: 'eosio.nft.ft',
            name: 'authminter',
            authorization: [{ actor: 'carol', permission: 'active' }],
            data: {
                authorizer: 'carol',
                authorized_minter: 'someoneelse',
                token_factory_id: 0,
                quantity: 5,
                maximum_uos_payment: null, // OR specify value here
                memo: 'hello world',
            },
        },
    ],
    {
        blocksBehind: 3,
        expireSeconds: 30,
    }
);
```
