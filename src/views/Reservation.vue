<template>
  <v-container>
    
    <v-row>
      <v-col xs="12">
        <v-card>
          <v-card-title class="d-flex justify-center">
            
            Completa tu reserva

          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12">
        <v-form ref="form">
          
          <v-stepper
            v-model="e6"
            vertical
          >
            <v-stepper-step
              :rules="[stepOneValidations,() => valid_dates]"
              :complete="e6 > 1"
              step="1"
            >
              Recogida y devolución

            </v-stepper-step>

            <v-stepper-content step="1">
              <v-card
                color="grey lighten-3"
                class="pa-5 justify-center"
                
              >
                <v-row>
                  <v-col v-if="!stepOneValidations()" cols="12" sm="12" class="red--text">
                      La fecha y hora de recogida no pueden ser anteriores al dia y hora actuales.<br>Y la fecha de devolución no puede ser igual o anterior a la fecha y hora de recogida
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-menu
                      ref="date_one"
                      v-model="date_one"
                      :close-on-content-click="false"
                      :return-value.sync="first_date_input"
                      transition="scale-transition"
                      offset-y
                      min-width="290px">

                      <template
                        v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="first_date_input"
                          label="Fecha de recogida"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>

                      <v-date-picker v-model="first_date_input" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary"
                          @click="date_one = false"> Cancel </v-btn>
                        <v-btn text color="primary"
                        @click="$refs.date_one.save(first_date_input)">
                          OK
                        </v-btn>
                      </v-date-picker>

                    </v-menu>
                  </v-col>
                  <v-col cols="11" sm="5">
                    <v-menu
                      ref="time_one"
                      v-model="time_one"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="first_time_input"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="first_time_input"
                          label="Hora de recogida"
                          prepend-icon="mdi-clock-time-four-outline"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        format="24hr"
                        v-if="time_one"
                        v-model="first_time_input"
                        full-width
                        @click:minute="$refs.time_one.save(first_time_input)"
                      ></v-time-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="6">

                    <v-menu ref="date_two" v-model="date_two" :close-on-content-click="false" :return-value.sync="second_date_input" transition="scale-transition" offset-y min-width="290px">

                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="second_date_input" label="Fecha de devolución" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="second_date_input" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="date_two = false"> Cancel </v-btn>
                        <v-btn text color="primary" @click="$refs.date_two.save(second_date_input)">
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="11" sm="5">
                    <v-menu
                      ref="time_two"
                      v-model="time_two"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="second_time_input"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="second_time_input"
                          label="Hora de devolución"
                          prepend-icon="mdi-clock-time-four-outline"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        format="24hr"
                        v-if="time_two"
                        v-model="second_time_input"
                        full-width
                        @click:minute="$refs.time_two.save(second_time_input)"
                      ></v-time-picker>
                    </v-menu>
                  </v-col>
                </v-row>

              </v-card>
              <v-btn
                color="primary"
                @click="e6 = 2"
              >
                Continuar
              </v-btn>
            </v-stepper-content>

            <v-stepper-step
              :rules="[stepTwoValidations]"
              :complete="e6 > 2"
              step="2"
            >
              Datos del cliente
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-card
                color="grey lighten-3"
                class="pa-10"
              >
                <v-row>
                  <v-col
                    cols="12"
                    sm="12" md="4"
                  >
                    
                    <v-text-field
                    ref="client_full_name"
                    v-model="client_full_name"
                    :rules="[
                      required(client_full_name),
                      validateFullName()]"
                    label="Nombre"
                    required
                  ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12" md="4"
                  >
                    <v-text-field
                      ref="client_phone"
                      v-model="client_phone"
                      :rules="[
                        required(client_phone),
                        validateTelephone()
                      ]"
                      label="Teléfono"
                      required
                    >
                    
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12" md="4"
                  >
                    <v-text-field
                      ref="client_email"
                      v-model="client_email"
                      :rules="[
                        required(client_email),
                        validateEmail(),
                        ]"
                      label="Email"
                      required
                    >
                    
                    </v-text-field>
                  </v-col>
                  
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12" md="6"
                  >
                    <v-select
                      v-model="document_type"
                      :items="document_types"
                      :rules="[
                        required(document_type)
                      ]"
                      label="Tipo de documento"
                      required
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      ref="client_document_number"
                      v-model="client_document_number"
                      :rules="[
                        required(client_document_number),
                        validateDocumentNumber(),
                      ]"
                      label="Número de documento"
                      required
                    >
                      
                    </v-text-field>
                  </v-col>
                </v-row>
              
              </v-card>
              <v-btn color="lightgrey" @click="e6 = 1">
                Atrás
              </v-btn>
              <v-btn
                color="primary"
                @click="e6 = 3"
              >
                Continuar
              </v-btn>
            </v-stepper-content>

            <v-stepper-step
              :rules="[stepThreeValidations,validateColor]"
              :complete="e6 > 3"
              step="3"
            >
           Datos del vehiculo
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-card
                color="grey lighten-3"
                class="pa-10"
              >
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      ref="plaque"
                      v-model="plaque"
                      :rules="[
                        required(plaque),
                        validatePlaque()
                      ]"
                      label="Matrícula"
                      required
                    >
                      
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      ref="brand"
                      v-model="brand"
                      :rules="[
                        required(brand),
                        validateBrand()
                        ]"
                      label="Marca"
                      required
                    >
                      
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      ref="model"
                      v-model="model"
                      :rules="[
                        required(model),
                        validateModel()
                        ]"
                      label="Modelo"
                      required
                    >
                      
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      ref="color"
                      v-model="color"
                      :rules="[
                        validateColor(),
                        ]"
                      label="Color"
                      required
                    >
                      
                    </v-text-field>
                  </v-col>

                </v-row>
              </v-card>
              <v-btn color="lightgrey" @click="e6 = 2">
                Atrás
              </v-btn>
              <v-btn
                color="primary"
                @click="e6 = 4"
              >
                Continuar
              </v-btn>
            </v-stepper-content>

            <v-stepper-step
            :rules="[stepFourValidations]"
              :complete="e6 > 4"
              step="4">
              Información de reserva
            </v-stepper-step>
            <v-stepper-content step="4">
              <v-card
                color="grey lighten-3"
                class="pa-10"
              >
                <v-row>
                  <v-col
                    cols="12"
                    sm="12" md="4"
                  >
                    <v-select
                      v-model="reception_terminal"
                      :items="reception_terminals"
                      :rules="[
                        required(reception_terminal),
                        validateReceptionTerminal()
                        ]"
                      label="Terminal de salida"
                      required
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12" md="4"
                  >
                    <v-select
                      v-model="devolution_terminal"
                      :items="devolution_terminals"
                      :rules="[
                        required(devolution_terminal),
                        validateDevolutionTerminal()

                        ]"
                      label="Terminal de llegada"
                      required
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12" md="4"
                  >
                  <v-switch
                    v-model="invoice"
                    :label="invoiceLabel"
                  ></v-switch>
                  </v-col>
                     
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12" md="4"
                  >
                    <v-text-field
                      ref="flight_number"
                      v-model="flight_number"
                      label="N° de vuelo de regreso"
                      required
                    >
                      
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12" md="4"
                  >
                    <v-text-field
                      id="city"
                      ref="city"
                      v-model="city"
                      label="Ciudad de procedencia"
                      :rules="[validateCity]"
                      required
                    >
                      
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12" md="4"
                  >
                    <v-switch
                      v-model="luggage"
                      :label="luggageLabel"
                    ></v-switch>
                  </v-col>
                  
                </v-row>
                <v-row>
                  <v-textarea
                    outlined
                    v-model="observation"
                    name="input-7-4"
                    label="Observaciones"
                  ></v-textarea>
                </v-row>
              </v-card>
              <v-btn color="lightgrey" @click="e6 = 3">
                Atrás
              </v-btn>
              <v-btn
                color="primary"
                @click="e6 = 5"
              >
                Continuar
              </v-btn>
            </v-stepper-content>

            <v-stepper-step step="5">
              Servicios extra disponibles
            </v-stepper-step>
            <v-stepper-content step="5">
              <v-card
                color="grey lighten-3"
                class="pa-10"
              >
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-select
                      label="Servicios extra"
                      v-model="service"
                      :items="services_select"
                    ></v-select>

                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <center>
                      
                      <v-select
                        label="Métodos de pago"
                        v-model="payment_method"
                        :items="payment_methods"
                      ></v-select>
                      <v-img
                        src="@/assets/credit_cards.png"
                        width="160"
                      ></v-img>
                    
                      
                        
                    </center>
                  </v-col>
                  
                  <v-col
                    cols="12"
                  >
                    <v-card>
                      <v-card-text>
                        <v-row>
                          <v-col
                            cols="12"
                            md="12"
                            align="center"
                          >
                            <div v-if="!stepOneValidations()">

                              <span>Fecha de recepción y/o devolución errónea</span>
                            </div>
                            <div v-else>
                              <b>Total a pagar: {{(reservation_price + added_price).toFixed(2)}} €</b>
                              
                            </div>
                            
                          </v-col>
                          
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-col>

                </v-row>
                
              </v-card>
              <v-btn color="lightgrey" @click="e6 = 4">
                Atrás
              </v-btn>
            </v-stepper-content>
            <v-row>
              <v-col class="ml-8 mt-6">
                 <p>Al finalizar su reserva usted indica estar de acuerdo con nuestros <a target="_blank" :href="terms_and_conditions_url">Terminos y condiciones</a>.</p>
                <input id="agree_conditions" type="checkbox" v-model="agree_conditions"> <label for="agree_conditions">Estoy de acuerdo</label>
              </v-col>
            </v-row>
          </v-stepper>
        </v-form>
         

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          color="primary"
          @click="send"
          :disabled="submit_disabled"
        >
          Finalizar reserva
        </v-btn>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="snackbar"
    >
      {{ snackbar_text }}
    </v-snackbar>
    <form hidden id="tpv_form" action="https://sis.redsys.es/sis/realizarPago" method="post">

      <input name="Ds_SignatureVersion" id="ds_signature_version">
      <input name="Ds_MerchantParameters" id="ds_merchant_parameters">
      <input name="Ds_Signature" id="ds_signature">
      
    </form>
  </v-container>
</template>
<script>
  
  import {
    validateLyricsAndNumbers,
    validateLyricsNumbersAndSpaces,
    validateOnlyLyrics,
    validatePhone,
    existsInArray,
    validatePlaque,
    validateEmail
  } from '../utils/validations.js';

  import {API,SPA} from '../utils/functions.js';

  import {mapFields} from 'vuex-map-fields';

  export default {

    name: 'Reservation',

    async mounted(){
      
      this.$vuetify.goTo(0);
      this.$gtag.event('Formulario', { method: 'Google' })

      await this.getServerData();
      await this.getServerInfo();

      this.url_date_one = new Date(this.$route.query.date_one+'T'+this.$route.query.time_one);
      this.url_date_two = new Date(this.$route.query.date_two+'T'+this.$route.query.time_two);

      this.today_date = new Date();
      
      this.valid_url = this.validateDates(this.url_date_one,this.url_date_two,this.today_date)
        && this.validateTerminals(this.$route.query.reception_terminal,this.$route.query.devolution_terminal);
        
      if(this.valid_url){
        
        this.first_date_input = this.$route.query.date_one;
        this.first_time_input = this.$route.query.time_one;

        this.second_date_input = this.$route.query.date_two;
        this.second_time_input = this.$route.query.time_two;

        this.reception_terminal = this.reception_terminals[this.$route.query.reception_terminal-1].value;
        this.devolution_terminal = this.devolution_terminals[this.$route.query.devolution_terminal-1].value;
        
      }else{
        
        this.$router.push('/');
      }

      this.setTerminals();

    },

    methods:{
      getServerData(){

      
        return Promise.all([

          this.setTerminals(),
          this.setDocumentTypes(),
          this.setServices(),
          this.getServerInfo()

        ]);
      },
      //Method created for update this component programming later
      getServerInfo(){

        //request the selects's data for the user to choose 
        return this.axios.get(API('reservations_data'))

        .then(response =>{

          //fill payment methods select (step 5)
          this.payment_methods = response.data.payment_methods;

          //The payment methods selected by default
          this.payment_method = 2;

          /*
            The software calculate the reservation price automatically.
            Data is given from the server. Doesn't matter if this array
            is empty for testing

          */
          this.prices = response.data.prices;

          //Fill extra services select (step 5)
          this.services_select = response.data.services;

          //Add first option at services select
          this.services_select.unshift({

            text:'Ninguno',
            value:null,

          });

        })
        .catch(e=>{
          //Fill for test
          this.payment_methods = [
            {text:'Metodo 1',value:1},
            {text:'Metodo 2',value:2},
            {text:'Metodo 3',value:3},
            {text:'Metodo 4',value:4},
            {text:'Metodo 5',value:5},
            {text:'Metodo 6',value:6},
          ];
          //Fill for test
          this.prices = [
          ];
          //Fill for test
          this.services_select = [
            {text:'Servicio 1',value:1},
            {text:'Servicio 2',value:2},
            {text:'Servicio 3',value:3},
            {text:'Servicio 4',value:4},
            {text:'Servicio 5',value:5},
            {text:'Servicio 6',value:6},
          ];
          this.services_select.unshift({

            text:'Ninguno',
            value:null,

          });
          console.log(e.response)

        });
      },
      
      setTerminals(){


        return this.axios.get(API('terminals'))

        .then(response=>{

          let arr = Object.values(response.data);

          //fill devolution terminals select (step 4)
          this.devolution_terminals = arr;

          //fill reception terminals select (step 4)
          this.reception_terminals = arr;

        }).catch(e=>{

          console.log(e);
          //Fill for test
          this.devolution_terminals = [
            {text:'Terminal 1', value:1},
            {text:'Terminal 2', value:2},
            {text:'Terminal 3', value:3},
          ];

          //Fill for test
          this.reception_terminals = [
            {text:'Terminal 1', value:1},
            {text:'Terminal 2', value:2},
            {text:'Terminal 3', value:3},
          ];

        });
      },
      setDocumentTypes(){

        return this.axios.get(API('identification_types'))

        .then(response=>{

          let arr = Object.values(response.data);

          //Fill document types select
          this.document_types = arr;

        }).catch(e=>{

          //Fill for test
          this.document_types = [
            {text:'Type 1',value:1},
            {text:'Type 2',value:2},
            {text:'Type 3',value:3},
          ];
          console.log(e);

        });
      },
      setServices(){

        return this.axios.get(API('services'))

        .then(response=>{

          let arr = Object.values(response.data);

          this.services_info = arr;
          

        }).catch(e=>{
          
          this.services_info = [];
          console.log(e);

        });
      },

      send(){

        this.today_date = new Date();
        this.valid_dates = this.stepOneValidations();
        
        if(this.valid_dates && this.$refs.form.validate()){

          if(this.agree_conditions){
            this.submit_disabled = true;
            this.snackbar = true;
            this.snackbar_text = "Solicitud enviada. Por favor espere.";

            
            this.axios.post(API('save_reservation'),{

              first_date_input : this.first_date_input,
              first_time_input : this.first_time_input,
              second_date_input : this.second_date_input,
              second_time_input : this.second_time_input,

              client_full_name : this.client_full_name,
              client_phone : this.client_phone,
              client_email : this.client_email,
              client_document_number : this.client_document_number,
              plaque : this.plaque,
              brand : this.brand,
              model : this.model,
              color : this.color,
              invoice : this.invoice,
              luggage : this.luggage,
              observation : this.observation,
              flight_number : this.flight_number,
              document_type: this.document_type,
              reception_terminal: this.reception_terminal,
              devolution_terminal: this.devolution_terminal,
              services: this.service,
              city: this.city,
              payment_method: this.payment_method,
            }).then(response =>{

              console.log(response.data)
              
                if(response.data.status == 1){

                  this.stored_brand = this.brand;

                  this.stored_model = this.model;

                  this.stored_plaque = this.plaque;

                  this.stored_reception_date = this.first_date_input+' '+this.first_time_input;

                  this.stored_devolution_date = this.second_date_input+' '+this.second_time_input;
                  
                  this.stored_reception_terminal = this.reception_terminal;

                  this.stored_devolution_terminal = this.devolution_terminal;

                  this.stored_reservation_setted = true;

                  this.stored_id = response.data.reservation.id;

                  this.stored_price = (this.reservation_price + this.added_price).toFixed(2);

                  this.stored_extra_service = this.service == null ? 'No seleciconado' : this.services_info[this.service -1].name;
                  
                  if(this.payment_method == "5"){
                    
                    let form = document.getElementById('tpv_form');
                    form['ds_signature_version'].value = response.data.ds_signature_version;
                    form['ds_merchant_parameters'].value = response.data.ds_merchant_parameters;
                    form['ds_signature'].value = response.data.ds_signature;
                    //form.submit();
                  }else{

                    this.$router.push('/confirmacion_reservacion');

                  }

                }else{
                  this.submit_disabled = false;
                  //this.snackbar_text = Object.values(response.data.messages[0])[0][0];
                  this.snackbar = true;
                  
                }
            }).catch((e) => {
              console.log(e.response)
              this.snackbar_text = "Ha ocurrido un error. Por favor intentelo de nuevo mas tarde";
              this.snackbar = true;
            });
              this.submit_disabled = false;

          }else{

            this.snackbar_text = 'Debe estar de acuerdo con los términos y condiciones para finalizar';
            this.snackbar = true;

          }

        }else{
          this.submit_disabled = false;
          this.snackbar_text = 'Uno o varios campos no estan llenados correctamente';
          this.snackbar = true;
          

        }
      },
      _existsInTerminals(value, terminals){

        for(let i in terminals){

          if(terminals[i].value == value){
            
            return true;

          }

        }

        return false;

      },
      validateTerminals(terminal_one,terminal_two){

        
        if(this._existsInTerminals(terminal_one,this.reception_terminals) && this._existsInTerminals(terminal_two,this.devolution_terminals)){


          this.reception_terminal = terminal_one;

          this.devolution_terminal = terminal_two;

          return true;


        }else{
          return false;
        }


      },
      validateDates(date_one, date_two, today_date){

        this.valid_dates = !isNaN(date_one.getTime())
          && !isNaN(date_two.getTime())
          && date_two.getTime() > date_one.getTime()
          && date_one.getTime() >= today_date.getTime();

        return this.valid_dates

      },
      stepOneValidations(){

        let date_one = new Date(this.first_date_input+'T'+this.first_time_input);
        let date_two = new Date(this.second_date_input+'T'+this.second_time_input);
        return this.validateDates(date_one,date_two,this.today_date);
      },
      stepTwoValidations(){


        let full_name = typeof this.validateFullName() === 'string' ? false : true;

        let telephone = typeof this.validateTelephone() === 'string' ? false : true;

        let email = typeof this.validateEmail() === 'string' ? false : true;

        let document_type = typeof existsInArray(this.document_type,this.document_types);

        let document_number = typeof this.validateDocumentNumber() === 'string' ? false : true;

        return (!!this.client_full_name && full_name)
        && (!!this.client_phone && telephone)
        && (!!this.client_email && email)
        && (!!this.document_type && document_type)
        && (!!this.client_document_number && document_number);

      },
      stepThreeValidations(){

        let plaque = typeof this.validatePlaque() === 'string' ? false : true;

        let brand = typeof this.validateBrand() === 'string' ? false : true;

        let model = typeof this.validateModel() === 'string' ? false : true;

        let color = typeof this.validateColor() === 'string' ? false : true;
        
        return (!!this.plaque && plaque) 
        && (!!this.brand && brand)
        && (!!this.model && model)
        && (this.color == null || color);
      },

      stepFourValidations(){

        let reception_terminal = typeof this.validateReceptionTerminal() === 'string' ? false : true;

        let devolution_terminal = typeof this.validateDevolutionTerminal() === 'string' ? false : true;

        let flight_number = typeof this.validateFlightNumber() === 'string' ? false : true;

        let city = typeof this.validateCity() === 'string' ? false : true;
        
        return (!!this.reception_terminal && reception_terminal)

        && (!!this.devolution_terminal && devolution_terminal)

        && (flight_number)

        && (city);


      },
      validatePlaque(){

        return validatePlaque(this.plaque) || 'La Matrícula no tiene un formato válido';

      },
      validateBrand(){

        return validateLyricsNumbersAndSpaces(this.brand)  || 'La marca debe contener solo letras y números';

      },
      validateModel(){

        return validateLyricsNumbersAndSpaces(this.model) || 'El modelo debe contener solo letras y números';
      },
      setNullable(value,response){

        if(value == null || value == ''){
          return true;
        }else{
          return response;
        }
        
      },
      validateColor(){
        
        return this.setNullable(this.color,(validateOnlyLyrics(this.color) || 'El color debe contener solo letras'));

      },

      validateFlightNumber(){

        let patt = /^[\w- ]+$/;
        return this.setNullable(this.flight_number, patt.test(this.flight_number) || 'El número de vuelo no es válido');

      },

      validateFullName(){

        return validateOnlyLyrics(this.client_full_name) || 'Este campo debe tener solo letras y espacios';
        
      },
      validateTelephone(){

        return validatePhone(this.client_phone) || 'Este campo debe contener solo números, paréntesis, y/o el símbolo +.';
        
      },
      validateEmail(){

        return validateEmail(this.client_email) || 'El email ingresado no es valido. No debe contener espacios.';
        
      },
      validateDocumentNumber(){

        return validateLyricsAndNumbers(this.client_document_number) || 'Este campo debe contener solo números y letras';
        
      },

      validateReceptionTerminal(){

        return this._existsInTerminals(this.reception_terminal,this.reception_terminals) || 'El terminal seleciconado no es válido';

      },
      validateDevolutionTerminal(){

        return this._existsInTerminals(this.devolution_terminal,this.devolution_terminals) || 'El terminal seleciconado no es válido';

      },
      validateCity(){

        return this.setNullable(this.city, (validateOnlyLyrics(this.city) || 'La ciudad escrita tiene caracteres inválidos') );

      },

      required(data){

        return !!data || 'Este campo es obligatorio'
      },
      
    },
    computed:{

            
      added_price(){
        
        let result = this.service == null ? 0 : this.services_info[this.service-1].price;
        
        result = parseFloat(result);
        
        return result;

      },
      terms_and_conditions_url(){
        return SPA('terminos_de_uso')
      },
      reservation_price(){
        let date_one = new Date(this.first_date_input+'T'+this.first_time_input);
        let date_two = new Date(this.second_date_input+'T'+this.second_time_input);
        let num_days = Math.ceil(Math.abs(date_two - date_one) / (1000 * 60 * 60 * 24));
        let result = 0;
        if(num_days > 31){
          result = parseFloat(this.prices[30]) + ((num_days - 31)*this.prices[32]);
          
          return result;

//          this.dates_setted_text = this.price +' €';

        }else{
          result = parseFloat(this.prices[num_days]);
          
          return result;
  //        this.dates_setted_text = (this.prices[days]) +' €';

        }

      },
      invoiceLabel(){
        return `¿Requiere factura?: ${this.invoice ? 'Si':'No'}`;
      },
      luggageLabel(){
        return `¿Factura equipaje?: ${this.luggage ? 'Si':'No'}`;
      },
    ...mapFields({

        stored_reservation_setted:'confirmed_reservation.confirmed_reservation_setted',
        stored_id:'confirmed_reservation.id',
        stored_brand:'confirmed_reservation.brand',
        stored_model:'confirmed_reservation.model',
        stored_plaque:'confirmed_reservation.plaque',
        stored_reception_date:'confirmed_reservation.reception_date',
        stored_devolution_date:'confirmed_reservation.devolution_date',
        stored_reception_terminal:'confirmed_reservation.reception_terminal',
        stored_devolution_terminal:'confirmed_reservation.devolution_terminal',
        stored_extra_service:'confirmed_reservation.extra_service',
        stored_price:'confirmed_reservation.price',
      

    }),

    },
    data: ()=>({
      agree_conditions:false,
      submit_disabled:false,
      snackbar:false,
      snackbar_text:'init',

      url_date_one:null,
      url_date_two:null,
      num_days:null,
      today_date:null,
      valid_dates:true,
      prices:null,
      payment_methods:[],
      payment_method:null,
      

      //Datos de recogida y devolucion

      first_date_input: null,
      first_time_input: null,

      second_date_input: null,
      second_time_input: null,

      date_one: null,
      date_two: null,

      time_one: null,
      time_two: null,
      
      client_full_name:null,
      client_phone:null,
      client_email:null,

      client_document_number:null,

      plaque:null,
      brand:null,
      model:null,
      color:null,

      invoice:false,
      luggage:false,
      observation:'',
      flight_number:null,

      document_types:[],
      document_type:null,
      
      reception_terminals:[],
      reception_terminal: '',

      devolution_terminals:[],
      devolution_terminal: '',

      service:null,
      services_info:[],
      services_select:[],

      city:null,

      e6:2

    })
  }
</script>