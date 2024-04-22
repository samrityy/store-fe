import {defineStore} from 'pinia'
import { ref } from 'vue';
import { useFetch } from './fetch.js';
const STORAGE_KEY = 'cart';
const data = ref(null);
const error = ref(null);
export const useCart = defineStore("counter",{
    id:'cart',
    state: () => ({
        items: JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || [],
        total: 0,
    }),
    actions:{
        addToCart(product){
            this.items.push(product)
            console.log(product.price)
            this.total += Number(product.price)
            console.log(this.total)
            // this.persistCart()

            const fetchData = () => {
                console.log("fetchData");
              
                try {
                    const token = localStorage.getItem('token'); // Retrieve the user's token from local storage
                    const user = {
                        token: token
                    };
                
                    const requestData = {
                        product: product,
                        user: user
                    };
                  const options = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestData),
                  };
              
                  useFetch(" http://127.0.0.1:8000/cart/ ", options)
                  .then((res) => {
                    data.value = res;
                  })
                  .catch((err) => {
                    error.value = err;
                  });
              } catch (err) {
                error.value = err;
                console.error("Error during fetching data:", err);
              }
            };
            fetchData();
            return { data, error };              
                },      
        removeFromCart(product){
            this.items = this.items.filter(items=> items.id !== product.id)
            this.total -= product.price
            // this.persistCart()
        },
        // persistCart() {
        //     sessionStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
        //   }
    }
});
