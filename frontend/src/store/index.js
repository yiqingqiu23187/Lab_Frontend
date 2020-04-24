import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    userDetail: JSON.parse(localStorage.getItem('userDetail') )|| null,
    nowconference:JSON.parse(localStorage.getItem('nowconference'))||null,
    myrole:JSON.parse(localStorage.getItem('myrole'))||null,
    searchFullname:localStorage.getItem('searchFullname') || null,
  },


  mutations: {

    login(state, data){
      localStorage.setItem('token', data.token)
      localStorage.setItem('userDetail', JSON.stringify(data.userDetail))
      state.userDetail = data.userDetail
      state.token = data.token
    },


    logout(state) {
      localStorage.removeItem('token')
      localStorage.removeItem('userDetail')
      localStorage.removeItem('nowconference')
      localStorage.removeItem('myrole')
      state.userDetail = null
      state.token = null
      state.myrole= null
      state.nowconference = null
    },

    searchname(state,data){
      localStorage.setItem('searchname',data);
      state.searchname=data;
      alert(state.searchname)
    },

    meetingDetail(state, data){
      localStorage.setItem('nowconference',JSON.stringify(data));
      state.nowconference=data;
    },

    myrole(state,role){
      localStorage.setItem('myrole',JSON.stringify(role));
      state.myrole=role;
    },

    searchFullname(state,data){
      localStorage.setItem('searchFullname',data);
      state.searchFullname=data;
    },
    //end
  },

})
