---
title: 'Running the Bot'
deploy: ['staging', 'mainnet']
outline: [0, 4]
order: 5
---

# Running the Bot

Depending on your environment and usecase you will want to use one of the following commands to start the bot.

## Production

Builds both Client & Server, then Starts the Bot.

HTML files are automatically built to `packages/server/dist/html`.

```sh
npm run start -ws
```

## Development

Use this if you are making changes.

Ultra Wallet requires an HTTP(s) server to work with it.

This starts a Vite Server with local https, and the server without feeding the built pages through the endpoint.

```sh
npm run dev -w packages/server
```

### Docker

These are general purpose docker instructions based off this repository.

Start by adding your `.env` file to `packages/server/.env`

Run the following to start the bot.

```sh
docker build -t uniqbot .
```

```sh
docker compose up
```
