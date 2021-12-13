<template>
  <v-container>
    <v-snackbar
      v-model="snackbar">

      {{ snackbar_text }}
    </v-snackbar>
    <v-row id="first-row">
      <v-col
        cols="12"
        sm="12" md="8" offset-md="2"
      >
        <v-card>
          <v-card-title class="justify-center">
              <h3>Login</h3>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                sm="12" md="6" offset-md="3"
              >
              
                <v-form ref="form">

                  <v-text-field
                    v-model="username"
                    label="Nombre de usuario"
                    outlined
                  >
                
                  </v-text-field>
                  <v-text-field
                    :type="'password'"
                    label="Contraseña"
                    v-model="password"
                    outlined
                  >
                  </v-text-field>
                  <center>
                    <v-btn
                      color="purple"
                      depressed
                      elevation="1"
                      outlined
                      class="white--text"
                      @click="login"
                    >
                      Ingresar
                    </v-btn>  
                    
                  </center>
              
                </v-form>
              </v-col>
            </v-row>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
  #first-row{
    margin-top: 10%;
  }
</style>
<script>

  
  import {API,validateGuest} from '../utils/functions.js';
  
  import {mapFields} from 'vuex-map-fields';

  export default {

    name:'login',

    data:()=>({
    
      username:'',
      
      password:'',
      snackbar:false,
      snackbar_text:''

    }),
    mounted(){
      
      validateGuest(this);
      this.$app.nav_bar_is_displayed = true;
      
    },
    methods:{
      login(){
  

        this.axios.post(API('login'),{

          username:this.username,

          password:this.password

        })
        .then(response => {
          console.log(response);
          if(response.data.login_code == 0){

            this.snackbar = true;

            this.snackbar_text = 'Nombre de usuario o contraseña incorrectos.'


          }else{

            this.user_id = response.data.user.id;
            
            this.user_name = response.data.user.username;
            
            this.user_email = response.data.user.email;
            
            this.user_token = response.data.token;

            this.user_role = response.data.user.role;

            this.session = true;

            this.axios.defaults.headers.common.Authorization = 'Bearer '+response.data.token;
           
            this.$router.push('/dashboard');

          }
          
        })
        .catch(e => {
          
          console.log(e.response)

          if(e.response.status == 422){
              this.snackbar = true;

              this.snackbar_text = 'Los datos ingresados no son válidos.';
                          
          }

        });
      },

    },
    computed:{
      ...mapFields({
        user_id:'userData.id',
        user_name:'userData.name',
        user_email:'userData.email',
        user_token:'userData.token',
        user_role:'userData.role',
        session:'session'

      })

    }

  }
</script>