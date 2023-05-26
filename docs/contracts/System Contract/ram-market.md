---
title: 'RAM Market'
order: 3
deploy: ['staging', 'mainnet']
---

# RAM Market

## How it works

Ultra maintains a **RAM reserve** from the available system RAM. The RAM in the reserve can be distributed by Ultra and can be offered to Ultra and certain developers for free. RAM may only be reserved by Ultra and once it is reserved it is removed from the total RAM supply. Reserved RAM is not assigned to anyone, nor it can be sold to anyone.

The initial 5k of RAM is free for the **account** creation which stores the basic account information such as the account name, active permission setup, and the additional RAM/POWER quota and usage which is around 3,871 bytes total. Developers pay for their users’ RAM usage, and they can authorize a contract to act on their behalf (32 bytes). They can also add one more keys to owner or active permissions (82 bytes). Beyond that account owners will need to buy more RAM themselves. One can’t purchase more RAM if they already have 10 MB or more of unused RAM.

Ram is priced in USD, but paid in UOS. There is a 10% ram fee which is charged at the moment of purchase. Users may **purchase RAM** at a flat rate. It’s expensive, so that users only buy when they truly need it, and they won’t need much. There will be a cap of around 20K which should be enough for most account administration needs. To calculate the RAM price Ultra uses a price curve that allows Ultra to adjust the starting price and control how fast price increase as a user owns more RAM. The current price curve is Price = C + K \* RAM. Price unit is converted from USD/KB to UOS/KB, C is used to control the starting price, K is used to control how fast it increases. Ultra can adjust the RAM price by changing the price/cost curve parameters, or even changing the curve type itself. It will only affect the RAM purchasing policy and won't affect the RAM selling policy.

The **selling RAM** policy is not changing. Total UOS paid will be stored and used for calculating refunds. When selling RAM, the total UOS paid will be proportionally refunded to the user:

```
Refund = Total_RAM_Payment * (Delta_RAM / RAM)
```

These differences between buying and selling RAM are introduces to avoid potential speculation due to price adjustment. If we use the same policy for buying and selling, it is possible for developers to make money by selling ram. With the independent selling policy, there is **no speculation**. Users always get proportional to what they have paid so far. Also, a developer cannot purchase more RAM until a full 10 MB of RAM are used up. Preventing developers from over-purchasing this scarce asset.

When a **developer purchases RAM** the system is queried for a price. There is an independent price curve for an account that is registered as a developer. The RAM pricing at the beginning of this curve is very cheap but gets more expensive as they purchase more RAM. When purchased in bytes, users needs to get an invoice first. When purchased with tokens or sold there’s also no need for an invoice. User can choose to purchase without getting a quote. In this case the purchase will use real time conversion rate. If a quote is generated before purchase then the user is guaranteed to get the RAM at the quoted price.

A developer can **refund** their **RAM** anytime and get back proportional to what they have paid. In case of account inactivity Ultra reserves the right to take back the unused RAM (only the portion of RAM that was gifted by Ultra) of inactive developer account, and refund in UOS will be returned to the account. An **inactive developer account** is one that submits no transactions (pushing or receiving actions) in a predefined period, like one year. Releasing user's RAM is a very sensitive process that requires due diligence. Even if the developer account is inactive, user might still want to keep their data stored there and query it from time to time. The conclusion is that used RAM can be released by the developer or DAPPs' users themselves, not by a third party. Malicious contracts’ data can be wiped out by BPs.

There can be multiple blockchain accounts associated with one ultra platform account, especially for developers. Such blockchain accounts are linked together on-chain by their IDs, and such accounts can purchase RAM and will be billed as if they are a single account.

##  Relevant actions

[buyram - buy RAM with UOS](./System%20Actions/buyram.html)

[buyrambytes - buy RAM with UOS](./System%20Actions/buyrambytes.html)

[refundram - buy RAM with UOS](./System%20Actions/refundram.html)

## Relevant tables

[userres - resource-allocation-per-account](./data-structures-overview.md#userres-resource-allocation-per-account)
