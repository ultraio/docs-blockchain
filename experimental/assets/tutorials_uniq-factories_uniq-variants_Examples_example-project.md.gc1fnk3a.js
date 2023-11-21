import{_ as s,c as a,o as n,L as o}from"./chunks/framework.YmJWI2yl.js";const d=JSON.parse('{"title":"Example Metadata Project","description":"","frontmatter":{"title":"Example Metadata Project"},"headers":[],"relativePath":"tutorials/uniq-factories/uniq-variants/Examples/example-project.md","filePath":"tutorials/uniq-factories/uniq-variants/Examples/example-project.md","lastUpdated":null}'),l={name:"tutorials/uniq-factories/uniq-variants/Examples/example-project.md"},t=o(`<h1 id="example-project-with-reveal" tabindex="-1">Example Project with Reveal <a class="header-anchor" href="#example-project-with-reveal" aria-label="Permalink to &quot;Example Project with Reveal&quot;">​</a></h1><p>Let&#39;s create a minimalistic bored ape factory. It has to contain 3 metadata files and 3 jsons for factory, default token and uniq. For the sake of simplicity, we&#39;ll only fill the required fields for each metadata file. You can of course enrich uniqs, for example, by adding <code>attributes</code> to them. See <a href="./../uniq-metadata.html#metadata-fields">uniq metadata fields</a>.</p><p>Since this is a reveal scenario each uniq will be displayed as a question mark until it&#39;s minted. This is controlled by <code>default_token_uri</code> which acts as fallback in case there&#39;s no uri for a token.</p><p>Download the example project <a href="https://github.com/ultraio/docs-example-x/blob/main/nft/example-pfp-project.zip?raw=true" target="_blank" rel="noreferrer">here</a>.</p><h2 id="creating-a-bored-ape-factory" tabindex="-1">Creating a Bored Ape Factory <a class="header-anchor" href="#creating-a-bored-ape-factory" aria-label="Permalink to &quot;Creating a Bored Ape Factory&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio.nft.ft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create.b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[</span></span>
<span class="line"><span style="color:#9ECBFF;">  {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;memo&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;asset_manager&quot;: &quot;ultra.nft.ft&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;asset_creator&quot;: &quot;ultra&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;minimum_resell_price&quot;: null,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;resale_shares&quot;: [</span></span>
<span class="line"><span style="color:#9ECBFF;">      {</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;receiver&quot;: &quot;ultra.nft.ft&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;basis_point&quot;: 1</span></span>
<span class="line"><span style="color:#9ECBFF;">      }</span></span>
<span class="line"><span style="color:#9ECBFF;">    ],</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;mintable_window_start&quot;: &quot;2023-05-04T00:00:00&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;mintable_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;trading_window_start&quot;: &quot;2023-05-04T00:00:00&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;trading_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;recall_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;recall_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;max_mintable_tokens&quot;: 10000,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;lockup_time&quot;: null,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;conditionless_receivers&quot;: null,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;stat&quot;: 0,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;factory_uri&quot;: &quot;https://s3.us-east-1.wasabisys.com/ultraio-uniq-dev/example-pfp-project/factory.json&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;factory_hash&quot;: &quot;f9e1a773c6f3c9df715f1ebf2dc08ed602851da7de862243630d0151632117c2&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;authorized_minters&quot;: null,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;account_minting_limit&quot;: 100,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;transfer_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;transfer_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;maximum_uos_payment&quot;: null,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;default_token_uri&quot;: &quot;https://s3.us-east-1.wasabisys.com/ultraio-uniq-dev/example-pfp-project/default.json&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;default_token_hash&quot;: &quot;74f101c0fb325cbca62df0d4afaed241fedc488e4c917049c8fddaf7980d1858&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;lock_hash&quot;: null</span></span>
<span class="line"><span style="color:#9ECBFF;">  }</span></span>
<span class="line"><span style="color:#9ECBFF;">]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ultra.nft.ft</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ultra</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio.nft.ft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create.b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;[</span></span>
<span class="line"><span style="color:#032F62;">  {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;memo&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;asset_manager&quot;: &quot;ultra.nft.ft&quot;,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;asset_creator&quot;: &quot;ultra&quot;,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;minimum_resell_price&quot;: null,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;resale_shares&quot;: [</span></span>
<span class="line"><span style="color:#032F62;">      {</span></span>
<span class="line"><span style="color:#032F62;">        &quot;receiver&quot;: &quot;ultra.nft.ft&quot;,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;basis_point&quot;: 1</span></span>
<span class="line"><span style="color:#032F62;">      }</span></span>
<span class="line"><span style="color:#032F62;">    ],</span></span>
<span class="line"><span style="color:#032F62;">    &quot;mintable_window_start&quot;: &quot;2023-05-04T00:00:00&quot;,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;mintable_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;trading_window_start&quot;: &quot;2023-05-04T00:00:00&quot;,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;trading_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;recall_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;recall_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;max_mintable_tokens&quot;: 10000,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;lockup_time&quot;: null,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;conditionless_receivers&quot;: null,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;stat&quot;: 0,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;factory_uri&quot;: &quot;https://s3.us-east-1.wasabisys.com/ultraio-uniq-dev/example-pfp-project/factory.json&quot;,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;factory_hash&quot;: &quot;f9e1a773c6f3c9df715f1ebf2dc08ed602851da7de862243630d0151632117c2&quot;,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;authorized_minters&quot;: null,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;account_minting_limit&quot;: 100,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;transfer_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;transfer_window_end&quot;: null,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;maximum_uos_payment&quot;: null,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;default_token_uri&quot;: &quot;https://s3.us-east-1.wasabisys.com/ultraio-uniq-dev/example-pfp-project/default.json&quot;,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;default_token_hash&quot;: &quot;74f101c0fb325cbca62df0d4afaed241fedc488e4c917049c8fddaf7980d1858&quot;,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;lock_hash&quot;: null</span></span>
<span class="line"><span style="color:#032F62;">  }</span></span>
<span class="line"><span style="color:#032F62;">]&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ultra.nft.ft</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ultra</span></span></code></pre></div><h2 id="minting-a-token" tabindex="-1">Minting a token <a class="header-anchor" href="#minting-a-token" aria-label="Permalink to &quot;Minting a token&quot;">​</a></h2><p>Whenever there&#39;s a mint action triggered on your backend you can dynamically fill a token&#39;s uri:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio.nft.ft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue.b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[</span></span>
<span class="line"><span style="color:#9ECBFF;">  {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;to&quot;: &quot;to.user.acc&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;token_configs&quot;: [</span></span>
<span class="line"><span style="color:#9ECBFF;">      {</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;token_factory_id&quot;: 256,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;amount&quot;: 1,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;custom_data&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">      }</span></span>
<span class="line"><span style="color:#9ECBFF;">    ],</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;token_metadata&quot;: [</span></span>
<span class="line"><span style="color:#9ECBFF;">      {</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;meta_uri&quot;: &quot;https://s3.us-east-1.wasabisys.com/ultraio-uniq-dev/example-pfp-project/uniq.json&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;meta_hash&quot;: &quot;741f4cd605d0c777e42399367b10ffac621e8652bf709ed6ada2dd06d570f144&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">      }</span></span>
<span class="line"><span style="color:#9ECBFF;">    ],</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">  }</span></span>
<span class="line"><span style="color:#9ECBFF;">]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ultra.nft.ft</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio.nft.ft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue.b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;[</span></span>
<span class="line"><span style="color:#032F62;">  {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;to&quot;: &quot;to.user.acc&quot;,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;token_configs&quot;: [</span></span>
<span class="line"><span style="color:#032F62;">      {</span></span>
<span class="line"><span style="color:#032F62;">        &quot;token_factory_id&quot;: 256,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;amount&quot;: 1,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;custom_data&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#032F62;">      }</span></span>
<span class="line"><span style="color:#032F62;">    ],</span></span>
<span class="line"><span style="color:#032F62;">    &quot;token_metadata&quot;: [</span></span>
<span class="line"><span style="color:#032F62;">      {</span></span>
<span class="line"><span style="color:#032F62;">        &quot;meta_uri&quot;: &quot;https://s3.us-east-1.wasabisys.com/ultraio-uniq-dev/example-pfp-project/uniq.json&quot;,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;meta_hash&quot;: &quot;741f4cd605d0c777e42399367b10ffac621e8652bf709ed6ada2dd06d570f144&quot;</span></span>
<span class="line"><span style="color:#032F62;">      }</span></span>
<span class="line"><span style="color:#032F62;">    ],</span></span>
<span class="line"><span style="color:#032F62;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#032F62;">  }</span></span>
<span class="line"><span style="color:#032F62;">]&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ultra.nft.ft</span></span></code></pre></div>`,9),p=[t];function e(c,r,u,i,q,y){return n(),a("div",null,p)}const E=s(l,[["render",e]]);export{d as __pageData,E as default};
