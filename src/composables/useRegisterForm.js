import { ref } from 'vue';
export function useRegisterForm() {

  const name= ref('');
  const email = ref('');
  const password = ref('');
  const submitForm = () => {
    console.log('Form submitted:', { name:name.value ,email: email.value, password: password.value });
    name.value = '';
    email.value = '';
    password.value = '';
  };
  return { name,email, password, submitForm };
}
