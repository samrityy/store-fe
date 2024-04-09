import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import Register from '@/pages/Register.vue';

// import DashboardPage from './components/pages/DashboardPage';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/user/login', component: LoginPage },
    { path: '/user/register', component: Register },
//  { path: '/dashboard', component: DashboardPage },
  ],
});

export default router;
