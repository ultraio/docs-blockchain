# FAQ

## Whats the difference between asset creator and asset manager roles inside token factory?

Asset creator is an entity responsible for the fact of token factory creation. Being an asset creator implies that due to your initiative this token factory is created.

On the other hand asset manager is the one responsible for any changes done to the factory itself. Asset manager regulates all factory settings and performs minting of tokens. His signature is also required to create a token factory as a sign of cooperation between the creator and manager

Asset creator and manager can be (and often is) the same entity

## Why can't I provide a simple URI to the image for factory/token?

NFT standard developed by Ultra aims not only to extend the flexibility offered to the developers but also to provide a good user experience. As such in Ultra client for better visual feedback we are displaying different versions of the desired Uniq image that better fits the user interface and requires the developer to provide those different image variations as to not accidentally mess up your work with automated processing

In addition to that by requiring a metadata to be represented as a JSON with clearly defined standard version and layout we reduce ambiguity for all parties

## Why isn't metadata stored on-chain?

Depending on the use case the metadata files could be as large as a couple of megabytes. Since the RAM is a limited and expensive resource for the blockchain we want to minimize the impact of NFT standard on it. In addition to that even if metadata was to be stored on-chain that won't be sufficient for a complete solution as it will still refer to media files stored off-chain

## Why do I need to know token owner to find token metadata?

There could be many different use cases for associating a specific token with some other property (token id, token factory id, token owner, serial number, etc). We decided that the most common use case is to view a list of tokens owned by a specific user since any interaction with a specific token always goes through the owner of that token (e.g. to transfer or sell a token you need owner's approval).

If there is a need to bypass that requirement (e.g. showing a gallery of all tokens for a specific token factory) then you must rely on alternative solutions either through streaming (DFuse API) or by querying the full metadata table and performing data manipulation locally

## Why some actions have .b (or similar) extension at the end and others don't? Why I can (or can't) use the action without .b extension instead?

Extensions such as `.b` indicate a next iteration of the specific action. This is done for actions that have a breaking change in the interface or in the data they are referencing (e.g. `issue.b` action will work with contract tables `token.b` and `factory.b` and only after it is activated).

Some actions that don't have this extension will redirect you to a new version automatically by converting provided arguments (e.g. `issue` action will trigger `issue.b`), but you are still advised to use an appropriate latest available action.

Some actions may not have a newer iteration available in case no changes are done to the interface or the logic is backwards compatible (e.g. `setstatus`)

## Can I hide metadata until I am ready to reveal it? How can I use a serial number of the token as a part of the metadata URI? How do I avoid micromanaging URI/hashes on-chain?

Refer to pages related to [organizing factory metadata](./organizing-metadata.md) and [example use cases](./Examples/variant-example-use-cases.md)

## Why can't I use my own RAM to store NFT data instead of paying a fee?

On Ultra blockchain the RAM price fluctuates based on the available supply meaning that for one developer the price to publish token factory and mint tokens will be different compared to another developer and will fluctuate over time.

To avoid this issue and make the process of creating a Uniq factory predictable in terms of cost we enforce a flat fee specified in USD and does not depend on any blockchain state. But note that the payment for RAM in this case is still done in UOS by using USD/UOS conversion rate.

## Why is X storage solution not supported?

Right now our Backend expects all external data to be accessible through simple HTTP/HTTPS endpoints. In case your storage solution relies on some other type of the protocol you are temporarily encouraged to use a proxy server that will serve the media through HTTP/HTTPS protocol