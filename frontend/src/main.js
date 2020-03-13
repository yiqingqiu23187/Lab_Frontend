// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

//axios 配置
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8080/api'

Vue.config.productionTip = false
// axios挂载到prototype，全局可以使用this.$axios访问
Vue.prototype.axios = axios

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if(store.state.token) {
      // 判断是否有token，若存在，每个http header加上token
      config.headers.Authorization = 'token ${store.state.token}';
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
      // 清除token 并跳转至login
      store.commit('logout')
      router.replace({
        path: 'login',
        query: {redirect: router.currentRoute.fullPath}
      })
    }
    return Promise.reject(error.response.data)
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
