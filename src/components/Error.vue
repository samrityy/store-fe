<template>
    <div class="flex">
    <div class="mr-auto text-red-500">{{ errorMessage}}</div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
 const props = defineProps({
     errorMessage: {
         type: String,
         default: ''
     }
 })
</script>