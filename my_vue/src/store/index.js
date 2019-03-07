import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    login:false
  },
  mutations:{
    loginOut:state => state.login=false,
    loginIN:state => state.login=true,
  }
})
