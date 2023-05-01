/**
 * Fixes windows pathing issues.
 *
 * @export
 * @param {string} path
 * @return {*}
 */
export function normalizePath(path: string) {
    return path.replace(/\\/gm, '/');
}
