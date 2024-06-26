---
title: 'release'
deploy: ['staging', 'mainnet']
order: 1
---

# Release notes

We're thrilled to announce the release of a new version of the Ultra API. This update focuses on enhancing user experience, increasing performance, and introducing new functionalities to make integration even more seamless.

## Release 0.3.0

### Key Highlights

-   Changing `uniqEffectiveBuyOffers`, subject filter to mandatory, which enforces sub-filtering offers based on uniqId or owner.
-   Adding the new `validationFailures` field to `UniqFactoryMetadata` and `UniqMetadata` structure.

### Bugfixes

-   `defaultUniqMetadata` returns the source template URL for variants factory instead of `null`.

## Release 0.2.0

### Key Highlights

-   Introducing the `uniqEffectiveBuyOffers`. Please refer to the `uniqEffectiveBuyOffers` queries section for detailed information. We strongly advise utilizing this feature to retrieve all currently active offers.
-   Presenting the `uniqBuyOffers`. For more details, see the `uniqBuyOffers` queries section. We strongly encourage using this feature to retrieve specific offers, which may include expired offers or those related to burned uniq.

### Bugfixes

-   Addressed issues where metadata remained stuck in processing state without any reported errors.
-   Corrected occurrences of HTTP 500 errors instead of 400 errors for subscriptions used over HTTP protocol rather than WebSocket.

## Release 0.1.0

### Key Highlights

-   Introducing the `uniqSnapshots` subscription! Refer to the `uniqSnapshots` subscription section for more information. We highly recommend using this new subscription. Please note that the `uniqsOfFactory` and `uniqsOfWallet` subscriptions are now deprecated.
-   Introducing the `uniqFactorySnapshots` subscription! Refer to the `uniqFactorySnapshots` subscription section for more information. We highly recommend using this new subscription. Please note that the `uniqFactories` subscription is now deprecated.
-   Explore the new `uniqGlobalShares` query! Find details in the `uniqGlobalShares` query section. We strongly recommend using this query to compute sale shares prices. The `uniqGlobalShares` query provides the protocol fee basis point applied to each resale. Reminder: Owner revenue = Price - (Price x 0.0001 x (Protocol fee basis point + Promoter fee basis point + Creators shares basis point)).

### Breaking changes

-   **Removed** enum `BlockStep` - The Ultra API will now reflect only irreversible transactions.

-   **Removed** type `UniqRevenue`

-   **Renamed** type `UniqFactoryResaleShare` to `UniqSaleShare`

-   **Structure changes** of the `UniqResale`.
    ```
    type UniqResale {
        onSaleDate: Date!
        price: UniqRevenue!
    }
    ```
    Becomes :
    ```
    type UniqResale {
        onSaleDate: Date!
        price: MonetaryAmount!
        promoterBasisPoints: Int
        shares: [UniqSaleShare!]!
    }
    ```

### Bugfixes

-   Resolved issues related to metadata not being present for old uniqs or factory. The API now correctly includes metadata for all uniqs and factory instances.
-   Fixed issues with trading/transfer windows. Users can now perform trading and transfers without encountering unexpected errors or disruptions.
