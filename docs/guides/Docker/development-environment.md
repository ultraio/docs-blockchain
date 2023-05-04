---
title: 'Development Environment Setup'
deploy: ['staging', 'mainnet']
order: -9998
outline: [0,4]
---

# Development Environment Setup

To start the setup process you'll need to clone [development tools](https://github.com/ultraio/blockchain-development-tools/) repo from Github.

## Local

For the local environment you just open `~/ultra_workdir` if you're on linux or `C:\Users\Username\ultra_workdir` on windows.

## Docker

Run `./scripts/docker/start_docker.sh` from the development tools.
It'll start a container called `ultra-dev` to which you can connect using vscode.
By default your `ultra-workdir` is mounted to the `/opt/ultra_workdir` directory inside
the container so any changes in that directory will persist on your filesystem.
Go to the `Remote-Explorer` and attach to the `ultra-dev` container.

![](/images/vscode-attach-to-container.png)

Once connected to the container open the terminal

![](/images/vscode-open-the-terminal.png)

and open the `/opt/ultra_workdir` directory inside the container

![](/images/vscode-select-ultra-workdir.png)

## VPS

To connect to your virtual machine using ssh go to `Remote-Explorer` and then select `SSH Targets`. Make sure the targets are available in your `~/.ssh/config`.

![](/images/vscode-ssh.png)
