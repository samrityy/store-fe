
import { ref } from 'vue';
import { useFetch } from './fetch.js';

export function useLoginForm() {
  const email = ref('');
  const password = ref('');
  const data = ref(null);
  const error = ref(null);

  const submitForm = () => {
    console.log('submitForm');
    try {
      const formData = {
        email: email.value,
        password: password.value
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: formData
      };
      const { data, error } = useFetch('http://127.0.0.1:8000/user/login/', options)
      console.log('Login successful!');
    } catch (error) {
      console.error('Error in logging in :', error);
    }
  };
  return { email, password, "submitForm" : submitForm, data, error};
}
