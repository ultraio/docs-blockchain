<script lang="ts" setup>
import { ref } from 'vue';

let account = ref<string>(null);

async function generate() {
    window.open('https://explorer.testnet.ultra.io/account/' + account.value, '_blank');
}
</script>

<template>
    <div>
        <b>Account Lookup</b>
        <input v-model="account" placeholder="Paste account name here..." />
        <button @click="generate" style="margin-top: 12px" v-if="account">Lookup Testnet Account</button>
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

input {
    width: 100%;
    background: var(--vp-c-mute);
    border: 1px solid var(--vp-c-border-color);
    border-radius: 6px;
    padding: 12px;
    margin-top: 12px;
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
