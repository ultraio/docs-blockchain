---
title: 'Getting Started'

order: -9999
outline: [0,4]
---

# Substreams Quickstart

The goal of this document is to get a development environment set up in as little time as possible.

Here is a quick introduction to [Substreams](https://substreams.streamingfast.io/).

## Prerequisites

### Installing `helm`

-   [Helm for Windows](https://helm.sh/docs/intro/install/#from-chocolatey-windows).
-   [Helm for Linux](https://helm.sh/docs/intro/install/#from-script).
-   [Helm for Mac](https://helm.sh/docs/intro/install/#from-homebrew-macos).

Make sure `helm` is installed properly:

```sh
helm version
```

### Installing `minikube`

Make sure you already install `docker`, if not you can follow our [Docker Quick-start](../docker/getting-started.md).

-   [Minikube for Windows/Linux/Mac](https://minikube.sigs.k8s.io/docs/start/).

Make sure `minikube` can start properly:

```sh
minikube version
```
```sh
minikube version: v1.32.0
commit: 8220a6eb95f0a4d75f7f2d7b14cef975f050512d
```

### Installing `kubectl`

-   [Kubectl for Windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows).
-   [Kubectl for Linux](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux).
-   [Kubectl for Mac](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos).

Alternatively, you can use `minikube` to download the appropriate version of `kubectl`. You can start the download process with this command.

```sh
minikube kubectl -- version
```

## Starting / Stopping `minikube`

For starting, make sure you have docker running. The result might be different the first time you run it.

```sh
minikube start
```
```sh
😄  minikube v1.32.0 on Ubuntu 22.04 (amd64)
✨  Using the docker driver based on existing profile
👍  Starting control plane node minikube in cluster minikube
🚜  Pulling base image ...
🔄  Restarting existing docker container for "minikube" ...
🐳  Preparing Kubernetes v1.28.3 on Docker 24.0.7 ...
🔗  Configuring bridge CNI (Container Networking Interface) ...
🔎  Verifying Kubernetes components...
    ▪ Using image gcr.io/k8s-minikube/storage-provisioner:v5
🌟  Enabled addons: storage-provisioner, default-storageclass
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
```

To test if the local cluster is working properly.

```sh
kubectl get po -A
```
```sh
NAMESPACE     NAME                               READY   STATUS    RESTARTS      AGE
kube-system   coredns-5dd5756b68-jrqxj           1/1     Running   1 (21m ago)   23m
kube-system   etcd-minikube                      1/1     Running   2 (21m ago)   24m
kube-system   kube-apiserver-minikube            1/1     Running   2 (21m ago)   24m
kube-system   kube-controller-manager-minikube   1/1     Running   2 (21m ago)   24m
kube-system   kube-proxy-hsbj4                   1/1     Running   1 (21m ago)   24m
kube-system   kube-scheduler-minikube            1/1     Running   2 (21m ago)   24m
kube-system   storage-provisioner                1/1     Running   3 (19s ago)   24m
```

For stopping.

```sh
minikube stop
```
```sh
✋  Stopping node "minikube"  ...
🛑  Powering off "minikube" via SSH ...
🛑  1 node stopped.
```

Or if you want to clear any persistent data please use
```sh
minikube delete
```
```sh
minikube stop
```
## Deploy `substreams-charts`

### Pull `substreams-charts` release

**NOTE**: If you clone our [substreams-charts Repo](https://github.com/ultraio/substreams-charts) directly, please skip ahead.

You can check out our [substreams-charts Release](https://github.com/ultraio/substreams-charts/releases). Find the release you want to download.

Please note version mentioned next might be out of date by the time you read this, please use the latest version for the most compatible.

Next, you can use this command to pull the charts to your local directory.

```sh
helm pull https://github.com/ultraio/substreams-charts/releases/download/firehose-antelope-1.0.3/firehose-antelope-1.0.3.tgz --untar
```

`firehose-antelope-1.0.3.tgz` will be downloaded and unpacked in your current folder under the name `./firehose-antelope`

Additionally, for running a producer node on the same cluster, please pull out another chart called `producer`.

```sh
helm pull https://github.com/ultraio/substreams-charts/releases/download/producer-0.1.0/producer-0.1.0.tgz --untar
```

`producer-0.1.0.tgz` will be downloaded and unpacked in your current folder under the name `./producer`

### Deploy `producer` chart

Start your `minikube`

```sh
minikube start
```

Once `minikube` is up, you need to deploy `producer` chart, which will contain a `producer` pod that will run `ultratest` out of the box.

```sh
helm install producer ./producer
```

Check your deployment

```sh
kubectl get pod producer-0
```

Make sure the status is `Running`. You can also use `kubectl get pod producer-0 --watch` to watch the update.

```sh
NAME         READY   STATUS    RESTARTS   AGE
producer-0   1/1     Running   0          57s
```

**NOTE**: If you follow the above instructions, your `producer-0` can be reached at `producer-0.producer.default.svc.cluster.local`. This is important because we will use this IP in `substreams` reader node to connect to the producer to feed block data from it. If for some reason you decide to deploy it in another namespace or under another name, please use this to find its cluster IP `kubectl get pod -o wide`.

### Deploy `firehose-antelope` chart

Before deploying the `firehose-antelope` chart, make sure to create `values.yaml` file to configure your deployment. You can use the file below for your local test:

```yaml
# Enabled Persistent volume to replace cloud storage for substreams data
persistentVolumeEnabled: true

reader-node:
  replicaCount: 1
  statefulset:
    commonOneBlockStoreUrl: "file:///storage/one-blocks"
    persistentVolumeClaimEnabled: false
  # enabled local storage to replace gloud storage
  localVolume:
    enabled: true
  configmap:
    config:
      # Update p2p-peer-address with producer cluster DNS/IP
      config.ini: |
        http-server-address = 0.0.0.0:8888
        p2p-server-address = 0.0.0.0:9877
        p2p-max-nodes-per-host = 2
        connection-cleanup-period = 60
        verbose-http-errors = true
        chain-state-db-size-mb = 64000
        http-validate-host = false
        max-transaction-time = 5000
        abi-serializer-max-time-ms = 500000

        plugin = eosio::net_api_plugin
        plugin = eosio::chain_api_plugin
        plugin = eosio::db_size_api_plugin
        plugin = eosio::producer_api_plugin

        # Max speed for replay
        validation-mode = light

        # Enable deep mind
        deep-mind = true
        agent-name = reader-node

        wasm-runtime = eos-vm-jit
        eos-vm-oc-enable = true
        eos-vm-oc-compile-threads = 4
        contracts-console = true
        read-mode = head
        p2p-accept-transactions = false
        api-accept-transactions = false

        http-threads = 2
        p2p-peer-address = producer-0.producer.default.svc.cluster.local:9876
      # This is required since ultratest use a different genesis file than Ultra's deployemnt
      genesis.json: |
        {
          "initial_timestamp": "2018-09-01T12:00:00.000",
          "initial_key": "EOS7qBcTsKhCfUeGpn15JTtwrjEnZfXzeCDLnF1LtKr6xnMAr4b5k",
          "initial_configuration": {
            "max_block_net_usage": 1048576,
            "target_block_net_usage_pct": 1000,
            "max_transaction_net_usage": 524288,
            "base_per_transaction_net_usage": 12,
            "net_usage_leeway": 500,
            "context_free_discount_net_usage_num": 20,
            "context_free_discount_net_usage_den": 100,
            "max_block_cpu_usage": 400000,
            "target_block_cpu_usage_pct": 1000,
            "max_transaction_cpu_usage": 300000,
            "min_transaction_cpu_usage": 100,
            "ultra_veto_enabled": 1,
            "max_transaction_lifetime": 3600,
            "deferred_trx_expiration_window": 600,
            "max_transaction_delay": 3888000,
            "max_inline_action_size": 524287,
            "max_inline_action_depth": 10,
            "max_authority_depth": 10
          }
        }
merger:
  replicaCount: 1
  statefulset:
    commonOneBlockStoreUrl: "file:///storage/one-blocks"
    commonMergedBlocksStoreUrl: "file:///storage/merged-blocks"
    commonForkedBlocksStoreUrl: "file:///storage/forked-blocks"
    persistentVolumeClaimEnabled: false
  # enabled local storage to replace gloud storage
  localVolume:
    enabled: true
relayer:
  replicaCount: 1
  deployment:
    commonOneBlockStoreUrl: "file:///storage/one-blocks"
    relayerSource2: ""
  # enabled local storage to replace gloud storage
  localVolume:
    enabled: true
substreams-tier1:
  replicaCount: 1
  statefulset:
    commonOneBlockStoreUrl: "file:///storage/one-blocks"
    commonMergedBlocksStoreUrl: "file:///storage/merged-blocks"
    commonForkedBlocksStoreUrl: "file:///storage/forked-blocks"
    substreamsStateStoreUrl: "file:///storage/state-store"
  # enabled local storage to replace gloud storage
  localVolume:
    enabled: true
substreams-tier2:
  replicaCount: 1
  statefulset:
    commonOneBlockStoreUrl: "file:///storage/one-blocks"
    commonMergedBlocksStoreUrl: "file:///storage/merged-blocks"
    commonForkedBlocksStoreUrl: "file:///storage/forked-blocks"
    substreamsStateStoreUrl: "file:///storage/state-store"
  # enabled local storage to replace gloud storage
  localVolume:
    enabled: true
firehose:
  replicaCount: 1
  statefulset:
    commonOneBlockStoreUrl: "file:///storage/one-blocks"
    commonMergedBlocksStoreUrl: "file:///storage/merged-blocks"
    commonForkedBlocksStoreUrl: "file:///storage/forked-blocks"
  # enabled local storage to replace gloud storage
  localVolume:
    enabled: true

```

Some important configurations you need to know:

- `statefulset: enabledPVC = false`: This will disable the persistent volume use for Ultra's deployment
- `localVolume: enabled = true`: This will enable local storage to replace cloud storage, this will make use of `minikube` persist file store. You can read more here [Persistent Volumes](https://minikube.sigs.k8s.io/docs/handbook/persistent_volumes/).
- `p2p-peer-address = producer-0.producer.default.svc.cluster.local:9876`: you can see why I mentioned the importance of this config above. If you use a different name/namespace please update the according to the format mentioned in [DNS Pod](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pods) or simply use get pod IP and replace it here.

The final step is to install `firehose-antelope` chart

```sh
helm install firehose-antelope ./firehose-antelope -f ./values.yaml
```
If the deployment has no error, you should see this
```sh
kubectl get pod
```
```sh
NAME                       READY   STATUS    RESTARTS   AGE
firehose-0                 0/1     Running   0          2m27s
merger-0                   1/1     Running   0          2m27s
producer-0                 1/1     Running   0          3m19s
reader-node-0              1/1     Running   0          2m27s
relayer-7fc86d45cc-dz8vz   1/1     Running   0          2m27s
substreams-tier1-0         1/1     Running   0          2m27s
substreams-tier2-0         1/1     Running   0          2m27s
```
