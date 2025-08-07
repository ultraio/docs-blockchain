import { DefaultTheme } from 'vitepress';

// Staging-specific navbar additions
const stagingNavbar: Partial<DefaultTheme.NavItem[]> = [
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
                    { text: 'Ultra Bridge', link: '/tutorials/ultra-bridge/index' }, // Added Ultra Bridge for staging
                ],
            },
        ],
    },
];

export default stagingNavbar;