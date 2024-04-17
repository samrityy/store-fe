<template>
    <div class="container mx-auto py-8">
      <h2 class="text-5xl text-white text-center font-semibold mb-4 mx-auto">Cart</h2>
      <div v-if="props.addToCart === null" class="text-center">Cart is Null</div>
      <!-- <div v-else-if="error !== null" class="text-center text-red-500">Error: {{ error }}</div> -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
        <div v-for="(product, index) in props.addToCart" :key="index" class="bg-custom-light rounded-lg p-4 shadow-md">
          <img :src="product.image" :alt="product.title" class="w-16 h-16 object-cover mb-4">
          <h3 class="text-mg font-semibold mb-2 h-18">{{ product.title }}</h3>
          <p class="text-gray-800 font-semibold mb-2">${{ product.price }}</p>
          <p>{{ product.title }}</p>
         </div>
      </div>
    </div> 
    <p>{{ props.addToCart}} </p>
  </template>
<script setup>
const props=defineProps({
    addToCart: {
        type: Function,
    },
    }
);
</script>