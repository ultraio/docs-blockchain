import fs from 'fs';
import path from 'path';
import fg from 'fast-glob';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const inputDirectory = './dist';
const outputDirectory = '../dist';
const sitemapStream = new SitemapStream({ hostname: 'https://docs.ultra.io' });

async function build() {
    const links = await fg([`${inputDirectory}/**/*.html`], { onlyFiles: true, globstar: true });
    const linkList = links.map((url) => {
        return { url: url.replace(inputDirectory, ''), changefreq: 'weekly' };
    });

    // Return a promise that resolves with your XML string
    streamToPromise(Readable.from(linkList).pipe(sitemapStream)).then((sitemap) => {
        fs.writeFileSync(path.resolve(__dirname, `${outputDirectory}/sitemap.xml`), sitemap);
    });
}

build();
