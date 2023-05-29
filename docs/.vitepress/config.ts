import { defineConfig } from 'vitepress';
import { generate } from '../../scripts/configGenerator';

// do not modify
export default () => {
    const config = generate('experimental', '/docs');
    return defineConfig(config);
};
