import { DefaultTheme } from 'vitepress';
import base from './sidebars/base';
import stagingSidebar from './sidebars/staging';
import mainnetSidebar from './sidebars/mainnet';

export function getSidebar(type: 'base' | 'staging' | 'mainnet'): { [key: string]: DefaultTheme.SidebarItem[] } {
    let newSidebar = base;

    if (type === 'base') {
        console.log('BASE');
        console.log(newSidebar);
        return newSidebar;
    }

    if (type === 'staging') {
        newSidebar = { ...newSidebar, ...stagingSidebar };
        console.log('staging');
        console.log(newSidebar);
    }

    if (type === 'mainnet') {
        newSidebar = { ...newSidebar, ...mainnetSidebar };
        console.log('mainnet');
        console.log(newSidebar);
    }

    return newSidebar;
}
