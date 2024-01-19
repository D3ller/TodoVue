import { createRouter, createWebHistory } from 'vue-router'
import Todo from '../views/Todo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: Todo
    },
    {
      path:'/todo/:id',
        name:'TodoDetail',
        component:() => import('../views/TodoDetail.vue')
    }
  ]
})

export default router
