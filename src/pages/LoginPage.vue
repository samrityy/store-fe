<!-- <template> 
        <div class="flex items-center justify-center min-h-screen bg-custom-brown">
            <div class="main bg-white rounded-lg shadow-md p-10 transition-transform w-96 text-center">
                <h1 class="text-custom-brown text-3xl">
                    Login 
                </h1>

                    <form @submit.prevent="submitForm" method="post"> 
                        <label for="email" class="block mb-2 text-left text-gray-700 font-bold">Email:</label>
                        <input v-model="email" type="email" id="password" name="password" placeholder="Enter your email" class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                            focus:border-custom-brown" required>
            
                        <label for="password" class="block mb-2 text-left text-gray-700 font-bold">Password:</label>
                        <input v-model="password" type="password" id="password" name="password" placeholder="Enter your Password" class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                            focus:border-custom-brown" required>
            
                        <div class="flex justify-center items-center">
                            <button  type="submit"
                                    class="bg-custom-brown text-white py-3 px-6 rounded
                                -md cursor-pointer transition-colors 
                                duration-300 hover:custom-brown">
                                Submit
                            </button>
                        </div>
                    </form>

        <p class="mt-4">Not registered?
            <a href="/user/register" class="text-blue-500 
            hover:underline">Create an account</a>
        </p>
    </div>
    </div>
</template>-->
   
<template>
    <div class="flex items-center justify-center h-96 bg-custom-brown">
            <div class="main bg-white rounded-lg shadow-md p-10 transition-transform w-96 text-center">
                <h1 class="text-custom-brown text-3xl">
                    Login 
                </h1>
                <TextInput v-model="email" label="Email" type="email" placeholder="Enter your email"  />
                
                <TextInput v-model="password" label="Password" type="password" placeholder="Enter your password" />
                <Button buttonText="Login" @click="submitForm" />
            </div>
            </div>
</template>
   <script setup>
   import { useLoginForm } from '@/composables/useLoginForm.js';
   const { email, password, submitForm, error,data} = useLoginForm();
   import TextInput from '@/components/TextInput.vue';
   import Button from '@/components/Button.vue';
   
   </script>