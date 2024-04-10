import { ref } from 'vue';
import { useFetch } from './fetch.js';

export function useRegisterForm() {
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const data = ref(null);
  const error = ref(null);

  const submitForm = async () => {
    console.log('submitForm');

    try {
      const formData = {
        name: name.value,
        email: email.value,
        password: password.value
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      };
      const { data:responseData, error:responseError}  = await useFetch('http://127.0.0.1:8000/user/register/', options);
      // debugger
      data.value = responseData;
      error.value = responseError;
      console.log('Registration successful!', responseData, responseError);
      return { responseData, responseError };
    
    } catch (err) {
      error.value = err;
      console.error('Error during registration:', err);
      throw(err)
    }
  };
  return { name, email, password, submitForm};
}
