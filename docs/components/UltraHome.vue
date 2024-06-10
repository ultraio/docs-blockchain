<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useData, withBase } from 'vitepress';
import UltraFooter from './UltraFooter.vue';
import UltraSupport from './UltraSupport.vue';
import UltraHomeScroll from './UltraHomeScroll.vue';

const { frontmatter } = useData();

const links = ref([
    { href: '#getting-started', text: 'Getting Started' },
    { href: '#popularresources', text: 'Popular Resources' },
    { href: '#gamedevelopers', text: 'Game Developers' },
    { href: '#contentcreators', text: 'Content Creators' },
    { href: '#marketplaceowners', text: 'Marketplace Owners' },
    { href: '#enterprises', text: 'Enterprises' },
    { href: '#support', text: 'Support' },
]);

const popularresources = [
    {
        href: 'tutorials/index/index.html',
        title: 'Tutorials',
        desc: 'A set of tutorials that can get you started building on our technology.',
        icon: '/images/links/guides.svg',
    },
    {
        href: 'blockchain/general/index.html',
        title: 'Blockchain',
        desc: 'In-depth documentation on our blockchain network and the block producers that run it.',
        icon: '/images/links/learn.svg',
    },
    {
        href: 'tutorials/smart-contracts/index.html',
        title: 'Build Smart Contracts',
        desc: 'Documentation on our smart contract system and how to build them.',
        icon: '/images/links/contracts.svg',
    },
    {
        href: 'products/chain-api/index.html',
        title: 'Chain API',
        desc: 'All about available REST API endpoints available through our block producers.',
        icon: '/images/links/api.svg',
    },
    {
        href: 'products/nft-api/introduction.html',
        title: 'Ultra API',
        desc: 'Read data from Uniqs and Uniq Factories using our Ultra API.',
        icon: '/images/links/api.svg',
    },
    {
        href: 'products/index.html',
        title: 'Products',
        desc: 'Ultras ecosystem is full of useful tools that every developer should know about.',
        icon: '/images/links/tools.svg',
    },
];

const gamelinks = [
    {
        href: 'game-developers/unity/index.html',
        title: 'Build with Unity',
        desc: '',
        icon: '/images/links/unity.svg',
    },
    {
        href: 'game-developers/unreal/index.html',
        title: 'Build with Unreal',
        desc: '',
        icon: '/images/links/unreal.svg',
    },
    {
        href: 'products/ultra-wallet/index.html',
        title: 'Build with Chrome Extension',
        desc: '',
        icon: '/images/links/chrome.svg',
    },
    {
        href: 'game-developers/game-dev-center/index.html',
        title: 'Game Developer Center',
        desc: '',
        icon: '/images/links/gdc.svg',
    },
    {
        href: 'tutorials/uniq-factories/uniq-avatar/index.html',
        title: 'About Uniq Avatars',
        desc: '',
        icon: '/images/links/uniq.svg',
    },
    {
        href: 'game-developers/index.html',
        title: 'Integrating Ultra',
        desc: '',
        icon: '/images/links/ultra.svg',
    },
];

const creatorlinks = [
    {
        href: 'tutorials/uniq-factories/creating-uniq-factories/how-to-create-uniq-metadata.html',
        title: 'Create Uniq Factory Metadata',
        icon: '/images/links/uniq.svg',
    },
    {
        href: 'tutorials/uniq-factories/creating-uniq-factories/how-to-create-uniq-factory-using-toolkit.html',
        title: 'Create a Uniq Factory',
        icon: '/images/links/uniq.svg',
    },
    {
        href: 'tutorials/uniq-factories/creating-uniq-factories/how-to-create-uniq-factory-using-toolkit.html',
        title: 'Minting your first Uniq',
        icon: '/images/links/uniq.svg',
    },
    {
        href: 'products/uniq-discord-bot/index.html',
        title: 'Set up the Ultra Discord Bot',
        icon: '/images/links/discord.svg',
    },
    {
        href: 'tutorials/uniq-factories/uniq-variants/index.html',
        title: 'Learn about Variants',
        icon: '/images/links/uniq.svg',
    },
];

const marketplacelinks = [
    {
        href: 'blockchain/contracts/nft-contract/index.html',
        title: 'Ultra NFT Standard',
        icon: '/images/links/uniq.svg',
    },
    {
        href: 'products/nft-api/introduction.html',
        title: 'Using Our NFTAPI',
        icon: '/images/links/uniq.svg',
    },
];

const enterpriselinks = [
    {
        href: 'blockchain/contracts/nft-contract/index.html',
        title: 'Ultra NFT Standard',
        icon: '/images/links/uniq.svg',
    },
    {
        href: 'blockchain/contracts/nft-contract/index.html#authorizing-another-minter',
        title: 'Authorized Minters',
        icon: '/images/links/lock.svg',
    },
];

interface SectionGroup {
    title: string;
    link: string;
    links: {
        title: string;
        link: string;
    }[];
}

interface UltraHomeMatter {
    // Defaults
    layout: string;
    deployment: string[];

    // Actual Front Matter
    headline: string;

    gettingstarted: { title: string; content: string }[];

    documentation: {
        content: string;
        bighero: {
            title: string;
            content: string;
            link: string;
        };
        concepts: SectionGroup[];
        guides: SectionGroup[];
    };

    tooling: {
        content: string;
        links: { title: string; link: string; icon: string }[];
    };

    support: {
        content: string;
        links: { title: string; link: string; text: string }[];
    };

    footer: {
        sections: {
            title: string;
            links: { text: string; link: string }[];
        }[];
    };
}

let data = ref<UltraHomeMatter>(frontmatter.value as UltraHomeMatter);
let blockCount = ref<number>(5000000);
let currentProducer = ref<string>('eosnation');
let currentLinkIndex = ref<number>(0);
let moveSidebarDown = ref<boolean>(false);

onMounted(() => {});
</script>

<template>
    <!-- <ClientOnly>
        <UltraHomeScroll @onScrollDown="onScrollDown" />
    </ClientOnly> -->
    <div class="main-container-wrapper">
        <div class="main-container">
            <left-sidebar :class="moveSidebarDown ? ['remove-pad'] : []">
                <ul class="sidebar-links">
                    <li v-for="(link, index) in links" :key="index">
                        <a
                            :href="link.href"
                            @click="currentLinkIndex = index"
                            :class="currentLinkIndex === index ? ['active'] : []"
                        >
                            {{ link.text }}
                        </a>
                    </li>
                </ul>
            </left-sidebar>
            <div class="main-content">
                <div class="hero">
                    <img
                        :src="withBase('/svgs/ultra-horizontal.svg')"
                        width="150"
                        style="margin-bottom: 48px; margin-top: 5px"
                    />
                    <!-- Top Text -->
                    <div class="headline">
                        <span v-for="text in data.headline.split(' ')">
                            {{ text }}
                        </span>
                    </div>
                </div>
                <!-- Getting Started Section -->
                <section id="getting-started">
                    <p class="getting-started-description">
                        Take advantage of all of the best features of decentralized technologies
                        <span class="highlight"
                            >without the downsides of high costs, hard on-boarding, and slow networks</span
                        >.
                    </p>

                    <div class="quick-start-grid">
                        <div class="quick-start persona-game-developers">
                            <p class="persona">Game Developers</p>
                            <h2 class="quick-start-title">Build with Digital Assets</h2>
                            <p class="quick-start-description">
                                Ultra’s provides easy to integrate solutions for modern tooling like Unity and Unreal
                                Engine.
                            </p>
                            <a href="#gamedevelopers" class="quick-start-click">Game Devs Quick Start →</a>
                        </div>

                        <div class="quick-start persona-content-creators">
                            <p class="persona">Content Creators</p>
                            <h2 class="quick-start-title">Best Creator Experience</h2>
                            <p class="quick-start-description">
                                Create and deploy your digital assets to participate in Ultra’s community immediately.
                            </p>
                            <a href="#contentcreators" class="quick-start-click">Creators Quick Start →</a>
                        </div>

                        <div class="quick-start persona-marketplace-owners">
                            <p class="persona">Marketplace owners</p>
                            <h2 class="quick-start-title">A Unified Marketplace</h2>
                            <p class="quick-start-description">
                                Marketplace owners can easily integrate and take advantage of all of our NFT standard
                                features.
                            </p>
                            <a href="#marketplaceowners" class="quick-start-click">Marketplace Quick Start →</a>
                        </div>

                        <div class="quick-start persona-enterprises">
                            <p class="persona">Enterprises</p>
                            <h2 class="quick-start-title">Easy Asset Management</h2>
                            <p class="quick-start-description">
                                Advanced tooling for enterprises makes it easy to have granular control over digital
                                assets.
                            </p>
                            <a href="#enterprises" class="quick-start-click">Enterprise Quick Start →</a>
                        </div>
                    </div>
                </section>

                <section id="popularresources">
                    <section-title>Popular Resources</section-title>
                    <div class="links-grid">
                        <a v-for="link in popularresources" :href="link.href" class="single-link">
                            <div class="group">
                                <div class="icon">
                                    <img :src="link.icon" alt="Ultra Docs" />
                                </div>
                                <div class="title">{{ link.title }}</div>
                                <div class="description">
                                    {{ link.desc }}
                                </div>
                            </div>
                            <div class="click">Start →</div>
                        </a>
                    </div>
                </section>

                <!-- Game Developers -->
                <section id="gamedevelopers" class="persona-section">
                    <div class="coreflex">
                        <div class="left">
                            <h2 class="bigheader">Build GAMES with digital assets</h2>
                            <p>
                                Using Ultra you can quickly and easily build games that have digital assets at their
                                core.
                            </p>
                            <p class="highlight">
                                Unlock new experiences for your players, prove ownership, participate in an open
                                marketplace, and build online communities.
                            </p>
                        </div>
                        <div class="right">
                            <img src="/images/home/core_gamesdevelopers.png" alt="Game Developers" />
                        </div>
                    </div>

                    <h3>Players In Control</h3>
                    <p>
                        In today’s market <span class="highlight">players do not control the digital assets</span> that
                        they base their play around. The tools that we provide to our developers ensure that assets are
                        always online, always accessible, and <span class="highlight">controlled by our users</span>.
                    </p>
                    <img class="splash-image" src="/images/home/splash_gamedevelopers.png" alt="Game Developers" />

                    <h3>Quick Start</h3>
                    <div class="links-grid">
                        <a v-for="link in gamelinks" :href="link.href" class="single-link short">
                            <div class="group">
                                <div class="icon">
                                    <img :src="link.icon" alt="Game Developers" />
                                </div>
                                <div class="title">{{ link.title }}</div>
                            </div>
                            <div class="click">Start →</div>
                        </a>
                    </div>
                </section>

                <!-- Content Creators -->
                <section id="contentcreators" class="persona-section">
                    <div class="coreflex">
                        <div class="left">
                            <h2 class="bigheader">the best CREATOR experience</h2>
                            <p>
                                Ultra’s NFT Standard sets it apart from the competition and allows digital content
                                creators unparalleled control and flexibility to deploy their work to the world’s
                                fastest, cheapest open network.
                            </p>
                            <p class="highlight">
                                Build your next collectibles on Ultra, and take advantage of the future today.
                            </p>
                        </div>
                        <div class="right">
                            <img src="/images/home/core_contentcreators.png" alt="Game Developers" />
                        </div>
                    </div>

                    <h3>Creators First</h3>
                    <p>
                        Ultra provides a unique, easy to use, and flexible NFT standard which is focused on both
                        deploying digital assets and making them easily accessible to buyers, sellers, and traders.
                        <span class="highlight"
                            >This means that creators have instant access to a market for their Uniqs that is mainstream
                            ready.</span
                        >
                    </p>
                    <img class="splash-image" src="/images/home/splash_contentcreators.png" alt="Game Developers" />

                    <h3>Quick Start</h3>
                    <div class="links-grid">
                        <a v-for="link in creatorlinks" :href="link.href" class="single-link short">
                            <div class="group">
                                <div class="icon">
                                    <img :src="link.icon" alt="content creators" />
                                </div>
                                <div class="title">{{ link.title }}</div>
                            </div>
                            <div class="click">Start →</div>
                        </a>
                    </div>
                </section>

                <!-- Marketplace Owners -->
                <section id="marketplaceowners" class="persona-section">
                    <div class="coreflex">
                        <div class="left">
                            <h2 class="bigheader">unified digital asset marketplace</h2>
                            <p>
                                Ultra’s NFT Standard sets it apart from the competition and allows digital content
                                creators unparalleled control and flexibility to deploy their work to the world’s
                                fastest, cheapest open network.
                            </p>
                            <p class="highlight">
                                Anyone can create a digital asset marketplace based on Ultra’s NFT standard, and anyone
                                can buy, sell, or trade on them. The future is now.
                            </p>
                        </div>
                        <div class="right">
                            <img src="/images/home/core_marketplace.png" alt="Game Developers" />
                        </div>
                    </div>

                    <h3>Assets Unleashed</h3>
                    <p>
                        Ultra provides developers direct access to open APIs on our network so that they can build
                        marketplaces on the web, or directly into their games. The digital assets that flow between them
                        provide players with experiences that were until now simply impossible.
                    </p>
                    <img class="splash-image" src="/images/home/splash_marketplace.png" alt="Game Developers" />

                    <h3>Quick Start</h3>
                    <div class="links-grid">
                        <a v-for="link in marketplacelinks" :href="link.href" class="single-link short">
                            <div class="group">
                                <div class="icon">
                                    <img :src="link.icon" alt="marketplace" />
                                </div>
                                <div class="title">{{ link.title }}</div>
                            </div>
                            <div class="click">Start →</div>
                        </a>
                    </div>
                </section>

                <!-- Enterprise -->
                <section id="enterprises" class="persona-section">
                    <div class="coreflex">
                        <div class="left">
                            <h2 class="bigheader">enterprise grade asset management</h2>
                            <p>
                                Businesses built on top of blockchain technology have special needs for how their
                                digital assets are managed.
                            </p>
                            <p class="highlight">
                                Ultra keeps your assets safely secured on our network, while providing tools for
                                limiting your security exposure.
                            </p>
                        </div>
                        <div class="right">
                            <img src="/images/home/core_enterprise.png" alt="Game Developers" />
                        </div>
                    </div>

                    <h3>Security First</h3>
                    <p>
                        Ultra’s network, and the smart contracts deployed to it, have granular permissions at their
                        core. This means that you can define exactly who has access to what, ensuring that your assets
                        are always secure.
                    </p>

                    <h3>Quick Start</h3>
                    <div class="links-grid">
                        <a v-for="link in enterpriselinks" :href="link.href" class="single-link short">
                            <div class="group">
                                <div class="icon">
                                    <img :src="link.icon" alt="enterprise" />
                                </div>
                                <div class="title">{{ link.title }}</div>
                            </div>
                            <div class="click">Start →</div>
                        </a>
                    </div>
                </section>

                <!-- Support Section -->
                <section id="support">
                    <section-title>Support</section-title>
                    <section-content>
                        {{ data.support.content }}
                    </section-content>
                    <UltraSupport v-for="(linkData, index) in data.support.links" :key="index" :link="linkData.link">
                        <template #title>{{ linkData.title }}</template>
                        <template #text>{{ linkData.text }}</template>
                    </UltraSupport>
                </section>
            </div>
        </div>
        <UltraFooter :sections="data.footer.sections" />
    </div>
</template>

<style language="scss">
/**
 * Variables can be located in the following locations:
 * docs/.vitepress/theme/style.css
 * packages/mainnet/docs/.vitepress/theme/style.css
 * packages/staging/docs/.vitepress/theme/style.css
 *
 * Each version of the docs has its own theme applied.
 * You should use the different npm scripts to run them.
 */

.main-container-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: white;
    width: 100%;
    max-width: var(--vp-layout-max-width);
    margin: 0 auto;
    padding-left: 32px;
    padding-right: 32px;
    box-sizing: border-box;
}

.VPContent {
    display: flex;
    flex-direction: row;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    background: linear-gradient(-135deg, var(--vp-c-brand-light) -40%, rgba(0, 0, 0, 0) 25%),
        var(--vp-bg-background) right -240px top -200px no-repeat;
    background-repeat: no-repeat;
}

.VPContent.has-sidebar {
    background: linear-gradient(-135deg, var(--vp-c-brand-light) -40%);
}

.main-content {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 96px;
    padding-left: calc(200px + 5vw);
}

.main-container .headline {
    display: flex;
    flex-direction: column;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    text-transform: uppercase;
    margin-bottom: 24px;
    user-select: none;

    font-weight: 900;
    font-size: 130px;
    line-height: 98.5%;

    background: linear-gradient(-130deg, var(--vp-c-brand-light) 50%, #fff 80%);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media (max-width: 800px) {
    .main-container .headline {
        font-size: 80px;
        margin: 0 auto;
    }
}

.main-container left-sidebar {
    position: fixed;
    background: transparent !important;
    box-sizing: border-box;
    padding-top: 105px;
    user-select: none;
    transition: all 0.2s;
}

.main-container left-sidebar.remove-pad {
    padding-top: 14px !important;
}

.main-container section-title {
    display: block;
    width: 100%;
    font-size: 36px;
    font-weight: 700;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 36px;
    margin-bottom: 40px;
    user-select: none;
}

.main-container section-title-sm {
    display: block;
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 26px;
    margin-bottom: 20px;
    user-select: none;
}

.main-container section-title-xsm {
    display: block;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 32px;
    margin-bottom: 24px;
    user-select: none;
}

.main-container section {
    display: block;
    margin-bottom: 140px;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
}

@media (max-width: 800px) {
    .main-container section {
        margin-bottom: 80px;
    }
}

.main-container section-content {
    display: block;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 32px;
    color: var(--vp-c-home-text);
    margin-bottom: 24px;
    user-select: none;
}

.main-container link-content {
    display: block;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 23px;
    letter-spacing: 0.04em;
    color: var(--vp-c-home-text);
}

.hoverable:hover {
    filter: brightness(125%);
    transition: 0.12s all ease-in-out;
    transform: scale(1.025);
}

.accent {
    color: var(--vp-c-brand) !important;
}

.accent-hoverable:hover {
    text-shadow: 0px 0px 5px var(--vp-c-brand);
}

.accent-alt {
    color: var(--vp-c-brand-light) !important;
}

.accent-alt-hoverable:hover {
    text-shadow: 0px 0px 5px var(--vp-c-brand-light);
}

.main-container #getting-started p {
    color: var(--vp-c-home-text);
    font-size: 18px;
    line-height: 200%;
}

.main-container .hero {
    width: 100%;
}

.main-container .unstyle-link {
    text-decoration: none;
    color: white;
}

.main-container .make-hoverable {
    user-select: none;
    cursor: pointer;
    opacity: 0.75;
    text-decoration: none;
}

.main-container .make-hoverable:hover {
    opacity: 1;
}

.main-container .sidebar-links {
    list-style-type: none;
    padding: 0;
    margin-bottom: 64px;
    min-width: 200px;
    max-width: 200px;
}

.main-container .sidebar-links li a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    transition: all 0.1s;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 16px;
}

.main-container .sidebar-links li a:hover {
    color: rgba(255, 255, 255, 1);
}

.main-container .sidebar-links li {
    color: rgba(255, 255, 255, 1) !important;
}

.active {
    color: white !important;
    font-weight: bold !important;
}

.main-container .sidebar-links li {
    margin-bottom: 10px;
}

.main-container .stack {
    display: flex;
    flex-direction: column;
}

.main-container .split {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.main-container .split-space-between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.main-container .bg {
    position: sticky;
    max-width: 1000px;
    max-height: 1000px;
    overflow: hidden;
    right: 0;
    top: 0;
}

.main-container .bg img {
    max-width: 1000px;
    max-height: 1000px;
}

.main-container > p {
    color: #e8d4ff;
    font-weight: 400;
    line-height: 32px;
    font-size: 16px;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.main-container .table-wrapper {
    position: relative;
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-border-color);
    border-radius: 6px;
    padding: 48px;
    width: 100%;
    box-sizing: border-box;
}

.main-container .table-split {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
}

.main-container section-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 48px;
}

.main-container .table-wrapper .big-arrow {
    display: flex;
    font-size: 60px;
    font-weight: 100;
    color: rgba(255, 255, 255, 0.5);
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    margin-bottom: 10px;
}

.main-container .table-wrapper .small-arrow {
    height: 100%;
    align-self: center;
    align-content: center;
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
    padding-left: 25px;
    padding-bottom: 4px;
}

@media (max-width: 1600px) {
    .VPContent {
        background: linear-gradient(-135deg, var(--vp-c-brand-light) -40%, rgba(0, 0, 0, 0) 25%),
            var(--vp-bg-background) right -500px top -300px no-repeat;
    }

    .VPContent.has-sidebar {
        background: linear-gradient(-135deg, var(--vp-c-brand-light) -40%);
    }
}

@media (max-width: 1400px) {
    .VPContent {
        background: linear-gradient(-135deg, var(--vp-c-brand-light) -40%, rgba(0, 0, 0, 0) 25%),
            var(--vp-bg-background) right -540px top -300px no-repeat;
    }

    .VPContent.has-sidebar {
        background: linear-gradient(-135deg, var(--vp-c-brand-light) -40%);
    }

    .main-container #getting-started {
        width: 100%;
    }
}

@media (max-width: 1000px) {
    .VPContent {
        background: linear-gradient(-135deg, var(--vp-c-brand-light) -40%, rgba(0, 0, 0, 0) 25%),
            var(--vp-bg-background) right -640px top -200px no-repeat;
    }

    .VPContent.has-sidebar {
        background: linear-gradient(-135deg, var(--vp-c-brand-light) -40%);
    }

    .main-container .sections {
        grid-template-columns: 1fr !important;
    }

    .main-container left-sidebar {
        display: none;
    }

    .main-container {
        background-size: 800px;
        background-repeat: no-repeat;
        background-position: right -100px top 0px;
    }

    .main-container .main-content {
        padding-left: 24px;
        padding-right: 24px;
    }

    .main-container-wrapper {
        padding-left: 0px;
        padding-right: 0px;
    }

    ultra-footer-wrapper {
        padding-left: 24px;
        padding-right: 24px;
    }
}

@media (max-width: 800px) {
    .VPContent {
        background: linear-gradient(-135deg, var(--vp-c-brand-light) -40%, rgba(0, 0, 0, 0) 25%),
            none right -800px top -200px no-repeat;
    }

    .VPContent.has-sidebar {
        background: linear-gradient(-135deg, var(--vp-c-brand-light) -40%);
    }

    .main-container .main-content {
        max-width: 100vw;
    }
}

.getting-started-description {
    width: 33%;
    margin-bottom: 140px;
}

@media (max-width: 800px) {
    .getting-started-description {
        width: 100%;
        margin-bottom: 140px;
    }
}

.quick-start-grid {
    display: flex;
    flex-direction: row;
    column-gap: 40px;
    row-gap: 40px;
    flex-wrap: wrap;
}

.highlight {
    color: #fff;
    font-weight: bold;
}

.quick-start {
    margin-bottom: 80px;
}

@media (max-width: 800px) {
    .quick-start {
        margin-bottom: 80px;
    }
}

.persona {
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 30px;
}

.persona-game-developers .persona {
    background: linear-gradient(272.38deg, rgba(137, 106, 226, 0.53) 7.76%, #bda6ff 93.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    mix-blend-mode: normal;
}

.persona-content-creators .persona {
    background: linear-gradient(270.18deg, rgba(114, 207, 123, 0.53) 40.42%, #72cf7b 97.07%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    mix-blend-mode: normal;
}

.persona-enterprises .persona {
    background: linear-gradient(270.18deg, rgba(234, 197, 52, 0.53) 40.42%, #eac534 97.07%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    mix-blend-mode: normal;
}

.persona-marketplace-owners .persona {
    background: linear-gradient(271.35deg, rgba(67, 150, 214, 0.53) 10.28%, #4396d6 40.74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    mix-blend-mode: normal;
}

.quick-start-title {
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #ffffff;
    mix-blend-mode: normal;
    margin-bottom: 30px;
}

.quick-start-description {
    margin-bottom: 30px;
}

.quick-start-click {
    padding: 32px 40px;
    color: #ffffff;
    width: 100%;
    font-weight: bold;
    display: block;
    border-radius: 6px;
    transition: all 0.12s ease-in-out;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: right;
}

.quick-start-click:hover {
    outline: 2px solid white;
    outline-offset: 4px;
    background-size: 110%;
}

.persona-game-developers .quick-start-click {
    background-color: #a78af1;
    background-image: url('/images/home/gamedev.png');
}

.persona-content-creators .quick-start-click {
    background-color: #72cf7b;
    background-image: url('/images/home/creator.png');
}

.persona-marketplace-owners .quick-start-click {
    background-color: #4396d6;
    background-image: url('/images/home/marketplace.png');
}

.persona-enterprises .quick-start-click {
    background-color: #eac534;
    background-image: url('/images/home/enterprise.png');
}

.links-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
}

@media (max-width: 800px) {
    .links-grid {
        gap: 0;
        row-gap: 20px;
        margin: 0 auto 20px;
    }
}

.single-link {
    padding: 40px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: all 0.12s ease-in-out;
    border-radius: 6px;
    width: calc(33% - 40px);
    height: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

.single-link.short {
    height: 220px;
}

@media (max-width: 1400px) {
    .single-link {
        width: calc(50% - 40px);
    }
}

@media (max-width: 800px) {
    .single-link {
        width: 100% !important;
    }
}

.single-link:hover {
    outline: 2px solid white;
    outline-offset: 4px;
}

.single-link .title {
    font-weight: bold;
    color: #fff;
    margin: 10px 0;
}

.single-link .description {
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
}

.single-link .icon {
    opacity: 0.6;
    transition: all 0.12s ease-in-out;
}

.single-link .click {
    font-weight: bold;
    color: #fff;
    margin-bottom: -60px;
    transition: all 0.12s ease-in-out;
}

.single-link:hover .click {
    margin: 0;
}

.single-link:hover .icon {
    opacity: 1;
}

.coreflex {
    display: flex;
    flex-direction: row;
    gap: 40px;
}

@media (max-width: 800px) {
    .coreflex {
        gap: 0px;
        row-gap: 20px;
    }
}

.coreflex .left,
.coreflex .right {
    width: 50%;
    margin-bottom: 60px;
}

@media (max-width: 800px) {
    .coreflex .left {
        width: 100% !important;
    }
    .coreflex .right {
        display: none;
    }
}

.coreflex .bigheader {
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 98.5%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 40px;
}

@media (max-width: 800px) {
    .coreflex .bigheader {
        font-size: 36px !important;
    }
}

.coreflex p {
    margin-bottom: 40px;
    color: #ffffffbc;
}

.persona-section h3 {
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 120%;
    letter-spacing: -0.02em;
    background: linear-gradient(104.01deg, #ffffff 27.53%, #919191 87.61%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 40px;
}

@media (max-width: 800px) {
    .persona-section h3 {
        font-size: 28px !important;
    }
}

.persona-section p {
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 200%;
    color: rgba(255, 255, 255, 0.7);
}

.splash-image {
    margin-bottom: 80px;
}

#enterprises h3 {
    margin-top: 40px;
}

.getting-started-description {
    width: 33%;
    margin-bottom: 140px;
}

@media (max-width: 800px) {
    .getting-started-description {
        width: 100%;
    }
}

.highlight {
    color: #fff;
    font-weight: bold;
}

.quick-start {
    padding: 0 40px 0 0;
    width: calc(50% - 20px);
}

@media (max-width: 1400px) {
    .quick-start {
        padding: 0;
        width: 100%;
    }
}

.persona {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 30px;
}

.persona-game-developers .persona {
    background: linear-gradient(272.38deg, rgba(137, 106, 226, 0.53) 7.76%, #bda6ff 93.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    mix-blend-mode: normal;
}

.persona-content-creators .persona {
    background: linear-gradient(270.18deg, rgba(114, 207, 123, 0.53) 40.42%, #72cf7b 97.07%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    mix-blend-mode: normal;
}

.persona-enterprises .persona {
    background: linear-gradient(270.18deg, rgba(234, 197, 52, 0.53) 40.42%, #eac534 97.07%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    mix-blend-mode: normal;
}

.persona-marketplace-owners .persona {
    background: linear-gradient(271.35deg, rgba(67, 150, 214, 0.53) 10.28%, #4396d6 40.74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    mix-blend-mode: normal;
}

.quick-start-description {
    margin-bottom: 30px;
}

.quick-start-click {
    padding: 32px 40px;
    color: #ffffff;
    width: 100%;
    font-weight: bold;
    display: block;
    border-radius: 6px;
    transition: all 0.12s ease-in-out;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: right;
}

@media (max-width: 800px) {
    .quick-start-click {
        padding: 20px;
    }
}

.quick-start-click:hover {
    outline: 2px solid white;
    outline-offset: 4px;
    background-size: 110%;
}

.persona-game-developers .quick-start-click {
    background-color: #a78af1;
    background-image: url('/images/home/gamedev.png');
}

.persona-content-creators .quick-start-click {
    background-color: #72cf7b;
    background-image: url('/images/home/creator.png');
}

.persona-marketplace-owners .quick-start-click {
    background-color: #4396d6;
    background-image: url('/images/home/marketplace.png');
}

.persona-enterprises .quick-start-click {
    background-color: #eac534;
    background-image: url('/images/home/enterprise.png');
}

.links-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
}

.single-link {
    padding: 40px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: all 0.12s ease-in-out;
    border-radius: 6px;
    width: calc(33% - 40px);
    height: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

.single-link.short {
    height: 220px;
}

@media (max-width: 1400px) {
    .single-link {
        width: calc(50% - 40px);
    }
}

.single-link:hover {
    outline: 2px solid white;
    outline-offset: 4px;
}

.single-link .title {
    font-weight: bold;
    color: #fff;
    margin: 10px 0;
}

.single-link .description {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
}

.single-link .icon {
    opacity: 0.6;
    transition: all 0.12s ease-in-out;
}

.single-link .click {
    font-weight: bold;
    color: #fff;
    margin-bottom: -60px;
    transition: all 0.12s ease-in-out;
}

.single-link:hover .click {
    margin: 0;
}

.single-link:hover .icon {
    opacity: 1;
}

.coreflex {
    display: flex;
    flex-direction: row;
    gap: 40px;
}

.coreflex .left,
.coreflex .right {
    width: 50%;
    margin-bottom: 60px;
}

.coreflex .bigheader {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 98.5%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 40px;
}

.coreflex p {
    margin-bottom: 40px;
    color: #ffffffbc;
}

.persona-section h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 120%;
    letter-spacing: -0.02em;
    background: linear-gradient(104.01deg, #ffffff 27.53%, #919191 87.61%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 40px;
}

.persona-section p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 200%;
    color: rgba(255, 255, 255, 0.7);
}

.splash-image {
    margin-bottom: 80px;
}

#enterprises h3 {
    margin-top: 40px;
}
</style>
