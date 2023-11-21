---
title: 'Environment Variables'

outline: [0, 4]
order: 6
---

# Environment Variables

Each section of this file is an environment variable name.

For anything that has to do with an ID you want to turn on the Discord Developer Mode.

This option can be found under:

```sh
User Settings > Advanced > Developer Mode
```

IDs can be obtained by right-clicking server icons, roles, etc. and copying the ID.

### DISCORD_BOT_TOKEN

Obtained under the bot tab in the [discord developer panel](https://discord.com/developers/applications).

### APPLICATION_ID

Obtained under the general information tab in the [discord developer panel](https://discord.com/developers/applications).

### GUILD_ID

ID of the dicord server where this bot is added.

### WEBSERVER_PORT

What port to run the web server under.

Usually `3000`.

### CNAME

Change this to a real URL, or the address of your host if deploying into production. This is the actual URL pointing to the bot.

### MONGODB_URL

Connection string to your mongodb instance. If you need a free host MongoDB Atlas provides small databases for free; and it's perfect for our little bot.
