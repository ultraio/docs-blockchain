---
title: '2. Smart Contract Setup'

outline: [0, 5]
order: -98
---

# Smart Contract Setup

## Prerequisites

-   [Docker](https://docs.docker.com/engine/install/)
-   [VSCode](https://code.visualstudio.com/download)
    -   [C/C++ Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
    -   [Ultra.io Smart Contract Toolkit Extension](https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp). Refer to [Ultra.io Smart Contract Toolkit Extension Installation](../../products/smart-contract-toolkit/index.md) to install the extension.

## Goal

The goal of this tutorial is to get started with writing smart contracts.

## Scaffolding

Depending on where you want to start your project. Always start with a workspace folder and open it in VSCode.

![](./images/select-project-folder.png)

Once you have the [Ultra.io Smart Contract Toolkit](https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp) installed, you can easily create a starting template.

Access the `Command Palette` in VS Code with `F1` on the keyboard.

![](./images/open-command-palette.png)

### Command Palette Command

```
Ultra: Create Smart Contract
```

It will prompt you for a folder to put the source code under. It is recommended to use `src` if it's a single contract.

## Header Setup

After creating the contract, you will need to **install headers** to remove some of the errors you will get from VSCode about the code.

There are currently **two ways** to install headers.

-   Open your `.cpp` file that was generated, and follow the prompts.
-   Through the `Command Palette (F1)` search for
-   `Ultra: Add C++ Header Files`

After installation, and following the prompts your window will restart.

Wait for intellisense to finish updating to ensure everything is working correctly.

![](./images/intellisense-updating.png)

![](./images/intellisense-ready.png)

## What's next?

The next tutorial will cover compiling smart contracts using the VS Code extension. See [Smart Contract Compiling](./compile.md) for more information.
