import{_ as i,a as s}from"./chunks/wallet-buy-uos.Qim6yVeD.js";import{_ as c,D as n,c as u,k as e,a as t,I as a,N as o,o as h}from"./chunks/framework.RWhliK3J.js";const d="/experimental/assets/select-network-mainnet-toolkit.hbKefuph.png",p="/experimental/assets/toolkit-tx-builder.JiXMdGwY.png",g="/experimental/assets/toolkit-tx-builder-select-contract.S36yeTUU.png",_="/experimental/assets/toolkit-tx-builder-select-action.EfNooY1c.png",m="/experimental/assets/toolkit-newnonebact-form.tOq6JGga.png",y="/experimental/assets/toolkit-newnonebact-confirmation-form.ZLDvN_db.png",f="/experimental/assets/ultra-wallet-confirm-tx.QwtFyex8.png",k="/experimental/assets/toolkit-tx-success.KRTBSCSZ.png",b="/experimental/assets/explorer-account-created.Z4ERMKfu.png",H=JSON.parse('{"title":"How to create an Ultra Pro Wallet using Ultra Toolkit","description":"","frontmatter":{"title":"How to create an Ultra Pro Wallet using Ultra Toolkit","order":-99988,"oultine":[0,5]},"headers":[],"relativePath":"tutorials/guides/how-to-create-ultra-pro-wallet-using-toolkit.md","filePath":"tutorials/guides/how-to-create-ultra-pro-wallet-using-toolkit.md","lastUpdated":null}'),w={name:"tutorials/guides/how-to-create-ultra-pro-wallet-using-toolkit.md"},U=e("h1",{id:"how-to-create-an-ultra-pro-wallet-using-ultra-toolkit",tabindex:"-1"},[t("How to create an Ultra Pro Wallet using Ultra Toolkit "),e("a",{class:"header-anchor",href:"#how-to-create-an-ultra-pro-wallet-using-ultra-toolkit","aria-label":'Permalink to "How to create an Ultra Pro Wallet using Ultra Toolkit"'},"​")],-1),T=e("p",null,"This tutorial will cover the simplest process of creating a developer account on Mainnet to be used to interact with the blockchain using the Ultra Toolkit.",-1),P=e("h2",{id:"prerequisites",tabindex:"-1"},[t("Prerequisites "),e("a",{class:"header-anchor",href:"#prerequisites","aria-label":'Permalink to "Prerequisites"'},"​")],-1),x=e("li",null,[t("Account created using official "),e("a",{href:"https://ultra.io/",target:"_blank",rel:"noreferrer"},"Ultra client"),t(" or you can create it later during the tutorial using the Wallet Extension")],-1),S=e("li",null,[t("Installed the "),e("a",{href:"https://chromewebstore.google.com/detail/ultra-wallet/kjjebdkfeagdoogagbhepmbimaphnfln",target:"_blank",rel:"noreferrer"},"Ultra Wallet Chrome Extension"),t(". Simply click "),e("code",null,"Add to"),t(" on the extension page")],-1),v=o('<h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>The goal of this tutorial is to create a new developer Ultra Pro Wallet on Mainnet, using the Ultra Toolkit. You can use your Ultra Pro Wallet to directly interact with the blockchain. It is desireable for developers as it provides a more granular control over your account and allows it to be easily used for other tools and libraries like <code>cleos</code> or <code>Wharfkit</code>.</p><h2 id="open-and-log-in-to-the-ultra-wallet" tabindex="-1">Open and log in to the Ultra Wallet <a class="header-anchor" href="#open-and-log-in-to-the-ultra-wallet" aria-label="Permalink to &quot;Open and log in to the Ultra Wallet&quot;">​</a></h2><p>To be able to create an Ultra Pro Wallet on Mainnet you will need to open your Wallet Extension and make sure you are switched to Mainnet. (You may need to log out from your Testnet account if it is currently logged in by clicking on the circular icon and clicking <code>Log out</code>).</p><p><img src="'+i+'" alt=""></p><p>Now if you already have an Ultra Account (created using the Ultra client) then you can simply use the <code>Sign In</code> option. If you don&#39;t have an account yet and need to create an account then proceed with <code>Sign Up</code> option, after signing up return back to this step and now use the <code>Sign In</code> option.</p><h2 id="buy-uos-tokens" tabindex="-1">Buy UOS tokens <a class="header-anchor" href="#buy-uos-tokens" aria-label="Permalink to &quot;Buy UOS tokens&quot;">​</a></h2>',7),W=o('<p>If you don&#39;t have the required amount yet then you can utilize the <code>Buy UOS</code> option of the Ultra Wallet extension.</p><p><img src="'+s+'" alt=""></p><p>When you have enough funds you can proceed with the creation of the Ultra Pro Wallet.</p><h2 id="generate-a-key-pair" tabindex="-1">Generate a Key Pair <a class="header-anchor" href="#generate-a-key-pair" aria-label="Permalink to &quot;Generate a Key Pair&quot;">​</a></h2><p>You will need a <a href="./../../blockchain/general/antelope-ultra/public-and-private-keys.html">private and public key pair</a> in order to create your Ultra Pro Wallet. If you already have a key pair, you can skip this step, or you can generate a new one using the form below by pressing the <code>Generate Key</code> button.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>In most cases we don&#39;t recommend generating private keys online. Please seek out some of the <a href="./../../blockchain/general/antelope-ultra/public-and-private-keys.html#alternative-ways-to-generate-keypairs">alternative ways</a> to generate a key pair safely.</p><p>It is up to you to properly secure your private key and not to lose it. If you lose the original copy of the private key you may eventually lose access to your new Ultra Pro Wallet account completely.</p></div>',6),A=o('<p><br><br> Once you have your key pair, you can proceed with the creation of the Ultra Pro Wallet.</p><h2 id="log-in-to-the-ultra-toolkit" tabindex="-1">Log in to the Ultra Toolkit <a class="header-anchor" href="#log-in-to-the-ultra-toolkit" aria-label="Permalink to &quot;Log in to the Ultra Toolkit&quot;">​</a></h2><p>Log in to the Ultra Toolkit (<a href="https://toolkit.ultra.io" target="_blank" rel="noreferrer">https://toolkit.ultra.io</a>) using your Ultra Wallet extension. Refer to <a href="./../fundamentals/tutorial-login-to-toolkit.html">Log in to the Ultra Toolkit Tutorial</a> if you need help logging into the Ultra Toolkit.</p><p>Once logged in, make sure you have selected <code>Mainnet</code> endpoint in the Ultra Toolkit.</p><p><img src="'+d+'" alt=""></p><h2 id="create-an-ultra-pro-wallet" tabindex="-1">Create an Ultra Pro Wallet <a class="header-anchor" href="#create-an-ultra-pro-wallet" aria-label="Permalink to &quot;Create an Ultra Pro Wallet&quot;">​</a></h2><ol><li>Once logged in to the toolkit, click on <code>Transaction Builder</code> from the Ultra Toolkit sidebar menu to open the transaction builder page.</li></ol><p><img src="'+p+'" alt=""></p><ol start="2"><li>On the transaction builder page, click on the <code>eosio</code> contract button to load all related actions.</li></ol><p><img src="'+g+'" alt=""></p><ol start="3"><li>From the list of actions, search for <code>newnonebact</code> and click on <code>eosio::newnonebact</code> option.</li></ol><p><img src="'+_+'" alt=""></p>',12),C={start:"4"},I=e("li",null,[e("p",null,[t("Clicking on the "),e("code",null,"eosio::newnonebact"),t(" option will open up the transaction modal.")])],-1),O=e("p",null,[t("Fill the required fields for the "),e("code",null,"newnonebact"),t(" action.")],-1),q=o("<li><strong>creator</strong>: <code>aa1aa2aa3ai4</code> (your existing Ultra Account, who will pay the account creation fee)</li><li>Under <code>owner</code> section: <ol><li><strong>threshold</strong>: Input <code>1</code> as the threshold for owner authority.</li><li>Click on the <code>Add</code> button for <code>keys</code> section and enter your public key in the <strong>key</strong> input, and <code>1</code> in the <strong>weight</strong> input.</li></ol></li><li>Under <code>active</code> section: <ol><li><strong>threshold</strong>: Input <code>1</code> as the threshold for active authority.</li><li>Click on the <code>Add</code> button for <code>keys</code> section and enter your public key in the <strong>key</strong> input, and <code>1</code> in the <strong>weight</strong> input.</li></ol></li>",3),N=e("strong",null,"max_payment",-1),V=e("li",null,[t("Once you have inputted all the values, click on the "),e("code",null,"Send 1 Action"),t(" button.")],-1),E=o('<p><img src="'+m+'" alt=""></p><ol start="6"><li>Clicking on the <code>Send 1 Action</code> button will open up the transaction confirmation modal. You can click on the <code>Details</code> button to view the transaction in JSON form. Click on the <code>Confirm</code> button to submit your transaction.</li></ol><p><img src="'+y+'" alt=""></p><ol start="7"><li>Confirm and sign the transaction using the Ultra Wallet extension. This step is crucial as it authorizes the blockchain to execute the transfer under your account.</li></ol><p><img src="'+f+'" alt=""></p><ol start="8"><li>After signing the transaction, you will see a confirmation screen indicating that the transaction was successfully completed. To check the transaction on the block explorer, click on the <code>View in Explorer</code> text. Your new Ultra Pro Wallet name will be listed in the actions list.</li></ol><p><img src="'+k+'" alt=""><img src="'+b+'" alt=""></p><p>For more information on the action, please refer to the <a href="./../../blockchain/contracts/system-contract/system-actions/newnonebact.html"><code>newnonebact</code> action documentation</a>.</p><h2 id="sign-in-to-the-ultra-wallet-using-ultra-pro-wallet" tabindex="-1">Sign In to the Ultra Wallet using Ultra Pro Wallet <a class="header-anchor" href="#sign-in-to-the-ultra-wallet-using-ultra-pro-wallet" aria-label="Permalink to &quot;Sign In to the Ultra Wallet using Ultra Pro Wallet&quot;">​</a></h2><p>The process of using your new Ultra Pro Wallet through the Ultra Wallet extension is identical to the <a href="./../fundamentals/tutorial-setup-the-wallet.html">Tutorial - Setup Ultra Wallet</a>. The only exception is if you wish to continue using the <code>Mainnet</code> network when logging into the Wallet, as the Ultra Pro Wallet you&#39;ve just made is exclusively for Mainnet.</p>',10);function D(G,M,R,Y,B,K){const l=n("OracleConversion"),r=n("KeyGenerator");return h(),u("div",null,[U,T,P,e("ul",null,[x,S,e("li",null,[t("Your account must have sufficient UOS tokens for transactions and fees. Current Ultra Pro Wallet creation price is "),a(l,{amount:2,scope:"......2nf5.o4",param:7e4}),t(". This tutorial will briefly cover how to get UOS on Mainnet but if you already have some then you will be able to skip that step")])]),v,e("p",null,[t("To be able to create an Ultra Pro Wallet you will need some UOS available on your Ultra Account. The current Ultra Pro Wallet creation price is 2 USD which is approximately "),a(l,{amount:2,scope:"......2nf5.o4",param:7e4}),t(" so you need to have at least this amount of UOS and, preferably, a bit more to account for UOS price fluctuations.")]),W,a(r),A,e("ol",C,[I,e("li",null,[O,e("ol",null,[q,e("li",null,[N,t(": You need to specify the maximum amount of UOS you are willing to pay to create the Ultra Pro Wallet. The current Ultra Pro Wallet creation price is 2 USD which is approximately "),a(l,{amount:2,scope:"......2nf5.o4",param:7e4}),t(" so you need to input at least this amount of UOS and, preferably, a bit more to account for UOS price fluctuations (e.g. increase the current price by 1 UOS).")]),V])])]),E])}const J=c(w,[["render",D]]);export{H as __pageData,J as default};