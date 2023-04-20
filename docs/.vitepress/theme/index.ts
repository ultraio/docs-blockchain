// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Theme from 'vitepress/theme';
import { useData, useRoute } from 'vitepress';
import './style.css';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';

export default {
    ...Theme,
    Layout: () => {
        return h(Theme.Layout, null, {
            // Unused at this time.
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        });
    },
    enhanceApp({ app, router, siteData }) {
        // Unused at this time
    },
    setup() {
        const { frontmatter } = useData();
        const route = useRoute();

        // ! - TODO: THIS NEEDS TO BE FILLED OUT AFTER GOING PUBLIC
        // !- https://giscus.app/
        // giscusTalk(
        //     {
        //         repo: 'ultraio/docs-blockchain',
        //         repoId: 'MDEwOlJlcG9zaXRvcnkyOTg3MTM0NTg=',
        //         category: 'Documentation Feedback',
        //         categoryId: 'MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyMjY2NDY0',
        //         mapping: 'pathname',
        //         term: 'Leave a comment!',
        //         reactionsEnabled: '1',
        //         lang: 'en',
        //     },
        //     {
        //         frontmatter,
        //         route,
        //     }
        // );
    },
};
