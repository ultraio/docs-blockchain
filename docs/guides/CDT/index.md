---
title: 'CDT Overview'
deploy: ['staging', 'mainnet']
order: -99999
oultine: [0, 4]
prev: false
---

# Contract Development Kit (CDT)

All information about Contract Development Kit on how to develop a smart contract.

EOSIO.CDT (Contract Development Toolkit) is a toolchain for WebAssembly (WASM) and a set of tools to facilitate smart contract development for the EOSIO platform. In addition to being a general purpose WebAssembly toolchain, EOSIO specific optimizations are available to support building EOSIO smart contracts. 

This toolchain is built around Clang 7, which means that EOSIO.CDT has the most currently available optimizations and analyses from LLVM, but as the WASM target is still considered experimental, some optimizations are incomplete or not available.

## <Mainnet>eosio-cpp</Mainnet><Staging>eosio-cpp</Staging><Experimental>cdt-cpp</Experimental>

<Mainnet>eosio-cpp</Mainnet><Staging>eosio-cpp</Staging><Experimental>cdt-cpp</Experimental> is a tool for compiling smart contracts.

It will compile c++ source code to corresponding compiled binary wasm and generated ABI file.

### Common Command Reference

<Mainnet>

```shell script
USAGE: eosio-cpp [options] <input file> ...

OPTIONS:

Generic Options:

  -help                    - Display available options (-help-hidden for more)
  -help-list               - Display list of available options (-help-list-hidden for more)
  -version                 - Display the version of this program

compiler options:

  -I=<string>              - Add directory to include search path
  -L=<string>              - Add directory to library search path
  -abigen                  - Generate ABI
  -abigen_output=<string>  - ABIGEN output
  -c                       - Only run preprocess, compile, and assemble steps
  -contract=<string>       - Contract name
  -include=<string>        - Include file before parsing
  -l=<string>              - Root name of library to link
  -no-abigen               - Disable ABI file generation
  -o=<string>              - Write output to <file>
  -v                       - Show commands to run and use verbose output
  -w                       - Suppress all warnings
```

</Mainnet>

<Staging>

```shell script
USAGE: eosio-cpp [options] <input file> ...

OPTIONS:

Generic Options:

  -help                    - Display available options (-help-hidden for more)
  -help-list               - Display list of available options (-help-list-hidden for more)
  -version                 - Display the version of this program

compiler options:

  -I=<string>              - Add directory to include search path
  -L=<string>              - Add directory to library search path
  -abigen                  - Generate ABI
  -abigen_output=<string>  - ABIGEN output
  -c                       - Only run preprocess, compile, and assemble steps
  -contract=<string>       - Contract name
  -include=<string>        - Include file before parsing
  -l=<string>              - Root name of library to link
  -no-abigen               - Disable ABI file generation
  -o=<string>              - Write output to <file>
  -v                       - Show commands to run and use verbose output
  -w                       - Suppress all warnings
```

</Staging>

<Experimental>

```shell script
USAGE: cdt-cpp [options] <input file> ...

OPTIONS:

Generic Options:

  -help                    - Display available options (-help-hidden for more)
  -help-list               - Display list of available options (-help-list-hidden for more)
  -version                 - Display the version of this program

compiler options:

  -I=<string>              - Add directory to include search path
  -L=<string>              - Add directory to library search path
  -abigen                  - Generate ABI
  -abigen_output=<string>  - ABIGEN output
  -c                       - Only run preprocess, compile, and assemble steps
  -contract=<string>       - Contract name
  -include=<string>        - Include file before parsing
  -l=<string>              - Root name of library to link
  -no-abigen               - Disable ABI file generation
  -o=<string>              - Write output to <file>
  -v                       - Show commands to run and use verbose output
  -w                       - Suppress all warnings
```

</Experimental>

## Useful Links

-   [Docker Image Usage](../Docker/docker-image-usage.md)
-   [Create A Contract](./create-a-contract.md)
-   [Compile A Contract](./compile-a-contract.md)