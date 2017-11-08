import Vue from 'vue'

import Index from './components/index.vue'

new Vue({
    el: '#app',
    components: {
        default: Index
    },
    render: h => h(Index)
}).$mount('#app')
