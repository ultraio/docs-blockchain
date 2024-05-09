import { DefaultTheme } from 'vitepress';
import base from './sidebars/base';
import stagingSidebar from './sidebars/staging';
import mainnetSidebar from './sidebars/mainnet';

export function getSidebar(type: 'base' | 'staging' | 'mainnet'): { [key: string]: DefaultTheme.SidebarItem[] } {
    let newSidebar = base;

    if (type === 'base') {
        return newSidebar;
    }

    if (type === 'staging') {
        newSidebar = { ...newSidebar, ...stagingSidebar };
    }

    if (type === 'mainnet') {
        newSidebar = { ...newSidebar, ...mainnetSidebar };
    }

    return newSidebar;
}
