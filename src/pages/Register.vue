<template>
    <div class="flex items-center justify-center h-100 bg-custom-brown">
            <div class="main bg-white rounded-lg shadow-md p-10 transition-transform w-96 text-center">
                <h1 class="text-custom-brown text-3xl">
                    Register 
                </h1>
                <TextInput v-model="name" label="Name *" type="name" placeholder="Enter your full name" />
                <TextInput v-model="email" label="Email *" type="email" placeholder="Enter your email"  />
                <div v-if="error && error.email">
                <Error v-for="emailError in error.email" :key="emailError" :errorMessage="emailError" /></div>
                <TextInput v-model="password" label="Password *" type="password" placeholder="Enter your password" />
                <div v-if="error && error.email">
                <Error v-for="passwordError in error.password" :key="passwordError" :errorMessage="passwordError" /></div>
                <Button buttonText="Register" @click="submitForm" />
            </div>
            </div>
</template>
<script setup>
import {ref,watch} from 'vue';
import { useRegisterForm } from '@/composables/useRegisterForm.js';
import router from '@/router/router.js';
import TextInput from '@/components/TextInput.vue';
import Button from '@/components/Button.vue';
import Error from '@/components/Error.vue';
const emailerror = ref('');
const { name, email, password, submitForm, data,error} = useRegisterForm();
watch(data,()=>{
    if(data.value && data.value){
        router.push({name:'Login'});
    }
})
</script>
 