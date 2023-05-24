---
title: 'NFT Factory Groups'
order: 2
deploy: ['staging', 'mainnet']
---

# NFT Factory Groups

Factory groups allow token factory managers to assemble multiple owned factories into a single group.

This means that any game or items that belong to the same collection can be grouped together.

## Why?

Finding relevant data in the same collection on-chain can be difficult but this feature allows for a simple way to group a bunch of data together to represent a collection in the marketplace.

## How?

This is done by creating a table on-chain.

Each entry in the table represents a factory group.

A factory group has a metadata uri associated with it.

This metadata uri also has a hash to represent the data inside of it.

This also corresponds with the factories that belong to this group.

## Actions

-   [creategrp](./NFT%20Actions/creategrp.md)
-   [updategrp](./NFT%20Actions/updategrp.md)
-   [deletegrp](./NFT%20Actions/deletegrp.md)
-   [addgrpfcts](./NFT%20Actions/addgrpfcts.md)
-   [rmgrpfcts](./NFT%20Actions/rmgrpfcts.md)
