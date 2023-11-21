import fg from 'fast-glob';
import fs from 'node:fs';

const files = fg.globSync('./docs/**/*.md');
files.sort();

for (let file of files) {
    const content = fs.readFileSync(file);

    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
    }

    fs.appendFileSync('dist/everything.md', '\r\n' + content);
}
