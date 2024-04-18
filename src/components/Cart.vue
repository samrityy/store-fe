<template>
    <div class="container mx-auto py-8">
      <h2 class="text-5xl text-white text-center font-semibold mb-4 mx-auto">Cart</h2>
      <div v-if="product === null" class="text-center">Cart is Null</div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        <div  class="bg-custom-light rounded-lg p-4 shadow-md"> 
          <img :src="product.image" :alt="product.title" class="w-16 h-16 object-cover mb-4">
          <h3 class="text-mg font-semibold mb-2 h-18">{{ product.title }}</h3>
          <p class="text-gray-800 font-semibold mb-2">${{ product.price }}</p>
         </div>
      </div>
    </div>  
  </template>
<script setup>
import {watch } from 'vue';
const props=defineProps({
    product: {
        type: Object,
        default: {},
    },
    }
);
// watch(props.product,(newVal)=>{
//   localStorage.setItem('props.product',JSON.stringify(newVal))
// })
// console.log('Product',props.product);
</script>