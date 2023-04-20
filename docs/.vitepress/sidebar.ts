import SidebarBuilder from '@stuyk/vitepress-sidebar-builder';
import { DefaultTheme } from 'vitepress';

export const sidebar: { [path: string]: DefaultTheme.SidebarItem[] } = {
    '/learn': [
        {
            text: 'Learn',
            items: [
                {
                    text: 'About this Section',
                    link: '/learn/index',
                },
            ],
        },
        ...SidebarBuilder.get.foldersAndOrder('docs/learn'),
    ],
    '/guides': [
        {
            text: 'Guides',
            items: [
                {
                    text: 'About this Section',
                    link: '/guides/index',
                },
            ],
        },
        ...SidebarBuilder.get.foldersAndOrder('docs/guides'),
    ],
    '/contracts': [
        {
            text: 'Contracts',
            items: [
                {
                    text: 'About this Section',
                    link: '/contracts/index',
                },
            ],
        },
        ...SidebarBuilder.get.foldersAndOrder('docs/contracts'),
    ],
    '/api': [
        {
            text: 'API',
            items: [
                {
                    text: 'About this Section',
                    link: '/api/index',
                },
            ],
        },
        ...SidebarBuilder.get.foldersAndOrder('docs/api'),
    ],
    '/tools': [
        {
            text: 'Tools',
            items: [
                {
                    text: 'About this Section',
                    link: '/tools/index',
                },
            ],
        },
        ...SidebarBuilder.get.foldersAndOrder('docs/tools'),
    ],
};
