<script lang="ts" setup>
import { withBase } from 'vitepress';

const props = defineProps<{ icon: string }>();
</script>

<template>
    <div class="stat">
        <div class="small-split">
            <div class="icon">
                <img :src="withBase(props.icon)" width="50" height="50" />
            </div>
            <div class="stack">
                <div class="data">
                    <slot name="data"></slot>
                </div>
                <div class="description">
                    <slot name="description"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.stack {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
}

.small-split {
    display: flex;
}

.stat {
    width: auto;
    flex-grow: 1;
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-border-color);
    border-radius: 6px;
    padding: 40px;
}

.data {
    font-size: 24px;
    font-weight: 600;
}

.description {
    display: flex;
    font-size: 18px;
    opacity: 0.5;
    user-select: none;
    flex-grow: 1;
    height: 100%;
    align-items: flex-end;
}

.icon {
    display: flex;
    justify-content: center;
    background: #27262a;
    margin-right: 24px;
    min-height: 55px;
    max-height: 55px;
    min-width: 55px;
    max-width: 55px;
    box-sizing: border-box;
    border-radius: 6px;
}
</style>
