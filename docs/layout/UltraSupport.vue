<script lang="ts" setup>
const props = defineProps<{ link: string }>();
</script>

<template>
    <div class="stat">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <a :href="link" class="link make-hoverable">
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
    background: #240c58;
    border: 2px solid #896ae2;
    border-radius: 6px;
    padding: 36px;
    margin-bottom: 24px;
    box-sizing: border-box;
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
    background: #896ae2;
    box-sizing: border-box;
    min-width: 200px;
    text-align: center;
    padding: 6px 0px 6px;
    border-radius: 6px;
    font-size: 14px;
}
</style>
