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
                    text: 'test',
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
                    text: 'test',
                },
            ],
        },
        ...SidebarBuilder.get.foldersAndOrder('docs/contracts'),
    ],
    '/api': [
        {
            text: 'Learn',
            items: [
                {
                    text: 'test',
                },
            ],
        },
        ...SidebarBuilder.get.foldersAndOrder('docs/api'),
    ],
    '/tools': [
        {
            text: 'Learn',
            items: [
                {
                    text: 'test',
                },
            ],
        },
        ...SidebarBuilder.get.foldersAndOrder('docs/tools'),
    ],
};
