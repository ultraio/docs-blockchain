import Theme from 'vitepress/theme';
import { useData, useRoute } from 'vitepress';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import './style.css';

import CustomLayout from '../../layout/CustomLayout.vue';
import DemoApiVue from '../../layout/widgets/DemoApi.vue';
import ButtonVue from '../../layout/widgets/Button.vue';
import TabsVue from '../../layout/widgets/Tabs.vue';
import MainnetVue from '../../layout/environments/Mainnet.vue';
import StagingVue from '../../layout/environments/Staging.vue';
import ExperimentalVue from '../../layout/environments/Experimental.vue';

export default {
    ...Theme,
    Layout: CustomLayout,
    enhanceApp({ app, router, siteData }) {
        app.component('DemoApi', DemoApiVue);
        app.component('Button', ButtonVue);
        app.component('Tabs', TabsVue);
        app.component('Mainnet', MainnetVue);
        app.component('Staging', StagingVue);
        app.component('Experimental', ExperimentalVue);
    },
    setup() {
        const { frontmatter } = useData();
        const route = useRoute();
        giscusTalk(
            {
                repo: 'ultraio/docs-blockchain',
                repoId: 'R_kgDOJZVdMQ',
                category: 'Comments',
                categoryId: 'DIC_kwDOJZVdMc4CV7Lb',
                mapping: 'pathname',
                term: 'Leave a comment!',
                reactionsEnabled: '1',
                lang: 'en',
            },
            {
                frontmatter,
                route,
            }
        );
    },
};
