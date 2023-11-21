import{_ as s,c as n,o as a,L as p}from"./chunks/framework.YmJWI2yl.js";const h=JSON.parse('{"title":"Queries","description":"","frontmatter":{"title":"Queries","order":3},"headers":[],"relativePath":"products/nft-api/queries.md","filePath":"products/nft-api/queries.md","lastUpdated":null}'),l={name:"products/nft-api/queries.md"},e=p(`<h1 id="queries" tabindex="-1">Queries <a class="header-anchor" href="#queries" aria-label="Permalink to &quot;Queries&quot;">​</a></h1><h2 id="uniq" tabindex="-1"><code>uniq</code> <a class="header-anchor" href="#uniq" aria-label="Permalink to &quot;\`uniq\`&quot;">​</a></h2><h5 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h5><p>This query is used to retrieve information about a uniq by its id.</p><h5 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h5><p>Returns a <a href="./types.html#uniq"><code>Uniq!</code></a></p><h5 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h5><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>blockStep</code> - <a href="./types.html#blockstep"><code>BlockStep</code></a></td><td>Filter on type of transaction. Irreversible by default if not provided.</td></tr><tr><td><code>id</code> - <a href="./types.html#bigint"><code>BigInt!</code></a></td><td>On chain id of the uniq.</td></tr></tbody></table><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><h5 id="query" tabindex="-1">Query <a class="header-anchor" href="#query" aria-label="Permalink to &quot;Query&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">query </span><span style="color:#B392F0;">Uniq</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  $blockStep: BlockStep,</span></span>
<span class="line"><span style="color:#E1E4E8;">  $id: BigInt</span><span style="color:#F97583;">!</span></span>
<span class="line"><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">uniq</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    blockStep: $blockStep,</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: $id</span></span>
<span class="line"><span style="color:#E1E4E8;">  ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    factory {</span></span>
<span class="line"><span style="color:#E1E4E8;">      accountMintingLimit</span></span>
<span class="line"><span style="color:#E1E4E8;">      assetCreator</span></span>
<span class="line"><span style="color:#E1E4E8;">      assetManager</span></span>
<span class="line"><span style="color:#E1E4E8;">      conditionlessReceivers</span></span>
<span class="line"><span style="color:#E1E4E8;">      defaultUniqMetadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hash</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          uri</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        content {</span></span>
<span class="line"><span style="color:#E1E4E8;">          attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">            descriptor {</span></span>
<span class="line"><span style="color:#E1E4E8;">              description</span></span>
<span class="line"><span style="color:#E1E4E8;">              dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">              name</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          description</span></span>
<span class="line"><span style="color:#E1E4E8;">          dynamicAttributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            uris</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          dynamicResources {</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              uris</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">            gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            product {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            square {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          name</span></span>
<span class="line"><span style="color:#E1E4E8;">          properties</span></span>
<span class="line"><span style="color:#E1E4E8;">          resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          subName</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        source {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hash</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          uri</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        status</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      id</span></span>
<span class="line"><span style="color:#E1E4E8;">      metadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hash</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          uri</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        content {</span></span>
<span class="line"><span style="color:#E1E4E8;">          attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value {</span></span>
<span class="line"><span style="color:#E1E4E8;">              description</span></span>
<span class="line"><span style="color:#E1E4E8;">              dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">              name</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          description</span></span>
<span class="line"><span style="color:#E1E4E8;">          medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">            gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            product {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            square {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          name</span></span>
<span class="line"><span style="color:#E1E4E8;">          properties</span></span>
<span class="line"><span style="color:#E1E4E8;">          resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          subName</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        locked</span></span>
<span class="line"><span style="color:#E1E4E8;">        source {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hash</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          uri</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        status</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      mintableWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">        endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      resale {</span></span>
<span class="line"><span style="color:#E1E4E8;">        minimumPrice {</span></span>
<span class="line"><span style="color:#E1E4E8;">          amount</span></span>
<span class="line"><span style="color:#E1E4E8;">          currency {</span></span>
<span class="line"><span style="color:#E1E4E8;">            code</span></span>
<span class="line"><span style="color:#E1E4E8;">            symbol</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        shares {</span></span>
<span class="line"><span style="color:#E1E4E8;">          account</span></span>
<span class="line"><span style="color:#E1E4E8;">          basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">          ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      status</span></span>
<span class="line"><span style="color:#E1E4E8;">      stock {</span></span>
<span class="line"><span style="color:#E1E4E8;">        authorized</span></span>
<span class="line"><span style="color:#E1E4E8;">        existing</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxMintable</span></span>
<span class="line"><span style="color:#E1E4E8;">        mintable</span></span>
<span class="line"><span style="color:#E1E4E8;">        minted</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      tradingWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">        endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      transferWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">        endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      type</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    id</span></span>
<span class="line"><span style="color:#E1E4E8;">    metadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">        contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">        integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">          hash</span></span>
<span class="line"><span style="color:#E1E4E8;">          type</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        uri</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      content {</span></span>
<span class="line"><span style="color:#E1E4E8;">        attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">          descriptor {</span></span>
<span class="line"><span style="color:#E1E4E8;">            description</span></span>
<span class="line"><span style="color:#E1E4E8;">            dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">            name</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          key</span></span>
<span class="line"><span style="color:#E1E4E8;">          value</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        description</span></span>
<span class="line"><span style="color:#E1E4E8;">        dynamicAttributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          uris</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        dynamicResources {</span></span>
<span class="line"><span style="color:#E1E4E8;">          key</span></span>
<span class="line"><span style="color:#E1E4E8;">          value {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            uris</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">          gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          product {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          square {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        name</span></span>
<span class="line"><span style="color:#E1E4E8;">        properties</span></span>
<span class="line"><span style="color:#E1E4E8;">        resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">          key</span></span>
<span class="line"><span style="color:#E1E4E8;">          value {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        subName</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      source {</span></span>
<span class="line"><span style="color:#E1E4E8;">        contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">        integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">          hash</span></span>
<span class="line"><span style="color:#E1E4E8;">          type</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        uri</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      status</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    mintDate</span></span>
<span class="line"><span style="color:#E1E4E8;">    owner</span></span>
<span class="line"><span style="color:#E1E4E8;">    resale {</span></span>
<span class="line"><span style="color:#E1E4E8;">      onSaleDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      price {</span></span>
<span class="line"><span style="color:#E1E4E8;">        amount</span></span>
<span class="line"><span style="color:#E1E4E8;">        creators {</span></span>
<span class="line"><span style="color:#E1E4E8;">          amount</span></span>
<span class="line"><span style="color:#E1E4E8;">          basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">          ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        currency {</span></span>
<span class="line"><span style="color:#E1E4E8;">          code</span></span>
<span class="line"><span style="color:#E1E4E8;">          symbol</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        owner {</span></span>
<span class="line"><span style="color:#E1E4E8;">          amount</span></span>
<span class="line"><span style="color:#E1E4E8;">          basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">          ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        platform {</span></span>
<span class="line"><span style="color:#E1E4E8;">          amount</span></span>
<span class="line"><span style="color:#E1E4E8;">          basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">          ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        promoter {</span></span>
<span class="line"><span style="color:#E1E4E8;">          amount</span></span>
<span class="line"><span style="color:#E1E4E8;">          basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">          ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    serialNumber</span></span>
<span class="line"><span style="color:#E1E4E8;">    tradingPeriod {</span></span>
<span class="line"><span style="color:#E1E4E8;">      duration</span></span>
<span class="line"><span style="color:#E1E4E8;">      endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    transferPeriod {</span></span>
<span class="line"><span style="color:#E1E4E8;">      duration</span></span>
<span class="line"><span style="color:#E1E4E8;">      endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    type</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">query </span><span style="color:#6F42C1;">Uniq</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  $blockStep: BlockStep,</span></span>
<span class="line"><span style="color:#24292E;">  $id: BigInt</span><span style="color:#D73A49;">!</span></span>
<span class="line"><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">uniq</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    blockStep: $blockStep,</span></span>
<span class="line"><span style="color:#24292E;">    id: $id</span></span>
<span class="line"><span style="color:#24292E;">  ) {</span></span>
<span class="line"><span style="color:#24292E;">    factory {</span></span>
<span class="line"><span style="color:#24292E;">      accountMintingLimit</span></span>
<span class="line"><span style="color:#24292E;">      assetCreator</span></span>
<span class="line"><span style="color:#24292E;">      assetManager</span></span>
<span class="line"><span style="color:#24292E;">      conditionlessReceivers</span></span>
<span class="line"><span style="color:#24292E;">      defaultUniqMetadata {</span></span>
<span class="line"><span style="color:#24292E;">        cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          integrity {</span></span>
<span class="line"><span style="color:#24292E;">            hash</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          uri</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        content {</span></span>
<span class="line"><span style="color:#24292E;">          attributes {</span></span>
<span class="line"><span style="color:#24292E;">            descriptor {</span></span>
<span class="line"><span style="color:#24292E;">              description</span></span>
<span class="line"><span style="color:#24292E;">              dynamic</span></span>
<span class="line"><span style="color:#24292E;">              name</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          description</span></span>
<span class="line"><span style="color:#24292E;">          dynamicAttributes {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            uris</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          dynamicResources {</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              uris</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          medias {</span></span>
<span class="line"><span style="color:#24292E;">            gallery {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            hero {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            product {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            square {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          name</span></span>
<span class="line"><span style="color:#24292E;">          properties</span></span>
<span class="line"><span style="color:#24292E;">          resources {</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          subName</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        source {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          integrity {</span></span>
<span class="line"><span style="color:#24292E;">            hash</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          uri</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        status</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      id</span></span>
<span class="line"><span style="color:#24292E;">      metadata {</span></span>
<span class="line"><span style="color:#24292E;">        cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          integrity {</span></span>
<span class="line"><span style="color:#24292E;">            hash</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          uri</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        content {</span></span>
<span class="line"><span style="color:#24292E;">          attributes {</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value {</span></span>
<span class="line"><span style="color:#24292E;">              description</span></span>
<span class="line"><span style="color:#24292E;">              dynamic</span></span>
<span class="line"><span style="color:#24292E;">              name</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          description</span></span>
<span class="line"><span style="color:#24292E;">          medias {</span></span>
<span class="line"><span style="color:#24292E;">            gallery {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            hero {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            product {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            square {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          name</span></span>
<span class="line"><span style="color:#24292E;">          properties</span></span>
<span class="line"><span style="color:#24292E;">          resources {</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          subName</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        locked</span></span>
<span class="line"><span style="color:#24292E;">        source {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          integrity {</span></span>
<span class="line"><span style="color:#24292E;">            hash</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          uri</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        status</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      mintableWindow {</span></span>
<span class="line"><span style="color:#24292E;">        endDate</span></span>
<span class="line"><span style="color:#24292E;">        startDate</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      resale {</span></span>
<span class="line"><span style="color:#24292E;">        minimumPrice {</span></span>
<span class="line"><span style="color:#24292E;">          amount</span></span>
<span class="line"><span style="color:#24292E;">          currency {</span></span>
<span class="line"><span style="color:#24292E;">            code</span></span>
<span class="line"><span style="color:#24292E;">            symbol</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        shares {</span></span>
<span class="line"><span style="color:#24292E;">          account</span></span>
<span class="line"><span style="color:#24292E;">          basisPoints</span></span>
<span class="line"><span style="color:#24292E;">          ratio</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      status</span></span>
<span class="line"><span style="color:#24292E;">      stock {</span></span>
<span class="line"><span style="color:#24292E;">        authorized</span></span>
<span class="line"><span style="color:#24292E;">        existing</span></span>
<span class="line"><span style="color:#24292E;">        maxMintable</span></span>
<span class="line"><span style="color:#24292E;">        mintable</span></span>
<span class="line"><span style="color:#24292E;">        minted</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      tradingWindow {</span></span>
<span class="line"><span style="color:#24292E;">        endDate</span></span>
<span class="line"><span style="color:#24292E;">        startDate</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      transferWindow {</span></span>
<span class="line"><span style="color:#24292E;">        endDate</span></span>
<span class="line"><span style="color:#24292E;">        startDate</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      type</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    id</span></span>
<span class="line"><span style="color:#24292E;">    metadata {</span></span>
<span class="line"><span style="color:#24292E;">      cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">        contentType</span></span>
<span class="line"><span style="color:#24292E;">        integrity {</span></span>
<span class="line"><span style="color:#24292E;">          hash</span></span>
<span class="line"><span style="color:#24292E;">          type</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        uri</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      content {</span></span>
<span class="line"><span style="color:#24292E;">        attributes {</span></span>
<span class="line"><span style="color:#24292E;">          descriptor {</span></span>
<span class="line"><span style="color:#24292E;">            description</span></span>
<span class="line"><span style="color:#24292E;">            dynamic</span></span>
<span class="line"><span style="color:#24292E;">            name</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          key</span></span>
<span class="line"><span style="color:#24292E;">          value</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        description</span></span>
<span class="line"><span style="color:#24292E;">        dynamicAttributes {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          uris</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        dynamicResources {</span></span>
<span class="line"><span style="color:#24292E;">          key</span></span>
<span class="line"><span style="color:#24292E;">          value {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            uris</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        medias {</span></span>
<span class="line"><span style="color:#24292E;">          gallery {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          hero {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          product {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          square {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        name</span></span>
<span class="line"><span style="color:#24292E;">        properties</span></span>
<span class="line"><span style="color:#24292E;">        resources {</span></span>
<span class="line"><span style="color:#24292E;">          key</span></span>
<span class="line"><span style="color:#24292E;">          value {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        subName</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      source {</span></span>
<span class="line"><span style="color:#24292E;">        contentType</span></span>
<span class="line"><span style="color:#24292E;">        integrity {</span></span>
<span class="line"><span style="color:#24292E;">          hash</span></span>
<span class="line"><span style="color:#24292E;">          type</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        uri</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      status</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    mintDate</span></span>
<span class="line"><span style="color:#24292E;">    owner</span></span>
<span class="line"><span style="color:#24292E;">    resale {</span></span>
<span class="line"><span style="color:#24292E;">      onSaleDate</span></span>
<span class="line"><span style="color:#24292E;">      price {</span></span>
<span class="line"><span style="color:#24292E;">        amount</span></span>
<span class="line"><span style="color:#24292E;">        creators {</span></span>
<span class="line"><span style="color:#24292E;">          amount</span></span>
<span class="line"><span style="color:#24292E;">          basisPoints</span></span>
<span class="line"><span style="color:#24292E;">          ratio</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        currency {</span></span>
<span class="line"><span style="color:#24292E;">          code</span></span>
<span class="line"><span style="color:#24292E;">          symbol</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        owner {</span></span>
<span class="line"><span style="color:#24292E;">          amount</span></span>
<span class="line"><span style="color:#24292E;">          basisPoints</span></span>
<span class="line"><span style="color:#24292E;">          ratio</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        platform {</span></span>
<span class="line"><span style="color:#24292E;">          amount</span></span>
<span class="line"><span style="color:#24292E;">          basisPoints</span></span>
<span class="line"><span style="color:#24292E;">          ratio</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        promoter {</span></span>
<span class="line"><span style="color:#24292E;">          amount</span></span>
<span class="line"><span style="color:#24292E;">          basisPoints</span></span>
<span class="line"><span style="color:#24292E;">          ratio</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    serialNumber</span></span>
<span class="line"><span style="color:#24292E;">    tradingPeriod {</span></span>
<span class="line"><span style="color:#24292E;">      duration</span></span>
<span class="line"><span style="color:#24292E;">      endDate</span></span>
<span class="line"><span style="color:#24292E;">      startDate</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    transferPeriod {</span></span>
<span class="line"><span style="color:#24292E;">      duration</span></span>
<span class="line"><span style="color:#24292E;">      endDate</span></span>
<span class="line"><span style="color:#24292E;">      startDate</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    type</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;blockStep&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;IRREVERSIBLE&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">987</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;blockStep&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;IRREVERSIBLE&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">987</span><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="response-1" tabindex="-1">Response <a class="header-anchor" href="#response-1" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;uniq&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;factory&quot;</span><span style="color:#E1E4E8;">: UniqFactory,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">987</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;metadata&quot;</span><span style="color:#E1E4E8;">: UniqMetadata,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;mintDate&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Thu Jul 13 2023 13:27:11 GMT+0200&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;owner&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;aa1aa2aa3ag4&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;resale&quot;</span><span style="color:#E1E4E8;">: UniqResale,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;serialNumber&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">987</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;tradingPeriod&quot;</span><span style="color:#E1E4E8;">: UniqTradingPeriod,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;transferPeriod&quot;</span><span style="color:#E1E4E8;">: UniqTransferPeriod,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;COLLECTIBLE&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;uniq&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;factory&quot;</span><span style="color:#24292E;">: UniqFactory,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">987</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;metadata&quot;</span><span style="color:#24292E;">: UniqMetadata,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;mintDate&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Thu Jul 13 2023 13:27:11 GMT+0200&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;owner&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;aa1aa2aa3ag4&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;resale&quot;</span><span style="color:#24292E;">: UniqResale,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;serialNumber&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">987</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;tradingPeriod&quot;</span><span style="color:#24292E;">: UniqTradingPeriod,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;transferPeriod&quot;</span><span style="color:#24292E;">: UniqTransferPeriod,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;COLLECTIBLE&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><a href="#group-Operations-Queries">Queries</a></p><h2 id="uniqfactories" tabindex="-1"><code>uniqFactories</code> <a class="header-anchor" href="#uniqfactories" aria-label="Permalink to &quot;\`uniqFactories\`&quot;">​</a></h2><h5 id="description-1" tabindex="-1">Description <a class="header-anchor" href="#description-1" aria-label="Permalink to &quot;Description&quot;">​</a></h5><p>This query is used to find information about uniq factories. If no filter applied, will return all existing factories.</p><h5 id="response-2" tabindex="-1">Response <a class="header-anchor" href="#response-2" aria-label="Permalink to &quot;Response&quot;">​</a></h5><p>Returns a <a href="./types.html#uniqfactorylist"><code>UniqFactoryList!</code></a></p><h5 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h5><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>assetManager</code> - <a href="./types.html#walletid"><code>WalletId</code></a></td><td>Filter to help you to retrieve only factories related to a specific asset manager. For example &#39;ultra.nft.ft&#39;.</td></tr><tr><td><code>pagination</code> - <a href="./types.html#paginationinput"><code>PaginationInput</code></a></td><td>Pagination to apply. Please refer to pagination section.</td></tr></tbody></table><h4 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h4><h5 id="query-1" tabindex="-1">Query <a class="header-anchor" href="#query-1" aria-label="Permalink to &quot;Query&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">query </span><span style="color:#B392F0;">UniqFactories</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  $assetManager: WalletId,</span></span>
<span class="line"><span style="color:#E1E4E8;">  $pagination: PaginationInput</span></span>
<span class="line"><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">uniqFactories</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    assetManager: $assetManager,</span></span>
<span class="line"><span style="color:#E1E4E8;">    pagination: $pagination</span></span>
<span class="line"><span style="color:#E1E4E8;">  ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data {</span></span>
<span class="line"><span style="color:#E1E4E8;">      accountMintingLimit</span></span>
<span class="line"><span style="color:#E1E4E8;">      assetCreator</span></span>
<span class="line"><span style="color:#E1E4E8;">      assetManager</span></span>
<span class="line"><span style="color:#E1E4E8;">      conditionlessReceivers</span></span>
<span class="line"><span style="color:#E1E4E8;">      defaultUniqMetadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hash</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          uri</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        content {</span></span>
<span class="line"><span style="color:#E1E4E8;">          attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">            descriptor {</span></span>
<span class="line"><span style="color:#E1E4E8;">              description</span></span>
<span class="line"><span style="color:#E1E4E8;">              dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">              name</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          description</span></span>
<span class="line"><span style="color:#E1E4E8;">          dynamicAttributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            uris</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          dynamicResources {</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              uris</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">            gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            product {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            square {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          name</span></span>
<span class="line"><span style="color:#E1E4E8;">          properties</span></span>
<span class="line"><span style="color:#E1E4E8;">          resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          subName</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        source {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hash</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          uri</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        status</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      id</span></span>
<span class="line"><span style="color:#E1E4E8;">      metadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hash</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          uri</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        content {</span></span>
<span class="line"><span style="color:#E1E4E8;">          attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value {</span></span>
<span class="line"><span style="color:#E1E4E8;">              description</span></span>
<span class="line"><span style="color:#E1E4E8;">              dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">              name</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          description</span></span>
<span class="line"><span style="color:#E1E4E8;">          medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">            gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            product {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            square {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          name</span></span>
<span class="line"><span style="color:#E1E4E8;">          properties</span></span>
<span class="line"><span style="color:#E1E4E8;">          resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          subName</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        locked</span></span>
<span class="line"><span style="color:#E1E4E8;">        source {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hash</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          uri</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        status</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      mintableWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">        endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      resale {</span></span>
<span class="line"><span style="color:#E1E4E8;">        minimumPrice {</span></span>
<span class="line"><span style="color:#E1E4E8;">          amount</span></span>
<span class="line"><span style="color:#E1E4E8;">          currency {</span></span>
<span class="line"><span style="color:#E1E4E8;">            code</span></span>
<span class="line"><span style="color:#E1E4E8;">            symbol</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        shares {</span></span>
<span class="line"><span style="color:#E1E4E8;">          account</span></span>
<span class="line"><span style="color:#E1E4E8;">          basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">          ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      status</span></span>
<span class="line"><span style="color:#E1E4E8;">      stock {</span></span>
<span class="line"><span style="color:#E1E4E8;">        authorized</span></span>
<span class="line"><span style="color:#E1E4E8;">        existing</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxMintable</span></span>
<span class="line"><span style="color:#E1E4E8;">        mintable</span></span>
<span class="line"><span style="color:#E1E4E8;">        minted</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      tradingWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">        endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      transferWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">        endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      type</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    pagination {</span></span>
<span class="line"><span style="color:#E1E4E8;">      limit</span></span>
<span class="line"><span style="color:#E1E4E8;">      skip</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalCount</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">query </span><span style="color:#6F42C1;">UniqFactories</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  $assetManager: WalletId,</span></span>
<span class="line"><span style="color:#24292E;">  $pagination: PaginationInput</span></span>
<span class="line"><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">uniqFactories</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    assetManager: $assetManager,</span></span>
<span class="line"><span style="color:#24292E;">    pagination: $pagination</span></span>
<span class="line"><span style="color:#24292E;">  ) {</span></span>
<span class="line"><span style="color:#24292E;">    data {</span></span>
<span class="line"><span style="color:#24292E;">      accountMintingLimit</span></span>
<span class="line"><span style="color:#24292E;">      assetCreator</span></span>
<span class="line"><span style="color:#24292E;">      assetManager</span></span>
<span class="line"><span style="color:#24292E;">      conditionlessReceivers</span></span>
<span class="line"><span style="color:#24292E;">      defaultUniqMetadata {</span></span>
<span class="line"><span style="color:#24292E;">        cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          integrity {</span></span>
<span class="line"><span style="color:#24292E;">            hash</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          uri</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        content {</span></span>
<span class="line"><span style="color:#24292E;">          attributes {</span></span>
<span class="line"><span style="color:#24292E;">            descriptor {</span></span>
<span class="line"><span style="color:#24292E;">              description</span></span>
<span class="line"><span style="color:#24292E;">              dynamic</span></span>
<span class="line"><span style="color:#24292E;">              name</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          description</span></span>
<span class="line"><span style="color:#24292E;">          dynamicAttributes {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            uris</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          dynamicResources {</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              uris</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          medias {</span></span>
<span class="line"><span style="color:#24292E;">            gallery {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            hero {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            product {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            square {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          name</span></span>
<span class="line"><span style="color:#24292E;">          properties</span></span>
<span class="line"><span style="color:#24292E;">          resources {</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          subName</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        source {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          integrity {</span></span>
<span class="line"><span style="color:#24292E;">            hash</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          uri</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        status</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      id</span></span>
<span class="line"><span style="color:#24292E;">      metadata {</span></span>
<span class="line"><span style="color:#24292E;">        cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          integrity {</span></span>
<span class="line"><span style="color:#24292E;">            hash</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          uri</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        content {</span></span>
<span class="line"><span style="color:#24292E;">          attributes {</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value {</span></span>
<span class="line"><span style="color:#24292E;">              description</span></span>
<span class="line"><span style="color:#24292E;">              dynamic</span></span>
<span class="line"><span style="color:#24292E;">              name</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          description</span></span>
<span class="line"><span style="color:#24292E;">          medias {</span></span>
<span class="line"><span style="color:#24292E;">            gallery {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            hero {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            product {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            square {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          name</span></span>
<span class="line"><span style="color:#24292E;">          properties</span></span>
<span class="line"><span style="color:#24292E;">          resources {</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          subName</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        locked</span></span>
<span class="line"><span style="color:#24292E;">        source {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          integrity {</span></span>
<span class="line"><span style="color:#24292E;">            hash</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          uri</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        status</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      mintableWindow {</span></span>
<span class="line"><span style="color:#24292E;">        endDate</span></span>
<span class="line"><span style="color:#24292E;">        startDate</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      resale {</span></span>
<span class="line"><span style="color:#24292E;">        minimumPrice {</span></span>
<span class="line"><span style="color:#24292E;">          amount</span></span>
<span class="line"><span style="color:#24292E;">          currency {</span></span>
<span class="line"><span style="color:#24292E;">            code</span></span>
<span class="line"><span style="color:#24292E;">            symbol</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        shares {</span></span>
<span class="line"><span style="color:#24292E;">          account</span></span>
<span class="line"><span style="color:#24292E;">          basisPoints</span></span>
<span class="line"><span style="color:#24292E;">          ratio</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      status</span></span>
<span class="line"><span style="color:#24292E;">      stock {</span></span>
<span class="line"><span style="color:#24292E;">        authorized</span></span>
<span class="line"><span style="color:#24292E;">        existing</span></span>
<span class="line"><span style="color:#24292E;">        maxMintable</span></span>
<span class="line"><span style="color:#24292E;">        mintable</span></span>
<span class="line"><span style="color:#24292E;">        minted</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      tradingWindow {</span></span>
<span class="line"><span style="color:#24292E;">        endDate</span></span>
<span class="line"><span style="color:#24292E;">        startDate</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      transferWindow {</span></span>
<span class="line"><span style="color:#24292E;">        endDate</span></span>
<span class="line"><span style="color:#24292E;">        startDate</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      type</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    pagination {</span></span>
<span class="line"><span style="color:#24292E;">      limit</span></span>
<span class="line"><span style="color:#24292E;">      skip</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    totalCount</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-label="Permalink to &quot;Variables&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;assetManager&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;aa1aa2aa3ag4&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;pagination&quot;</span><span style="color:#E1E4E8;">: PaginationInput</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;assetManager&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;aa1aa2aa3ag4&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;pagination&quot;</span><span style="color:#24292E;">: PaginationInput</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="response-3" tabindex="-1">Response <a class="header-anchor" href="#response-3" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;uniqFactories&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: [UniqFactory],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;pagination&quot;</span><span style="color:#E1E4E8;">: Pagination,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;totalCount&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">123</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;uniqFactories&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;">: [UniqFactory],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;pagination&quot;</span><span style="color:#24292E;">: Pagination,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;totalCount&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">123</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><a href="#group-Operations-Queries">Queries</a></p><h2 id="uniqfactory" tabindex="-1"><code>uniqFactory</code> <a class="header-anchor" href="#uniqfactory" aria-label="Permalink to &quot;\`uniqFactory\`&quot;">​</a></h2><h5 id="description-2" tabindex="-1">Description <a class="header-anchor" href="#description-2" aria-label="Permalink to &quot;Description&quot;">​</a></h5><p>This query is used to find a factory based on their ID.</p><h5 id="response-4" tabindex="-1">Response <a class="header-anchor" href="#response-4" aria-label="Permalink to &quot;Response&quot;">​</a></h5><p>Returns a <a href="./types.html#uniqfactory"><code>UniqFactory!</code></a></p><h5 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-label="Permalink to &quot;Arguments&quot;">​</a></h5><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code> - <a href="./types.html#bigint"><code>BigInt!</code></a></td><td>On chain id of the uniq factory .</td></tr></tbody></table><h4 id="example-2" tabindex="-1">Example <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;Example&quot;">​</a></h4><h5 id="query-2" tabindex="-1">Query <a class="header-anchor" href="#query-2" aria-label="Permalink to &quot;Query&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">query </span><span style="color:#B392F0;">UniqFactory</span><span style="color:#E1E4E8;">($id: BigInt</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">uniqFactory</span><span style="color:#E1E4E8;">(id: $id) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    accountMintingLimit</span></span>
<span class="line"><span style="color:#E1E4E8;">    assetCreator</span></span>
<span class="line"><span style="color:#E1E4E8;">    assetManager</span></span>
<span class="line"><span style="color:#E1E4E8;">    conditionlessReceivers</span></span>
<span class="line"><span style="color:#E1E4E8;">    defaultUniqMetadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">        contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">        integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">          hash</span></span>
<span class="line"><span style="color:#E1E4E8;">          type</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        uri</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      content {</span></span>
<span class="line"><span style="color:#E1E4E8;">        attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">          descriptor {</span></span>
<span class="line"><span style="color:#E1E4E8;">            description</span></span>
<span class="line"><span style="color:#E1E4E8;">            dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">            name</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          key</span></span>
<span class="line"><span style="color:#E1E4E8;">          value</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        description</span></span>
<span class="line"><span style="color:#E1E4E8;">        dynamicAttributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          uris</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        dynamicResources {</span></span>
<span class="line"><span style="color:#E1E4E8;">          key</span></span>
<span class="line"><span style="color:#E1E4E8;">          value {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            uris</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">          gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          product {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          square {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        name</span></span>
<span class="line"><span style="color:#E1E4E8;">        properties</span></span>
<span class="line"><span style="color:#E1E4E8;">        resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">          key</span></span>
<span class="line"><span style="color:#E1E4E8;">          value {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        subName</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      source {</span></span>
<span class="line"><span style="color:#E1E4E8;">        contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">        integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">          hash</span></span>
<span class="line"><span style="color:#E1E4E8;">          type</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        uri</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      status</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    id</span></span>
<span class="line"><span style="color:#E1E4E8;">    metadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">      cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">        contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">        integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">          hash</span></span>
<span class="line"><span style="color:#E1E4E8;">          type</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        uri</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      content {</span></span>
<span class="line"><span style="color:#E1E4E8;">        attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">          key</span></span>
<span class="line"><span style="color:#E1E4E8;">          value {</span></span>
<span class="line"><span style="color:#E1E4E8;">            description</span></span>
<span class="line"><span style="color:#E1E4E8;">            dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">            name</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        description</span></span>
<span class="line"><span style="color:#E1E4E8;">        medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">          gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          product {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          square {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        name</span></span>
<span class="line"><span style="color:#E1E4E8;">        properties</span></span>
<span class="line"><span style="color:#E1E4E8;">        resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">          key</span></span>
<span class="line"><span style="color:#E1E4E8;">          value {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        subName</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      locked</span></span>
<span class="line"><span style="color:#E1E4E8;">      source {</span></span>
<span class="line"><span style="color:#E1E4E8;">        contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">        integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">          hash</span></span>
<span class="line"><span style="color:#E1E4E8;">          type</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        uri</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      status</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    mintableWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">      endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    resale {</span></span>
<span class="line"><span style="color:#E1E4E8;">      minimumPrice {</span></span>
<span class="line"><span style="color:#E1E4E8;">        amount</span></span>
<span class="line"><span style="color:#E1E4E8;">        currency {</span></span>
<span class="line"><span style="color:#E1E4E8;">          code</span></span>
<span class="line"><span style="color:#E1E4E8;">          symbol</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      shares {</span></span>
<span class="line"><span style="color:#E1E4E8;">        account</span></span>
<span class="line"><span style="color:#E1E4E8;">        basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">        ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    status</span></span>
<span class="line"><span style="color:#E1E4E8;">    stock {</span></span>
<span class="line"><span style="color:#E1E4E8;">      authorized</span></span>
<span class="line"><span style="color:#E1E4E8;">      existing</span></span>
<span class="line"><span style="color:#E1E4E8;">      maxMintable</span></span>
<span class="line"><span style="color:#E1E4E8;">      mintable</span></span>
<span class="line"><span style="color:#E1E4E8;">      minted</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    tradingWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">      endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    transferWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">      endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    type</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">query </span><span style="color:#6F42C1;">UniqFactory</span><span style="color:#24292E;">($id: BigInt</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">uniqFactory</span><span style="color:#24292E;">(id: $id) {</span></span>
<span class="line"><span style="color:#24292E;">    accountMintingLimit</span></span>
<span class="line"><span style="color:#24292E;">    assetCreator</span></span>
<span class="line"><span style="color:#24292E;">    assetManager</span></span>
<span class="line"><span style="color:#24292E;">    conditionlessReceivers</span></span>
<span class="line"><span style="color:#24292E;">    defaultUniqMetadata {</span></span>
<span class="line"><span style="color:#24292E;">      cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">        contentType</span></span>
<span class="line"><span style="color:#24292E;">        integrity {</span></span>
<span class="line"><span style="color:#24292E;">          hash</span></span>
<span class="line"><span style="color:#24292E;">          type</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        uri</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      content {</span></span>
<span class="line"><span style="color:#24292E;">        attributes {</span></span>
<span class="line"><span style="color:#24292E;">          descriptor {</span></span>
<span class="line"><span style="color:#24292E;">            description</span></span>
<span class="line"><span style="color:#24292E;">            dynamic</span></span>
<span class="line"><span style="color:#24292E;">            name</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          key</span></span>
<span class="line"><span style="color:#24292E;">          value</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        description</span></span>
<span class="line"><span style="color:#24292E;">        dynamicAttributes {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          uris</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        dynamicResources {</span></span>
<span class="line"><span style="color:#24292E;">          key</span></span>
<span class="line"><span style="color:#24292E;">          value {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            uris</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        medias {</span></span>
<span class="line"><span style="color:#24292E;">          gallery {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          hero {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          product {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          square {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        name</span></span>
<span class="line"><span style="color:#24292E;">        properties</span></span>
<span class="line"><span style="color:#24292E;">        resources {</span></span>
<span class="line"><span style="color:#24292E;">          key</span></span>
<span class="line"><span style="color:#24292E;">          value {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        subName</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      source {</span></span>
<span class="line"><span style="color:#24292E;">        contentType</span></span>
<span class="line"><span style="color:#24292E;">        integrity {</span></span>
<span class="line"><span style="color:#24292E;">          hash</span></span>
<span class="line"><span style="color:#24292E;">          type</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        uri</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      status</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    id</span></span>
<span class="line"><span style="color:#24292E;">    metadata {</span></span>
<span class="line"><span style="color:#24292E;">      cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">        contentType</span></span>
<span class="line"><span style="color:#24292E;">        integrity {</span></span>
<span class="line"><span style="color:#24292E;">          hash</span></span>
<span class="line"><span style="color:#24292E;">          type</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        uri</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      content {</span></span>
<span class="line"><span style="color:#24292E;">        attributes {</span></span>
<span class="line"><span style="color:#24292E;">          key</span></span>
<span class="line"><span style="color:#24292E;">          value {</span></span>
<span class="line"><span style="color:#24292E;">            description</span></span>
<span class="line"><span style="color:#24292E;">            dynamic</span></span>
<span class="line"><span style="color:#24292E;">            name</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        description</span></span>
<span class="line"><span style="color:#24292E;">        medias {</span></span>
<span class="line"><span style="color:#24292E;">          gallery {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          hero {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          product {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          square {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        name</span></span>
<span class="line"><span style="color:#24292E;">        properties</span></span>
<span class="line"><span style="color:#24292E;">        resources {</span></span>
<span class="line"><span style="color:#24292E;">          key</span></span>
<span class="line"><span style="color:#24292E;">          value {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        subName</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      locked</span></span>
<span class="line"><span style="color:#24292E;">      source {</span></span>
<span class="line"><span style="color:#24292E;">        contentType</span></span>
<span class="line"><span style="color:#24292E;">        integrity {</span></span>
<span class="line"><span style="color:#24292E;">          hash</span></span>
<span class="line"><span style="color:#24292E;">          type</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        uri</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      status</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    mintableWindow {</span></span>
<span class="line"><span style="color:#24292E;">      endDate</span></span>
<span class="line"><span style="color:#24292E;">      startDate</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    resale {</span></span>
<span class="line"><span style="color:#24292E;">      minimumPrice {</span></span>
<span class="line"><span style="color:#24292E;">        amount</span></span>
<span class="line"><span style="color:#24292E;">        currency {</span></span>
<span class="line"><span style="color:#24292E;">          code</span></span>
<span class="line"><span style="color:#24292E;">          symbol</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      shares {</span></span>
<span class="line"><span style="color:#24292E;">        account</span></span>
<span class="line"><span style="color:#24292E;">        basisPoints</span></span>
<span class="line"><span style="color:#24292E;">        ratio</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    status</span></span>
<span class="line"><span style="color:#24292E;">    stock {</span></span>
<span class="line"><span style="color:#24292E;">      authorized</span></span>
<span class="line"><span style="color:#24292E;">      existing</span></span>
<span class="line"><span style="color:#24292E;">      maxMintable</span></span>
<span class="line"><span style="color:#24292E;">      mintable</span></span>
<span class="line"><span style="color:#24292E;">      minted</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    tradingWindow {</span></span>
<span class="line"><span style="color:#24292E;">      endDate</span></span>
<span class="line"><span style="color:#24292E;">      startDate</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    transferWindow {</span></span>
<span class="line"><span style="color:#24292E;">      endDate</span></span>
<span class="line"><span style="color:#24292E;">      startDate</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    type</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="variables-2" tabindex="-1">Variables <a class="header-anchor" href="#variables-2" aria-label="Permalink to &quot;Variables&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">987</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">987</span><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="response-5" tabindex="-1">Response <a class="header-anchor" href="#response-5" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;uniqFactory&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;accountMintingLimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">987</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;assetCreator&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;aa1aa2aa3ag4&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;assetManager&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;aa1aa2aa3ag4&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;conditionlessReceivers&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;aa1aa2aa3ag4&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;defaultUniqMetadata&quot;</span><span style="color:#E1E4E8;">: UniqMetadata,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">987</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;metadata&quot;</span><span style="color:#E1E4E8;">: UniqFactoryMetadata,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;mintableWindow&quot;</span><span style="color:#E1E4E8;">: UniqFactoryMintableWindow,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;resale&quot;</span><span style="color:#E1E4E8;">: UniqFactoryResale,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ACTIVE&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;stock&quot;</span><span style="color:#E1E4E8;">: UniqFactoryStock,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;tradingWindow&quot;</span><span style="color:#E1E4E8;">: UniqFactoryTradingWindow,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;transferWindow&quot;</span><span style="color:#E1E4E8;">: UniqFactoryTransferWindow,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;COLLECTIBLE&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;uniqFactory&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;accountMintingLimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">987</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;assetCreator&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;aa1aa2aa3ag4&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;assetManager&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;aa1aa2aa3ag4&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;conditionlessReceivers&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;aa1aa2aa3ag4&quot;</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;defaultUniqMetadata&quot;</span><span style="color:#24292E;">: UniqMetadata,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">987</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;metadata&quot;</span><span style="color:#24292E;">: UniqFactoryMetadata,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;mintableWindow&quot;</span><span style="color:#24292E;">: UniqFactoryMintableWindow,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;resale&quot;</span><span style="color:#24292E;">: UniqFactoryResale,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ACTIVE&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;stock&quot;</span><span style="color:#24292E;">: UniqFactoryStock,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;tradingWindow&quot;</span><span style="color:#24292E;">: UniqFactoryTradingWindow,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;transferWindow&quot;</span><span style="color:#24292E;">: UniqFactoryTransferWindow,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;COLLECTIBLE&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><a href="#group-Operations-Queries">Queries</a></p><h2 id="uniqsoffactory" tabindex="-1"><code>uniqsOfFactory</code> <a class="header-anchor" href="#uniqsoffactory" aria-label="Permalink to &quot;\`uniqsOfFactory\`&quot;">​</a></h2><h5 id="description-3" tabindex="-1">Description <a class="header-anchor" href="#description-3" aria-label="Permalink to &quot;Description&quot;">​</a></h5><p>This query is used to find uniqs that are associated with a factory based on their ID.</p><h5 id="response-6" tabindex="-1">Response <a class="header-anchor" href="#response-6" aria-label="Permalink to &quot;Response&quot;">​</a></h5><p>Returns a <a href="./types.html#uniqlist"><code>UniqList!</code></a></p><h5 id="arguments-3" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-3" aria-label="Permalink to &quot;Arguments&quot;">​</a></h5><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>blockStep</code> - <a href="./types.html#blockstep"><code>BlockStep</code></a></td><td>Filter on type of transaction. Irreversible by default if not provided.</td></tr><tr><td><code>factoryId</code> - <a href="./types.html#bigint"><code>BigInt!</code></a></td><td>On chain id of the factory.</td></tr><tr><td><code>ids</code> - <a href="./types.html#bigint"><code>[BigInt!]</code></a></td><td>Filter from a list of uniq id. It can be used to know with a list of uniq witch one is related to the factory.</td></tr><tr><td><code>pagination</code> - <a href="./types.html#paginationinput"><code>PaginationInput</code></a></td><td>Pagination to apply. Please refer to pagination section.</td></tr><tr><td><code>serialRange</code> - <a href="./types.html#uniqserialrangeinput"><code>UniqSerialRangeInput</code></a></td><td>Filter by a range of serial number.</td></tr></tbody></table><h4 id="example-3" tabindex="-1">Example <a class="header-anchor" href="#example-3" aria-label="Permalink to &quot;Example&quot;">​</a></h4><h5 id="query-3" tabindex="-1">Query <a class="header-anchor" href="#query-3" aria-label="Permalink to &quot;Query&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">query </span><span style="color:#B392F0;">UniqsOfFactory</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  $blockStep: BlockStep,</span></span>
<span class="line"><span style="color:#E1E4E8;">  $factoryId: BigInt</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  $ids: [BigInt</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  $pagination: PaginationInput,</span></span>
<span class="line"><span style="color:#E1E4E8;">  $serialRange: UniqSerialRangeInput</span></span>
<span class="line"><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">uniqsOfFactory</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    blockStep: $blockStep,</span></span>
<span class="line"><span style="color:#E1E4E8;">    factoryId: $factoryId,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ids: $ids,</span></span>
<span class="line"><span style="color:#E1E4E8;">    pagination: $pagination,</span></span>
<span class="line"><span style="color:#E1E4E8;">    serialRange: $serialRange</span></span>
<span class="line"><span style="color:#E1E4E8;">  ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data {</span></span>
<span class="line"><span style="color:#E1E4E8;">      factory {</span></span>
<span class="line"><span style="color:#E1E4E8;">        accountMintingLimit</span></span>
<span class="line"><span style="color:#E1E4E8;">        assetCreator</span></span>
<span class="line"><span style="color:#E1E4E8;">        assetManager</span></span>
<span class="line"><span style="color:#E1E4E8;">        conditionlessReceivers</span></span>
<span class="line"><span style="color:#E1E4E8;">        defaultUniqMetadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">          cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          content {</span></span>
<span class="line"><span style="color:#E1E4E8;">            attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">              descriptor {</span></span>
<span class="line"><span style="color:#E1E4E8;">                description</span></span>
<span class="line"><span style="color:#E1E4E8;">                dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">                name</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              key</span></span>
<span class="line"><span style="color:#E1E4E8;">              value</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            description</span></span>
<span class="line"><span style="color:#E1E4E8;">            dynamicAttributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              uris</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            dynamicResources {</span></span>
<span class="line"><span style="color:#E1E4E8;">              key</span></span>
<span class="line"><span style="color:#E1E4E8;">              value {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                uris</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">              gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              product {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              square {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            name</span></span>
<span class="line"><span style="color:#E1E4E8;">            properties</span></span>
<span class="line"><span style="color:#E1E4E8;">            resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">              key</span></span>
<span class="line"><span style="color:#E1E4E8;">              value {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            subName</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          source {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          status</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        id</span></span>
<span class="line"><span style="color:#E1E4E8;">        metadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">          cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          content {</span></span>
<span class="line"><span style="color:#E1E4E8;">            attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">              key</span></span>
<span class="line"><span style="color:#E1E4E8;">              value {</span></span>
<span class="line"><span style="color:#E1E4E8;">                description</span></span>
<span class="line"><span style="color:#E1E4E8;">                dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">                name</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            description</span></span>
<span class="line"><span style="color:#E1E4E8;">            medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">              gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              product {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              square {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            name</span></span>
<span class="line"><span style="color:#E1E4E8;">            properties</span></span>
<span class="line"><span style="color:#E1E4E8;">            resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">              key</span></span>
<span class="line"><span style="color:#E1E4E8;">              value {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            subName</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          locked</span></span>
<span class="line"><span style="color:#E1E4E8;">          source {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          status</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        mintableWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">          endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">          startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        resale {</span></span>
<span class="line"><span style="color:#E1E4E8;">          minimumPrice {</span></span>
<span class="line"><span style="color:#E1E4E8;">            amount</span></span>
<span class="line"><span style="color:#E1E4E8;">            currency {</span></span>
<span class="line"><span style="color:#E1E4E8;">              code</span></span>
<span class="line"><span style="color:#E1E4E8;">              symbol</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          shares {</span></span>
<span class="line"><span style="color:#E1E4E8;">            account</span></span>
<span class="line"><span style="color:#E1E4E8;">            basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">            ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        status</span></span>
<span class="line"><span style="color:#E1E4E8;">        stock {</span></span>
<span class="line"><span style="color:#E1E4E8;">          authorized</span></span>
<span class="line"><span style="color:#E1E4E8;">          existing</span></span>
<span class="line"><span style="color:#E1E4E8;">          maxMintable</span></span>
<span class="line"><span style="color:#E1E4E8;">          mintable</span></span>
<span class="line"><span style="color:#E1E4E8;">          minted</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        tradingWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">          endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">          startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        transferWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">          endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">          startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        type</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      id</span></span>
<span class="line"><span style="color:#E1E4E8;">      metadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hash</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          uri</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        content {</span></span>
<span class="line"><span style="color:#E1E4E8;">          attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">            descriptor {</span></span>
<span class="line"><span style="color:#E1E4E8;">              description</span></span>
<span class="line"><span style="color:#E1E4E8;">              dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">              name</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          description</span></span>
<span class="line"><span style="color:#E1E4E8;">          dynamicAttributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            uris</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          dynamicResources {</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              uris</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">            gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            product {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            square {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          name</span></span>
<span class="line"><span style="color:#E1E4E8;">          properties</span></span>
<span class="line"><span style="color:#E1E4E8;">          resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          subName</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        source {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hash</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          uri</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        status</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      mintDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      owner</span></span>
<span class="line"><span style="color:#E1E4E8;">      resale {</span></span>
<span class="line"><span style="color:#E1E4E8;">        onSaleDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        price {</span></span>
<span class="line"><span style="color:#E1E4E8;">          amount</span></span>
<span class="line"><span style="color:#E1E4E8;">          creators {</span></span>
<span class="line"><span style="color:#E1E4E8;">            amount</span></span>
<span class="line"><span style="color:#E1E4E8;">            basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">            ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          currency {</span></span>
<span class="line"><span style="color:#E1E4E8;">            code</span></span>
<span class="line"><span style="color:#E1E4E8;">            symbol</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          owner {</span></span>
<span class="line"><span style="color:#E1E4E8;">            amount</span></span>
<span class="line"><span style="color:#E1E4E8;">            basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">            ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          platform {</span></span>
<span class="line"><span style="color:#E1E4E8;">            amount</span></span>
<span class="line"><span style="color:#E1E4E8;">            basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">            ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          promoter {</span></span>
<span class="line"><span style="color:#E1E4E8;">            amount</span></span>
<span class="line"><span style="color:#E1E4E8;">            basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">            ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      serialNumber</span></span>
<span class="line"><span style="color:#E1E4E8;">      tradingPeriod {</span></span>
<span class="line"><span style="color:#E1E4E8;">        duration</span></span>
<span class="line"><span style="color:#E1E4E8;">        endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      transferPeriod {</span></span>
<span class="line"><span style="color:#E1E4E8;">        duration</span></span>
<span class="line"><span style="color:#E1E4E8;">        endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      type</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    pagination {</span></span>
<span class="line"><span style="color:#E1E4E8;">      limit</span></span>
<span class="line"><span style="color:#E1E4E8;">      skip</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalCount</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">query </span><span style="color:#6F42C1;">UniqsOfFactory</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  $blockStep: BlockStep,</span></span>
<span class="line"><span style="color:#24292E;">  $factoryId: BigInt</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  $ids: [BigInt</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  $pagination: PaginationInput,</span></span>
<span class="line"><span style="color:#24292E;">  $serialRange: UniqSerialRangeInput</span></span>
<span class="line"><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">uniqsOfFactory</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    blockStep: $blockStep,</span></span>
<span class="line"><span style="color:#24292E;">    factoryId: $factoryId,</span></span>
<span class="line"><span style="color:#24292E;">    ids: $ids,</span></span>
<span class="line"><span style="color:#24292E;">    pagination: $pagination,</span></span>
<span class="line"><span style="color:#24292E;">    serialRange: $serialRange</span></span>
<span class="line"><span style="color:#24292E;">  ) {</span></span>
<span class="line"><span style="color:#24292E;">    data {</span></span>
<span class="line"><span style="color:#24292E;">      factory {</span></span>
<span class="line"><span style="color:#24292E;">        accountMintingLimit</span></span>
<span class="line"><span style="color:#24292E;">        assetCreator</span></span>
<span class="line"><span style="color:#24292E;">        assetManager</span></span>
<span class="line"><span style="color:#24292E;">        conditionlessReceivers</span></span>
<span class="line"><span style="color:#24292E;">        defaultUniqMetadata {</span></span>
<span class="line"><span style="color:#24292E;">          cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          content {</span></span>
<span class="line"><span style="color:#24292E;">            attributes {</span></span>
<span class="line"><span style="color:#24292E;">              descriptor {</span></span>
<span class="line"><span style="color:#24292E;">                description</span></span>
<span class="line"><span style="color:#24292E;">                dynamic</span></span>
<span class="line"><span style="color:#24292E;">                name</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              key</span></span>
<span class="line"><span style="color:#24292E;">              value</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            description</span></span>
<span class="line"><span style="color:#24292E;">            dynamicAttributes {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              uris</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            dynamicResources {</span></span>
<span class="line"><span style="color:#24292E;">              key</span></span>
<span class="line"><span style="color:#24292E;">              value {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                uris</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            medias {</span></span>
<span class="line"><span style="color:#24292E;">              gallery {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              hero {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              product {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              square {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            name</span></span>
<span class="line"><span style="color:#24292E;">            properties</span></span>
<span class="line"><span style="color:#24292E;">            resources {</span></span>
<span class="line"><span style="color:#24292E;">              key</span></span>
<span class="line"><span style="color:#24292E;">              value {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            subName</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          source {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          status</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        id</span></span>
<span class="line"><span style="color:#24292E;">        metadata {</span></span>
<span class="line"><span style="color:#24292E;">          cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          content {</span></span>
<span class="line"><span style="color:#24292E;">            attributes {</span></span>
<span class="line"><span style="color:#24292E;">              key</span></span>
<span class="line"><span style="color:#24292E;">              value {</span></span>
<span class="line"><span style="color:#24292E;">                description</span></span>
<span class="line"><span style="color:#24292E;">                dynamic</span></span>
<span class="line"><span style="color:#24292E;">                name</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            description</span></span>
<span class="line"><span style="color:#24292E;">            medias {</span></span>
<span class="line"><span style="color:#24292E;">              gallery {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              hero {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              product {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              square {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            name</span></span>
<span class="line"><span style="color:#24292E;">            properties</span></span>
<span class="line"><span style="color:#24292E;">            resources {</span></span>
<span class="line"><span style="color:#24292E;">              key</span></span>
<span class="line"><span style="color:#24292E;">              value {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            subName</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          locked</span></span>
<span class="line"><span style="color:#24292E;">          source {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          status</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        mintableWindow {</span></span>
<span class="line"><span style="color:#24292E;">          endDate</span></span>
<span class="line"><span style="color:#24292E;">          startDate</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        resale {</span></span>
<span class="line"><span style="color:#24292E;">          minimumPrice {</span></span>
<span class="line"><span style="color:#24292E;">            amount</span></span>
<span class="line"><span style="color:#24292E;">            currency {</span></span>
<span class="line"><span style="color:#24292E;">              code</span></span>
<span class="line"><span style="color:#24292E;">              symbol</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          shares {</span></span>
<span class="line"><span style="color:#24292E;">            account</span></span>
<span class="line"><span style="color:#24292E;">            basisPoints</span></span>
<span class="line"><span style="color:#24292E;">            ratio</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        status</span></span>
<span class="line"><span style="color:#24292E;">        stock {</span></span>
<span class="line"><span style="color:#24292E;">          authorized</span></span>
<span class="line"><span style="color:#24292E;">          existing</span></span>
<span class="line"><span style="color:#24292E;">          maxMintable</span></span>
<span class="line"><span style="color:#24292E;">          mintable</span></span>
<span class="line"><span style="color:#24292E;">          minted</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        tradingWindow {</span></span>
<span class="line"><span style="color:#24292E;">          endDate</span></span>
<span class="line"><span style="color:#24292E;">          startDate</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        transferWindow {</span></span>
<span class="line"><span style="color:#24292E;">          endDate</span></span>
<span class="line"><span style="color:#24292E;">          startDate</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        type</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      id</span></span>
<span class="line"><span style="color:#24292E;">      metadata {</span></span>
<span class="line"><span style="color:#24292E;">        cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          integrity {</span></span>
<span class="line"><span style="color:#24292E;">            hash</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          uri</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        content {</span></span>
<span class="line"><span style="color:#24292E;">          attributes {</span></span>
<span class="line"><span style="color:#24292E;">            descriptor {</span></span>
<span class="line"><span style="color:#24292E;">              description</span></span>
<span class="line"><span style="color:#24292E;">              dynamic</span></span>
<span class="line"><span style="color:#24292E;">              name</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          description</span></span>
<span class="line"><span style="color:#24292E;">          dynamicAttributes {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            uris</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          dynamicResources {</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              uris</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          medias {</span></span>
<span class="line"><span style="color:#24292E;">            gallery {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            hero {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            product {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            square {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          name</span></span>
<span class="line"><span style="color:#24292E;">          properties</span></span>
<span class="line"><span style="color:#24292E;">          resources {</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          subName</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        source {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          integrity {</span></span>
<span class="line"><span style="color:#24292E;">            hash</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          uri</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        status</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      mintDate</span></span>
<span class="line"><span style="color:#24292E;">      owner</span></span>
<span class="line"><span style="color:#24292E;">      resale {</span></span>
<span class="line"><span style="color:#24292E;">        onSaleDate</span></span>
<span class="line"><span style="color:#24292E;">        price {</span></span>
<span class="line"><span style="color:#24292E;">          amount</span></span>
<span class="line"><span style="color:#24292E;">          creators {</span></span>
<span class="line"><span style="color:#24292E;">            amount</span></span>
<span class="line"><span style="color:#24292E;">            basisPoints</span></span>
<span class="line"><span style="color:#24292E;">            ratio</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          currency {</span></span>
<span class="line"><span style="color:#24292E;">            code</span></span>
<span class="line"><span style="color:#24292E;">            symbol</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          owner {</span></span>
<span class="line"><span style="color:#24292E;">            amount</span></span>
<span class="line"><span style="color:#24292E;">            basisPoints</span></span>
<span class="line"><span style="color:#24292E;">            ratio</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          platform {</span></span>
<span class="line"><span style="color:#24292E;">            amount</span></span>
<span class="line"><span style="color:#24292E;">            basisPoints</span></span>
<span class="line"><span style="color:#24292E;">            ratio</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          promoter {</span></span>
<span class="line"><span style="color:#24292E;">            amount</span></span>
<span class="line"><span style="color:#24292E;">            basisPoints</span></span>
<span class="line"><span style="color:#24292E;">            ratio</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      serialNumber</span></span>
<span class="line"><span style="color:#24292E;">      tradingPeriod {</span></span>
<span class="line"><span style="color:#24292E;">        duration</span></span>
<span class="line"><span style="color:#24292E;">        endDate</span></span>
<span class="line"><span style="color:#24292E;">        startDate</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      transferPeriod {</span></span>
<span class="line"><span style="color:#24292E;">        duration</span></span>
<span class="line"><span style="color:#24292E;">        endDate</span></span>
<span class="line"><span style="color:#24292E;">        startDate</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      type</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    pagination {</span></span>
<span class="line"><span style="color:#24292E;">      limit</span></span>
<span class="line"><span style="color:#24292E;">      skip</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    totalCount</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="variables-3" tabindex="-1">Variables <a class="header-anchor" href="#variables-3" aria-label="Permalink to &quot;Variables&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;blockStep&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;IRREVERSIBLE&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;factoryId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">987</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;ids&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">987</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;pagination&quot;</span><span style="color:#E1E4E8;">: PaginationInput,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;serialRange&quot;</span><span style="color:#E1E4E8;">: UniqSerialRangeInput</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;blockStep&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;IRREVERSIBLE&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;factoryId&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">987</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;ids&quot;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">987</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;pagination&quot;</span><span style="color:#24292E;">: PaginationInput,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;serialRange&quot;</span><span style="color:#24292E;">: UniqSerialRangeInput</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="response-7" tabindex="-1">Response <a class="header-anchor" href="#response-7" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;uniqsOfFactory&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: [Uniq],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;pagination&quot;</span><span style="color:#E1E4E8;">: Pagination,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;totalCount&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">123</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;uniqsOfFactory&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;">: [Uniq],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;pagination&quot;</span><span style="color:#24292E;">: Pagination,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;totalCount&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">123</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><a href="#group-Operations-Queries">Queries</a></p><h2 id="uniqsofwallet" tabindex="-1"><code>uniqsOfWallet</code> <a class="header-anchor" href="#uniqsofwallet" aria-label="Permalink to &quot;\`uniqsOfWallet\`&quot;">​</a></h2><h5 id="description-4" tabindex="-1">Description <a class="header-anchor" href="#description-4" aria-label="Permalink to &quot;Description&quot;">​</a></h5><p>This query is used to recover user-specific uniqs.</p><h5 id="response-8" tabindex="-1">Response <a class="header-anchor" href="#response-8" aria-label="Permalink to &quot;Response&quot;">​</a></h5><p>Returns a <a href="./types.html#uniqlist"><code>UniqList!</code></a></p><h5 id="arguments-4" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-4" aria-label="Permalink to &quot;Arguments&quot;">​</a></h5><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>blockStep</code> - <a href="./types.html#blockstep"><code>BlockStep</code></a></td><td>Filter on type of transaction. Irreversible by default if not provided.</td></tr><tr><td><code>ids</code> - <a href="./types.html#bigint"><code>[BigInt!]</code></a></td><td>Filter from a list of uniq id. It can be used to know with a list of uniq witch one is owned by the user.</td></tr><tr><td><code>pagination</code> - <a href="./types.html#paginationinput"><code>PaginationInput</code></a></td><td>Pagination to apply. Please refer to pagination section.</td></tr><tr><td><code>walletId</code> - <a href="./types.html#walletid"><code>WalletId!</code></a></td><td>Wallet id of the user.</td></tr></tbody></table><h4 id="example-4" tabindex="-1">Example <a class="header-anchor" href="#example-4" aria-label="Permalink to &quot;Example&quot;">​</a></h4><h5 id="query-4" tabindex="-1">Query <a class="header-anchor" href="#query-4" aria-label="Permalink to &quot;Query&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">query </span><span style="color:#B392F0;">UniqsOfWallet</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  $blockStep: BlockStep,</span></span>
<span class="line"><span style="color:#E1E4E8;">  $ids: [BigInt</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  $pagination: PaginationInput,</span></span>
<span class="line"><span style="color:#E1E4E8;">  $walletId: WalletId</span><span style="color:#F97583;">!</span></span>
<span class="line"><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">uniqsOfWallet</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    blockStep: $blockStep,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ids: $ids,</span></span>
<span class="line"><span style="color:#E1E4E8;">    pagination: $pagination,</span></span>
<span class="line"><span style="color:#E1E4E8;">    walletId: $walletId</span></span>
<span class="line"><span style="color:#E1E4E8;">  ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data {</span></span>
<span class="line"><span style="color:#E1E4E8;">      factory {</span></span>
<span class="line"><span style="color:#E1E4E8;">        accountMintingLimit</span></span>
<span class="line"><span style="color:#E1E4E8;">        assetCreator</span></span>
<span class="line"><span style="color:#E1E4E8;">        assetManager</span></span>
<span class="line"><span style="color:#E1E4E8;">        conditionlessReceivers</span></span>
<span class="line"><span style="color:#E1E4E8;">        defaultUniqMetadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">          cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          content {</span></span>
<span class="line"><span style="color:#E1E4E8;">            attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">              descriptor {</span></span>
<span class="line"><span style="color:#E1E4E8;">                description</span></span>
<span class="line"><span style="color:#E1E4E8;">                dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">                name</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              key</span></span>
<span class="line"><span style="color:#E1E4E8;">              value</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            description</span></span>
<span class="line"><span style="color:#E1E4E8;">            dynamicAttributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              uris</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            dynamicResources {</span></span>
<span class="line"><span style="color:#E1E4E8;">              key</span></span>
<span class="line"><span style="color:#E1E4E8;">              value {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                uris</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">              gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              product {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              square {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            name</span></span>
<span class="line"><span style="color:#E1E4E8;">            properties</span></span>
<span class="line"><span style="color:#E1E4E8;">            resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">              key</span></span>
<span class="line"><span style="color:#E1E4E8;">              value {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            subName</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          source {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          status</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        id</span></span>
<span class="line"><span style="color:#E1E4E8;">        metadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">          cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          content {</span></span>
<span class="line"><span style="color:#E1E4E8;">            attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">              key</span></span>
<span class="line"><span style="color:#E1E4E8;">              value {</span></span>
<span class="line"><span style="color:#E1E4E8;">                description</span></span>
<span class="line"><span style="color:#E1E4E8;">                dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">                name</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            description</span></span>
<span class="line"><span style="color:#E1E4E8;">            medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">              gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              product {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              square {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            name</span></span>
<span class="line"><span style="color:#E1E4E8;">            properties</span></span>
<span class="line"><span style="color:#E1E4E8;">            resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">              key</span></span>
<span class="line"><span style="color:#E1E4E8;">              value {</span></span>
<span class="line"><span style="color:#E1E4E8;">                contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">                integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                uri</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            subName</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          locked</span></span>
<span class="line"><span style="color:#E1E4E8;">          source {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">              hash</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uri</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          status</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        mintableWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">          endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">          startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        resale {</span></span>
<span class="line"><span style="color:#E1E4E8;">          minimumPrice {</span></span>
<span class="line"><span style="color:#E1E4E8;">            amount</span></span>
<span class="line"><span style="color:#E1E4E8;">            currency {</span></span>
<span class="line"><span style="color:#E1E4E8;">              code</span></span>
<span class="line"><span style="color:#E1E4E8;">              symbol</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          shares {</span></span>
<span class="line"><span style="color:#E1E4E8;">            account</span></span>
<span class="line"><span style="color:#E1E4E8;">            basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">            ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        status</span></span>
<span class="line"><span style="color:#E1E4E8;">        stock {</span></span>
<span class="line"><span style="color:#E1E4E8;">          authorized</span></span>
<span class="line"><span style="color:#E1E4E8;">          existing</span></span>
<span class="line"><span style="color:#E1E4E8;">          maxMintable</span></span>
<span class="line"><span style="color:#E1E4E8;">          mintable</span></span>
<span class="line"><span style="color:#E1E4E8;">          minted</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        tradingWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">          endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">          startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        transferWindow {</span></span>
<span class="line"><span style="color:#E1E4E8;">          endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">          startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        type</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      id</span></span>
<span class="line"><span style="color:#E1E4E8;">      metadata {</span></span>
<span class="line"><span style="color:#E1E4E8;">        cachedSource {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hash</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          uri</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        content {</span></span>
<span class="line"><span style="color:#E1E4E8;">          attributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">            descriptor {</span></span>
<span class="line"><span style="color:#E1E4E8;">              description</span></span>
<span class="line"><span style="color:#E1E4E8;">              dynamic</span></span>
<span class="line"><span style="color:#E1E4E8;">              name</span></span>
<span class="line"><span style="color:#E1E4E8;">              type</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          description</span></span>
<span class="line"><span style="color:#E1E4E8;">          dynamicAttributes {</span></span>
<span class="line"><span style="color:#E1E4E8;">            contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">            uris</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          dynamicResources {</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              uris</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          medias {</span></span>
<span class="line"><span style="color:#E1E4E8;">            gallery {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            hero {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            product {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            square {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          name</span></span>
<span class="line"><span style="color:#E1E4E8;">          properties</span></span>
<span class="line"><span style="color:#E1E4E8;">          resources {</span></span>
<span class="line"><span style="color:#E1E4E8;">            key</span></span>
<span class="line"><span style="color:#E1E4E8;">            value {</span></span>
<span class="line"><span style="color:#E1E4E8;">              contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">              integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">                hash</span></span>
<span class="line"><span style="color:#E1E4E8;">                type</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              uri</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          subName</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        source {</span></span>
<span class="line"><span style="color:#E1E4E8;">          contentType</span></span>
<span class="line"><span style="color:#E1E4E8;">          integrity {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hash</span></span>
<span class="line"><span style="color:#E1E4E8;">            type</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          uri</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        status</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      mintDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      owner</span></span>
<span class="line"><span style="color:#E1E4E8;">      resale {</span></span>
<span class="line"><span style="color:#E1E4E8;">        onSaleDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        price {</span></span>
<span class="line"><span style="color:#E1E4E8;">          amount</span></span>
<span class="line"><span style="color:#E1E4E8;">          creators {</span></span>
<span class="line"><span style="color:#E1E4E8;">            amount</span></span>
<span class="line"><span style="color:#E1E4E8;">            basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">            ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          currency {</span></span>
<span class="line"><span style="color:#E1E4E8;">            code</span></span>
<span class="line"><span style="color:#E1E4E8;">            symbol</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          owner {</span></span>
<span class="line"><span style="color:#E1E4E8;">            amount</span></span>
<span class="line"><span style="color:#E1E4E8;">            basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">            ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          platform {</span></span>
<span class="line"><span style="color:#E1E4E8;">            amount</span></span>
<span class="line"><span style="color:#E1E4E8;">            basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">            ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          promoter {</span></span>
<span class="line"><span style="color:#E1E4E8;">            amount</span></span>
<span class="line"><span style="color:#E1E4E8;">            basisPoints</span></span>
<span class="line"><span style="color:#E1E4E8;">            ratio</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      serialNumber</span></span>
<span class="line"><span style="color:#E1E4E8;">      tradingPeriod {</span></span>
<span class="line"><span style="color:#E1E4E8;">        duration</span></span>
<span class="line"><span style="color:#E1E4E8;">        endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      transferPeriod {</span></span>
<span class="line"><span style="color:#E1E4E8;">        duration</span></span>
<span class="line"><span style="color:#E1E4E8;">        endDate</span></span>
<span class="line"><span style="color:#E1E4E8;">        startDate</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      type</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    pagination {</span></span>
<span class="line"><span style="color:#E1E4E8;">      limit</span></span>
<span class="line"><span style="color:#E1E4E8;">      skip</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalCount</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">query </span><span style="color:#6F42C1;">UniqsOfWallet</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  $blockStep: BlockStep,</span></span>
<span class="line"><span style="color:#24292E;">  $ids: [BigInt</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  $pagination: PaginationInput,</span></span>
<span class="line"><span style="color:#24292E;">  $walletId: WalletId</span><span style="color:#D73A49;">!</span></span>
<span class="line"><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">uniqsOfWallet</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    blockStep: $blockStep,</span></span>
<span class="line"><span style="color:#24292E;">    ids: $ids,</span></span>
<span class="line"><span style="color:#24292E;">    pagination: $pagination,</span></span>
<span class="line"><span style="color:#24292E;">    walletId: $walletId</span></span>
<span class="line"><span style="color:#24292E;">  ) {</span></span>
<span class="line"><span style="color:#24292E;">    data {</span></span>
<span class="line"><span style="color:#24292E;">      factory {</span></span>
<span class="line"><span style="color:#24292E;">        accountMintingLimit</span></span>
<span class="line"><span style="color:#24292E;">        assetCreator</span></span>
<span class="line"><span style="color:#24292E;">        assetManager</span></span>
<span class="line"><span style="color:#24292E;">        conditionlessReceivers</span></span>
<span class="line"><span style="color:#24292E;">        defaultUniqMetadata {</span></span>
<span class="line"><span style="color:#24292E;">          cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          content {</span></span>
<span class="line"><span style="color:#24292E;">            attributes {</span></span>
<span class="line"><span style="color:#24292E;">              descriptor {</span></span>
<span class="line"><span style="color:#24292E;">                description</span></span>
<span class="line"><span style="color:#24292E;">                dynamic</span></span>
<span class="line"><span style="color:#24292E;">                name</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              key</span></span>
<span class="line"><span style="color:#24292E;">              value</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            description</span></span>
<span class="line"><span style="color:#24292E;">            dynamicAttributes {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              uris</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            dynamicResources {</span></span>
<span class="line"><span style="color:#24292E;">              key</span></span>
<span class="line"><span style="color:#24292E;">              value {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                uris</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            medias {</span></span>
<span class="line"><span style="color:#24292E;">              gallery {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              hero {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              product {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              square {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            name</span></span>
<span class="line"><span style="color:#24292E;">            properties</span></span>
<span class="line"><span style="color:#24292E;">            resources {</span></span>
<span class="line"><span style="color:#24292E;">              key</span></span>
<span class="line"><span style="color:#24292E;">              value {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            subName</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          source {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          status</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        id</span></span>
<span class="line"><span style="color:#24292E;">        metadata {</span></span>
<span class="line"><span style="color:#24292E;">          cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          content {</span></span>
<span class="line"><span style="color:#24292E;">            attributes {</span></span>
<span class="line"><span style="color:#24292E;">              key</span></span>
<span class="line"><span style="color:#24292E;">              value {</span></span>
<span class="line"><span style="color:#24292E;">                description</span></span>
<span class="line"><span style="color:#24292E;">                dynamic</span></span>
<span class="line"><span style="color:#24292E;">                name</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            description</span></span>
<span class="line"><span style="color:#24292E;">            medias {</span></span>
<span class="line"><span style="color:#24292E;">              gallery {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              hero {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              product {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              square {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            name</span></span>
<span class="line"><span style="color:#24292E;">            properties</span></span>
<span class="line"><span style="color:#24292E;">            resources {</span></span>
<span class="line"><span style="color:#24292E;">              key</span></span>
<span class="line"><span style="color:#24292E;">              value {</span></span>
<span class="line"><span style="color:#24292E;">                contentType</span></span>
<span class="line"><span style="color:#24292E;">                integrity {</span></span>
<span class="line"><span style="color:#24292E;">                  hash</span></span>
<span class="line"><span style="color:#24292E;">                  type</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                uri</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            subName</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          locked</span></span>
<span class="line"><span style="color:#24292E;">          source {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            integrity {</span></span>
<span class="line"><span style="color:#24292E;">              hash</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uri</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          status</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        mintableWindow {</span></span>
<span class="line"><span style="color:#24292E;">          endDate</span></span>
<span class="line"><span style="color:#24292E;">          startDate</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        resale {</span></span>
<span class="line"><span style="color:#24292E;">          minimumPrice {</span></span>
<span class="line"><span style="color:#24292E;">            amount</span></span>
<span class="line"><span style="color:#24292E;">            currency {</span></span>
<span class="line"><span style="color:#24292E;">              code</span></span>
<span class="line"><span style="color:#24292E;">              symbol</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          shares {</span></span>
<span class="line"><span style="color:#24292E;">            account</span></span>
<span class="line"><span style="color:#24292E;">            basisPoints</span></span>
<span class="line"><span style="color:#24292E;">            ratio</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        status</span></span>
<span class="line"><span style="color:#24292E;">        stock {</span></span>
<span class="line"><span style="color:#24292E;">          authorized</span></span>
<span class="line"><span style="color:#24292E;">          existing</span></span>
<span class="line"><span style="color:#24292E;">          maxMintable</span></span>
<span class="line"><span style="color:#24292E;">          mintable</span></span>
<span class="line"><span style="color:#24292E;">          minted</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        tradingWindow {</span></span>
<span class="line"><span style="color:#24292E;">          endDate</span></span>
<span class="line"><span style="color:#24292E;">          startDate</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        transferWindow {</span></span>
<span class="line"><span style="color:#24292E;">          endDate</span></span>
<span class="line"><span style="color:#24292E;">          startDate</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        type</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      id</span></span>
<span class="line"><span style="color:#24292E;">      metadata {</span></span>
<span class="line"><span style="color:#24292E;">        cachedSource {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          integrity {</span></span>
<span class="line"><span style="color:#24292E;">            hash</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          uri</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        content {</span></span>
<span class="line"><span style="color:#24292E;">          attributes {</span></span>
<span class="line"><span style="color:#24292E;">            descriptor {</span></span>
<span class="line"><span style="color:#24292E;">              description</span></span>
<span class="line"><span style="color:#24292E;">              dynamic</span></span>
<span class="line"><span style="color:#24292E;">              name</span></span>
<span class="line"><span style="color:#24292E;">              type</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          description</span></span>
<span class="line"><span style="color:#24292E;">          dynamicAttributes {</span></span>
<span class="line"><span style="color:#24292E;">            contentType</span></span>
<span class="line"><span style="color:#24292E;">            uris</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          dynamicResources {</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              uris</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          medias {</span></span>
<span class="line"><span style="color:#24292E;">            gallery {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            hero {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            product {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            square {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          name</span></span>
<span class="line"><span style="color:#24292E;">          properties</span></span>
<span class="line"><span style="color:#24292E;">          resources {</span></span>
<span class="line"><span style="color:#24292E;">            key</span></span>
<span class="line"><span style="color:#24292E;">            value {</span></span>
<span class="line"><span style="color:#24292E;">              contentType</span></span>
<span class="line"><span style="color:#24292E;">              integrity {</span></span>
<span class="line"><span style="color:#24292E;">                hash</span></span>
<span class="line"><span style="color:#24292E;">                type</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              uri</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          subName</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        source {</span></span>
<span class="line"><span style="color:#24292E;">          contentType</span></span>
<span class="line"><span style="color:#24292E;">          integrity {</span></span>
<span class="line"><span style="color:#24292E;">            hash</span></span>
<span class="line"><span style="color:#24292E;">            type</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          uri</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        status</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      mintDate</span></span>
<span class="line"><span style="color:#24292E;">      owner</span></span>
<span class="line"><span style="color:#24292E;">      resale {</span></span>
<span class="line"><span style="color:#24292E;">        onSaleDate</span></span>
<span class="line"><span style="color:#24292E;">        price {</span></span>
<span class="line"><span style="color:#24292E;">          amount</span></span>
<span class="line"><span style="color:#24292E;">          creators {</span></span>
<span class="line"><span style="color:#24292E;">            amount</span></span>
<span class="line"><span style="color:#24292E;">            basisPoints</span></span>
<span class="line"><span style="color:#24292E;">            ratio</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          currency {</span></span>
<span class="line"><span style="color:#24292E;">            code</span></span>
<span class="line"><span style="color:#24292E;">            symbol</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          owner {</span></span>
<span class="line"><span style="color:#24292E;">            amount</span></span>
<span class="line"><span style="color:#24292E;">            basisPoints</span></span>
<span class="line"><span style="color:#24292E;">            ratio</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          platform {</span></span>
<span class="line"><span style="color:#24292E;">            amount</span></span>
<span class="line"><span style="color:#24292E;">            basisPoints</span></span>
<span class="line"><span style="color:#24292E;">            ratio</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          promoter {</span></span>
<span class="line"><span style="color:#24292E;">            amount</span></span>
<span class="line"><span style="color:#24292E;">            basisPoints</span></span>
<span class="line"><span style="color:#24292E;">            ratio</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      serialNumber</span></span>
<span class="line"><span style="color:#24292E;">      tradingPeriod {</span></span>
<span class="line"><span style="color:#24292E;">        duration</span></span>
<span class="line"><span style="color:#24292E;">        endDate</span></span>
<span class="line"><span style="color:#24292E;">        startDate</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      transferPeriod {</span></span>
<span class="line"><span style="color:#24292E;">        duration</span></span>
<span class="line"><span style="color:#24292E;">        endDate</span></span>
<span class="line"><span style="color:#24292E;">        startDate</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      type</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    pagination {</span></span>
<span class="line"><span style="color:#24292E;">      limit</span></span>
<span class="line"><span style="color:#24292E;">      skip</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    totalCount</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="variables-4" tabindex="-1">Variables <a class="header-anchor" href="#variables-4" aria-label="Permalink to &quot;Variables&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;blockStep&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;IRREVERSIBLE&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;ids&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">987</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;pagination&quot;</span><span style="color:#E1E4E8;">: PaginationInput,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;walletId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;aa1aa2aa3ag4&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;blockStep&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;IRREVERSIBLE&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;ids&quot;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">987</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;pagination&quot;</span><span style="color:#24292E;">: PaginationInput,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;walletId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;aa1aa2aa3ag4&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="response-9" tabindex="-1">Response <a class="header-anchor" href="#response-9" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;uniqsOfWallet&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: [Uniq],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;pagination&quot;</span><span style="color:#E1E4E8;">: Pagination,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;totalCount&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">987</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;uniqsOfWallet&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;">: [Uniq],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;pagination&quot;</span><span style="color:#24292E;">: Pagination,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;totalCount&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">987</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,75),o=[e];function c(E,t,r,i,y,u){return a(),n("div",null,o)}const q=s(l,[["render",c]]);export{h as __pageData,q as default};
