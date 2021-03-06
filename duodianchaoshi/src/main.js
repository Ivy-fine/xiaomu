import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import '@/mock/mock.js'
import 'swiper/css/swiper.min.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
