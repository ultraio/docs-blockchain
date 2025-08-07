import { DefaultTheme } from 'vitepress';
import base from './base';
import stagingNavbar from './staging';
import mainnetNavbar from './mainnet';

export function getNavbar(type: 'base' | 'staging' | 'mainnet'): DefaultTheme.NavItem[] {
    let navbar = [...base];

    if (type === 'base') {
        return navbar;
    }

    if (type === 'staging') {
        // Replace the Tutorials section with the staging version that includes Ultra Bridge
        const tutorialsIndex = navbar.findIndex(item => item.text === 'Tutorials');
        if (tutorialsIndex !== -1 && stagingNavbar[0]) {
            navbar[tutorialsIndex] = stagingNavbar[0] as DefaultTheme.NavItem;
        }
    }

    if (type === 'mainnet') {
        // Mainnet uses base navbar as-is (no Ultra Bridge)
        return navbar;
    }

    return navbar;
}