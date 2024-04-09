import { ref } from 'vue';

export function useFetch(url, options) {
  const data = ref(null);
  const error = ref(null);
  if (options && options.body) options.body = JSON.stringify(options.body);
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));
  return { data, error };
}