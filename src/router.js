import Vue from 'vue';
import Router from 'vue-router';

import EditStudents from './views/EditStudents.vue';
import EditSkills from './views/EditSkills.vue';
import EditExperiences from './views/EditExperiences.vue';
import EditEducation from './views/EditEducation.vue';
import EditCapstones from './views/EditCapstones.vue';

import NewCapstones from './views/NewCapstones.vue';
import NewSkills from './views/NewSkills.vue';
import NewEducation from './views/NewEducation.vue';
import NewExperience from './views/NewExperience.vue';

import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  hash: false, 
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },

    { path: '/student/:id/edit', name: 'edit-students', component: EditStudents },
    { path: '/skills/:id/edit', name: 'edit-skills', component: EditSkills },
    { path: '/experiences/:id/edit', name: 'edit-experiences', component: EditExperiences },
    { path: '/educations/:id/edit', name: 'edit-education', component: EditEducation },
    { path: '/capstones/:id/edit', name: 'edit-capstones', component: EditCapstones },

    { path: '/capstone/new', name: 'new-capstones', component: NewCapstones },
    { path: '/skills/new', name: 'new-skills', component: NewSkills },
    { path: '/education/new', name: 'new-education', component: NewEducation },
    { path: '/experience/new', name: 'new-experience', component: NewExperience }
  ]
})