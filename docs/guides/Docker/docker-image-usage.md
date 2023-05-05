---
title: 'Docker Image Usage'
deploy: ['staging', 'mainnet']
order: -9997
outline: [0,4]
---

# Docker Image Usage

Pull the docker image down from quay.io

```sh
docker pull quay.io/ultra.io/3rdparty-devtools:latest
```

## Usage

We currently support Docker for a majority of our development needs as it allows most end-users to easily spin up our tools in almost any environment.

### Running the Image

```sh
docker run -dit --name ultra -p 8888:8888 -p 9876:9876 image_name:tag_name 
```

* -d 
  * Run container in background and print container ID
* -i
  * Keep STDIN open even if not attached
* -t
  * Allocate a pseudo-TTY
* -p \[ HostPort:ContainerPort \]
  * A port range to expose for the Container

### Getting in the Image

If the above container name is `ultra` then the following can be used to access the Docker Container.

```
docker attach ultra
```

## Available Binaries

Binaries available inside of the Docker Image

* cleos
* nodeos
* keosd
* ultratest
  
_All "eosio" based binaries can be found in `/usr/op/eosio/<SOME_VERSION>/bin`_

