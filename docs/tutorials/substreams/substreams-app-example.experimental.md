---
title: 'Substreams application example'

order: -9999
outline: [0,4]
---

# Substreams Application Example

If you follow the deployment of `substreams charts` from [Getting Started](getting-started.experimental.md), you should now have a working `Substreams` cluster locally.

However, this local cluster will only help you to extract block data from `producer` pod or a blockchain if you connect to a public endpoint instead.

To fully make use of these block data you will need something called `Substreams Packages` which will be used like a filter to extract exactly the data you need. For example:
- Get transaction data from a block
- Find action data based on action name and account
- Find transaction by hash
- etc...

Then with these filtered data, you can use it by storing it in a database, displaying it in an explorer, etc...

You can write your own [Substreams package](https://substreams.streamingfast.io/#develop-substreams), or you can go to [Pinax Substreams package](https://github.com/pinax-network/substreams) for Ultra compatible `Substreams` package.

## Prerequisites

Here is an example that demonstrates how you can make use of `Substreams` package and extract `eosio.token` `transfer` action from `Substreams` cluster.

The example will be a `NodeJS` application written in `Typescript` with `yarn` as package manager, so make sure you have these installed before starting.
- [Install NodeJS for Windows/macOS with Installer](https://nodejs.org/en/download)
- [Install NodeJS for Windows/macOS/Linux with Package Manager](https://nodejs.org/en/download/package-manager)
- Install `yarn` (you can skip if you prefer `npm`)
```sh
npm install --global yarn
```

This application will make use of 2 packages:
- [substreams-js](https://github.com/substreams-js/substreams-js)
- [substreams-node](https://github.com/substreams-js/substreams-node)

## Setup project

Setting up a `Typescript` project

Create a new directory and navigate to it

Initialize project
```sh
yarn init -y
```

Install `Typescript`
```sh
yarn add -D typescript
```

Initialize `Typescript`
```sh
npx tsc --init
```

A new `tsconfig.json` will be created. For the sake of the tutorial, please use your text editor and update the project as below.
```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "esnext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "moduleResolution": "node",
    "baseUrl": "src",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

Add these configurations to `package.json`
```json
  "type": "module",
  "scripts": {
    "start": "tsc && node dist/index.js"
  }
```

Install `substreams` dependency
```sh
yarn add @substreams/node
```

## Adding example script
Make a new directory name `src` and add a new file called `index.ts`.

```Typescript
import { createGrpcTransport } from "@connectrpc/connect-node";
import {
  createRegistry,
  createRequest,
  fetchSubstream,
  isEmptyMessage,
  streamBlocks,
  unpackMapOutput,
} from "@substreams/core";

const PACKAGE = "https://github.com/pinax-network/substreams/releases/download/eosio.token-v0.13.2/eosio-token-v0.13.2.spkg";
const OUTPUT_MODULE = "map_transfers";

const manifest = await fetchSubstream(PACKAGE);
const registry = createRegistry(manifest);
const transport = createGrpcTransport({
  baseUrl: "http://localhost:9000",
  httpVersion: "1.1",
  interceptors: [],
  jsonOptions: {
    typeRegistry: registry,
  },
});

const request = createRequest({
  substreamPackage: manifest,
  outputModule: OUTPUT_MODULE,
  productionMode: true,
  startBlockNum: 0,
  stopBlockNum: "+100",
});

for await (const response of streamBlocks(transport, request)) {
  const output = unpackMapOutput(response, registry);
  if (output !== undefined && !isEmptyMessage(output)) {
    console.dir(output.toJson({ typeRegistry: registry }));
  }
}
```

Some important configurations:
- `PACKAGE` - This is the released package from [Pinax Nework Substreams Package Release](https://github.com/pinax-network/substreams/releases). We used `eosio.token` package since it's compatible with Ultra's chain.
- `OUTPUT_MODULE` - This is a data filter name. In this example, we will use `map_transfers` which is a filter for any transaction that contains `transfer` action from `eosio.token` contract.
- `baseURL` - this is the service endpoint of `substreams-tier1` component. The request will be sent to this component and the result will be sent back.
- `startBlockNum` - The block number where the search will start.
- `stopBlockNum` - The block number where the search will end. If you use `+100`, it will stop after 100 blocks.

This script will search all transactions from the start block to the end block, then it will output any transaction that contains `tranfer` action from `eosio.token` contract.

## Run the app

Make sure you follow the [Getting Started](./getting-started.md) and start a local cluster.

Once all the pods are ready, you need to forward the `substreams-tier1` service port for testing.
```sh
kubectl port-forward service/substreams-tier1 9000:9000
```
```
Forwarding from 127.0.0.1:9000 -> 9000
Forwarding from [::1]:9000 -> 9000
```

**Note**: Make sure to keep this console tab open to maintain the connection.


Finally, you run the application with
```sh
yarn start
```

With the default configurations, you should see this result in your console.
```sh
{
  items: [
    {
      trxId: '23ed3a9e921dbad087861d9968b575a1102594d7411e04700043d40f08d550ad',
      actionOrdinal: 1,
      contract: 'eosio.token',
      action: 'transfer',
      symcode: 'UOS',
      from: 'eosio',
      to: 'ultra.eosio',
      quantity: '1000000000.00000000 UOS',
      precision: 8,
      amount: '100000000000000000',
      value: 1000000000
    }
  ]
}
{
  items: [
    {
      trxId: '2239bc9796c6776d1953ad8e6ff444e5d81c261121627e03517abcc462323beb',
      actionOrdinal: 1,
      contract: 'eosio.token',
      action: 'transfer',
      symcode: 'UOS',
      from: 'ultra.eosio',
      to: 'ultra',
      quantity: '100000000.00000000 UOS',
      precision: 8,
      amount: '10000000000000000',
      value: 100000000
    },
    {
      trxId: '8418539abfa1f147e214221f412b4cd78b26efa0fba1e6cdee2e9951911ee7f6',
      actionOrdinal: 1,
      contract: 'eosio.token',
      action: 'transfer',
      symcode: 'UOS',
      from: 'ultra.eosio',
      to: 'eosio',
      quantity: '100000000.00000000 UOS',
      precision: 8,
      amount: '10000000000000000',
      value: 100000000
    }
  ]
}
```