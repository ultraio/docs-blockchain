<script lang="ts" setup>
const props = defineProps<{ link: string }>();
</script>

<template>
    <div class="stat">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <a :href="link" class="link">
            <slot name="text"></slot>
        </a>
    </div>
</template>

<style scoped>
.stat {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: linear-gradient(45deg, rgb(35, 32, 39) 0%, rgb(46, 45, 51) 100%) !important;
    border: 1px solid var(--vp-c-brand);
    border-radius: 6px;
    padding: 36px;
    margin-bottom: 24px;
    box-sizing: border-box;
    user-select: none;
}

.title {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
}

.description {
    font-size: 18px;
    padding-bottom: 6px;
    opacity: 0.5;
}

.link {
    background: rgb(71, 70, 78);
    box-sizing: border-box;
    min-width: 200px;
    text-align: center;
    padding: 6px 0px 6px;
    border-radius: 6px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.75);
    user-select: none;
}

.link:hover {
    background: rgb(74, 74, 78);
    color: white;
}
</style>
