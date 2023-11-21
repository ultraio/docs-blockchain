import fg from 'fast-glob';
import fs from 'node:fs';

const files = fg.globSync('./docs/**/*.md');
files.sort();

for (let file of files) {
    const content = fs.readFileSync(file);

    if (!fs.existsSync('dist/downloads')) {
        fs.mkdirSync('dist/downloads', { recursive: true });
    }

    fs.appendFileSync('dist/downloads/docs.md', '\r\n' + content);
}
