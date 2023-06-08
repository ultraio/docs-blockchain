---
title: '/get_currency_balance'
deploy: ['staging', 'mainnet']
---

# POST - /get_currency_balance

Returns the current currency balance for a given token contract, account, and a token symbol.

### Body

```typescript
{
	"code": "eosio.token",
    "account": "ultra.nft.ft",
    "symbol": "UOS"
}
```

### Request

```
curl -X POST -d '{ "code": "eosio.token", "account": "ultra.nft.ft", "symbol": "UOS" }'  https://api.ultra.eossweden.org/v1/chain/get_currency_balance
```

### Response

::: details Response
```typescript
[
	"475.34122996 UOS"
]
```
:::

## Try It

<DemoApi 
	type="POST" 
	query="/v1/chain/get_currency_balance" 
	:body="[
        { key: 'code', value: 'eosio.token' },
        { key: 'account', value: 'ultra.nft.ft' },
        { key: 'symbol', value: 'UOS' }
    ]"
/>