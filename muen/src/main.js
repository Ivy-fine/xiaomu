import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Message,DatePicker,TimePicker,Select, Option } from 'element-ui';
import Header from "@/components/Header/Header.vue"
import comSwiper from "@/components/comSwiper/comSwiper.vue"
import Subnav from "@/components/subnav/subnav.vue"
import "swiper/dist/css/swiper.min.css"

Vue.config.productionTip = false
Vue.prototype.$message=Message
Vue.component('comSwiper',comSwiper)
Vue.component('Header',Header)
Vue.component('Subnav',Subnav)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Select)
Vue.use(Option)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
