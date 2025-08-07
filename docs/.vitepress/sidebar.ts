import { DefaultTheme } from 'vitepress';
import base from './sidebars/base';
import stagingSidebar from './sidebars/staging';
import mainnetSidebar from './sidebars/mainnet';
import experimentalSidebar from './sidebars/experimental';

// Function to merge sidebar items by key
function mergeSidebars(baseSidebar: { [key: string]: DefaultTheme.SidebarItem[] }, additionalSidebar: { [key: string]: DefaultTheme.SidebarItem[] }): { [key: string]: DefaultTheme.SidebarItem[] } {
    const mergedSidebar = { ...baseSidebar };
    
    for (const [key, additionalItems] of Object.entries(additionalSidebar)) {
        if (mergedSidebar[key]) {
            // If the key exists, merge the items
            mergedSidebar[key] = [...mergedSidebar[key], ...additionalItems];
        } else {
            // If the key doesn't exist, add it
            mergedSidebar[key] = additionalItems;
        }
    }
    
    return mergedSidebar;
}

export function getSidebar(type: 'base' | 'staging' | 'mainnet' | 'experimental'): { [key: string]: DefaultTheme.SidebarItem[] } {
    let newSidebar = base;

    if (type === 'base') {
        return newSidebar;
    }

    if (type === 'experimental') {
        newSidebar = mergeSidebars(newSidebar, experimentalSidebar);
    }

    if (type === 'staging') {
        newSidebar = mergeSidebars(newSidebar, stagingSidebar);
    }

    if (type === 'mainnet') {
        newSidebar = mergeSidebars(newSidebar, mainnetSidebar);
    }

    return newSidebar;
}
