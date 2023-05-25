---
title: 'Starting a Local Chain'
deploy: ['staging', 'mainnet']
order: -99998
oultine: [0, 4]
---

# Start a Local Chain

When you have instanced inside of the docker container you can start a local chain by running the following command.

```sh
ultratest -D -n -s
```

Ultratest automatically sets up a wallet, keys, and all smart contracts just by running the above command.

`-D` stops the `ultratest` framework from closing after tests have ran.

`-s` enables all system contracts

`-n` tells the program to not run any tests.

## Verifying Chain API is Started

Check <a href="http://localhost:8888/v1/chain/get_info" target="_blank" rel="noreferrer">http://localhost:8888/v1/chain/get_info</a> to ensure that it is running.

When accessing the API externally use the URL `http://localhost:8888`.