<script lang="ts" setup>
import UltraSectionData from './UltraSectionData.vue';

interface SectionGroup {
    title: string;
    link: string;
    links: {
        title: string;
        link: string;
    }[];
}

const props = defineProps<{ section: SectionGroup[]; title: string }>();
</script>

<template>
    <div class="section-header">
        <section-title-sm>{{ props.title }}</section-title-sm>
    </div>
    <div class="table-wrapper table-split">
        <div class="sections">
            <template v-for="section in props.section">
                <UltraSectionData>
                    <template #header>
                        <a :href="section.link" title="Blockchains" class="split-space-between">
                            <div class="title">{{ section.title }}</div>
                            <div class="small-arrow">&gt;</div>
                        </a>
                    </template>
                    <template #links>
                        <a v-for="linkInfo in section.links" :href="linkInfo.link" :title="linkInfo.title">
                            {{ linkInfo.title }}
                        </a>
                    </template>
                </UltraSectionData>
            </template>
        </div>
    </div>
</template>

<style>
.section-header {
    margin-top: 32px;
    margin-bottom: 32px;
    user-select: none;
}
</style>
