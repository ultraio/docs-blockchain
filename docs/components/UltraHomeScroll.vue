<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const emit = defineEmits<{ (e: 'onScrollDown', isScrolledDown: boolean): void }>();

let moveSidebarDown = ref(false);

function handleScroll(e: Event) {
    if (window.scrollY < 100) {
        if (!moveSidebarDown.value) {
            return;
        }

        emit('onScrollDown', false);
        moveSidebarDown.value = false;
        return;
    }

    if (moveSidebarDown.value) {
        return;
    }

    moveSidebarDown.value = true;
    emit('onScrollDown', true);
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template></template>
