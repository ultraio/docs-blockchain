import fs from 'node:fs';

if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
}

for (let environment of ['experimental', 'staging', 'mainnet']) {
    const path = `docs-${environment}/.vitepress/dist`;

    if (fs.existsSync(path)) {
        if (environment === 'experimental') {
            fs.cpSync(path, 'dist', { recursive: true });
        } else {
            fs.cpSync(path, `dist/${environment}`, { recursive: true });
        }
    }
}
