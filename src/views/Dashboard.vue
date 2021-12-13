<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="10" offset-sm="1"
      >
        <v-data-table

            :headers="headers"

            :items="desserts"
            :item-class="changeColor"

            :loading="loading"

            :server-items-length="totalDesserts"

            class="elevation-1"

            :options.sync="options"
          >
          <template v-slot:top>
            <v-toolbar
              flat
            >
              <v-toolbar-title>Reservaciones</v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-text-field

                label="Buscar"
                v-model="search"
                @keyup="getReservations"
              >
              </v-text-field>
              <v-spacer></v-spacer>
              <v-dialog
                v-model="dialog"
                max-width="500px"
              >
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>

                        <v-row>
                          
                          <v-col
                            cols="12"
                          >
                            <v-expansion-panels>
                              <v-expansion-panel>
                                <v-expansion-panel-header>
                                  <p><b>Cliente:</b> {{editedItem.client}}</p>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  <v-row>
                                    <v-col
                                      cols="12"
                                      md="6"
                                    >

                                      <v-text-field
                                        v-model="editedItem.client"
                                        label="Cliente"
                                      ></v-text-field>

                                    </v-col>
                                    <v-col
                                      cols="12"
                                      md="6"
                                    >
                                      <v-text-field
                                        v-model="editedItem.phone"
                                        label="Telefono"
                                      ></v-text-field>

                                    </v-col>
                                    <v-col
                                      cols="6"
                                    >
                                      <v-select
                                        
                                        locale="es-es"
                                        :items="identification_types"
                                        v-model="editedItem.identification_type"
                                        label="Tipo de documento"
                                      ></v-select>

                                    </v-col>
                                    <v-col
                                      cols="6"
                                    >
                                      <v-text-field
                                        v-model="editedItem.identification_card"
                                        label="Número de documento"
                                      ></v-text-field>

                                    </v-col>
                                    <v-col
                                      cols="12"
                                    >
                                      <v-text-field
                                        v-model="editedItem.email"
                                        label="Email"
                                      ></v-text-field>

                                    </v-col>
                                    
                                  </v-row>                                  
                                  <v-row>
                                    <v-col>
                                      <center>
                                        <v-btn
                                          outlined
                                          color="purple"
                                          @click="updateClient(1)"
                                        >
                                          Actualizar  
                                        </v-btn>
                                        <v-btn
                                          outlined
                                          color="purple"
                                          @click="updateClient(2)"
                                        >
                                          Guardar nuevo
                                        </v-btn>
                                        
                                      </center>
                                    </v-col>
                                    
                                  </v-row>
                                </v-expansion-panel-content>
                              </v-expansion-panel>
                            </v-expansion-panels>

                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field
                              v-model="editedItem.vehicle"
                              label="Placa vehiculo"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field
                              v-model="editedItem.brand"
                              label="Marca vehiculo"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field
                              v-model="editedItem.model"
                              label="Modelo vehiculo"
                            ></v-text-field>
                          </v-col>
                          
                          
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field
                              v-model="editedItem.vehicle_color"
                              label="Color del vehiculo"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field
                              v-model="editedItem.city"
                              label="Ciudad"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-select

                              v-model="editedItem.reception_terminal"
                              locale="es-es"
                              :items="terminals"
                              label="Terminal de recepción"

                            ></v-select>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-select
                              locale="es-es"
                              :items="terminals"
                              v-model="editedItem.devolution_terminal"

                              label="Terminal de devolución"

                            ></v-select>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="12"
                          >
                            <v-expansion-panels>
                              <v-expansion-panel>
                                <v-expansion-panel-header>
                                  <table>
                                    <tr>
                                      <th>
                                        Reception date
                                      </th>
                                      <th>
                                        Devolution date
                                      </th>
                                    </tr>
                                    <tr>
                                      <td>
                                        {{ editedItem.reception_date }}
                                      </td>
                                      <td>
                                        {{ editedItem.devolution_date }}
                                      </td>
                                    </tr>
                                    
                                  </table>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  <v-row>
                                    <v-col
                                      cols="12"
                                      sm="12"
                                    >
                                      <center>
                                        <b>Cambiar fecha devolución</b>
                                      </center>
                                    </v-col>
                                  </v-row>
                                  <!--v-row>
                                    <v-col
                                      cols="12"
                                      sm="6"
                                    >
                                      <center>
                                        <label>Fecha de recepción</label>
                                        <input type="date" v-model="editedItem.reception_date">
                                        
                                      </center>
                                      
                                    </v-col>
                                    <v-col
                                      cols="12"
                                      sm="6"
                                    >
                                      <center>
                                        <label>Hora de recepcion</label>
                                        <input type="time" v-model="editedItem.reception_time">
                                      </center>
                                      
                                    </v-col>
                                    
                                    
                                  </v-row-->
                                  <v-row>
                                    <v-col
                                      cols="12"
                                      sm="6"
                                    >
                                      <center>
                                        <label>Fecha de devolución</label>
                                        <input type="date" v-model="aux_devolution_date">
                                        
                                      </center>
                                      
                                    </v-col>
                                    <v-col
                                      cols="12"
                                      sm="6"
                                    >
                                      <center>
                                        <label>Hora de devolución</label>
                                        <input type="time" v-model="aux_devolution_time">
                                      </center>
                                      
                                    </v-col>
                                    
                                    
                                  </v-row>
                                  
                                </v-expansion-panel-content>
                              </v-expansion-panel>
                            </v-expansion-panels>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-select
                              :items="bool_select"
                              locale="es-es"
                              v-model="editedItem.has_luggage"
                              label="Tiene equipaje"
                            ></v-select>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-select
                              :items="bool_select"
                              locale="es-es"
                              v-model="editedItem.invoice_required"
                              label="Requiere factura"
                            ></v-select>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-select
                              locale="es-es"
                              v-model="editedItem.receiver_car_driver"
                              :items="drivers"
                              label="Conductor (recepción)"
                              required
                            ></v-select>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-select
                              
                              locale="es-es"
                              v-model="editedItem.devolution_car_driver"
                              :items="drivers"
                              label="Conductor (devolución)"
                              required
                            ></v-select>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field
                              v-model="editedItem.observation"
                              label="Observación"
                            ></v-text-field>
                          </v-col>

                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field
                              v-model="editedItem.flight_number"
                              label="Número de vuelo"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-select
                            v-model="editedItem.payment_method_id"
                            :items="payment_methods"
                            label="Metodo de pago"
                            required
                          ></v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          :sm="6"
                        >
                        
                          <v-select
                            v-model="editedItem.status"
                            :items="reservation_statuses"
                            label="Cambiar estado a"
                            required
                          ></v-select> 
                        </v-col>
                        <v-col
                          cols="12"
                          :sm="12"
                        >
                        
                          <v-select
                            v-model="editedItem.service"
                            :items="services"
                            label="servicios extra"
                            required
                          ></v-select> 
                        </v-col>
                        
                        


                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <p><b>Total a pagar:</b> {{(price + service_price).toFixed(2)}} €</p>
                        </v-col>
                      </v-row>
                      <v-row v-if="((editedItem.payment_method_id == 5))">
                        <v-col cols="12">
                          <v-select
                            v-model="editedItem.paid"
                            :items="paid_statuses"
                            label="Estado de pago TPV"
                          >
                          </v-select>
                        </v-col>
                      </v-row>
                      
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="purple"
                      depressed
                      elevation="1"
                      outlined
                      text
                      @click="close"
                    >
                      Cancelar
                    </v-btn>                   
                    <v-btn
                      color="purple"
                      depressed
                      elevation="1"
                      outlined
                      text
                      @click="exportReservation(editedItem.id)"
                    >
                      Imprimir
                    </v-btn>
                    <v-btn
                      color="purple"
                      depressed
                      elevation="1"
                      outlined
                      text
                      @click="save"
                    >
                      Guardar
                    </v-btn>
                    
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn
              color="primary"
              @click="getReservations"
            >
              Reset
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      timeout="2000"
    >
      {{ snack_text }}
    </v-snackbar>
  </v-container>
</template>
<script>

import {API_HEADER} from '../utils/consts.js';
import {API,WEB,validateSession,validateGuestResponse} from '../utils/functions.js';
import {mapFields} from 'vuex-map-fields';


export default {
    name:'dashboard',
    data: () => ({
      identification_types: 0,
      price: 0,
      search: '',
      service_price: 0,
      snackbar: false,
      snack_text: '',
      header: API_HEADER,
      user_is_admin: false,
      bool_select: [],
      loading: true,
      totalDesserts: 0,
      options: {},
      reservation_statuses:[
        {text: 'Por buscar', value:0},
        {text: 'En estacionamiento', value:1},
        {text: 'Entregado', value:2},
        {text: 'Cancelar reservación', value:3}
      ],
      paid_statuses:[
        {text:'No pagado',value:0},
        {text:'Pagado',value:1},
      ],
      aux_reception_date:null,
      aux_reception_time:null,
      aux_devolution_date:null,
      aux_devolution_time:null,

      payment_methods:[],

      terminals:[],

      drivers:[],

      services:[],
      
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: '#',
          value: 'id',
        },
        { text: 'Estado', value: 'in_out' },
        { text: 'Fecha de recogida', value: 'reception_date' },
        { text: 'Cliente', value: 'client' },
        { text: 'Ciudad de retorno', value: 'city' },
        { text: 'Vehículo', value: 'vehicle' },
        { text: 'Marca', value: 'brand' },
        { text: 'Modelo', value: 'model' },
        { text: 'Fecha de retorno', value: 'devolution_date' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      //aux_desserts: [],
      editedIndex: -1,
      editedItem: {
        id: null,
        client: null,
        vehicle: null,
        phone: null,
        email: null,
        brand: null,
        model: null,
        vehicle_color: null,
        city: null,
        reception_terminal: null,
        devolution_terminal: null,
        reception_date: null,
        reception_time: null,
        devolution_date: null,
        devolution_time: null,
        has_luggage: null,
        flight_number: null,
        invoice_required: null,
        payment_method: null,
        payment_method_id: null,
        receiver_car_driver: null,
        devolution_car_driver: null,
        status: null,
        service: null,
        price: null,
        observation: null,
        paid: null
      },
      
      defaultItem: {
        status:''
      },
    }),
    async mounted(){

      validateSession(this);

      this.bool_select = [

        {'text':'Si','value':1},

        {'text':'No','value':0},

      ]
      if(this.user_role == 'A'){

        this.selectWidth = '4'
        this.user_is_admin = true

      }else{

        this.selectWidth = '12'

      }
      

    },
    computed: {
      
      formTitle () {

        return 'Editar reservacion';
      },
      ...mapFields({
        user_id:'userData.id',
        user_name:'userData.name',
        user_email:'userData.email',
        user_token:'userData.token',
        user_role:'userData.role',
        session:'session'
      }),


    },
    watch: {
      options:{
        handler(){
          this.getReservations()
        },
        deep:true
      },
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    methods: {
      changeColor(item){
        
        if(item.status == 1){
          return 'out'
        }else if(item.status == 2){
          return 'delivered'
        }else if(item.status == 3){
          return 'cancelled'
        }
        
      },
      updateClient(action){

        return this.axios.post(API('update_reservation_client'),{
          'id':this.editedItem.id,
          'client':this.editedItem.client,
          'phone':this.editedItem.phone,
          'identification_type':this.editedItem.identification_type,
          'identification_card':this.editedItem.identification_card,
          'email':this.editedItem.email,
          'action':action,
        }).then(response=>{
          
          if(response.data == 1){

            alert('Cliente modificado satisfactoriamente');

          }else if(response.data == 2){

            alert('Cliente nuevo asignado');

          }else if(response.data == 3){
            alert('La cédula está siendo utilizada por otra persona');
          }else{

            alert('Ningun dato ha sido modificado');

          }

        }).catch(e => {
          console.log(e.response)
        });

      },

      exportReservation(id){
        let win = window.open(WEB('pdf_reservation/'+id),'_blank');
        win.focus();
        
      },
      getReservations(){
        this.loading = true;

        const { page, itemsPerPage } = this.options

        return this.axios.get(API('reservations_dashboard_data'),{
          params:{
            page:page,
            rows:itemsPerPage,
            search:this.search
          }
        })
        .then(response => {

          this.desserts = response.data.reservations;

          this.payment_methods = response.data.payment_methods;

          this.identification_types = response.data.identification_types;

          this.drivers = response.data.drivers;

          this.drivers.unshift({
            'text':'Ninguno',
            'value':null,
          })

          this.services = response.data.services;

          this.services.unshift({
            'text':'Ninguno',
            'value':null,
          })

          this.terminals = response.data.terminals;
          
          this.loading = false;

          this.totalDesserts = response.data.paginate.total;

        })
        .catch(e => {
          
          validateGuestResponse(e.response.status,this);
          
        })
      },

      editItem (item) {

        this.editedIndex = this.desserts.indexOf(item);

        this.editedItem = Object.assign({}, item);
        
        this.price = parseFloat(item.price);
        //alert(item.service)
        if(item.service != null){

          this.service_price = parseFloat(this.services[item.service].price);

        }else{

          this.service_price = 0;
        }

        this.dialog = true;

      },
      deleteItem (item) {

        this.editedIndex = this.desserts.indexOf(item);

        this.editedItem = Object.assign({}, item);

        this.dialogDelete = true;

      },
      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {

        if (this.editedIndex > -1) {
         
          if(this.editedItem.status == 3){

              Object.assign(this.desserts[this.editedIndex], this.editedItem)
              this.desserts[this.editedIndex].in_out = 'Cancelada';

          }else if(this.editedItem.status == 2){

            //Reservation completed

            if(this.editedItem.payment_method_id == null){
              this.snackbar = true;
              this.snack_text = 'Debe marcar un metodo de pago para finalizar la reservación';
              return false;
            }
            
            if(!this.user_is_admin){

              this.desserts.splice(this.editedIndex, 1);

            }else{

              //this.editedItem.reception_date = this.aux_desserts[this.editedIndex].reception_date;
              Object.assign(this.desserts[this.editedIndex], this.editedItem)
              this.desserts[this.editedIndex].in_out = 'Entregado';
            }

          }else if(this.editedItem.status == 1){
                
            
            //this.editedItem.reception_date = '';
            //this.editedItem.devolution_date = this.aux_desserts[this.editedIndex].devolution_date;

            if(this.editedItem.receiver_car_driver == this.editedItem.devolution_car_driver){

              Object.assign(this.desserts[this.editedIndex], this.editedItem);
              this.desserts[this.editedIndex].in_out = 'OUT';
            }else{
              if(!this.user_is_admin){

                this.desserts.splice(this.editedIndex, 1);
              }else{
                Object.assign(this.desserts[this.editedIndex], this.editedItem);

              }
              
            }

          }else if(this.editedItem.status == 0){
              Object.assign(this.desserts[this.editedIndex], this.editedItem)
              this.desserts[this.editedIndex].in_out = 'IN';

          }

          

          if(this.aux_devolution_date != null && this.aux_devolution_time != null){
            this.editedItem.devolution_date = this.aux_devolution_date+' '+this.aux_devolution_time;
            

            this.desserts[this.editedIndex].devolution_date = this.aux_devolution_date + ' ' + this.aux_devolution_time;
          }

          this.axios.post(API('modify_reservation'),this.editedItem)
          .then(response=>{
            console.log(response.data.messages[1])
            this.snackbar = true;
            this.snack_text = response.data.messages[0];
            
          })
          .catch((e) => {

            console.log(e.response)
            this.snackbar = true;
            this.snack_text = 'Uno de los campos no fue llenado correctamente';
            
          });
        } else {
          this.desserts.push(this.editedItem)
        }
        this.aux_devolution_time = '';
        this.aux_devolution_date = '';
        this.close()
      },
    },
    beforeDestroy(){
      this.$app.drawer_is_displayed = false;
    }
  }
</script>
<style>
  .cancelled{
    background:#EF9A9A;
  }
  .out{
    background:#1DE9B6;
  }
  .delivered{
    background:#40C4FF;
  }

</style>