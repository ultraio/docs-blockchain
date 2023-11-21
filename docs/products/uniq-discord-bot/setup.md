---
title: 'Setup Instructions'

outline: [0, 4]
order: 2
---

# Setup Instructions

## Prerequisites

-   [NodeJS 16+](https://nodejs.org/en/download)
-   [Discord Bot Setup](./setup.md)

## Clone the repository

You'll start by cloning the repository.

```sh
git clone https://github.com/ultraio/ultra-discord-uniq-roles-bot
```

Navigate into the newly created folder

```sh
cd ultra-discord-uniq-roles-bot
```

Install npm packages

```sh
npm install
```

Create an `.env` file in the `packages/server` folder.

Fill it out with the environment variable information.

See the [Environment Variables](./environment-variables.md) section for more info.

See the [Discord Bot Setup](./setup.md) to deploy your bot.

```sh
DISCORD_BOT_TOKEN=
APPLICATION_ID=
GUILD_ID=
WEBSERVER_PORT=3000
CNAME=localhost
MONGODB_URL=mongodb://USERNAME:PASSWORD@HOST
```
