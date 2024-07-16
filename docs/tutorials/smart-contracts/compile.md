---
title: 'Tutorial - Compile Smart Contracts using the Ultra Smart Contract Toolkit Extension'

outline: [0, 5]
order: -97
---

# Tutorial - Compile Smart Contracts using the Ultra Smart Contract Toolkit Extension

Compiling smart contracts is very simple with the [Ultra Smart Contract Toolkit](https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp).

## Prerequisites

-   Have installed the Ultra Smart Contract Toolkit Extension. Refer to [Install and Setup the Ultra Smart Contract Toolkit Extension Tutorial](./index.md) for more information.

::: info
The tutorial is up-to-date with version 1.4.2 of the VSCode extension
:::

## Goal

The goal of this tutorial is to compile smart contracts using the Ultra Smart Contract Toolkit extension.

## How to Compile

There are **two ways** to compile your smart contract.

First way is to compile using the VS Code Status Bar. Make sure you have the `.cpp` file open and selected and click `Compile` at the bottom of VSCode.

![](./images/compile-button.png)

Second way to compile is to use the `Command Palette (F1)` and search for `Ultra: Build Contract`.

![](./images/command-palette-build.png)

## Successful Compilation

If the compilation is successful, you won't see any `errors` in the output window for `ultra-cpp`.

![](./images/successful-build.png)

## Bad Compilation

If the compilation is successful unsuccessful, you will see various errors such as the ones below.

![](./images/unsuccessful-build.png)

## Compiled Files

Once the files are compiled you should see an `abi` and a `wasm` file next to your compiled smart contract.

![](./images/compiled-files.png)

For more information about `.abi` and `.wasm` files see the [official EOS Network Foundation page](https://docs.eosnetwork.com/docs/latest/quick-start/build-and-deploy#what-does-a-smart-contract-build-to)

## What's next?

The next tutorial will cover deploying smart contracts using the VS Code extension. See [Tutorial - Deploy Smart Contracts using the Ultra Smart Contract Toolkit Extension](./deploy.md) for more information.
