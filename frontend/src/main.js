// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '../static/global.css'

Vue.use(ElementUI)
Vue.config.productionTip=false;

//axios 配置
var axios = require('axios')
// Axios挂载到prototype，全局可以使用this.$axios访问
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = "application/json;charset=UTF-8"

Vue.config.productionTip = false

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if(store.state.token) {
      // 判断是否有token，若存在，每个http header加上token
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(error.response)
    if(error) {
      // 清除token 如果不是register/login, 跳转至login
      store.commit('logout')
      router.currentRoute.path !== '/login' &&
      router.currentRoute.path !== '/register' &&
      router.replace({
        path: '/login',
        query: { redirect: router.currentRoute.path }
      })
    }
    return Promise.reject(error.response.data)
  }
)

//控制路由的跳转
// router.beforeEach((to, from, next) => {
//
//   //获取用户登录成功后储存的登录标志
//   let gettoken = localStorage.getItem('token');
//   let getdetail = localStorage.getItem('userDetails');
//   //如果登录标志存在且为isLogin，即用户已登录
//   if (gettoken !== null &&getdetail !== null) {
//
//     //设置vuex登录状态为已登录
//     store.state.token = gettoken;
//     next();
//
//     //如果已登录，还想想进入登录注册界面，则定向回首页
//     if (to.meta.token == null) {
//       //iViewUi友好提示
//       // iView.Message.error('请先退出登录');
//       next({
//         path: '/'
//       })
//     }
//
//     //如果登录标志不存在，即未登录
//   } else {
//
//     //用户想进入需要登录的页面，则定向回登录界面
//     if (to.meta.token !=null) {
//
//       //还未完成
//       const answer = window.confirm("您还未登录或注册,请先登录或者注册");
//       if(answer){
//         next();
//       }else {
//         next(
//
//         );
//       }
//
//       next({
//         path: '/login',
//       })
//       //用户进入无需登录的界面，则跳转继续
//     } else {
//       next()
//     }
//
//   }
//
// });

router.afterEach(() => {
  window.scroll(0, 0);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
