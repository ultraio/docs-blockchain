<template>
    <template v-if="shouldRender">
        <slot></slot>
    </template>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let shouldRender = ref<boolean>(
    !window.location.pathname.includes('/staging') && !window.location.pathname.includes('/experimental')
);
</script>
