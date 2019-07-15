
// import Home from './components/Home.vue';
// import Register from './components/Register.vue';
// import Login from './components/Login.vue';

// const routes = [
//     { path: '/', component: Home },
//     { path: '/register', component: Register },
//     { path: '/login', component: Login },
// ];

// export default routes;

import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },

  ]
})
