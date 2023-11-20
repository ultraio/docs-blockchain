---
title: 'Adding Producers'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -92
---

# Adding Producers

Our system contract modifications prevent any form of voting after the chain has been activated. This modification precludes the standard procedure on Antelope for adding additional Block Producers to our network.

Ultra handpicks the Block Producers and adds them manually through **regprod** and **unregprod** actions. Once these actions are performed, the modifications to the block production schedule are handled automatically.

## How Producers are Activated

When a producer is registered and they have registered themselves Ultra can add them through an action. Ultra is responsible for creating the production schedule, which is done through the `setprods` action.