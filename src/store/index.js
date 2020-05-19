import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: localStorage.getItem('id') ? localStorage.getItem('id') : 0,
    //存储用户名
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    //用户是否登录
    isLogined: localStorage.getItem('islogin') ? localStorage.getItem('islogin') : false,
    userimg :localStorage.getItem('userimg')?localStorage.getItem('userimg'):'',
  },
  mutations: {
    logined(state, payload) {
      state.id = payload.id
      state.username = payload.username;
      state.userimg = payload.userimg;
      state.isLogined = true
    },
    getout(state) {
      state.id = 0
      state.username = '';
      state.isLogined = false
      state.userimg = ''
      //清除localStorage的数据
    localStorage.removeItem('id')
    localStorage.removeItem('username')
    localStorage.removeItem('islogin')
    localStorage.removeItem('userimg')
    }
  },
  actions: {},
  modules: {}
})