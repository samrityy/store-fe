
import { ref } from 'vue';
import { useFetch } from './fetch.js';

export function useRegisterForm() {
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const data = ref(null);
  const error = ref(null);

  const submitForm = () => {
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
        body: formData
      };
      const { data, error } = useFetch('http://127.0.0.1:8000/user/register/', options)
      console.log('Registration successful!');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  return { name, email, password, "submitForm" : submitForm, data, error};
}
