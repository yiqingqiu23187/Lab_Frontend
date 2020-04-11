import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import store from '../store'
import meeting from '@/components/meeting'
import Home from '@/components/Home'
import Information from '@/components/Information'
import News from '@/components/News'
import Conference from '@/components/Conference'

Vue.use(Router)

export const router = new Router({
  linkActiveClass:'is-active',
  mode:'history',//改为history模式
  routes: [
    {
      path: '/',
      redirect:'/home',
      meta:{
        keepalive:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        keepalive:false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta:{
        keepalive:false
      }
    },
    {
      path: '/home',
      name: 'Home',
      component:Home,
      meta:{
        keepalive:true
      }
    },
    {
      path: '/meeting',
      name: 'meeting',
      component: meeting,
      meta:{
        requireAuth: true,
        keepalive:true
      }
    },
    {
      path: '/conference',
      name: 'Conference',
      component: Conference,
      meta:{
        requireAuth: true,
        keepalive:true
      }
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta:{
        requireAuth: true,
        keepalive:true
      }
    },
    {
      path: '/information',
      name: 'Information',
      component: Information,
      meta:{
        requireAuth: true,
        keepalive:true
      }
    },
  ]
})

// 前端登录拦截
router.beforeEach(function (to, from ,next) {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 登录成功之后重新跳转到该路由
      })
    }
  } else {
    next()
  }
})
