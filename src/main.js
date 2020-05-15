import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

//组件引入
import TopList from './components/topList.vue'

Vue.use(ElementUI)
Vue.use(animated)
Vue.config.productionTip = false

//注册全局组件
Vue.component('toplist',TopList)
axios.defaults.baseURL = 'http://127.0.0.1:4000';
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
