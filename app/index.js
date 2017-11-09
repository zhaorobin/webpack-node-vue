import Vue from 'vue'

import VueRouter from 'vue-router'

import App from './components/app.vue'

import Index from './components/index.vue'

import About from './components/about.vue'

import Info from './components/info.vue'


// Vue.config.debug = true;//开启错误提示

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home'},
    {
        path: '/index',
        component: Index,
        alias: '/home',
        beforeEnter: (to, from, next) => {
            next()
        }
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
