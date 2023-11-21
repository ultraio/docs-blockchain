<script lang="ts" setup>
const props = defineProps<{ align: 'left' | 'right' }>();
const emit = defineEmits<{ (e: 'onClick'): void }>();
</script>

<template>
    <button @click="emit('onClick')" :style="[`float: ${props.align}`]">
        <slot></slot>
    </button>
    <div class="spacer"></div>
</template>

<style scoped>
.spacer {
    min-height: 24px;
}

button {
    display: block;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--vp-c-border-color);
    border-radius: 6px;
    padding: 6px;
    min-width: 200px;
    font-size: 14px;
    font-weight: 700;
}

button:hover {
    border: 1px solid var(--vp-c-brand);
    color: var(--vp-c-brand);
}

button:active {
    transform: scale(0.98);
}
</style>
