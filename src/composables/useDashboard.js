import { ref } from "vue";
import { useFetch } from "./fetch.js";

export function useDashboard() {
  const data = ref(null);
  const error = ref(null);

  const fetchData = () => {
    console.log("fetchData");

    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      useFetch("http://127.0.0.1:8000/products/", options)
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
}
