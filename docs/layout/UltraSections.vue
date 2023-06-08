<script lang="ts" setup>
import { withBase } from 'vitepress';
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
    <div class="table-wrapper table-split section-wrapper">
        <div class="section-header accent">
            {{ props.title }}
        </div>
        <div class="sections">
            <template v-for="section in props.section">
                <UltraSectionData>
                    <template #header>
                        <a :href="withBase(section.link)" title="Blockchains" class="split-space-between hoverable">
                            <div class="title">{{ section.title }}</div>
                            <div class="small-arrow">
                                <svg
                                    width="9"
                                    height="14"
                                    viewBox="0 0 9 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1 1L8 7L1 13" stroke="white" />
                                </svg>
                            </div>
                        </a>
                    </template>
                    <template #links>
                        <a
                            v-for="linkInfo in section.links"
                            :href="withBase(linkInfo.link)"
                            :title="linkInfo.title"
                            class="hoverable"
                        >
                            {{ linkInfo.title }}
                        </a>
                    </template>
                </UltraSectionData>
            </template>
        </div>
    </div>
</template>

<style scoped>
.section-wrapper {
    margin-top: 48px;
}

.section-header {
    user-select: none;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 24px;
}

.main-container .sections {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 48px;
    row-gap: 48px;
    width: 100%;
}
</style>
