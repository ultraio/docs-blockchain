---
title: 'authmint.b'
order: 4

---

# authmint.b

Authorize an account to be able to mint tokens.

## Behavior

This action can be used to delegate minting power to other accounts.

## Technical Behavior

**Parameter validation**

The action requires authorization of authorizer which can be either the token_factory’s asset_manager or another authorized minter. The account being authorized - authorized_minter should exist. token_factory_id is required and must exist. quantity should be a non-zero value. The optional maximum_uos_payment specifies the maximum amount of UOS that the authorizer want to pay. memo value has a 256 byte limitation.

**On-the-fly migration**

After v1 is activated by activers action, token factory exists either in v0 factory table, factory.a, or v1 factory table, factory.b. If the token factory exists in factory.a, then the token factory is moved to factory.b.

**Main operations**

This action allows a factory asset manager to be able to authorize (delegate) minting of factory tokens to another account called authorized minter. The following rules apply for this action:

-   If max_mintable_tokens is specified in the token factory, the asset manager can authorize equal to or less than the totally available tokens, which is max_mintable_tokens - minted_tokens_no - sum of delegated tokens.

-   An asset manager cannot authorize themselves, an authorized minter cannot return tokens to the asset manager.

-   An authorized minter can authorize (re-delegate) yet another authorized minter from their available amount of tokens.

-   An authorized minter can mint their authorized quantity of tokens.

-   Authorized minter info is stored into the authmintrs.a table of eosio.nft.ft contract with the token factory ID scope.

**RAM usage/cost calculation and payment/refund**

-   RAM usage used to store authorized minter info is covered by `eosio.nftram` account. If the unused RAM of eosio.nftram is less than or equal to 200MB, the action can’t be executed.

-   The cost of a authorized minter entry is paid to `eosio.nftram` and it will be locked up in the authorized minter entry. The funds are released back to the orinigal payer after the authorized tokens are minted

        -   First, the cost in USD is (Authorized Minter RAM payment size) \* (RAM price), where

            -   Authorized Minter RAM payment size: **124 bytes**

            -   RAM price: **0.15 USD/KB**

        -   The cost is paid in UOS. The action gets `1 MINUTE` conversion rate in USD/UOS from `eosio.oracle` contract. and calculates the cost by
            (124B/1024B \* 0.15USD/KB) / (conversion rate) = `0.01816406` **USD**/(conversion rate)

-   When a manager (i.e., factory’s asset manager)/authorized minter add a new authorized minter

    -   RAM usage will be charged according to RAM pricing rules, and its payment is sent from the manager/authorized minter to eosio.nftram in UOS.

    -   The payment and RAM usage are accumulated and book-kept in the manager's RAM vault as a record in RAM vault table, ramvault.a. Update the existing authorized minter’s quota (i.e., the amount of tokens that an authorized minter can mint) doesn't cost anything.

    -   If maximum_uos_payment is specified, the amount of payment will be checked to confirm whether payment is no more than maximum_uos_payment.

-   When an authorized minter’s quota becomes zero (by minting their quota or by delegating their quota to another authorized minter)

    -   The authorized minter’s info is removed from authmintrs.a table.

    -   The factory’s manager will get the refund proportional to the amount of RAM released from the RAM vault, i.e.
        refund = (accumulated RAM payment) \* (released amount of RAM)/(accumulated amount of RAM usage).

**Notifications**

`require_recipient` is done for `authorizer`, `authorized_minter` and for  of a token under resell and for asset manager of the token factory.

## Action Parameters

The action parameters as an **JSON Array of Objects.** The Object description is listed in the table below.

### V0

| Fields            | Type                     | Description                           |
| ----------------- | ------------------------ | ------------------------------------- |
| authorizer        | eosio::name              | The account that authorizes           |
| authorized_minter | eosio::name              | The account being authorized          |
| quantity          | uint32_t                 | The number of tokens being authorized |
| token_factory_id  | std::optional\<uint64_t> | The issuing token factory ID          |
| memo              | std::string              | A short operation description.        |

### V1

| Fields              | Type                     | Description                                          |
| ------------------- | ------------------------ | ---------------------------------------------------- |
| authorizer          | eosio::name              | The account that authorizes                          |
| authorized_minter   | eosio::name              | The account being authorized                         |
| token_factory_id    | uint64_t                 | The issuing token factory ID                         |
| quantity            | uint32_t                 | The number of tokens being authorized                |
| maximum_uos_payment | std::optional\<uint64_t> | Maximum UOS payment the authorizer is willing to pay |
| memo                | std::string              | A short operation description.                       |

## CLI - cleos

### V0

```bash
cleos push action eosio.nft.ft authminter '{"authorizer": "carol", "authorized_minter": "diane", "token_factory_id": "4503599627370496", "quantity": "1", "memo": ""}' - carol@active
# to view the authorization records (alice is the Asset Manager):
cleos get table eosio.nft.ft alice authmintrs.a
```

### V1

```bash
cleos push action eosio.nft.ft authmint.b '{"authorizer": "carol", "authorized_minter": "diane", "token_factory_id": 0, "quantity": 1, "maximum_uos_payment": "1.00000000 UOS", memo": ""}' -p carol@active
# to view the authorization records (alice is the autorhize minter):
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
            name: 'authmint.b',
            authorization: [{ actor: 'carol', permission: 'active' }],
            data: {
                authorizer: 'carol',
                authorized_minter: 'diane',
                token_factory_id: 1,
                quantity: 1,
                maximum_uos_payment: '1.00000000 UOS',
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
