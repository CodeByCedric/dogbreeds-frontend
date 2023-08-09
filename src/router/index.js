import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DogDetails from '../views/DogDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // TODO, read up on history mode: https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dog/:id',
      name: 'dog-details',
      props: true,
      component: DogDetails,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    }
  ],
});

export default router;
