import{_ as e,c as i,o as t,N as a}from"./chunks/framework.1tZ7tdwO.js";const g=JSON.parse('{"title":"Installing the Client","description":"","frontmatter":{"title":"Installing the Client","outline":[0,4],"order":4},"headers":[],"relativePath":"products/uniq-discord-bot/installing-the-client.md","filePath":"products/uniq-discord-bot/installing-the-client.md","lastUpdated":null}'),s={name:"products/uniq-discord-bot/installing-the-client.md"},l=a('<h1 id="installing-the-client" tabindex="-1">Installing the Client <a class="header-anchor" href="#installing-the-client" aria-label="Permalink to &quot;Installing the Client&quot;">​</a></h1><p>This is where the HTML data lives, and includes all the necessary files for a small single page application.</p><p>This utilizes Vite to create a single page application that utilizes Vue.</p><h2 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h2><p>From the root directory of this monorepo; run any of the following commands.</p><h3 id="vue-development-server" tabindex="-1">Vue Development Server <a class="header-anchor" href="#vue-development-server" aria-label="Permalink to &quot;Vue Development Server&quot;">​</a></h3><p>Spins up a localhost server to perform development. This spins up a Vite server on port 3000 (usually) and allows you to make changes and view them in your browser.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue-dev</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span></span></code></pre></div><h3 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;Build&quot;">​</a></h3><p>Builds the client-side into a single page application, and pushes it to the server folder under packages/server/dist/html.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span></span></code></pre></div><h2 id="folder-structure" tabindex="-1">Folder Structure <a class="header-anchor" href="#folder-structure" aria-label="Permalink to &quot;Folder Structure&quot;">​</a></h2><p>This is a traditional Vite + Vue folder structure with TypeScript.</p><p>Everything is inside of the src directory.</p>',14),n=[l];function r(o,h,d,p,c,u){return t(),i("div",null,n)}const m=e(s,[["render",r]]);export{g as __pageData,m as default};