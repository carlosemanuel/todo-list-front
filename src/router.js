import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/Home.vue'),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/components/About.vue'),
        },
        {
          path: '/items',
          name: 'items',
          component: () => import('@/components/Items.vue'),
          meta: {
            requiresAuth: true
          }
        }
      ],
    },
  ],
});

export default router;
