---
title: 'Endpoint Usage'

order: -9993
outline: [0,4]
---

# Cleos Endpoint Usage

In many cases when working with smart contracts, or on-chain actions you will need an endpoint. An endpoint can be described as a URL to push transactions to, get chain information such as tables, or lookup accounts.

## Cleos Usage

Cleos has a section on using [external endpoints](../../../products/chain-api/index.md#external-apis).

In short append the `-u` flag with a url. If you are using local environment then this flag can be skipped. The default value of `http://127.0.0.1:8888` will be used

```
cleos -u <endpoint>
```

## cUrl Usage

cUrl can be used normally but suggested to use `json_pp` to help prettify the output from a cUrl response.

```
curl -X POST <endpoint>/v1/chain/get_info
```

## wget Usage

wget can also be used to fetch endpoint information as well.

```
wget -qO- /dev/stdout <endpoint>/v1/chain/get_info | json_pp
```

## Available Endpoints

[See this API section](../../../products/chain-api/index.md) for information on block producer endpoints that are publicly available.

## Limitations and Availability

Each of these endpoints has their own policies and limitations on data that can be sent to and pull from the endpoint. However, those limitations are not easily understood. These are all public facing endpoints and if an API node is down, simply try another one.