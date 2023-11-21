---
title: 'Response interface'

order: 3
outline: [0, 4]
---

# Response interface

To standardize the communication between decentralized applications and the extension, each method will respond with a Promise and this response format.

```JavaScript
/**
 * Based on JSend a specification for a simple, no-frills,
 * JSON based format for application-level communication.
 * https://github.com/omniti-labs/jsend
 */
{
  status: "fail", // "success", "fail" or "error"
  data: { ... }, // Response data
  message: "Forbiden" // Optional: end-user-readable message, explaining what went wrong.
};
```
