import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    userDetail: JSON.parse(localStorage.getItem('userDetail') )|| null,
    // conferenceDetails:localStorage.getItem('myConference') || null,
    authorConference:JSON.parse(localStorage.getItem('myauthorConference')),
    pcConference:JSON.parse(localStorage.getItem('mypcConference')),
    chairConference:JSON.parse(localStorage.getItem('mychairConference')),
    // newsDetails:localStorage.getItem('myNews') || null

    myApplication:JSON.parse(localStorage.getItem('myApplication')),
    myContribution:JSON.parse(localStorage.getItem('mycontribution')),
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
      localStorage.setItem('mychairConference',JSON.stringify(data.chairConference))
      state.conferenceDetails=data.authorConference
      state.pcConference=data.PCConference
      state.chairConference=data.chairConference
    },

    myNews(state,data){
      localStorage.setItem('myApplication',JSON.stringify(data.myApplication))
      state.myApplication=data.data.myApplication
      localStorage.setItem('myContribution',JSON.stringify(data.myContribution))
      state.myContribution=data.myContribution
      localStorage.setItem('receivedInvitation',JSON.stringify(receivedInvitation))
      state.receivedInvitation=data.receivedInvitation
    },

    logout(state) {
      localStorage.removeItem('token')
      localStorage.removeItem('userDetail')
      state.userDetails = null
      state.token = null
    }
  },

})
