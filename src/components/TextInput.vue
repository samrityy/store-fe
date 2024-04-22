<template>
    <div>
        <label class="block mb-2 text-left text-gray-700 font-bold">{{ label }}</label>
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" 
            v-bind="$attrs"
            class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                            focus:border-custom-brown"

            />
    </div>
</template>

<script setup>
    const props=defineProps({
        label:{
            type: String,
            default:''
        },
        modelValue:{
            type: [String,Number],
            default:''
        },
        
    })
</script>