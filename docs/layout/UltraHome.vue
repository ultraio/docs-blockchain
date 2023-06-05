<script setup lang="ts">
import { ref } from 'vue';
import UltraSection from './UltraSections.vue';
import { useData } from 'vitepress';

const { frontmatter } = useData();

const links = ref([
    { href: '#', text: 'Getting Started' },
    { href: '#', text: 'Documentation' },
    { href: '#', text: 'Technology' },
    { href: '#', text: 'Quickstarts' },
    { href: '#', text: 'Tooling' },
    { href: '#', text: 'Support' },
]);

const socials = ref([
    { href: '#', icon: 'discord.svg', title: 'Discord' },
    { href: '#', icon: 'twitter.svg', title: 'Twitter' },
    { href: '#', icon: 'youtube.svg', title: 'YouTube' },
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
}

let data = ref<UltraHomeMatter>(frontmatter.value as UltraHomeMatter);
let mobileOpen = ref(false);
</script>

<template>
    <div class="main-container-wrapper">
        <div class="main-container">
            <div class="navbar">
                <div class="mobile-open" @click="mobileOpen = !mobileOpen">
                    <svg viewBox="0 0 100 80" width="25" height="75" class="make-hoverable">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </div>
                <template v-if="mobileOpen">
                    <ul class="sidebar-links">
                        <li v-for="(link, index) in links" :key="index">
                            <a :href="link.href">{{ link.text }}</a>
                        </li>
                    </ul>
                    <div class="social-links">
                        <a
                            v-for="(social, index) in socials"
                            class="make-hoverable"
                            :href="social.href"
                            :title="social.title"
                        >
                            <div class="split">
                                <img :key="index" width="25" :src="social.icon" />
                                <span>{{ social.title }}</span>
                            </div>
                        </a>
                    </div>
                </template>
            </div>
            <div class="sidebar">
                <ul class="sidebar-links">
                    <li v-for="(link, index) in links" :key="index">
                        <a :href="link.href">{{ link.text }}</a>
                    </li>
                </ul>
                <div class="social-links">
                    <a v-for="(social, index) in socials" :href="social.href" :title="social.title">
                        <img :key="index" width="25" :src="social.icon" />
                    </a>
                </div>
            </div>
            <div class="main-content">
                <div class="hero">
                    <img
                        src="ultra-horizontal.svg"
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
                            <div class="table-wrapper make-hoverable split-space-between">
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
                </div>
            </div>
            <div class="footer">Hello Footer</div>
        </div>
    </div>
</template>

<style>
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
}

.main-container section-title {
    display: block;
    width: 100%;
    font-size: 32px;
    font-weight: 600;
}

.main-container section-title-sm {
    display: block;
    width: 100%;
    font-size: 24px;
    font-weight: 400;
}

.main-container section-title-xsm {
    display: block;
    font-size: 18px;
    font-weight: 600;
}

.main-container section-content {
    display: block;
    width: 100%;
    font-size: 16px;
    margin-top: 12px;
    margin-bottom: 24px;
}

.main-container #getting-started {
    margin-top: 64px;
}

.main-container section {
    display: block;
    margin-bottom: 128px;
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
    color: rgba(255, 255, 255, 0.3);
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

.main-container-wrapper {
    background: #190249;
    color: white;
}

.main-container {
    display: flex;
    flex-direction: column;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    background-image: url('/bg.png');
    background-size: 800px;
    background-repeat: no-repeat;
    background-position: right 0px top 0px;
}

.main-content {
    width: 100%;
    min-height: 100vh;
    padding-left: 25vw;
    padding-right: 15vw;
    box-sizing: border-box;
    padding-top: 100px;
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
    background: #240c58;
    border: 1px solid #896ae2;
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

@media (max-width: 900px) {
    .mobile-open {
        display: flex;
        width: 100%;
        color: white;
        fill: white;
        justify-content: flex-end;
        align-items: flex-end;
        padding-right: 50px;
    }

    .main-container .sections {
        grid-template-columns: 1fr;
    }

    .main-container .sidebar {
        display: none;
    }

    .main-container .navbar {
        position: fixed;
        display: flex;
        flex-direction: column;
        user-select: none !important;
        background: #240c58;
        border-bottom: 2px solid #36157b;
        top: 0;
        width: 100%;
    }

    .main-container .sidebar-links {
        text-align: right;
        width: 100%;
        margin-bottom: 12px;
        padding-right: 50px;
    }

    .main-container .social-links {
        display: flex;
        flex-direction: column;
        text-align: right;
        width: 100%;
        align-items: flex-end;
        padding-right: 50px;
    }

    .main-container .social-links a {
        margin-bottom: 12px;
    }

    .main-container .sidebar-links li {
        margin-bottom: 0px !important;
    }

    .main-container {
        background-image: url('/bg.png');
        background-size: 500px;
        background-repeat: no-repeat;
        background-position: right 0px top 50px;
    }

    .main-container .main-content {
        padding-left: 5vw;
        padding-right: 5vw;
    }
}
</style>
