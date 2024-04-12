import fg from 'fast-glob';
import fs from 'node:fs';
import path from 'node:path';

const MD_LOOKUP = 'docs/**/*.md';
const IGNORE_TEXT = [
    //
    'Back](/',
    'https://',

    // Added by automated documentation generation
    // No point in fixing it
    '#group-Operations-Queries',
    '#group-Operations-Subscriptions',
    '#group-Types',
];

/*
For some reason those regex rules don't work in JS properly
This line won't be matched at all
-   [factory.b](./nft-tables.md#factory-b)
*/
const MarkdownLink = new RegExp(/!?\[([^\]]*)\]\(([^\)]+)\)/gm);
//const MarkdownLink = new RegExp(/\[([^\[\]]*)\]\((.*?)\)/gm);

interface MarkdownLink {
    original: string;
    text: string;
    link: string;
}

function parseMarkdownLinks(line: string): MarkdownLink[] {
    let results = [];

    let idx1 = line.indexOf('[');
    if (idx1 >= 0) {
        let idx2 = line.indexOf(']', idx1);
        let idx3 = line.indexOf('(', idx2);
        let idx4 = line.indexOf(')', idx3);

        if (idx1 >= 0 && idx2 >= 0 && idx3 >= 0 && idx4 >= 0) {
            results.push({
                original: line.substring(idx1, idx4),
                text: line.substring(idx1 + 1, idx2),
                link: line.substring(idx3 + 1, idx4),
            });
            results.concat(parseMarkdownLinks(line.substring(idx4 + 1)));
        }
    }

    return results;
}

async function getAllFiles(): Promise<string[]> {
    return await fg([MD_LOOKUP], { onlyFiles: true, globstar: true });
}

interface LinkInfo {
    original: string;
    link: string;
    type: 'relative' | 'image' | 'absolute' | 'self-reference' | 'bad' | 'invalid';
}

/**
 * Get link with general definition, and data extraction.
 *
 * @param {string} original
 * @param {string} link
 * @return {LinkInfo}
 */
function defineLink(original: string, link: string): LinkInfo {
    if (link.startsWith('http')) {
        return { original, link, type: 'invalid' };
    }

    if (link.startsWith('docs') || link.startsWith('/docs')) {
        return { original, link, type: 'absolute' };
    }

    if (link.startsWith('../') || link.startsWith('./')) {
        return { original, link, type: 'relative' };
    }

    if (
        original.includes('!') &&
        (link.includes('.jpg') || link.includes('.gif') || link.includes('.jpeg') || link.includes('.png'))
    ) {
        return { original, link, type: 'image' };
    }

    // some links may be relative but without specifying ./ or ../
    if (link.includes('.md')) {
        return { original, link, type: 'relative' };
    }

    // some documents can link to a section within the document
    if (link.startsWith('#')) {
        return { original, link, type: 'self-reference' };
    }

    return { original, link, type: 'bad' };
}

function verifyMultiEnvDocument(badLinks: string[], line: number, source: string, link: string): string[] {
    let filesToCheck = [];

    const envCheck = (env: string) => {
        if (fs.existsSync(link.replace('.md', `.${env}.md`))) filesToCheck.push(link.replace('.md', `.${env}.md`));
        else if (!fs.existsSync(link))
            badLinks.push(
                `Line ${line + 1} | File: ${source} | Link: ${link.replace('.md', `.${env}.md`)} | ${env} FILE MISSING`
            );
    };

    if (fs.existsSync(link)) filesToCheck.push(link);
    if (source.includes('.experimental')) {
        envCheck('experimental');
    } else if (source.includes('.staging')) {
        envCheck('staging');
    } else if (source.includes('.mainnet')) {
        envCheck('mainnet');
    } else if (!fs.existsSync(link)) {
        // if the document is environment specific, but the link is not - then all 3 environments should exist
        envCheck('experimental');
        envCheck('staging');
        envCheck('mainnet');
    }

    return filesToCheck;
}

async function verify() {
    const files = await getAllFiles();
    const badLinks = [];
    let totalLinks = 0;

    for (const filePath of files) {
        const content = fs.readFileSync(filePath).toString();
        const lines = content.split(/\r?\n/);

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            //const results = MarkdownLink.exec(line);
            const results = parseMarkdownLinks(line);
            if (!results) {
                continue;
            }

            for (let l = 0; l < results.length; l++) {
                const result = results[l];
                if (IGNORE_TEXT.findIndex((txt) => result.original.includes(txt)) !== -1) {
                    continue;
                }

                // Links we do not care about
                const linkInfo = defineLink(result.original, result.link);
                if (linkInfo.type === 'invalid') {
                    continue;
                }

                totalLinks += 1;

                // all other types of links or what looks like a link we should not worry about
                // if (linkInfo.type === 'bad') {
                //     badLinks.push(`Line ${i + 1} | File: ${filePath} | Link: ${linkInfo.original} | UNRECOGNIZED FILE PATH`)
                //     continue;
                // }

                if (linkInfo.type === 'self-reference') {
                    linkInfo.type = 'absolute';
                    linkInfo.link = filePath + linkInfo.link;
                }

                const linksAndHeaders = linkInfo.link.split('#');

                if (linkInfo.type === 'absolute' || linkInfo.type === 'relative') {
                    let newFilePath =
                        linkInfo.type === 'absolute'
                            ? path.join(process.cwd(), linksAndHeaders[0])
                            : path.join(process.cwd(), path.dirname(filePath), linksAndHeaders[0]);
                    newFilePath = newFilePath.replace('.html', '.md');

                    // depending on the environment (experimental, staging or mainnet) need to consider other possible paths
                    let filesToCheck = verifyMultiEnvDocument(badLinks, i, filePath, newFilePath);

                    if (filesToCheck.length === 0) continue;

                    // Has Header
                    if (linksAndHeaders[1]) {
                        for (let path of filesToCheck) {
                            const targetPathContent = fs.readFileSync(path).toString().toLowerCase();
                            const targetLines = targetPathContent.split(/\r?\n/);

                            let foundMatch = false;

                            for (const targetLine of targetLines) {
                                if (!targetLine.includes('##')) {
                                    continue;
                                }

                                // Using a dot in header is not allowed, instead it should be replaced by -
                                // Replicate this rule when checking headers
                                let actualHeader = targetLine.replace(/[ _.]/gm, '-');
                                actualHeader = actualHeader.replace(/--+/g, '-');
                                actualHeader = actualHeader.replace(/[^a-zA-Z0-9-]/gm, '').toLowerCase();
                                actualHeader = actualHeader.substring(1, actualHeader.length);

                                if (actualHeader !== linksAndHeaders[1]) {
                                    continue;
                                }

                                foundMatch = true;
                                break;
                            }

                            if (!foundMatch) {
                                badLinks.push(
                                    `Line ${i + 1} | File: ${filePath} | Link: ${linkInfo.link} | BAD HEADER`
                                );
                            }
                        }
                    }
                }

                if (linkInfo.type === 'image') {
                    const cleanLink = linkInfo.link.replace(/\.\.\//gm, '');
                    if (!fs.existsSync(path.join(process.cwd(), 'docs/public', cleanLink))) {
                        badLinks.push(`Line ${i + 1} | File: ${filePath} | Link: ${linkInfo.link} | BAD IMAGE LINK`);
                    }
                }
            }
        }
    }

    if (badLinks.length >= 1) {
        console.warn(`==== BAD LINKS/HEADERS FOUND, PLEASE FIX ====`);

        for (const link of badLinks) {
            console.log(link);
        }

        process.exit(1);
    }

    console.log(`Verified ${totalLinks} Links & Headers`);
}

verify();
