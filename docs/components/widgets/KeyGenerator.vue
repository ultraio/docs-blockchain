<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import * as wharfkit from '@wharfkit/antelope';
import { globals } from '../../.vitepress/theme';
import * as emitter from 'tiny-emitter/instance';

const emit = defineEmits<{ (e: 'onClick'): void }>();

let privateKey = ref<string>(null);

async function generate() {
    privateKey.value = wharfkit.PrivateKey.generate('K1').toWif();
    globals.lastPublicKey = wharfkit.PrivateKey.from(privateKey.value).toPublic().toLegacyString();
    emitter.emit('globals-updated');
}
</script>

<template>
    <div>
        <div class="wrapper">
            <template v-if="privateKey">
                <table>
                    <tbody>
                        <tr>
                            <td>Public</td>
                            <td>{{ wharfkit.PrivateKey.from(privateKey).toPublic().toLegacyString() }}</td>
                        </tr>
                        <tr>
                            <td>Private</td>
                            <td>{{ privateKey }}</td>
                        </tr>
                    </tbody>
                </table>
                <strong>Never reveal your private key to anyone.</strong>
            </template>
            <template v-else>
                <p>No Key Generated</p>
            </template>
        </div>
        <button @click="generate" style="margin-top: 12px">Generate Key</button>
    </div>
</template>

<style scoped>
.wrapper {
    border: 1px solid var(--vp-c-border-color);
    border-radius: 6px;
    display: flex;
    padding: 6px;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
}

button {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--vp-c-border-color);
    border-radius: 6px;
    padding: 6px;
    min-width: 200px;
    float: right;
    font-size: 14px;
    font-weight: 700;
    width: 100%;
}

button:hover {
    border: 1px solid var(--vp-c-brand);
    color: var(--vp-c-brand);
}

button:active {
    transform: scale(0.98);
}
</style>
