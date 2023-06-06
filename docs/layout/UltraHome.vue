<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useData } from 'vitepress';
import UltraSection from './UltraSections.vue';
import UltraFooter from './UltraFooter.vue';
import UltraStat from './UltraStat.vue';
import UltraLink from './UltraLink.vue';
import UltraSupport from './UltraSupport.vue';

const { frontmatter } = useData();

const links = ref([
    { href: '/guides/Basics/introduction', text: 'Go to Docs' },
    { href: '#getting-started', text: 'Getting Started' },
    { href: '#documentation', text: 'Documentation' },
    { href: '#technology', text: 'Technology' },
    { href: '#tooling', text: 'Tooling' },
    { href: '#support', text: 'Support' },
    { href: '/search', text: 'Search' },
]);

const socials = ref([
    { href: '#', icon: '/svgs/discord.svg', title: 'Discord' },
    { href: '#', icon: '/svgs/twitter.svg', title: 'Twitter' },
    { href: '#', icon: '/svgs/youtube.svg', title: 'YouTube' },
]);

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
let mobileOpen = ref(false);
let blockCount = ref<number>(5000000);

async function getBlockCount() {
    const result = await fetch('https://api.mainnet.ultra.io/v1/chain/get_info');
    if (!result || !result.ok) {
        return;
    }

    const dataSet = await result.json();
    if (!dataSet) {
        return;
    }

    blockCount.value = dataSet.head_block_num;
}

onMounted(() => {
    setInterval(getBlockCount, 2500);
    getBlockCount();
});
</script>

<template>
    <div class="main-container-wrapper">
        <div class="bg">
            <img src="/images/home/bg.png" />
        </div>
        <div class="main-container">
            <div class="hero">
                <img
                    src="/svgs/ultra-horizontal.svg"
                    height="25"
                    width="100"
                    style="margin-bottom: 25px; margin-top: 10px"
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
                <section-title>Getting Started</section-title>
                <div class="spacer-sm" />
                <template v-for="section in data.gettingstarted">
                    <section-title-sm>{{ section.title }}</section-title-sm>
                    <section-content>
                        {{ section.content }}
                    </section-content>
                </template>
            </section>
            <!-- Documentation Section -->
            <section id="documentation">
                <section-title>Documentation</section-title>
                <div class="spacer-sm" />
                <section-content>
                    {{ data.documentation.content }}
                </section-content>
                <a :href="data.documentation.bighero.link">
                    <div class="table-wrapper make-hoverable split-space-between braincloud">
                        <div class="split">
                            <div class="stack">
                                <section-title-xsm>{{ data.documentation.bighero.title }}</section-title-xsm>
                                <section-content>{{ data.documentation.bighero.content }}</section-content>
                            </div>
                            <div class="big-arrow">&gt;</div>
                        </div>
                    </div>
                </a>
                <UltraSection title="Learn Blockchain Concepts" :section="data.documentation.concepts" />
                <UltraSection title="Guides" :section="data.documentation.guides" />
            </section>
            <!-- Technology Section -->
            <section id="technology">
                <section-title>Technology</section-title>
                <div class="spacer-sm" />
                <section-group>
                    <UltraStat icon="/svgs/blocks.svg">
                        <template #data>{{ blockCount.toLocaleString() }} </template>
                        <template #description>Blocks Produced</template>
                    </UltraStat>
                    <UltraStat icon="/svgs/blocktime.svg">
                        <template #data>0.5s</template>
                        <template #description>Block Time</template>
                    </UltraStat>
                    <UltraStat icon="/svgs/transactioncost.svg">
                        <template #data>$0.00</template>
                        <template #description>Average Transaction Cost</template>
                    </UltraStat>
                </section-group>
            </section>
            <!-- Tooling Section -->
            <section id="tooling">
                <section-title>Tooling</section-title>
                <div class="spacer-sm" />
                <section-content>
                    {{ data.tooling.content }}
                </section-content>
                <section-group>
                    <UltraLink
                        v-for="(linkData, index) in data.tooling.links"
                        :key="index"
                        :link="linkData.link"
                        :icon="linkData.icon"
                    >
                        <template #title>{{ linkData.title }}</template>
                    </UltraLink>
                </section-group>
            </section>
            <!-- Support Section -->
            <section id="support">
                <section-title>Support</section-title>
                <div class="spacer-sm" />
                <section-content>
                    {{ data.support.content }}
                </section-content>
                <UltraSupport v-for="(linkData, index) in data.support.links" :key="index" :link="linkData.link">
                    <template #title>{{ linkData.title }}</template>
                    <template #text>{{ linkData.text }}</template>
                </UltraSupport>
            </section>
            <UltraFooter :sections="data.footer.sections" />
        </div>
    </div>
</template>

<style>
.main-container-wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    color: white;
    box-sizing: border-box;
    min-height: 100%;
    background: #28262c;
}

.bg {
    position: absolute;
    min-width: 800px;
    max-width: 800px;
    min-height: 800px;
    max-height: 800px;
    z-index: 0;
    right: 64px;
}

.bg img {
    filter: var(--vp-image-filter);
}

.main-container {
    display: flex;
    flex-direction: column;
    top: 0;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    padding-top: 64px;
    box-sizing: border-box;
    width: 100%;
    max-width: calc(var(--vp-layout-max-width) - 64px);
    z-index: 1;
}

.main-container .headline {
    display: flex;
    flex-direction: column;
    font-family: Inter;
    font-style: normal;
    font-size: 80px;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 80px;
    margin-bottom: 24px;
    background: var(--vp-home-hero-name-background);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;
}

.main-container section-title {
    display: block;
    width: 100%;
    font-size: 32px;
    font-weight: 600;
    user-select: none;
}

.main-container section-title-sm {
    display: block;
    width: 100%;
    font-size: 24px;
    font-weight: 400;
    user-select: none;
}

.main-container section-title-xsm {
    display: block;
    font-size: 18px;
    font-weight: 600;
    user-select: none;
    color: var(--vp-c-brand);
}

.main-container section-content {
    display: block;
    width: 100%;
    font-size: 16px;
    margin-top: 12px;
    margin-bottom: 24px;
    opacity: 0.6;
    user-select: none;
}

.main-container #getting-started {
    margin-top: 64px;
}

.main-container section {
    display: block;
    margin-bottom: 48px;
    width: auto;
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
    text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3);
}

.main-container .spacer {
    min-height: 50px;
    width: 100%;
}

.main-container .spacer-sm {
    min-height: 25px;
    width: 100%;
}

.main-container .social-links {
    display: flex;
}

.main-container .social-links img {
    margin-right: 12px;
}

.main-container .sidebar-links {
    list-style-type: none;
    padding: 0;
    margin-bottom: 64px;
}

.main-container .sidebar-links li a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    transition: all 0.1s;
}

.main-container .sidebar-links li a:hover {
    color: rgba(255, 255, 255, 1);
}

.main-container .sidebar-links li {
    margin-bottom: 24px;
}

.main-container .sidebar {
    position: fixed;
    left: 0;
    margin-left: 5vw;
    min-width: 200px;
    background: transparent !important;
    box-sizing: border-box;
    top: 100px;
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
    font-family: Inter;
}

.main-container .table-wrapper {
    position: relative;
    border: 1px solid var(--vp-c-brand);
    border-radius: 6px;
    padding: 48px;
    width: 100%;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
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
}

.main-container section-group > * {
    margin-bottom: 48px;
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

.main-container .sections {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 64px;
    row-gap: 64px;
    width: 100%;
}

.main-container .navbar {
    display: none;
}

.braincloud {
    background: url('/images/home/braincloud.png') !important;
    background-size: 50% !important;
    background-repeat: no-repeat !important;
    background-position: right top !important;
    background-color: #2b292f !important;
}

.learn {
    background: url('/images/home/learn.png') !important;
    background-size: 50% !important;
    background-repeat: no-repeat !important;
    background-position: right top !important;
    background-color: #2b292f !important;
}

@media (max-width: 1458px) {
    .main-container {
        padding-left: 32px !important;
        padding-right: 32px !important;
    }
}

@media (max-width: 1000px) {
    .main-container .sections {
        grid-template-columns: 1fr;
    }

    .bg {
        display: none;
    }
}
</style>
