import { defineConfig } from 'vitepress';
import { nav } from './nav';
import { sidebar } from './sidebar';

const BASE_URL =
    process.argv.includes('--dev') || process.argv.includes('--prod')
        ? '/'
        : 'https://ultraio.github.io/docs-blockchain';

export default defineConfig({
    base: BASE_URL,
    title: 'Ultra.io Blockchain Docs',
    description: 'Blockchain Documentation for Ultra.io',
    ignoreDeadLinks: false,
    lastUpdated: true,
    cleanUrls: false,
    themeConfig: {
        nav,
        sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ultraio/docs-blockchain' },
            { icon: 'discord', link: 'https://discord.gg/ultraio' },
        ],
        search: {
            provider: 'local',
        },
        lastUpdatedText: 'Last Updated',
    },
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: BASE_URL + 'favicon.ico' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: BASE_URL + 'apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: BASE_URL + 'favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: BASE_URL + 'favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: BASE_URL + 'site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: BASE_URL + 'safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ],
});
