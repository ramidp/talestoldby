import { createRouter, createWebHistory } from 'vue-router'
import Part1 from '../components/Part1.vue'
import Part2 from '../components/Part2.vue'
import Home from '../components/Home.vue'
import Part4 from '../components/Part4.vue'
import StoriesList from '../components/StoriesList.vue'
import StoryTemplate from '../components/StoryTemplate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Home,
    },
    {
      path: '/story/:url',
      name: 'Historia',
      component: StoryTemplate,
    },
    {
      path: '/second-story',
      name: 'Part4',
      component: Part4,
    },
    {
      path: '/stories-list',
      name: 'Lista de Historias',
      component: StoriesList,
    },
  ],
})

export default router
