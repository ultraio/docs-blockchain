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
    if (type === 'mainnet') {
        return window.location.origin + '/' + page.value.relativePath.replace('.md', '.html');
    }

    return window.location.origin + defaultURLs[type] + page.value.relativePath.replace('.md', '.html');
}

function forceReload(e: InputEvent) {
    if (!e || !e.target) {
        return;
    }

    const el = e.target as HTMLInputElement;
    if (!el.classList.contains('VPLink')) {
        return;
    }

    window.location.reload();
}

function getLinks() {
    return [
        { text: 'Mainnet', link: generateLink('mainnet'), target: '_parent', rel: 'noreferrer' },
        { text: 'Staging', link: generateLink('staging'), target: '_parent', rel: 'noreferrer' },
        { text: 'Experimental', link: generateLink('experimental'), target: '_parent', rel: 'noreferrer' },
    ];
}
</script>

<template>
    <Layout>
        <template #nav-bar-content-after>
            <ClientOnly>
                <VPFlyout
                    :class="{ VPNavBarMenuGroup: false, active: false }"
                    button="Version"
                    :items="getLinks()"
                    @click="forceReload"
                />
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
