import{_ as s,c as a,o as n,L as e,ag as t}from"./chunks/framework.vEmsHuDM.js";const _=JSON.parse('{"title":"Account & Permissions","description":"","frontmatter":{"title":"Account & Permissions","outline":[0,4],"order":-97},"headers":[],"relativePath":"blockchain/general/antelope-ultra/accounts-and-permissions.md","filePath":"blockchain/general/antelope-ultra/accounts-and-permissions.md","lastUpdated":null}'),l={name:"blockchain/general/antelope-ultra/accounts-and-permissions.md"},i=e(`<h1 id="accounts-permissions-keys" tabindex="-1">Accounts, Permissions, &amp; Keys <a class="header-anchor" href="#accounts-permissions-keys" aria-label="Permalink to &quot;Accounts, Permissions, &amp; Keys&quot;">​</a></h1><p>Unlike Bitcoin and Ethereum, Ultra necessitates an account on the network for participation. This account employs keypairs linked to permissions, controlling access to specific network actions.</p><p>A keypair, generated through elliptic curve cryptography, involves associating private and public keys. The private key proves ownership of an account, which, in turn, has a public key assigned to one of its permissions.</p><p>Ultra accounts come with default permissions called OWNER and ACTIVE. OWNER functions as a superuser, capable of updating keys for all permissions as the root permission. ACTIVE, another default permission, can execute all actions on the account except updating keys to the OWNER permission.</p><p>Smart contracts are deployed to an account, and each action within a smart contract can have keys assigned to it. This feature allows for specific limitations on which entity, along with which keypair, can call that action.</p><h2 id="account-structure-output" tabindex="-1">Account Structure Output <a class="header-anchor" href="#account-structure-output" aria-label="Permalink to &quot;Account Structure Output&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">permissions:</span></span>
<span class="line"><span style="color:#e1e4e8;">    owner 1: 1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV</span></span>
<span class="line"><span style="color:#e1e4e8;">        active 1: 1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV</span></span>
<span class="line"><span style="color:#e1e4e8;">memory:</span></span>
<span class="line"><span style="color:#e1e4e8;">    quota:       unlimited  used:      3.758 KiB</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">net bandwidth:</span></span>
<span class="line"><span style="color:#e1e4e8;">    used:               unlimited</span></span>
<span class="line"><span style="color:#e1e4e8;">    available:          unlimited</span></span>
<span class="line"><span style="color:#e1e4e8;">    limit:              unlimited</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">cpu bandwidth:</span></span>
<span class="line"><span style="color:#e1e4e8;">    used:               unlimited</span></span>
<span class="line"><span style="color:#e1e4e8;">    available:          unlimited</span></span>
<span class="line"><span style="color:#e1e4e8;">    limit:              unlimited</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">permissions:</span></span>
<span class="line"><span style="color:#24292e;">    owner 1: 1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV</span></span>
<span class="line"><span style="color:#24292e;">        active 1: 1 EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV</span></span>
<span class="line"><span style="color:#24292e;">memory:</span></span>
<span class="line"><span style="color:#24292e;">    quota:       unlimited  used:      3.758 KiB</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">net bandwidth:</span></span>
<span class="line"><span style="color:#24292e;">    used:               unlimited</span></span>
<span class="line"><span style="color:#24292e;">    available:          unlimited</span></span>
<span class="line"><span style="color:#24292e;">    limit:              unlimited</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">cpu bandwidth:</span></span>
<span class="line"><span style="color:#24292e;">    used:               unlimited</span></span>
<span class="line"><span style="color:#24292e;">    available:          unlimited</span></span>
<span class="line"><span style="color:#24292e;">    limit:              unlimited</span></span></code></pre></div><h2 id="account-structure-diagram" tabindex="-1">Account Structure Diagram <a class="header-anchor" href="#account-structure-diagram" aria-label="Permalink to &quot;Account Structure Diagram&quot;">​</a></h2><p><img src="`+t+'" alt=""></p>',9),c=[i];function o(p,r,u,d,h,m){return n(),a("div",null,c)}const f=s(l,[["render",o]]);export{_ as __pageData,f as default};
