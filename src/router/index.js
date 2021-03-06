import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name : 'Home',
    component: ()=> import('@/views/Home')
  },
  {
    path : '/gift',
    name : 'Gift',
    component : ()=> import('@/views/Gift')
  },
  {
    path : '/insurance',
    name : 'Insurance',
    component : ()=> import('@/views/Insurance')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
