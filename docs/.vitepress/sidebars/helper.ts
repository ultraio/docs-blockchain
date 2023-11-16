import * as fs from 'node:fs';
import fg from 'fast-glob';
import matter from 'gray-matter';
import { DefaultTheme } from 'vitepress';

/**
 * Folder path relative to the docs folder, or basePath provided
 *
 * Only reads the files inside of the folder. Does not perform recursive lookup
 *
 * @export
 * @param {string} folderPath
 * @return {(string[] | null)}
 */
export function getMarkdownFiles(folderPath: string, basePath = '/docs'): DefaultTheme.SidebarItem[] {
    // Example: /home/stuyk/ultra/docs-blockchain + basePath + folderPath
    const baseFolderPath = process.cwd().replace(/\\/gm, '/') + basePath;
    const folderToRead = baseFolderPath + folderPath;

    if (!fs.existsSync(folderToRead)) {
        return [];
    }

    // These are absolute paths to the files
    const files = fg.sync(folderToRead + '/*.md');

    // Parse file contents and turn into parseable links
    const parsedFiles = files.map((filePath) => {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        const frontMatter = data as {
            title?: string;
            deploy?: string[];
            order?: number;
        };

        const link = filePath.replace(baseFolderPath, '');

        if (!frontMatter.title) {
            console.warn(`Missing Front Matter Title | ${link}`);

            const splitLink = link.split('/');
            frontMatter.title = splitLink.pop();
        }

        return {
            text: frontMatter.title,
            link,
            order: typeof frontMatter.order === 'number' ? frontMatter.order : 0,
        };
    });

    parsedFiles.sort((a, b) => {
        return a.order - b.order;
    });

    console.log(parsedFiles);
    return parsedFiles;
}
