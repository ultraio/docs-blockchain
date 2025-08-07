import { defineConfig } from 'vitepress';
import { fileURLToPath } from 'node:url';
import basicSSL from '@vitejs/plugin-basic-ssl';

import { getNavbar } from './navbars/navbar';
import { getSidebar } from './sidebar';

let BASE_URL = '/';

const description =
    'Documentation for the Ultra.io Blockchain and various other APIs. Learn about our blockchain, uniqs, technology, and much more.';
const UltraHomePath = '/components/UltraHome.vue';

// URLs generated on Windows will be invalid
// Detect if the URL generated is in the format X:\ or X:/ and when creating a config return a different home component path
const isWindowsPathing = fileURLToPath(new URL(UltraHomePath, import.meta.url)).match(/[a-zA-Z]:[\\\/]/) != null;

export default defineConfig({
    base: BASE_URL,
    title: 'Ultra.io Docs',
    description: 'Blockchain Documentation for Ultra.io',
    ignoreDeadLinks: false,
    lastUpdated: true,
    appearance: 'force-dark',
    cleanUrls: false,
    themeConfig: {
        nav: getNavbar('base'),
        sidebar: getSidebar('base'),
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ultraio/docs-blockchain' },
            { icon: 'discord', link: 'https://discord.gg/gk2CC6Xech' },
        ],
        search: {
            provider: 'local',
        },
        lastUpdatedText: 'Last Updated',
        editLink: {
            pattern: 'https://github.com/ultraio/docs-blockchain/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },
    },
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: BASE_URL + 'favicon.ico' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: BASE_URL + 'apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: BASE_URL + 'favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: BASE_URL + 'favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: BASE_URL + 'site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: BASE_URL + 'safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
        ['link', { rel: 'sitemap', type: 'application/xml', title: 'Sitemap', href: '/sitemap.xml' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'crossorigin' }],
        [
            'link',
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap' },
        ],

        // Open Graph
        ['meta', { name: 'description', content: description }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://developers.ultra.io' }],
        ['meta', { property: 'og:title', content: 'Ultra Developer Portal' }],
        ['meta', { property: 'og:description', content: description }],
        ['meta', { property: 'og:image', content: '/meta.png' }],
        // Twitter
        ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { property: 'twitter:url', content: 'https://developers.ultra.io' }],
        ['meta', { property: 'twitter:title', content: 'Ultra Developer Portal' }],
        ['meta', { property: 'twitter:description', content: description }],
        ['meta', { property: 'twitter:image', content: '/meta.png' }],
        // Google Analytics
        [
            'script',
            {
                src: 'https://www.googletagmanager.com/gtag/js?id=GTM-WVKHHPB',
            },
        ],
        [
            'script',
            {},
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-BJ90L1VZC3');",
        ],
    ],
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => {
                    return tag.toLowerCase().search(/.*-.*/g) !== -1;
                },
            },
        },
    },
    vite: {
        resolve: {
            alias: [
                {
                    find: /^.*\/VPHome\.vue$/,
                    replacement: isWindowsPathing ? UltraHomePath : fileURLToPath(new URL(UltraHomePath, import.meta.url)),
                },
            ],
        },
        build: {
            chunkSizeWarningLimit: 1600,
        },
        plugins: process.argv.includes('--ssl') ? [basicSSL()] : [],
    },
});
