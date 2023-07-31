import Theme from 'vitepress/theme';
import { defineAsyncComponent } from 'vue';
import { useData, useRoute } from 'vitepress';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import './style.css';

import CustomLayout from '../../layout/CustomLayout.vue';
import DemoApiVue from '../../layout/widgets/DemoApi.vue';
import ButtonVue from '../../layout/widgets/Button.vue';
import TabsVue from '../../layout/widgets/Tabs.vue';

export default {
    ...Theme,
    Layout: CustomLayout,
    async enhanceApp({ app, router, siteData }) {
        app.component('DemoApi', DemoApiVue);
        app.component('Button', ButtonVue);
        app.component('Tabs', TabsVue);

        // Uses window, document, etc. in component
        app.component('Mainnet', await defineAsyncComponent(() => import('../../layout/environments/Mainnet.vue')));
        app.component('Staging', await defineAsyncComponent(() => import('../../layout/environments/Staging.vue')));
        app.component(
            'Experimental',
            await defineAsyncComponent(() => import('../../layout/environments/Experimental.vue'))
        );
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
