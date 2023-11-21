import fs from 'node:fs';
import fg from 'fast-glob';

for (let environment of ['experimental', 'staging', 'mainnet']) {
    const docsFolder = `docs-${environment}`;
    fs.mkdirSync(docsFolder, { recursive: true });

    // Remove Cache
    if (fs.existsSync('docs/.vitepress/cache')) {
        fs.rmSync('docs/.vitepress/cache', { recursive: true, force: true });
    }

    if (fs.existsSync('docs/.vitepress/dist')) {
        fs.rmSync('docs/.vitepress/dist', { recursive: true, force: true });
    }

    // Copy All Files
    fs.cpSync('docs', docsFolder, { recursive: true });

    const files = fg.globSync(`${docsFolder}/**/*`);
    const regexr = new RegExp(/.*\.(mainnet|staging)\./g);

    // Overwrite environment specific files
    for (let filePath of files) {
        if (!filePath.includes('.md')) {
            continue;
        }

        if (!regexr.test(filePath)) {
            continue;
        }

        if (!filePath.includes(`${environment}.md`)) {
            fs.rmSync(filePath);
            continue;
        }

        const newPath = filePath.replace(`.${environment}.md`, '.md');
        fs.cpSync(filePath, newPath);
        fs.rmSync(filePath);
    }

    // Apply themes
    if (environment === 'experimental') {
        fs.cpSync('themes/experimental/style.css', 'docs-experimental/.vitepress/theme/style.css');
    }

    if (environment === 'staging') {
        fs.cpSync('themes/staging/style.css', 'docs-staging/.vitepress/theme/style.css');
    }

    if (environment === 'mainnet') {
        fs.cpSync('themes/mainnet/style.css', 'docs-mainnet/.vitepress/theme/style.css');
    }
}
