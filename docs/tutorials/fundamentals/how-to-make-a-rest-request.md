---
title: 'How to make a REST Request'
order: -99994
oultine: [0,5]
---

# How to make a REST Request

A REST request is a way to interact with a web service or in our case the blockchain, using HTTP methods (GET, POST, PUT, DELETE) to perform actions on resources identified by URIs. It follows the principles of Representational State Transfer (REST) for stateless communication.

## Why would I need to do this?

You may need to perform a REST request if you're looking up user balance, user account data, or maybe even NFTs.

## REST API Basics

Observe the following URL:

```
http://ultra.api.eosnation.io/v1/chain/get_info
```

It is composed of two parts:

```
<block_producer_url><endpoint>
```

Block Producer URL: `http://ultra.api.eosnation.io`

Endpoint: `/v1/chain/get_info`

Knowing this we can make a simple REST request.

## Making the Request

Use a CLI, or write some code in the language of your choice.

::: code-group

```sh [curl]
curl http://ultra.api.eosnation.io/v1/chain/get_info
```

```js [JavaScript]
const options = {method: 'GET', headers: {'Content-Type': 'application/json'}, body: 'false'};

fetch('http://ultra.api.eosnation.io/v1/chain/get_info', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

```C# [C#]
var client = new RestClient("http://ultra.api.eosnation.io/v1/chain/get_info");
var request = new RestRequest(Method.GET);
request.AddHeader("Content-Type", "application/json");
IRestResponse response = client.Execute(request);
```

```GO [Go]
package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "http://ultra.api.eosnation.io/v1/chain/get_info"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```Java [Java]
HttpResponse<String> response = Unirest.get("http://ultra.api.eosnation.io/v1/chain/get_info")
  .header("Content-Type", "application/json")
  .asString();
```
:::

::: details Example Response
```ts
{
	"server_version": "b668b78f",
	"chain_id": "a9c481dfbc7d9506dc7e87e9a137c931b0a9303f64fd7a1d08b8230133920097",
	"head_block_num": 152993457,
	"last_irreversible_block_num": 152993368,
	"last_irreversible_block_id": "091e7e580dc242f48fc8aca5685affdea9f65288d871fd818d3ec8cf602928ad",
	"head_block_id": "091e7eb1ca42c9e9c9a4d134aacde9bcee73bcdbf03cc02e881a0b22a260344f",
	"head_block_time": "2023-11-21T19:32:20.000",
	"head_block_producer": "cryptolions1",
	"virtual_block_cpu_limit": 400000,
	"virtual_block_net_limit": 1048576,
	"block_cpu_limit": 400000,
	"block_net_limit": 1048576,
	"server_version_string": "v3.2.4-2.0.1",
	"fork_db_head_block_num": 152993457,
	"fork_db_head_block_id": "091e7eb1ca42c9e9c9a4d134aacde9bcee73bcdbf03cc02e881a0b22a260344f",
	"server_full_version_string": "v3.2.4-2.0.1-0-gb668b78f6",
	"total_cpu_weight": 613000000,
	"total_net_weight": 613000000,
	"earliest_available_block_num": 1,
	"last_irreversible_block_time": "2023-11-21T19:31:35.500"
}
```
:::



## What are the available endpoints?

Check out our section on the [Chain API](../../products/chain-api/index.md) for all endpoints, and available URLs.