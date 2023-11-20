---
title: 'Request Fungible Token'
deploy: ['staging', 'mainnet']
outline: [0, 4]
order: -99
---

# Request Fungible Token

## Prerequisite

By design, we do not allow developers to freely create new Fungible Token (FT) on our blockchain since developers might take advantage of our blockchain and spam the network by sending their FT to everyone. This action first of all wastes our RAM that can be put to much better use, and second of all it will annoy our users with a lot of junk FT.

However, Ultra still allows developers to create their own FT on our network if they make a request and meet our requirements.

## Requirements

-   You need to own a developer account before making a request. Please refer to this [process](../../blockchain/general/tools/cleos.md#creating-an-account).
-   Token you want to create must meet our standards. Please refer below for more info.

## Make a request

-   Send request email to [developers@ultra.io](developers@ultra.io)

-   Or go to our [Discord](https://discord.com/invite/mkfkJexbV3).

-   Navigate to one of our development channels.

![](/images/discord-dev-channels.png)

-   Create an FT creation request with your account. You can follow this example:

```sh
FT Creation Request
Account: 1ab2cd3ef4gh
Token Max Supply: 100000.000000 TOKEN
```

-   If your token meet our requirements, we will process your token creation, and issue the token to your requested account.

_Note_: Since creating token requires Ultra and Block Producers reviews, it might take up to 2-5 working days once your request is approved.

## Token Requirements

-   Token Symbol
    -   Can only be characters in capital
    -   Can not have more than 7 characters
    -   Must meet our community standards and regulations.
    -   Must not be taken yet.
-   Token Supply
    -   Cannot be 0
    -   The maximum supply without decimal is `2^62 - 1` or `4611686018427387903`
    -   You can define how many decimals you can have by moving the decimal point on your desired max supply.
    -   The maximum number of digits you can have before the decimal point is `18`.

Examples:

-   Valid Token
    -   18273.21233 TEST
    -   213.0 BDGA
    -   123467889 A
-   Invalid Token
    -   1000 G4H%A - Token symbol contains invalid character.
    -   1000.0000 ABCDEFGH - Token symbol is too long
    -   17268.9900 SEX - Token symbol might not meet our standards.
    -   1000.000 UOS - UOS is our core token and it already taken.
    -   0 HAGD - Max supply need to be larger than 0.
    -   10000.0000000000000000 ABC - Max supply without decimal point is larger than `4611686018427387903`.
