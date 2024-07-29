---
title: 'Troubleshooting Deployment'

order: -93
outline: [0, 5]
---

# Troubleshooting Deployment

## Invalid UOS precision

```sh
Error 3050003: eosio_assert_message assertion failure
Error Details:
assertion failure with message: must buy ram with core token
```

Make sure UOS is specified with **exactly** 8 decimals as in [buyram](../../blockchain/contracts/system-contract/system-actions/buyram.html#buyram-buy-ram-with-uos) page.

## Docker container start issues

You may get a port allocated

```
1f9fd2ba03b243b5c8dabff76b9ffa49a8141af0fc9f7d46b37f9054e8cc945f
docker: Error response from daemon: driver failed programming external connectivity on endpoint ultra (2da26f7837141bd89470ce839b24c5ce9784376c7bdf8ffdcbaa6e93495773cf): Bind for 0.0.0.0:9876 failed: port is already allocated.
```

Consider stoppping a process listening to that port or reassigning a mapping to a different port on your host machine, i.e `-p 9876:1234`

You can also change your workdir (output directory) with `-v`. Refer to docker [documentation](https://docs.docker.com/storage/volumes/#choose-the--v-or---mount-flag).

## VS Code Extension docker unavailable

![](/images/vscode-docker-issue.png)

If you get `docker unavailable` error message make sure you have disconnected from docker container by clicking on the bottom-left corner.

\
For any further assistance don't hesitate to contract the team on [discord](https://discord.com/invite/U7raPf6qZu).
