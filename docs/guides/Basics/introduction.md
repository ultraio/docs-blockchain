---
title: 'Basics Introduction'
deploy: ['staging', 'mainnet']
order: -99999
oultine: [0, 4]
---

# Introduction

Here will cover some of the basics that are necessary for working with the Ultra Blockchain.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
    - Docker is used to easily pull our latest binaries

### Obtain Latest Image

Pull the docker image down from quay.io

You can run this command in any Terminal or CLI application after installing [Docker](https://docs.docker.com/get-docker/).

```sh
docker pull quay.io/ultra.io/3rdparty-devtools:latest
```

### Start Docker Container

After pulling the image down, you can start the container and access it by running the following command in any Terminal or CLI application.

```sh
docker run -it --name ultra -p 8888:8888 -p 9876:9876 quay.io/ultra.io/3rdparty-devtools
```

## Sections

1. [Start a Local Chain](./start-local-chain.md)
2. [Using CLEOS](./using-cleos.md)
3. [Pushing Transactions](./pushing-transactions.md)
4. [Creating a Wallet](./creating-a-wallet.md)
5. [Creating a Testnet Account](./create-a-testnet-account.md)