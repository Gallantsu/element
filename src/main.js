// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import storeData from './store'
import async from './utils/async' 
import ElementUI from 'element-ui'

//引入element-ui的css
import 'element-ui/lib/theme-chalk/index.css';

//vue插件的安装
Vue.use(Vuex)
Vue.use(async)
Vue.use(ElementUI)

//状态管理器初始化
let store = new Vuex.Store(storeData)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
	store,
  components: { App },
  template: '<App/>'
}).$mount(document.getElementById("app"));
