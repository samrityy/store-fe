

export function useFetch(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
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
  // fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => (data.value = json))
//     .catch((err) => (error.value = err));
//   return { data, error };
// }