---
title: 'Tools & Scripts'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -95
---

# Tools & Scripts

Ultra will provide a set of tools to help you manipulating and maintaining your infrastructure up and running. Here is a brief explanation of each one of these tools:

## Start.sh

Use this script to start your nodeos instance. It'll run nodeos, print the pid to the console and redirect the output from nodeos to the eos.log file. You can also pass parameters through it.

```typescript
./start.sh {params}
```

Example:

```typescript
./start.sh
./start.sh --genesis-json genesis.json
```

To read nodeos outputs, you only have to run:

```typescript
tail -f eos.log
```

Note: Before running the script, add the nodeos PATH to environment variables.

```typescript
export PATH=<nodeos_path>:$PATH
```

## Stop.sh

A simple bash script to help you stop your nodeos instance gracefully.

## Snapshot-creator.js

A nodejs script that takes a snapshot periodically. The scheduler could be easily configured through the config.js file. You can find more detailed information about the usage and configuration of the readme file. 

## Nodeos-launcher.js

This tool will take care of your running nodeos instance. After setting up your BP, you might want to use this script to ensure that your nodeos is always running. It’ll start nodeos and watch for it, if something happens it'll try to recover/replay nodeos depending on the situation. Use this script only for the regular usage of nodeos. If you want to do other kinds of operations, it's indicated the usage of the start.sh script.

For more information, please, take a look at the readme file.

**NOTE**

Always use the scripts to manipulate nodeos. If you want to manage it manually for some specific operation, use startup.sh / stop.sh otherwise, use the nodeos-launcher script. 

**It's highly indicated the usage of the nodeos-launcher script for regular operation.**