<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const props = defineProps<{ amount: number; scope: string; param: number }>();

let convertedValue = ref<string>('N/A');

onMounted(() => {
    const options: any = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            code: 'eosio.oracle',
            table: 'finalaverage',
            scope: props.scope,
            json: true,
        }),
    };

    fetch(`https://api.mainnet.ultra.io/v1/chain/get_table_rows`, options)
        .catch((err) => {
            console.log(err);
            return err;
        })
        .then(async (result) => {
            let response = await result.json();

            if (!response.rows || response.rows.length === 0) return;
            let conversionRate = 0;
            for (let i = 0; i < response.rows.length; i++) {
                if (response.rows[i].param === props.param) {
                    conversionRate = parseFloat(response.rows[i].average.price.replace('DUOS', ''));
                    break;
                }
            }

            if (conversionRate !== 0) {
                convertedValue.value = `${(props.amount / conversionRate).toFixed(8)} UOS`;
            }
        });
});
</script>

<template>
    <code>{{ convertedValue }}</code>
</template>
