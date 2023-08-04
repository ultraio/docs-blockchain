import{_ as s,v as n,b as a,R as l}from"./chunks/framework.a49639fc.js";const A=JSON.parse('{"title":"Subscriptions","description":"","frontmatter":{"title":"Subscriptions","deploy":["staging","mainnet"],"order":4},"headers":[],"relativePath":"guides/NFTAPI/subscriptions.md","filePath":"guides/NFTAPI/subscriptions.md","lastUpdated":1691183757000}'),p={name:"guides/NFTAPI/subscriptions.md"},o=l(`<h1 id="subscriptions" tabindex="-1">Subscriptions <a class="header-anchor" href="#subscriptions" aria-label="Permalink to &quot;Subscriptions&quot;">​</a></h1><h2 id="uniqfactories" tabindex="-1"><code>uniqFactories</code> <a class="header-anchor" href="#uniqfactories" aria-label="Permalink to &quot;\`uniqFactories\`&quot;">​</a></h2><h5 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h5><p>This subscription is used to find information about uniq factories. If no filter is applied, it will return all existing factories.</p><h5 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h5><p>Returns a <a href="./types.html#uniqfactory"><code>UniqFactory!</code></a></p><h5 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h5><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>assetManager</code> - <a href="./types.html#walletid"><code>WalletId</code></a></td><td>Filter to help you to retrieve only factories related to a specific asset manager. For example &#39;ultra.nft.ft&#39;.</td></tr></tbody></table><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><h5 id="query" tabindex="-1">Query <a class="header-anchor" href="#query" aria-label="Permalink to &quot;Query&quot;">​</a></h5><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">subscription </span><span style="color:#82AAFF;">UniqFactories</span><span style="color:#A6ACCD;">($assetManager: WalletId) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">uniqFactories</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">assetManager</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">$assetManager</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">accountMintingLimit</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">assetCreator</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">assetManager</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">conditionlessReceivers</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">defaultUniqMetadata</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">cachedSource</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">content</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">attributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">descriptor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">dynamic</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dynamicAttributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">uris</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dynamicResources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uris</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">medias</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">gallery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">hero</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">product</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">square</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">properties</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">resources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">subName</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">source</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">status</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">metadata</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">cachedSource</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">content</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">attributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">dynamic</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">medias</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">gallery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">hero</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">product</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">square</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">properties</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">resources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">subName</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">locked</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">source</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">status</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">mintableWindow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">resale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">minimumPrice</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">currency</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">code</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">symbol</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">shares</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">account</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">basisPoints</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">ratio</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">status</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">stock</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">authorized</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">existing</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">maxMintable</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">mintable</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">minted</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">tradingWindow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">transferWindow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h5 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h5><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assetManager</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aa1aa2aa3ag4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span></code></pre></div><h5 id="response-1" tabindex="-1">Response <a class="header-anchor" href="#response-1" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">uniqFactories</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">accountMintingLimit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">987</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">assetCreator</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aa1aa2aa3ag4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">assetManager</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aa1aa2aa3ag4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">conditionlessReceivers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aa1aa2aa3ag4</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">defaultUniqMetadata</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqMetadata</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">987</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">metadata</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqFactoryMetadata</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">mintableWindow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqFactoryMintableWindow</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">resale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqFactoryResale</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ACTIVE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">stock</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqFactoryStock</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">tradingWindow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqFactoryTradingWindow</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">transferWindow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqFactoryTransferWindow</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">COLLECTIBLE</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><a href="#group-Operations-Subscriptions">Subscriptions</a></p><h2 id="uniqsoffactory" tabindex="-1"><code>uniqsOfFactory</code> <a class="header-anchor" href="#uniqsoffactory" aria-label="Permalink to &quot;\`uniqsOfFactory\`&quot;">​</a></h2><h5 id="description-1" tabindex="-1">Description <a class="header-anchor" href="#description-1" aria-label="Permalink to &quot;Description&quot;">​</a></h5><p>This subscription is used to find uniqs that are associated with a factory based on their ID.</p><h5 id="response-2" tabindex="-1">Response <a class="header-anchor" href="#response-2" aria-label="Permalink to &quot;Response&quot;">​</a></h5><p>Returns a <a href="./types.html#uniq"><code>Uniq!</code></a></p><h5 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h5><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>blockStep</code> - <a href="./types.html#blockstep"><code>BlockStep</code></a></td><td>Filter on type of transaction. Irreversible by default if not provided.</td></tr><tr><td><code>factoryId</code> - <a href="./types.html#bigint"><code>BigInt!</code></a></td><td>On chain id of the factory.</td></tr><tr><td><code>ids</code> - <a href="./types.html#bigint"><code>[BigInt!]</code></a></td><td>Filter from a list of uniq id. It can be used to know with a list of uniq witch one is related to the factory.</td></tr><tr><td><code>serialRange</code> - <a href="./types.html#uniqserialrangeinput"><code>UniqSerialRangeInput</code></a></td><td>Filter from a range of serial number.</td></tr></tbody></table><h4 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h4><h5 id="query-1" tabindex="-1">Query <a class="header-anchor" href="#query-1" aria-label="Permalink to &quot;Query&quot;">​</a></h5><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">subscription </span><span style="color:#82AAFF;">UniqsOfFactory</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  $blockStep: BlockStep</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  $factoryId: BigInt</span><span style="color:#89DDFF;">!,</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ids: [BigInt</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  $serialRange: UniqSerialRangeInput</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">uniqsOfFactory</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">blockStep</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">$blockStep</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">factoryId</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">$factoryId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ids</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">$ids</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">serialRange</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">$serialRange</span></span>
<span class="line"><span style="color:#F07178;">  ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">factory</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">accountMintingLimit</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">assetCreator</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">assetManager</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">conditionlessReceivers</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">defaultUniqMetadata</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">cachedSource</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">content</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">attributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">descriptor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">dynamic</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">dynamicAttributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uris</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">dynamicResources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uris</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">medias</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">gallery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">hero</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">product</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">square</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">properties</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">resources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">subName</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">source</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">status</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">metadata</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">cachedSource</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">content</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">attributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">dynamic</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">medias</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">gallery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">hero</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">product</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">square</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">properties</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">resources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">subName</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">locked</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">source</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">status</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">mintableWindow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">resale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">minimumPrice</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">currency</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">code</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">symbol</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">shares</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">account</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">basisPoints</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">ratio</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">status</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">stock</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">authorized</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">existing</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">maxMintable</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">mintable</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">minted</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">tradingWindow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">transferWindow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">metadata</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">cachedSource</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">content</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">attributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">descriptor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">dynamic</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dynamicAttributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">uris</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dynamicResources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uris</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">medias</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">gallery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">hero</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">product</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">square</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">properties</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">resources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">subName</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">source</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">status</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">mintDate</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">owner</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">resale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">onSaleDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">price</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">creators</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">basisPoints</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">ratio</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">currency</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">code</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">symbol</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">owner</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">basisPoints</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">ratio</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">platform</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">basisPoints</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">ratio</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">promoter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">basisPoints</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">ratio</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">serialNumber</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">tradingPeriod</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">duration</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">transferPeriod</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">duration</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h5 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-label="Permalink to &quot;Variables&quot;">​</a></h5><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blockStep</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IRREVERSIBLE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">factoryId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">987</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ids</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span><span style="color:#F78C6C;">987</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">serialRange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">UniqSerialRangeInput</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h5 id="response-3" tabindex="-1">Response <a class="header-anchor" href="#response-3" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">uniqsOfFactory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">factory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqFactory</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">987</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">metadata</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqMetadata</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">mintDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Thu Jul 13 2023 13:27:11 GMT+0200</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">owner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aa1aa2aa3ag4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">resale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqResale</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">serialNumber</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">987</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">tradingPeriod</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqTradingPeriod</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">transferPeriod</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqTransferPeriod</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">COLLECTIBLE</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><a href="#group-Operations-Subscriptions">Subscriptions</a></p><h2 id="uniqsofwallet" tabindex="-1"><code>uniqsOfWallet</code> <a class="header-anchor" href="#uniqsofwallet" aria-label="Permalink to &quot;\`uniqsOfWallet\`&quot;">​</a></h2><h5 id="description-2" tabindex="-1">Description <a class="header-anchor" href="#description-2" aria-label="Permalink to &quot;Description&quot;">​</a></h5><p>This subscription is used to recover user-specific uniqs.</p><h5 id="response-4" tabindex="-1">Response <a class="header-anchor" href="#response-4" aria-label="Permalink to &quot;Response&quot;">​</a></h5><p>Returns a <a href="./types.html#uniq"><code>Uniq!</code></a></p><h5 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-label="Permalink to &quot;Arguments&quot;">​</a></h5><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>blockStep</code> - <a href="./types.html#blockstep"><code>BlockStep</code></a></td><td>Filter on type of transaction. Irreversible by default if not provided.</td></tr><tr><td><code>ids</code> - <a href="./types.html#bigint"><code>[BigInt!]</code></a></td><td>Filter from a list of uniq id. Can be used to know with a list of uniq witch one is related to the factory.</td></tr><tr><td><code>walletId</code> - <a href="./types.html#walletid"><code>WalletId!</code></a></td><td>Wallet id of the user.</td></tr></tbody></table><h4 id="example-2" tabindex="-1">Example <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;Example&quot;">​</a></h4><h5 id="query-2" tabindex="-1">Query <a class="header-anchor" href="#query-2" aria-label="Permalink to &quot;Query&quot;">​</a></h5><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">subscription </span><span style="color:#82AAFF;">UniqsOfWallet</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  $blockStep: BlockStep</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ids: [BigInt</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  $walletId: WalletId</span><span style="color:#89DDFF;">!</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">uniqsOfWallet</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">blockStep</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">$blockStep</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ids</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">$ids</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">walletId</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">$walletId</span></span>
<span class="line"><span style="color:#F07178;">  ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">factory</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">accountMintingLimit</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">assetCreator</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">assetManager</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">conditionlessReceivers</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">defaultUniqMetadata</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">cachedSource</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">content</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">attributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">descriptor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">dynamic</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">dynamicAttributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uris</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">dynamicResources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uris</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">medias</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">gallery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">hero</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">product</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">square</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">properties</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">resources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">subName</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">source</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">status</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">metadata</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">cachedSource</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">content</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">attributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">dynamic</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">medias</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">gallery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">hero</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">product</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">square</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">properties</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">resources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">subName</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">locked</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">source</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">status</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">mintableWindow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">resale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">minimumPrice</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">currency</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">code</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">symbol</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">shares</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">account</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">basisPoints</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">ratio</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">status</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">stock</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">authorized</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">existing</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">maxMintable</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">mintable</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">minted</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">tradingWindow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">transferWindow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">metadata</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">cachedSource</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">content</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">attributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">descriptor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">dynamic</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">description</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dynamicAttributes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">uris</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dynamicResources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uris</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">medias</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">gallery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">hero</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">product</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">square</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">properties</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">resources</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">subName</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">source</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">contentType</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">integrity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">hash</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">uri</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">status</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">mintDate</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">owner</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">resale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">onSaleDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">price</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">creators</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">basisPoints</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">ratio</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">currency</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">code</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">symbol</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">owner</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">basisPoints</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">ratio</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">platform</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">basisPoints</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">ratio</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">promoter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">amount</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">basisPoints</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">ratio</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">serialNumber</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">tradingPeriod</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">duration</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">transferPeriod</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">duration</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">endDate</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">startDate</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">type</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h5 id="variables-2" tabindex="-1">Variables <a class="header-anchor" href="#variables-2" aria-label="Permalink to &quot;Variables&quot;">​</a></h5><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blockStep</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IRREVERSIBLE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ids</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span><span style="color:#F78C6C;">987</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">walletId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aa1aa2aa3ag4</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h5 id="response-5" tabindex="-1">Response <a class="header-anchor" href="#response-5" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">uniqsOfWallet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">factory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqFactory</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">987</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">metadata</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqMetadata</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">mintDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Thu Jul 13 2023 13:27:11 GMT+0200</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">owner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aa1aa2aa3ag4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">resale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqResale</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">serialNumber</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">987</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">tradingPeriod</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqTradingPeriod</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">transferPeriod</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UniqTransferPeriod</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">COLLECTIBLE</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,45),e=[o];function c(t,r,y,F,D,i){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{A as __pageData,u as default};
