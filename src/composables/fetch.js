export function useFetch(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        response.json().then((data) => {
          if (response.ok) {
            resolve(data);
          } else reject(data);
        })
      })
      .catch((error) => {
        reject(error)
      });
  });
}
