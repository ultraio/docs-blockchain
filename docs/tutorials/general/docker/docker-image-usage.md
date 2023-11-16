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
docker run -dit --name ultra -p 8888:8888 -p 9876:9876 -v ~/ultra/ultra_workdir:/opt/ultra_workdir --name ultra quay.io/ultra.io/3rdparty-devtools:latest
```

* -d 
  * Run container in background and print container ID
* -i
  * Keep STDIN open even if not attached
* -t
  * Allocate a pseudo-TTY
* -p \[ HostPort:ContainerPort \]
  * A port range to expose for the Container
  * Port 8888 used as an HTTP port by `nodeos`
  * Port 9876 is used as P2P connection port by `nodeos`
* -v \[ HostPath:GuestPath \]
  * Attaches a directory from your host machine to the docker container

### Getting in the Image

If the above container name is kept as `ultra` then the following can be used to access the Docker Container.

```
docker start ultra && docker attach ultra
```

### Persisting container between runs

If you stick to commands specified under the `Docker` section of guides you should have your Docker container persist between runs. Commands such as `docker start` and `docker attach` will not destroy your existing container. Running the `docker run` command again with the same `ultra` container name will also not overwrite your container but instead will fail

Commands that may potentially remove your container (and erase the data inside it are): `docker rm`, `docker prune`. Please be sure to avoid them if you are concerned with your data being removed.

::: warning
When container is removed all changes you've done inside it will be erased. Because of that please ensure that your `ultra_workdir` is mounted to the container and move any files you want to keep to this `ultra_workdir`.
:::

## Available Binaries

Binaries available inside of the Docker Image

* cleos
* nodeos
* keosd
* ultratest
  
_All "eosio" based binaries can be found in `/usr/opt/eosio/<SOME_VERSION>/bin`_

