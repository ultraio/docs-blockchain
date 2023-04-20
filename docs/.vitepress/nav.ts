import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
    { text: 'Home', link: '/' },
    { text: 'Learn', link: '/learn/index' },
    { text: 'Guides', link: '/guides/index' },
    { text: 'Contracts', link: '/contracts/index' },
    { text: 'API', link: '/api/index' },
    { text: 'Tools', link: '/tools/index' },
    {
        text: 'Resources',
        items: [
            //
            { text: 'Ultra.io', link: 'https://ultra.io' },
        ],
    },
];
