<template>
    <div class="container mx-auto py-8">
      <h2 class="text-3xl font-semibold mb-4">Shop</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(item, index) in items" :key="index" class="bg-custom-light rounded-lg p-4 shadow-md">
          <img :src="item.image" :alt="item.title" class="w-full h-32 object-cover mb-4">
          <h3 class="text-lg font-semibold mb-2">{{ item.name }}</h3>
          <p class="text-gray-700 mb-2">{{ item.description }}</p>
          <p class="text-gray-800 font-semibold mb-2">${{ item.price.toFixed(2) }}</p>
          <button @click="addToCart(index)" class="bg-custom-dark text-white font-semibold px-4 py-2 rounded hover:bg-custom-brown focus:outline-none focus:bg-custom-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Product 1",
          description: "Description of product 1.",
          price: 19.99,
          image: "https://via.placeholder.com/300"
        },
        {
          name: "Product 2",
          description: "Description of product 2.",
          price: 29.99,
          image: "https://via.placeholder.com/300"
        },
        {
          name: "Product 3",
          description: "Description of product 3.",
          price: 39.99,
          image: "https://via.placeholder.com/300"
        },
        {
          name: "Product 4",
          description: "Description of product 4.",
          price: 49.99,
          image: "https://via.placeholder.com/300"
        }
      ],
      cart: []
    };
  },
  methods: {
    addToCart(index) {
      this.cart.push(this.items[index]);
      console.log('Item added to cart:', this.items[index]);
    }
  }
};
</script>

<style>
</style>