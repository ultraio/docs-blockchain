<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const props = defineProps<{ query: string; body: { key: string; value: any }[]; type: 'POST' | 'GET' }>();

let queryBody = ref<{ [key: string]: any }>({ json: true });
let response = ref<string>();

async function execute() {
    const options: any = {
        method: props.type,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(queryBody.value),
    };

    if (props.type === 'GET') {
        delete options.body;
    }

    const result = await fetch(`https://api.mainnet.ultra.io${props.query}`, options).catch((err) => {
        console.log(err);
        return err;
    });

    if (!result || !result.ok) {
        return;
    }

    const jsonData = await result.json();
    response.value = '\n' + JSON.stringify(jsonData, null, 2);
}

onMounted(() => {
    if (!props.body) {
        return;
    }

    for (let entry of props.body) {
        queryBody.value[entry.key] = entry.value;
    }
});
</script>

<template>
    <api-title>Query</api-title>
    <div class="api-container">
        <div class="api-split">
            <span class="no-select">Endpoint</span>
            <div id="api" class="input-mock">{{ props.query }}</div>
        </div>
    </div>
    <br />
    <template v-if="props.body && props.body.length >= 1">
        <api-title>Parameters</api-title>
        <div class="api-container">
            <div class="api-split" v-for="input in props.body">
                <span class="no-select">{{ input.key }}</span>
                <input class="input-mock" id="api" v-model="queryBody[input.key]" />
            </div>
        </div>
        <br />
    </template>
    <button title="execute" @click="execute">Execute</button>
    <br />
    <br />
    <template v-if="response">
        <api-title>Response</api-title>
        <pre class="response">
            {{ response }}
        </pre>
    </template>
</template>

<style scoped>
.api-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-border-color);
    border-radius: 6px;
    padding: 24px;
    box-sizing: border-box;
    gap: 24px;
}

.response {
    overflow-y: scroll;
    max-height: 600px !important;
    padding: 12px;
    background: var(--vp-code-block-bg);
    border-radius: 12px;
}

api-title {
    display: block;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
}

.title {
    font-size: 18px;
    margin-top: 24px;
}

.api-split {
    display: flex;
    flex-direction: row;
    gap: 24px;
    justify-content: space-between;
    align-items: center;
}

.no-select {
    user-select: none;
}

.input-mock {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid var(--vp-c-border-color);
    border-radius: 6px;
    padding: 6px;
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    max-width: 400px;
}

input:focus {
    border-color: var(--vp-c-brand);
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
}

button:hover {
    border: 1px solid var(--vp-c-brand);
    color: var(--vp-c-brand);
}

button:active {
    transform: scale(0.98);
}
</style>
