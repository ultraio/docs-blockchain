import { defineConfig } from 'vitepress';
import { generate } from '../../scripts/configGenerator';
import { normalizePath } from '../../scripts/shared';

// do not modify
export default () => {
    const config = generate('experimental', '/docs');
    return defineConfig(config);
};
