<template>
  <div class="container mx-auto py-8">
    <h2 class="text-5xl text-white text-center font-semibold mb-4 mx-auto">PRODUCTS</h2>
    <div v-if="data === null" class="text-center">Data is Null</div>
    <div v-else-if="error !== null" class="text-center text-red-500">Error: {{ error }}</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="(product, index) in data" :key="index" class="bg-custom-light rounded-lg p-4 shadow-md">
        <img :src="product.image" :alt="product.title" class="w-FULL h-64 object-cover mb-4">
        <h3 class="text-lg font-semibold mb-2 h-18">{{ product.title }}</h3>
        <p class="text-gray-700 mb-2">{{ product.description.length > 100 ? product.description.slice(0, 100) + '...' : product.description }}</p>
        <p class="text-gray-800 font-semibold mb-2">${{ product.price }}</p>
        <button @click="addToCart(index,product)" class="bg-custom-dark text-white font-semibold px-4 py-2 rounded hover:bg-custom-brown focus:outline-none focus:bg-custom-dark">Add to Cart</button>
      </div>
    </div>
    <Cart />
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import { useDashboard } from '@/composables/useDashboard.js';
import Cart from '@/components/Cart.vue';
// import router from '@/router/router';
import Button from '@/components/Button.vue';
import { useCart } from "@/composables/useCart"
const selectedProduct = ref(null);
const { data, error } = useDashboard();
console.log('Data', data);
const cartStore = useCart(); 
const addToCart = (index,product) => {
  console.log('Product', index);
  //  const product = data.value[index];
   cartStore.addToCart(data.value[index],index); 
   console.log('Selected Product', index);
 }
  
</script>