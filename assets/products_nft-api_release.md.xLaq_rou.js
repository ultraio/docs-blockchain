import{_ as e,c as s,o as a,N as n}from"./chunks/framework.C4xwWQPD.js";const m=JSON.parse('{"title":"Release Notes","description":"","frontmatter":{"title":"Release Notes","deploy":["staging","mainnet"],"order":1},"headers":[],"relativePath":"products/nft-api/release.md","filePath":"products/nft-api/release.md","lastUpdated":null}'),t={name:"products/nft-api/release.md"},o=n(`<h1 id="release-notes" tabindex="-1">Release Notes <a class="header-anchor" href="#release-notes" aria-label="Permalink to &quot;Release Notes&quot;">​</a></h1><p>We&#39;re thrilled to announce the release of new version of the NFT API. This update focuses on enhancing user experience, increasing performance, and introducing new functionalities to make integration even more seamless.</p><h2 id="key-highlights" tabindex="-1">Key Highlights <a class="header-anchor" href="#key-highlights" aria-label="Permalink to &quot;Key Highlights&quot;">​</a></h2><ul><li>Introducing the <code>uniqSnapshots</code> subscription! Refer to the <code>uniqSnapshots</code> subscription section for more information. We highly recommend using this new subscription. Please note that the <code>uniqsOfFactory</code> and <code>uniqsOfWallet</code> subscriptions are now deprecated.</li><li>Introducing the <code>uniqFactorySnapshots</code> subscription! Refer to the <code>uniqFactorySnapshots</code> subscription section for more information. We highly recommend using this new subscription. Please note that the <code>uniqFactories</code> subscription is now deprecated.</li><li>Explore the new <code>uniqGlobalShares</code> query! Find details in the <code>uniqGlobalShares</code> query section. We strongly recommend using this query to compute sale shares prices. The <code>uniqGlobalShares</code> query provides the protocol fee basis point applied to each resale. Reminder: Owner revenue = Price - (Price x 0.0001 x (Protocol fee basis point + Promoter fee basis point + Creators shares basis point)).</li></ul><h2 id="breaking-changes" tabindex="-1">Breaking changes <a class="header-anchor" href="#breaking-changes" aria-label="Permalink to &quot;Breaking changes&quot;">​</a></h2><ul><li><p><strong>Removed</strong> enum <code>BlockStep</code> - The NFT API will now reflect only irreversible transactions.</p></li><li><p><strong>Removed</strong> type <code>UniqRevenue</code></p></li><li><p><strong>Renamed</strong> type <code>UniqFactoryResaleShare</code> to <code>UniqSaleShare</code></p></li><li><p><strong>Structure changes</strong> of the <code>UniqResale</code>.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type UniqResale {</span></span>
<span class="line"><span>    onSaleDate: Date!</span></span>
<span class="line"><span>    price: UniqRevenue!</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Becomes :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type UniqResale {</span></span>
<span class="line"><span>    onSaleDate: Date!</span></span>
<span class="line"><span>    price: MonetaryAmount!</span></span>
<span class="line"><span>    promoterBasisPoints: Int</span></span>
<span class="line"><span>    shares: [UniqSaleShare!]!</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><h2 id="bugfixes" tabindex="-1">Bugfixes <a class="header-anchor" href="#bugfixes" aria-label="Permalink to &quot;Bugfixes&quot;">​</a></h2><ul><li>Resolved issues related to metadata not being present for old uniqs or factory. The API now correctly includes metadata for all uniqs and factory instances.</li><li>Fixed issues with trading/transfer windows. Users can now perform trading and transfers without encountering unexpected errors or disruptions.</li></ul>`,8),i=[o];function r(l,c,p,d,h,u){return a(),s("div",null,i)}const f=e(t,[["render",r]]);export{m as __pageData,f as default};