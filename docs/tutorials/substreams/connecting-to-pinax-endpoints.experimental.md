---
title: 'Connecting to Pinax Substreams endpoints'

order: 3
outline: [0,4]
---

# Connecting to Pinax Substreams endpoints

Pinax provides firehose/SubStreams endpoints for several blockchains, including EOS based ones.  
To connect to thier endpoints, you can have an account on Pinax App Platform and get an API key.  
See [Introducing the New Pinax App, a Better Way to Manage Your Firehose and Substreams Services - The Official Pinax Blog](https://blog.pinax.network/pinax/introducing-the-new-pinax-app-a-better-way-to-manage-your-firehose-and-substreams-services/) for the details.  

## Create an account on Pinax App Platform and create a project

1. Visit https://app.pinax.network. The first time you visit the site, you will be directed to `Authorize Pinax` page to create an account using GitHub login.  
2. Create a new project, where you will get your API key and JWT.  
3. Enter the project and select `Substreams` tab, and push `View configurations` button.   
4. Select `ENDPOINT URL`. For the purpose of this tutorial, select the endpoint for EOS mainnet, ` https://eos.substreams.pinax.network:443`  

## Running Substreams CLI

1. Select `cURL` tab.
2. You may install [the Substreams CLI](https://substreams.streamingfast.io/getting-started/installing-the-cli) to continue.  
3. Follow the below instructions and execute somme commands in the terminal.  
```sh
# Set your API Key
export PINAX_KEY=(your API key)
# Set your SUBSTREAMS_API_TOKEN
export SUBSTREAMS_API_TOKEN=$(curl https://auth.pinax.network/v1/auth/issue -s --data-binary '{"api_key":"'$PINAX_KEY'"}' | jq -r .token)
# Run Substreams CLI
substreams run -e eos.substreams.pinax.network:443 https://github.com/pinax-network/substreams/releases/download/blocks-v0.1.0/blocks-v0.1.0.spkg map_blocks -s -10
```

## Running a JavaScript example

You can see the sample code, `substreams.js`, in `JavaScript` tab.  
To run `substreams.js`:
1. Create a folder and store `.env` and `substreams.js` in it.
2. Prepare `package.json` and execute `npm install`.

Below is a working example of files.  
- `.env`  
See the above for getting `SUBSTREAMS_API_TOKEN`.  
```
MANIFEST=https://github.com/pinax-network/substreams/releases/download/blocks-v0.1.0/blocks-v0.1.0.spkg
SUBSTREAMS_URL=https://eos.substreams.pinax.network:443
SUBSTREAMS_API_TOKEN=(your API token)
```

- `package.json`
```json
{
  "name": "substreams-tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "substreams.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@substreams/core": "^0.1.19",
    "@substreams/manifest": "^0.0.9",
    "@substreams/node": "^0.2.2",
    "dotenv": "^16.4.5"
  },
  "type": "module"
}
```

- `substreams.js`
```js
import { createRegistry, createRequest } from "@substreams/core";
import { readPackage } from "@substreams/manifest";
import { BlockEmitter, createDefaultTransport } from "@substreams/node";
import dotenv from "dotenv"
dotenv.config();
const { MANIFEST, SUBSTREAMS_URL, SUBSTREAMS_API_TOKEN } = process.env;

// Read Substream
const substreamPackage = await readPackage(MANIFEST);

// Connect Transport
const headers = new Headers({ "User-Agent": "@substreams/node" });
const registry = createRegistry(substreamPackage);
const transport = createDefaultTransport(SUBSTREAMS_URL, SUBSTREAMS_API_TOKEN, registry, headers);
const request = createRequest({substreamPackage, outputModule: "map_blocks", startBlockNum: -1});

// NodeJS Events
const emitter = new BlockEmitter(transport, request, registry);

// Session Trace ID
emitter.on("session", (session) => {
  console.dir(session);
});

// Stream Blocks
emitter.on("anyMessage", (message, cursor, clock) => {
  console.dir(message);
  console.dir(cursor);
  console.dir(clock);
});

// Start Emitter
await emitter.start();
console.log("✅ Done")
```
