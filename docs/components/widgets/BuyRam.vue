<template>
    <div class="wrapper">
        <button @click="connect" style="margin-top: 12px" v-if="!isConnected">Connect Wallet</button>
        <div class="spaced" v-if="isConnected">
            <p style="text-align: center">Using Account: {{ account }}</p>
            <button @click="transact(2500)" style="margin-top: 12px">Get 2500 Bytes RAM</button>
            <button @click="transact(5000)" style="margin-top: 12px">Get 5000 Bytes RAM</button>
            <button @click="transact(10000)" style="margin-top: 12px">Get 10000 Bytes RAM</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let account = ref<string>(null);
let isConnected = ref<boolean>(false);

async function connect() {
    if (window && window['ultra']) {
        const response = await window['ultra'].connect();

        isConnected.value = response.status === 'success';
        if (isConnected.value) {
            const [accountName, permission] = response.data.blockchainid.split('@');
            account.value = accountName;
        }
    }
}

async function transact(bytes: number) {
    if (!isConnected.value) {
        alert('Wallet not connected');
        return;
    }

    const result = await window['ultra'].signTransaction({
        contract: 'eosio',
        action: 'buyrambytes',
        data: {
            payer: account.value,
            receiver: account.value,
            bytes,
        },
    });

    if (result && result.data && result.data.transactionHash) {
        alert(`Purchased ${bytes} bytes of RAM.`);
    } else {
        alert('Failed to purchase RAM! Does account exist, and have balance?');
    }
}
</script>

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

.spaced {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
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
    margin-top: 0px !important;
}

button:hover {
    border: 1px solid var(--vp-c-brand);
    color: var(--vp-c-brand);
}

button:active {
    transform: scale(0.98);
}
</style>
