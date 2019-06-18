import Vue from 'vue';
import Router from 'vue-router';

import EditStudents from './views/EditStudents.vue';
import EditSkills from './views/EditSkills.vue';
import EditExperiences from './views/EditExperiences.vue';

import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";


Vue.use(Router);

export default new Router({
  mode: 'history',
  hash: false, 
  base: process.env.BASE_URL,
  routes: [
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },

    { path: '/student/:id/edit', name: 'edit-students', component: EditStudents },
    { path: '/student/:id/skills/edit', name: 'edit-skills', component: EditSkills },
    { path: '/student/:id/experiences/edit', name: 'edit-experiences', component: EditExperiences }
  ]
})