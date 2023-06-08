import { DefaultTheme, UserConfig } from 'vitepress';
import { templateConfig } from '../configs/template';
import { getSidebar } from '../configs/sidebar';
import { normalizePath } from './shared';

type environment = 'experimental' | 'staging' | 'mainnet';
type PartialConfig = Partial<UserConfig<DefaultTheme.Config>>;

/**
 * Modifies the base configuration files for each environment.
 *
 * Any value added will overwrite the main template.
 *
 * This allows for more robust configuration per environment.
 *
 * @type {{ [key in environment]: PartialConfig }}
 * */
const configs: { [key in environment]: PartialConfig } = {
    experimental: {
        title: 'Experimental Docs',
        outDir: normalizePath(process.cwd() + '/dist/experimental'),
        ignoreDeadLinks: true,
    },
    staging: {
        title: 'Staging Docs',
        outDir: normalizePath(process.cwd() + '/dist/staging'),
        ignoreDeadLinks: true,
    },
    mainnet: {
        title: 'Mainnet Docs',
        outDir: normalizePath(process.cwd() + '/dist/mainnet'),
        ignoreDeadLinks: true,
    },
};

/**
 * Generates a configuration to use for all environments.
 *
 * Each environment can be modified inside of `configGenerator.ts` for general overrides.
 *
 * @export
 * @param {environment} env
 * @return {UserConfig<DefaultTheme.Config>}
 */
export function generate(env: environment, basePath: string): UserConfig<DefaultTheme.Config> {
    const initialConfig = Object.assign({ ...templateConfig }, configs[env]);

    if (!initialConfig.themeConfig) {
        return initialConfig;
    }

    initialConfig.themeConfig.sidebar = getSidebar(normalizePath(process.cwd() + basePath));
    return initialConfig;
}
