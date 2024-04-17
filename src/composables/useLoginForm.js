import { ref } from 'vue';
import { useFetch } from './fetch.js';
import router from '@/router/router.js';
export function useLoginForm() {
  const email = ref('');
  const password = ref('');
  const data = ref(null);
  const error = ref(null);
  const token=ref(null);

  const submitForm = async () => {
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
        body: JSON.stringify(formData)
           };
        await useFetch('http://127.0.0.1:8000/user/login/', options).then((res) => {
            token.value = res.token;
          if(token.value!=null){
              localStorage.setItem('token', token.value);
              localStorage.setItem('email', email.value);
              router.push({ name: 'Dashboard' });
              data.value = res
          }
        }).catch((err) => {
          console.log(err, 'error')
          error.value = err
        })
    
    } catch (err) {
      error.value = err;
      console.error('Error during login:', err);
      throw(err)
    }
  };
  return {email, password, submitForm, error,data};
}


