---
title: 'Token Metadata'

outline: [0,4]
order: 1
---

# Token Metadata Overview

## Overview

Token creator can add metadata for their existing fungitable token, and metadata will include `name`, `icon` URL, `desciption` and `color`.

Here some limit for metadata:

- `name` must be more than 2 characters and less than 24 characters, and can only contain alphabet, number, `.` or `_`.

- `icon` URL and `desciption` cannot have more than 128 characters.

Usage of the actions for update token metadata

-   [updatemeta - Add or update token metadata](../../blockchain/contracts/token-contract/token-actions/updatemeta.md)

## Benefits

- Allow token creator config their own token metadata then later use this for displaying their token if needed.