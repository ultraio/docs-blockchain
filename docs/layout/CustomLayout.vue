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
            <VPFlyout :class="{ VPNavBarMenuGroup: false, active: false }" button="Version" :items="getLinks()" />
        </template>
    </Layout>
</template>

<style>
.VPNavBarTitle .title::before {
    content: '> ';
    color: var(--vp-c-brand) !important;
    padding-right: 6px;
    padding-bottom: 3px;
}
</style>
