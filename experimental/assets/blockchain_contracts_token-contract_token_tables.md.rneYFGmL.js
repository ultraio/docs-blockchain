import{_ as t,c as s,o as i,N as e}from"./chunks/framework.HE4KbJuF.js";const g=JSON.parse('{"title":"Token Tables","description":"","frontmatter":{"title":"Token Tables","order":1},"headers":[],"relativePath":"blockchain/contracts/token-contract/token_tables.md","filePath":"blockchain/contracts/token-contract/token_tables.md","lastUpdated":null}'),a={name:"blockchain/contracts/token-contract/token_tables.md"},l=e('<h1 id="token-tables" tabindex="-1">Token Tables <a class="header-anchor" href="#token-tables" aria-label="Permalink to &quot;Token Tables&quot;">​</a></h1><h2 id="accounts" tabindex="-1">accounts <a class="header-anchor" href="#accounts" aria-label="Permalink to &quot;accounts&quot;">​</a></h2><p>Store all account balance created by this contract</p><ul><li>Code: <code>eosio.token</code></li><li>Table: <code>accounts</code></li><li>Scope: <code>user</code></li><li>Key: <code>symbol_raw_value</code></li><li>Data</li></ul><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>balance</code></td><td>eosio::asset</td><td>Token balance</td></tr></tbody></table><ul><li><code>cleos</code> Query Example</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> table</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">USE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">R</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> accounts</span></span></code></pre></div><ul><li><code>curl</code> query example</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NODEOS_API_I</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/v1/chain/get_table_rows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;scope&quot;:&quot;&lt;USER&gt;&quot;, &quot;code&quot;:&quot;eosio.token&quot;, &quot;table&quot;:&quot;accounts&quot;, &quot;json&quot;: true}&#39;</span></span></code></pre></div><h2 id="stat" tabindex="-1">stat <a class="header-anchor" href="#stat" aria-label="Permalink to &quot;stat&quot;">​</a></h2><p>Store token supply created by this contract</p><ul><li>Code: <code>eosio.token</code></li><li>Table: <code>stat</code></li><li>Scope: <code>symbol_raw_value</code></li><li>Key: <code>symbol_raw_value</code></li><li>Data</li></ul><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>supply</code></td><td>eosio::asset</td><td>Available token supply</td></tr><tr><td><code>max_supply</code></td><td>eosio::asset</td><td>Maximum token supply</td></tr><tr><td><code>issuer</code></td><td>eosio::name</td><td>Issuer of this token</td></tr></tbody></table><ul><li><code>cleos</code> Query Example</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> table</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SYMBOL_RAW_VALU</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stat</span></span></code></pre></div><ul><li><code>curl</code> query example</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NODEOS_API_I</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/v1/chain/get_table_rows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;scope&quot;:&quot;&lt;SYMBOL_RAW_VALUE&gt;&quot;, &quot;code&quot;:&quot;eosio.token&quot;, &quot;table&quot;:&quot;stat&quot;, &quot;json&quot;: true}&#39;s</span></span></code></pre></div><h2 id="metadata" tabindex="-1">metadata <a class="header-anchor" href="#metadata" aria-label="Permalink to &quot;metadata&quot;">​</a></h2><p>Store token metadata</p><ul><li>Code: <code>eosio.token</code></li><li>Table: <code>metadata</code></li><li>Scope: <code>symbol_raw_value</code></li><li>Key: <code>symbol_raw_value</code></li><li>Data</li></ul><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>symbol</code></td><td>eosio::symbol</td><td>The symbol of the token</td></tr><tr><td><code>name</code></td><td>eosio::name</td><td>The name of the token</td></tr><tr><td><code>icon</code></td><td>string</td><td>The URL of token&#39;s icon</td></tr><tr><td><code>description</code></td><td>string</td><td>The description of the token</td></tr><tr><td><code>color</code></td><td>uint32_t</td><td>The display color of the token</td></tr></tbody></table><ul><li><code>cleos</code> Query Example</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> table</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SYMBOL_RAW_VALU</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> metadata</span></span></code></pre></div><ul><li><code>curl</code> query example</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NODEOS_API_I</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/v1/chain/get_table_rows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;scope&quot;:&quot;&lt;SYMBOL_RAW_VALUE&gt;&quot;, &quot;code&quot;:&quot;eosio.token&quot;, &quot;table&quot;:&quot;metadata&quot;, &quot;json&quot;: true}&#39;s</span></span></code></pre></div><h2 id="tokenconfig" tabindex="-1">tokenconfig <a class="header-anchor" href="#tokenconfig" aria-label="Permalink to &quot;tokenconfig&quot;">​</a></h2><p>Store token strategy configuration</p><ul><li>Code: <code>eosio.token</code></li><li>Table: <code>tokenconfig</code></li><li>Scope: <code>symbol_raw_value</code></li><li>Key: <code>symbol_raw_value</code></li><li>Data</li></ul><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>trigger_supply</code></td><td>eosio::asset</td><td>The threshold supply for when strategy will be applied to transfer</td></tr><tr><td><code>strategy</code></td><td>uint16_t</td><td>The strategy will be used to decide which config to use tax or burn. 0 nothing, 1 burn, 2 tax</td></tr><tr><td><code>rate_bp</code></td><td>uint16_t</td><td>The rate where strategy will be applied in basis where 1 is 0.01%</td></tr><tr><td><code>tax_receiver</code></td><td>eosio::name</td><td>The account where tax will be transfer to</td></tr><tr><td><code>whitelisted_accounts</code></td><td>std::vector&lt;eosio::name&gt;</td><td>The accounts will be exempted from strategy</td></tr></tbody></table><ul><li><code>cleos</code> Query Example</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> table</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SYMBOL_RAW_VALU</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tokenconfig</span></span></code></pre></div><ul><li><code>curl</code> query example</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NODEOS_API_I</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/v1/chain/get_table_rows</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{&quot;scope&quot;:&quot;&lt;SYMBOL_RAW_VALUE&gt;&quot;, &quot;code&quot;:&quot;eosio.token&quot;, &quot;table&quot;:&quot;tokenconfig&quot;, &quot;json&quot;: true}&#39;s</span></span></code></pre></div>',33),o=[l];function h(d,n,p,k,c,r){return i(),s("div",null,o)}const F=t(a,[["render",h]]);export{g as __pageData,F as default};