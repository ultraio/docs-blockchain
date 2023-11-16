---
title: 'RAM Policy'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -95
---

# RAM Policy

The RAM pricing curve utilizes a Bancor algorithm which leads the RAM prices to go up when the RAM supply goes down. Ultra ensures that all blockchain users share the same RAM market and thus the price is the same for every account wishing to utilize it.

Ultra can adjust RAM prices by reserving or releasing some of the RAM from the market and by changing the parameter called connector weight which steepens the curve.

## RAM purchase rules

Any account can purchase RAM using buyram or buyrambytes action. RAM is purchased with UOS tokens.

By default new accounts can only purchase and have in use up to 10 KB of RAM. Ultra can change this limit with setramthresh action.

Once the account provides the KYB information the maximum RAM purchase limit is removed. Ultra requires that an account not have more than 10 MB of RAM that is not in use. If an account has more than 10 MB of RAM purchased but unused then this account will be unable to purchase more RAM. This limit can be changed with setramthrkyc.

For developers, a special whitelist is maintained which allows Ultra to set any desired unused RAM limit for specified accounts. Accounts are whitelisted with whitelistact and removed from whitelist with unwhtlistact actions.

Only up to 10 MB can be purchased by any account in a single buy operation. Ultra can change this limit with setramprchlm.

## RAM gifting

Ultra can gift RAM using giftram action to any account bypassing any RAM limitations from the section above. Gifting RAM requires that some of the RAM is still reserved by Ultra and not available on the market.

## RAM fees

Each RAM purchase has a UOS token fee based on the percent of tokens used for the purchase. By default 5% fee is applied to each RAM purchase. Ultra can alter this fee with setramfee action.

## RAM refund policy

Accounts may decide to refund the RAM they have purchased using refundram action and in this case the refund price is calculated based on the amount of token spent by this account for RAM purchases and the amount of RAM gifted to this account by Ultra. This allows Ultra to fairly refund the RAM purchase and avoid RAM price speculation since the refund amount does not depend on the current RAM price. Subtracted fees are not refunded.

## RAM reservation and supply increase

The default eosio.system contract setting specifies that 32 GB are available on the RAM market from the start and 32 GB are reserved by Ultra. Any additional RAM added to the system using setram action will go to Ultra first. Ultra may decide to gift ram to an account with giftram or release RAM into the market by returning it using the rtnrambytes action. Ultra can manually reserve some RAM with resvrambytes action. Additionally the setramrate action can be used by Ultra to add a specified amount of bytes to the RAM market with each block.

## Sponsored objects

Each non-system blockchain account has a sponsored tier assigned to it. This tier specifies the amount of account information objects (permissions, keys) that can be stored by this account for free (Ultra uses its RAM for storage). Ultra can specify a default tier for new accounts with setdeftier action, can create new tiers using createtier, and update existing tiers with updatetier. Only Ultra can change the accounts tier using the settier action and can disable this sponsored system for specific users with the settiereligb action.

The goal of this system is to allow regular users to have some necessary account information stored free of charge and to encourage users to utilize the blockchain without spending UOS tokens.