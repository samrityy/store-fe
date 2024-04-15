export function useFetch(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => response.json())
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      });
  };

