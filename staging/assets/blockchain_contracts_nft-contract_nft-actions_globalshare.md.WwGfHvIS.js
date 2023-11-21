import{_ as s,c as a,o as n,L as l}from"./chunks/framework.vEmsHuDM.js";const u=JSON.parse('{"title":"globalshare","description":"","frontmatter":{"title":"globalshare","order":34},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/globalshare.md","filePath":"blockchain/contracts/nft-contract/nft-actions/globalshare.md","lastUpdated":null}'),e={name:"blockchain/contracts/nft-contract/nft-actions/globalshare.md"},o=l(`<h1 id="globalshare" tabindex="-1">globalshare <a class="header-anchor" href="#globalshare" aria-label="Permalink to &quot;globalshare&quot;">​</a></h1><p>Ultra configures protocol fee for second hand token resells</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>The required authorization is the <code>ultra.nft.ft</code> account</p><p><code>share</code> must not exceed the value specified in <code>saleshrlmcfg</code> table under a scope of <code>1</code> (if it exists) or 1000 (10%) otherwise</p><p><code>receiver</code> must be an existing account if a value is provided. If no value is provided the global share receiver account will remain unchanged</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>Javascript Type</th><th>Example</th></tr></thead><tbody><tr><td>share</td><td>uint16_t</td><td>number</td><td>200</td></tr><tr><td>receiver</td><td>std::optional&lt;eosio::name&gt;</td><td>string</td><td>ultra.prtcl</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><p>cleos push action eosio.nft.ft globalshare &#39;[200, &quot;ultra.prtcl&quot;]&#39; -p ultra.nft.ft</p><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">transact</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                account: </span><span style="color:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;globalshare&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                authorization: [{ actor: </span><span style="color:#9ECBFF;">&#39;ultra.nft.ft&#39;</span><span style="color:#E1E4E8;">, permission: </span><span style="color:#9ECBFF;">&#39;active&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">                data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    share: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    receiver: </span><span style="color:#9ECBFF;">&quot;ultra.prtcl&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        blocksBehind: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        expireSeconds: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">transact</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        actions: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                account: </span><span style="color:#032F62;">&#39;eosio.nft.ft&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                name: </span><span style="color:#032F62;">&#39;globalshare&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                authorization: [{ actor: </span><span style="color:#032F62;">&#39;ultra.nft.ft&#39;</span><span style="color:#24292E;">, permission: </span><span style="color:#032F62;">&#39;active&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">                data: {</span></span>
<span class="line"><span style="color:#24292E;">                    share: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    receiver: </span><span style="color:#032F62;">&quot;ultra.prtcl&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        blocksBehind: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        expireSeconds: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div>`,12),t=[o];function p(c,r,i,E,d,h){return n(),a("div",null,t)}const b=s(e,[["render",p]]);export{u as __pageData,b as default};
