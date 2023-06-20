<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{ titles: string[] }>();
let index = ref<number>(0);
</script>

<template>
    <div class="tabs">
        <div
            class="tab"
            v-for="(title, titleIndex) in props.titles"
            :key="titleIndex"
            @click="index = titleIndex"
            :class="index === titleIndex ? ['active'] : []"
        >
            {{ title }}
        </div>
    </div>
    <template v-for="(title, titleIndex) in props.titles">
        <div class="tab-content" v-if="titleIndex === index">
            <slot :name="title"></slot>
        </div>
    </template>
</template>

<style scoped>
.tab-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: var(--vp-nav-bg-color);
    border: 1px solid var(--vp-c-border-color);
    border-radius: 6px;
    padding: 24px;
    box-sizing: border-box;
    gap: 24px;
    border-top-left-radius: 0px;
}

.tabs {
    display: flex;
    flex-direction: row;
}

.tabs .tab {
    background: var(--vp-nav-bg-color);
    border: 1px solid var(--vp-c-border-color);
    padding: 6px;
    font-weight: 400;
    box-sizing: border-box;
    min-width: 100px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    border-bottom: 0px;
    color: #94929a;
    padding-left: 24px;
    padding-right: 24px;
}

.tabs .tab:hover {
    background: var(--vp-c-bg-alt);
    cursor: pointer;
    color: white;
}

.tabs .tab.active {
    background: var(--vp-c-bg-alt);
    color: white;
}
</style>
