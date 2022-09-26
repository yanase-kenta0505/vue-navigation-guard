import { createRouter, createWebHistory } from "vue-router";
import Home from './components/home.vue'
import About from './components/About.vue'
import { useStore } from './store/index'

// 参考
// https://github.com/vuejs/pinia/discussions/971
// https://pinia.vuejs.org/core-concepts/outside-component-usage.html#single-page-applications
// https://v3.router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

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
  {
    path: '/about',
    name: 'about',
    component: About,

    beforeEnter: (to, from, next) => {
      const store = useStore()

      const toggleIsShow = () => {
        store.toggleIsShow()
      }

      toggleIsShow()
      setTimeout(function () {
        toggleIsShow()
      }, 2000)

      next()
    }
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to) => {
//   const store = useStore()
// })

export default router