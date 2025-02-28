---
title: 'Signing a Transaction'

order: 7
outline: [0, 4]
---

# Signing a Transaction

Once a web application is connected to the Ultra Wallet, it can prompt the user for permission to sign and push transactions on their behalf.

The requirements to send a transaction are:

## Create a transaction object

Ultra Wallet has its own format for transaction objects that makes it easy to understand and fulfill. The required fields are “action”, “contract” and “data”.

Below is a transaction example to send tokens from a user's blockchain account to another one.

```JSON
{
  "action": "transfer",
  "contract": "eosio.token",
  "data": {
    "memo": "This is a transaction test",
    "quantity": "11.20000000 UOS",
    "from": "ej1vx2ft3ht4",
    "to": "nwyklp2aa1qd"
  }
}
```

## Sign the transaction object

When the transaction object is created, the web application may ask for permission from the Ultra Wallet to sign and send the transaction using `signTransaction()`. This returns a Promise. If accepted, the wallet will sign the transaction with the user's private key and submit it to the Ultra blockchain. Conversely, if the user declines the transaction or closes the window, the Promise will return an error.

```JavaScript
try {
  const response = await ultra.signTransaction(txObject);
  response.data.transactionHash;
  // 51c6d324522a0ee05baeee2a8857b016e47481207850074ee83f914e6adc45ae
} catch (err) {
  // { status: "error", message: "Transaction declined" }
}
```

Once the transaction is executed, the transaction hash is returned and it can be validated on the blockchain.

## Sign multiple transactions at the same time

The `signTransaction()` method accepts one transaction object or an array of them to sign multiple transaction objects in the same transaction. For example, it’s possible to sign a **transfer** and **buy** action in the same transaction as shown in the next example.

```JavaScript
const txArray = [{
    "action": "transfer",
    "contract": "eosio.token",
    "data": {
        "memo": "",
        "quantity": "11.20000000 UOS",
        "from": "ej1vx2ft3ht4",
        "to": "nwyklp2aa1qd"
    }
},
    {
        "action": "buy",
        "contract": "eosio.nft.ft",
        "data": {
            "buy": {
                "token_id": 9974,
                "buyer": "mg1vg2lv3fs4",
                "receiver": "mg1vg2lv3fs4",
                "max_price": "78.00000000 UOS",
                "memo": "",
                "promoter_id": null
            }
        }
    }
];

try {
    const response = await ultra.signTransaction(txArray);
    response.data.transactionHash;
    // 51c6d324522a0ee05baeee2a8857b016e47481207850074ee83f914e6adc45ae
} catch (err) {
    // { status: "error", message: "Transaction declined" }
}
```

## Sign a transaction without broadcasting to the blockchain

If you want to sign a transaction (or an array of transactions) using the current active account in your wallet without immediately sending it to the blockchain, you can pass an options object with the `signOnly` flag set to `true`.

Using the `signOnly: true` option tells the Ultra Wallet to sign the transaction(s) and return the complete signed data, rather than broadcasting it to the blockchain network. This is particularly useful when you need to:

-   Validate or inspect the signed transaction details before sending them
-   Manage transactions in multiple steps, such as signing first and sending later
-   Sign with multiple accounts

Here is an example of how to use the `signOnly` option:

```JavaScript
try {
  const response = await ultra.signTransaction(txObject, { signOnly: true });
  response.data;
  /**
   {
      "expiration": "2025-02-13T19:33:10",
      "ref_block_num": 43975,
      "ref_block_prefix": 268532809,
      "max_net_usage_words": 0,
      "max_cpu_usage_ms": 0,
      "delay_sec": 0,
      "context_free_actions": [],
      "actions": [
          {
              "account": "eosio.token",
              "name": "transfer",
              "authorization": [
                  {
                      "actor": "zp1ix2rg3iw4",
                      "permission": "active"
                  }
              ],
              "data": "40b81bec8aee42fd00000000007373d400e1f5050000000008554f5300000000215468697320697320616e20756c747261207472616e73616374696f6e2074657374"
          }
      ],
      "transaction_extensions": [],
      "signatures": [
          "SIG_K1_K5UwukCbpLkWHktrFmd39XFhvVDG4eJ1EGF9x742zthNdNSuP1vMCGDf2Z2gkA6oCthHrHnkcVPBBaKpCf3hdX5e7rMGB8"
      ],
      "context_free_data": []
    }
  */
} catch (err) {
  // { status: "error", message: "Transaction declined" }
}
```
