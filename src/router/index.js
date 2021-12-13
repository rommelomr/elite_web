import Vue from 'vue'
import VueRouter from 'vue-router'
import Faqs from '../views/Faqs.vue'
import TermsAndConditions from '../views/TermsAndConditions.vue'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Reservation from '../views/Reservation.vue'
import RegisterDriver from '../views/RegisterDriver.vue'
import CookiesPolicy from '../views/CookiesPolicy.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Conditions from '../views/Conditions.vue'
import ReservationConfirmation from '../views/ReservationConfirmation.vue'
import Services from '../views/Services.vue'
import Prices from '../views/Prices.vue'
import VueGtag from "vue-gtag"

Vue.use(VueRouter)
Vue.use(VueGtag, {
  config: { id: "UA-189826308-1" }
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      nav_bar_is_displayed:true,
      footer_is_displayed:true,
      options_helper:true,
    }
  },
  {
    path: '/politica_de_cookies',
    name: 'CookiesPolicy',
    component: CookiesPolicy,
    meta:{
      nav_bar_is_displayed:true,
      footer_is_displayed:true,
      options_helper:true,
    }
  },
  {
    path: '/politicas_de_privacidad',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta:{
      nav_bar_is_displayed:true,
      footer_is_displayed:true,
      options_helper:true,
    }
  },
  {
    path: '/servicios',
    name: 'Services',
    component: Services,
    meta:{
      nav_bar_is_displayed:true,
      footer_is_displayed:true,
      options_helper:true,
    }
  },
  {
    path: '/terminos_y_condiciones',
    name: 'Conditions',
    component: Conditions,
    meta:{
      nav_bar_is_displayed:true,
      footer_is_displayed:true,
      options_helper:true,
    }
  },
  {
    path: '/preguntas_frecuentes',
    name: 'faqs',
    component: Faqs,
    meta:{
      nav_bar_is_displayed:true,
      footer_is_displayed:true,
      options_helper:true,
    }
  },
  
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  },
  {
    path: '/reservacion',
    name: 'reservation',
    component: Reservation,
    meta:{
      nav_bar_is_displayed:true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      nav_bar_is_displayed:true,
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta:{
      drawer_is_displayed:true,
    }
  },
  {
    path: '/registrar_conductor',
    name: 'register_driver',
    component: RegisterDriver,
    meta:{
      drawer_is_displayed:true,
    }
  }, 
  {
    path: '/confirmacion_reservacion',
    name: 'ReservationConfirmation',
    component: ReservationConfirmation,
    meta:{
      nav_bar_is_displayed:true,
      footer_is_displayed:true,
    }
  }, 
  {
    path: '/precios',
    name: 'Prices',
    component: Prices,
    meta:{
      drawer_is_displayed:true,
    }
  }, 

  {
    path: '/terminos_de_uso',
    name: 'TermsAndConditions',
    component: TermsAndConditions,
    meta:{
      nav_bar_is_displayed:true,
      footer_is_displayed:true,
    }
  }, 

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
