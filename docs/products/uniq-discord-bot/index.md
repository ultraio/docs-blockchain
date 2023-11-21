---
title: 'Introduction'

outline: [0, 4]
order: 1
---

# Ultra Uniq Discord Bot

![](/images/discordbot/discordbot.png)

## What is the Discord Bot?

Ultra has created a Discord Bot which allows you to verify your Ultra Mainnet account, and then use Uniqs (NFTs) as keys which open access to gated channels. In short, if you have the right Uniq, you can have access to special content on a Discord server.

## Where do you get the Discord Bot?

Ultra provides both the [Github repository](https://github.com/ultraio/ultra-discord-uniq-roles-bot) for the Discord Bot, and the [Quay.io image](https://quay.io/repository/ultraio/discord-uniq-roles-bot?tab=tags).

## Summary of Use

-   An Administrator of the server will assign a factory to a discord role.
-   A user uses a command in your Discord Server to bind their Discord Account to the Ultra Blockchain.
-   A user will then receive a private message with a prefilled URL that points to a WebServer that this bot is running alongside itself.
-   The user will then visit the attached URL.
-   The user will either be prompted to connect to the Ultra Wallet extension, or obtain the Ultra Wallet Extension.
-   Upon connecting they will be asked to sign a message with their blockchain account.
-   A callback URL will be invoked back to this bot with the signed message.
-   We now have identified that the user owns the blockchain account and we can store that into a database.
    -   Stores the Discord ID
    -   Stores the Blockchain ID
    -   Stores the Signature
-   After the internal logic of the bot will lookup the blockchain id and bind roles to the discord user based on what Uniq's they own and have in their inventory.
-   If a matching token factory is found in the user's inventory they are given a discord role that matches it.
-   Perioidic updates are done to add / remove roles based on users who are stored in the Database.
