---
title: 'Troubleshooting Docker Image'
deploy: ['staging', 'mainnet']
order: 99999
outline: [0,4]
---

# Troubleshooting Docker Image

General troubleshooting while working with the docker image and individual tools inside of the image.

## Smart Contract Debugging

If you are unable to determinne what the issue is inside of a smart contract we suggest the following methods.

**Rubber Ducky Debugging**

- Step through your code one at a time and read it back to yourself out loud.
- Ensure that it makes as much sense as possible as you read it out loud.
- Usually during the explanation page you can figure out where your error may be.

**Cave Man Debugging**

- Add various `eosio::print` statements inside of your smart contract.
- Print out every step of the way to help figure out where your smart contract may be failing.

**Test Based Debugging**

- Using the `ultratest` framework inside of the Docker image, you can write your own tests for a smart contract.
- This is very useful for debugging a smart contract that can already compile.

## Container is not starting

`Bind for 0.0.0.0:9876 failed: port is already allocated`

**Solution(s)**

Make sure there are no processes listening to ports `8888` and `9876`. They're used by the container.
To find the pid of the process listening to `PORT` on linux run `sudo lsof -i | grep PORT`,
on windows - `netstat -ano | findStr "PORT"`.

## Compiling smart contracts

```ini
error 2022-03-16T09:23:47.545 cleos     main.cpp:3985                 main                 ] Failed with error: Assert Exception (10)
!action_type.empty(): Unknown action <action_name> in contract hello
```

**Solution(s)**

Make sure the `<action_name>` is inside the abi file. If not check that it's marked with an `[[eosio::action]]` compiler attribute.

## Transaction Exceeding CPU Limit

```
Error 3080002: transaction exceeded the current network usage limit imposed on the transaction
```

**Solution(s)**

-    Improve the efficiency of your smart contract
-    Attempt to deploy the transaction multiple times
-    Find an HTTP endpoint for Testnet / Mainnet deployment that is very close to your network
-    Change transaction CPU Limits (Only applies to own networks)

## Authorization Error

```
Provided keys, permissions, and delays do not satisfy declared authorizations
```

**Solution(s)**

Revolves around specific private keys not currently available in your wallet that match the account permissions.

## No ABI or WASM Files

```
Error 3160010: No abi file found
```

```
Error 3160009: No wasm file found
```

**Solution(s)**

During the compilation of the smart contract it may not have compiled correctly. Try reviewing the compilation process and ensure that there are no additional errors showing inside of the console.


## Out of ram error

```
Reading WASM from /Users/shankar/contracts/hello/hello.wasm...
Publishing contract...
Error 3080001: Account using more than allotted RAM usage
Error Details:
account youraccname1 has insufficient ram; needs 25588 bytes has 9547 bytes
```

The state of a contract, along with the code and ABI are stored in a in-memory database.
Your storage quota is calculated based on the RAM resource.

**Solution(s)**
- Buy more ram using `buyram` action of the system contract
- Reduce your code size by not relying on 3rdparty libraries

