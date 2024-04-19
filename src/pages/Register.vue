<!-- <template>
        <div class="flex items-center justify-center min-h-screen bg-custom-brown">
            <div class="main bg-white rounded-lg shadow-md p-10 transition-transform w-96 text-center">
                <h1 class="text-custom-dark text-3xl">
                    MiMi Store
                </h1>
                    <h3 class="text-lg">
                        Create an account
                    </h3>
                    <form @submit.prevent="redirectToLogin" method="post"> 
                        <label for="name" class="block mb-2 text-left text-gray-700 font-bold">Name:</label>
                        <input v-model="name" type="text" id="name" name="password" placeholder="Enter your full name" class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                            focus:border-custom-light" required>
                        <label for="email" class="block mb-2 text-left text-gray-700 font-bold">Email:</label>
                        <input v-model="email" type="email" id="password" name="password" placeholder="Enter your email" class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                            focus:border-green-400" required>
            
                        <label for="password" class="block mb-2 text-left text-gray-700 font-bold">Password:</label>
                        <input v-model="password" type="password" id="password" name="password" placeholder="Enter your Password" class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                            focus:border-green-400" required>
            
                        <div class="flex justify-center items-center">
                            <button type="submit"
                                    class="bg-custom-dark text-white py-3 px-6 rounded
                                -md cursor-pointer transition-colors 
                                duration-300 hover:bg-custom-brown">
                                Sign Up
                            </button>
                        </div>
                    </form>
    </div>
    </div>
 </template> -->
 <template>
    <div class="flex items-center justify-center h-100 bg-custom-brown">
            <div class="main bg-white rounded-lg shadow-md p-10 transition-transform w-96 text-center">
                <h1 class="text-custom-brown text-3xl">
                    Register 
                </h1>
                <TextInput v-model="name" label="Name *" type="name" placeholder="Enter your full name" />
                <TextInput v-model="email" label="Email *" type="email" placeholder="Enter your email"  />
                <div v-if="error && error.email">
                <Error v-for="emailError in error.email" :key="emailError" :errorMessage="emailError" /></div>
                <TextInput v-model="password" label="Password *" type="password" placeholder="Enter your password" />
                <div v-if="error && error.email">
                <Error v-for="passwordError in error.password" :key="passwordError" :errorMessage="passwordError" /></div>
                <Button buttonText="Register" @click="submitForm" />
            </div>
            </div>
</template>
<script setup>
import {ref,watch} from 'vue';
import { useRegisterForm } from '@/composables/useRegisterForm.js';
import router from '@/router/router.js';
import TextInput from '@/components/TextInput.vue';
import Button from '@/components/Button.vue';
import Error from '@/components/Error.vue';
const emailerror = ref('');
const { name, email, password, submitForm, error} = useRegisterForm();
// const redirectToLogin = async () => {
//     const {data, error} = await submitForm();
//     if (!error.value) {
//         console.log('Final Data', data.value);
//         router.push({ name: 'Login' });
//     } else {
//         console.log('Final  error', error.value);
//     }
// }
</script>
 