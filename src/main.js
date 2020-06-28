import Vue from 'vue'
import App from './App.vue'
import router from './router'
import auth from './service/auth'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const user = auth.getUser();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !user) {
    next('login');
    // } else if (!requiresAuth && currentUser) {
    //   next('home');
  } else {
    next();
  }
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
