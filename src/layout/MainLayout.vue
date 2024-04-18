<template>
    <div class="bg-custom-brown h-screen w-screen overflow-auto">
        <div class="p-3">
            <a href="/" class="text-white text-l  p-3">Home</a>
            <!-- <a href="/products" class="text-white text-l  p-3">Products</a> -->
            <a href="#" class="text-white text-l  p-3">About</a>
            <a href="/user/login/" class="text-white text-l  p-3">Login</a>
            <a href="/user/register" class="text-white text-2l  p-4">Register</a>
            <button @click="handleLogout" class="text-white">Logout</button>
            <div class="bg-custom-browm text-white p-4">
        <h1 class="text-center text-4xl font-extrabold">MIMI STORE</h1>
    </div>
        </div>
        
        <router-view/>
    </div>
</template>

<script setup>
import { useFetch } from '@/composables/fetch.js';
import router from '@/router/router.js';

const handleLogout = async () => {
  try {
    const token = localStorage.getItem('token');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ${token}',
      },
    };

     await useFetch('http://127.0.0.1:8000/user/logout/', options).then((response) => {
      console.log('-------------------log-------------')
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      router.push({ name: 'Login' });
    });
    }catch (error) {
    console.error('Logout failed:', error);
  }
};
</script>