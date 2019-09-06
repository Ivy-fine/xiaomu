import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      meta:{
        required:true
      },
      component: () => import('./views/home/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register/register.vue')
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import('./views/vote/vote.vue')
    },
    {
      path: '/newvote',
      name: 'newvote',
      meta:{
        required:true
      },
      component: () => import('./views/vote/newvote.vue')
    },
    {
      path: '/group',
      name: 'group',
      component: () => import('./views/group/group.vue')
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(item=>item.meta.required)){
    let token=localStorage.token;
    if(!token){
      next({
        path:'/login',
        query:{
          redirect:to.fullPath
        }
      })
    }else{
      next()
    }
  }else{
    next()
  }
})
export default router;