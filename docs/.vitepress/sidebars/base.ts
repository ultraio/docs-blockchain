import { DefaultTheme } from 'vitepress';
import { getMarkdownFiles } from './helper';

const sidebar: { [key: string]: DefaultTheme.SidebarItem[] } = {
    // ################
    // Tutorials
    // ################
    '/tutorials/index': [
        {
            text: 'All Tutorials',
            items: [
                {
                    text: 'Overview',
                    link: '/tutorials/index/',
                },
            ],
        },
        {
            text: 'Fundamentals',
            items: getMarkdownFiles('/tutorials/fundamentals'),
            collapsed: true,
        },
        {
            text: 'Guides - Basics',
            items: getMarkdownFiles('/tutorials/guides'),
            collapsed: true,
        },
        {
            text: 'Guides - Advanced',
            items: getMarkdownFiles('/tutorials/advanced-guides'),
            collapsed: true,
        },
        {
            text: 'Projects',
            items: [
                {
                    text: 'Vite, Vue, and Ultra Wallet',
                    items: getMarkdownFiles('/tutorials/projects/vite-vue-ultra-wallet'),
                },
            ],
            collapsed: true,
        },
        {
            text: 'Basics',
            items: getMarkdownFiles('/tutorials/general/basics'),
            collapsed: true,
        },
        {
            text: 'Testnet Faucet',
            items: getMarkdownFiles('/tutorials/general/faucet'),
            collapsed: true,
        },
        {
            text: 'Docker',
            items: getMarkdownFiles('/tutorials/docker'),
            collapsed: true,
        },
        {
            text: 'Smart Contracts',
            items: getMarkdownFiles('/tutorials/smart-contracts'),
            collapsed: true,
        },
        {
            text: 'Create a Uniq Factory',
            items: getMarkdownFiles('/tutorials/uniq-factories/creating-uniq-factories'),
            collapsed: true,
        },
        {
            text: 'Factory Management',
            items: getMarkdownFiles('/tutorials/uniq-factories/factory-management'),
            collapsed: true,
        },
        {
            text: 'Uniq Variants',
            items: getMarkdownFiles('/tutorials/uniq-factories/uniq-variants'),
            collapsed: true,
        },
        {
            text: 'Uniq Avatar',
            items: getMarkdownFiles('/tutorials/uniq-factories/uniq-avatar'),
            collapsed: true,
        },
        {
            text: 'Uniq Offer',
            items: getMarkdownFiles('/tutorials/uniq-factories/uniq-offer'),
            collapsed: true,
        },
        {
            text: 'Uniq Auction',
            items: getMarkdownFiles('/tutorials/uniq-factories/uniq-auction'),
            collapsed: true,
        },
        {
            text: 'Uniq On-chain Data',
            items: getMarkdownFiles('/tutorials/uniq-factories/uniq-on-chain-data'),
            collapsed: true,
        },
        {
            text: 'Token Swap',
            items: getMarkdownFiles('/tutorials/token-swap'),
            collapsed: true,
        },
        {
            text: 'Fungitable Token',
            items: getMarkdownFiles('/tutorials/token'),
            collapsed: true,
        },
        {
            text: 'Oracle',
            items: getMarkdownFiles('/tutorials/oracle'),
            collapsed: true,
        },
        {
            text: 'RNG',
            items: getMarkdownFiles('/tutorials/rng'),
            collapsed: true,
        },
        {
            text: 'Airgrab',
            items: getMarkdownFiles('/tutorials/airgrab'),
            collapsed: true,
        },
        {
            text: 'Ultra EVM',
            items: getMarkdownFiles('/tutorials/Ultra-EVM'),
            collapsed: true,
        },
    ],
    '/tutorials/general': [
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
            text: 'Basics',
            items: getMarkdownFiles('/tutorials/general/basics'),
            collapsed: false,
        },
        {
            text: 'Testnet Faucet',
            items: getMarkdownFiles('/tutorials/general/faucet'),
            collapsed: false,
        },
    ],
    '/tutorials/fundamentals': [
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
            text: 'Fundamentals',
            items: getMarkdownFiles('/tutorials/fundamentals'),
            collapsed: true,
        },
    ],
    '/tutorials/guides': [
        {
            text: 'Guides',
            items: [
                {
                    text: '< Go Back to Tutorials',
                    link: '/tutorials/index/index',
                },
            ],
        },
        {
            text: 'Guides - Basics',
            items: getMarkdownFiles('/tutorials/guides'),
            collapsed: true,
        },
    ],
    '/tutorials/advanced-guides': [
        {
            text: 'Guides',
            items: [
                {
                    text: '< Go Back to Tutorials',
                    link: '/tutorials/index/index',
                },
            ],
        },
        {
            text: 'Guides - Advanced',
            items: getMarkdownFiles('/tutorials/advanced-guides'),
            collapsed: true,
        },
    ],
    '/tutorials/docker': [
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
            text: 'Docker',
            items: getMarkdownFiles('/tutorials/docker'),
            collapsed: false,
        },
    ],
    '/tutorials/projects': [
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
            text: 'Vite, Vue, and Ultra Wallet',
            items: getMarkdownFiles('/tutorials/projects/vite-vue-ultra-wallet'),
        },
    ],
    '/tutorials/smart-contracts': [
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
            text: 'Smart Contracts',
            items: getMarkdownFiles('/tutorials/smart-contracts'),
        },
    ],
    '/tutorials/uniq-factories': [
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
            text: 'Uniq Factories',
            items: [
                {
                    text: 'Overview',
                    link: '/tutorials/uniq-factories/',
                },
            ],
        },
        {
            text: 'Create a Uniq Factory',
            items: getMarkdownFiles('/tutorials/uniq-factories/creating-uniq-factories'),
            collapsed: false,
        },
        {
            text: 'Factory Management',
            items: getMarkdownFiles('/tutorials/uniq-factories/factory-management'),
            collapsed: true,
        },
        {
            text: 'Uniq Variants',
            items: getMarkdownFiles('/tutorials/uniq-factories/uniq-variants'),
            collapsed: true,
        },
        {
            text: 'Uniq Avatar',
            items: getMarkdownFiles('/tutorials/uniq-factories/uniq-avatar'),
            collapsed: true,
        },
        {
            text: 'Uniq Offer',
            items: getMarkdownFiles('/tutorials/uniq-factories/uniq-offer'),
            collapsed: true,
        },
        {
            text: 'Uniq Auction',
            items: getMarkdownFiles('/tutorials/uniq-factories/uniq-auction'),
            collapsed: true,
        },
        {
            text: 'Uniq On-chain Data',
            items: getMarkdownFiles('/tutorials/uniq-factories/uniq-on-chain-data'),
            collapsed: true,
        },
    ],
    '/tutorials/Ultra-EVM': [
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
            text: 'Ultra EVM',
            items: getMarkdownFiles('/tutorials/Ultra-EVM'),
            collapsed: false,
        },
    ],
    '/tutorials/token-swap': [
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
            text: 'Token Swap',
            items: getMarkdownFiles('/tutorials/token-swap'),
        },
    ],
    '/tutorials/token': [
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
            text: 'Fungitable Token',
            items: getMarkdownFiles('/tutorials/token'),
            collapsed: false,
        },
    ],
    '/tutorials/oracle': [
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
            text: 'Oracle',
            items: getMarkdownFiles('/tutorials/oracle'),
        },
    ],
    '/tutorials/airgrab': [
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
            text: 'Aigrab',
            items: getMarkdownFiles('/tutorials/airgrab'),
        },
    ],
    '/tutorials/rng': [
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
            text: 'RNG',
            items: getMarkdownFiles('/tutorials/rng'),
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
            items: [
                {
                    text: 'Wallet Browser Extension',
                    link: '/products/index',
                    items: getMarkdownFiles('/products/ultra-wallet'),
                    collapsed: true,
                },
                {
                    text: 'Web Wallet',
                    items: getMarkdownFiles('/products/ultra-web-wallet'),
                    collapsed: true,
                },
                {
                    text: 'Wallet SDK',
                    items: getMarkdownFiles('/products/ultra-wallet-sdk'),
                    collapsed: true,
                },
            ],
        },
        {
            text: 'Chain API',
            items: getMarkdownFiles('/products/chain-api'),
            collapsed: true,
        },
        {
            text: 'Ultra API',
            items: getMarkdownFiles('/products/nft-api'),
            collapsed: true,
        },
        {
            text: 'Contract Builder',
            items: getMarkdownFiles('/products/contract-builder'),
            collapsed: true,
        },
        {
            text: 'Smart Contract VS Code Extension',
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
        {
            text: 'Uniq Metadata Tool',
            items: getMarkdownFiles('/products/uniq-metadata-tool'),
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
            items: [
                ...getMarkdownFiles('/blockchain/general/tools'),
                { text: 'CDT', items: getMarkdownFiles('/blockchain/general/tools/cdt'), collapsed: true },
            ],
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
    ],
    '/feedback/index': [
        {
            text: 'Feedback',
            items: getMarkdownFiles('/feedback'),
        },
    ],
};

export default sidebar;
