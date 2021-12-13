import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import store from './store'
import vuetify from './plugins/vuetify'
import {app} from './utils/app.js'
import VueTimepicker from 'vue2-timepicker'

Vue.config.productionTip = false
Vue.prototype.$app = app

Vue.use(VueAnalytics,{
  id:'UA-189826308-1',
  router
})

new Vue({
  router,
  store,
  vuetify,
  VueTimepicker,
  render: h => h(App)
}).$mount('#app')
