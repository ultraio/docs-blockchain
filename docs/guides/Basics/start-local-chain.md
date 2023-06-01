---
title: 'Starting a Local Chain'
deploy: ['staging', 'mainnet']
order: -99998
oultine: [0, 4]
---

# Start a Local Chain

Now that you have the [Docker image up and running](./introduction.md), we can move on to spinning up a local chain which you can use for development.

Inside your Docker image instance, you can start a local chain by running the following command that runs our test suite, Ultratest.

```sh
ultratest -D -n -s
```

Ultratest automatically sets up a wallet, keys, and all smart contracts. These are necessary to grant you access to the functionality necessary to develop on our stack.

A quick note on the flags above.

`-D` stops the `ultratest` framework from closing after tests have ran.

`-s` enables all system contracts

`-n` tells the program to not run any tests.

## Verifying Chain API is Started

Check <a href="http://localhost:8888/v1/chain/get_info" target="_blank" rel="noreferrer">http://localhost:8888/v1/chain/get_info</a> to ensure that it is running.

When accessing the API externally use the URL `http://localhost:8888`.
