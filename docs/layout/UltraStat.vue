<script lang="ts" setup>
const props = defineProps<{ icon: string }>();
</script>

<template>
    <div class="stat">
        <div class="small-split">
            <div class="icon">
                <img :src="props.icon" width="75" height="75" />
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
}

.small-split {
    display: flex;
}

.stat {
    width: auto;
    flex-grow: 1;
    user-select: none;
}

.data {
    font-size: 24px;
    font-weight: 600;
    padding-top: 6px;
}

.description {
    font-size: 18px;
    padding-bottom: 6px;
    opacity: 0.5;
}

.icon {
    display: flex;
    justify-content: center;
    background: rgb(62, 61, 69);
    margin-right: 24px;
    min-height: 100px;
    max-height: 100px;
    min-width: 100px;
    max-width: 100px;
    box-sizing: border-box;
    border-radius: 12px;
}
</style>
