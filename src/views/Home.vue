<template>

  <v-container fluid>


      <v-parallax src="../assets/3.jpg" dark>
        <v-row
        align="center"
        justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <h1 class="display-1 mb-4">
              <span>ELITE PARKING</span>
            </h1>
            <h4 class="subheading">
              <span>
                La mejor solución para aparcar en el Aeropuerto Adolfo Suarez de Madrid, Barajas.
                <br>
                Rapidez, seguridad y compromiso con todos nuestros clientes.
              </span>
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
      <v-row class="pl-5 pr-5 mt-7 mb-7" align="center" justify="center">
        <v-col cols="12" md=6>
          <div class="home" style="background:red">
            <v-card elevation="2" outlined color="white">
              <v-card-title  class="d-flex justify-center">
                Haga su reserva
              </v-card-title>
              <v-card-text>
                <v-form ref="form">
                  <v-row>
                    <v-col cols="12" sm="4">

                      <v-menu ref="date_one" v-model="date_one" :close-on-content-click="false" :return-value.sync="first_date_input" transition="scale-transition" offset-y min-width="290px">

                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field v-model="first_date_input" label="Fecha de recogida" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="first_date_input" no-title scrollable locale="es-es">
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="date_one = false"> Cancel </v-btn>
                          <v-btn text color="primary" @click="$refs.date_one.save(first_date_input)">
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                        
                    <v-col cols="12" sm="2">
                      <v-select
                        v-model="reception_hour"
                        :items="hours"
                        label="Hora"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="2">
                      <v-select
                        v-model="reception_minute"
                        :items="minutes"
                        label="Minutos"
                        required
                      ></v-select>

                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-select
                        v-model="reception_terminal"
                        :items="reception_terminals"
                        label="Terminal de salida"
                        required
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="4">

                      <v-menu ref="date_two" v-model="date_two" :close-on-content-click="false" :return-value.sync="second_date_input" transition="scale-transition" offset-y min-width="290px">

                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field v-model="second_date_input" label="Fecha de devolución" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="second_date_input" no-title scrollable locale="es-es">
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="date_two = false"> Cancel </v-btn>
                          <v-btn text color="primary" @click="$refs.date_two.save(second_date_input)">
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" sm="2">
                      <v-select
                        v-model="devolution_hour"
                        :items="hours"
                        label="Hora"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="2">
                      <v-select
                        v-model="devolution_minute"
                        :items="minutes"
                        label="Minutos"
                        required
                      ></v-select>

                    </v-col>
                    <v-col cols="12" sm="4">
                    <v-select
                      v-model="devolution_terminal"
                      :items="devolution_terminals"
                      label="Terminal de llegada"
                      required
                    ></v-select>
                    </v-col>  
                  </v-row>

                </v-form>
                <div v-if="inputs_are_setted">
                  <center>

                    <p :class="[dates_are_correctly_setted ? 'green--text': 'red--text']">

                      {{dates_setted_text}}
                        
                    </p>
                  </center>
                </div>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                  <v-btn
                    @click="makeReservation"
                    color="purple"
                    depressed
                    elevation="1"
                    outlined
                  >Reservar</v-btn>
              </v-card-actions>

          </v-card>
          </div>
          
        </v-col>
        <v-col cols="12" md=6 class="text">
          <center>
              <span class="title">
              <b>
                Contamos con un equipo de trabajo, que estará disponible para ti cuando más lo necesites.
              </b>

              </span>
          </center>
            <br><br>
            <b>¿Por qué elegirnos?</b>
            <ul>
              <li>Cercanía del Aeropuerto Adolfo Suarez Madrid, Barajas.</li>
              <li>Precios competitivos.</li>
              <li>Rapidez y seguridad.</li>
              <li>Cuidado del coche las 24 h del dia, 365 dias del año.</li>
              <li>Servicio con máximas garantías para su seguridad y la de su vehículo.</li>
            </ul>
        </v-col>
        
      </v-row>
        
      <v-parallax src="../assets/2.jpg">
        <v-row
        align="center"
        justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <p class="montserrat-title">
              <span>
                Elite Parking es una empresa que nace para realizar servicios de corta y larga estancia en el Aeropuerto Adolfo Suarez Madrid, Barajas. Permitiendo al viajero aparcar de una manera eficiente y cómoda.
                
              </span>
            </p>
          </v-col>
        </v-row>
      </v-parallax>
      
      <v-row class="pl-5 pr-5 mt-7 mb-7" align="center" justify="center">
        <v-col cols="12">
          
          <center>
            <div class="title text">
              
              <span>FUNCIONAMOS EN 3 SENCILLOS PASOS</span>

            </div>
          </center>
        </v-col>
      </v-row>
      <v-row class="pl-5 pr-5 mt-7 mb-7" align="center" justify="center">
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>
              <center>
                Realiza tu reserva. Puede ser a través de la web o por teléfono.
                
                <v-img
                  class="shrink mr-2"
                  contain
                  src="@/assets/computadora.png"
                  transition="scale-transition"
                  
                  height="180"
                />
              </center>
              
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12" sm="12" md="4"
        >
          <v-card>
            <v-card-text>
              <center>
                Recogemos su coche directamente en la salida de la terminal (T1, T2, T4).

                <v-img
                  class="shrink mr-2"
                  contain
                  src="@/assets/valet_in.png"
                  transition="scale-transition"
                  height="180"
                />
              </center>

            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12" sm="12" md="4"
        >
          <v-card>
            <v-card-text>
              <center>
                A su regreso estará un conductor esperandolo en la salida con su coche.

                <v-img
                  class="shrink mr-2"
                  contain
                  src="@/assets/valet_out.png"
                  transition="scale-transition"
                  height="180"
                />                
                
              </center>

            </v-card-text>
          </v-card>
          
        </v-col>
      </v-row>
      <v-row id="encuentranos">
        <v-col cols="12">
          <div class="title text">
            <center>
              <b>Encuentranos</b>
              
            </center>
          </div>
        </v-col>
      </v-row>
      <v-row class="pl-5 pr-5 mt-7 mb-7" align="center" justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-text>
                
              <center>
                <b>¿Alguna duda o solicitud?</b>
                <br><br>
                
                <v-row>
                    <v-col
                      cols="6"
                      align="right"
                    >
                      Correo email <v-icon class="icon-color">mdi-email</v-icon>
                    </v-col>
                    <v-col
                      cols="6"
                      align="left"
                      style="margin-left:0"
                    >
                      <a class="text" href="mailto:contacto@eliteparking.es">contacto@eliteparking.es</a>
                      
                    </v-col>
                    <v-col
                      cols="6"
                      align="right"
                    >
                      Correo reservas <v-icon class="icon-color">mdi-email</v-icon>
                    </v-col>
                    <v-col
                      cols="6"
                      align="left"
                      style="margin-left:0"
                    >
                      <a class="text" href="mailto:reservas@eliteparking.es">reservas@eliteparking.es</a>
                      
                    </v-col>
                    <v-col
                      cols="6"
                      align="right"
                    >
                      Reclamaciones <v-icon class="icon-color">mdi-email</v-icon>
                    </v-col>
                    <v-col
                      cols="6"
                      align="left"
                      style="margin-left:0"
                    >
                      <a class="text" href="mailto:reclamaciones@eliteparking.es">reclamaciones@eliteparking.es</a>
                      
                    </v-col>
                     
                </v-row>
                
                <br>
                
                <b>Teléfonos de contacto:</b>
                
                <br><br>
                
                <v-row>
                  <v-col
                    cols="6"
                    align="right"
                  >
                    
                    Reservas <v-icon class="icon-color">mdi-phone</v-icon>
                  </v-col>
                  <v-col
                    cols="6"
                    align="left"
                  >
                    +34 910 94 57 30
                  </v-col>
                  <v-col
                    cols="6"
                    align="right"
                  >
                    
                    Asistencia en aeropuerto <v-icon class="icon-color">mdi-phone</v-icon>
                  </v-col>
                  <v-col
                    cols="6"
                    align="left"
                  >
                    +34 623 16 46 56
                  </v-col>
                </v-row>
                
                <br>

                <b><v-icon class="icon-color">mdi-map-marker</v-icon>Calle Gumercindo Llorente 77, Madrid, 28022 de Madrid</b>
                <br><br>

                <a 
                  @click="$router.push('/politicas_de_privacidad')"

                >Políticas de privacidad</a> <br>
                <a 
                  @click="$router.push('/politica_de_cookies')"

                >Política de cookies</a> <br>
                <a
                  text
                  @click="$router.push('/terminos_y_condiciones')"
                >Condiciones generales de contrato y uso del servicio</a> <br>
                
              </center>
            </v-card-text>
          </v-card>

        </v-col>
        <v-col
        cols="12" sm="6" class="d-flex justify-center"
        >

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.7533112938386!2d-3.5978201853163623!3d40.47535455999716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422e20f8f29515%3A0x51a2a2186f4cfb70!2sCalle%20de%20la%20Playa%20de%20Riazor%2C%2014%2C%2028042%20Madrid%2C%20Espa%C3%B1a!5e1!3m2!1ses!2sve!4v1609271992500!5m2!1ses!2sve" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </v-col>
      </v-row>
      <v-snackbar
        v-model="snackbar"
      >
        {{ snackbar_text }}
    </v-snackbar>

  </v-container>
</template>
<script>


  
  import {API} from '../utils/functions.js';
  

  export default {

    name: 'Home',


    data:()=>({
      reception_hour:null,
      reception_minute:null,
      devolution_hour:null,
      devolution_minute:null,

      hours: ['00','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23',],
      minutes: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59',],
      
      snackbar: false,

      snackbar_text: '',

      dates_are_correctly_setted: null,

      first_date_input: new Date().toISOString().substr(0, 10),

      second_date_input: new Date().toISOString().substr(0, 10),

      dates_setted_text: '',
      price: 0,
      prices: {},

      first_time_input: null,
      second_time_input: null,

      date_one:false,
      time_one:false,

      date_two:false,
      time_two:false,
      
      reception_terminals:[],
      reception_terminal:null,

      devolution_terminals:[],
      devolution_terminal:null,


    }),
    mounted(){

      if(this.$route.hash != ""){
        
        this.$vuetify.goTo(this.$route.hash);
      }

      this.axios.get(API('home_data'))

      .then(response =>{

        let arr = Object.values(response.data.terminals);
        
        this.reception_terminals = arr;

        this.devolution_terminals = arr;

        this.prices = response.data.prices;

        console.log(response.data);
        
      })
      .catch(e=>{

        console.log(e.response);
        
        this.reception_terminals = [
          {text:'Terminal 1', value:1},
          {text:'Terminal 2', value:2},
          {text:'Terminal 3', value:3},
        ];

        this.devolution_terminals = [
          {text:'Terminal 1', value:1},
          {text:'Terminal 2', value:2},
          {text:'Terminal 3', value:3},
        ];

      });

    
    },
    computed:{
      inputs_are_setted(){
        
        let are_setted = this.first_date_input != null &&
          this.second_date_input != null &&

          this.reception_hour != null &&
          this.reception_minute != null &&
          this.devolution_hour != null &&
          this.devolution_minute != null;
          
          if(are_setted){

            if(this.validateDates()){


              if(this.reception_terminal != null && this.devolution_terminal != null){

                this.setInputCorrectlySetted(true);
                
              }else{

                this.setInputCorrectlySetted(false);
                
              }

            }else{

              this.showError();
              this.setInputCorrectlySetted(false);

            }


          }
        return are_setted;
      },
    },
    methods:{
      validateDates(){

        let date_one = new Date(this.first_date_input+'T'+this.reception_hour+':'+this.reception_minute);
        let date_two = new Date(this.second_date_input+'T'+this.devolution_hour+':'+this.devolution_minute);
        let today_date = new Date();
        if(!isNaN(date_one.getTime())
          && !isNaN(date_two.getTime())
          && date_two.getTime() > date_one.getTime()
          && date_one.getTime() >= today_date.getTime()){
          let diff_time = Math.abs(date_two - date_one);  
          let diff_days = Math.ceil(diff_time / (1000 * 60 * 60 * 24));
          this.showPrice(diff_days);

         return true;

        }else{

         return false;

        }
      },
      setInputCorrectlySetted(bool){
        this.dates_are_correctly_setted = bool;

      },
      showPrice(days){
        
        if(days > 31){

          let thirty_one_days_price = parseFloat(this.prices[31]);
          let days_out_of_month_price = (days - 31) * this.prices[32];
          this.price = thirty_one_days_price + days_out_of_month_price;
          this.dates_setted_text = this.price +' €';

        }else{

          this.price = (this.prices[days]);
          this.dates_setted_text = (this.prices[days]) +' €';

        }
      },
      showError(){
        if(this.validateDates()){

          this.dates_setted_text = 'Los terminales no estan llenados correctamente';
        }else{

          this.dates_setted_text = 'La hora y fecha de recodiga debe ser posterior a la hora y fecha actual. La hora y fecha de devolución debe ser posterior a la hora y fecha de recogida.';
        }
      },
      makeReservation(){

        if(this.validateDates() && this.dates_are_correctly_setted && this.reception_terminal != null && this.devolution_terminal != null){
          
          this.$router.push('reservacion?date_one='+this.first_date_input+'&date_two='+this.second_date_input+'&time_one='+this.reception_hour+':'+this.reception_minute+'&time_two='+this.devolution_hour+':'+this.devolution_minute+'&reception_terminal='+this.reception_terminal+'&devolution_terminal='+this.devolution_terminal);

        }else{
          this.showError();
          this.dates_are_correctly_setted = false;
          this.snackbar = true;
          this.snackbar_text = 'Los datos de reservación no estan llenados correctamente.';
        }
        console.log(this.$refs.form)
        
      }
    }
  }
</script>
<style>
  .icon-color{

    color:#803588 !important;
    
  }
  
</style>