---
title: 'API'

order: -99999
---

# API

Ultra's blockchain REST API uses HTTP methods to communicate with network.

Endpoints are available for retrieving data, submitting transactions, and executing smart contracts.

_It is recommended to use a package such as [@ultraos/ultra-api-lib](https://www.npmjs.com/package/@ultraos/ultra-api-lib) for handling transactions or more complex API calls._

## Producer Endpoints

These endpoints all support `/v1` API calls.

**Main Network (Production)**

Chain ID:

```
a9c481dfbc7d9506dc7e87e9a137c931b0a9303f64fd7a1d08b8230133920097
```

- http://ultra.api.eosnation.io
- https://ultra.eosrio.io
- https://api.ultra.cryptolions.io/
- https://ultra-api.eoseoul.io/
- https://ultra.eosusa.io
- https://api.ultra.eossweden.org

**Test Network (Staging)**

Chain ID:

```
7fc56be645bb76ab9d747b53089f132dcb7681db06f0852cfa03eaf6f7ac80e9
```

- https://ultratest-api.eoseoul.io/
- http://ultratest.api.eosnation.io
- https://testnet.ultra.eosrio.io
- https://test.ultra.eosusa.io
- https://api.ultra-testnet.cryptolions.io
- https://api.testnet.ultra.eossweden.org

**Example**

```
http://ultra.api.eosnation.io/v1/chain/get_info
```

## Hyperion Endpoints

These allow for a `/v2` API call, useful for `get-transaction` API endpoint

**Main Network (Production)**

- https://ultra.eosusa.io
- https://api.ultra.eossweden.org

**Test Network (Staging)**

- https://api.testnet.ultra.eossweden.org
- https://test.ultra.eosusa.io
