import fs from 'fs-extra';
import * as matter from 'gray-matter';
import * as glob from 'glob';
import { normalizePath } from './shared';

type Envs = 'experimental' | 'staging' | 'mainnet';

const environmentFolders: Array<{ from: string; to: Array<Envs> }> = [
    // These are folders that we should directly copy to all other environments outright.
    // They are considered 'static'
    { from: 'docs/public', to: ['staging', 'mainnet'] },
    { from: 'docs/layout', to: ['staging', 'mainnet'] },
];

/**
 * Copies all static environment files into environment specific folders.
 */
function copyEnvironmentFiles() {
    for (let path of environmentFolders) {
        const startPath = normalizePath(path.from);
        if (!fs.existsSync(startPath)) {
            console.warn(`Path: ${startPath} does not exist, should we be copying it?`);
            continue;
        }

        const slicedPath = startPath.split('/');
        for (let env of path.to) {
            if (env === 'experimental') {
                continue;
            }

            const endPath = `packages/${env}/docs/${slicedPath[slicedPath.length - 1]}`;
            fs.cpSync(startPath, endPath, { recursive: true, preserveTimestamps: true, force: true });
        }
    }
}

/**
 * By default all documentation gets copied to experimental.
 *
 * However, each document needs to have a `deploy` array for front-matter
 *
 */
function copyDocsPerEnvironment() {
    const files = glob.sync('docs/**/*.md');
    for (let filePath of files) {
        const startPath = normalizePath(filePath);
        const frontMatter = matter.read(startPath) as matter.GrayMatterFile<string> & { isEmpty: boolean };
        if (typeof frontMatter === 'undefined' || frontMatter.isEmpty) {
            console.warn(`${startPath} | No Front Matter Available`);
            continue;
        }

        let deployments: Array<string> = frontMatter.data.deploy;
        if (!deployments) {
            console.warn(`${startPath} | Did not specify a 'deploy' front matter list!`);
            continue;
        }

        for (let env of deployments) {
            if (env === 'experimental') {
                continue;
            }

            const endPath = startPath.replace('docs', `packages/${env}/docs`);
            fs.cpSync(startPath, endPath, { recursive: true, preserveTimestamps: true, force: true });
        }
    }
}

function start() {
    if (fs.existsSync('dist')) {
        fs.rmSync('dist', { force: true, recursive: true });
    }

    copyEnvironmentFiles();
    copyDocsPerEnvironment();
}

start();
