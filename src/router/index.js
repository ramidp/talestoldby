import { createRouter, createWebHistory } from 'vue-router'
import Part1 from '../components/Part1.vue'
import Part2 from '../components/Part2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),

  routes: [
    {
      path: '/',
      name: 'main',
      component: Part1,
    },
    {
      path: '/part2',
      name: 'Part2',
      component: Part2,
    },
  ],
})

export default router
