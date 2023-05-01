import { DefaultTheme } from 'vitepress';
import { getFolderAsSidebar } from '../scripts/sidebar';

export function getSidebar(basePath: string): { [path: string]: DefaultTheme.SidebarItem[] } {
    return {
        '/learn': getFolderAsSidebar(basePath, 'learn', true),
        '/guides': getFolderAsSidebar(basePath, 'guides', true),
        '/contracts': getFolderAsSidebar(basePath, 'contracts', true),
        '/api': getFolderAsSidebar(basePath, 'api', true),
        '/tools': getFolderAsSidebar(basePath, 'tools', true),
    };
}
