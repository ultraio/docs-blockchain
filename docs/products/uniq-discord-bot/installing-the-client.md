---
title: 'Installing the Client'

outline: [0, 4]
order: 4
---

# Installing the Client

This is where the HTML data lives, and includes all the necessary files for a small single page application.

This utilizes Vite to create a single page application that utilizes Vue.

## Commands

From the root directory of this monorepo; run any of the following commands.

### Vue Development Server

Spins up a localhost server to perform development. This spins up a Vite server on port 3000 (usually) and allows you to make changes and view them in your browser.

```sh
npm run vue-dev -w client
```

### Build

Builds the client-side into a single page application, and pushes it to the server folder under packages/server/dist/html.

```sh
npm run build -w client
```

## Folder Structure

This is a traditional Vite + Vue folder structure with TypeScript.

Everything is inside of the src directory.
