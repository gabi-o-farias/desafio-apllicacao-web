import vue from 'vue';
import Router from 'vue-router';

vue.use(Router);

const routes = new Router ({
    mode : 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home.vue'),
          },
          {
            path: '/cadastrar',
            name: 'register',
            component: () => import('@/views/register.vue'),
          },
          {
            path: '/entrar',
            name: 'login',
            component: () => import('@/views/login.vue'),
          },
          {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('views/dashboard.vue'),
            meta: {
              requiresAuth: true,
            }
          },
        ]
      })
      
      export default routes;