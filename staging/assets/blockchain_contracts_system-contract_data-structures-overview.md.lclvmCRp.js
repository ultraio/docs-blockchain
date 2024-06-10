import{_ as t,c as e,o as d,N as a}from"./chunks/framework.1tZ7tdwO.js";const b=JSON.parse('{"title":"Data Structures Overview","description":"","frontmatter":{"title":"Data Structures Overview","order":6},"headers":[],"relativePath":"blockchain/contracts/system-contract/data-structures-overview.md","filePath":"blockchain/contracts/system-contract/data-structures-overview.md","lastUpdated":null}'),r={name:"blockchain/contracts/system-contract/data-structures-overview.md"},o=a('<h1 id="data-structures-overview" tabindex="-1">Data Structures Overview <a class="header-anchor" href="#data-structures-overview" aria-label="Permalink to &quot;Data Structures Overview&quot;">​</a></h1><h2 id="delband-delegated-power-bandwidth-per-account" tabindex="-1">delband - delegated POWER bandwidth per account <a class="header-anchor" href="#delband-delegated-power-bandwidth-per-account" aria-label="Permalink to &quot;delband - delegated POWER bandwidth per account&quot;">​</a></h2><p>The table contains the information about POWER bandwidth delegation between different accounts.</p><table><thead><tr><th>Table name</th><th>delband</th></tr></thead><tbody><tr><td>Code</td><td>eosio.system</td></tr><tr><td>Scope</td><td>account</td></tr><tr><td>Primary key</td><td>to</td></tr></tbody></table><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>from</td><td>eosio::name</td><td>The account that delegates POWER</td></tr><tr><td>to</td><td>eosio::name</td><td>The account it is delegated to</td></tr><tr><td>power_weight</td><td>eosio::asset</td><td>The amount of staked UOS to POWER</td></tr></tbody></table><h2 id="kyc-account-kyc-information" tabindex="-1">kyc - account KYC information <a class="header-anchor" href="#kyc-account-kyc-information" aria-label="Permalink to &quot;kyc - account KYC information&quot;">​</a></h2><table><thead><tr><th>Table name</th><th>kyc</th></tr></thead><tbody><tr><td>Code</td><td>eosio.system</td></tr><tr><td>Scope</td><td>account</td></tr><tr><td>Primary key</td><td>provider</td></tr></tbody></table><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>provider</td><td>eosio::name</td><td>The KYC provider account</td></tr><tr><td>cert_id</td><td>eosio::checksum256</td><td>The KYC provider certificate ID</td></tr><tr><td>req_signature</td><td>eosio::signature</td><td>The account signature</td></tr><tr><td>pro_signature</td><td>eosio::signature</td><td>The KYC provider signature</td></tr></tbody></table><h2 id="paycntactid-contract-action-id-catalog" tabindex="-1">paycntactid - contract action ID catalog <a class="header-anchor" href="#paycntactid-contract-action-id-catalog" aria-label="Permalink to &quot;paycntactid - contract action ID catalog&quot;">​</a></h2><table><thead><tr><th>Table name</th><th>paycntactid</th></tr></thead><tbody><tr><td>Code</td><td>eosio.system</td></tr><tr><td>Scope</td><td>paid contract</td></tr><tr><td>Primary key</td><td>paid_action</td></tr></tbody></table><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>paid_action</td><td>eosio::name</td><td>The catalog contract action ID</td></tr><tr><td>paid_contract_action_id</td><td>uint64_t</td><td>Auto incremented ID for the contract action</td></tr></tbody></table><h2 id="payerpred-predicates-for-paying-for-3rd-parties" tabindex="-1">payerpred - predicates for paying for 3rd parties <a class="header-anchor" href="#payerpred-predicates-for-paying-for-3rd-parties" aria-label="Permalink to &quot;payerpred - predicates for paying for 3rd parties&quot;">​</a></h2><table><thead><tr><th>Table name</th><th>payerpred</th></tr></thead><tbody><tr><td>Code</td><td>eosio.system</td></tr><tr><td>Scope</td><td>payer account</td></tr><tr><td>Primary key</td><td>paid_contract_action_id</td></tr></tbody></table><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>paid_contract_action_id</td><td>uint64_t</td><td>The catalog contract action ID, references paycntactid::paid_contract_action_id</td></tr><tr><td>maximum_power_usage</td><td>uint64_t</td><td>The max POWER to be paid for</td></tr><tr><td>predicate_contract</td><td>std::optional<code>&lt;eosio::name&gt;</code></td><td>The contract to use for inline action creation</td></tr><tr><td>predicate_action</td><td>std::optional<code>&lt;eosio::name&gt;</code></td><td>The inline action to create when the predicate is executed</td></tr></tbody></table><h2 id="rammarket-ram-trades-settings-and-limitations" tabindex="-1">rammarket - RAM trades settings and limitations <a class="header-anchor" href="#rammarket-ram-trades-settings-and-limitations" aria-label="Permalink to &quot;rammarket - RAM trades settings and limitations&quot;">​</a></h2><p>The table contains the information about the RAM market (buys / sells) settings such as KYC/non KYC account limits, global RAM reserve and fee calculation coefficients</p><table><thead><tr><th>Table name</th><th>rammarket</th></tr></thead><tbody><tr><td>Code</td><td>eosio.system</td></tr><tr><td>Scope</td><td>eosio.system</td></tr><tr><td>Primary key</td><td>ram_supply.symbol</td></tr></tbody></table><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>ram_supply</td><td>eosio::asset</td><td>RAM available on the market</td></tr><tr><td>ram_reserved</td><td>eosio::asset</td><td>RAM reserved for ultra and its partners</td></tr><tr><td>ram_total_non_kyc</td><td>eosio::asset</td><td>Maximum amount of RAM for non-KYC users</td></tr><tr><td>ram_threshold_kyc</td><td>eosio::asset</td><td>Unused RAM limits for KYC users</td></tr><tr><td>ram_purchase_limit</td><td>eosio::asset</td><td>RAM purchase limit in a single buy action</td></tr><tr><td>core_reserve</td><td>eosio::asset</td><td>UOS reserve that represents market state at full ram supply</td></tr><tr><td>connector_weight</td><td>double</td><td>In Bancor algorithm describes how tightly the RAM is connected to UOS</td></tr><tr><td>ram_fee_rate</td><td>double</td><td>RAM fee fraction applied to each purchase</td></tr><tr><td>is_trade_enabled</td><td>bool</td><td>enables buy and sell actions for RAM</td></tr></tbody></table><h2 id="refunds-information-on-refunding-of-the-delegated-power" tabindex="-1">refunds - information on refunding of the delegated POWER <a class="header-anchor" href="#refunds-information-on-refunding-of-the-delegated-power" aria-label="Permalink to &quot;refunds - information on refunding of the delegated POWER&quot;">​</a></h2><p>The table contains information about the refunds that delegating accounts can request after delegation period. For example, if Alice delegates some POWER to Bob, Alice can refund the POWER after the delegation period (3 days).</p><table><thead><tr><th>Table name</th><th>refunds</th></tr></thead><tbody><tr><td>Code</td><td>eosio.system</td></tr><tr><td>Scope</td><td>account</td></tr><tr><td>Primary key</td><td>owner</td></tr></tbody></table><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>owner</td><td>eosio::name</td><td>The account that delegated POWER and now being refunded</td></tr><tr><td>request_time</td><td>eosio::time_point_sec</td><td>The time when the POWER was delegated</td></tr><tr><td>power_amount</td><td>eosio::asset</td><td>The amount of staked UOS to POWER</td></tr></tbody></table><h2 id="userres-resource-allocation-per-account" tabindex="-1">userres - resource allocation per account <a class="header-anchor" href="#userres-resource-allocation-per-account" aria-label="Permalink to &quot;userres - resource allocation per account&quot;">​</a></h2><p>The table contains the information about the resources that are allocated some account.</p><table><thead><tr><th>Table name</th><th>userres</th></tr></thead><tbody><tr><td>Code</td><td>eosio.system</td></tr><tr><td>Scope</td><td>account</td></tr><tr><td>Primary key</td><td>owner</td></tr></tbody></table><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>owner</td><td>eosio::name</td><td>The account that currently owns the resources</td></tr><tr><td>power_weight</td><td>eosio::asset</td><td>The amount of staked UOS to POWER</td></tr><tr><td>ram_bytes</td><td>int64_t</td><td>The amount of available RAM</td></tr><tr><td>flags</td><td>uint32_t</td><td>Indicates if RAM or POWER is managed by the accountram_managed = 1, power_managed = 2</td></tr></tbody></table>',26),i=[o];function n(c,s,h,l,u,p){return d(),e("div",null,i)}const y=t(r,[["render",n]]);export{b as __pageData,y as default};