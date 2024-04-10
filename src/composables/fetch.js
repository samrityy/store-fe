import { ref } from 'vue';

export function useFetch(url, options) {
  const data = ref(null);
  const error = ref(null);
  // return new Promise((resolve, reject) => {
    try {
      fetch(url, options)
    }
    catch(err){
      console.log('error')
    }
      // .then((res) => res.json())
      // .then((json) => {
      //   data.value = json;
      //   resolve(data, error);
      // })
  // });
  // const data = ref(null);
  // const error = ref(null);
  
  // try{
  // // if (options && options.body) options.body = JSON.stringify(options.body);
  // const res = await fetch(url, options);
  // if (res.status > 399) {
  //   error.value = res;
  // }
  // const json = await res.json();
  // data.value = json;
  // }catch(err){
  //   error.value = err;
  // }
  return { data, error };
}
  // fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => (data.value = json))
//     .catch((err) => (error.value = err));
//   return { data, error };
// }