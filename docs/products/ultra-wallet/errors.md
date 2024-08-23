---
title: 'Errors'

order: 11
outline: [0, 4]
---

# Errors

When making requests to the Ultra Wallet, it may respond with one of the following errors.

| Code   | Title                 | Description                                                              |
|--------| --------------------- | ------------------------------------------------------------------------ |
| 4001   | User Rejected Request | The user rejected the request.                                           |
| 4100   | Unauthorized          | The requested method and/or account has not been authorized by the user. |
| 4900   | Disconnected          | Could not connect to the network.                                        |
| -32000 | Invalid Input         | Missing or invalid parameters.                                           |
| -32002 | Resource unavailable  | Requested resource not available.                                        |
| -32003 | Transaction Rejected  | An error occurred while processing the transaction.                      |
| -32005 | Limit Exceeded        | Request exceeds defined limit.                                           |
| -32600 | Invalid request       | It is not a valid request object.                                        |
| -32601 | Method Not Found      | The method does not exist.                                               |
| -32603 | Internal Error        | Something went wrong within the wallet extension.                        |

These error messages are inspired by Ethereum's [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474#error-codes) and [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193#provider-errors).
