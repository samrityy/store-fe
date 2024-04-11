<template>
    <div class="bg-custom-brown h-screen w-screen">
        <div class="p-3">
            <a href="/" class="text-white text-l  p-3">Home</a>
            <a href="/dashboard" class="text-white text-l  p-3">Products</a>
            <a href="#" class="text-white text-l  p-3">About</a>
            <a href="/user/login/" class="text-white text-l  p-3">Login</a>
            <a href="/user/register" class="text-white text-2l  p-4">Register</a>
            <div class="bg-custom-browm text-white p-4">
        <h1 class="text-center text-2xl font-extrabold">MIMI STORE</h1>
    </div>
        </div>
        
        <router-view/>
    </div>
</template>
<script>
    export default{
        name: 'MainLayout'
    };
</script>