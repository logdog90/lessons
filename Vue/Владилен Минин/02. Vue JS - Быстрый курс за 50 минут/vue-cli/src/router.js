import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/todos',
        name: 'Todos',
        component: () => import('./views/Todos.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from '@/views/Home'

// Vue.use(Router)

// export default new Router({
//     mode: 'history',
//     routes: [
//         {
//             path: '/',
//             component: Home
//         },
//         {
//             path: './todos',
//             component: () => import('./views/Todos.vue')
//         }
//     ]
// })