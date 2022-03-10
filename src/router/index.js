import { createRouter, createWebHistory } from 'vue-router';
import { AppHomeLayout, AppBasicLayout } from '@layouts';
import Home from '@views/Home';
import PreSale from '@views/PreSale';
import PublicMint from '@views/PublicMint';

const routes = [
  {
    path: '/',
    component: AppHomeLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/presales',
    component: AppBasicLayout,
    children: [
      {
        path: '',
        name: 'PreSale',
        component: PreSale
      }
    ]
  },
  {
    path: '/mint',
    component: AppBasicLayout,
    children: [
      {
        path: '',
        name: 'PublicMint',
        component: PublicMint
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
