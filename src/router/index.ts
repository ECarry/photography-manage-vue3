import { createRouter, createWebHashHistory } from 'vue-router'
import Layouts from '../layouts/index.vue'

const routes = [
  {
    path: '/',
    name: 'Layouts',
    component: Layouts,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
