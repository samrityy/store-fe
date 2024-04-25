<template>
    <div class="container ml-auto py-6">
      <h2 class="text-5xl text-white text-center font-semibold mb-4 mx-auto">Cart</h2>
      <div v-if="get_data===0" class="text-center">Cart is Null</div>
      <div  class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        <ul>
        <li v-for ="(prod,index) in get_data" :key="index">
        <div  class="bg-custom-light rounded-lg p-4 shadow-md"> 
           <img :src="prod.product.image" :alt="prod.product.title" class="w-16 h-16 object-cover mb-4">
          <h3 class="text-mg font-semibold mb-2 h-18">{{prod.product.id }}{{ prod.product.title }}</h3>
         <p class="text-gray-800 font-semibold mb-2">${{ prod.product.price }}</p>
          <button class="bg-custom-brown text-white py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:custom-brown" @click="decrement()">-</button>
          <span class="p-3"> {{ prod.quantity}}</span>
          <button class="bg-custom-brown text-white py-2 px-4 rounded-md cursor-pointer transition-colors 
            duration-300 hover:custom-brown" @click="increment(product,index)"> + </button>  
             
          <button class="bg-custom-brown text-white py-2 px-4 m-8 rounded-md cursor-pointer transition-colors 
            duration-300 hover:custom-brown" @click="delete_from_cart(product,index)"> X </button> 
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
import {get_all_cart} from "@/composables/useCart"
import { data } from 'autoprefixer';
const cart = useCart()
const items = cart.items
const quantity = cart.quantity
const removeFromCart = cart.removeFromCart

console.log("items",items)

  const decrement = () => {
    cart.decrement();
  }

const{get_data,error}=get_all_cart()  

const delete_from_cart = (product, index) => {
   cart.delete_from_cart(get_data.value[index], index);  
} 
const increment = (product,index) => {
    cart.increment(get_data.value[index],index);
  }

  const total = computed(() => {  
  let totalPrice = 0; 
  for (let i = 0; i < items.length; i++) {
    totalPrice += Number(get_data.value[i].price)*quantity[get_data.value[i].id];
  }
  return totalPrice;
});
</script>