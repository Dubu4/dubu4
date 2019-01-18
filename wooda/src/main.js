import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store.js'
import axios from 'axios'
import sugar from 'sugar'
import Vuex from 'vuex'
import 'es6-promise/auto'
import VueRouter from 'vue-router'
import numfm from 'numeral'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'babel-polyfill'
import 'es6-promise/auto'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
//Vue.prototype.$sugar = sugar
Object.defineProperty(Vue.prototype,'$sugar',{ value: sugar })
Object.defineProperty(Vue.prototype,'$numfm',{ value: numfm })
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.filter('numfm', numfm);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
