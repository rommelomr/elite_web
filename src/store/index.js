import Vue from 'vue'

import Vuex from 'vuex'

import {getField,updateField} from 'vuex-map-fields'

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage:window.localStorage
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session:false,
    userData:{
      id:'',
      name:'',
      email:'',
      role:'',
      token:'',
    },
    
    confirmed_reservation:{
      confirmed_reservation_setted:false,
      id:'',
      brand:'',
      model:'',
      plaque:'',
      reception_date:'',
      devolution_date:'',
      reception_terminal:'',
      devolution_terminal:'',
      extra_service:'',
      price:'',
    }    
  },

  getters: {
    getField
  },

  mutations: {
    updateField
  },

  actions: {
    
  },

  modules: {
  },

  plugins:[vuexLocal.plugin]
})
