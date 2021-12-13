<template>
  <v-container>
    <v-card>
      <v-card-title class="justify-center">
        <p>Tabla de precios</p>
      </v-card-title>
    </v-card>
    <br>
    <v-card>
      <v-card-text class="justify-center">
        <v-row v-if="loaded">
            <v-col cols="3" v-for="price in prices" :key="price.id">

              <v-sheet
                :elevation="2"
                class="mx-auto pa-2"
                width="100"
              >
                <center>
                <v-text-field
                :label="daysNumber(price.id)"
                  v-model="prices[`${price.id-1}`].price"
                >
                </v-text-field>
                <v-btn
                icon
                color="purple"
                @click="updateDay(price.id)"
                >
                  <v-icon class="icon-color">mdi-content-save</v-icon>
                </v-btn>
                  
                </center>
              </v-sheet>
            </v-col>
        </v-row>
        <v-row v-else>
          <v-col>
            <center>
              Cargando. Espere por favor
            </center>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-snackbar
      v-model="snackbar"
    >
      {{ snackbar_text }}
    </v-snackbar>
  </v-container>
</template>
<script>

  
  import {API,validateSession} from '../utils/functions.js';
  import {mapFields} from 'vuex-map-fields';

  export default {

    name:'Prices',

    data:()=>({
      loaded:false,
      prices:[],
      snackbar_text:'',
      snackbar:false,

    }),

    mounted(){

      validateSession(this);
      this.getData();
          
    },
    methods:{
      updateDay(id){
        
        this.axios.post(API('update_price'),{
          id:id,
          price:this.prices[id-1].price
        })
        .then(response=>{
          this.snackbar = true;
          if(response.data.status == 1){
            this.snackbar_text = 'Precio modificado con éxito';
          }else{
            this.snackbar_text = 'No se ha modificado el precio';
          }
        })
        .catch(()=>{
          this.snackbar = true;
          this.snackbar_text = 'Ha ocurrido un error inesperado. Contacte con soporte técnico.';
        })

      },
      getData(){

      return this.axios.get(API('prices_data'))

        .then(response=>{

          
          this.prices = response.data;
          this.loaded = true;
        }).catch(e=>{

          console.log(e.response)

        });

      },
      daysNumber(id){
        return id == 32 ? 'Día extra' : `${id}`+' dias'
      }

    },
    computed:{
      ...mapFields({

        user_id:'userData.id',
        user_name:'userData.name',
        user_email:'userData.email',
        user_token:'userData.token',
        user_role:'userData.role',
        session:'session'
        
      }),
    }

  }
</script>