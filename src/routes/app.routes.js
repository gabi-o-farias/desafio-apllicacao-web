import vue from 'vue';
import router from 'vue-router';

vue.use(router);

const routes = new router ({
    mode : 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
          path: '/home',
          name: 'home',
          component: () => import ('@viwes/home.vue'),,  
        },
    ]
    })

export default routes;