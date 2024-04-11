<template>
    <div class="bg-custom-brown h-screen w-screen">
        <div class="p-4">
            <a href="#" class="text-white text-l  p-4">Home</a>
            <a href="#" class="text-white text-l  p-4">Contact</a>
            <a href="#" class="text-white text-l  p-4">About</a>
            <a href="/login" class="text-white text-l  p-4">Login</a>
            <a href="#" class="text-white text-2l  p-4">Logout</a>
        </div>
        
        <router-view/>
    </div>
</template>
<script>
    export default{
        name: 'MainLayout'
    };
</script>