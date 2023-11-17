---
title: 'Compile a Contract'
deploy: ['staging', 'mainnet']
order: -99997
oultine: [0, 4]
---

# Compile a Contract

You can follow [Create A Contract](./create-a-contract.md) to create a simple Hello World contract.

Or example contract can found at this https://github.com/ultraio/eosio.cdt/tree/master/examples/hello

## Compile via CLI

Follow these steps to compile your contract

### Step 1

Navigate to the hello folder in examples (./examples/hello), you should then see the `./src/hello.cpp` file

### Step 2

Run the following commands

<Staging>

```shell script
$ mkdir build
$ cd build
$ cdt-cpp -abigen ../src/hello.cpp -o hello.wasm -I ../include/
```

</Staging>

<Mainnet>

```shell script
$ mkdir build
$ cd build
$ cdt-cpp -abigen ../src/hello.cpp -o hello.wasm -I ../include/
```

</Mainnet>

<Experimental>

```shell script
$ mkdir build
$ cd build
$ cdt-cpp -abigen ../src/hello.cpp -o hello.wasm -I ../include/
```

</Experimental>

This will generate 2 files

- The compiled binary wasm, `hello.wasm`
- The generated ABI file, `hello.abi`

## Compile via Cmake

You can have a look at `CMakeLists.txt` in `./examples/hello/src` as an example on how to configure a Cmake file.

```typescript
project(hello)

set(EOSIO_WASM_OLD_BEHAVIOR "Off")
find_package(eosio.cdt)

add_contract( hello hello hello.cpp )
target_include_directories( hello PUBLIC ${CMAKE_SOURCE_DIR}/../include )
target_ricardian_directory( hello ${CMAKE_SOURCE_DIR}/../ricardian )
```

Follow these steps to compile your contract

### Step 1

Navigate to the hello folder in examples (./examples/hello), you should then see the `./src/hello.cpp` file

### Step 2

Run the following commands

```shell script
$ mkdir build
$ cd build
$ cmake ..
$ make
```

This will generate 2 files under `./build/hello` directory

- The compiled binary wasm, `hello.wasm`
- The generated ABI file, `hello.abi`