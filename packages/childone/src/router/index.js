import Vue from "vue";
import { createRouter, createWebHistory } from 'vue-router'
import Vue1 from '../components/Vue1.vue'
import Helloworld from '../components/HelloWorld.vue'
import NotFound404 from '../components/404.vue'
import Home from '../components/Home.vue'
import Layout from '../components/Layout.vue'
import Login from '../components/Login.vue'
// Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        component: Login,
        children: [
            {
                path: 'hello',
                component: Helloworld,
            }
        ]
    },
    {
        path: '/home',
        component: Home
    },

    {
        path: '/vueApp',
        component: Vue1,
        children: [
            {
                path: 'vue',
                component: Helloworld,
            }
        ]
    }
]
export default routes