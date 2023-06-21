---
title: 'Transaction Failure Trace'
deploy: ['staging', 'mainnet']
outline: [0, 4]
order: -91
---

# Transaction Failure Trace

When transaction is locally accepted by the API node there is still a potential for it to fail once it reaches the producer node. In such cases the transaction error will be recorded on the blockchain and you will be able to find the error trace in the block explorer

## Are all failed transactions get recorded on the chain?

Failed transactions are not guaranteed to be added to the block so it is still necessary to wait for it's expiration date and blocks irreversibility status to identify it the transaction failed or not. But if you do manage to find your transaction in an irreversible block (either executed or failed) then you can be sure about it's status

## How to see a failed transaction in block explorer

If you know the transaction ID then by simply searching the transaction ID in block explorer you would be able to find if it executed successfully or failed

::: details Example of transaction error trace
```JSON
{
 "code": 10500009,
 "name": "eosio.nft.ft.cpp",
 "message": "to account does not exist",
 "stack": [
  {
   "context": {
    "level": "error",
    "file": "wasm_interface.cpp",
    "line": 1205,
    "method": "eosio_assert_code_name_what_message",
    "hostname": "",
    "thread_name": "nodeos",
    "timestamp": "2023-06-21T10:37:12"
   },
   "format": "assertion failure with message: ${s}",
   "data": {
    "s": "to account does not exist"
   }
  },
  {
   "context": {
    "level": "warn",
    "file": "apply_context.cpp",
    "line": 117,
    "method": "exec_one",
    "hostname": "",
    "thread_name": "nodeos",
    "timestamp": "2023-06-21T10:37:12"
   },
   "format": "pending console output: ${console}",
   "data": {
    "console": ""
   }
  }
 ]
}
```
:::

![](/images/block_explorer_2023-06-21-08-19-30.png)