import { DefaultTheme } from 'vitepress';
import { getMarkdownFiles } from './helper';

const sidebar: { [key: string]: DefaultTheme.SidebarItem[] } = {
    // ################
    // Tutorials - staging additions
    // ################
    '/tutorials/index': [
        {
            text: 'Substreams',
            items: getMarkdownFiles('/tutorials/substreams'),
            collapsed: true,
        }
    ],
    '/tutorials/substreams': [
        {
            text: 'Tutorials',
            items: [
                {
                    text: '< Go Back to Tutorials',
                    link: '/tutorials/index/index',
                },
            ],
        },
        {
            text: 'Substreams',
            items: getMarkdownFiles('/tutorials/substreams'),
        },
    ],
};

export default sidebar;
