
// export default routes;

import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList.vue'
import Login from '@/components/Login.vue';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'TodoList',
      component: TodoList
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // },
  ]
});

/*
  router.beforeEach((to, from, next) => {
    // const isLoggedIn = store.state.auth.isLoggedIn;
    const isLoggedIn = store.state.auth.isLoggedIn; // проверять куки, нужен бекенд
    if(!isLoggedIn && to.name !== 'login') {
      return next({name: 'login'});
    }
    return next();
  });
*/

export default router
