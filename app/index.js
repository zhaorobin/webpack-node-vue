import Vue from 'vue'

import VueRouter from 'vue-router'

import './http/request.js'

import Register from './components/user/register.vue'

import Login from './components/user/login.vue'

import User from './components/user/user.vue'

import Index from './components/home/index.vue'

import About from './components/home/about.vue'

import Info from './components/home/info.vue'

import Home from './components/home/home.vue'

import App from './components/app.vue'

Vue.config.debug = true;//开启错误提示

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/home'},
    {
        path: '/index',
        component: Index,
        beforeEnter: (to, from, next) => {
            next()
        }
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    { path: '/about/:id', name: 'about', component: About,
      children: [
          {
              path: 'info',
              component: Info,
              alias: 'test'
          }
      ]
    }
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    components: {
        default: App
    },
    router,
    render: h => h(App)
}).$mount('#app')
