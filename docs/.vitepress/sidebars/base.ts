import { DefaultTheme } from 'vitepress';
import { getMarkdownFiles } from './helper';

const sidebar: { [key: string]: DefaultTheme.SidebarItem[] } = {
    // ################
    // Tutorials
    // ################
    '/tutorials/general': [
        {
            text: 'Basics',
            items: getMarkdownFiles('/tutorials/general/basics'),
            collapsed: false,
        },
        {
            text: 'Docker',
            items: getMarkdownFiles('/tutorials/general/docker'),
            collapsed: false,
        },
    ],
    '/tutorials/smart-contracts': [
        {
            text: 'Smart Contracts',
            items: getMarkdownFiles('/tutorials/smart-contracts'),
        },
    ],
    // ################
    // Game Developers
    // ################
    '/game-developers': [
        {
            text: 'Game Developers',
            items: [
                {
                    text: 'Overview',
                    link: '/game-developers/index',
                },
            ],
        },
        {
            text: 'Game Dev Center',
            items: getMarkdownFiles('/game-developers/game-dev-center'),
            collapsed: true,
        },
        {
            text: 'Unity',
            items: getMarkdownFiles('/game-developers/unity'),
            collapsed: true,
        },
        {
            text: 'Unreal',
            items: getMarkdownFiles('/game-developers/unreal'),
            collapsed: true,
        },
        {
            text: 'Web',
            items: getMarkdownFiles('/game-developers/web'),
            collapsed: true,
        },
    ],
    // ################
    // Products
    // ################
    '/products': [
        {
            text: 'Products',
            items: [
                {
                    text: 'Quick Links',
                    link: '/products/index',
                },
            ],
        },
        {
            text: 'Ultra Wallet',
            items: getMarkdownFiles('/products/ultra-wallet'),
            collapsed: true,
        },
        {
            text: 'Chain API',
            items: getMarkdownFiles('/products/chain-api'),
            collapsed: true,
        },
        {
            text: 'NFT API',
            items: getMarkdownFiles('/products/nft-api'),
            collapsed: true,
        },
        {
            text: 'Contract Builder',
            items: getMarkdownFiles('/products/contract-builder'),
            collapsed: true,
        },
        {
            text: 'Smart Contract Toolkit',
            items: getMarkdownFiles('/products/smart-contract-toolkit'),
            collapsed: true,
        },
        {
            text: 'Ultratest',
            items: getMarkdownFiles('/products/ultratest'),
            collapsed: true,
        },
        {
            text: 'Uniq Discord Bot',
            items: getMarkdownFiles('/products/uniq-discord-bot'),
            collapsed: true,
        },
    ],
    // ################
    // blockchain/general
    // ################
    '/blockchain/general': [
        {
            text: 'Blockchain General',
            items: [
                {
                    text: 'What is Ultra?',
                    link: '/blockchain/general/index',
                },
                {
                    text: 'Useful Links',
                    link: '/blockchain/general/links',
                },
            ],
        },
        {
            text: 'Ultra Blockchain',
            items: getMarkdownFiles('/blockchain/general/antelope-ultra'),
            collapsed: true,
        },
        {
            text: 'Tools',
            items: getMarkdownFiles('/blockchain/general/tools'),
            collapsed: true,
        },
    ],
    // ################
    // blockchain/block-producers
    // ################
    '/blockchain/block-producers': [
        {
            text: 'Block Producers',
            items: [
                {
                    text: 'What is a Block Producer?',
                    link: '/blockchain/block-producers/index',
                },
            ],
        },
        {
            text: 'Infrastructure',
            items: getMarkdownFiles('/blockchain/block-producers/infrastructure'),
            collapsed: true,
        },
        {
            text: 'Launch Procedures',
            items: getMarkdownFiles('/blockchain/block-producers/launch-procedures'),
            collapsed: true,
        },
        {
            text: 'Maintenance',
            items: getMarkdownFiles('/blockchain/block-producers/maintenance'),
            collapsed: true,
        },
    ],
    // ################
    // blockchain/contracts
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
    ],
};

export default sidebar;
