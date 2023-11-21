import{_ as s,c as a,o as n,L as e}from"./chunks/framework.vEmsHuDM.js";const q=JSON.parse('{"title":"mgrnfts","description":"","frontmatter":{"title":"mgrnfts","order":18},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/mgrnfts.md","filePath":"blockchain/contracts/nft-contract/nft-actions/mgrnfts.md","lastUpdated":null}'),t={name:"blockchain/contracts/nft-contract/nft-actions/mgrnfts.md"},o=e(`<h1 id="mgrnfts" tabindex="-1">mgrnfts <a class="header-anchor" href="#mgrnfts" aria-label="Permalink to &quot;mgrnfts&quot;">​</a></h1><p>This action can be used to migrate tokens from v0 to v1 as continuous migration.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p><strong>Parameter validation</strong></p><p>Owners should be an array of token owner accounts.</p><p>The number of tokens to migrate is specified as total_no, which should not be zero.</p><p><strong>Main operations</strong></p><p>Each v0 token record in token.a table is converted to v1 token record and moved to token.b table. This process continues until total_no of tokens are migrated or it reaches the end of token.a table of the last owner account of owners.</p><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th></tr></thead><tbody><tr><td>owners</td><td><code>vector&lt;name&gt;</code></td><td>array of strings</td></tr><tr><td>total_no</td><td>uint64_t</td><td>number</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cleos push action eosio.nft.ft mgrnfts &#39;{&quot;owners&quot;: [&quot;alice&quot;, &quot;bob&quot;], &quot;total_no&quot;: 10}&#39; -p ultra.nft.ft@active</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cleos push action eosio.nft.ft mgrnfts &#39;{&quot;owners&quot;: [&quot;alice&quot;, &quot;bob&quot;], &quot;total_no&quot;: 10}&#39; -p ultra.nft.ft@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">await api.transact({</span></span>
<span class="line"><span style="color:#e1e4e8;">  actions: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    {</span></span>
<span class="line"><span style="color:#e1e4e8;">      account: &quot;eosio.nft.ft&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      name: &quot;mgrnfts&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      authorization: [{ actor: &quot;ultra.nft.ft&quot;, permission: &quot;active&quot; }],</span></span>
<span class="line"><span style="color:#e1e4e8;">      data: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        owners: [&quot;alice&quot;, &quot;bob&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">        total_no: 10</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}, {</span></span>
<span class="line"><span style="color:#e1e4e8;">  blocksBehind: 3,</span></span>
<span class="line"><span style="color:#e1e4e8;">  expireSeconds: 30,</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">await api.transact({</span></span>
<span class="line"><span style="color:#24292e;">  actions: [</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      account: &quot;eosio.nft.ft&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      name: &quot;mgrnfts&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      authorization: [{ actor: &quot;ultra.nft.ft&quot;, permission: &quot;active&quot; }],</span></span>
<span class="line"><span style="color:#24292e;">      data: {</span></span>
<span class="line"><span style="color:#24292e;">        owners: [&quot;alice&quot;, &quot;bob&quot;],</span></span>
<span class="line"><span style="color:#24292e;">        total_no: 10</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">}, {</span></span>
<span class="line"><span style="color:#24292e;">  blocksBehind: 3,</span></span>
<span class="line"><span style="color:#24292e;">  expireSeconds: 30,</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div>`,13),l=[o];function p(c,r,i,d,u,h){return n(),a("div",null,l)}const y=s(t,[["render",p]]);export{q as __pageData,y as default};
