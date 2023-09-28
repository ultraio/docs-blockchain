import{_ as s,v as a,b as e,R as n}from"./chunks/framework.a49639fc.js";const F=JSON.parse('{"title":"buy","description":"","frontmatter":{"title":"buy","order":6,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/NFT Contract/NFT Actions/buy.md","filePath":"contracts/NFT Contract/NFT Actions/buy.md","lastUpdated":1695922762000}'),o={name:"contracts/NFT Contract/NFT Actions/buy.md"},t=n(`<h1 id="buy" tabindex="-1">buy <a class="header-anchor" href="#buy" aria-label="Permalink to &quot;buy&quot;">​</a></h1><p>Purchase a token from the resale marketplace.</p><p>This will allow the user to purchase a token from the resale marketplace where non-fungible tokens are sold. This requires the buyer’s permission and has an optional parameter that will allow the buyer to gift the token to another user. In the case the token isn&#39;t gifted, they should specify themselves as the receiver of the token. There is the optional parameter for a promoter to be tacked on to the sale of a token.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p><strong>Parameter validation</strong></p><p>Upon the usage of the buy action, the action will verify that the parameters supplied in the action have values, such as buyer, receiver, token_id, max_price, promoter_id. The memo specifically has a 256-byte limitation. The required authorization is the buyer. The buyer will always need to specify who the receiver of a token is.</p><p>Currently max_price is not being used with v0.</p><p><strong>On-the-fly migration</strong></p><p>After v1 is activated by activers action, token exists either in v0 token table, token.a, or v1 token table, token.b. If the token exists in token.a, then the token factory from which the token was minted exists in v0 factory table, factory.a, which, in this case, is moved to factory.b. In the following descriptions, token factory and token should be read as v1 data structures.</p><p><strong>Main operations</strong></p><p>The function will look into the resale table and attempt to find a token that matches the token_id specified by the user during their buy action. The transaction will fail if the token is not found or the token is not for sale. This also prevents the buyer from buying their own resale tokens.</p><p>Once the token is found it will retrieve the token factory from the token factory table. This value can then be used to ensure that the trading window is valid for the token that is being bought.</p><p>If min_resell_price for a token factory is in USD the final price is calculated as max of resell_price and min_resell_price converted to UOS using 1 min moving average. If max_price is less than final price transaction is reverted.</p><p>If promoter_id is set, the account will be added to resale shares list and will have the payment distributed accordingly. If not promoter is specified then default promoter will be used specified by Ultra in <code>saleshrlmcfg</code> table under a scope of <code>1</code> in <code>default_promoter</code>.</p><p>Resale shares in the global resale table will be initialized if un-available.</p><p>Shares will be calculated and distributed based on the <a href="./../../../learn/Ultra Blockchain/2nd-hand-sale.html">2nd Hand Sale Policy</a>.</p><p>After the shares are distributed and no additional transfers need to occur the token will be emplaced into the receiver’s account and the original token owner will have the token erased from their account.</p><p>The resale table will have the token erased as well.</p><p><strong>Notifications</strong></p><p><code>require_recipient</code> is done for <code>buyer</code>, <code>receiver</code>, <code>owner</code> of a token under resell and for asset manager of the token factory.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p>Try to think of the action parameters as a <strong>JSON Object</strong> when reading this table. There will be a <strong>JavaScript</strong> example of the action below this table.</p><h3 id="v0" tabindex="-1">V0 <a class="header-anchor" href="#v0" aria-label="Permalink to &quot;V0&quot;">​</a></h3><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>buyer</td><td>eosio::name</td><td>The account that pays for the NFT</td></tr><tr><td>receiver</td><td>eosio::name</td><td>The account that receives the NFT</td></tr><tr><td>memo</td><td>std::string</td><td>Memo</td></tr><tr><td>token_id</td><td>uint64_t</td><td>The NFT ID</td></tr><tr><td>max_price</td><td>eosio::asset</td><td>The maximal NFT price</td></tr><tr><td>promoter_id</td><td>eosio::name</td><td>The promoter account that receives comission</td></tr></tbody></table><h3 id="v1" tabindex="-1">V1 <a class="header-anchor" href="#v1" aria-label="Permalink to &quot;V1&quot;">​</a></h3><p>No Changes</p><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[{ &quot;buyer&quot;: &quot;buyer.user.acc&quot;, &quot;receiver&quot;: &quot;buyer.user.acc&quot;, &quot;token_id&quot;: 1, &quot;memo&quot;: &quot;buying&quot;, &quot;max_price&quot;: &quot;4.00000000 UOS&quot;, &quot;promoter_id&quot;: &quot;shroud&quot; }]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buyer.user.acc@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transact</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">account</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">buy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">authorization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">buyer.user.acc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">buy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">buyer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">buyer.user.acc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">receiver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">buyer.user.acc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">token_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">memo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">buying</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">max_price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4.00000000 UOS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">promoter_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">shroud</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">blocksBehind</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">expireSeconds</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,30),l=[t];function p(r,c,i,y,D,h){return a(),e("div",null,l)}const u=s(o,[["render",p]]);export{F as __pageData,u as default};