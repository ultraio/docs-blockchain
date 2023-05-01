import { defineConfig } from 'vitepress';
import { generate } from '../../../../scripts/configGenerator';

// do not modify
export default defineConfig(generate('staging', '/packages/staging/docs'));
