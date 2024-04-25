import { defineStore } from "pinia";
import { ref } from "vue";
import { useFetch } from "./fetch.js";
const STORAGE_KEY = "cart";
const error = ref(null);

export const useCart = defineStore("counter", {
  id: "cart",
  state: () => ({
    items: [],
    total: 0,
    quantity: [],
    get_items: [],
    quan: 1,
  }),
  actions: {
    addToCart(product, index) {
      console.log(this.items);
      if (this.items.includes(product)) {
        this.quantity[index + 1] += 1;
      } else {
        this.items.push(product);
        this.quantity[index + 1] = 1;
      }
      this.total += Number(product.price) * this.quantity[index + 1];
      console.log(this.total);
      console.log(this.quantity[index + 1], "-------------------------");
      this.quan = this.quantity[index + 1];

      try {
        const token = localStorage.getItem("token");

        const requestData = {
          product_id: product.id,
          quantity: this.quan,
        };
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
            this.get_items = res;
          })
          .catch((err) => {
            error.value = err;
          });
      } catch (err) {
        error.value = err;
        console.error("Error during fetching data:", err);
      }
    },
    delete_from_cart(product, index) {
      const error = ref(null);
      const data = ref(null);
      console.log(product, "product-----------------------------")
      try {
        const token = localStorage.getItem("token");
        const requestData = {
          product_id: product.product.id,
        };
        console.log(requestData, "requestData-----------------------------");
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + token,
          },
          body: JSON.stringify(requestData),
        };
        useFetch("http://127.0.0.1:8000/cart/delete-from-cart/", options)
          .then((res) => {
            data.value = res;
            console.log(get_data.value, "res--------------------------------");
          })
          .catch((err) => {
            error.value = err;
          });
      } catch (err) {
        error.value = err;
        console.error("Error during fetching data:", err);
      }
    },
    increment(product, index) {
      this.quantity[product.product.id] += 1;
      this.total += Number(product.product.price)
      console.log(this.total);
    },
    

    removeFromCart(product) {
      this.items = this.items.filter((items) => items.id !== product.id);
      this.total -= product.price;
      // this.persistCart()
    },
  },
});

export function get_all_cart() {
  const error = ref(null);
  const get_data = ref(null);
  try {
    const token = localStorage.getItem("token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token,
      },
    };
    useFetch("http://127.0.0.1:8000/cart/get-from-cart/", options)
      .then((res) => {
        get_data.value = res;
        console.log(get_data.value, "res--------------------------------");
      })
      .catch((err) => {
        error.value = err;
      });
  } catch (err) {
    error.value = err;
    console.error("Error during fetching data:", err);
  }

  return { get_data, error };
}
