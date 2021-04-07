import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Appindex from "../components/home/Appindex";
import Home from "../components/home/Home";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/index',
          name: 'Appindex',
          component: Appindex,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
