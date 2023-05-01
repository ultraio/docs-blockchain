import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
    { text: 'Home', link: '/' },
    { text: 'Learn', link: '/learn/index' },
    { text: 'Guides', link: '/guides/index' },
    { text: 'Contracts', link: '/contracts/index' },
    { text: 'API', link: '/api/index' },
    { text: 'Tools', link: '/tools/index' },
    {
        text: 'Version',
        items: [
            { text: 'Mainnet', link: 'https://ultra.io' },
            { text: 'Testnet', link: 'https://ultra.io' },
            { text: 'Experimental', link: 'https://ultra.io' },
        ],
    },
];
