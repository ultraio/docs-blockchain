<template>
    <ClientOnly>
        <template v-if="shouldRender">
            <slot></slot>
        </template>
    </ClientOnly>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

let shouldRender = ref(false);

onMounted(() => {
    if (!window) {
        return;
    }

    shouldRender.value =
        !window.location.pathname.includes('/staging') && !window.location.pathname.includes('/experimental');
});
</script>
