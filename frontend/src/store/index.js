import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    userDetail: JSON.parse(localStorage.getItem('userDetail') )|| null,
    // conferenceDetails:localStorage.getItem('myConference') || null,
    authorConference:JSON.parse(localStorage.getItem('myauthorConference')),
    PCConference:JSON.parse(localStorage.getItem('mypcConference')),
    ChairConference:JSON.parse(localStorage.getItem('mychairConference')),
    // newsDetails:localStorage.getItem('myNews') || null

    myApplication:JSON.parse(localStorage.getItem('myApplication')),
    receivedInvitation:JSON.parse(localStorage.getItem(' receivedInvitation'))
  },


  mutations: {

    login(state, data){
      localStorage.setItem('token', data.token)
      // localStorage.setItem('userDetail', data.userDetail)
      localStorage.setItem('userDetail', JSON.stringify(data.userDetail))
      state.user = data.userDetail
    //   state.user = data.userDetail
      state.token = data.token
    },

    myConference(state,data){
      localStorage.setItem('myauthorConference',JSON.stringify(data.authorConference))
      localStorage.setItem('mypcConference',JSON.stringify(data.PCConference))
      localStorage.setItem('mychairConference',JSON.stringify(data.ChairConference))
      state.authorConference=data.authorConference
      state.PCConference=data.PCConference
      state.ChairConference=data.ChairConference
    },

    myNews(state,data){
      localStorage.setItem('myApplication',JSON.stringify(data.application))
      state.myApplication=data.application
      localStorage.setItem('receivedInvitation',JSON.stringify(data.invitation))
      state.receivedInvitation=data.invitation
    },

    logout(state) {
      localStorage.removeItem('token')
      localStorage.removeItem('userDetail')
      state.userDetails = null
      state.token = null
    }
  },

})
