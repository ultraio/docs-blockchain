---
title: '1. Intro'
deploy: ['staging', 'mainnet']
outline: [0,5]
order: -99
prev: false
---

# Intro to Smart Contracts

Smart contracts are pieces of code that are applied on-chain and have functions that can be called to run code.

Think of it like a REST endpoint that requires a POST request to run under specific parameters.

## Language

Smart contracts on Ultra are written in C++ and compiled down into Web Assembly.

It's not as intimidating as you think; here's an example `hello-world.cpp` contract.

::: details hello-world.cpp
```cpp
#include <eosio/eosio.hpp>
#include <eosio/print.hpp>

namespace mycontract {
    using namespace std;
    using namespace eosio;

    CONTRACT hello : public eosio::contract {
        using eosio::contract::contract;

        public:
            ACTION hi(name user) {
                print("Hi there, ", user.value, "!");
            }
   };
}
```
:::

## Building a contract

There are 3 options to build a contract at the moment:

* Via [cdt-cpp](../Docker/getting-started.md) with docker
* Via [contract-builder](../../tools/contract-builder/index.md) tool
* Via vscode [extension](./3.compile.md)

Vscode extension is the easiest one to start with. However, if your project has non-trivial build steps (i.e uses scripts for code generation)
it's better to use the docker option.