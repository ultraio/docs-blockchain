---
title: 'Introduction'
deploy: ['staging', 'mainnet']
order: -99999999
---

# Contract Builder Overview

The contract builder allows you to easily build smart contracts in various ways.

You can drag & drop, or use the `cli` directly, or even integrate it as a library into your own tools.

The contract builder comes in three different flavors.

* Library
* Global `cli` application
* Binary File

Each of these are available to download from the main repository.

Usage as a library can be viewed inside of the README in the official repository.

[https://github.com/ultraio/contract-builder](https://github.com/ultraio/contract-builder)

## Supports

* cdt-cpp
* cmake

## Dependencies

* [Docker](https://docs.docker.com/engine/install/)


## Installing with NodeJS

Keep in mind we use at least Node v16+ for this.

```
npm i -g @ultraos/contract-builder
```

## Obtaining Binary Files

Binaries can be [obtained here](https://github.com/ultraio/contract-builder/releases)

## Usage

If you are on windows, you can drag / drop the folder onto the binary file to compile.

```
contract-builder ./some-folder/some-example-contract-folder
```

### Build Parameters

```sh
contract-builder -i ./test/example-contract -b "-DTEST=true"
```

## Examples

See [https://github.com/ultraio/contract-builder/tree/main/test](https://github.com/ultraio/contract-builder/tree/main/test) for example contracts to utilize with this project.
