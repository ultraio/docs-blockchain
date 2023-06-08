<script lang="ts" setup>
import { withBase } from 'vitepress';

const props = defineProps<{ icon: string; link: string }>();
</script>

<template>
    <a :href="props.link" class="stat hoverable">
        <div class="icon">
            <div class="inner-icon">
                <img :src="withBase(props.icon)" width="50" height="50" />
            </div>
        </div>
        <div class="title">
            <slot name="title"></slot>
        </div>
    </a>
</template>

<style scoped>
.stat {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 125px;
}

.title {
    font-size: 16px;
    font-weight: 600;
    max-width: 125px;
    text-align: center;
}

.description {
    font-size: 18px;
    padding-bottom: 6px;
    opacity: 0.5;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-border-color);
    border-radius: 6px;
    min-height: 125px;
    max-height: 125px;
    min-width: 125px;
    max-width: 125px;
    box-sizing: border-box;
    margin-bottom: 24px;
}

.inner-icon {
    display: flex;
    background: #27262a;
    border-radius: 50%;
    height: 65px;
    width: 65px;
    justify-content: center;
    align-items: center;
}
</style>
