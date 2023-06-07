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
                    <a v-for="linkInfo in group.links" :href="linkInfo.link" class="hoverable">
                        {{ linkInfo.text }}
                    </a>
                </div>
                <div class="link-group-fill"></div>
            </div>
            <hr class="hr" />
            <div class="divide">
                <div class="copyright">&copy; 2022 ULTRA CORPORATION. ALL RIGHTS RESERVED.</div>
                <div class="divide">
                    <a href="https://ultra.io/terms" class="hoverable">Terms of Use</a>
                    <div class="link-gap">&#x2022;</div>
                    <a href="https://ultra.io/privacy" class="hoverable">Privacy Policy</a>
                </div>
            </div>
        </div>
    </ultra-footer-wrapper>
</template>

<style scoped>
ultra-footer-wrapper {
    font-size: 12px;
    margin-top: 128px;
    margin-bottom: 128px;
    width: 100%;
}

.divide {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

.link-group a {
    margin-bottom: 12px;
}

.link-header {
    font-weight: 600;
    opacity: 0.5;
    margin-bottom: 24px;
    font-size: 12px;
}

.link-group-fill {
    flex-grow: 1;
}

.link-gap {
    padding-left: 12px;
    padding-right: 12px;
    opacity: 0.2;
}

.copyright {
    opacity: 0.3;
}

.hr {
    border-top: 0px;
    border-color: rgba(255, 255, 255, 0.2);
    margin-bottom: 48px;
}
</style>
