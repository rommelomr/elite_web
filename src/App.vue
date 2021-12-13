<template>
  <v-app id="elite-app">

    <v-row class="ma-0">
      <v-navigation-drawer
        app
        permanent
        expand-on-hover
        v-if="this.$route.meta.drawer_is_displayed"
      >
        <v-list>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{user_name}}
              </v-list-item-title>
              <v-list-item-subtitle>{{user_email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link @click="redirect('/dashboard')" :disabled="this.$route.path == '/dashboard'">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="redirect('/registrar_conductor')" :disabled="this.$route.path == '/registrar_conductor'">
            <v-list-item-icon>
              <v-icon>mdi-car</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Conductores</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="redirect('/precios')" :disabled="this.$route.path == '/precios'">
            <v-list-item-icon>
              <v-icon>mdi-calendar-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Precios</v-list-item-title>
          </v-list-item>
          
          <v-list-item link @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-lock</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-navigation-drawer
        v-model="drawer"
        app
        v-if="this.$route.meta.options_helper"
      >

        <v-list-item>
          <v-list-item-content>
            <v-list-item>
              <v-btn
                text
                @click="redirect('/')"
              >
                <span class="mr-2">Inicio</span>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn
                text
                @click="redirect('/preguntas_frecuentes')"
              >
                <span class="mr-2">Preguntas frecuentes</span>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn
                text
                @click="redirect('/servicios')"
              >
                <span class="mr-2">Servicios</span>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn
                text
                @click="redirect('/','#encuentranos')"
              >
                <span class="mr-2">Contacto</span>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn
                text
                @click="redirect('/login')"
              >
                <span class="mr-2">Área privada</span>
              </v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn
                text
                @click="redirect('/politica_de_cookies')"
              >
                <span class="mr-2">Politica de cookies</span>
              </v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn
                text
                @click="redirect('/politicas_de_privacidad')"
              >
                <span class="mr-2">Politicas de privacidad</span>
              </v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn
                text
                @click="redirect('/terminos_y_condiciones')"
              >
                <span class="mr-2">Términos y condiciones</span>
              </v-btn>
            </v-list-item>

          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        app
        color="white"
        v-if="this.$route.meta.nav_bar_is_displayed"
      >

        <div style="cursor:pointer;" class="align-center" @click="redirect('/')">

          <v-img
            style="z-index:99;"
            alt="Vuetify Logo"
            class="shrink mr-2 d-none d-md-flex"
            contain
            src="@/assets/logo_hd.png"
            transition="scale-transition"
            width="170"
          />
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 d-flex d-md-none"
            contain
            src="@/assets/logo_hd.png"
            transition="scale-transition"
            width="100"
          />
          
        </div>


        <v-spacer></v-spacer>
        <div class="d-none d-md-flex">

          <v-btn
            text
            @click="redirect('/')"
          >
            <span class="mr-2">Inicio</span>
          </v-btn>
          <v-btn
            text
            @click="redirect('/preguntas_frecuentes')"
          >
            <span class="mr-2">Preguntas frecuentes</span>
          </v-btn>
          
          <v-btn
            text
            @click="redirect('/servicios')"
          >
            <span class="mr-2">Servicios</span>
          </v-btn>
          <v-btn
            text
            @click="redirect('/','#encuentranos')"
          >
            <span class="mr-2">Contacto</span>
          </v-btn>
          <v-btn
            text
            @click="redirect('/login')"
          >
            <span class="mr-2">Área privada</span>
          </v-btn>
          
        </div>
        <div class="d-flex d-md-none">
          <v-btn
            text
             @click.stop="drawer = !drawer"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
        
        
      </v-app-bar>    

      <v-main>
        <router-view v-if="loaded"></router-view>
      </v-main>
    </v-row>
    <v-footer v-if="this.$route.meta.footer_is_displayed" class="font-weight-medium white">

      <v-col class="text-center" cols="12">

        Copyright © Elite Parking {{ new Date().getFullYear() }}. Todos los derechos reservados.
        
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

import axios from 'axios';
import {API} from './utils/functions.js';
import {mapFields} from 'vuex-map-fields';


export default {
  name: 'App',
  data:()=>({
    loaded:false,
    drawer: false
  }),
  mounted(){
    
    if(this.user_token){

      this.axios.defaults.headers.common.Authorization = 'Bearer '+this.user_token;

    }
    this.loaded = true;
  },
  methods:{
    logout(){
      
      axios.post(API('logout'))
      .then(() => {

        this.user_id = '';

        this.user_name = '';

        this.user_email = '';

        this.user_token = '';

        this.user_role = '';

        this.session = false;

        this.axios.defaults.headers.common.Authorization = '';      

        this.$router.push('/login')
      })
      .catch(e => {
        console.log(e);
      });
    },
    redirect(route,section){

      if(this.isCurrentRoute(route)){
        if(section != null){
          this.$vuetify.goTo(section);
        }

      }else{
        let full_route = route;
        if(section !=null){
          full_route += section;
        }
        this.$router.push(full_route);

      }
    },
    isCurrentRoute(route){
      
      return this.$route.path == route;
    }
  },
  computed:{
    ...mapFields({

      sidenavIsDisplayed:'sidenavIsDisplayed',

      user_id:'userData.id',
      user_token:'userData.token',
      user_role:'userData.role',
      user_name:'userData.name',
      user_email:'userData.email',
      session:'session',

    }),
  }
};
</script>
<style>

  @font-face{
    font-family:"Montserrat-Bold";
    src:url("./assets/fonts/Montserrat-Bold.otf");
  }
  *{
    font-family: "Montserrat-Bold";
  }
  .text{

    color:white;

  }
  .montserrat-title{

    font-size:20px;

  }
  #elite-app{
    background: #803588;
  }
</style>