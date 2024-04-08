<template>
    <layout-div>
        <div class="flex items-center justify-center min-h-screen bg-gray-200">
            <div class="main bg-white rounded-lg shadow-md p-10 transition-transform w-96 text-center">
                <h1 class="text-green-600 text-3xl">
                    MiMi Store
                </h1>
                    <h3 class="text-lg">
                        Create an account
                    </h3>
                    <form action="">
                        <label for="name" class="block mb-2 text-left text-gray-700 font-bold">Name:</label>
                        <input type="text" id="name" name="password" placeholder="Enter your full name" class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                            focus:border-green-400" required>
                        <label for="email" class="block mb-2 text-left text-gray-700 font-bold">Email:</label>
                        <input type="email" id="password" name="password" placeholder="Enter your email" class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                            focus:border-green-400" required>
            
                        <label for="password" class="block mb-2 text-left text-gray-700 font-bold">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your Password" class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                            focus:border-green-400" required>
            
                        <div class="flex justify-center items-center">
                            <button type="submit"
                                    class="bg-green-600 text-white py-3 px-6 rounded
                                -md cursor-pointer transition-colors 
                                duration-300 hover:bg-green-500">
                                Sign Up
                            </button>
                        </div>
                    </form>
    </div>
    </div>
    </layout-div>
 </template>
<script setup>
import { useRegisterForm } from '/home/smrity/store-fe/src/composables/useRegisterForm.js';
   
const { email, password, submitForm } = useRegisterForm();
</script>
 