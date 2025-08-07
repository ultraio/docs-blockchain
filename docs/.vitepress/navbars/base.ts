import { DefaultTheme } from 'vitepress';

const navbar: DefaultTheme.NavItem[] = [
    {
        text: 'Tutorials',
        items: [
            //
            { text: 'All Tutorials', link: '/tutorials/index/index' },
            {
                text: 'Featured',
                items: [
                    { text: 'Fundamentals', link: '/tutorials/fundamentals/tutorial-generate-key-and-create-testnet-account' },
                    { text: 'Guides', link: '/tutorials/guides/how-to-create-ultra-pro-wallet.md' },
                    { text: 'Docker', link: '/tutorials/docker/getting-started' },
                    { text: 'Smart Contracts', link: '/tutorials/smart-contracts/index' },
                    { text: 'Uniq Factories', link: '/tutorials/uniq-factories/index' },
                    { text: 'Ultra EVM', link: '/tutorials/Ultra-EVM/index' },
                    { text: 'Token Swap', link: '/tutorials/token-swap/index' },
                    { text: 'Fungitable Token', link: '/tutorials/token/index' },
                    { text: 'RNG', link: '/tutorials/rng/how-to-integrate-rng-in-smart-contracts' },
                    { text: 'Airgrab', link: '/tutorials/airgrab/index' },
                ],
            },
        ],
    },
    {
        text: 'Game Developers',
        items: [
            //
            { text: 'Overview', link: '/game-developers/index' },
            { text: 'Game Developer Center', link: '/game-developers/game-dev-center/index' },
            {
                text: 'Game Engines',
                items: [
                    { text: 'Unity', link: '/game-developers/unity/index' },
                    { text: 'Unreal', link: '/game-developers/unreal/index' },
                    { text: 'Web', link: '/game-developers/web/index' },
                ],
            },
        ],
    },
    {
        text: 'Products',
        items: [
            //
            { text: 'All Products', link: '/products/index' },
            {
                text: 'Featured Products',
                items: [
                    { text: 'Ultra Wallet', link: '/products/ultra-wallet/index' },
                    { text: 'Chain API', link: '/products/chain-api/index' },
                    { text: 'Ultra API', link: '/products/nft-api/introduction' },
                ],
            },
        ],
    },
    {
        text: 'Blockchain',
        items: [
            //
            { text: 'Overview', link: '/blockchain/general/index' },
            { text: 'Block Producers', link: '/blockchain/block-producers/index' },
            { text: 'Contracts', link: '/blockchain/contracts/index' },
        ],
    },
    {
        text: 'Feedback',
        link: '/feedback/index',
    },
];

export default navbar;