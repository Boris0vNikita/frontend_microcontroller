import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateSensor from '@/components/CreateSensor'
import Sensor from '@/components/Sensor'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    component: CreateSensor
  },
  {
    path: '/one/:id',
    component: Sensor,
    // component: () => import(''), 
    // props: true 
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
