---
title: 'Signing a Message'
deploy: ['staging', 'mainnet']
order: 7
outline: [0, 4]
---

# Signing a Message

In some cases, a web application can also request the user to sign a given message to verify the ownership of a blockchain account. Applications are free to write their messages which will be displayed to users from within the Ultra Wallet's signature prompt using the method `signMessage()`. These messages should have one of the next prefixes: `0x`, `UOSx`, or `message:`.

**Message signatures do not involve network fees.**

```JavaScript
try {
  const response = await ultra.signMessage("message:This is a test message");
  response.data.signature;
  // SIG_K1_KXuKhsxcdDTKuMbo2kveKsggwUfV9p5FuPsirkFcjjQo2sxUvxcc1TEnkoancsWTf6SEHj1jMjB9e6GuRkg6ZrEvV5tHa8
} catch (err) {
  // { status: "error", message: "Transaction declined" }
}
```

If the user declines the message signing or closes the window, the Promise will return an error.
