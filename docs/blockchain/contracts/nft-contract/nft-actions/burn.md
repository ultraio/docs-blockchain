---
title: 'burn'
order: 5

---

# burn

This action can be used to burn a token, see more details in burn.

## Behavior

Used to burn a non-fungible token from one user. This requires the **token_id** of a minted token in order to successfully burn the token. As well as the permission of the user who owns the token.

## Technical Behavior

**Parameter validation**

Upon the usage of the burn action the action verifies that the parameters supplied in the action have values. This includes owner, token_ids, and memo. The memo specifically has a 256 byte limitation. The required authorization is the owner user. The token_ids vector is verified to not be empty.

**On-the-fly migration**

After v1 is activated by activers action, token exists either in v0 token table, token.a, or v1 token table, token.b.
If the token exists in token.a, then the token factory from which the token was minted exists in v0 factory table, factory.a, which, in this case, is moved to factory.b.
In the following descriptions, token factory and token are either v0 or v1 data structures.

**Main operations**

The token from the token table includes a token factory id and this is used to fetch the token factory data. The token factory must exist for a token to be burned. The token will not be able to be burned if the owner does not own this token. If the token is up for resale then the token is removed from the resale table.

After this data is verified the token quantity in the token factory is subtracted and checked for underflow. The token is then erased from the owner. The owner ensures that the fractional parts are truncated and they go to `eosio.pool`.
`eosio.nftram` refunds the fee to each account.

## Action Parameters

Try to think of the action parameters as a **JSON Object** when reading this table. There will be a **JavaScript** example of the action below this table.

**Notifications**

`require_recipient` is done for `owner` account and for asset managers of corresponding uniq factories

### V0

| Fields    | Type                    | Description                    |
| --------- | ----------------------- | ------------------------------ |
| owner     | eosio::name             | The token owner                |
| token_ids | std::vector`<uint64_t>` | The array of tokens to burn    |
| memo      | std::string             | A short operation description. |

### V1

No Changes

## CLI - cleos

### V0 / V1

```bash
cleos push action eosio.nft.ft burn '[{ "owner": "owner.user.acc", "token_ids": [1], "memo": "bye bye tokens" }]' -p owner.user.acc@active
```

## JavaScript - eosjs

### V0 / V1

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'burn',
                authorization: [{ actor: 'owner.user.acc', permission: 'active' }],
                data: {
                    burn: {
                        owner: 'owner.user.acc',
                        token_ids: [1],
                        memo: 'bye bye tokens',
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

# Behavior Changes

After v1 is activated, if the token has already been migrated to token.b table, the UOS locked up for the token will be refunded from eosio.nfram to the relevant parties. The refund split is as follows:

-   15% goes to the factory’s asset manager

-   70% goes to the token owner

-   the rest including the fractional part(about 15%) fee goes to eosio.pool

See more detail in RAM rules for NFTs

# Changes in tables to Read/Write

it will migrate factory.a to factory.b, before reading the factory.b object.
