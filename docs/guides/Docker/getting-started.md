---
title: 'Getting Started'
deploy: ['staging', 'mainnet']
order: -9999
outline: [0,4]
---

# Docker Quickstart

The goal of this document is to get a development environment setup in as little time as possible.

## Prerequisites

-   [Docker for Windows](https://docs.docker.com/desktop/windows/install/)
-   [Docker for Linux](https://docs.docker.com/engine/install/ubuntu/)
-   [Git for Windows / Linux](https://git-scm.com/)
    -   Ensure that you install Git Bash
- [Clone Ultra Blockchain Dev Tools](https://github.com/ultraio/blockchain-development-tools)

## Obtaining the Docker Image

Pull the docker image down from quay.io

```sh
docker pull quay.io/ultra.io/3rdparty-devtools:latest
```

_The above image tag may be out of date. Visit [our official quay.io repository](https://quay.io/ultra.io/3rdparty-devtools) to get the latest image tag._

## Starting / Stopping Image

Inside of the `blockchain-development-tools` directory run the following command to start the image.

```sh
./scripts/docker/start_docker.sh
```

Alternatively you can optionally specify a full docker image URL with a tag:

```sh
./scripts/docker/start_docker.sh quay.io/ultra.io/3rdparty-devtools:0.1.1
```

To stop existing development docker instance use the stop script

```sh
./scripts/docker/stop_docker.sh
```

## Accessing the Image

If the `start_docker` script does not attach automatically you can use the following command to get access inside the container.

**Linux**

```sh
docker exec -it ultra-dev-environment bash
```

**Windows**

```sh
winpty docker exec -it ultra-dev-environment bash
```

## Accessing Docker Volume

The docker container has a shared directory located somewhere in your operating system.

-   Windows: `C:\\Users\\Username\\ultra_workdir`

-   Linux: `~/ultra_workdir`

-   Docker Container: `/opt/ultra_workdir`

## Creating a Smart Contract

Create a directory in the `ultra_workdir` directory called `contracts` with a file inside called `hello.cpp`.

```cpp
#include <eosio/eosio.hpp>

using namespace eosio;

class [[eosio::contract]] hello : public eosio::contract {
  public:
      using contract::contract;

      [[eosio::action]]
      void world( eosio::name name ) {
        print("Hi, ", name);
      }
};
```

### Compiling a Smart Contract

Inside of the docker image navigate into the `contracts` directory, and run the following command.

```
cd /opt/ultra_workdir/contracts
```

```
eosio-cpp -abigen -o hello.wasm hello.cpp
```

## Writing your first test

### Setup directory Structure

This directory structure should be reflected inside of the docker image.

```sh
/opt
  /ultra_workdir
    /contracts
      |- hello.wasm
      |- hello.abi
      |- hello.cpp
    /tests
      |- hello.ultra_test.js
```

### Write Tests

Test files are written in JavaScript and must have `ultra_test.js` suffix.

```js
module.exports = class test {
    constructor() {}

    // Deploys ultra system contracts to the nodeos instance
    requiresSystemContracts() {
        return true;
    }

    // What account to create, and what contract to deploy on it
    importContracts() {
        return [{ account: 'smrtcntract1', path: '../contracts', contract: 'hello' }];
    }

    // Created after importing contracts
    requiredAccounts() {
        return ['account1', 'account2', 'account3', 'account4'];
    }

    tests({ assert, endpoint, cleos, rpc, api, ecc, keychain }) {
        assert(true, "This will never trigger because it is true.");

        // Should always return an object of async tests
        return {
            'should execute transaction': async () => {
                const result = await api.transact({
                    actions: [{
                        account: 'smrtcntract1', // The smart contract account
                        name: 'world', // Name of the action
                        authorization: [
                            // actor -> The account performing the action
                            // permission -> Permission required for that account. Usually 'active'.
                            { actor: 'account1', permission: 'active' },
                        ],
                        // This is an exact match of the data to send to the 'action'.
                        // In the example below the 'hello' action will take a name parameter.
                        data: {
                            name: 'account1',
                        },
                    }],
                },{ blocksBehind: 3, expireSeconds: 3600 });
            },
        };
    }
};
```

### Running Tests

Inside of the docker image run the following commands.

```sh
cd /opt/ultra_workdir
```

```
ultratest -D
```

If you are experiencing issues with deployment try appending `-P` as a parameter.
