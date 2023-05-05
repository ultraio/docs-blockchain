---
title: 'Create a Contract'
deploy: ['staging', 'mainnet']
order: -99998
oultine: [0, 4]
---

# Create a Contract

Let's start with a simple smart contract that produces the traditional `Hello World`.

This tutorial introduces the following key concepts:

- EOSIO Contract Development Toolkit: The toolchain and libraries used to build smart contracts
- Webassembly (WASM): The virtual machine used to execute a portable binary-code format, hosted in nodeos
- Application Binary Interfaces (ABI): The interface that defines how data is marshalled to and from the webassembly virtual machine
- Smart Contracts: The code that defines actions and transactions which may be executed on a blockchain

This tutorial shows how to:

- Create a simple smart contract with a hi action
- Compile and deploy the smart contract to an EOSIO blockchain
- Use the command line to call the hi action of the smart contract

## Before you Begin

This tutorial requires the following:

- Knowledge of the C++ programming language
- A code editor or IDE
- A fully configured local development environment

Once you complete the tutorial, you should have created a Hello World smart contract and deployed the smart contract on a blockchain.

## Procedure to create hello.cpp

Follow this procedure to create the Hello World smart contract. Normally you create two files - the header or `.hpp` file which contains the declarations for the smart contract class and the `.cpp` file, which contains the implementation of the smart contract actions. In this simple example, you only use a `.cpp` file.

### 1. Create a new directory called hello to store your smart contract file

```sh
mkdir hello
```

Go to the new directory

```sh
cd hello
```

### 2. Create a new file, `hello.cpp`, and open it in your preferred text editor

```sh
touch hello.cpp
```

### 3. Write the smart contract

Follow these four steps and add this code to the `hello.cpp` file.

#### Step 1. Import the eosio base library with the include directive.

Add the line:

```cpp
#include <eosio/eosio.hpp>
```

#### Step 2. The `eosio.hpp` contains classes required to write a smart contract, including `eosio::contract`. Create a standard C++11 class and inherit from the `eosio::contract` class. Use the `[[eosio::contract]]` attribute to inform the `EOSIO.CDT` compiler this is a smart contract.

Add the line:

```cpp
class [[eosio::contract]] hello : public eosio::contract {};
```

The `EOSIO.CDT` compiler automatically generates the main dispatcher and the `ABI file`. The dispatcher routes action calls to the correct smart contract action. The compiler will create one when using the `eosio::contract` attribute. Advanced programmers can customize this behavior by defining their own dispatcher.

#### Step 3. Add a public access specifier and a using-declaration to introduce base class members from `eosio::contract`. You can now use the default base class constructor.

Add these lines:

```cpp
public:
	using eosio::contract::contract;
```

#### Step 4. Add a `hi` public action. This action accepts an `eosio::name` parameter, and prints **Hello** concatenated with the `eosio::name` parameter.

Add these line:

```cpp
	[[eosio::action]] void hi( eosio::name user ) {
		print( "Hello, ", user);
	}
```

The `[[eosio::action]]` attribute lets the compiler know this is an action.

The `hello.cpp` file should now look like this:

```cpp
#include <eosio/eosio.hpp>
class [[eosio::contract]] hello : public eosio::contract {
  public:
      using eosio::contract::contract;
      [[eosio::action]] void hi( eosio::name user ) {
         print( "Hello, ", user);
      }
};
```