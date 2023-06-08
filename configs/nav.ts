import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
    { text: 'Home', link: '/' },
    { text: 'Guides', link: '/guides/index', activeMatch: '/guides/' },
    { text: 'Learn', link: '/learn/index', activeMatch: '/learn/' },
    { text: 'Contracts', link: '/contracts/index', activeMatch: '/contracts/' },
    { text: 'API', link: '/api/index', activeMatch: '/api/' },
    { text: 'Tools', link: '/tools/index', activeMatch: '/tools/' },
];
