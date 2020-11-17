import Vue from 'vue'
import VueRouter from 'vue-router'

//import Views
import PersonsList from '../views/PersonsList.vue';
import AddPerson from '../views/AddPerson.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PersonsList
  },
  {
    path:'/PersonsList',
    name: 'PersonsList',
    component: PersonsList
  },
  {
    path:'/AddPerson',
    name:'AddPerson',
    component: AddPerson
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
