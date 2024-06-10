import{_ as s,c as i,o as a,N as t}from"./chunks/framework.RWhliK3J.js";const E=JSON.parse('{"title":"purchase.a","description":"","frontmatter":{"title":"purchase.a","order":31},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/purchase.a.md","filePath":"blockchain/contracts/nft-contract/nft-actions/purchase.a.md","lastUpdated":null}'),e={name:"blockchain/contracts/nft-contract/nft-actions/purchase.a.md"},n=t(`<h1 id="purchase-a" tabindex="-1">purchase.a <a class="header-anchor" href="#purchase-a" aria-label="Permalink to &quot;purchase.a&quot;">​</a></h1><p>This action is used to purchase uniqs directly from a token factory.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><ol><li><p>User provides information about the Uniq they wish to purchase</p></li><li><p>Verify that the Uniq has a purchase requirement</p></li><li><p>Obtain the price of the Uniq and convert to UOS</p></li><li><p>Verify that if the purchase requirement requires additional uniqs that the uniqs passed are relevant to the purchase requirement</p></li><li><p>Additional transfer, and burning actions may be used on individual uniqs during the verification process. They are kept if the transaction fails</p></li><li><p>Distribute shares based on purchase requirements, done through inline calls</p></li><li><p>Send protocol fee. Amount and account are configured under <code>global.share</code> table scope <code>0</code>, done through inline calls</p></li><li><p>Send remainder of shares to the factory manager, done through inline calls</p></li><li><p>Issue the token to the user. <strong>Note</strong>: minting a Uniq requires additional UOS paid by the factory manager. Refer for details to <a href="./issue.b.html">issue.b - issue tokens with token factory</a></p></li><li><p>Increment the number of tokens purchased for the given user</p></li><li><p>If a purchase option has been configured with <code>group_restriction</code> via the <code>setprchsreq.a</code> action, the <code>purchase.a</code> action will take these restrictions into account before allowing the purchase to proceed.</p></li></ol><blockquote><p><strong>Note</strong>: For details on how to configure <code>group_restriction</code> through <code>setprchsreq.a</code>, please refer to <a href="./setprchsreq.a.html">setprchsreq.a</a>.</p></blockquote><p>If promoter_id is set, the account will be added to resale shares list and will have the payment distributed accordingly. If no promoter is specified then default promoter will be used and is specified by Ultra in <code>saleshrlmcfg</code> table under a scope of <code>0</code> in <code>default_promoter</code>.</p><h3 id="supplying-uniqs-for-purchases" tabindex="-1">Supplying Uniqs for Purchases <a class="header-anchor" href="#supplying-uniqs-for-purchases" aria-label="Permalink to &quot;Supplying Uniqs for Purchases&quot;">​</a></h3><p>In some cases a token factory may require certain uniqs to exist in the user inventory table to enable the user to purchase a uniq.</p><p>Think of it like a pre-requisite or an entry ticket to purchasing other uniqs.</p><p>When a uniq is being purchased it goes through our <code>verify_user_uniqs</code> function that looks into the buyer&#39;s inventory and verifies that the uniq factories required uniqs matches the user supplied uniqs. The function checks that the <code>user supplied uniqs</code> from the user matches the <code>factory required uniqs</code>. The function checks that the user is passing uniqs that have the correct token factory id, and checks that the user <strong>is not</strong> passing irrelavant uniqs.</p><p>It also ensures that the strategy that is being passed for each uniq matches the strategy used by the factory for the specific token factory id.</p><p>Strategy meaning: <code>0</code> just check ownership of the provided nft, <code>1</code> burn the uniq and <code>2</code> transferring the uniq out of the user inventory.</p><p>All of these strategies, and individual uniqs can be chosen by the user to ensure they are removing the uniq they want to remove, rather than risking a more &#39;rare&#39; uniq that they want to keep.</p><h3 id="burning-uniqs-on-purchase" tabindex="-1">Burning Uniqs on Purchase <a class="header-anchor" href="#burning-uniqs-on-purchase" aria-label="Permalink to &quot;Burning Uniqs on Purchase&quot;">​</a></h3><p>During the purchase if a uniq has a strategy of <code>1</code> it will automatically perform an inline call to the <code>burn</code> action and pass over any tokens that need to be burned.</p><p>Internally we are constructing a vector of which <code>token_ids</code> to be burned.</p><h3 id="transferring-uniqs-on-purchase" tabindex="-1">Transferring Uniqs on Purchase <a class="header-anchor" href="#transferring-uniqs-on-purchase" aria-label="Permalink to &quot;Transferring Uniqs on Purchase&quot;">​</a></h3><p>During the purchase if a uniq has a strategy of <code>2</code> it will automatically perform an inline call to the <code>transfer</code> action and pass over any tokens that need to be transferred.</p><p>The transferred uniqs will automatically be moved to the <code>transfer_tokens_receiver_account</code> that was setup during the purchase requirements setup.</p><p>Internally we are constructing a vector of which <code>token_ids</code> to be transferred.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p><strong>Action Interface</strong></p><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Description</th></tr></thead><tbody><tr><td>token_factory_id</td><td>uint64_t</td><td>number</td><td>ID of a token factory to purchase from</td></tr><tr><td>index</td><td>uint64_t</td><td>number</td><td>Index of purchase option to use</td></tr><tr><td>max_price</td><td>asset</td><td>string</td><td>Maximum amount of UOS you allow to be withdrawn from your account. If price is set in USD this will prevent transaction from overcharging you in case USD price goes down</td></tr><tr><td>buyer</td><td>eosio::name</td><td>string</td><td>Account that will pay UOS and/or Uniqs for this purchase</td></tr><tr><td>receiver</td><td>eosio::asset</td><td>string</td><td>Account that will receive the Uniq from this purchase</td></tr><tr><td>promoter_id</td><td>std::optional&lt;eosio::name&gt;</td><td>string / null</td><td>Optional promoter of the purchase transaction. If no promoter is provided then the default promoter specified in <code>saleshrlmcfg</code> (scope <code>0</code>) will be used if present</td></tr><tr><td>user_uniqs</td><td>std::optional&lt;provided_user_uniqs&gt;</td><td>Array / null</td><td>List of uniqs the buyer is willing to provide for this purchase option to either be taken from him or to just verify their presence. Refer to <code>provided_user_uniqs</code> breakdown below</td></tr><tr><td>memo</td><td>std::string</td><td>string</td><td>A short operation description</td></tr></tbody></table><p><code>user_uniqs</code> is a vector of <code>provided_user_uniqs</code>, which has the following structure</p><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Description</th></tr></thead><tbody><tr><td>token_id</td><td>uint64_t</td><td>number</td><td>ID of the Uniq owned by the buyer</td></tr><tr><td>strategy</td><td>uint8_t</td><td>number</td><td>What the buyer allows to happen to this token. Refer to <a href="./../nft-tables.html#fctrprchs-a">fctrprchs.a</a> for allowed values and usage</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cleos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eosio.nft.ft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> purchase.a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;token_factory_id&quot;: 100,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;index&quot;: 1,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;max_price&quot;: &quot;100.00000000 UOS&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;buyer&quot;: &quot;alice&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;receiver&quot;: &quot;token_receiver_account&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;promoter_id&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;user_uniqs&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;tokens&quot;: [{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;token_id&quot;: 77,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;strategy&quot;: 2</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;memo&quot;: &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alice</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    actions: [{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      account: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;purchase.a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      authorization: [{ actor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, permission: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        purchase: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          token_factory_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          index: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          max_price: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100.00000000 UOS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          buyer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          receiver: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;token_receiver_account&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          promoter_id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          user_uniqs: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            tokens: [{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              token_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">77</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              strategy: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    blocksBehind: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    expireSeconds: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,29),r=[n];function h(o,p,l,d,c,k){return a(),i("div",null,r)}const g=s(e,[["render",h]]);export{E as __pageData,g as default};