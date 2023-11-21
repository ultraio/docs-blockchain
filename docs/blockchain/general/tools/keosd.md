---
title: 'Keosd Usage'

order: 1
outline: [0,4]
---

# Keosd Usage

Keosd is a program that runs in the background to help store priate keys, and sign transactions. It's a secure and encrypted key storage program.

## Who is it for?

* Developers
* Advanced Users

## Obtaining Keosd

We have created a Docker image that has pre-created scripts, tools, and pre-packaged binaries. Keosd is already included inside of the Docker image.

Individual binaries are not currently available for download.

[Docker Image Usage](../../../tutorials/general/docker/docker-image-usage.md)

## Usage

Inside the Docker Container the following can be executed for general usage.

```sh
keosd --help
```

### Basic Usage

Keosd can be ran by itself without even specifying `help`. It by default creates all wallet files in the `~/eosio-wallet` directory.

It is highly suggested to use `cleos` in tandem with `keosd`, or let `cleos` run `keosd` by itself. Using any `cleos wallet` functions will automatically perform all `keosd` actions.


### Wallet Infinite Unlock

If you find a need for a wallet that almost never locks itself you will need to stop the keosd service first.

```sh
pkill -f keosd
```

keosd can be ran by itself with a specific timeout for the unlock, and the command below will also run it in the background.

```sh
nohup keosd --http-server-address=localhost:8899 --http-max-response-time-ms=30000 --unlock-timeout=999999 &
```