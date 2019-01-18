import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Look from "./views/Look.vue";
import Dubu4 from "./views/Dubu4.vue";
import Login from "./views/Login.vue";
import Ko from "./views/Ko.vue";
import Join from './views/Join.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Look",
      name: "Look",
      component: Look
    },
    {
      path: "/Dubu4",
      name: "Dubu4",
      component: Dubu4
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/Ko",
      name: "Ko",
      component: Ko
    },
    {
      path: "/Join",
      name: "Join",
      component: Join
    } /*,
    {
      path: '/notice',
      name: 'notice',
      
      component: () => import( './views/Notice.vue')
    }*/
    /*--,{
      path: '/start',
      name: 'start',
      
      component: () => import( './components/start.vue')
    },
    {
      path: '/ko',
      name: 'ko',
     
      component: () => import( './views/Ko.vue')
    },
    {
      path: '/look',
      name: 'look',
     
      component: () => import( './views/Look.vue')
    }*/
  ]
});
