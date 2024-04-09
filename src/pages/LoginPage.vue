<template>
    <div class="bg-blue-500 text-white p-4">
        <h1 class="text-center text-lg">MiMi STORE</h1>
    </div>
    <layout-div>
        <div class="flex items-center justify-center min-h-screen bg-gray-200">
            <div class="main bg-white rounded-lg shadow-md p-10 transition-transform w-96 text-center">
                <h1 class="text-green-600 text-3xl">
                    MiMi Store
                </h1>
                    <h3 class="text-lg">
                        Login to your account
                    </h3>
                    <form submit.prevent="submitForm">
                        <label for="email" class="block mb-2 text-left text-gray-700 font-bold">Email:</label>
                        <input v-model="email" type="email" id="password" name="password" placeholder="Enter your email" class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                            focus:border-green-400" required>
            
                        <label for="password" class="block mb-2 text-left text-gray-700 font-bold">Password:</label>
                        <input v-model="password" type="password" id="password" name="password" placeholder="Enter your Password" class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                            focus:border-green-400" required>
            
                        <div class="flex justify-center items-center">
                            <button type="submit"
                                    class="bg-green-600 text-white py-3 px-6 rounded
                                -md cursor-pointer transition-colors 
                                duration-300 hover:bg-green-500">
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
    </layout-div>
 </template>
   
<script setup>
import { useLoginForm } from '/home/smrity/store-fe/src/composables/useLoginForm.js';
   
const { email, password, submitForm } = useLoginForm();
</script>