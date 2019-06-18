import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import ResumeShow from "./views/ResumeShow.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  hash: false, 
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/resume", name: "resume_show", component: ResumeShow }
  ]
})