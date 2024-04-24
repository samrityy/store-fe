<template>
    <div class="container ml-auto py-6">
      <h2 class="text-5xl text-white text-center font-semibold mb-4 mx-auto">Cart</h2>
      <div v-if="items.length===0" class="text-center">Cart is Null</div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        <ul >
        <li v-for ="(product,index) in items" :key="index">
        <div  class="bg-custom-light rounded-lg p-4 shadow-md"> 
          <img :src="product.image" :alt="product.title" class="w-16 h-16 object-cover mb-4">
          <h3 class="text-mg font-semibold mb-2 h-18">{{product.id }} {{ ' : ' }}{{ product.title }}</h3>
          <p class="text-gray-800 font-semibold mb-2">${{ product.price }}</p>
          <button class="bg-custom-brown text-white py-2 px-4 rounded-md cursor-pointer transition-colors 
                                 duration-300 hover:custom-brown" @click="increment(product,index)"> + </button>  
            <span class="p-3"> {{ quantity[product.id] }}</span>
          <button class="bg-custom-brown text-white py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:custom-brown" @click="decrement()">-</button>
          </div>
        </li>
          </ul>
          <p class="bg-custom-light text-black py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:custom-brown">Total:${{ total }}</p>
      </div>
    </div>  

  </template>
<script setup>
import {computed} from 'vue';
import { useCart } from "@/composables/useCart"
const cart = useCart()
const items = cart.items
const quantity = cart.quantity

const removeFromCart = cart.removeFromCart
// const addToCart = (product) => {
// cart.addToCart(product)
// }
const total = computed(() => {  
  let totalPrice = 0; 
  for (let i = 0; i < items.length; i++) {
    totalPrice += Number(items[i].price)*quantity[items[i].id];
  }
  return totalPrice;
});
console.log("items",items)
const increment = (product,index) => {
   cart.increment(items[index],index);
 }
console.log('Total',total)
</script>