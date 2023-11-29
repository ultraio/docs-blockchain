import{_ as s,c as n,o as a,L as l}from"./chunks/framework.EMf-NuUT.js";const D=JSON.parse('{"title":"Developer resources","description":"","frontmatter":{"title":"Developer resources","order":15,"outline":[0,4]},"headers":[],"relativePath":"products/ultra-wallet/developer-resources.md","filePath":"products/ultra-wallet/developer-resources.md","lastUpdated":null}'),p={name:"products/ultra-wallet/developer-resources.md"},o=l(`<h1 id="developer-resources" tabindex="-1">Developer resources <a class="header-anchor" href="#developer-resources" aria-label="Permalink to &quot;Developer resources&quot;">​</a></h1><h2 id="local-server" tabindex="-1">Local server <a class="header-anchor" href="#local-server" aria-label="Permalink to &quot;Local server&quot;">​</a></h2><p>The Ultra wallet extension is only active when the page in the browser uses the HTTPS protocol. That means that you will need a local server with SSL enabled. Many frameworks have an option to easily configure it for you, but if you need a quick development environment, we recommend:</p><ul><li><a href="https://vitejs.dev/" target="_blank" rel="noreferrer">ViteJS</a></li><li><a href="https://www.npmjs.com/package/@vitejs/plugin-basic-ssl" target="_blank" rel="noreferrer">@vitejs/plugin-basic-ssl</a></li></ul><h2 id="ultra-wallet-types" tabindex="-1">Ultra Wallet types <a class="header-anchor" href="#ultra-wallet-types" aria-label="Permalink to &quot;Ultra Wallet types&quot;">​</a></h2><p>These are the TypeScript ambient definitions for Ultra Wallet APIs, which provides code completions in the code editor.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qKUaF" id="tab-aWUFMvE" checked="checked"><label for="tab-aWUFMvE">window.d.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> EventEmitter </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;events&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> global {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Window</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">ultra</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IUltraWalletApi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventEmitter</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IUltraWalletApi</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Request permission to establish a connection with the Wallet extension</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">IResponse</span><span style="color:#E1E4E8;">&lt;{ </span><span style="color:#FFAB70;">blockchainId</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">publicKey</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> }&gt;&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Request permission to disconnect the app from the wallet extension</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">disconnect</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Request permission to sign a message with the user&#39;s private key.</span></span>
<span class="line"><span style="color:#6A737D;">     * The message should have one of the next prefixes: \`0x\`, \`UOSx\`, or \`message:\`</span></span>
<span class="line"><span style="color:#6A737D;">     * Message signatures do not involve network fees.</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">message</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">signMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">message</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">IResponse</span><span style="color:#E1E4E8;">&lt;{ </span><span style="color:#FFAB70;">signature</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> }&gt;&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Request permission to sign a transaction object or an array of them with</span></span>
<span class="line"><span style="color:#6A737D;">     * the user&#39;s private key and push it to the blockchain network.</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">transaction</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">signTransaction</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">transaction</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ITransaction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ITransaction</span><span style="color:#E1E4E8;">[])</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">IResponse</span><span style="color:#E1E4E8;">&lt;{ </span><span style="color:#FFAB70;">transactionHash</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> }&gt;&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IResponse</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">status</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;fail&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">data</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">message</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ITransaction</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The blockchain smart contract owner account</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">contract</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The blockchain smart contract name</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">action</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The smart contract action parameters as a JSON Array of Objects</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@type</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{T}</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">data</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> EventEmitter </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;events&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> global {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Window</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">ultra</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IUltraWalletApi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventEmitter</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IUltraWalletApi</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Request permission to establish a connection with the Wallet extension</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">IResponse</span><span style="color:#24292E;">&lt;{ </span><span style="color:#E36209;">blockchainId</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">; </span><span style="color:#E36209;">publicKey</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> }&gt;&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Request permission to disconnect the app from the wallet extension</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">disconnect</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">void</span><span style="color:#24292E;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Request permission to sign a message with the user&#39;s private key.</span></span>
<span class="line"><span style="color:#6A737D;">     * The message should have one of the next prefixes: \`0x\`, \`UOSx\`, or \`message:\`</span></span>
<span class="line"><span style="color:#6A737D;">     * Message signatures do not involve network fees.</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">message</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">signMessage</span><span style="color:#24292E;">(</span><span style="color:#E36209;">message</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">IResponse</span><span style="color:#24292E;">&lt;{ </span><span style="color:#E36209;">signature</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> }&gt;&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Request permission to sign a transaction object or an array of them with</span></span>
<span class="line"><span style="color:#6A737D;">     * the user&#39;s private key and push it to the blockchain network.</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">transaction</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">signTransaction</span><span style="color:#24292E;">(</span><span style="color:#E36209;">transaction</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ITransaction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ITransaction</span><span style="color:#24292E;">[])</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">IResponse</span><span style="color:#24292E;">&lt;{ </span><span style="color:#E36209;">transactionHash</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> }&gt;&gt;;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IResponse</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">status</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;success&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;fail&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">data</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">message</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ITransaction</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The blockchain smart contract owner account</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">contract</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The blockchain smart contract name</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">action</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * The smart contract action parameters as a JSON Array of Objects</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{T}</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">data</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div>`,7),e=[o];function t(c,r,y,E,i,F){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
