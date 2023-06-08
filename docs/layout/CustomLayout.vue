<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue';
import { useData } from 'vitepress';

const { Layout } = DefaultTheme;

const { page } = useData();

const defaultURLs = {
    mainnet: '/',
    staging: '/staging/',
    experimental: '/experimental/',
};

function generateLink(type: keyof typeof defaultURLs) {
    return window.location.origin + defaultURLs[type] + page.value.relativePath.replace('.md', '.html');
}

function getLinks() {
    return [
        { text: 'Mainnet', link: generateLink('mainnet'), target: 'e' },
        { text: 'Staging', link: generateLink('staging'), target: 'e' },
        { text: 'Experimental', link: generateLink('experimental'), target: 'e' },
    ];
}
</script>

<template>
    <Layout>
        <template #nav-bar-content-after>
            <ClientOnly>
                <VPFlyout :class="{ VPNavBarMenuGroup: false, active: false }" button="Version" :items="getLinks()" />
            </ClientOnly>
        </template>
    </Layout>
</template>

<style>
.VPNav {
    border-top: 1px solid var(--vp-c-brand);
    background: rgba(40, 38, 44, 0.62);
    backdrop-filter: blur(15px);
}

.VPNavBar.has-sidebar .content-body {
    background-color: transparent !important;
}

.VPNavBarTitle .title::before {
    content: '';
    background-color: var(--vp-c-brand) !important;
    margin-right: 6px;
    width: 8px;
    height: 8px;
    display: block;
    border-radius: 4px;
}

.VPFlyout .appearance {
    display: none !important;
}
</style>
