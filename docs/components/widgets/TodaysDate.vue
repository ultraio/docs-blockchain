<script lang="ts" setup>
import { onMounted, ref } from 'vue';

let dateString = ref<string>();

onMounted(() => {
    const date = new Date();
    dateString.value = date.toLocaleString('default', { month: 'long', day: 'numeric' });
})

</script>

<template>
    Today's date is: <code>{{ dateString }}</code>
</template>