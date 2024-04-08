// useLoginForm.js
import { ref } from 'vue';

export function useLoginForm() {
  const email = ref('');
  const password = ref('');
  const submitForm = () => {
    console.log('Form submitted:', { email: email.value, password: password.value });
    email.value = '';
    password.value = '';
  };
  return { email, password, submitForm };
}
