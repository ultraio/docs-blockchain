---
title: 'Basics Introduction'

order: -99999
oultine: [0, 4]
prev: false
---

# Introduction

Ultra's blockchain is fast, easy to use, and friendly for developers. There are a few concepts that you as a developer will need to get to grips with so that you can successfully integrate our stack into your application.

Here will cover some of those basics that are necessary for working with the Ultra Blockchain.

## Prerequisites

You'll be running images that we provide inside of Docker, which instantiates VMs for use in development or production environments.

-   [Docker](https://docs.docker.com/get-docker/) - Provided for free for Linux, Mac, and Windows

### Obtain Latest Image

Ultra does not provide direct access to our proprietary source code. Instead, we provide images which can be run in Docker. These images provide compiled versions of all the software you'll need to get up and running.

To obtain the latest image, pull the docker image down from quay.io

You can run this command in any Terminal or CLI application after installing [Docker](https://docs.docker.com/get-docker/).

```sh
docker pull quay.io/ultra.io/3rdparty-devtools:latest
```

Depending on your internet connection, this may take a while to complete.

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
