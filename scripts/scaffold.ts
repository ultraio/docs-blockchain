import fs from 'node:fs';
import fg from 'fast-glob';

for (let environment of ['experimental', 'staging', 'mainnet']) {
    const docsFolder = `docs-${environment}`;
    // Delete previous build to avoid duplicate pages
    fs.rmSync(docsFolder, { recursive: true, force: true });
    fs.mkdirSync(docsFolder, { recursive: true });

    // Remove Cache
    if (fs.existsSync('docs/.vitepress/cache')) {
        fs.rmSync('docs/.vitepress/cache', { recursive: true, force: true });
    }

    if (fs.existsSync('docs/.vitepress/dist')) {
        fs.rmSync('docs/.vitepress/dist', { recursive: true, force: true });
    }

    // Copy All Files
    fs.cpSync('docs', docsFolder, { recursive: true, force: true });

    let configData = fs.readFileSync(`${docsFolder}/.vitepress/config.ts`, 'utf-8');
    if (docsFolder.includes('staging')) {
        configData = configData.replace("BASE_URL = '/'", "BASE_URL = '/staging/'");
        configData = configData.replace("getSidebar('base')", "getSidebar('staging')");
        configData = configData.replace("getNavbar('base')", "getNavbar('staging')");
        fs.writeFileSync(`${docsFolder}/.vitepress/config.ts`, configData);
        console.log(`Updated Base Path for Staging`);
    }

    if (docsFolder.includes('experimental')) {
        configData = configData.replace("BASE_URL = '/'", "BASE_URL = '/experimental/'");
        configData = configData.replace("getSidebar('base')", "getSidebar('experimental')");
        fs.writeFileSync(`${docsFolder}/.vitepress/config.ts`, configData);
        console.log(`Updated Base Path for Experimental`);
    }

    if (docsFolder.includes('mainnet')) {
        configData = configData.replace("getNavbar('base')", "getNavbar('mainnet')");
        fs.writeFileSync(`${docsFolder}/.vitepress/config.ts`, configData);
        console.log(`Updated Navbar for Mainnet`);
    }

    const files = fg.globSync(`${docsFolder}/**/*`);
    files.sort();

    // Overwrite environment specific files
    for (let filePath of files) {
        if (!filePath.includes('.md')) {
            continue;
        }

        const splitFile = filePath.split('/');
        const lastPaths = splitFile[splitFile.length - 1].split('.');

        // Skip files without potential environment variable
        if (lastPaths.length <= 2) {
            continue;
        }

        const envName = lastPaths[lastPaths.length - 2];
        if (envName !== environment) {
            if (envName.includes('staging') || envName.includes('mainnet') || envName.includes('experimental')) {
                fs.rmSync(filePath);
            }
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
