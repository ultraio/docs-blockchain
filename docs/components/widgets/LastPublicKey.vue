<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { globals } from '../../.vitepress/theme';
import * as emitter from 'tiny-emitter/instance';

let key = ref<number>(0);

onMounted(() => {
    emitter.on('globals-updated', () => {
        key.value++;
    });
})

</script>

<template>
    <div :key="key">
        <template v-if="globals.lastPublicKey">
            Your last public key: <code>{{ globals.lastPublicKey }}</code>
        </template>
        <template v-else>
            <p>No key generated yet. Please generate a key first</p>
        </template>
    </div>
</template>