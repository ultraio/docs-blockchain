<script lang="ts" setup>
const props = defineProps<{ icon: string; link: string }>();
</script>

<template>
    <a :href="props.link" class="stat hoverable">
        <div class="icon">
            <img :src="props.icon" width="75" height="75" />
        </div>
        <div class="title">
            <slot name="title"></slot>
        </div>
    </a>
</template>

<style scoped>
.hoverable:hover > .icon {
    background: linear-gradient(45deg, rgb(45, 41, 50) 0%, rgb(73, 72, 80) 100%) !important;
}

.hoverable:hover > .title {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5) !important;
}

.stat {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 100px;
}

.title {
    font-size: 16px;
    font-weight: 600;
    max-width: 100px;
    text-align: center;
    color: rgba(255, 255, 255, 0.75);
}

.description {
    font-size: 18px;
    padding-bottom: 6px;
    opacity: 0.5;
}

.icon {
    display: flex;
    justify-content: center;
    background: linear-gradient(45deg, rgb(35, 32, 39) 0%, rgb(46, 45, 51) 100%) !important;
    border: 1px solid var(--vp-c-brand);
    min-height: 100px;
    max-height: 100px;
    min-width: 100px;
    max-width: 100px;
    box-sizing: border-box;
    border-radius: 24px;
    margin-bottom: 24px;
}
</style>
