import Vue from 'vue'
import App from './App.vue'

const router = new VueRouter()

router.beforeEach((to, from, next) => {
  // ...
})

new Vue({
  el: '#app',
  render: h => h(App)
})
