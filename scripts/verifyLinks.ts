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
    source: ('md' | 'vue');
    type: ('md' | 'href' | 'link');
}

function parseMarkdownAndHtmlLinks(line: string): MarkdownLink[] {
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
                source: 'md',
                type: 'md'
            });
            results = results.concat(parseMarkdownAndHtmlLinks(line.replace(line.substring(idx1, idx4 + 1), '')));
        }
    }

    // e.g. <a href="../fundamentals/tutorial-login-to-toolkit">
    idx1 = line.indexOf(`href="`);
    if (idx1 >= 0) {
        let idx2 = line.indexOf('"', idx1 + `href="`.length);
        let link = line.substring(idx1 + `href="`.length, idx2);
        results.push({
            original: link,
            text: link,
            link: link,
            source: 'md',
            type: 'href'
        });
        results = results.concat(parseMarkdownAndHtmlLinks(line.replace(line.substring(idx1, idx2 + 1), '')));
    }

    // e.g. link: '/tutorials/index/index'
    idx1 = line.indexOf(`link: '`);
    if (idx1 >= 0) {
        let idx2 = line.indexOf("'", idx1 + `link: '`.length);
        let link = line.substring(idx1 + `link: '`.length, idx2);
        results.push({
            original: link,
            text: link,
            link: link,
            source: 'vue',
            type: 'link'
        });
        results = results.concat(parseMarkdownAndHtmlLinks(line.replace(line.substring(idx1, idx2 + 1), '')));
    }

    // e.g. link: "/guides/Docker/docker-image-usage"
    idx1 = line.indexOf(`link: "`);
    if (idx1 >= 0) {
        let idx2 = line.indexOf("\"", idx1 + `link: "`.length);
        let link = line.substring(idx1 + `link: "`.length, idx2);
        results.push({
            original: link,
            text: link,
            link: link,
            source: 'vue',
            type: 'link'
        });
        results = results.concat(parseMarkdownAndHtmlLinks(line.replace(line.substring(idx1, idx2 + 1), '')));
    }

    // e.g. href: 'tutorials/index/index.html'
    idx1 = line.indexOf(`href: '`);
    if (idx1 >= 0) {
        let idx2 = line.indexOf("'", idx1 + `href: '`.length);
        let link = line.substring(idx1 + `href: '`.length, idx2);
        results.push({
            original: link,
            text: link,
            link: link,
            source: 'vue',
            type: 'href'
        });
        results = results.concat(parseMarkdownAndHtmlLinks(line.replace(line.substring(idx1, idx2 + 1), '')));
    }

    return results;
}

async function getAllFiles(): Promise<string[]> {
    let files = await fg([MD_LOOKUP], { onlyFiles: true, globstar: true });
    files.push('docs/components/UltraHome.vue');
    files.push('docs/.vitepress/navbar.ts');
    return files;
}

interface LinkInfo {
    original: string;
    link: string;
    type: ('relative' | 'image' | 'absolute' | 'self-reference' | 'markdown' | 'html' | 'bad' | 'invalid')[];
}

/**
 * Get link with general definition, and data extraction.
 *
 * @param {string} original
 * @param {string} link
 * @return {LinkInfo}
 */
function defineLink(original: string, link: string): LinkInfo {
    let types = [];

    if (link.startsWith('http')) {
        types.push('invalid');
    }

    if (link.startsWith('/')) {
        types.push('absolute');
    }

    if (link.startsWith('../') || link.startsWith('./')) {
        types.push('relative');
    }

    if (link.includes('.jpg') || link.includes('.gif') || link.includes('.jpeg') || link.includes('.png')) {
        types.push('image');
    }

    // some links may be relative but without specifying ./ or ../
    if (link.includes('.md')) {
        types.push('relative');
        types.push('markdown');
    }

    if (link.includes('.html')) {
        types.push('html');
    }

    // some documents can link to a section within the document
    if (link.startsWith('#')) {
        types.push('self-reference');
    }

    if (types.length == 0) {
        types.push('bad');
    }

    // if no relative or absolute identifier provided - assume the link is absolute
    if (types.indexOf('absolute') < 0 && types.indexOf('relative') < 0) {
        types.push('absolute');
    }

    return { original, link, type: types };
}

function addMdIfMissing(link: LinkInfo) {
    if (link.type.indexOf('image') >= 0) return;
    if (link.type.indexOf('self-reference') >= 0) return;
    if (link.type.indexOf('markdown') >= 0) return;
    if (link.type.indexOf('html') >= 0) return;

    let idx = link.link.indexOf('#');
    if (idx >= 0) {
        link.link = link.link.substring(0, idx) + '.md' + link.link.substring(idx);
    } else {
        link.link = link.link + '.md';
    }
}

function verifyMultiEnvDocument(
    badLinks: string[],
    line: number,
    source: string,
    link: string,
    originalLink: string
): string[] {
    let filesToCheck = [];

    const envCheck = (env: string, silent: boolean) => {
        if (fs.existsSync(link.replace('.md', `.${env}.md`))) {
            if (!silent) filesToCheck.push(link.replace('.md', `.${env}.md`));
            return true;
        } else if (!fs.existsSync(link)) {
            if (!silent) {
                badLinks.push(
                    `Line ${line + 1} | File: ${source} | Link: ${originalLink.replace(
                        '.md',
                        `.${env}.md`
                    )} | ${env} FILE MISSING`
                );
            }
            return false;
        }
    };

    let docEnv: string = null;

    if (source.includes('.experimental')) {
        docEnv = 'experimental';
    } else if (source.includes('.staging')) {
        docEnv = 'staging';
    } else if (source.includes('.mainnet')) {
        docEnv = 'mainnet';
    }

    if (docEnv) {
        envCheck(docEnv, false);
    }
    else {
        if (fs.existsSync(link)) {
            // If the document is not environment specific, but there is a linked document that exists directly, then need to check it
            // If the document is environment specific, the envCheck will add the correct document to the list on its own
            filesToCheck.push(link);
        } else {
            // if the document is not environment specific and there is no linked document that exists directly
            // then need to check that the document exists on 3 separate environments instead
            let docExists = envCheck('experimental', true) || envCheck('staging', true) || envCheck('mainnet', true);

            // no document exists, instead of printing 3 errors print only one
            if (docExists) {
                envCheck('experimental', false);
                envCheck('staging', false);
                envCheck('mainnet', false);
            }
            if (!docExists) {
                badLinks.push(`Line ${line + 1} | File: ${source} | Link: ${originalLink} | FILE MISSING`);
            }
        }
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
            const results = parseMarkdownAndHtmlLinks(line);
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
                addMdIfMissing(linkInfo);

                if (linkInfo.type.includes('invalid') || linkInfo.type.includes('bad')) {
                    console.log(`Ignored link: ${linkInfo.link} at ${filePath}:${i+1}`);
                    continue;
                }

                totalLinks += 1;

                // all other types of links or what looks like a link we should not worry about
                // if (linkInfo.type === 'bad') {
                //     badLinks.push(`Line ${i + 1} | File: ${filePath} | Link: ${linkInfo.original} | UNRECOGNIZED FILE PATH`)
                //     continue;
                // }

                if (linkInfo.type.indexOf('self-reference') >= 0) {
                    linkInfo.type.push('absolute');
                    // The code below that handles the absolute links will add process.cwd() which already starts with docs
                    // So here need to remove the docs to remove
                    linkInfo.link = filePath.replace('docs', '') + linkInfo.link;
                }

                const linksAndHeaders = linkInfo.link.split('#');

                // href links in markdown files don't properly substitute the environment (staging or experimental)
                // those links should be instead be created as relative
                // if it is a link to an anchor in the current page then it is fine
                if (result.source === 'md' && result.type === 'href' && linkInfo.type.indexOf('relative') < 0 && linkInfo.type.indexOf('self-reference') < 0) {
                    badLinks.push(`Line ${i + 1} | File: ${filePath} | Link: ${linkInfo.link} | HREF MUST BE RELATIVE`);
                    continue;
                }

                // For images the logic used for absolute paths does not apply
                // For relative paths images behave the same way as markdown files
                if (
                    (linkInfo.type.indexOf('image') < 0 && linkInfo.type.indexOf('absolute') >= 0) ||
                    linkInfo.type.indexOf('relative') >= 0
                ) {
                    let newFilePath =
                        linkInfo.type.indexOf('absolute') >= 0
                            ? path.join(process.cwd(), 'docs', linksAndHeaders[0])
                            : path.join(process.cwd(), path.dirname(filePath), linksAndHeaders[0]);
                    newFilePath = newFilePath.replace('.html', '.md');

                    // depending on the environment (experimental, staging or mainnet) need to consider other possible paths
                    let filesToCheck = verifyMultiEnvDocument(badLinks, i, filePath, newFilePath, linkInfo.link);

                    if (filesToCheck.length === 0) continue;

                    // Has Header
                    if (linksAndHeaders[1]) {
                        for (let path of filesToCheck) {
                            const targetPathContent = fs.readFileSync(path).toString().toLowerCase();
                            const targetLines = targetPathContent.split(/\r?\n/);

                            let foundMatch = false;
                            let listOfAttemptedMatches = [];
                            for (const targetLine of targetLines) {
                                if (!targetLine.startsWith('#')) {
                                    continue;
                                }

                                // Using a dot in header is not allowed, instead it should be replaced by -
                                // Replicate this rule when checking headers
                                let actualHeader = targetLine.replace(/[ _.]/gm, '-');
                                actualHeader = actualHeader.replace(/--+/g, '-');
                                actualHeader = actualHeader.replace(/[^a-zA-Z0-9-]/gm, '').toLowerCase();
                                actualHeader = actualHeader.substring(1, actualHeader.length);

                                if (actualHeader !== linksAndHeaders[1]) {
                                    listOfAttemptedMatches.push(actualHeader);
                                    continue;
                                }

                                foundMatch = true;
                                break;
                            }
                            // check for id="..." which can also be used for # references
                            for (const targetLine of targetLines) {
                                if (targetLine.includes(`id="${linksAndHeaders[1]}"`)) {
                                    foundMatch = true;
                                }
                            }

                            if (!foundMatch) {
                                badLinks.push(
                                    `Line ${i + 1} | File: ${filePath} | Link: ${linkInfo.link} | BAD HEADER | In: ${path} Attempted: ${listOfAttemptedMatches}`
                                );
                            }
                        }
                    }
                }

                if (linkInfo.type.indexOf('image') >= 0 && linkInfo.type.indexOf('absolute') >= 0) {
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
