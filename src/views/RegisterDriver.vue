<template>
  <v-container>
    <v-row class="pa-10">

      <v-col cols="12" sm="8" offset-sm="2">

        <v-card>
          <v-card-title>Registrar conductor</v-card-title>
          <v-row>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Nombre de usuario"
                      v-model="username"
                    ></v-text-field>
                  </v-col>
                
                  <v-col cols="12" sm="6">
                    
                    <v-text-field
                      label="Email"
                      v-model="email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field

                      label="Contraseña"
                      v-model="password"
                    ></v-text-field>
                  </v-col>

                </v-row>
                <v-row>
                  <v-col cols="12" sm="4" offset-sm="4">

                    <v-btn
                      block
                      color="#4A148C"
                      class="white--text"
                      @click="register">
                      <center>
                        
                        Registrar
                      </center>
                    </v-btn>
                    
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-row>
        </v-card>
        
      </v-col>
      
    </v-row>
    <v-snackbar
      v-model="snackbar">

      {{ snackbar_text }}
    </v-snackbar>
  </v-container>
</template>
<script>
  import {API} from '../utils/functions.js';
  

  export default {
    name:'register_driver',
    data:()=>({
      username:'',
      email:'',
      snackbar:false,
      snackbar_text:'',
      password:'',
    }),
    mounted(){

    },
    computed:{

    },
    methods:{
      register(){

        
        this.axios.post(API('register_driver'),{

          username : this.username,
          email : this.email,
          password : this.password

        })
        .then((response)=>{
          console.log(response)
          this.snackbar = true;
          this.snackbar_text = 'Conductor registrado correctamente';
          
        })
        .catch(e=>{
          console.log(e.response.data.message);
          this.snackbar = true;
          this.snackbar_text = 'El nombre de usuario o correo electrónico no son válidos';
        });
      },
    }
  }
</script>