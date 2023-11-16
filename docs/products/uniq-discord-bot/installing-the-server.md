---
title: 'Installing the Server'
deploy: ['staging', 'mainnet']
outline: [0, 4]
order: 3
---

# Installing the Server

This is where the backend data lives. This handles database writing, verifying signatures, and Discord commands.

## Commands

From the root directory of this monorepo; run any of the following commands.

### Dev

Spins up a localhost server to perform development against for the server-side.

```sh
npm run -w server
```

### Build

Builds the client-side into a single page application, and pushes it to the server folder under packages/server/dist/html.

```sh
npm run build -w server
```

## Folder Structure

The main logic lives inside of the `src/services` folder.

The bot will not start without starting every service successfully.

### services/blockchain

Handles various calls to the ultra main network chain

### services/database

Handles writing to a MongoDB collection for an individual user, or a token factory binding to a discord role

### services/discord

Handles all slash commands that are integrated with discord

### services/express

Handles feeding the compiled HTML static site to users who access the available endpoint that is provided by this bot

### services/messageProvider

Generates cached messages which are used to help identify a signature after a signature is signed by a blockchain account

### services/users

Handles refreshing user data and inventories and rebinding roles.
