<template>
    <div>
        <button
        class="bg-custom-brown text-white py-3 px-6 rounded-md cursor-pointer transition-colors 
                                duration-300 hover:custom-brown"
            @click="submitForm">{{ buttonText }}</button>
    </div>
</template>
<script setup>
const props=defineProps({
        buttonText:{
            type:String,
        }  
    })
</script>