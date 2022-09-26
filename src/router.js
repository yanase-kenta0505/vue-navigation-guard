import { createRouter, createWebHistory } from "vue-router";
import Home from './components/home.vue'
import About from './components/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      setTimeout(function () {
        next()
      }, 5000)
    }
  },
  { path: '/about', name: 'about', component: About },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router