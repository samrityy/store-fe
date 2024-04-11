import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import Register from '@/pages/Register.vue';
import MainLayout from '@/layout/MainLayout.vue';
import Dashboard from '@/pages/Dashboard.vue';

// import DashboardPage from './components/pages/DashboardPage';

const routes = [
  {
  path: '',
  component:MainLayout,
  children:[
  {
    path: '/user/login',
    component: LoginPage,
    name: 'Login', 
  },
  {
    path: '/user/register',
    component: Register, 
    name: 'Register',
  },
  {
    path: '/dashboard',
    component:Dashboard,
    name: 'Dashboard',
  }
]
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
