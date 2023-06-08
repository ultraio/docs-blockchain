import fs from 'fs';

if (fs.existsSync('dist/mainnet')) {
    fs.cpSync('dist/mainnet', 'dist', { recursive: true });
    fs.rmSync('dist/mainnet', { recursive: true, force: true });
}
