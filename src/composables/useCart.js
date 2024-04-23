import { defineStore } from "pinia";
import { ref } from "vue";
import { useFetch } from "./fetch.js";
const STORAGE_KEY = "cart";
const data = ref(null);
const error = ref(null);
export const useCart = defineStore("counter", {
  id: "cart",
  state: () => ({
    items: JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || [],
    total: 0,
  }),
  actions: {
    addToCart(product, index) {
      this.items.push(product);
      console.log(index, "x------------------------");
      this.total += Number(product.price);
      console.log(this.total);
      // this.persistCart()

      const fetchData = () => {
        console.log("fetchData");

        try {
          const token = localStorage.getItem("token");
          const user = localStorage.getItem("email");
          const requestData = {
            product_id: product.id,
            quantity: 1,
          };
          console.log(product.description, "----------------");
          // console.log(
          //   requestData,
          //   "requestData ------------------------------"
          // );
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token " + token,
            },
            body: JSON.stringify(requestData),
          };

          useFetch("http://127.0.0.1:8000/cart/add-to-cart/", options)
            .then((res) => {
              data.value = res;
              console.log(res, "res");
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
    removeFromCart(product) {
      this.items = this.items.filter((items) => items.id !== product.id);
      this.total -= product.price;
      // this.persistCart()
    },
    // persistCart() {
    //     sessionStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    //   }
  },
});
