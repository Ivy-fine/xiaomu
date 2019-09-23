import Vue from 'vue'
import Router from 'vue-router'
import routes from './routerConfig'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to,from)=>{
  if(to.meta&&to.meta.title)
  document.title=to.meta.title
})

export default router;
