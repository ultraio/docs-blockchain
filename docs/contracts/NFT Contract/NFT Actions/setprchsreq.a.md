---
title: 'setprchsreq.a'
order: 32
deploy: ['experimental']
---

# setprchsreq.a

This action is used to set purchase requirements for a token factory.

Tokens purchased will be issued to the receiver account using [issue.b](./issue.b.md) action. Factory manager pays for minting the token

::: warning
Be mindful of the price you set for purchasing uniqs. If the price is too low and there are no restrictions for users to purchase uniqs using this purchase option then it may be abused to purchase many uniqs very cheap and then burn them. Associated cost to mint a token is on token factory manager
:::

## Technical Behavior

The factory manager can specify purchase options for users. Note that currently they have to use the same action for both creation and modification of purchase requirements.

-   If **asset_manager** is an account other than `ultra.nft.ft`, the cost of a factory creation is paid to `eosio.nftram` and it will be locked up in the purchase option.

    -   First, the cost in USD is (factory RAM payment size) \* (RAM price), where

        -   NFT RAM payment size: **1671 bytes**

            - estimated for a token with `purchase_option_with_uniqs` of 64

        -   RAM price: **0.15 USD/KB**

    -   The cost is paid in UOS. The action uses `1 MINUTE` conversion rate in USD/UOS from `eosio.oracle` contract. Assuming UOS price of 1\$ the cost per purchase requirement is:
        > 1671B/1024B \* 0.15USD/KB ~ 0.24$ = 0.24 UOS

`token_factory_id` - token factory managed by a factory manager.

`index` - purchase requirements index. starts with 0.

`price` - price per uniq. Should be specified in either `UOS` or `USD`. Together with `purchase_option_with_uniqs` this is what a user provides to mint a uniq. If `price` is set to 0 then either `purchase_limit` should be set or `purchase_option_with_uniqs` should require some token to be burnt or transferred.

`purchase_limit` - how much users can buy via purchase action. It has to be less than factory limit setting and greater or equal to what was already minted via the action. If value provided is below the number of tokens already purchased from this option the `purchase_limit` will be set to be equal to the number of purchased tokens from this option

`promoter_basis_point` is used to specify how much % of a sale a promoter will get.

`purchase_option_with_uniqs` - optional field used to set purchase options via uniqs. user has to have `count` tokens from listed token factories. They will be burned, transferred or checked as per `strategy` setting.

`sale_shares` is used to set royalties.

If RAM price is greater than `maximum_uos_payment` transaction reverts.

If token factory is inactive transaction reverts as well.

`group_restriction` is an optional parameter that accepts a vector of 64-bit integers. This vector is designed to apply logical restrictions based on the group IDs that users belong to. The structure of each 64-bit integer is as follows:

* The lower 60 bits represent the group ID.
* The upper 4 bits are reserved for logical operators.

Logical Operators
The logical operators are defined as bitwise flags in the following manner:

```scss
#define OR        0X1000'0000'0000'0000   // 0: AND, 1: OR
#define NEGATION  0X2000'0000'0000'0000   // 0: No negation, 1: Negation
```

* `4th Bit (OR Operator)`: If this bit is set, it indicates the OR operator. Otherwise, it defaults to the AND operator.
* `3rd Bit (NEGATION Operator)`: If this bit is set, it indicates that the NEGATION should be applied to the group ID.

The expression is evaluated from left to right, and parentheses are not used. Logical operators take into account starting from the second group ID in the sequence.

For example, a `group_restriction` vector like `<OR + NOT + group1, AND + group2>` would be evaluated as `(NOT group1 AND group2)`. This means the condition will pass if the user is not a member of `group1` AND is a member of `group2`.

Longer expression example for a `group_restriction` vector of `<OR + NOT + group1, AND + group2, OR + NOT + group3, OR + group4, AND + NOT + group5>`, the logical expression becomes:

```css
(NOT group1 AND group2) OR (NOT group3) OR (group4 AND NOT group5)
```

This means the condition will pass if:

* The user is not a member of `group1` AND is a member of `group2`, OR
* The user is not a member of `group3`, OR
* The user is a member of `group4` AND not a member of `group5`.


Formalization of Logical Expression Evaluation

To formalize the evaluation process, let's consider the `group_restriction` vector as `G = [g1, g2, g3, ..., gn]`, where each `gi` is a 64-bit integer that encodes both the logical operator and the group ID.

The corresponding logical expression `L` can be represented as:

```scss
L = O1(g1) OP2 O2(g2) OP3 O3(g3) ... OPn On(gn)

```

Where:

* `Oi(gi)` checks whether a user belongs to the group `gi` if there is no NEGATION bit, otherwise, it checks whether a user **does not** belong to the group `gi`.
* `OPi` is the logical operator (AND/OR) determined by the OR bit in `gi`, taking effect starting from `i=2` to `n`.

Notes:

* `Oi(gi)` will return either `group_i` or `NOT group_i` based on the presence of the NEGATION bit.
* `OPi` will return either `AND` or `OR` depending on the presence of the OR bit.
* While the expression `L` is evaluated from left to right, it also adheres to operator precedence rules: AND operations have higher precedence than OR operations, similar to standard Boolean logic. This means that all AND operations will be executed first, followed by the OR operations.

By understanding this formalization, you can ensure a clear and standardized way to construct and evaluate the logical expression `L` based on the `group_restriction` vector `G`.

`memo` - a string of no more than 256 characters. useful for parsing on a backend.

## Action Parameters

**Action Interface**

| Property Name              | C++ Type                            | JavaScript Type | Description                                                                                                                                                                                                                                          |
| -------------------------- | ----------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| token_factory_id           | uint64_t                            | number          | ID of the factory to add (or update) purchase option to                                                                                                                                                                                              |
| index                      | uint64_t                            | number          | Index of the purchase option. Multiple purchase options can be added to a single factory                                                                                                                                                             |
| price                      | eosio::asset                        | string          | Price of the Uniqs from this purchase option either in UOS or USD. Can also set 0 price                                                                                                                                                              |
| purchase_limit             | optional\<uint32_t>                 | number / null   | Maximum number of Uniqs that can be purchased from this purchase option. Must not exceed factory minting limit                                                                                                                                       |
| promoter_basis_point       | uint16_t                            | number          | UOS share received by the promoter with each purchase done for this option. Specified in basis points                                                                                                                                                |
| purchase_option_with_uniqs | std::optional\<provided_user_uniqs> | Object / null   | Optional feature that allows the purchase option to require user to own uniqs from specific factories or to pay with uniqs from specific factories. Refer to a link below for more details                                                           |
| sale_shares                | std::vector\<sale_share>            | Array           | A vector of [account, share] pairs setting the share each account receives during the purchase                                                                                                                                                       |
| maximum_uos_payment        | optional\<eosio::asset>             | asset / null    | Maximum amount of UOS manager allows to be take for the creation of the purchase option. Since the price is fixed in USD the equivalent UOS payment may fluctuate. Using this option will prevent the manager from paying more then he is willing to |
| group_restriction          | optional<uint64_t_vector>           | Array / null    | Vector of 64-bit integers specifying logical restrictions based on group membership. Follows specific logical operator rules as outlined above.                                                                                                      |
| purchase_window_start      | std::optional\<time_point_sec>      | string / null   | Start time of purchase window (optional)                                                                                                                                                                                                             |
| purchase_window_end        | std::optional\<time_point_sec>      | string / null   | End time of purchase window (optional)                                                                                                                                                                                                               |
| memo                       | std::string                         | string          | A short operation description                                                                                                                                                                                                                        |

**purchase_requirement_with_uniqs option breakdown**

Refer to [fctrprchs.a](../nft-tables.md#fctrprchs-a)

**uniqs_count type breakdown**

Refer to [fctrprchs.a](../nft-tables.md#fctrprchs-a)

### Example Usage of the parameter ```"group_restriction"```

The logical operators' values are defined as
- **OR**: 0X1000'0000'0000'0000, or 1152921504606846976 in decimal.
- **NEGATION**: 0X2000'0000'0000'0000, or 2305843009213693952 in decimal.
- **AND**: 0, This is implicit. It can be ignored since it's 0.
- **NO NEGATION**: 0, This is also implicit. It can also be ignored since it's 0.

 Let's say we have two user groups
 - Group1_ID = 1
 - Group2_ID = 2

#### Use cases
1. no group requriement.
    - parameter value ``` "group_restriction": [] ```
2. users belong to Group1 and Group2 can purchase from this option
    - logical expression: Group1 & Group2
    - parameter calculation 
        * = [Group1_ID, Group2_ID]
        * = [1,2]
    - parameter value:  ``` "group_restriction": [1, 2] ``` (which is used in the cleos example)
3. users belong to either Group1 or Group2 can purchase form this option
    - logical expression: Group1 | Group2 
    - parameter calculation
        * = [Group1_ID, OR + Group2_ID]
        * = [1, 1152921504606846976 + 2]
        * = [1, 1152921504606846978]
    - parameter value  ``` "group_restriction": [1, 1152921504606846978] ```
4. users not belong to Group1 but belong to Group2 can purchase form this option
    - logical expression: ~Group1 & Group2 
    - parameter calculation
        * = [NEGATION + Group1_ID, Group2_ID]
        * = [2305843009213693952 + 1, 2]
        * = [2305843009213693953, 2]
    - parameter value  ``` "group_restriction": [2305843009213693953, 2] ```
5. users not belong to Group1 or not Group2 can purchase form this option
    - logical expression: ~Group1 | ~Group2 
    - parameter calculation:
        * = [NEGATION + Group1_ID, OR + NEGATION + Group2_ID]
        * = [2305843009213693952 + 1, 1152921504606846976 + 2305843009213693952 + 2]
        * = [2305843009213693953, 3458764513820540932]
    - parameter value  ``` "group_restriction": [2305843009213693953, 3458764513820540932] ``` (which is used in the javascript example)



## CLI - cleos

```bash
cleos push action eosio.nft.ft setprchsreq.a '[
  {
    "token_factory_id": 100,
    "index": 1,
    "price": "50.00000000 UOS",
    "purchase_limit": 1,
    "promoter_basis_point": 100,
    "purchase_option_with_uniqs": {
      "transfer_tokens_receiver_account": null,
      "factories": [{
        "token_factory_id": 42,
        "count": 3,
        "strategy": 0
      }]
    },
    "sale_shares": [],
    "maximum_uos_payment": "2.00000000 UOS",
    "group_restriction": [1,2],
    "purchase_window_start": "2023-09-18T13:21:10.724",
    "purchase_window_end": "2023-11-18T13:21:10.724",
    "memo": ""
  }
]' -p factory.manager
```

## JavaScript - eosjs

```js
await api.transact(
    {
        actions: [
            {
                account: 'eosio.nft.ft',
                name: 'setprchsreq.a',
                authorization: [{ actor: 'factory.manager', permission: 'active' }],
                data: {
                    purchase_option: {
                        token_factory_id: 100,
                        index: 1,
                        price: '50.00000000 UOS',
                        purchase_limit: 1,
                        promoter_basis_point: 100,
                        purchase_option_with_uniqs: {
                            transfer_tokens_receiver_account: null,
                            factories: [
                                {
                                    token_factory_id: 42,
                                    count: 3,
                                    strategy: 0,
                                },
                            ],
                        },
                        sale_shares: [],
                        maximum_uos_payment: '2.00000000 UOS',
                        group_restriction: [2305843009213693953, 3458764513820540932],
                        purchase_window_start: "2023-09-18T13:21:10.724",
                        purchase_window_end: "2023-11-18T13:21:10.724",
                        memo: '',
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
