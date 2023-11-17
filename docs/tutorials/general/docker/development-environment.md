---
title: 'Development Environment Setup'
deploy: ['staging', 'mainnet']
order: -9998
outline: [0,4]
---

# Development Environment Setup

Most convinent way to interact with a docker container and manage the files inside it is by using VSCode

## Local

For the local environment you just open `~/ultra_workdir` if you're on Linux or `C:\Users\Username\ultra_workdir` on Windows using VSCode. You can write all the tests and smart contract code locally. Then if you want to build and test use one of the following pathways:
- [VSCode extension](../../../products/smart-contract-toolkit/index.md)
- [Run build commands in docker](./docker-contract-development-flow.md)

## Docker

Start a docker container using this [command](./docker-image-usage.md#running-the-image).
It'll start a container called `ultra` which you can connect to using VSCode.
By default your `ultra-workdir` is mounted to the `/opt/ultra_workdir` directory inside
the container so any changes in that directory will persist on your filesystem.
Go to the `Remote-Explorer` and attach to the `ultra` container.

![](/images/vscode-attach-to-container.png)

Once connected to the container open the terminal

![](/images/vscode-open-the-terminal.png)

and open the `/opt/ultra_workdir` directory inside the container

![](/images/vscode-select-ultra-workdir.png)

## VPS

To connect to your virtual machine using ssh go to `Remote-Explorer` and then select `SSH Targets`. Make sure the targets are available in your `~/.ssh/config`.

![](/images/vscode-ssh.png)
