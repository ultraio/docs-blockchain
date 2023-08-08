---
title: 'Signing a Transaction'
deploy: ['staging', 'mainnet']
order: 6
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
