import { createRouter, createWebHistory } from 'vue-router'
import Part1 from '../components/Part1.vue'
import Part2 from '../components/Part2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Part2,
    },
    {
      path: '/main-story',
      name: 'Main Story',
      component: Part1,
    },
  ],
})

export default router
