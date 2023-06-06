<script setup lang="ts">
const props = defineProps<{
    sections: {
        title: string;
        links: { text: string; link: string }[];
    }[];
}>();
</script>

<template>
    <ultra-footer-wrapper>
        <div class="stack">
            <div class="links">
                <div class="link-group" v-for="group in props.sections">
                    <div class="link-header">{{ group.title }}</div>
                    <a v-for="linkInfo in group.links" :href="linkInfo.link" class="make-hoverable">
                        {{ linkInfo.text }}
                    </a>
                </div>
            </div>
            <div class="copyright">&copy; 2022 ULTRA CORPORATION. ALL RIGHTS RESERVED.</div>
        </div>
    </ultra-footer-wrapper>
</template>

<style scoped>
ultra-footer-wrapper {
    font-size: 14px;
    margin-top: 128px;
    margin-bottom: 128px;
}

.links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 48px;
    flex-wrap: wrap;
    width: 100%;
}

.link-group {
    display: flex;
    flex-direction: column;
    margin-right: 128px;
    margin-bottom: 48px;
}

.link-header {
    font-weight: 600;
    opacity: 0.5;
    margin-bottom: 24px;
    font-size: 16px;
    user-select: none;
}

.growth {
    flex-grow: 1;
}

.copyright {
    user-select: none;
    opacity: 0.3;
}
</style>
