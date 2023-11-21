---
title: 'Getting Started'

order: -9999
outline: [0,4]
---

# Docker Quickstart

The goal of this document is to get a development environment setup in as little time as possible.

## Prerequisites

-   [Docker for Windows](https://docs.docker.com/desktop/windows/install/)
-   [Docker for Linux](https://docs.docker.com/engine/install/ubuntu/)
-   [Docker for Mac](https://docs.docker.com/desktop/install/mac-install/)
-   [Git for Windows / Linux](https://git-scm.com/)
    -   Ensure that you install Git Bash

Make sure docker engine is up on your system:

```sh
docker --version
```

`Docker version 20.10.21, build baeda1f`

## Obtaining the Docker Image

Pull the docker image down from quay.io

```sh
docker pull quay.io/ultra.io/3rdparty-devtools:latest
```

_The above image tag may be out of date. Visit [our official quay.io repository](https://quay.io/ultra.io/3rdparty-devtools) to get the latest image tag._

## Starting / Stopping Image

Open your terminal (on Windows use `Git Bash`) and use the following command to create development tools container

```sh
docker run -dit --name ultra -p 8888:8888 -p 9876:9876 -v ~/ultra_workdir:/opt/ultra_workdir --name ultra quay.io/ultra.io/3rdparty-devtools:latest
```

::: warning
The above command will utilize ports 8888 and 9876. If those ports are occupied the docker will fail to create the container. You will have an option to change which ports will be used on your host machine later.
:::

After you created the container you realistically won't need to create it again. Existing container will be accessible under the name of `ultra`.

To stop the container without destroying it you can use the following command

```sh
docker stop ultra
```

## Accessing the Image

After you created the container you will be able to attach to it using the following command. It will also start the container if it is currently stopped (for Windows keep in mind to use `Git Bash` still).

```sh
docker start ultra && docker attach ultra
```

## Accessing Docker Volume

The docker container has a shared directory located somewhere in your operating system.

-   Windows: `C:\\Users\\Username\\ultra_workdir`

-   Linux: `~/ultra_workdir`

-   Mac OS: `~/ultra_workdir`

-   Docker Container: `/opt/ultra_workdir`

## Creating a Smart Contract

Create a directory in the `ultra_workdir` directory called `contracts` with a file inside called `hello.cpp`.
- You can do it either on your host machine (Windows/Linux) or inside the docker image using your editor of choice (`nano` is preinstalled, other editors require manual installation)
- You also have an option to use [VSCode Environment](./development-environment.md)

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

Inside of the docker image (using the terminal that is attached to the `ultra` container) navigate into the `contracts` directory, and run the following command.

```
mkdir -p /opt/ultra_workdir/contracts && cd /opt/ultra_workdir/contracts
```

```
cdt-cpp -abigen -o hello.wasm hello.cpp
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

Test files are written in JavaScript and must have `ultra_test.js` suffix (e.g. `hello.ultra_test.js`).

Now try adding the following code snippet to `hello.ultra_test.js`. You should place the file `ultra_workdir/tests` directory like the file tree in the section above suggests

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
ultratest
```

If you did everything properly you should see the test line stating `All Tests Passed`

::: info
If the test run fails or gets stuck you can kill it using the ^C (Ctrl + C) termination command.
:::
