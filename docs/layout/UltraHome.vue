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
    { href: '#getting-started', text: 'Getting Started' },
    { href: '#documentation', text: 'Documentation' },
    { href: '#technology', text: 'Technology' },
    { href: '#tooling', text: 'Tooling' },
    { href: '#support', text: 'Support' },
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
let blockCount = ref<number>(5000000);
let currentProducer = ref<string>('eosnation');
let currentLinkIndex = ref<number>(0);
let moveSidebarDown = ref<boolean>(false);

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
    currentProducer.value = dataSet.head_block_producer;
}

function handleScroll(e: Event) {
    if (window.scrollY < 100) {
        if (!moveSidebarDown.value) {
            return;
        }

        moveSidebarDown.value = false;
        return;
    }

    if (moveSidebarDown.value) {
        return;
    }

    moveSidebarDown.value = true;
}

onMounted(() => {
    getBlockCount();

    // Create a block count interval
    // Updates every 2.5s, and times out after 5 minutes to prevent too much ingestion for APIs.
    const blockCountInterval = setInterval(getBlockCount, 2500);
    setTimeout(() => clearInterval(blockCountInterval), 60000 * 5);

    window.addEventListener('scroll', handleScroll);
});
</script>

<template>
    <div class="main-container-wrapper" @scroll="handleScroll">
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
                    <img src="/svgs/ultra-horizontal.svg" width="150" style="margin-bottom: 48px; margin-top: 5px" />
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
                    <section-content>
                        {{ data.documentation.content }}
                    </section-content>
                    <a :href="data.documentation.bighero.link">
                        <div class="table-wrapper split-space-between hoverable">
                            <div class="split">
                                <div class="stack">
                                    <section-title-xsm class="accent">
                                        {{ data.documentation.bighero.title }}
                                    </section-title-xsm>
                                    <link-content>{{ data.documentation.bighero.content }}</link-content>
                                </div>
                                <div class="big-arrow">
                                    <svg
                                        width="25"
                                        height="41"
                                        viewBox="0 0 25 41"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1 1L24 20.5L1 40" stroke="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                    <UltraSection title="Learn Blockchain Concepts" :section="data.documentation.concepts" />
                    <UltraSection title="Guides" :section="data.documentation.guides" />
                </section>
                <!-- Technology Section -->
                <section id="technology">
                    <section-title>Technology</section-title>
                    <section-group style="margin-top: 48px">
                        <UltraStat icon="/svgs/blocks.svg">
                            <template #data>{{ blockCount.toLocaleString() }} </template>
                            <template #description>Blocks Produced</template>
                        </UltraStat>
                        <UltraStat icon="/svgs/producer.svg">
                            <template #data>{{ currentProducer }}</template>
                            <template #description>Block Producer</template>
                        </UltraStat>
                        <UltraStat icon="/svgs/blocktime.svg">
                            <template #data>0.5s</template>
                            <template #description>Block Time</template>
                        </UltraStat>
                        <UltraStat icon="/svgs/transactioncost.svg">
                            <template #data>$0.00</template>
                            <template #description>Avg Transaction Cost</template>
                        </UltraStat>
                    </section-group>
                </section>
                <!-- Tooling Section -->
                <section id="tooling">
                    <section-title>Tooling</section-title>
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

<style>
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

.main-container left-sidebar {
    position: fixed;
    background: transparent !important;
    box-sizing: border-box;
    padding-top: 105px;
    user-select: none;
    transition: all 0.2s;
}

.main-container left-sidebar.remove-pad {
    padding-top: 24px !important;
}

.main-container section-title {
    display: block;
    width: 100%;
    font-size: 36px;
    font-weight: 700;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 36px;
    margin-bottom: 20px;
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

.main-container #getting-started {
    margin-top: 64px;
    width: 33%;
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
}

.main-container .sidebar-links li a:hover {
    color: rgba(255, 255, 255, 1);
}

.main-container .sidebar-links li {
    color: rgba(255, 255, 255, 1) !important;
}

.active {
    color: white !important;
}

.main-container .sidebar-links li {
    margin-bottom: 20px;
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
        width: 50%;
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
            var(--vp-bg-background) right -800px top -200px no-repeat;
    }

    .VPContent.has-sidebar {
        background: linear-gradient(-135deg, var(--vp-c-brand-light) -40%);
    }
}
</style>
