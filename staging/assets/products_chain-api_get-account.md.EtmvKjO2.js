import{_ as n,C as a,c as o,H as l,L as t,o as p}from"./chunks/framework.EMf-NuUT.js";const C=JSON.parse('{"title":"/get_account","description":"","frontmatter":{"title":"/get_account"},"headers":[],"relativePath":"products/chain-api/get-account.md","filePath":"products/chain-api/get-account.md","lastUpdated":null}'),e={name:"products/chain-api/get-account.md"},c=t(`<h1 id="post-get-account" tabindex="-1">POST - /get_account <a class="header-anchor" href="#post-get-account" aria-label="Permalink to &quot;POST - /get_account&quot;">​</a></h1><p>Returns account information for a given blockchain account name.</p><p><strong>Highlights</strong></p><ul><li>core_liquid_balance - Amount of UOS Available</li><li>RAM available</li><li>Permission list</li></ul><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-label="Permalink to &quot;Body&quot;">​</a></h3><p>Account name should be <code>., 1-5, a-z</code> and up to 12 characters long.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;account_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ultra&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;account_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ultra&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">curl -X POST -d &#39;{ &quot;account_name&quot;: &quot;ultra&quot; }&#39;  https://api.ultra.eossweden.org/v1/chain/get_account</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">curl -X POST -d &#39;{ &quot;account_name&quot;: &quot;ultra&quot; }&#39;  https://api.ultra.eossweden.org/v1/chain/get_account</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><details class="details custom-block"><summary>Response</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;account_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ultra&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;head_block_num&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">61670882</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;head_block_time&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2022-06-10T20:32:04.500&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;privileged&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;last_code_update&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2021-11-09T11:58:35.500&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;created&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2021-06-18T07:07:07.000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;core_liquid_balance&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0.01100000 UOS&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;ram_quota&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;net_weight&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;cpu_weight&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;net_limit&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;used&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;available&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;max&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;cpu_limit&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;used&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;available&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;max&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;ram_usage&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2301250</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;permissions&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">		{</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#9ECBFF;">&quot;perm_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;active&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#9ECBFF;">&quot;parent&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;owner&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#9ECBFF;">&quot;required_auth&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;threshold&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;keys&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;accounts&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">					{</span></span>
<span class="line"><span style="color:#E1E4E8;">						</span><span style="color:#9ECBFF;">&quot;permission&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#9ECBFF;">&quot;actor&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eosio.prods&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#9ECBFF;">&quot;permission&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;active&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">						},</span></span>
<span class="line"><span style="color:#E1E4E8;">						</span><span style="color:#9ECBFF;">&quot;weight&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">					}</span></span>
<span class="line"><span style="color:#E1E4E8;">				],</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;waits&quot;</span><span style="color:#E1E4E8;">: []</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		{</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#9ECBFF;">&quot;perm_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;owner&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#9ECBFF;">&quot;parent&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#9ECBFF;">&quot;required_auth&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;threshold&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;keys&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;accounts&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">					{</span></span>
<span class="line"><span style="color:#E1E4E8;">						</span><span style="color:#9ECBFF;">&quot;permission&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#9ECBFF;">&quot;actor&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eosio.prods&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">							</span><span style="color:#9ECBFF;">&quot;permission&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;active&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">						},</span></span>
<span class="line"><span style="color:#E1E4E8;">						</span><span style="color:#9ECBFF;">&quot;weight&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">					}</span></span>
<span class="line"><span style="color:#E1E4E8;">				],</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#9ECBFF;">&quot;waits&quot;</span><span style="color:#E1E4E8;">: []</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	],</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;total_resources&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;self_delegated_bandwidth&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;refund_request&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;account_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ultra&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;head_block_num&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">61670882</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;head_block_time&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2022-06-10T20:32:04.500&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;privileged&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;last_code_update&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2021-11-09T11:58:35.500&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;created&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2021-06-18T07:07:07.000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;core_liquid_balance&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0.01100000 UOS&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;ram_quota&quot;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;net_weight&quot;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;cpu_weight&quot;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;net_limit&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;used&quot;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;available&quot;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;max&quot;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;cpu_limit&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;used&quot;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;available&quot;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;max&quot;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;ram_usage&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2301250</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;permissions&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">		{</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#032F62;">&quot;perm_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;active&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#032F62;">&quot;parent&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;owner&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#032F62;">&quot;required_auth&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;threshold&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;keys&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;accounts&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">					{</span></span>
<span class="line"><span style="color:#24292E;">						</span><span style="color:#032F62;">&quot;permission&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#032F62;">&quot;actor&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eosio.prods&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#032F62;">&quot;permission&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;active&quot;</span></span>
<span class="line"><span style="color:#24292E;">						},</span></span>
<span class="line"><span style="color:#24292E;">						</span><span style="color:#032F62;">&quot;weight&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">					}</span></span>
<span class="line"><span style="color:#24292E;">				],</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;waits&quot;</span><span style="color:#24292E;">: []</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		{</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#032F62;">&quot;perm_name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;owner&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#032F62;">&quot;parent&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#032F62;">&quot;required_auth&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;threshold&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;keys&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;accounts&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">					{</span></span>
<span class="line"><span style="color:#24292E;">						</span><span style="color:#032F62;">&quot;permission&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#032F62;">&quot;actor&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eosio.prods&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">							</span><span style="color:#032F62;">&quot;permission&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;active&quot;</span></span>
<span class="line"><span style="color:#24292E;">						},</span></span>
<span class="line"><span style="color:#24292E;">						</span><span style="color:#032F62;">&quot;weight&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">					}</span></span>
<span class="line"><span style="color:#24292E;">				],</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#032F62;">&quot;waits&quot;</span><span style="color:#24292E;">: []</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	],</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;total_resources&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;self_delegated_bandwidth&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;refund_request&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><h2 id="try-it" tabindex="-1">Try It <a class="header-anchor" href="#try-it" aria-label="Permalink to &quot;Try It&quot;">​</a></h2>`,12);function r(E,y,u,i,q,F){const s=a("DemoApi");return p(),o("div",null,[c,l(s,{type:"POST",query:"/v1/chain/get_account",body:[{key:"account_name",value:"ultra"}]})])}const h=n(e,[["render",r]]);export{C as __pageData,h as default};
