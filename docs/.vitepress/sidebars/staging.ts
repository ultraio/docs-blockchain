import { DefaultTheme } from 'vitepress';
import { getMarkdownFiles } from './helper';

const sidebar: { [key: string]: DefaultTheme.SidebarItem[] } = {
    // ################
    // blockchain/contracts - staging additions
    // ################
    '/blockchain/contracts': [
        {
            text: 'Ultra Contracts',
            items: [
                {
                    text: 'What is Ultra?',
                    link: '/blockchain/contracts/index',
                },
            ],
        },
        {
            text: 'System Contract',
            items: [
                ...getMarkdownFiles('/blockchain/contracts/system-contract'),
                {
                    text: 'Actions',
                    items: getMarkdownFiles('/blockchain/contracts/system-contract/system-actions'),
                    collapsed: true,
                },
            ],
            collapsed: true,
        },
        {
            text: 'NFT Contract',
            items: [
                ...getMarkdownFiles('/blockchain/contracts/nft-contract'),
                {
                    text: 'Actions',
                    items: getMarkdownFiles('/blockchain/contracts/nft-contract/nft-actions'),
                    collapsed: true,
                },
            ],
            collapsed: true,
        },
        {
            text: 'Token Contract',
            items: [
                ...getMarkdownFiles('/blockchain/contracts/token-contract'),
                {
                    text: 'Actions',
                    items: getMarkdownFiles('/blockchain/contracts/token-contract/token-actions'),
                    collapsed: true,
                },
            ],
            collapsed: true,
        },
        {
            text: 'KYC Contract',
            items: [
                ...getMarkdownFiles('/blockchain/contracts/kyc-contract'),
                {
                    text: 'Actions',
                    items: getMarkdownFiles('/blockchain/contracts/kyc-contract/kyc-actions'),
                    collapsed: true,
                },
            ],
            collapsed: true,
        },
        {
            text: 'User Group Contract',
            items: [
                ...getMarkdownFiles('/blockchain/contracts/user-group-contract'),
                {
                    text: 'Actions',
                    items: getMarkdownFiles('/blockchain/contracts/user-group-contract/user-group-actions'),
                    collapsed: true,
                },
            ],
            collapsed: true,
        },
        {
            text: 'Oracle Contract',
            items: [
                ...getMarkdownFiles('/blockchain/contracts/oracle-contract'),
                {
                    text: 'Actions',
                    items: getMarkdownFiles('/blockchain/contracts/oracle-contract/oracle-actions'),
                    collapsed: true,
                },
            ],
            collapsed: true,
        },
        {
            text: 'Avatar Contract',
            items: [
                ...getMarkdownFiles('/blockchain/contracts/avatar-contract'),
                {
                    text: 'Actions',
                    items: getMarkdownFiles('/blockchain/contracts/avatar-contract/avatar-actions'),
                    collapsed: true,
                },
            ],
            collapsed: true,
        },
        {
            text: 'Airgrab Contract',
            items: [
                ...getMarkdownFiles('/blockchain/contracts/airgrab-contract'),
                {
                    text: 'Actions',
                    items: getMarkdownFiles('/blockchain/contracts/airgrab-contract/airgrab-actions'),
                    collapsed: true,
                },
            ],
            collapsed: true,
        },
        {
            text: 'RNG Contract',
            items: [
                ...getMarkdownFiles('/blockchain/contracts/rng-contract'),
                {
                    text: 'Actions',
                    items: getMarkdownFiles('/blockchain/contracts/rng-contract/rng-actions'),
                    collapsed: true,
                },
            ],
            collapsed: true,
        },
        {
            text: 'AOM Contracts',
            items: getMarkdownFiles('/blockchain/contracts/aom-contracts'),
            collapsed: true,
        },
    ],
};

export default sidebar;
