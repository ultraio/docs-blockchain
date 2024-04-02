import Theme from 'vitepress/theme';
import { defineAsyncComponent } from 'vue';

import './style.css';

import googleAnalytics from 'vitepress-plugin-google-analytics';

import CustomLayout from '../../components/CustomLayout.vue';
import DemoApiVue from '../../components/widgets/DemoApi.vue';
import ButtonVue from '../../components/widgets/Button.vue';
import TabsVue from '../../components/widgets/Tabs.vue';
import KeyGeneratorVue from '../../components/widgets/KeyGenerator.vue';
import LastPublicKeyVue from '../../components/widgets/LastPublicKey.vue';
import AccountLookupTestnetVue from '../../components/widgets/AccountLookupTestnet.vue';
import BuyRamVue from '../../components/widgets/BuyRam.vue';
import TodaysDateVue from '../../components/widgets/TodaysDate.vue';

let globals;

export default {
    ...Theme,
    Layout: CustomLayout,
    async enhanceApp({ app, router, siteData }) {
        app.component('DemoApi', DemoApiVue);
        app.component('Button', ButtonVue);
        app.component('Tabs', TabsVue);
        app.component('KeyGenerator', KeyGeneratorVue);
        app.component('LastPublicKey', LastPublicKeyVue);
        app.component('AccountLookupTestnet', AccountLookupTestnetVue);
        app.component('BuyRam', BuyRamVue);
        app.component('TodaysDate', TodaysDateVue);

        // Uses window, document, etc. in component
        app.component('Mainnet', await defineAsyncComponent(() => import('../../components/environments/Mainnet.vue')));
        app.component('Staging', await defineAsyncComponent(() => import('../../components/environments/Staging.vue')));
        app.component(
            'Experimental',
            await defineAsyncComponent(() => import('../../components/environments/Experimental.vue'))
        );

        googleAnalytics({
            id: 'G-904T1HX43E', // Replace with your GoogleAnalytics ID, which should start with the 'G-'
        });

        globals = app.config.globalProperties;
    },
};

export { globals }