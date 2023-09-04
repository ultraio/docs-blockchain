---
title: 'Events'
deploy: ['staging', 'mainnet']
order: 8
outline: [0, 4]
---

# Events

The Ultra Wallet can emit different events to notify applications about changes happening inside the Wallet.

To subscribe/unsubscribe from these events, the following methods are available:

-   `ultra.on(eventName, callback)`
-   `ultra.off(eventName, callback)`
-   `ultra.once(eventName, callback)`
-   `ultra.prependListener(eventName, callback)`
-   `ultra.prependOnceListener(eventName, callback)`
-   `ultra.addListener(eventName, callback)`
-   `ultra.removeListener(eventName, callback)`

| Event name | Description                                                           |
| ---------- | --------------------------------------------------------------------- |
| disconnect | Emitted when the application gets disconnected from the Ultra Wallet. |
