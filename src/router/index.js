import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/ToDoList',
      name: 'ToDoList',
      component: () => import('../views/ToDoListView.vue'),
      children: [
        {
          path: 'prepare',
          name: 'prepare',
          component: () => import('../views/ToDoListView.vue')
        },
        {
          path: 'finish',
          name: 'finish',
          component: () => import('../views/ToDoListView.vue')
        }
      ]
    }
  ]
})

export default router
