---
title: '2. Smart Contract Setup'

outline: [0,5]
order: -98
---

# Smart Contract Setup

There's a few things you will need to get started with writing smart contracts.

We highly suggest you install the following programs and their individual extensions for this tutorial.

- [Docker](https://docs.docker.com/engine/install/)
- [VSCode](https://code.visualstudio.com/download)
  - [C/C++ Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
  - [Ultra.io Smart Contract Toolkit](https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp)

Depending on where you want to start your project. Always start with a workspace folder and open it in VSCode.

![](./images/select-project-folder.png)

## Scaffolding

Once you have the [Ultra.io Smart Contract Toolkit](https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp) installed, you can easily create a starting template.

Access the `Command Palette` in VSCode with `F1` on the keyboard.

![](./images/open-command-palette.png)

### Command Palette Command

```
Ultra: Create Smart Contract
```

It will prompt you for a folder to put the source code under. It is recommended to use `src` if it's a single contract.

## Header Setup

After creating the contract, you will need to **install headers** to remove some of the errors you will get from VSCode about the code.

There are currently **two ways** to install headers.

- Open your `.cpp` file that was generated, and follow the prompts.
- Through the `Command Palette (F1)` under `Ultra: Add C++ Header Files`

After installation, and following the prompts your window will restart.

Wait for intellisense to finish updating to ensure everything is working correctly.

![](./images/intellisense-updating.png)

![](./images/intellisense-ready.png)