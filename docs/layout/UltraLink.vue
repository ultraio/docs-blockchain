<script lang="ts" setup>
const props = defineProps<{ icon: string; link: string }>();
</script>

<template>
    <a :href="props.link" class="stat make-hoverable">
        <div class="icon">
            <img :src="props.icon" width="75" height="75" />
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
    background: #240c58;
    border: 2px solid #896ae2;
    min-height: 125px;
    max-height: 125px;
    min-width: 125px;
    max-width: 125px;
    box-sizing: border-box;
    border-radius: 12px;
    margin-bottom: 24px;
}
</style>
