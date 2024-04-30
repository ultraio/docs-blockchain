import{_ as s,c as a,o as i,N as e}from"./chunks/framework.I0_e-zsE.js";const g=JSON.parse('{"title":"Response interface","description":"","frontmatter":{"title":"Response interface","order":3,"outline":[0,4]},"headers":[],"relativePath":"products/ultra-wallet/response-format.md","filePath":"products/ultra-wallet/response-format.md","lastUpdated":null}'),n={name:"products/ultra-wallet/response-format.md"},t=e(`<h1 id="response-interface" tabindex="-1">Response interface <a class="header-anchor" href="#response-interface" aria-label="Permalink to &quot;Response interface&quot;">​</a></h1><p>To standardize the communication between decentralized applications and the extension, each method will respond with a Promise and this response format.</p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Based on JSend a specification for a simple, no-frills,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * JSON based format for application-level communication.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * https://github.com/omniti-labs/jsend</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;success&quot;, &quot;fail&quot; or &quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Response data</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Forbiden&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Optional: end-user-readable message, explaining what went wrong.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,3),l=[t];function p(r,h,o,k,d,c){return i(),a("div",null,l)}const E=s(n,[["render",p]]);export{g as __pageData,E as default};