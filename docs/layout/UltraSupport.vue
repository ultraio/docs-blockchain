<script lang="ts" setup>
const props = defineProps<{ link: string }>();
</script>

<template>
    <div class="link-wrapper">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <a :href="link" class="link">
            <slot name="text"></slot>
        </a>
    </div>
</template>

<style scoped>
.link-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-border-color);
    border-radius: 6px;
    padding: 36px;
    margin-bottom: 24px;
    box-sizing: border-box;
}

.title {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
}

.link {
    background: #896ae2;
    box-sizing: border-box;
    min-width: 200px;
    text-align: center;
    padding: 6px 0px 6px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.link:hover {
    background: #7855de;
}
</style>
