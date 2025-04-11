import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'
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
      path: '/contact',
      name: 'Contacto',
      component: Contact,
    },
    {
      path: '/stories-list',
      name: 'Lista de Historias',
      component: StoriesList,
    },
  ],
})

export default router
