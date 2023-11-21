import{_ as a,C as n,c as t,H as o,L as l,o as p}from"./chunks/framework.vEmsHuDM.js";const h=JSON.parse('{"title":"/get_abi","description":"","frontmatter":{"title":"/get_abi","outline":[0,4]},"headers":[],"relativePath":"products/chain-api/get-abi.md","filePath":"products/chain-api/get-abi.md","lastUpdated":null}'),e={name:"products/chain-api/get-abi.md"},c=l(`<h1 id="post-get-abi" tabindex="-1">POST - /get_abi <a class="header-anchor" href="#post-get-abi" aria-label="Permalink to &quot;POST - /get_abi&quot;">​</a></h1><p>Returns information about a smart contract&#39;s available actions, tables, etc. This is really useful for creating data validation off-chain for forms when having a user create a transaction based on manual entries.</p><h2 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-label="Permalink to &quot;Body&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;account_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ultra.tools&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;account_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ultra.tools&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">curl -X POST -d &#39;{ &quot;account_name&quot;: &quot;ultra.tools&quot; }&#39;  https://api.ultra.eossweden.org/v1/chain/get_abi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">curl -X POST -d &#39;{ &quot;account_name&quot;: &quot;ultra.tools&quot; }&#39;  https://api.ultra.eossweden.org/v1/chain/get_abi</span></span></code></pre></div><h2 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h2><details class="details custom-block"><summary>Response</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;account_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ultra.tools&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;abi&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eosio::abi/1.1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;types&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;structs&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">			{</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// This is an action name</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// The action itself can be found further down.</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;correlate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;base&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// These are the required fields</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;fields&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">					{</span></span>
<span class="line"><span style="color:#E1E4E8;">						</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;payer&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">						</span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;name&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">					},</span></span>
<span class="line"><span style="color:#E1E4E8;">					{</span></span>
<span class="line"><span style="color:#E1E4E8;">						</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;correlation_id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">						</span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;string&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">					}</span></span>
<span class="line"><span style="color:#E1E4E8;">				]</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">		],</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;actions&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// This action matches the one above.</span></span>
<span class="line"><span style="color:#E1E4E8;">			{</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;correlate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;correlate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;ricardian_contract&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">		],</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;tables&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">			{</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;corrids&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;index_type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;i64&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;key_names&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;key_types&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;correlation_id&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">		],</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;ricardian_clauses&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;error_messages&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;abi_extensions&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;variants&quot;</span><span style="color:#E1E4E8;">: []</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;account_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ultra.tools&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;abi&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eosio::abi/1.1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;types&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;structs&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">			{</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// This is an action name</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// The action itself can be found further down.</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;correlate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;base&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// These are the required fields</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;fields&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">					{</span></span>
<span class="line"><span style="color:#24292E;">						</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;payer&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">						</span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;name&quot;</span></span>
<span class="line"><span style="color:#24292E;">					},</span></span>
<span class="line"><span style="color:#24292E;">					{</span></span>
<span class="line"><span style="color:#24292E;">						</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;correlation_id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">						</span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;string&quot;</span></span>
<span class="line"><span style="color:#24292E;">					}</span></span>
<span class="line"><span style="color:#24292E;">				]</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		],</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;actions&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// This action matches the one above.</span></span>
<span class="line"><span style="color:#24292E;">			{</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;correlate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;correlate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;ricardian_contract&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		],</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;tables&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">			{</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;corrids&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;index_type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;i64&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;key_names&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;key_types&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;correlation_id&quot;</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		],</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;ricardian_clauses&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;error_messages&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;abi_extensions&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;variants&quot;</span><span style="color:#24292E;">: []</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><h2 id="try-it" tabindex="-1">Try It <a class="header-anchor" href="#try-it" aria-label="Permalink to &quot;Try It&quot;">​</a></h2>`,9);function r(E,y,i,u,q,F){const s=n("DemoApi");return p(),t("div",null,[c,o(s,{type:"POST",query:"/v1/chain/get_abi",body:[{key:"account_name",value:"eosio.token"}]},null,8,["body"])])}const _=a(e,[["render",r]]);export{h as __pageData,_ as default};
