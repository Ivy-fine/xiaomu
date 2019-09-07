import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('./views/home'),
      redirect:'/menu',
      children:[
        {
          path:'menu',
          name:'menu',
          component:()=>import('./views/home/menu/menu.vue')
        },
        {
          path:'comment',
          name:'comment',
          component:()=>import('./views/home/comment/comment.vue')
        },
        {
          path:'biz',
          name:'biz',
          component:()=>import('./views/home/biz/biz.vue')
        }
      ]
    }
  ]
})
