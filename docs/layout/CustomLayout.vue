<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue';

const { Layout } = DefaultTheme;

const defaultURLs = {
    mainnet: 'https://changeme.mainnet.ultra.io',
    staging: 'https://changeme.staging.ultra.io',
    experimental: 'https://changeme.experimental.ultra.io',
};

function generateLink(type: keyof typeof defaultURLs) {
    return defaultURLs[type] + window.location.pathname;
}

function getLinks() {
    return [
        { text: 'Mainnet', link: generateLink('mainnet') },
        { text: 'Staging', link: generateLink('staging') },
        { text: 'Experimental', link: generateLink('experimental') },
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
